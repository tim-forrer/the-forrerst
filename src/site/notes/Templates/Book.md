---
{"title":"{{title}}","creators":"<%=book.authors.map(author=>`\\n  - \"[[${author}]]\"`).join('')%>","cover":{"{ coverSmallUrl }":null},"status":"unread","owned":false,"started":{"{ DATE:YYYY-MM-DD }":null},"finished":null,"isbn":{"{ isbn13 }":null},"rating":null,"dg-publish":true,"dg-note-icon":"book","permalink":"/Templates/Book/","dgPassFrontmatter":true,"noteIcon":"book","created":"2024-11-18T15:00:58.152+09:00"}
---


<%* if (tp.frontmatter.cover && tp.frontmatter.cover.trim() !== "") { tR += `![cover|150](${tp.frontmatter.cover})` } %>