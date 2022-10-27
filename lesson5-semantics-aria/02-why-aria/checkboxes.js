(function() {
  'use strict';

  // Define values for keycodes
  var VK_ENTER      = 13;
  var VK_SPACE      = 32;
  var VK_LEFT       = 37;
  var VK_UP         = 38;
  var VK_RIGHT      = 39;
  var VK_DOWN       = 40;

  // Helper function to convert NodeLists to Arrays
  function slice(nodes) {
    return Array.prototype.slice.call(nodes);
  }

  function Checkbox(el) {
    this.el = el;

    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.el.addEventListener('click', this.toggle.bind(this));

    //Initialize role and aria-checked state
    //The course solution propose add it in js,
    //but I choose insert in html
    // this.el.setAttribute('role', 'checkbox');
    // if(this.el.hasAttribute('checked'))
    //   this.el.setAttribute('aria-checked', 'true');
    // else this.el.setAttribute('aria-checked', 'false');
  }

  Checkbox.prototype.handleKeyDown = function(e) {
    switch(e.keyCode) {
      case VK_ENTER:
      case VK_SPACE: {
        this.toggle();
        break;
      }
    }
  };

  Checkbox.prototype.toggle = function() {
    if (this.el.hasAttribute('checked') || this.el.ariaChecked == true) {
      this.el.removeAttribute('checked');
      this.el.ariaChecked = false;
  }
    else {
      this.el.setAttribute('checked', '');
      this.el.ariaChecked = true;
    }
  };

  var checkboxes = slice(document.querySelectorAll('.checkbox'));
  for (var checkbox of checkboxes)
    checkbox.logic = new Checkbox(checkbox);

}());
