[README]: /packages/evokit-list/README.md
[evokit]: /packages/evokit/README.md

[list-display]: /packages/evokit-list/?id=list-display
[list-divider]: /packages/evokit-list/?id=list-divider
[list-indent]: /packages/evokit-list/?id=list-indent
[list-item-display]: /packages/evokit-list/?id=list-item-display

[issues_4]: //github.com/docccdev/evokit/issues/4

# EvoKit - List

[![](https://img.shields.io/npm/v/evokit-list.svg)](https://www.npmjs.com/package/evokit-list)
[![](https://img.shields.io/badge/page-README-42b983)][README]

---

## CHANGELOG

### 3.2.0 *(06.02.2020)*

- **Fixed** issue [#4][issues_4] when prop [`list-divider`][list-divider] do not work with css modules
- **Added** new values `3xl`, `4xl`, `5xl` for prop [`list-indent`][list-indent]

### 3.1.0 *(11.10.2019)*

- **Updated** peer dependencies [`evokit`][evokit] >= **v3.1.0**
- **Added** new props:
    - [`list-display`][list-display]
    - [`list-item-display`][list-item-display]

### 3.0.2 *(19.06.2019)*

- Added export `ListItem`, for example `import { List, ListItem } from 'evokit-list';`

### 3.0.1

- Fixed bug with prop `list-indent`

### 3.0.0

- Initial version independent package. The [previous changelog](/packages/evokit/CHANGELOG.md) in another package.
