# Inputs

We got a lots of custom input.


## Text 



## Checkbox 

**TODO**
Add preview

```
<label class="oui-label oui-container-checkbox" for="checkbox_oui">
    Checkbox Label        
    <input id="checkbox_oui" type="checkbox" class="oui-input-checkbox">
    <span class="oui-input-checkbox-checkmark"></span>
</label>  
```


## Radio

**TODO**
Add preview

```
<label class="oui-label oui-container-radio" for= "radio-oui">
    <input id="radio-oui" type="radio" class="oui-input-radio" name="radio" value="radio1">
    <span class="oui-input-text">Radio label</span>
    <span class="oui-input-radio-checkmark"></span>
</label>
```

## Range

**TODO**
Add preview

```
<label class="oui-label oui-container-slider" for="oui-range">
    <span>Range</span>
    <input id="oui-range" type="range" class="oui-input-slider" name="points" min="0" max="10">
</label>
```


## Switch

**TODO**
Add preview

```
<label class="oui-label oui-container-toggle" for="oui-range">
    <input id="oui-range" type="checkbox" class="toggle">
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

### Accesibility

In order to make sure that inputs are accesible, as WCAG recommends, remember to:

- Make your inputs adaptable: In order to create content that can be presented in different ways (for example simpler layout) without losing information or structure, add text to the input element's associated label that describes the purpose or function of the control. 
- Help users avoid and correct mistakes: Add the attribute "for" in <label>  and "id" in <input>
- When you are using forms, be aware to use <fieldset> and <legend> tags to group and associate related form controls.