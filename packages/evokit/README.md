[CHANGELOG]: /packages/evokit/CHANGELOG.md

[css-modules]: //github.com/css-modules/css-modules
[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types

[create-block]: /docs/base/create-block.md
[with-props]: /docs/base/with-props.md

# EvoKit

[![](https://img.shields.io/npm/v/evokit.svg)](https://www.npmjs.com/package/evokit)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Allows you to divide the user interface into independent blocks and think about them separately. EvoKit blocks can be declared with `createBlock`.

---

## Usage

> Peer dependencies [react], [prop-types]

```bash
npm install evokit --save
```

---

## Create block

`createBlock(tagName, blockName, blockMods, preset)`

See example [create block][create-block]

- `tagName` - string, html tag
- `blockName` - string, block name
- `blockMods` - array of string, block modifier key list
- `preset` - object, default value: `{ b: 'ek-', m: '_', v: '_', css: null }`

More about preset:

| Key   | Type     | Default value | Description |
|-------|----------|--------|-------------|
| `b`   | `string` | `ek-`  | block class name prefix: `{b}blockName` => `ek-blockName` |
| `m`   | `string` | `_`    | block modifier name separator: `blockName{m}modName` => `blockName_modName` |
| `v`   | `string` | `_`    | block modifier value separator: `modName{v}modVal` => `modName_modVal` |
| `css` | `object` | `null` | object [CSS Modules][css-modules] classes |

```jsx
import { createBlock } from 'evokit';

const Footer = createBlock('div', 'footer', ['padding']);

<Footer /> // <div class="ek-footer"></div>
<Footer footer-padding='xxl' /> // <div class="ek-footer ek-footer_padding_xxl"></div>

// ADDITIONAL PROPS:
<Footer footer-tag='span' /> // <span class="ek-footer ek-footer_padding_xxl"></span>
<Footer footer-ref={(target) => {}} /> // React ref
<Footer footer-preset={{ css: cssModules }} /> // CSS Modules
```

CSS Modules with custom class prefix `mp-`:

```css
/* css-modules.css */

.mp-footer {}
.mp-footer_padding_xs {}
```

```jsx
import { createBlock } from 'evokit';
import styles from 'css-modules.css';

const Footer = createBlock('div', 'footer', ['padding'], {
    b: 'mp-',
    css: styles,
});

<Footer /> // <div class="mp-footer"></div>
<Footer footer-padding='xs' /> // <div class="mp-footer mp-footer_padding_xs"></div>
```

## With props

`withProps(Block, props)`

Return block with default props

See example [with props][with-props]

```jsx
import { createBlock, withProps } from 'evokit';
// import styles from 'css-modules.css';

const Footer = createBlock('div', 'footer', ['padding']);

const FooterXXL = withProps(Footer, {
    'footer-tag': 'table',
    'footer-padding': 'xxl',
});

// const FooterCssModules = withProps(Footer, {
//     'footer-preset': {
//         css: styles,
//     },
// });

<Footer /> // <div class="ek-footer"></div>
<FooterXXL /> // <table class="ek-footer ek-footer_padding_xxl"></table>
<FooterXXL footer-tag='span' footer-padding='m' /> // <span class="ek-footer ek-footer_padding_m"></span>
```
