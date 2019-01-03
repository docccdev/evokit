[media]: base/media.md

[link-color]: #link-color
[link-size]: #link-size
[link-weight]: #link-weight
[link-valign]: #link-valign
[link-style]: #link-style
[link-lheight]: #link-lheight

[link]: #link

# EvoKit - Link

Предназначен для создания ссылок.

!> Модификаторы имеют [Media][media] параметры.

---

## Usage

- [Link][link]

```jsx
// Common import for all blocks and css
import { Link } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Link from 'evokit/dist/Link';
import 'evokit/dist/Link/style.css';

...

<Link href='#'>
    link
</Link>

```

---

## Link

| Property | Type | Description |
|----------|----------|-------------|
| [link-color]     | `string`, `object`, `array` | Цвет |
| [link-size]      | `string`, `object`, `array` | Размер |
| [link-weight]    | `string`, `object`, `array` | Насыщенность |
| [link-valign]    | `string`, `object`, `array` | Вертикальное выравнивание |
| [link-style]     | `string`, `object`, `array` | Стили |
| [link-lheight]   | `string`, `object`, `array` | Межстрочный интервал |


### `link-color`

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['danger', 'dark', 'default', 'info', 'light', 'minor', 'muted', 'primary', 'reset', 'second', 'success', 'warning']}>
                {(value) => (
                    <Link link-color={value}>
                        Ссылка
                    </Link>
                )}
            </Example>
        )
    }
}
</script>
```

### `link-size`

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['small', 'default', 'big', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']}>
                {(value) => (
                    <Link link-size={value}>
                        Ссылка
                    </Link>
                )}
            </Example>
        )
    }
}
</script>
```

### `link-weight`

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['default', 'thin', 'light', 'medium', 'bold', 'black']}>
                {(value) => (
                    <Link link-weight={value}>
                        Ссылка
                    </Link>
                )}
            </Example>
        )
    }
}
</script>
```

### `link-valign`

```jsx
/*react*/
<script>
const { Link, Text, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['baseline', 'top', 'bottom', 'middle', 'super', 'sub', 'text-top', 'text-bottom']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ display: 'inline-block' }}>
                            <Text link-align='right'>
                                text
                            </Text>
                        </Example.Box>
                        <Link link-valign={value}>
                            Ссылка
                        </Link>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `link-style`

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['dotted', 'multi-line']}>
                {(value) => (
                    <Link link-style={value}>
                        Ссылка
                    </Link>
                )}
            </Example>
        )
    }
}
</script>
```

### `link-lheight`

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['default', 'medium', 'large']}>
                {(value) => (
                    <Link link-align='left' link-lheight={value}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </Link>
                )}
            </Example>
        )
    }
}
</script>
```