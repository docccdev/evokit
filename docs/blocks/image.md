[image-align]: #image-align
[image-valign]: #image-valign
[image-mirror]: #image-mirror

[image]: #image

# EvoKit - Image

Предназначен для отображения изображения.

---

## Usage

- [Image][image]

```jsx
// Common import for all blocks and css
import { Image } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Image from 'evokit/dist/Image';
import 'evokit/dist/Image/style.css';

...

<Image src='картинка.png' alt='картинка'>

```

---

## Image

| Property | Type | Description |
|----------|----------|-------------|
| [image-align]    | `string`, `object`, `array` | Горизонтальное выравнивание |
| [image-valign]    | `string`, `object`, `array` | Вертикальное выравнивание |
| [image-mirror]     | `string`, `object`, `array` | Отзеркаливание |

### `image-align`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleList extends React.Component {
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
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleList extends React.Component {
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
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleList extends React.Component {
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
