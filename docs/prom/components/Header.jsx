const { Grid, Box, Text, Image } = EvoKit;

function Header() {
    const Plug = (props) => (
        <Box box-position='relative' box-background='info' {...props}>
            <Box box-position='absolute' box-place='center'>
                <Text text-wrap='nowrap'>
                    &lt;{props.children} /&gt;
                </Text>
            </Box>
        </Box>
    );

    return (
        <Grid grid-valign='middle' grid-indent='m'>
            <Grid.Item>
                <a href='#'>
                    <Image
                        image-valign='top'
                        src='//static-cache.ua.prom.ua/image/portal/UA/logo.svg'
                        height={28}
                        alt=''
                    />
                </a>
            </Grid.Item>
            <Grid.Item grid-width='expand'>
                <Plug style={{ height: 36 }}>HeaderSearch</Plug>
            </Grid.Item>
            <Grid.Item grid-width='1-7'>
                <Plug style={{ height: 36 }}>HeaderRegion</Plug>
            </Grid.Item>
            <Grid.Item>
                <Plug style={{ height: 36, width: 36 }} />
            </Grid.Item>
            <Grid.Item>
                <Plug style={{ height: 36, width: 36 }} />
            </Grid.Item>
        </Grid>
    );
}

ReactDOM.render(<Header />, document.getElementById('Header'));
