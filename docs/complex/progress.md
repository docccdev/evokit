[box]: blocks/box.md
[text]: blocks/text.md

# Evokit - Progress

Examples for using custom progress bars featuring.
Mixed [Box][box] and [Text][text].

```jsx
/*react*/
<script>
const { Box } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <div>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='primary'
                        mix-round='xs'
                        style={{ width: 0, height: 16 }}
                    />
                </Box>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='primary'
                        mix-round='xs'
                        style={{ width: '25%', height: 16 }}
                    />
                </Box>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='primary'
                        mix-round='xs'
                        style={{ width: '50%', height: 16 }}
                    />
                </Box>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='primary'
                        mix-round='xs'
                        style={{ width: '75%', height: 16 }}
                    />
                </Box>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='primary'
                        mix-round='xs'
                        style={{ width: '100%', height: 16 }}
                    />
                </Box>
            </div>
        )
    }
}
</script>
```

### Label

```jsx
/*react*/
<script>
const { Box, Text } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Box box-background='muted' mix-round='xs'>
                <Box
                    box-position='relative'
                    box-background='primary'
                    mix-round='xs'
                    style={{ width: '25%', height: 16 }}
                >
                    <Box box-position='relative' box-place='center'>
                        <Text text-align='center' text-color='dark' text-size='default'>
                            25%
                        </Text>
                    </Box>
                </Box>
            </Box>
        )
    }
}
</script>
```

### Backgrounds

```jsx
/*react*/
<script>
const { Box } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <div>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='success'
                        mix-round='xs'
                        style={{ width: '25%', height: 16 }}
                    />
                </Box>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='info'
                        mix-round='xs'
                        style={{ width: '50%', height: 16 }}
                    />
                </Box>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='warning'
                        mix-round='xs'
                        style={{ width: '75%', height: 16 }}
                    />
                </Box>
                <Box box-background='muted' mix-round='xs' box-margin-tb='m'>
                    <Box
                        box-background='danger'
                        mix-round='xs'
                        style={{ width: '100%', height: 16 }}
                    />
                </Box>
            </div>
        )
    }
}
</script>
```
