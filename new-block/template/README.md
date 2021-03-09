[evokit]: /packages/evokit/
[CHANGELOG]: /packages/${PACKAGE_NAME}/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp

[create_theme]: /public/theming.html
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/props/base.md

[${BLOCK_NAME}-display]: #${BLOCK_NAME}-display


# EvoKit - ${BLOCK_NAME_CAPITALIZE}

[![](https://img.shields.io/npm/v/${PACKAGE_NAME}.svg)](https://www.npmjs.com/package/${PACKAGE_NAME})
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

<!--
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/${PACKAGE_NAME}/peer/evokit)](https://www.npmjs.com/package/evokit)
-->

New block `<${BLOCK_NAME_CAPITALIZE}>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install ${PACKAGE_NAME} --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { ${BLOCK_NAME_CAPITALIZE} } from '${PACKAGE_NAME}';
import '${PACKAGE_NAME}/style.css';

const App = () => (
    <${BLOCK_NAME_CAPITALIZE} ${BLOCK_NAME}-display='none'>
        ...
    </${BLOCK_NAME_CAPITALIZE}>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<${BLOCK_NAME_CAPITALIZE} />`

| Prop name          | Default value    | Possible value | Description  |
|--------------------|------------------|----------------|--------------|
| [${BLOCK_NAME}-display] `*` | `block`          | `block` `none` | Display type |


> `*` — prop has advanced params

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-${BLOCK_NAME}-media-small only screen and (min-width: 480px);
@custom-media --ek-${BLOCK_NAME}-media-medium only screen and (min-width: 768px);
@custom-media --ek-${BLOCK_NAME}-media-large only screen and (min-width: 960px);
@custom-media --ek-${BLOCK_NAME}-media-wide only screen and (min-width: 1200px);
@custom-media --ek-${BLOCK_NAME}-media-huge only screen and (min-width: 1400px);
```

## Live demo

[![Edit ${BLOCK_NAME}-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/${BLOCK_NAME}-usage-d85tn?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `${BLOCK_NAME}-display`

```jsx
<${BLOCK_NAME_CAPITALIZE} ${BLOCK_NAME}-display='block'>
    ...
</${BLOCK_NAME_CAPITALIZE}>
```
