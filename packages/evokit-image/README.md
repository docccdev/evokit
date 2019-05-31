[image]: #image
[image-align]: #image-align
[image-valign]: #image-valign
[image-mirror]: #image-mirror
[image-fit]: #image-fit
[image-round]: #image-round

[![](https://img.shields.io/npm/v/evokit-image.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/evokit-image)

# EvoKit - Image

Предназначен для отображения изображения

---

## Usage

- [Image][image]

```jsx
import { Image } from 'evokit-image';
import 'evokit-image/style.css';

<Image src='картинка.png' alt='картинка' />

```

---

## Image

| Props | Values | Description |
|-------|--------|-------------|
| [image-align]  | `left` `center` `right` | Горизонтальное выравнивание |
| [image-valign] | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Вертикальное выравнивание |
| [image-mirror] | `x` `y` `xy` | Отзеркаливание |
| [image-fit]    | `none` `fill` `contain` `cover` `scale-down` | Заполнение контейнера относительно его высоты и ширины |
| [image-round]  | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Скругление углов |

### `image-align`

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

### `image-valign`

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

### `image-mirror`

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

### `image-fit`

- `none` - не изменяет свой размер и заполняет пространство
- `fill` - меняет свой размер, чтобы заполнить всю область
- `contain` - меняет свой размер, чтобы подстроится под область
- `cover` - меняет свой размер, чтобы сохранять свои пропорции при заполнении блока
- `scale-down` - изменяет размер, сравнивая разницу между `none` и `contain`, чтобы найти наименьший конкретный размер объекта

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

### `image-round`

> Имеет дополнительные параметры, например `image-round-top`, `image-round-top-right` и другие.

- `none` - Скругление отсутствует
- `full` - Полное скругление
- `xxs, xs, s, m, l, xl, xxl` - Каждое последующее значение больше предыдущего на 2px, `xxs=2px`, `xs=4px`, `s=6px` и т.д.

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
            <Example values={['none', 'full', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
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
