<img src="../_media/logo-themes.png" style="margin:auto;display:block" alt="One UI Web Themes logo">


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

<img src="../_media/night-mode-settings.jpg" style="margin:auto;display:block">

For consistency with other similar web platform trends, we have called these two themes `light` and `dark` theme. These themes can be found in the `themes` folder. 

### Light Theme

The One UI Web light theme is based on the default theme for One UI. It is the theme that the OS uses when "Night" mode is turned off.

### Dark Theme

The One UI Web dark theme is based on the One UI "Night mode" present in Galaxy Devices. 

## One UI Web Theme Creator

