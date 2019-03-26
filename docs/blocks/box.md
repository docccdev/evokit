[sizes]: base/sizes.md
[media]: base/media.md

[mixes]: common/mixes.md

[box-margin]: #margin
[box-padding]: #padding
[box-background]: #background
[box-border]: #border
[box-display]: #display
[box-position]: #position
[box-place]: #place

[box-width]: #width
[box-round]: #round

[create_theme]: create_theme/


# EvoKit - Box

Блок для контента, позволяет применить внутренние/внешние отступы и много другое.

!> Модификаторы имеют [media] параметры.

---

## Props

| Property | Type | Description |
|----------|----------|-------------|
| [box-margin]         | `string`, `object`, `array` | Внешний отступ со всех сторон [sizes] |
| [box-padding]        | `string`, `object`, `array` | Внутренний отступ со всех сторон [sizes] |
| [box-background]     | `string`, `object`, `array` | Добавляет фон |
| [box-border]         | `string`, `object`, `array` | Добавляет рамку |
| [box-display]        | `string`, `object`, `array` | Отображение в документе |
| [box-position]       | `string`, `object`, `array` | Cпособ позиционирования |
| [box-place]          | `string`, `object`, `array` | Место позиционирования |
| [box-width] | [Mixes][mixes] | Ширина |
| [box-round] | [Mixes][mixes] | Скругление углов |


## Margin

- **box-margin-*** - additional options

```jsx
<Box box-margin='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin={value}>
                                <Example.Box>
                                    {`box-margin='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-top={value}>
                                <Example.Box>
                                    {`box-margin-top='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-bottom={value}>
                                <Example.Box>
                                    {`box-margin-bottom='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-right={value}>
                                <Example.Box>
                                    {`box-margin-right='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-left={value}>
                                <Example.Box>
                                    {`box-margin-left='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-tb={value}>
                                <Example.Box>
                                    {`box-margin-tb='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-lr={value}>
                                <Example.Box>
                                    {`box-margin-lr='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

## Padding

- **box-padding-*** - additional options

```jsx
<Box box-padding='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding={value}>
                                <Example.Box>
                                    {`box-padding='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-top={value}>
                                <Example.Box>
                                    {`box-padding-top='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-bottom={value}>
                                <Example.Box>
                                    {`box-padding-bottom='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-left={value}>
                                <Example.Box>
                                    {`box-padding-left='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-right={value}>
                                <Example.Box>
                                    {`box-padding-right='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-tb={value}>
                                <Example.Box>
                                    {`box-padding-tb='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-lr={value}>
                                <Example.Box>
                                    {`box-padding-lr='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

## Background

Set the background color depending on the [created theme][create_theme], used `background color` value.

```jsx
<Box box-background='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Box box-padding='xs' box-background={value}>
                        content
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

## Border

Set the border color depending on the [created theme][create_theme], used `border color` value.

```jsx
<Box box-border='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Box box-padding='xs' box-border={value}>
                        content
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

## Display

```jsx
<Box box-display='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['none', 'inline', 'inline-block', 'block']}>
                {(value) => (
                    <Box box-display={value}>
                        <Example.Box>
                            content
                        </Example.Box>
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

## Position

```jsx
<Box box-position='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['static', 'relative', 'absolute', 'fixed']}>
                {(value) => (
                    <Box box-position={value}>
                        <Example.Box>
                            content
                        </Example.Box>
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

## Place

```jsx
<Box box-place='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['top', 'top-left', 'top-right', 'center', 'center-left', 'center-right', 'bottom', 'bottom-left', 'bottom-right']}>
                {(value) => (
                    <Box box-position='relative' style={{ background: '#f8f8f8', width: 200, height: 200 }}>
                        <Box box-position='absolute' box-place={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

## Width

Read more about [mixes][mixes]

```jsx
<Box box-width='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', '1-1', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10']}>
                {(value) => (
                    <Box box-width={value}>
                        <Example.Box>
                            content
                        </Example.Box>
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

## Round

Read more about [mixes][mixes]

```jsx
<Box box-round='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div>
                        <Box box-round={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round
                        </Box>
                        <Box box-round-top={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-top
                        </Box>
                        <Box box-round-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-right
                        </Box>
                        <Box box-round-bottom={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-bottom
                        </Box>
                        <Box box-round-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-left
                        </Box>
                        <Box box-round-top-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-top-left
                        </Box>
                        <Box box-round-top-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-top-right
                        </Box>
                        <Box box-round-bottom-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-bottom-left
                        </Box>
                        <Box box-round-bottom-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-bottom-right
                        </Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```
