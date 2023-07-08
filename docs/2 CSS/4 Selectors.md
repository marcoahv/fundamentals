---
sidebar_position: 4
---

# ADVANCED SELECTORS

---

<h2>23 Targeted Selectors</h2>

<h3>1. descendent selector (div p {})</h3>

<h3>2. Direct child (div > p {}) (if div is a direct parent of p)</h3>

<h3>3. directly after an element (div + p {}) (if p is right after div)</h3>

<h3>4. add attributes as selectors (`a[target] {}`) (target attribute)</h3>

<h3>5. reference the actual value (`a[target='_blank'] {}`) (target attribute)</h3>

<h3>6. specific attribute values</h3>

---

<h2>24 nth-child Pseudo Selectors</h2>

<h3>1. first child Pseudo Selectors (`li:first-child {}`)</h3>

<h3>2. last-child Pseudo Selectors (`li:last-child {}`)</h3>

<h3>3. nth-child Pseudo Selector</h3>

- nth is basically like kind of like a placeholder
- nth-child selector matches every element that is the nth child, regardless of type, of its parent
- Position 3 `li:nth-child(3)`
- Every 3rd `li:nth-child(3n + 0)`
- Now this formula that we passed in here is the counter
- Every 3rd after 7 `li:nth-child(3n + 7)`
- every odd `li:nth-child(odd) {}`
- every even `li:nth-child(even) {}`

---

<h2>25 before & after Pseudo Selectors</h2>

<h3>1. the before and after pseudo selector</h3>

- actually allows us to insert content before or after an element

<h3>2. put an asterisk after the label</h3>

```css
.is-required:after {
  content: '*';
  color: red;
  padding-left: 2px;
}
```

<h3>3. put an asterisk before the label</h3>

```css
.is-required:before {
  content: '*';
  color: red;
  padding-left: 2px;
}
```

<h3>4. in an image overlay</h3>

- Now another really practical use for before is to do an overlay in an image overlay.

```css
header:before {
  content: '';
  background: url('https://source.unsplash.com/1600x900/?nature,water') no-repeat center
    center/cover;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
```

---
