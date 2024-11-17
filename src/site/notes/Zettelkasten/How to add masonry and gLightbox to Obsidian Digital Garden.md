---
{"dg-note-icon":2,"dg-publish":true,"permalink":"/Zettelkasten/How to add masonry and gLightbox to Obsidian Digital Garden/","dgPassFrontmatter":true,"noteIcon":2,"created":"2024-11-16T15:54:53.415+09:00"}
---

>[!info] Under construction
> I'm still working on this note but even incomplete it might have some useful information.
> It might also have no useful information - feel free to make your own judgment.

On some pages, I've added photos. If you click on a photo, rather than taking you directly via a link to the photo, it'll open the photo in an expanded modal (called a lightbox).
If there are a bunch of images, they are automatically arranged to fit together in a somewhat more space-efficient manner, and when opening an image you can click/swipe to view the others.

This behaviour is not native to Obsidian Digital Garden but thanks to the highly hackable way that it is designed, it is quite straightforward it implement (if you already know how anyway...).

>[!danger] Read the docs!
> Speaking from experience, I would *highly* recommend reading the following pages.
> It may save you many hours (or in some cases days...) of work.
> - https://dg-docs.ole.dev/advanced/adding-custom-components/
> - https://dg-docs.ole.dev/advanced/configure-build-pipeline/

# Adding plugins
Images are arranged by a plugin called [Masonry](https://masonry.desandro.com/). That images open into a lightbox is managed by [gLightbox](https://biati-digital.github.io/glightbox/).

>[!warning]- gLightbox alternatives
> I found two other javascript libraries that perform similar roles to gLightbox, [lightbox2](https://lokeshdhakar.com/projects/lightbox2/) and [PhotoSwipe](https://photoswipe.com/).
> 
> In principle, I don't believe there is anything that would prevent you from using these instead of gLightbox.
> 
> But I couldn't do it.
> 
> Lightbox for some reason would not recalculate image container widths correctly and PhotoSwipe requires you to input image widths and heights which seemed a pain. Also I couldn't even get the Getting Started example to work so yeah, choose alternatives at your own risk.

To get the behaviour desired onto our images, we need to add these plugins to our websites. This is done through slots - if you followed my advice and read the docs you'll know what these are.

## Masonry
### Importing libraries
The first slot we'll use is the one at `user/common/head`, here you can add a `.njk` template (call it whatever you like but a helpful name like `masonry.njk` might be useful) that adds the Masonry plugin. If you want, it can just be a single line:
```html
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>
```
We also need to use the [imagesLoaded](https://imagesloaded.desandro.com/) library to force Masonry to wait until *after* our images have loaded before it tries to arrange them. So add another line here as well.

```html
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>
<script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.js"></script>
```

### Adding script
The second slot we need is the one at `user/common/footer`, which places the contained `.njk` templates at the end of the file. Again, the name of the file is irrelevant, it just needs to end with `.njk`.

```html
<script>
  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    gutter: 10,
  });
  imagesLoaded(elem).on('progress', () => {
    msnry.layout();
  })

const lightbox = GLightbox()
</script>
```

## gLightbox
Adding gLightbox is done by almost exactly the same method. You can use the same `.njk` file as earlier to also add gLightbox to the image head, or you can use a separate file here if you'd prefer things to be more modular. Just make sure it's in `user/common/head`.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.3.0/css/glightbox.css"></script>
```

With gLightbox we also have to add a CSS file, which can be requested in this file as well, so that overall the file looks like this.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.3.0/css/glightbox.css"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.3.0/css/glightbox.css"/>
```


# Modifying 11ty's build pipeline
Right that's the easy stuff - the next bit is a little more tricky. Basically we want 11ty to recognise strings that link to images, and convert these strings into ones that Masonry and gLightbox will recognise they need to do stuff with.
The recognition is all handled using Regular Expressions, and everything else is fairly simple string manipulation.

```js
function transformImages(content) {
  // Only match when what's contained in the <p> tags
  // is <img> or <br> tags
  const imageGroupRegex = /<p>((<img .*?>(?:<br>\s*)?)+)<\/p>/;
  const imageGroup = content.match(imageGroupRegex);

  // If there is no match then don't touch anything.
  if (imageGroup == null) {
    return content
  }
  
  // Now add .grid-item divs to each image tag for Masonry
  // and class="glightbox" to hyperlinks for gLightbox
  const imageTagRegex = /<img src=(".+?").*?>/g;
  const transformedImageTags = imageGroup[1].replace(imageTagRegex, (match, imgSrc) => {
    return `<div class="grid-item"><a href=${imgSrc} class="glightbox">${match}</a></div>`
  });
  
  // Enclose everything inside .grid divisions for Masonry
  const imageGrid = `<div class="grid">\n`.concat(transformedImageTags, `\n</div>\n`);
  
  transformedContent = content.replace(imageGroupRegex, imageGrid);
  return transformedContent
}
```

  This function can be placed in `src/helpers/userSetup.js` - but just putting it here won't call it as part of the pipeline. When you open this file you'll notice two empty functions exist here already, `userMarkdownSetup` and `userEleventySetup`. Modify `userEleventySetup` so it looks like the following.
```js
function userEleventySetup(eleventyConfig) {
// Custom transform to wrap consecutive <img> tags into a grid
  eleventyConfig.addTransform("imageGridTransform", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return transformImages(content)
    }
    return content; // Return unmodified content if not HTML
  });
}
```

This adds function into the pipeline ensuring that content is transformed as required.

That's it! Hopefully this has shown just how amazingly hackable Obsidian Digital Garden was designed to be. There's plenty more you can do as well, such as making more advanced templates, or more complicated transforms, but I think as much as possible it's always best to keep things as simple as possible unless there's a clear need for change on your website.

I'm terrible at sticking to that advice though...