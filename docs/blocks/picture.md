[picture-size]: #picture-size
[picture-style]: #picture-style

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

<Picture src='картинка.png' alt='картинка' />

```

---

## Picture

| Property | Type | Description |
|----------|----------|-------------|
| [picture-size]    | `string`, `object`, `array` | Пропорции изображения |
| [picture-style]    | `string`, `object`, `array` | Скругление изображения |

### `picture-size`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['cover']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ width: 100, display: 'inline-block', padding: 5 }}>
                            <Picture
                                src='https://picsum.photos/200/100'
                                picture-size={value}
                            />
                        </Example.Box>
                        <Example.Box style={{ width: 100, display: 'inline-block', padding: 5 }}>
                            <Picture
                                src='https://picsum.photos/100/200'
                                picture-size={value}
                            />
                        </Example.Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-style`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['round']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ width: 100, display: 'inline-block', padding: 5 }}>
                            <Picture
                                src='https://picsum.photos/200/200'
                                picture-style={value}
                            />
                        </Example.Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```
