[create_theme]: create_theme/

[text]: #text
[text-color]: #text-color
[text-size]: #text-size
[text-weight]: #text-weight
[text-align]: #text-align
[text-valign]: #text-valign
[text-wrap]: #text-wrap
[text-style]: #text-style
[text-transform]: #text-transform
[text-lheight]: #text-lheight

# EvoKit - Text

Текстовый блок

---

## Usage

- [Text][text]

```jsx
import { Text } from 'evokit-text';
import 'evokit-text/style.css';

<Text>
    text
</Text>

```

---

## Text

| props | Values | Description |
|-------|--------|-------------|
| [text-size]      | `small` `default` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Размер текста |
| [text-weight]    | `default` `thin` `light` `medium` `bold` `black` | Насыщенность |
| [text-align]     | `left` `center` `right` `justify` | Горизонтальное выравнивание |
| [text-valign]    | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Вертикальное выравнивание |
| [text-wrap]      | `nowrap` `break` `ellipsis` `three-line` `two-line` | Перенос и обрезание |
| [text-style]     | `italic` `strike` `underline` `overline` | Стили (подчеркнутый/перечеркнутый) |
| [text-transform] | `none` `capitalize` `lowercase` `uppercase` | Преобразование регистра |
| [text-lheight]   | `default` `medium` `large` | Межстрочный интервал |
| [text-color]     | `${themeName}` - [Create Theme][create_theme] | Цвет текста |

### `text-size`

```jsx
<Text text-size='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['small', 'default', 'big', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']}>
                {(value) => (
                    <Text text-size={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </Text>
                )}
            </Example>
        )
    }
}
</script>
```

### `text-weight`

```jsx
<Text text-weight='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['default', 'thin', 'light', 'medium', 'bold', 'black']}>
                {(value) => (
                    <Text text-weight={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </Text>
                )}
            </Example>
        )
    }
}
</script>
```

### `text-align`

```jsx
<Text text-align='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['left', 'center', 'right', 'justify']}>
                {(value) => (
                    <Text text-align={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </Text>
                )}
            </Example>
        )
    }
}
</script>
```

### `text-valign`

```jsx
<Text text-valign='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['baseline', 'top', 'bottom', 'middle', 'super', 'sub', 'text-top', 'text-bottom']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ display: 'inline-block' }}>
                            <Text text-align='right'>
                                text 1
                            </Text>
                        </Example.Box>
                        <Text text-valign={value}>
                            text 2
                        </Text>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `text-wrap`

```jsx
<Text text-wrap='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['nowrap', 'break', 'ellipsis', 'two-line', 'three-line']}>
                {(value) => (
                    <Text text-wrap={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.
                        ЗапрошедшиегодытекстLoremIpsumполучилмноговерсий.Некоторыеверсиипоявилисьпоошибке,некоторыенамеренно(например,юмористические варианты).
                    </Text>
                )}
            </Example>
        )
    }
}
</script>
```

### `text-style`

```jsx
<Text text-style='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['italic', 'strike', 'underline', 'overline']}>
                {(value) => (
                    <Text text-style={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </Text>
                )}
            </Example>
        )
    }
}
</script>
```

### `text-transform`

```jsx
<Text text-transform='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['none', 'capitalize', 'lowercase', 'uppercase']}>
                {(value) => (
                    <Text text-transform={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </Text>
                )}
            </Example>
        )
    }
}
</script>
```

### `text-lheight`

```jsx
<Text text-lheight='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['default', 'medium', 'large']}>
                {(value) => (
                    <Text text-align='left' text-lheight={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </Text>
                )}
            </Example>
        )
    }
}
</script>
```

### `text-color`

Set the color depending on the [created theme][create_theme], used `text color` value.

```jsx
<Text text-color='...'></Text>
```

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Text text-color={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </Text>
                )}
            </Example>
        )
    }
}
</script>
```
