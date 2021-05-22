[evokit-box]: /packages/evokit-box/

# Variants props

> For examples, consider the use props on the [evokit-box][evokit-box] block.

### Single value

```jsx
// input:
<Box box-padding='xl' />

// output:
<div class='ek-box ek-box_padding_xl' />
```

### Multi values

```jsx
// input:
<Box box-padding='s m l xl' />

// output:
<div class='ek-box ek-box_padding-top_s ek-box_padding-right_m ek-box_padding-bottom_l ek-box_padding-left_xl' />
```
### Array of values

```jsx
// input:
<Box box-padding={['s', 'xl']} />

// output:
<div class='ek-box ek-box_padding_s ek-box_padding_xl' />
```

### Object of values

```jsx
// input:
<Box box-padding={{ s: true, xl: false }} />

// output:
<div class='ek-box ek-box_padding_s' />
```

## Live demo

[![Edit box-props](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxprops-dn6w9?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=700px')
