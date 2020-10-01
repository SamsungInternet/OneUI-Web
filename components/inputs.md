# Inputs

Here's all the input related component that One UI Web supports.

## Accesibility

In order to make sure that inputs are accesible, as WCAG recommends, remember to:

- Make your inputs adaptable: In order to create content that can be presented in different ways (for example simpler layout) without losing information or structure, add text to the input element's associated label that describes the purpose or function of the control. 
- Help users avoid and correct mistakes: Add the attribute `for` in `<label>` and `id` in `<input>`
- When you are using forms, be aware to use `<fieldset>` and `<legend>` tags to group and associate related form controls.


## Checkbox 

<div class="previewCode">
    <div class="preview-item">
        <span style="margin-bottom: 20px;display:block;">Preview:</span>
        <object title="Phone containing an example of the current component" data="examples/input-checkbox.html" type="text/html" style="">
        </object>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<label class="oui-label oui-container-checkbox" for="checkbox-oui">
    <span class="oui-input-text">Checkbox Label</span>
    <input id="checkbox_oui" type="checkbox" class="oui-input-checkbox">
    <span class="oui-input-checkbox-checkmark"></span>
</label>  
```
</div>
</div>


## Radio

<div class="previewCode">
    <div class="preview-item">
        <span style="margin-bottom: 20px;display:block;">Preview:</span>
        <object title="Phone containing an example of the current component" data="examples/input-radio.html" type="text/html" style="">
        </object>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<label class="oui-label oui-container-radio" for="radio-oui">
    <input id="radio-oui" type="radio" class="oui-input-radio" name="radio" value="radio1">
    <span class="oui-input-text">Radio label</span>
    <span class="oui-input-radio-checkmark"></span>
</label>
```
</div>
</div>

## Slider / Range

<div class="previewCode">
    <div class="preview-item">
        <span style="margin-bottom: 20px;display:block;">Preview:</span>
        <object title="Phone containing an example of the current component" data="examples/input-slider.html" type="text/html" style="">
        </object>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<label class="oui-label oui-container-slider" for="slider-oui">
    <span>Slider</span>
    <input id="slider-oui" type="range" class="oui-input-slider" name="points" min="0" max="10">
</label>
```
</div>
</div>


## Switch

<div class="previewCode">
    <div class="preview-item">
        <span style="margin-bottom: 20px;display:block;">Preview:</span>
        <object title="Phone containing an example of the current component" data="examples/input-switch.html" type="text/html" style="">
        </object>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<label class="oui-label oui-container-toggle" for="switch-oui">
    <input id="switch-oui" type="checkbox" class="toggle">
    <span class="toggle-slider"></span>
    <span>Toggle Switch</span>
</label>
```
</div>
</div>

## Buttons

Creating a button is easy, you just need to add the ```oui-button``` class to your input:

### Default button

<div class="previewCode">
    <div class="preview-item">
        <span style="margin-bottom: 20px;display:block;">Preview:</span>
        <object title="Phone containing an example of the current component" data="examples/input-button.html" type="text/html" style="">
        </object>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<input type="button" value="button" class="oui-button">
```
</div>
</div>

### Active button
Same as for the default button but we have added the ```oui-button--active``` class:

<div class="previewCode">
    <div class="preview-item">
        <span style="margin-bottom: 20px;display:block;">Preview:</span>
        <object title="Phone containing an example of the current component" data="examples/input-button-active.html" type="text/html" style="">
        </object>
    </div>
    <div class="code-item">
        <span style="margin-bottom: 20px;display:block;">Code:</span>

```html
<input type="button" value="Active button" class="oui-button oui-button--active">
```

</div>
</div>