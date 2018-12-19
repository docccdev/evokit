```jsx
/*react*/
<script>
const {
    Example,
    // evokit blocks
    Grid,
    Box,
    Text,
    Picture,
    Link,
} = EvoKit;

export default class ExampleGrid extends React.Component {

    renderCard() {
        const userInfo = (
            <Grid grid-valign='middle' grid-indent='xs'>
                <Grid.Item>
                    <div style={{ width: 30 }}>
                        <Picture
                            picture-style='round'
                            picture-size='cover'
                            src='https://picsum.photos/60/40'
                        />
                    </div>
                </Grid.Item>
                <Grid.Item grid-width='expand'>
                    <Text text-lheight='medium' text-wrap='ellipsis'>
                         Margenko Evgene Sergeyevich
                    </Text>
                </Grid.Item>
            </Grid>
        );

        return (
            <Box box-background='minor' box-border='muted' box-round='m'>
                <Picture
                    style={{ borderRadius: '8px 8px 0 0' }}
                    src='https://picsum.photos/300/300'
                />
                <Box box-padding='m'>
                    <Text text-wrap='break' text-lheight='medium'>
                        This is a wider card with supporting text below asa natural
                        lead-in to additional content. This content is a little bit longer.
                    </Text>
                    <Box box-margin-top='m'>
                        <Grid grid-indent='m' grid-wrap='nowrap' grid-valign='middle' grid-align='justify'>
                            <Grid.Item>
                                {userInfo}
                            </Grid.Item>
                            <Grid.Item>
                                <Text text-wrap='nowrap' text-color='muted' text-size='small'>
                                    9 mins
                                </Text>
                            </Grid.Item>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        );
    }

    render() {
        return (
            <div>
                <Box box-padding-tb='xxl' box-margin-lr='auto' box-width='6-10'>
                    <Box box-margin-bottom='m'>
                        <Text text-size='h1' text-weight='bold' text-align='center'>
                            Album example
                        </Text>
                    </Box>
                    <Box box-margin-bottom='m'>
                        <Text text-size='h3' text-lheight='medium' text-align='center' text-color='muted'>
                            Something short and leading about the collection
                            below—its contents, the creator, etc. Make it short and sweet,
                            but not too short so folks don't simply skip over it entirely.
                        </Text>
                    </Box>
                    <Text text-align='center'>
                        <Link>
                            See all
                        </Link>
                    </Text>
                </Box>
                <Box box-background='muted' box-padding='xxl'>
                    <Grid grid-column='3' grid-indent='m'>
                        <Grid.Item>
                            {this.renderCard()}
                        </Grid.Item>
                        <Grid.Item>
                            {this.renderCard()}
                        </Grid.Item>
                        <Grid.Item>
                            {this.renderCard()}
                        </Grid.Item>
                        <Grid.Item>
                            {this.renderCard()}
                        </Grid.Item>
                        <Grid.Item>
                            {this.renderCard()}
                        </Grid.Item>
                        <Grid.Item>
                            {this.renderCard()}
                        </Grid.Item>
                    </Grid>
                </Box>
            </div>
        )
    }
}
</script>
```
