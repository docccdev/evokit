[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types
[classnames]: //www.npmjs.com/package/classnames
[variables]: /base/variables.md

# EvoKit

Основа для разработки быстрых и мощных веб-интерфейсов. Он основан на принципе разделения интерфейса на независимые единицы. Это позволяет вам легко и быстро создавать интерфейс любой сложности и повторно использовать существующий код, избегая «Copy-Paste».

---

## Peer dependencies

 - [react]
 - [prop-types]
 - [classnames]

## Install
```bash
npm install evokit
```

## Usage

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
