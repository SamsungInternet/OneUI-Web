# Dialog

The `oui-dialog` element is used for showing a popup dialog to the user.
Here is an example structure:

- `oui-dialog` is used as the container
    - `oui-dialog-header` is the header of the popup, can be used to put a title for example
    - `oui-dialog-description` is the main content
    - `oui-dialog-action` is the container for the actions
        - `oui-dialog-action-link` is used as a button/link
        - `oui-dialog-divider` is used as a divider between buttons and links

We also recomend adding the `oui-dialog-mask` element, wich will prevent the page to be scroll and dim the background.

## Example of a Dialog:

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
            <object id="phone-screen" title="Phone containing an example of the current component" data="examples/dialog.html" type="text/html" style="">
            </object>
        </div>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<div class="oui-dialog-mask"></div>
<div class="oui-dialog">
    <div class="oui-dialog-header">
        Hey
    </div>
    <div class="oui-dialog-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="oui-dialog-action">
        <a href="#" class="oui-dialog-action-link">Close</a>
        <div class="oui-dialog-divider"></div>
        <a href="#" class="oui-dialog-action-link">More info</a>
    </div>
</div>
```
</div>
</div>