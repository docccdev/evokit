[README]: /packages/evokit-box/README.md
[evokit]: /packages/evokit/README.md

[box-display]: /packages/evokit-box/?id=box-display
[box-margin]: /packages/evokit-box/?id=box-margin
[box-overflow]: /packages/evokit-box/?id=box-overflow
[box-padding]: /packages/evokit-box/?id=box-padding
[box-place]: /packages/evokit-box/?id=box-place
[box-round]: /packages/evokit-box/?id=box-round
[box-border]: /packages/evokit-box/?id=box-border
[box-border-color]: /packages/evokit-box/?id=box-border-color
[box-border-width]: /packages/evokit-box/?id=box-border-width
[box-border-style]: /packages/evokit-box/?id=box-border-style
[box-empty]: /packages/evokit-box/?id=box-empty
[box-opacity]: /packages/evokit-box/?id=box-opacity
[box-position]: /packages/evokit-box/?id=box-position
[box-zindex]: /packages/evokit-box/?id=box-zindex

[create_theme]: /public/theming.html

# EvoKit - Box

[![](https://img.shields.io/npm/v/evokit-box.svg)](https://www.npmjs.com/package/evokit-box)
[![](https://img.shields.io/badge/page-README-42b983)][README]

---

## CHANGELOG

### 3.4.0 *(22.05.2021)*
- **Deprecated** prop [`box-empty`][box-empty]
- **Added** new value `none:empty` for prop [`box-display`][box-display]

### 3.3.0 *(05.10.2020)*

- **Added** new prop [`box-empty`][box-empty]
- **Removed** values `3xl`, `4xl` and `5xl` for **deprecated** props:
    - [`box-round-top`][box-round]
    - [`box-round-right`][box-round]
    - [`box-round-bottom`][box-round]
    - [`box-round-left`][box-round]
    - [`box-padding-lr`][box-padding]
    - [`box-padding-tb`][box-padding]
    - [`box-margin-lr`][box-margin]
    - [`box-margin-tb`][box-margin]

### 3.2.0 *(01.12.2019)*

- **Added** new prop [`box-zindex`][box-zindex]
- **Added** new prop [`box-opacity`][box-opacity]
- **Added** new value `none` for prop [`box-place`][box-place]
- **Added** new value `sticky` for prop [`box-position`][box-position]
- **Added** new values `3xl`, `4xl`, `5xl` for props:
    - [`box-margin`][box-margin]
    - [`box-padding`][box-padding]
    - [`box-round`][box-round]
    - [`box-zindex`][box-zindex]
    - [`box-border-width`][box-border-width]
- **Added** multi props for [`box-position`][box-position]
- **Added** `-webkit-overflow-scrolling: touch` for prop [`box-overflow`][box-overflow]
- **Fixed** media rules for [`box-place`][box-place]

### 3.1.2 *(30.11.2019)*

?> Fixed :)

### 3.1.1 *(30.11.2019)*

!> Broken :(

### 3.1.0 *(11.10.2019)*

- **Updated** peer dependencies [`evokit`][evokit] >= **v3.1.0**
- **Added** new props:
    - [`box-border-color`][box-border-color]
    - [`box-border-width`][box-border-width]
    - [`box-border-style`][box-border-style]
- **Added** multi values for props:
    - [`box-margin`][box-margin]
    - [`box-overflow`][box-overflow]
    - [`box-padding`][box-padding]
    - [`box-round`][box-round]
    - [`box-border`][box-border]
- **Deprecated** some props are outdated and will be deleted:
    - `box-margin-lr`
    - `box-margin-tb`
    - `box-padding-lr`
    - `box-padding-tb`
    - `box-round-top`
    - `box-round-right`
    - `box-round-bottom`
    - `box-round-left`
    - `box-border-lr`
    - `box-border-tb`

### 3.0.2 *(11.07.2019)*

- **Added** new advanced border props:
    - `box-border-top`
    - `box-border-right`
    - `box-border-bottom`
    - `box-border-left`
    - `box-border-tb`
    - `box-border-lr`
- Please [update theme][create_theme]

### 3.0.1 *(20.06.2019)*

- **Added** new prop `box-align`

### 3.0.0

- Initial version independent package. The [previous changelog](/packages/evokit/CHANGELOG.md) in another package.
- **Added** new prop `box-height`
- **Added** new prop `box-overflow`
