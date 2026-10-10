# Vitalik OS portfolio

A one-page portfolio for Abdul Hakim Aremeyaw (Vitalik) that looks like a small desktop operating system. Click an icon and a window opens with content from my CV: About, Projects, Experience or Contact. Built for the Web Technologies synthesis using only Lessons 1-9.

## How to open it

1. Clone or download this repository.
2. Open `index.html` in a browser. No server, build step or library is needed.

Without JavaScript the four windows stay visible, so the content is still readable.

## Lesson map

| File | Lessons | What it shows |
| --- | --- | --- |
| `index.html` | 2, 3, 4, 5 | Metadata, semantic sections, table with caption, description list, labelled form, links |
| `style.css` | 6, 7 | Selectors and link states, box-sizing reset, flexbox, grid, `calc()`, media query |
| `script.js` | 5, 8, 9 | Arrays and objects, functions and loops, `getElementById`, `createElement`, form validation |
| `avatar.svg` | 4 | Image with `alt`, `width` and `height` |

## Accessibility notes

- One `h1`, then `h2` per window and `h3` for lists inside a window.
- Every icon and close control is a real `<button>`, so the keyboard reaches it with Tab and Enter.
- Every form field has a `<label for>`; the table has a `<caption>`; the avatar has `alt`.
- Dark text on off-white windows and white text on the dark bars keep strong contrast.
