[colors]: base/colors.md
[text]: base/text.md
[media]: base/media.md

[text-color]: #text-color
[text-size]: #text-size
[text-weight]: #text-weight
[text-align]: #text-align
[text-valign]: #text-valign
[text-wrap]: #text-wrap
[text-style]: #text-style
[text-transform]: #text-transform
[text-lheight]: #text-lheight


[text]: #text

# EvoKit - Text

Текстовый блок

!> Модификаторы имеют [Media][media] параметры.

---

## Usage

- [Text][text]

```jsx
// Common import for all blocks and css
import { Text } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Text from 'evokit/dist/Text';
import 'evokit/dist/Text/style.css';

...

<Text>
    content
</Text>

```

---

## Text

| Property | Type | Description |
|----------|----------|-------------|
| [text-color]     | `string`, `object`, `array` | Цвет текста |
| [text-size]      | `string`, `object`, `array` | Размер текста |
| [text-weight]    | `string`, `object`, `array` | Насыщенность |
| [text-align]     | `string`, `object`, `array` | Горизонтальное выравнивание |
| [text-valign]    | `string`, `object`, `array` | Вертикальное выравнивание |
| [text-wrap]      | `string`, `object`, `array` | Перенос и обрезание |
| [text-style]     | `string`, `object`, `array` | Стили (подчеркнутый/перечеркнутый) |
| [text-transform] | `string`, `object`, `array` | Преобразование регистра |
| [text-lheight]   | `string`, `object`, `array` | Межстрочный интервал |

### `text-color`

```jsx
/*react*/
<script>
const { Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['danger', 'dark', 'default', 'info', 'light', 'minor', 'muted', 'primary', 'reset', 'second', 'success', 'warning']}>
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

### `text-size`

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
