[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types
[classnames]: //www.npmjs.com/package/classnames
[variables]: /docs/base/variables.md

# EvoKit

http://evokit.net

Easy and fast React front-end framework.
Based on the principle of dividing the interface into independent blocks.

---

## Peer dependencies

 - [react]
 - [prop-types]
 - [classnames]

## Install
```bash
npm install evokit
```

## React usage (jsx)

#### Step 1

!> Insert [css variables][variables] on page!

#### Step 2

```jsx
import React from 'react';
import { Grid } from 'evokit';
import 'evokit/dist/style.css';
import 'evokit/dist/themes.css';

export default class EvokitExample extends React.Component {
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

!> Insert [css variables][variables] on page!

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
