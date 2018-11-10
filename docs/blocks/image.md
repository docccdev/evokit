# Image

Чтобы применить этот компонент, просто добавьте класс `.ek-image` к тегу `<img>`.


``` html
<img
    class='ek-image'
    src='https://picsum.photos/100/100'
>
```

```jsx
/*react*/
<script>
const { Image } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <Image
                src='https://picsum.photos/100/100'
                width={100}
                height={100}
                alt=''
            />
        )
    }
}
</script>
```

---

## Горизонтальное выравнивание

|           Class           |          Description          |
|---------------------------|-------------------------------|
| `.ek-image_align_left`    | Выравнивание по левому краю.  |
| `.ek-image_align_center`  | Выравнивание по центру.       |
| `.ek-image_align_right`   | Выравнивание по правому краю. |

``` html
<img
    class='ek-image ek-image_align_center'
    src='https://picsum.photos/100/100'
>
```

```jsx
/*react*/
<script>
const { Image } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Image
                    image-align='left'
                    src='https://picsum.photos/100/100'
                    width={100}
                    height={100}
                    alt=''
                />
                <Image
                    image-align='right'
                    src='https://picsum.photos/100/100'
                    width={100}
                    height={100}
                    alt=''
                />
                <Image
                    image-align='center'
                    src='https://picsum.photos/100/100'
                    width={100}
                    height={100}
                    alt=''
                />
            </div>
        )
    }
}
</script>
```

---

## Вертикальное выравнивание

|            Class            |              Description              |
|-----------------------------|---------------------------------------|
| `.ek-image_valign_top`      | Выравнивание по верхнему краю строки. |
| `.ek-image_valign_middle`   | Выравнивание по середине.             |
| `.ek-image_valign_bottom`   | Выравнивание по нижнему краю.         |

``` html
<img
    class='ek-image ek-image_valign_middle'
    src='https://picsum.photos/100/100'
>
```

```jsx
/*react*/
<script>
const { Image, Grid } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <Grid grid-indent='xl'>
                <Grid.Item>
                    <Image
                        image-valign='top'
                        src='https://picsum.photos/100/100'
                        width={100}
                        height={100}
                        alt=''
                    />
                    top
                </Grid.Item>
                <Grid.Item>
                    <Image
                        image-valign='middle'
                        src='https://picsum.photos/100/100'
                        width={100}
                        height={100}
                        alt=''
                    />
                    middle
                </Grid.Item>
                <Grid.Item>
                    <Image
                        image-valign='bottom'
                        src='https://picsum.photos/100/100'
                        width={100}
                        height={100}
                        alt=''
                    />
                    bottom
                </Grid.Item>
            </Grid>
        )
    }
}
</script>
```

---

## Отражение

|         Class         |                     Description                     |
|-----------------------|-----------------------------------------------------|
| `.ek-image_mirror_x`  | Отражение по горизонтали                            |
| `.ek-image_mirror_y`  | Отражение по вертикали                              |
| `.ek-image_mirror_xy` | Одновременное отражение по горизонтали и вертикали  |

``` html
<img
    class='ek-image ek-image_mirror_y'
    src='https://picsum.photos/100/100'
>
```

```jsx
/*react*/
<script>
const { Image, Grid } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <Grid grid-indent='xl'>
                <Grid.Item>
                    original <br />
                    <Image
                        src='https://picsum.photos/100/100'
                        width={100}
                        height={100}
                        alt=''
                    />
                </Grid.Item>
                <Grid.Item>
                    horizontal <br />
                    <Image
                        image-mirror='x'
                        src='https://picsum.photos/100/100'
                        width={100}
                        height={100}
                        alt=''
                    />
                </Grid.Item>
                <Grid.Item>
                    vertical <br />
                    <Image
                        image-mirror='y'
                        src='https://picsum.photos/100/100'
                        width={100}
                        height={100}
                        alt=''
                    />
                </Grid.Item>
                <Grid.Item>
                    horizontal & vertical <br />
                    <Image
                        image-mirror='xy'
                        src='https://picsum.photos/100/100'
                        width={100}
                        height={100}
                        alt=''
                    />
                </Grid.Item>
            </Grid>
        )
    }
}
</script>
```
