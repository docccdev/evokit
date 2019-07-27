[evokit]: /packages/evokit/

[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[create_theme]: /docs/base/theme.md

[grid-tag]: #grid-tag
[grid-item-tag]: #grid-item-tag

[grid-column]: #grid-column
[grid-indent]: #grid-indent
[grid-direction]: #grid-direction
[grid-align]: #grid-align
[grid-valign]: #grid-valign
[grid-divider]: #grid-divider
[grid-wrap]: #grid-wrap
[grid-item-order]: #grid-item-order
[grid-item-width]: #grid-item-width

[base-props]: #base-props
[main-props]: #main-props
[color-props]: #color-props

# EvoKit - Grid

[![](https://img.shields.io/npm/v/evokit-grid.svg)](https://www.npmjs.com/package/evokit-grid)

The grid for placing content on the page, has 10 columns. Contains two elements `<Grid>` and `<GridItem>`

---

## Install

> Peer dependencies [evokit]

```bash
npm install evokit-grid --save
```

## Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

```jsx
import { Grid, GridItem } from 'evokit-grid';
import 'evokit-grid/style.css';

<Grid>
    <GridItem>
        ...
    </GridItem>
</Grid>

```

## Props

> Also supports other valid props of the React Element

### [Base][base-props]

| Prop name          | Default value | Possible value             | Description |
|--------------------|---------------|----------------------------|-------------|
| [grid-tag]         | `div`         | [html tags][html-all-tags] | HTML tag    |
| [grid-item-tag]    | `div`         | [html tags][html-all-tags] | HTML tag    |

### [Main][main-props]

| Prop name         | Default value | Possible value             | Description                 |
|-------------------|---------------|----------------------------|-----------------------------|
| [grid-column]     | `auto`        | `auto` `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` `expand` | Number of cells in a row |
| [grid-indent]     | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Indentation between cells |
| [grid-direction]  | `row`         | `row` `row-reverse` `column` `column-reverse` | Cell direction |
| [grid-wrap]       | `wrap`        | `wrap` `nowrap` `wrap-reverse` | Wrap rules |
| [grid-align]      | `left`        | `left` `center` `right` `justify` | Horizontal alignment of cells |
| [grid-valign]     | `top`         | `top` `middle` `bottom` `baseline` `justify` | Vertical Cell Alignment |
| [grid-item-order] | `null`        | `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` | Sets the order of the cell |
| [grid-item-width] | `auto`        | `auto` `expand` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Cell width |

### [Color][color-props]

> Use [theming][create_theme] for creating custom colors.

| Prop name         | Default value | Possible value | Description                |
|-------------------|---------------|----------------|----------------------------|
| [grid-divider]    | `null`        | `{THEME_NAME}` | Color border between cells |

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
}
```

## Live demo

[![Edit grid-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/gridusage-bweb5?fontsize=14 ':include :type=iframe width=100% height=500px')

---

## Base props

### `grid-tag`

Default value `div`

```jsx
<Grid grid-tag='div'>
    ...
</Grid>
```

### `grid-item-tag`

Default value `div`

```jsx
<Grid>
    <GridItem grid-item-tag='div'>
    ...
    <GridItem>
</Grid>
```


## Main props

### `grid-column`

- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` - Number of cells in a row
- `auto` - The width of the cells depends on the content
- `expand` - The width of the cells is proportional to their count

```jsx
<Grid grid-column='2'>
    <GridItem>
        ...
    </GridItem>
</Grid>
```

### `grid-indent`

- `none` - no indent, value: `0px`
- `xxs` - css variable `--ek-grid-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-grid-indent-xs`, default value: `10px`
- `s` - css variable `--ek-grid-indent-s`, default value: `15px`
- `m` - css variable `--ek-grid-indent-m`, default value: `20px`
- `l` - css variable `--ek-grid-indent-l`, default value: `25px`
- `xl` - css variable `--ek-grid-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-grid-indent-xxl`, default value: `35px`

```jsx
<Grid grid-indent='m'>
    <GridItem>
        ...
    </GridItem>
</Grid>
```

### `grid-direction`

- `row` - Cell direction from left to right
- `row-reverse` - Cell direction from right to left
- `column` - Cell direction from top to bottom
- `column-reverse` - Cell direction from bottom to top

```jsx
<Grid grid-direction='row-reverse'>
    <GridItem>
        ...
    </GridItem>
</Grid>
```

### `grid-wrap`

- `nowrap` - The location of the cells in one line
- `wrap` - Cells that do not fit one line in width are shifted down
- `wrap-reverse` - Similar behavior with `wrap` only cell offset occurs up

```jsx
<Grid grid-wrap='nowrap'>
    <GridItem>
        ...
    </GridItem>
</Grid>
```

### `grid-align`

- `left` - Align cells to the left
- `center` - Center alignment of cells
- `right` - Align cells to the right
- `justify` - Distributes all cells evenly across width

```jsx
<Grid grid-align='center'>
    <GridItem>
        ...
    </GridItem>
</Grid>
```

### `grid-valign`

- `top` - Align cells to top
- `middle` - Alignment of cells in the middle
- `bottom` - Alignment of cells to the bottom
- `baseline` - Align cells to baseline
- `justify` - Evenly distributes all cells in height

```jsx
<Grid grid-valign='middle'>
    <GridItem>
        ...
    </GridItem>
</Grid>
```

### `grid-item-order`

- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` - Determines the cell order

```jsx
<Grid>
    <GridItem grid-item-order='2'>
        ...
    </GridItem>
    <GridItem>
        ...
    </GridItem>
</Grid>
```

### `grid-item-width`

- `auto` - Cell width depends on content, value: `auto`
- `expand` - Cell width occupies free space
- See table, for example: `1-2` = `50%`

| |1|2|3|4|5|6|7|8|9|10|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|1|`100%`|`50%`|`33.33%`|`25%`|`20%`|`16.66%`|`14.28%`|`12.5%`|`11.11%`|`10%`|
|2|---|`100%`|`66.66%`|`50%`|`40%`|`33.33%`|`28.57%`|`25%`|`22.22%`|`20%`|
|3|---|---|`100%`|`75%`|`60%`|`50%`|`42.85%`|`37.5%`|`33.33%`|`30%`|
|4|---|---|---|`100%`|`80%`|`66.66%`|`57.14%`|`50%`|`44.44%`|`40%`|
|5|---|---|---|---|`100%`|`83.33%`|`71.42%`|`62.5%`|`55.55%`|`50%`|
|6|---|---|---|---|---|`100%`|`85.71%`|`75%`|`66.66%`|`60%`|
|7|---|---|---|---|---|---|`100%`|`87.5%`|`77.77%`|`70%`|
|8|---|---|---|---|---|---|---|`100%`|`88.88%`|`80%`|
|9|---|---|---|---|---|---|---|---|`100%`|`90%`|
|10|---|---|---|---|---|---|---|---|---|`100%`|


```jsx
<Grid>
    <GridItem grid-item-width='expand'>
        ...
    </GridItem>
    <GridItem grid-item-width='3-10'>
        ...
    </GridItem>
</Grid>
```


## Color props

> Set the THEME NAME depending on the [theming][create_theme]

### `grid-divider`

```jsx
<Grid grid-divider={THEME_NAME}>
    <GridItem>
        ...
    </GridItem>
</Grid>
```
