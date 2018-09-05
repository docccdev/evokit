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

export default class EvokitExample extends React.PureComponent {
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
