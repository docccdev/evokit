[README]: /packages/evokit-picture/README.md
[evokit]: /packages/evokit/README.md

[picture-round]: /packages/evokit-picture/?id=picture-round
[picture-border]: /packages/evokit-picture/?id=picture-border
[picture-border-color]: /packages/evokit-picture/?id=picture-border-color
[picture-border-width]: /packages/evokit-picture/?id=picture-border-width
[picture-border-style]: /packages/evokit-picture/?id=picture-border-style
[picture-display]: /packages/evokit-picture/?id=picture-display
[picture-background]: /packages/evokit-picture/?id=picture-background
[picture-item-display]: /packages/evokit-picture/?id=picture-item-display

[create_theme]: /public/theming.html

# EvoKit - Picture

[![](https://img.shields.io/npm/v/evokit-picture.svg)](https://www.npmjs.com/package/evokit-picture)
[![](https://img.shields.io/badge/page-README-42b983)][README]

---

## CHANGELOG

### 3.2.0 *(11.12.2019)*

- **Added** new props:
    - [`picture-background`][picture-background]
    - [`picture-border-color`][picture-border-color]
    - [`picture-border-width`][picture-border-width]
    - [`picture-border-style`][picture-border-style]
- **Added** multi values for prop [`picture-border`][picture-border]
- **Added** new values `3xl`, `4xl`, `5xl` for prop [`picture-round`][picture-round]
- **Deprecated** some props are outdated and will be deleted:
    - `picture-border-lr`
    - `picture-border-tb`
- **Fixed** bug if added width style `<Picture style={{ width: 100 }} />`
- Please [update theme][create_theme]

### 3.1.0 *(11.10.2019)*

- **Updated** peer dependencies [`evokit`][evokit] >= **v3.1.0**
- **Added** new props:
    - [`picture-display`][picture-display]
    - [`picture-item-display`][picture-item-display]
- **Added** multi values for [`picture-round`][picture-round]
- **Deprecated** some props are outdated and will be deleted:
    - `picture-round-top`
    - `picture-round-right`
    - `picture-round-bottom`
    - `picture-round-left`

### 3.0.2 *(11.07.2019)*

- **Added** new advanced border props:
    - `picture-border-top`
    - `picture-border-right`
    - `picture-border-bottom`
    - `picture-border-left`
    - `picture-border-tb`
    - `picture-border-lr`
- Please [update theme][create_theme]

### 3.0.1 *(19.06.2019)*

- **Added** export `PictureItem`, for example `import { Picture, PictureItem } from 'evokit-picture'`

### 3.0.0

- Initial version independent package. The [previous changelog](/packages/evokit/CHANGELOG.md) in another package.
- **Added** new theme prop `picture-border`
