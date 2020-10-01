# Menu

The `oui-menu` element is used for showing a popup dialog to the user.
Here is an example structure:

- `details.oui-menu` is used as the container to reveal or hide the menu
  - `summary.oui-bubble` is the button to open and close it
  - `ul.bubble` is the menu content
    - `li`
      - `a` This is the link for the button's action it has the hover and focus effects

## Additional scripts

These scripts give support for the focus effects when the user tabs around and adds the keyboard shortcuts for navigating and opening/closing the dialog. They only need to be included once per page.

```html
<script src="https://cdn.jsdelivr.net/gh/SamsungInternet/OneUI-Web@master/oui-css/scripts/polyfill/focus-visible.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/SamsungInternet/OneUI-Web@master/oui-css/scripts/oui.js" defer></script>
```

## Example of a Menu

<script src="https://cdn.jsdelivr.net/gh/SamsungInternet/OneUI-Web@master/oui-css/scripts/polyfill/focus-visible.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/SamsungInternet/OneUI-Web@master/oui-css/scripts/oui.js" defer></script>

<details class="oui-menu">
    <summary tabindex="0" class="oui-button oui-menu-trigger">menu</summary>
    <ul class="oui-bubble oui-frosted">
        <li class="oui-overlay-bubble-item">
            <a href="#">Menu Item 1</a>
        </li>
        <li class="oui-overlay-bubble-item">
            <a href="#">A 2nd item</a>
        </li>
        <li class="oui-overlay-bubble-item">
            <a href="#">Third item</a>
        </li>
        <li class="oui-overlay-bubble-item">
            <a href="#">The last item</a>
        </li>
    </ul>
</details>

```html
<script src="https://cdn.jsdelivr.net/gh/SamsungInternet/OneUI-Web@master/oui-css/scripts/polyfill/focus-visible.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/SamsungInternet/OneUI-Web@master/oui-css/scripts/oui.js" defer></script>

<details class="oui-menu">
    <summary tabindex="0" class="oui-button oui-menu-trigger">menu</summary>
    <ul class="oui-bubble oui-frosted">
        <li class="oui-overlay-bubble-item">
            <a href="#">Menu Item 1</a>
        </li>
        <li class="oui-overlay-bubble-item">
            <a href="#">A 2nd item</a>
        </li>
        <li class="oui-overlay-bubble-item">
            <a href="#">Third item</a>
        </li>
        <li class="oui-overlay-bubble-item">
            <a href="#">The last item</a>
        </li>
    </ul>
</details>
```
