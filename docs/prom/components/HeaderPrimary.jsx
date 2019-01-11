const { Grid, Box, Text, Image } = EvoKit;

function HeaderPrimary() {
    const Plug = (props) => (
        <Box box-position='relative' box-background='light' {...props}>
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
                        src='//static-cache.ua.prom.ua/image/portal/UA/logo_white.svg'
                        height={28}
                        alt=''
                    />
                </a>
            </Grid.Item>
            <Grid.Item mix-width='1-7'>
                <Plug style={{ height: 36 }}>HeaderRegion</Plug>
            </Grid.Item>
            <Grid.Item mix-width='expand'>
                <Plug style={{ height: 36 }}>HeaderSearch</Plug>
            </Grid.Item>
            <Grid.Item mix-width='1-7'>
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

ReactDOM.render(<HeaderPrimary />, document.getElementById('HeaderPrimary'));
