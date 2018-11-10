[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types
[classnames]: //www.npmjs.com/package/classnames

# EvoKit

Основа для разработки быстрых и мощных веб-интерфейсов. Он основан на принципе разделения интерфейса на независимые единицы. Это позволяет вам легко и быстро создавать интерфейс любой сложности и повторно использовать существующий код, избегая «Copy-Paste».

---

## Установка
```bash
npm install evokit
```

## Использование
```jsx
import React from 'react';
import { Grid } from 'evokit';

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

## Зависимости

 - [react]
 - [prop-types]
 - [classnames]
