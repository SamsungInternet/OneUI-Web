# Image

The `oui-image-cover` element will simply apply the One UI style to your images.

You can also use the `oui-image-cover-caption` element that can be used to add a caption on top or under an `oui-image-cover`.
Take a look at the example !

## Example of image:

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
            <object id="phone-screen" title="Phone containing an example of the current component" data="examples/image.html" type="text/html" style="">
            </object>
        </div>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<div class="oui-bubble">
    <img alt="Kitten sleeping" src="kitten.png"
        class="oui-image-cover"
        alt="cute kitten sitting on a couch"/>
    <p class="oui-image-cover-caption">Hey this is an example</p>
</div>
```

</div>
</div>

# Accessibility

Some of the techniques that we recommend based on W3C to make images accesible are the following:

- All img elements should have an alt attribute which is not as empty string.

- Choose appropiate text alternatives so users can understand your content. If an image is [decorative](https://www.w3.org/WAI/tutorials/images/decorative/), alt attribute should be empty (alt="")

- If you are using SVG ensure that img elements with an svg source includes the role="img" attribute.
