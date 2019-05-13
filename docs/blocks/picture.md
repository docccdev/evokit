[mixes]: common/mixes.md

[picture]: #picture
[picture-fit]: #picture-fit
[picture-round]: #picture-round

# EvoKit - Picture

Создает квадрат с изображением.

---

## Usage

- [Picture][picture]

```jsx
import { Picture } from 'evokit';
import 'evokit/dist/style.css';

...

<Picture>
    <Picture.Item src='картинка.png' alt='картинка' />
</Picture>

```

---

## Picture

| Property | Type | Description |
|----------|----------|-------------|
| [picture-fit]    | `string`, `object`, `array` | Заполнение контейнера относительно его высоты и ширины |
| [picture-round] | [Mixes][mixes] | Скругление углов |

### `picture-fit`

```jsx
/*react*/
<script>
const { Picture, Box, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'fill', 'contain', 'cover', 'scale-down']}>
                {(value) => (
                    <div>
                        <Box box-margin-right='xs' box-display='inline-block' style={{ width: 100 }}>
                            <Picture picture-fit={value}>
                                <Picture.Item src='https://picsum.photos/200/100' alt='' />
                            </Picture>
                        </Box>
                        <Box box-margin-right='xs' box-display='inline-block' style={{ width: 100 }}>
                            <Picture picture-fit={value}>
                                <Picture.Item src='https://picsum.photos/100/200' alt='' />
                            </Picture>
                        </Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round`

```jsx
/*react*/
<script>
const { Picture, Grid, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Grid grid-indent='xs' grid-column='expand'>
                        <Grid.Item>
                            <Picture picture-round={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture picture-round-top={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture picture-round-right={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture picture-round-bottom={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture picture-round-left={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture picture-round-top-left={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture picture-round-top-right={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture picture-round-bottom-left={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture picture-round-bottom-right={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```
