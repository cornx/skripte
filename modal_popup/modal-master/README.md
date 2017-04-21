# modal
Lightweight JS modal/popup box library.

[Live demo](http://s-richards.github.io/modal)

## How It Works

1. Add the following data attributes to your HTML markup:

* __data-modal-open__: Add to element that triggers modal. Use the HTML id of the modal as the value of the data-modal-open attribute.
* __data-modal-animation-duration__: Add to the modal with the value set to the amount of time in ms that any opening transitions/animations take. If no transitions occur then this attribute is not needed.
* __data-modal-dismiss__: Add to elements that trigger dismissal of a modal. No value is necessary.
* __data-modal-autofocus__: Add to element that should be autofocused when modal is opened. No value is necessary.
* __data-modal-contain-tabs__: Add to modal element with value of 'false' if you do not want tabs to be restricted to focusable elements within the modal while it is open.
* __data-modal-disable-scroll__: Add to modal element with value of 'false' if you do not want scrolling to be frozen while the modal is open.

Markup example:

```html
  <button data-modal-open="some-modal">Open modal</button>
```

```html
  <div class="modal" id="some-modal" data-modal-animation-duration="300">
    <header>
      <h2>Sign in</h2>
    </header>
    <div class="modal-content">
      <form name="signin">
        <input type="email" name="email" id="email" placeholder="Email" data-modal-autofocus>
        <label for="email">Email</label>
        <input type="password" name="password" id="password" placeholder="Password">
        <label for="password">Password</label>
        <input type="submit" value="Sign in">
      </form>
      <button data-modal-dismiss>Close modal</button>
    </div>
  </div>
```

2. Include modal.js on your page:

```html
<script src="path/modal.js"></script>
```

3. Call the initialization function:

```html
  <script>
    modal();
  </script>
```

When a modal is opened both the active modal as well as the body element have the class `open-modal` added to them. This class is removed when the modal is closed.

## Browser support:
* Google Chrome
* Mozilla Firefox
* IE 10+
