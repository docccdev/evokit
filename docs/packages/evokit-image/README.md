[mixes]: common/mixes.md

[image-align]: #align
[image-valign]: #valign
[image-mirror]: #mirror
[image-fit]: #fit

[image-round]: #image-round

# EvoKit - Image

Предназначен для отображения изображения.

---

## Props

| Property | Type | Description |
|----------|----------|-------------|
| [image-align]    | `string`, `object`, `array` | Горизонтальное выравнивание |
| [image-valign]    | `string`, `object`, `array` | Вертикальное выравнивание |
| [image-mirror]     | `string`, `object`, `array` | Отзеркаливание |
| [image-fit]     | `string`, `object`, `array` | Заполнение контейнера относительно его высоты и ширины |
| [image-round] | [Mixes][mixes] | Скругление углов |

## Align

```jsx
<Image src='' image-align='...' />
```

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['left', 'center', 'right']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-align={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

## Valign

```jsx
<Image src='' image-valign='...' />
```

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['baseline', 'top', 'bottom', 'middle', 'super', 'sub', 'text-top', 'text-bottom']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ display: 'inline-block' }}>
                            text
                        </Example.Box>
                        <Image
                            src='https://picsum.photos/120/120'
                            width={60}
                            height={60}
                            image-valign={value}
                        />
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

## Mirror

```jsx
<Image src='' image-mirror='...' />
```

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['x', 'y', 'xy']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-mirror={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

## Fit

```jsx
<Image src='' image-fit='...' />
```

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'fill', 'contain', 'cover', 'scale-down']}>
                {(value) => (
                    <Example.Box style={{ display: 'inline-block', padding: 5 }}>
                        <Image
                            src='https://picsum.photos/200/100'
                            width={100}
                            height={100}
                            image-fit={value}
                            image-valign='top'
                        />
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

## image-round

Read more about [mixes][mixes]

```jsx
<Image src='' image-round='...' />
```

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div>
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round={value}
                        />
                        &nbsp;&nbsp;
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round-top={value}
                        />
                        &nbsp;&nbsp;
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round-right={value}
                        />
                        &nbsp;&nbsp;
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round-bottom={value}
                        />
                        &nbsp;&nbsp;
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round-left={value}
                        />
                        &nbsp;&nbsp;
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round-top-left={value}
                        />
                        &nbsp;&nbsp;
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round-top-right={value}
                        />
                        &nbsp;&nbsp;
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round-bottom-left={value}
                        />
                        &nbsp;&nbsp;
                        <Image
                            src='https://picsum.photos/200/200'
                            width={100}
                            height={100}
                            image-round-bottom-right={value}
                        />
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```
