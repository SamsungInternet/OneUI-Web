# Tab

The ```oui-tab``` element is used for navigation. It displays as a menu that stick to the bottom of the screen.

Here is the structure used:
- `oui-tab` as the container of the whole element
    - `oui-tab-link` used for the links

You can also use `oui-tab-link--active` to add contrast to the active tab.

## Simple Tab Example:

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
            <object id="phone-screen" data="examples/tab.html" type="text/html" style="">
            </object>
        </div>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<nav class="oui-tab">
    <a href="#" class="oui-tab-link">1</a>
    <a href="#" class="oui-tab-link">2</a>
    <a href="#" class="oui-tab-link oui-tab-link--active">3</a>
</nav>   
```
</div>

</div>


