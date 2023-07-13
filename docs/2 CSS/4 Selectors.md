---
sidebar_position: 4
---

# ADVANCED SELECTORS

---

## 23 Targeted Selectors

>

### descendent selector (div p {})

>

### Direct child (div > p {}) (if div is a direct parent of p)

>

### directly after an element (div + p {}) (if p is right after div)

>

### add attributes as selectors (`a[target] {}`) (target attribute)

>

### reference the actual value (`a[target='_blank'] {}`) (target attribute)

>

### specific attribute values

>

### **Practice 23**

---

## 24 nth-child Pseudo Selectors

>

### first child Pseudo Selectors (`li:first-child {}`)

>

### last-child Pseudo Selectors (`li:last-child {}`)

>

### nth-child Pseudo Selector

- nth is basically like kind of like a placeholder

- nth-child selector matches every element that is the nth child, regardless of type, of its parent

- Position 3 `li:nth-child(3)`

- Every 3rd `li:nth-child(3n + 0)`

- Now this formula that we passed in here is the counter

- Every 3rd after 7 `li:nth-child(3n + 7)`

- every odd `li:nth-child(odd) {}`

- every even `li:nth-child(even) {}`

### **Practice 24**

---

## 25 before & after Pseudo Selectors

>

### the before and after pseudo selector

- actually allows us to insert content before or after an element

### put an asterisk after the label

```css
.is-required:after {
  content: '*';
  color: red;
  padding-left: 2px;
}
```

### put an asterisk before the label

```css
.is-required:before {
  content: '*';
  color: red;
  padding-left: 2px;
}
```

### in an image overlay

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

### **Practice 25**

---
