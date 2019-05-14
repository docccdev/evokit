[create_theme]: create_theme/

[link]: #link
[link-color]: #link-color
[link-size]: #link-size
[link-weight]: #link-weight
[link-valign]: #link-valign
[link-style]: #link-style
[link-lheight]: #link-lheight

# EvoKit - Link

Предназначен для создания ссылок

---

## Usage

- [Link][link]

```jsx
import { Link } from 'evokit-link';
import 'evokit-link/style.css';

<Link href='#'>
    text
</Link>

```

---

## Link

| Props | Values | Description |
|-------|--------|-------------|
| [link-size]    | `small` `default` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Размер |
| [link-weight]  | `default` `thin` `light` `medium` `bold` `black` | Насыщенность |
| [link-valign]  | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Вертикальное выравнивание |
| [link-style]   | `italic` `strike` `underline` `overline` | Стили |
| [link-lheight] | `default` `medium` `large` | Межстрочный интервал |
| [link-color]   | `${themeName}` - [Create Theme][create_theme] | Цвет |

### `link-size`

```jsx
<Link href='' link-size='...'></Link>
```

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleLink extends React.Component {
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
<Link href='' link-weight='...'></Link>
```

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleLink extends React.Component {
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
<Link href='' link-valign='...'></Link>
```

```jsx
/*react*/
<script>
const { Link, Text, Example } = EvoKit;

export default class ExampleLink extends React.Component {
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
<Link href='' link-style='...'></Link>
```

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleLink extends React.Component {
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
<Link href='' link-lheight='...'></Link>
```

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleLink extends React.Component {
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

### `link-color`

Set the color depending on the [created theme][create_theme], used `text color` value.

```jsx
<Link href='#' link-color='...'></Link>
```

```jsx
/*react*/
<script>
const { Link, Example } = EvoKit;

export default class ExampleLink extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger' ]}>
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
