[evokit-box]: /packages/evokit-box/

# Block props

For examples, consider the use props on the [Box][evokit-box] block.

---

#### Single value

```jsx
// input:
<Box box-padding='xl' />

// output:
<div class='ek-box ek-box_padding_xl' />
```

#### Multi values

```jsx
// input:
<Box box-padding={['s', 'xl']} />

// output:
<div class='ek-box ek-box_padding_s ek-box_padding_xl' />
```

#### Optional values

```jsx
// input:
<Box box-padding={{ s: true, xl: false }} />

// output:
<div class='ek-box ek-box_padding_s' />
```
