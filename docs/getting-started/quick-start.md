[evokit-text]: /packages/evokit-text/
[advanced-mode]: #_2-advanced

[css-variable]: //caniuse.com/#feat=css-variables
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

# Quick start

> The blocks styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

## 1. Simple usage

Simple use, allows you to quickly use the block with the default settings

```jsx
import React from 'react';
import { Text } from 'evokit-text';
import 'evokit-text/style.css';

const App = () => (
    <Text text-align='center'>
        Hello, world!
    </Text>
);
```

## 2. Advanced

Recommend using advanced mode. To do this, you will need to create a UI folder in the project where the configured blocks.

```text
├── UI/
│   └── Text/
│   └───── index.js
│   └───── style.css
│   └───── vars.css
│   └── index.js
└── App.jsx
```

<details>
<summary>UI/Text/index.js</summary>

```js
import { Text } from 'evokit-text';
import './style.css';

export { Text };
```

</details>

<details>
<summary>UI/Text/style.css</summary>

```css
@import 'evokit-text/style.css';
@import './vars.css';
```

</details>

<details>
<summary>UI/Text/vars.css</summary>

```css
:root {
    --ek-text-line-height: 1.4em;
}
```

</details>

<details>
<summary>UI/index.js</summary>

```js
import { Text } from './Text';

export { Text };
```

</details>

<details open>
<summary>App.jsx</summary>

```jsx
import React from 'react';
import { Text } from './UI';

const App = () => (
    <Text text-align='center'>
        Hello, world!
    </Text>
);
```

</details>


## 3. CSS Modules

Consider the same files structure as [Advanced mode][advanced-mode].

<details open>
<summary>UI/Text/index.js</summary>

```js
import { withProps } from 'evokit';
import { Text as EKText } from 'evokit-text';
import style from './style.css';

export const Text = withProps(EKText, {
    'text-preset': {
        css: style,
    },
});

```

</details>
