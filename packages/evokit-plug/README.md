[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-plug/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp

[create_theme]: /public/theming.html
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[plug-display]: #plug-display


# EvoKit - Plug <sup class='beta'>beta</sup>

[![](https://img.shields.io/npm/v/evokit-plug.svg)](https://www.npmjs.com/package/evokit-plug)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

<!--
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/evokit-plug/peer/evokit)](https://www.npmjs.com/package/evokit)
-->

New block `<Plug>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-plug --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { Plug } from 'evokit-plug';
import 'evokit-plug/style.css';

const App = () => (
    <Plug plug-display='none'>
        ...
    </Plug>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Plug />`

| Prop name          | Default value    | Possible value | Description  |
|--------------------|------------------|----------------|--------------|
| [plug-display] `*` | `block`          | `block` `none` | Display type |


> `*` — prop has advanced params

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-plug-media-small only screen and (min-width: 480px);
@custom-media --ek-plug-media-medium only screen and (min-width: 768px);
@custom-media --ek-plug-media-large only screen and (min-width: 960px);
@custom-media --ek-plug-media-wide only screen and (min-width: 1200px);
@custom-media --ek-plug-media-huge only screen and (min-width: 1400px);
```

## Live demo

[![Edit plug-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/plug-usage-d85tn?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `plug-display`

```jsx
<Plug plug-display='block'>
    ...
</Plug>
```
