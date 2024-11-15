function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

function transformImages(content) {
  // Only match when what's contained in the <p> tags
  // is <img> or <br> tags
  const imageGroupRegex = /<p>((<img .*?>(?:<br>\s*)?)+)<\/p>/;
  const imageGroup = content.match(imageGroupRegex)
  if (imageGroup == null) {
    return content
  }

  // Now add .grid-item divs to each image tag
  const imageTagRegex = /<img src=(".+?").*?>/g;
  const transformedImageTags = imageGroup[1].replace(imageTagRegex, (match, imgSrc) => {
    return `<div class="grid-item"><a href=${imgSrc} class="glightbox">${match}</a></div>`
  })

  // Enclose everything inside .grid divisions
  const imageGrid = `<div class="grid">\n`.concat(transformedImageTags, `\n</div>\n`)

  transformedContent = content.replace(imageGroupRegex, imageGrid)

  return transformedContent
}

function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  // Custom transform to wrap consecutive <img> tags into a grid
  eleventyConfig.addTransform("imageGridTransform", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return transformImages(content)
    }

    return content; // Return unmodified content if not HTML
  });
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
