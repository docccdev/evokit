[README]: /packages/evokit-grid/README.md
[evokit]: /packages/evokit/README.md

[grid-display]: /packages/evokit-grid/?id=grid-display
[grid-divider]: /packages/evokit-grid/?id=grid-divider
[grid-divider-indent]: /packages/evokit-grid/?id=grid-divider-indent
[grid-divider-column]: /packages/evokit-grid/?id=grid-divider-column
[grid-height]: /packages/evokit-grid/?id=grid-height
[grid-indent]: /packages/evokit-grid/?id=grid-indent
[grid-column]: /packages/evokit-grid/?id=grid-column
[grid-item-display]: /packages/evokit-grid/?id=grid-item-display

[issues_4]: //github.com/docccdev/evokit/issues/4

# EvoKit - Grid

[![](https://img.shields.io/npm/v/evokit-grid.svg)](https://www.npmjs.com/package/evokit-grid)
[![](https://img.shields.io/badge/page-README-42b983)][README]

---

## CHANGELOG

### 3.3.0 *(18.02.2020)*

- **Added** new prop [`grid-divider-indent`][grid-divider-indent]
- **Added** new prop [`grid-divider-column`][grid-divider-column]
- **Fixed** issue [#4][issues_4] when prop [`grid-divider`][grid-divider] do not work with css modules
- **Fixed** bug on the new prop [`grid-divider-column`][grid-divider-column] when media values `expand@{media}` and `auto@{media}` not work for [`grid-divider`][grid-divider]

!> Please note there may be visual artefacts. Removed bug two-fold increase in indentation when using props [`grid-indent`][grid-indent] with [`grid-divider`][grid-divider].

!> If you want to keep the previous behavior when using the [`grid-divider`][grid-divider] prop, replace the [`grid-indent`][grid-indent] and [`grid-column`][grid-column] with [`grid-divider-indent`][grid-divider-indent] and [`grid-divider-column`][grid-divider-column].

**Example:**
```jsx
<Grid
    grid-divider='YourValue'
    grid-divider-indent='YourValue'
    grid-divider-column='YourValue'
>
    ...
</Grid>
```

### 3.2.1 *(17.02.2020)*

- **Added** new prop [`grid-height`][grid-height]

### 3.2.0 *(26.01.2020)*

- **Added** new values `3xl`, `4xl`, `5xl` for prop [`grid-indent`][grid-indent]

### 3.1.0 *(11.10.2019)*

- **Updated** peer dependencies [`evokit`][evokit] >= **v3.1.0**
- **Added** new props:
    - [`grid-display`][grid-display]
    - [`grid-item-display`][grid-item-display]
- **Added** new advanced indent props:
    - `grid-indent-x`
    - `grid-indent-y`
- **Added** multi values for [`grid-indent`][grid-indent]

### 3.0.1 *(19.06.2019)*

- Added export `GridItem`, for example `import { Grid, GridItem } from 'evokit-grid';`

### 3.0.0

- Initial version independent package. The [previous changelog](/packages/evokit/CHANGELOG.md) in another package.
