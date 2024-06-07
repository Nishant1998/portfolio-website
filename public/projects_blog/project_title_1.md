# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Paragraphs & Emphasis

This is a regular paragraph with some **bold text**, *italic text*, ***bold italic text***, and ~~strikethrough~~.

> This is a blockquote. Great for highlighting quotes or notes.

---

## Lists

### Unordered List

* Item One

  * Nested Item

    * Deeply Nested
* Item Two

### Ordered List

1. First
2. Second
3. Third

   1. Sub-item

---

## Task List

* [x] Write Markdown
* [x] Render in React
* [ ] Celebrate 🎉

---

## Links & Images

[OpenAI](https://openai.com)

![Alt text for image](https://placehold.co/600x200?text=Image)

---

## Code

Inline code: `const x = 42;`

### Block Code (with language tag)

```js
// JavaScript
function greet(name) {
  return `Hello, ${name}`;
}
```

```ts
// TypeScript
const hello: string = "world";
```

```python
# Python
def greet(name):
    return f"Hello, {name}"
```

---

## Tables

| Feature        | Description                        | Supported |
| -------------- | ---------------------------------- | --------- |
| Headings       | #, ##, ### etc.                    | ✅         |
| Lists          | Ordered, unordered, task lists     | ✅         |
| Links & Images | Inline markdown or HTML            | ✅         |
| Code Blocks    | With language syntax highlighting  | ✅         |
| Tables         | GitHub-flavored style tables       | ✅         |
| HTML Content   | Only with rehypeRaw plugin enabled | ✅         |

---

## Horizontal Rule

---

## Escaping Characters

Use a backslash to escape special characters: \*this is not italic\*

---

## Emoji (GitHub-style)

🎉 😄 🚀 ✅ 🔥

---

## HTML (Optional — works only with `rehypeRaw`)

<div style="color: red; font-weight: bold;">This is raw HTML.</div>
