# Bubble

The `oui-bubble` element is a grouping component. It provides a border and separation from other elements on the page.
Classes also include styling for titles before the bubble (like contacts in the One UI app) and items inside the bubble (list items).

`oui-bubble` is constructued ad described bellow :
 - `oui-bubble` as the main container
    - `oui-bubble-title` Allows you to define an offseted title inside the container


You can also create lists that way:
- `oui-bubble` as the usual container
    - `oui-overlay-bubble-item` is the title 
    - `ul` and `li` usual list tag
        - `oui-bubble-item` as the container of the item

See some examples down bellow.


## List in a Bubble:

<div  class="previewCode">
    <div class="preview-item">
        <span style="margin-bottom: 20px;display:block;">Preview:</span>
        <div id="phone-container">
            <div id="phone-shadows"></div>
            <div id="phone-sidebutton"></div>
            <div id="phone-ltbutton"></div>
            <div id="phone-lbbutton"></div>
            <div id="phone-camera">
                <div id="phone-lens"></div>
            </div>
            <object id="phone-screen" title="Phone containing an example of the current component" data="examples/bubble-list.html" type="text/html" style="">
            </object>
        </div>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<div class="oui-bubble">
    <p class="oui-overlay-bubble-item">Menu Item 1</p>
    <ul>
        <li class="oui-bubble-item">test</li>
        <li class="oui-bubble-item">test</li>
        <li class="oui-bubble-item">test</li>
    </ul>
</div>
```
</div>

</div>

<hr>

## Random Bubble example :

<div class="previewCode">
    <div class="preview-item">
        <span style="margin-bottom: 20px;display:block;">Preview:</span>
        <div id="phone-container">
            <div id="phone-shadows"></div>
            <div id="phone-sidebutton"></div>
            <div id="phone-ltbutton"></div>
            <div id="phone-lbbutton"></div>
            <div id="phone-camera">
                <div id="phone-lens"></div>
            </div>
            <object id="phone-screen" title="Phone containing an example of the current component" data="examples/bubble-full.html" type="text/html">
                Alternative Content
            </object>
        </div>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<div class="oui-bubble">
    <img src="https://placeimg.com/640/480/any" alt="Banner ranodm image" class="oui-image-cover" alt="">

    <p class="oui-overlay-bubble-item">Menu Item 1</p>
    <ul>
        <li class="oui-bubble-item">test</li>
        <li class="oui-bubble-item">test</li>
        <li class="oui-bubble-item">test</li>
    </ul>

    <label class="oui-label oui-container-checkbox">
        <span class="oui-label">Checkbox Label</span>
        <input type="checkbox" class="oui-input-checkbox">
        <span class="oui-input-checkbox-checkmark"></span>
    </label>
    <label class="oui-label oui-container-toggle">
        <span>Toggle Switch</span>
        <input type="checkbox" class="toggle">
        <span class="toggle-slider"></span>
    </label>

    <a href="" class="oui-button">button test</a>

    <p class="oui-overlay-bubble-item">Menu Item 2</p>
    <label class="oui-label oui-container-slider">
        <span>Range</span>
        <input type="range" class="oui-input-slider" name="points" min="0" max="10">
    </label>
</div>
```
</div>

</div>

<hr>