[sizes]: base/sizes.md
[media]: base/media.md

[line-indent]: #indent
[line-color]: #color
[line-style]: #style

[create_theme]: create_theme/

# EvoKit - Line

Горизонтальная линия

!> Модификаторы имеют [media] параметры.

---

## Props

| Property | Type | Description |
|----------|----------|-------------|
| [line-indent]    | `string`, `object`, `array` | Отступ сверху и снизу [sizes] |
| [line-color]     | `string`, `object`, `array` | Set the line color |
| [line-style]     | `string`, `object`, `array` | Стиль |

## Indent

```jsx
<Line line-indent='...' />
```

```jsx
/*react*/
<script>
const { Line, Example } = EvoKit;

export default class ExampleLine extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ display: 'inline-block' }}>
                            text
                        </Example.Box>
                        <Line line-color='default' line-indent={value} />
                        <Example.Box style={{ display: 'inline-block' }}>
                            text
                        </Example.Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

## Color

Set the color depending on the [created theme][create_theme], used `border color` value.

```jsx
<Line line-color='...' />
```

```jsx
/*react*/
<script>
const { Line, Example } = EvoKit;

export default class ExampleLine extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Line line-color='default' line-color={value} />
                )}
            </Example>
        )
    }
}
</script>
```

## Style

```jsx
<Line line-style='...' />
```

```jsx
/*react*/
<script>
const { Line, Example } = EvoKit;

export default class ExampleLine extends React.Component {
    render() {
        return (
            <Example values={['dotted', 'dashed']}>
                {(value) => (
                    <Line line-color='danger' line-style={value} />
                )}
            </Example>
        )
    }
}
</script>
```
