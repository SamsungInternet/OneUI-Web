# Toast

The ```oui-toast``` allows you to create a toast that looks like the native of Android Toast.


Here is the structure: 
- `oui-toast` is the container of the whole toast
    - `oui-toast-text` is the text that will be displayed in the toast

```
<div class="oui-toast">
    <span class="oui-toast-text">Hello this is a toast</span>
</div>
```

## Simple toast:

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
            <object id="phone-screen" data="examples/toast.html" type="text/html" style="">
            </object>
        </div>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<div class="oui-toast">
    <span class="oui-toast-text">Hello this is a toast</span>
</div>
```
</div>

</div>
