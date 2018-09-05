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

## Зависимости

 - [react]
 - [prop-types]
 - [classnames]

## Поддержка браузеров

В таблице перечислены версии, на которых тестируется EvoKit. «Latest» означает, что он отлично работает во всех последних версиях этого браузера.
Со многими браузерами, двигающимися в сторону автоматического обновляется сразу после выхода новой версии, поддержка конкретной версии стала немного сложной в последние годы.

Короче говоря: EvoKit будет работать практически в любом современном браузере.

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) |
| --- | --- |
| Latest | Latest | Latest | 10+ | 7.1+ | Latest |
