[mix-round]: #mix-round
[mix-width]: #mix-width

[griditem]: blocks/grid.md#griditem


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
| [mix-width]  | `auto`, `expand`, `1-1`, `*-2`, `*-3`, `*-4`, `*-5`, `*-6`, `*-7`, `*-8`, `*-9`, `*-10`  | Ширина `9-10 = 90%` |
| [mix-round]  | `none`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `full` | Скругление углов |


### `mix-width`

- **expand** - use only for [griditem]

```jsx
/*react*/
<script>
const { Box, Grid, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'expand', '1-1', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10']}>
                {(value) => (
                    <Grid grid-indent='xs'>
                        <Grid.Item mix-width={value}>
                            <Box box-padding='xs' box-border='success'>
                                {`mix-width='${value || ''}'`}
                            </Box>
                        </Grid.Item>
                        <Grid.Item>
                            <Box box-padding='xs' box-border='success'>
                                content
                            </Box>
                        </Grid.Item>
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```


### `mix-round`

- **mix-round-*** - additional options

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
                        <Box mix-round={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round='${value || ''}'`}
                        </Box>
                        <Box mix-round-top={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round-top='${value || ''}'`}
                        </Box>
                        <Box mix-round-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round-right='${value || ''}'`}
                        </Box>
                        <Box mix-round-bottom={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round-bottom='${value || ''}'`}
                        </Box>
                        <Box mix-round-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round-left='${value || ''}'`}
                        </Box>
                        <Box mix-round-top-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round-top-left='${value || ''}'`}
                        </Box>
                        <Box mix-round-top-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round-top-right='${value || ''}'`}
                        </Box>
                        <Box mix-round-bottom-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round-bottom-left='${value || ''}'`}
                        </Box>
                        <Box mix-round-bottom-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            {`mix-round-bottom-right='${value || ''}'`}
                        </Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```
