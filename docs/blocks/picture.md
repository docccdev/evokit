[mixes]: common/mixes.md

[picture-fit]: #picture-fit

[mix-round]: #mix-round

[picture]: #picture

# EvoKit - Picture

Создает квадрат с изображением.

---

## Usage

- [Picture][picture]

```jsx
// Common import for all blocks and css
import { Picture } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Picture from 'evokit/dist/Picture';
import 'evokit/dist/Picture/style.css';

...

<Picture>
    <Picture.Item src='картинка.png' alt='картинка' />
</Picture>

```

---

## Picture

#### Base options:

| Property | Type | Description |
|----------|----------|-------------|
| [picture-fit]    | `string`, `object`, `array` | Заполнение контейнера относительно его высоты и ширины |

#### Mix options:

| Property | About | Description |
|----------|----------|-------------|
| [mix-round] | [Mixes][mixes] | Скругление углов |

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

### `mix-round`

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
                            <Picture mix-round={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture mix-round-top={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture mix-round-right={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture mix-round-bottom={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture mix-round-left={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture mix-round-top-left={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture mix-round-top-right={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture mix-round-bottom-left={value}>
                                <Picture.Item src='https://picsum.photos/200/200' alt='' />
                            </Picture>
                        </Grid.Item>
                        <Grid.Item>
                            <Picture mix-round-bottom-right={value}>
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
