# EvoKit

[![Gitter](https://badges.gitter.im/evokit/community.svg)](https://gitter.im/evokit/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Tool for creating UI React blocks.

---

## Concept

``` jsx
const MyBlock = createBlock('div', 'block', ['padding']);

// usage
<MyBlock block-padding='xl' />

// result
<div class='ek-block ek-block_padding_xl'></div>
```

## Documentation

[evokit.net](http://evokit.net)

## Packages

Core:
  * [evokit](/packages/evokit/)

Blocks:
  * [evokit-body](/packages/evokit-body/)
  * [evokit-box](/packages/evokit-box/)
  * [evokit-button](/packages/evokit-button/)
  * [evokit-flex](/packages/evokit-flex/)
  * [evokit-grid](/packages/evokit-grid/)
  * [evokit-image](/packages/evokit-image/)
  * [evokit-line](/packages/evokit-line/)
  * [evokit-link](/packages/evokit-link/)
  * [evokit-list](/packages/evokit-list/)
  * [evokit-picture](/packages/evokit-picture/)
  * [evokit-text](/packages/evokit-text/)
