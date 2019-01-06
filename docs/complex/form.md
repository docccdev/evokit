[list]: blocks/list.md
[grid]: blocks/grid.md
[box]: blocks/box.md
[text]: blocks/text.md

# Evokit - Form

Examples and usage guidelines for form control styles and layout options.
Mixed [Grid][grid], [List][list], [Box][box] and [Text][text].

```jsx
/*react*/
<script>
const { List, Grid, Box, Text } = EvoKit;

export default class ExampleImage extends React.Component {
    renderCheckbox = () => (
        <Grid grid-valign='middle' grid-indent='xs'>
            <Grid.Item>
                <input type='checkbox' id='checkbox' name='checkbox' style={{ margin: 0 }} />
            </Grid.Item>
            <Grid.Item>
                <Text text-tag='label' htmlFor='checkbox'>
                    Check me out
                </Text>
            </Grid.Item>
        </Grid>
    );

    renderEmail = () => (
        <div>
            <Box box-margin-bottom='xs'>
                <Text text-tag='label' htmlFor='email'>
                    Email address
                </Text>
            </Box>
            <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter email'
                style={{ width: '100%', boxSizing: 'border-box' }}
            />
            <Box>
                <Text text-size='small' text-color='muted'>
                    We'll never share your email with anyone else.
                </Text>
            </Box>
        </div>
    );

    renderPassword = () => (
        <div>
            <Box box-margin-bottom='xs'>
                <Text text-tag='label' htmlFor='password'>
                    Password
                </Text>
            </Box>
            <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                style={{ width: '100%', boxSizing: 'border-box' }}
            />
        </div>
    );

    render() {
        return (
            <form>
                <List list-indent='m'>
                    <List.Item>
                        {this.renderEmail()}
                    </List.Item>
                    <List.Item>
                        {this.renderPassword()}
                    </List.Item>
                    <List.Item>
                        {this.renderCheckbox()}
                    </List.Item>
                    <List.Item>
                        <button type='reset'>
                            Submit
                        </button>
                    </List.Item>
                </List>
            </form>
        )
    }
}
</script>
```
