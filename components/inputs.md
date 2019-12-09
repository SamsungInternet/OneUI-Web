# Inputs

We got a lots of custom input.


## Text 



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
<label class="oui-label oui-container-checkbox">
    <span class="oui-input-text">Checkbox Label</span>
    <input type="checkbox" class="oui-input-checkbox">
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
<label class="oui-label oui-container-radio">
    <input type="radio" class="oui-input-radio" name="radio" value="radio1">
    <span class="oui-input-text">Radio label</span>
    <span class="oui-input-radio-checkmark"></span>
</label>
```
</div>
</div>

## Range

**TODO**
Add preview

```
<label class="oui-label oui-container-slider">
    <span>Range</span>
    <input type="range" class="oui-input-slider" name="points" min="0" max="10">
</label>
```


## Switch

**TODO**
Add preview

```
<label class="oui-label oui-container-toggle">
    <input type="checkbox" class="toggle">
    <span class="toggle-slider"></span>
    <span>Toggle Switch</span>
</label>
```

## Buttons

### Default button

**TODO**
Add preview

Creating a button is easy, you just need to add the ```oui-button``` class:
```
<input type="button" value="button" class="oui-button">
```

### Active button

**TODO**
Add preview

Same as for the default button but we have added the ```oui-button--active``` class:
```
<input type="button" value="Active button" class="oui-button oui-button--active">
```