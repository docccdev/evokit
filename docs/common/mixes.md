[mix-round]: #mix-round


# EvoKit - Mixes

Mixes are just the way to use common behaviors and styles.

## Usage

```jsx
import { Box } from 'evokit';

...

<Box mix-round='m'>
    content
</Box>

```

---

## Properties

| Options | Values | Description |
|----------|----------|-------------|
| [mix-round]  | `none`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `full` | Скругление углов |

### `mix-round`

Some options:

- `mix-round-top`
- `mix-round-right`
- `mix-round-bottom`
- `mix-round-left`
- `mix-round-top-left`
- `mix-round-top-right`
- `mix-round-bottom-left`
- `mix-round-bottom-right`

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
                        <Box className='fsdfds' mix-round={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round
                        </Box>
                        <Box mix-round-top={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round-top
                        </Box>
                        <Box mix-round-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round-right
                        </Box>
                        <Box mix-round-bottom={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round-bottom
                        </Box>
                        <Box mix-round-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round-left
                        </Box>
                        <Box mix-round-top-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round-top-left
                        </Box>
                        <Box mix-round-top-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round-top-right
                        </Box>
                        <Box mix-round-bottom-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round-bottom-left
                        </Box>
                        <Box mix-round-bottom-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            mix-round-bottom-right
                        </Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```
