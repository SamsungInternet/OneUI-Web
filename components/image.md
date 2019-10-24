# Image

Image elements and decoration in OneUI (rounds the corners).

```
<img src="kitten.png" class="oui-image-cover" alt="cute kitten sitting on a couch">
```

# Image Caption

Image caption are used to add a description under an image

```
<p class="oui-image-cover-caption">Hey this is an example</p>
```

# Accesibility

Some of the techniques that we recommend based on W3C to make images accesible are the following:

- All img elements should have an alt attribute which is not as empty string.

- Choose appropiate text alternatives so users can understand your content. If an image is [decorative](https://www.w3.org/WAI/tutorials/images/decorative/), alt attribute should be empty (alt="")

- If you are using SVG ensure that img elements with an svg source includes the role="img" attribute.