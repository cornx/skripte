;((root, factory) => {


  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.modal = factory();
  }


})(this, () => {

  'use strict';

  let currentFocusedEl;
  let liberateScroll;
  let liberateTabs;




  const closeModal = (elsWithOpenClass) => {
    const modal = document.body.querySelector('.modal-open');
    const delay = modal && +modal.getAttribute('data-modal-animation-duration') ? +modal.getAttribute('data-modal-animation-duration') : 0;

    for (let i = 0; i < elsWithOpenClass.length; i++) {
      elsWithOpenClass[i].className = elsWithOpenClass[i].className.replace(/\s*modal\-open\s*/,' ').trim();
    }

    setTimeout(() => {
      if (liberateScroll) {
        liberateScroll();
        liberateScroll = null;
      }

      if (liberateTabs) {
        liberateTabs();
        liberateTabs = null;
      }

      if (currentFocusedEl && currentFocusedEl.tabIndex > -1) {
        currentFocusedEl.focus();
        currentFocusedEl = null;
      }
    }, delay);
  };




  const closest = (el, selector) => {
    if (!el || el.nodeType !== 1 || typeof selector !== 'string') {
      return null;
    }

    const targets = Array.prototype.slice.call(document.querySelectorAll(selector));

    while (targets.indexOf(el) === -1) {
      if (el.nodeName === 'HTML') {
        return null;
      }
      el = el.parentElement;
    }

    return el;
  };




  const containTabs = (parentEl, focusableEls, autofocus) => {

    const addKeyDownListener = () => {
      document.addEventListener('keydown', adjustTab, false);
    };

    // When no element has focus and tab is pressed
    const adjustTab = (e) => {
      const key = e.which || e.keyCode || 0;

      // Tab press
      if (key === 9) {
        e.preventDefault();

        // Without shift key -- focus on first focusable element
        if (!e.shiftKey) {
          firstFocusableEl.focus();
        }

        // With shift key -- focus on last focusable element
        if (e.shiftKey) {
          lastFocusableEl.focus();
        }

        document.removeEventListener('keydown', adjustTab, false);
      }
    };

    // Remove event listeners that are used to contain tabs
    const liberate = () => {
      document.removeEventListener('keydown', adjustTab, false);
      firstFocusableEl.removeEventListener('keydown', redirectFocus, false);
      lastFocusableEl.removeEventListener('keydown', redirectFocus, false);
      parentEl.removeEventListener(clickEvent, addKeyDownListener, false);
    };

    const redirectFocus = function(e) {
      const isFirst = this === firstFocusableEl;
      const key = e.which || e.keyCode || 0;

      // Redirect from last focusable element to first on tab and from first to last on shift + tab
      if (key === 9 && (isFirst ? e.shiftKey : !e.shiftKey)) {
        e.preventDefault();
        if (isFirst) {
          lastFocusableEl.focus();
        } else {
          firstFocusableEl.focus();
        }
      }
    };

    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    if (!autofocus) {
      document.addEventListener('keydown', adjustTab, false);
    }

    lastFocusableEl.addEventListener('keydown', redirectFocus, false);

    firstFocusableEl.addEventListener('keydown', redirectFocus, false);

    parentEl.addEventListener(clickEvent, addKeyDownListener, false);

    return liberate;
  };




  const disableScroll = (modalContainer) => {
    const body = document.body;
    const bodyOverflow = window.getComputedStyle(body).overflow;
    const bodyPaddingRight = window.getComputedStyle(body).paddingRight;
    const adjustPadding = !isMobile && document.documentElement.scrollHeight > window.innerHeight;
    const bodyStyleAttr = {
      padding: body.style.paddingRight.length ? body.style.paddingRight : false,
      overflow: body.style.overflow.length ? body.style.overflow : false
    };

    // Add padding-right equal to width of scrollbar if not mobile device and scroll bar is visible
    if (adjustPadding) {
      body.style.paddingRight = parseFloat(bodyPaddingRight) + getScrollbarWidth() + 'px';
    }

    modalContainer.style.overflowY = 'scroll';
    body.style.overflow = 'hidden';

    const liberate = () => {
      if (adjustPadding) {
        body.style.paddingRight = bodyStyleAttr.padding ? bodyPaddingRight : '';
      }

      modalContainer.style.overflowY = '';
      body.style.overflow = bodyStyleAttr.overflow ? bodyOverflow : '';
    };

    return liberate;
  };




  const getFocusableEls = (parentEl) => {
    const focusableEls = Array.prototype.slice.call(parentEl.querySelectorAll('[contenteditable], [tabindex], a[href], area[href], button, iframe, input, select, textarea'));
    let i = focusableEls.length;

    while (i--) {
      if (focusableEls[i].tabIndex < 0 || isNotVisible(focusableEls[i])) {
        focusableEls.splice(i,1);
      }
    }

    return focusableEls;
  };




  // -- https://davidwalsh.name/detect-scrollbar-width -- //
  const getScrollbarWidth = () => {
    const tempDiv = document.createElement('div');
    let width;

    tempDiv.style.width = '100px';
    tempDiv.style.height = '100px';
    tempDiv.style.overflow = 'scroll';
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '-99999999px';

    document.body.appendChild(tempDiv);

    width = tempDiv.offsetWidth - tempDiv.clientWidth;

    document.body.removeChild(tempDiv);

    return width;
  };




  const init = () => {
    document.addEventListener(clickEvent, toggleModal, false);
  };




  // -- http://detectmobilebrowsers.com/ -- //
  const isMobile = (() => {
    const ua = navigator.userAgent;
    if (/iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua)) {
      return true;
    }
    const a = ua || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
  })();




  const clickEvent = isMobile ? 'touchstart' : 'click';




  const isNotVisible = (el) => {
    const hidden = window.getComputedStyle(el).visibility !== 'visible';
    const notDisplayed = !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);

    return hidden || notDisplayed;
  };




  const openModal = (triggerEl, modalId) => {
    const modal = document.getElementById(modalId);
    const delay = modal && +modal.getAttribute('data-modal-animation-duration') ? +modal.getAttribute('data-modal-animation-duration') : 0;

    if (!modal) {
      return;
    }

    const autofocusEl = modal.querySelector('[data-modal-autofocus]');

    currentFocusedEl = triggerEl;

    modal.className += `${modal.className.length ? ' ' : ''}modal-open`;
    document.body.className += `${document.body.className.length ? ' ' : ''}modal-open`;

    if (modal.getAttribute('data-modal-disable-scroll') !== 'false') {
      liberateScroll = disableScroll(modal);
    }

    // Wait for animation to finish before restricting tabs and focusing on autofocus element
    setTimeout(() => {
      const focusableEls = getFocusableEls(modal);
      const shouldAutofocus = autofocusEl && focusableEls.indexOf(autofocusEl) !== -1;

      if (modal.getAttribute('data-modal-contain-tabs') !== 'false') {
        liberateTabs = containTabs(modal,focusableEls,shouldAutofocus);
      }

      if (shouldAutofocus) {
        autofocusEl.focus();
      }
    }, delay);
  };




  const toggleModal = (e) => {
    const trigger = closest(e.target, '[data-modal-open], [data-modal-dismiss]');

    if (trigger) {
      const elsWithOpenClass = document.getElementsByClassName('modal-open');

      if (!elsWithOpenClass.length) {
        openModal(trigger, trigger.getAttribute('data-modal-open'));
      } else {
        closeModal(elsWithOpenClass);
      }
    }
  };




  return init;

});