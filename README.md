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

export default class EvokitExample extends React.Component {
    render() {
        return (
            <Grid ek-align='justify'>
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
