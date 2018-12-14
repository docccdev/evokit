[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types
[classnames]: //www.npmjs.com/package/classnames

# EvoKit

---

## Install
```bash
npm install evokit
```

## Usage
```jsx
import React from 'react';
import { Grid } from 'evokit';
import 'evokit/dist/style.css';

export default class EvokitExample extends React.Component {
    render() {
        return (
            <Grid grid-column={2} grid-indent='m'>
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

## Dependencies

 - [react]
 - [prop-types]
 - [classnames]
