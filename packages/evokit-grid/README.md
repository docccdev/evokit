[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-grid/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp

[create_theme]: /public/theming.html
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/props/base.md

[grid-align]: #grid-align
[grid-column]: #grid-column
[grid-direction]: #grid-direction
[grid-display]: #grid-display
[grid-divider]: #grid-divider
[grid-divider-indent]: #grid-divider-indent
[grid-divider-column]: #grid-divider-column
[grid-height]: #grid-height
[grid-indent]: #grid-indent
[grid-item-display]: #grid-item-display
[grid-item-order]: #grid-item-order
[grid-item-width]: #grid-item-width
[grid-valign]: #grid-valign
[grid-wrap]: #grid-wrap

# EvoKit - Grid

[![](https://img.shields.io/npm/v/evokit-grid.svg)](https://www.npmjs.com/package/evokit-grid)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

The grid for placing content on the page, has 10 columns. Contains two elements `<Grid>` and `<Grid.Item>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-grid --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { Grid } from 'evokit-grid';
import 'evokit-grid/style.css';

const App = () => (
    <Grid grid-column='3'>
        <Grid.Item>
            ...
        </Grid.Item>
    </Grid>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Grid />`

| Prop name         | Default value | Possible value             | Description                 |
|-------------------|---------------|----------------------------|-----------------------------|
| [grid-align]      | `left`        | `left` `center` `right` `justify` | Horizontal alignment of cells |
| [grid-column]     | `auto`        | `auto` `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` `expand` | Number of cells in a row |
| [grid-direction]  | `row`         | `row` `row-reverse` `column` `column-reverse` | Cell direction |
| [grid-display]    | `flex`        | `flex` `none` | Display type |
| [grid-divider-column]     | `auto`        | `auto` `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` `expand` | Number of cells in a row, only use with prop [grid-divider] |
| [grid-divider-indent] `*` | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Indentation between cells, only use with prop [grid-divider] |
| [grid-divider]    | `null`        | [Create theme][create_theme] | Color border between cells |
| [grid-height]     | `auto`        | `auto` `inherit` `1-1` | Set the height |
| [grid-indent] `*` | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Indentation between cells |
| [grid-valign]     | `top`         | `top` `middle` `bottom` `baseline` `justify` | Vertical Cell Alignment |
| [grid-wrap]       | `wrap`        | `wrap` `nowrap` `wrap-reverse` | Wrap rules |

### `<Grid.Item />`

| Prop name           | Default value | Possible value             | Description |
|---------------------|---------------|----------------------------|-------------|
| [grid-item-order]   | `null`        | `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` | Sets the order of the cell |
| [grid-item-width]   | `auto`        | `auto` `expand` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Cell width |
| [grid-item-display] | `block`       | `block` `none` | Display type |

> `*` — prop has advanced params

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-grid-media-small only screen and (min-width: 480px);
@custom-media --ek-grid-media-medium only screen and (min-width: 768px);
@custom-media --ek-grid-media-large only screen and (min-width: 960px);
@custom-media --ek-grid-media-wide only screen and (min-width: 1200px);
@custom-media --ek-grid-media-huge only screen and (min-width: 1400px);

:root {
    /* prop 'grid-indent' */
    --ek-grid-indent-xxs: 5px;
    --ek-grid-indent-xs: 10px;
    --ek-grid-indent-s: 15px;
    --ek-grid-indent-m: 20px;
    --ek-grid-indent-l: 25px;
    --ek-grid-indent-xl: 30px;
    --ek-grid-indent-xxl: 35px;
    --ek-grid-indent-3xl: 40px;
    --ek-grid-indent-4xl: 45px;
    --ek-grid-indent-5xl: 50px;
}
```

## Live demo

[![Edit grid-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/gridusage-bweb5?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `grid-display`

Display type

- `flex` - shown as blocky
- `none` - remove from a document

```jsx
<Grid grid-display='none'>
    ...
</Grid>
```

## `grid-column`

Number of cells in a row

- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` - Number of cells in a row
- `auto` - The width of the cells depends on the content
- `expand` - The width of the cells is proportional to their count

```jsx
<Grid grid-column='2'>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

## `grid-indent`

The property allows you to set the indentation value for all sides of an cell at once or to determine it only for specified sides.

> **Is calculated from content to content.**

**Advanced props**

1. `grid-indent-x`
2. `grid-indent-y`

**Multi values** _(set value separated by a space)_

- `grid-indent="{1} {2}"`


**List of values**

| Value  | CSS var                | CSS value |
|--------|------------------------|-----------|
| `none` | ---                    | `0px`     |
| `xxs`  | `--ek-grid-indent-xxs` | `5px`     |
| `xs`   | `--ek-grid-indent-xs`  | `10px`    |
| `s`    | `--ek-grid-indent-s`   | `15px`    |
| `m`    | `--ek-grid-indent-m`   | `20px`    |
| `l`    | `--ek-grid-indent-l`   | `25px`    |
| `xl`   | `--ek-grid-indent-xl`  | `30px`    |
| `xxl`  | `--ek-grid-indent-xxl` | `35px`    |
| `3xl`  | `--ek-grid-indent-3xl` | `40px`    |
| `4xl`  | `--ek-grid-indent-4xl` | `45px`    |
| `5xl`  | `--ek-grid-indent-5xl` | `50px`    |

```jsx
<Grid grid-indent='xs' />
<Grid grid-indent='xs xl' />
<Grid
    grid-indent-x='xs'
    grid-indent-y='xl'
/>
```

## `grid-direction`

Cell direction

- `row` - Cell direction from left to right
- `row-reverse` - Cell direction from right to left
- `column` - Cell direction from top to bottom
- `column-reverse` - Cell direction from bottom to top

```jsx
<Grid grid-direction='row-reverse'>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

## `grid-wrap`

Wrap cell rules

- `nowrap` - The location of the cells in one line
- `wrap` - Cells that do not fit one line in width are shifted down
- `wrap-reverse` - Similar behavior with `wrap` only cell offset occurs up

```jsx
<Grid grid-wrap='nowrap'>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

## `grid-align`

Horizontal alignment of cells

- `left` - Align cells to the left
- `center` - Center alignment of cells
- `right` - Align cells to the right
- `justify` - Distributes all cells evenly across width

```jsx
<Grid grid-align='center'>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

## `grid-valign`

Vertical cell alignment

- `top` - Align cells to top
- `middle` - Alignment of cells in the middle
- `bottom` - Alignment of cells to the bottom
- `baseline` - Align cells to baseline
- `justify` - Evenly distributes all cells in height

```jsx
<Grid grid-valign='middle'>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

## `grid-height`

Set the height

- `auto` - value: `auto`
- `inherit` - value: `inherit`
- `1-1` - value: `100%`

```jsx
<Grid grid-height='1-1'>
    ...
</Grid>
```

## `grid-divider-indent`

The property allows you to set the indentation value for all sides of an cell at once or to determine it only for specified sides. Only use with prop [grid-divider].

> **Is calculated from the dividing line to the cell content.**

**Advanced props**

1. `grid-divider-indent-x`
2. `grid-divider-indent-y`

**Multi values** _(set value separated by a space)_

- `grid-divider-indent="{1} {2}"`


**List of values**

| Value  | CSS var                | CSS value |
|--------|------------------------|-----------|
| `none` | ---                    | `0px`     |
| `xxs`  | `--ek-grid-indent-xxs` | `5px`     |
| `xs`   | `--ek-grid-indent-xs`  | `10px`    |
| `s`    | `--ek-grid-indent-s`   | `15px`    |
| `m`    | `--ek-grid-indent-m`   | `20px`    |
| `l`    | `--ek-grid-indent-l`   | `25px`    |
| `xl`   | `--ek-grid-indent-xl`  | `30px`    |
| `xxl`  | `--ek-grid-indent-xxl` | `35px`    |
| `3xl`  | `--ek-grid-indent-3xl` | `40px`    |
| `4xl`  | `--ek-grid-indent-4xl` | `45px`    |
| `5xl`  | `--ek-grid-indent-5xl` | `50px`    |

```jsx
<Grid
    grid-divider-indent='xs'
    grid-divider={THEME_NAME}
/>
<Grid
    grid-divider-indent='xs xl'
    grid-divider={THEME_NAME}
/>
<Grid
    grid-divider-indent-x='xs'
    grid-divider-indent-y='xl'
    grid-divider={THEME_NAME}
/>
```

## `grid-divider-column`

Number of cells in a row. Only use with prop [grid-divider].

- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` - Number of cells in a row
- `auto` - The width of the cells depends on the content
- `expand` - The width of the cells is proportional to their count

```jsx
<Grid grid-divider-column='2' grid-divider={THEME_NAME}>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

## `grid-divider`

Color border between cells

```jsx
<Grid grid-divider={THEME_NAME}>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

> Set the `THEME_NAME` depending on the [theming][create_theme]


## `grid-item-display`

Display type

- `block` - shown as blocky
- `none` - remove from a document

```jsx
<Grid >
    <Grid.Item grid-item-display='none'>
        ...
    </Grid.Item>
</Grid>
```

## `grid-item-order`

Sets the order of the cell

- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` - Determines the cell order

```jsx
<Grid>
    <Grid.Item grid-item-order='2'>
        ...
    </Grid.Item>
    <Grid.Item>
        ...
    </Grid.Item>
</Grid>
```

## `grid-item-width`

Cell width

- `auto` - Cell width depends on content, value: `auto`
- `expand` - Cell width occupies free space
- See table, for example: `1-2` = `50%`

<div class='tableHovered' data-tooltip-content='grid-item-width'></div>

| |1|2|3|4|5|6|7|8|9|10|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|1|`100%`|`50%`|`33.33%`|`25%`|`20%`|`16.66%`|`14.28%`|`12.5%`|`11.11%`|`10%`|
|2|---|---|`66.66%`|`50%`|`40%`|`33.33%`|`28.57%`|`25%`|`22.22%`|`20%`|
|3|---|---|---|`75%`|`60%`|`50%`|`42.85%`|`37.5%`|`33.33%`|`30%`|
|4|---|---|---|---|`80%`|`66.66%`|`57.14%`|`50%`|`44.44%`|`40%`|
|5|---|---|---|---|---|`83.33%`|`71.42%`|`62.5%`|`55.55%`|`50%`|
|6|---|---|---|---|---|---|`85.71%`|`75%`|`66.66%`|`60%`|
|7|---|---|---|---|---|---|---|`87.5%`|`77.77%`|`70%`|
|8|---|---|---|---|---|---|---|---|`88.88%`|`80%`|
|9|---|---|---|---|---|---|---|---|---|`90%`|

```jsx
<Grid>
    <Grid.Item grid-item-width='expand'>
        ...
    </Grid.Item>
    <Grid.Item grid-item-width='3-10'>
        ...
    </Grid.Item>
</Grid>
```
