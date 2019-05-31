[picture]: #picture
[pictureitem]: #pictureitem

[picture-fit]: #picture-fit
[picture-round]: #picture-round

# EvoKit - Picture

[![](https://img.shields.io/npm/v/evokit-picture.svg)](https://www.npmjs.com/package/evokit-picture)

Создает квадрат с изображением.

---

## Usage

- [Picture][picture]
- [Picture.Item][pictureitem]

```jsx
import { Picture } from 'evokit-picture';
import 'evokit-picture/style.css';

<Picture>
    <Picture.Item
        src='картинка.png'
        alt='картинка'
    />
</Picture>

```

---

## Picture

| Props | Values | Description |
|-------|--------|-------------|
| [picture-fit]   | `none` `fill` `contain` `cover` `scale-down` | Заполнение контейнера относительно его высоты и ширины |
| [picture-round] | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Скругление углов |

### `picture-fit`

- `none` - не изменяет свой размер и заполняет пространство
- `fill` - меняет свой размер, чтобы заполнить всю область
- `contain` - меняет свой размер, чтобы подстроится под область
- `cover` - меняет свой размер, чтобы сохранять свои пропорции при заполнении блока
- `scale-down` - изменяет размер, сравнивая разницу между `none` и `contain`, чтобы найти наименьший конкретный размер объекта

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

> Имеет дополнительные параметры, например `picture-round-top`, `picture-round-top-right` и другие.

- `none` - Скругление отсутствует
- `full` - Полное скругление
- `xxs, xs, s, m, l, xl, xxl` - Каждое последующее значение больше предыдущего на 2px, `xxs=2px`, `xs=4px`, `s=6px` и т.д.

```jsx
<Picture picture-round='...'></Picture>
```

```jsx
/*react*/
<script>
const { Picture, Grid, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'full', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
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
