<img src="https://raw.githubusercontent.com/SamsungInternet/OneUI-Web/gh-pages/_media/logo-themes.png" style="margin:auto;display:block" alt="One UI Web Themes logo">


## Theme Structure

Themes in One UI Web are `CSS` files. The official themes are composed of a palette following by the variables from which the One UI Controls take their colors.

The theme CSS file is entirely composed out of CSS `Custom Properties`. This allows for the user interface to be easily updated when new colors or variables for new controls are added. 

For reference, this is the basic structure of a theme. It has a palette, and then distributes these colors among the main theme variables (such as text and primary accents), background colors, accent colors, colors on top of these previous backgrounds, and border colors.

```css
:root{
    /*color palette*/
    --palette-var1: #FFFFFF;
    --palette-var2: #EEEEEE;
    ...
    --palette-varn: #000000;

    /*main theme variables*/
    --variable1: var(--palette-var1);
    --variable2: var(--palette-var2);
    ...
    --variablen: var(--palette-varn);
    
    /*backgrounds*/
    --background1: var(--palette-var1);
    ...
    --backgroundn: var(--palette-varn);
    
    /*accents*/
    --accent1: var(--palette-var1);
    ...
    --accentn: var(--palette-varn);

    /*on top colors*/
    --on-variable1: var(--palette-var1);
    ...
    --on-variablen: var(--palette-varn);
        
    /*borders*/
    --border1: var(--palette-var1);
    ...
    --bordern: var(--palette-varn);
}
```
All these variables are shared among all One UI Web controls, making themes consistent and familiar. 

## Included Themes

Similar to One UI on Galaxy devices, there are two main themes included with One UI Web toggled by the activation of "Night" mode in a Galaxy device.

<img src="https://raw.githubusercontent.com/SamsungInternet/OneUI-Web/gh-pages/_media/night-mode-settings.jpg" style="margin:auto;display:block">

For consistency with other similar web platform trends, we have called these two themes `light` and `dark` theme. These themes can be found in the `themes` folder. 

If the browser supports `prefers-color-scheme` and the OS is set to a dark theme, One UI Web will attempt to automatically set the dark theme.

```css
@import "themes/oui-light-theme.css" screen;
@import "themes/oui-dark-theme.css" screen and (prefers-color-scheme: dark); /*Auto load dark theme*/
```

### Light Theme

The One UI Web light theme is based on the default theme for One UI. It is the theme that the OS uses when "Night" mode is turned off. As a reference, you can see the light theme [here](https://github.com/SamsungInternet/OneUI-Web/blob/master/oui-css/themes/oui-light-theme.css "One UI Web light theme").

<img src="https://raw.githubusercontent.com/SamsungInternet/OneUI-Web/gh-pages/_media/lighttheme-prev.jpg" alt="Light Theme Controls Preview" style="margin:auto;display:block">

### Dark Theme

The One UI Web dark theme is based on the One UI "Night mode" present in Galaxy Devices. As a reference, you can see the dark theme [here](https://github.com/SamsungInternet/OneUI-Web/blob/master/oui-css/themes/oui-dark-theme.css "One UI Web dark theme").

<img src="https://raw.githubusercontent.com/SamsungInternet/OneUI-Web/gh-pages/_media/darktheme-prev.jpg" alt="Dark Theme Controls Preview" style="margin:auto;display:block">


## One UI Web Theme Creator

One UI Web theme's versatility comes from the use of Custom Properties. Unlike other ways of implementing variable-like elements in CSS preprocessors, these can change dynamically. We are taking advantage of this flexibility and allowing the creation of totally custom themes for your applications. If you want an application that is consistent with the look and feel of a Galaxy device, but want to make the controls follow your brand's colors, you can use the One UI Web Theme Creator to generate a CSS that you can specify in the main `oui.css` file.

<img src="https://raw.githubusercontent.com/SamsungInternet/OneUI-Web/gh-pages/_media/oui-theme-creator-ss.jpg" style="margin:auto;display:block" alt="One UI Web Theme Creator">

## Custom Themes Step by Step

