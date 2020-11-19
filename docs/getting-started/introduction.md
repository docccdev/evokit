[evokit]: /packages/evokit/
[evokit-body]: /packages/evokit-body/
[evokit-box]: /packages/evokit-box/
[evokit-button]: /packages/evokit-button/
[evokit-flex]: /packages/evokit-flex/
[evokit-grid]: /packages/evokit-grid/
[evokit-image]: /packages/evokit-image/
[evokit-line]: /packages/evokit-line/
[evokit-link]: /packages/evokit-link/
[evokit-list]: /packages/evokit-list/
[evokit-picture]: /packages/evokit-picture/
[evokit-plug]: /packages/evokit-plug/
[evokit-text]: /packages/evokit-text/

# Introduction

Divide the user interface into independent blocks.

---

## Packages list

Core:
  * [evokit]

Blocks:
  * [evokit-body]
  * [evokit-box]
  * [evokit-button]
  * [evokit-flex]
  * [evokit-grid]
  * [evokit-image]
  * [evokit-line]
  * [evokit-link]
  * [evokit-list]
  * [evokit-picture]
  * [evokit-plug]
  * [evokit-text]

## Let's look at an example of creating a three-column list of product list with 10px indentation between cells

Every time if you need to place something in the grid, you have to create new styles only for this case without being able to flexibly reuse in other components.

```jsx
import React from 'react';
import './ProductList.css';

const ProductList = () => (
    <div className='products'>
        <div className='products__cell'>...</div>
        <div className='products__cell'>...</div>
        <div className='products__cell'>...</div>
    </div>
);
```

#### With EvoKIt

```jsx
import React from 'react';
import { Grid } from 'evokit-grid';
import 'evokit-grid/style.css';

const ProductList = () => (
    <Grid grid-column={3} grid-indent='xs'>
        <Grid.Item>...</Grid.Item>
        <Grid.Item>...</Grid.Item>
        <Grid.Item>...</Grid.Item>
    </Grid>
);
```
