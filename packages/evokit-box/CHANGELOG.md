[README]: /packages/evokit-box/README.md
[evokit]: /packages/evokit/README.md

[box-margin]: /packages/evokit-box/?id=box-margin
[box-overflow]: /packages/evokit-box/?id=box-overflow
[box-padding]: /packages/evokit-box/?id=box-padding
[box-round]: /packages/evokit-box/?id=box-round
[box-place]: /packages/evokit-box/?id=box-place
[box-border]: /packages/evokit-box/?id=box-border
[box-border-color]: /packages/evokit-box/?id=box-border-color
[box-border-width]: /packages/evokit-box/?id=box-border-width
[box-border-style]: /packages/evokit-box/?id=box-border-style
[box-position]: /packages/evokit-box/?id=box-position
[box-zindex]: /packages/evokit-box/?id=box-zindex

[create_theme]: /docs/base/theme.md

# EvoKit - Box

[![](https://img.shields.io/npm/v/evokit-box.svg)](https://www.npmjs.com/package/evokit-box)
[![](https://img.shields.io/badge/page-README-42b983)][README]

---

## CHANGELOG

### 3.1.1 *(30.11.2019)*
- **Added** `-webkit-overflow-scrolling: touch` for prop [`box-overflow`][box-overflow]
- **Added** multi props for [`box-position`][box-position]
- **Added** new prop [`box-zindex`][box-zindex]
- **Added** new value `none` for prop [`box-place`][box-place]

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
