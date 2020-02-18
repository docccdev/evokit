[README]: /packages/evokit-list/README.md
[evokit]: /packages/evokit/README.md

[list-display]: /packages/evokit-list/?id=list-display
[list-divider-indent]: /packages/evokit-list/?id=list-divider-indent
[list-divider]: /packages/evokit-list/?id=list-divider
[list-indent]: /packages/evokit-list/?id=list-indent
[list-item-display]: /packages/evokit-list/?id=list-item-display

[issues_4]: //github.com/docccdev/evokit/issues/4

# EvoKit - List

[![](https://img.shields.io/npm/v/evokit-list.svg)](https://www.npmjs.com/package/evokit-list)
[![](https://img.shields.io/badge/page-README-42b983)][README]

---

## CHANGELOG

### 3.3.0 *(18.02.2020)*
- **Added** new prop [`list-divider-indent`][list-divider-indent]

?> If you need to use a double increase indentation that disappeared in version *v3.2.0*, please use [`list-divider-indent`][list-divider-indent] instead of [`list-indent`][list-indent] with prop [`list-divider`][list-divider]

### 3.2.0 *(06.02.2020)*

- **Fixed** issue [#4][issues_4] when prop [`list-divider`][list-divider] do not work with css modules
- **Added** new values `3xl`, `4xl`, `5xl` for prop [`list-indent`][list-indent]

!> Please note there may be visual changes. Removed bug two-fold increase in indentation when using props [`list-indent`][list-indent] with prop [`list-divider`][list-divider]

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
