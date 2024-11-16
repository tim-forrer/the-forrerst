---
{"dg-note-icon":1,"dg-publish":true,"permalink":"/Zettelkasten/How to add masonry and gLightbox to Obsidian Digital Garden/","dgPassFrontmatter":true,"noteIcon":1,"created":"2024-11-16T15:54:53.415+09:00","updated":"2024-11-16T16:22:03.233+09:00"}
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

The first slot we'll use is the one at `components/user/notes/head`, here you can add a `.njk` template (call it whatever you like but a helpful name like `masonry.njk` might be useful) that adds the Masonry plugin. If you want, it can just be a single line:
```js
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>
```
We also need to use the [imagesLoaded](https://imagesloaded.desandro.com/) library to force Masonry to wait until *after* our images have loaded before it tries to arrange them. So add another line here as well.

```js
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>
<script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.js"></script>
```

# Modifying 11ty's build pipeline
