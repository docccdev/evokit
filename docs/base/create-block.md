[evokit]: /packages/evokit/

# Create block

To create a new block, use the function `createBlock` from the npm package [evokit]

---

## Structure

```
├── MyBlock
│   └── index.js
│   └── style.css
└── App.jsx
```

<details>
<summary>MyBlock/index.js</summary>

```jsx
// simple
import { createBlock } from 'evokit';
export const MyBlock = createBlock('div', 'myblock');

// with modifiers
import { createBlock } from 'evokit';
export const MyBlock = createBlock('div', 'myblock', ['color', 'size']);

// if you need to change the default css class name prefix 'ek-'
import { createBlock } from 'evokit';
export const MyBlock = createBlock('div', 'myblock', ['color', 'size'], { b: 'prefix-' });

// if you need to use CSS Modules
import { createBlock } from 'evokit';
import styles from 'style.css';
export const MyBlock = createBlock('div', 'myblock', ['color', 'size'], { b: 'prefix-', css: styles });
```

</details>

<details>
<summary>MyBlock/style.css</summary>

```css
.ek-myblock {
    display: block;
    width: 50px;
    height: 50px;
}

.ek-myblock_color_red {
    background-color: red;
}

.ek-myblock_size_big {
    width: 100px;
    height: 100px;
}
```

</details>

<details open>
<summary>App.jsx</summary>

```jsx
import React from "react";
import { MyBlock } from "./MyBlock";
import "./MyBlock/style.css";

const App = () => (
    <MyBlock
        myblock-color="red"
        myblock-size="big"
        onClick={() => alert("awesome")}
    >
        content
    </MyBlock>
);
```

</details>

## Live demo

[![Edit create-block](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/create-block-m4q9e?fontsize=14 ':include :type=iframe width=100% height=500px')
