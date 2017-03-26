console.log("radi");

$('a[href^="#"][href!="#"]').anchorlink({

  // animation speed in milliseconds
  timer : 800,

  // scroll to hash in URL when loading the page
  scrollOnLoad : true,

  // top offset in pixels
  offsetTop : 0,

  // CSS class added to the scroll destination
  focusClass : 'js-focus',

  // before/after scroll callbacks
  // before <a href="http://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: function() {},
  // afterScroll : function() {}

});
