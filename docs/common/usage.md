[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types
[classnames]: //www.npmjs.com/package/classnames
[variables]: /base/variables.md

# EvoKit

Easy and fast React front-end framework. Based on the principle of dividing the interface into independent blocks.

---

## Quick start

> Install dependencies [react], [prop-types], [classnames] to make it work.

```bash
npm i react prop-types classnames --save
```

### Install

```bash
npm i evokit --save
```

### Usage

!> Insert [css variables][variables] on page.

```jsx
import React from 'react';
import { Grid } from 'evokit';
import 'evokit/dist/style.css';

export default class EvoKitExample extends React.Component {
    render() {
        return (
            <Grid grid-align='justify'>
                <Grid.Item>
                    left
                </Grid.Item>
                <Grid.Item>
                    right
                </Grid.Item>
            </Grid>
        );
    }
}
```

---

## Static usage

!> Insert [css variables][variables] on page.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            ... css variables ...
        </style>
        <link rel='stylesheet' href='https://unpkg.com/evokit/dist/style.css'>
        <link rel='stylesheet' href='https://unpkg.com/evokit/dist/themes.css'>
    </head>
    <body>
        <div id="root"></div>
        <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
        <script src="https://unpkg.com/classnames/index.js"></script>

        <script src="https://unpkg.com/evokit/dist/index.js"></script>
        <script>
            var Grid = EvoKit.Grid;
            var GridItem = EvoKit.Grid.Item;

            ReactDOM.render(
                React.createElement(Grid, { 'grid-align': 'justify' }, [
                    React.createElement(GridItem, {}, 'left'),
                    React.createElement(GridItem, {}, 'right'),
                ]),
                document.getElementById('root')
            );
        </script>
    </body>
</html>
```