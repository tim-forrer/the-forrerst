---
{"dg-publish":true,"permalink":"/Zettelkasten/How to add a ruby markdown parser to Obsidian Digital Garden/","tags":["guide","digital-garden"],"noteIcon":2,"created":"2024-11-25T00:21:46.996+09:00"}
---

For those who use ruby markdown syntax in their notes, a simple guide that allows Obsidian Digital Garden to process that syntax.

# What is ruby text?
Basically, it's some tiny text that goes on top of some normal text, like this: {漢字|かんじ}.

It's especially useful for languages like Japanese or Chinese where it's not obvious how to read a word just from the symbols.

# What's the markdown syntax for ruby?
There isn't an official one, and Obsidian doesn't recognise any out of the box, but there is a plugin [Markdown Furigana](https://github.com/steven-kraft/obsidian-markdown-furigana) that adds it to Obsidian.

The syntax it uses is based off of [markdown-it-ruby](https://github.com/lostandfound/markdown-it-ruby) syntax, which looks {BASE TEXT|TOP TEXT}.

# So how's it done?
Luckily for us, Obsidian Digital Garden uses markdown-it to parse markdown, so it's just a case of installing the plugin in our website repository:
```bash
npm install markdown-it-ruby --save
```

And adding it to our `userMarkdownSetup` found in `src/helpers/userSetup.js`

```js
function userMarkdownSetup(md) {
// The md parameter stands for the markdown-it instance used throughout the site generator.
// Feel free to add any plugin you want here instead of /.eleventy.js

  md.use(require("markdown-it-ruby"))

}
```

Done.