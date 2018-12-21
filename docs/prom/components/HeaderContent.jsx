const { Fragment } = React;
const { Grid, Box, Line, Link, Text, List } = EvoKit;

function HeaderContent() {
    const Plug = (props) => (
        <Box box-position='relative' box-background='info' {...props}>
            <Box box-position='absolute' box-place='center'>
                <Text text-wrap='nowrap'>
                    &lt;{props.children} /&gt;
                </Text>
            </Box>
        </Box>
    );

    const RightContentSidebar = (
        <Box box-padding-lr='m' box-background='muted' className='Height100Perc'>
            <Grid grid-align='center' grid-direction='column' grid-indent='l' className='Height100Perc'>
                <Grid.Item>
                    <Text text-lheight='medium' text-size='h3' text-weight='bold'>
                        Хотите продавать
                        <br />
                        на Prom.ua?
                    </Text>
                </Grid.Item>
                <Grid.Item>
                    <Plug style={{ height: 40 }}>Button</Plug>
                </Grid.Item>
                <Grid.Item>
                    <Grid grid-valign='middle' grid-indent='xs'>
                        <Grid.Item grid-width='expand'>
                            <Line />
                        </Grid.Item>
                        <Grid.Item>
                            или
                        </Grid.Item>
                        <Grid.Item grid-width='expand'>
                            <Line />
                        </Grid.Item>
                    </Grid>
                </Grid.Item>
                <Grid.Item>
                    <List list-indent='xxs'>
                        <List.Item>
                            <Link href="#">
                                Подать частное объявление
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#" link-color='muted' link-style='dotted'>
                                Подробнее
                            </Link>
                        </List.Item>
                    </List>
                </Grid.Item>
            </Grid>
        </Box>
    );

    const BannerContent = ({ children }) => (
        <Box box-padding-lr='s'>
            <Grid grid-valign='middle' grid-indent='xs'>
                <Grid.Item>
                    <Plug style={{ height: 30, width: 30 }}></Plug>
                </Grid.Item>
                <Grid.Item grid-width='expand'>
                    {children}
                </Grid.Item>
            </Grid>
        </Box>
    );

    return (
        <Fragment>
            <Grid grid-indent='xs'>
                <Grid.Item grid-width='2-10'>
                    <Plug style={{ height: '100%' }}>Navigation</Plug>
                </Grid.Item>
                <Grid.Item grid-width='expand'>
                    <Grid grid-indent='xs'>
                        <Grid.Item grid-width='expand'>
                            <Plug style={{ height: 360 }}>Banner</Plug>
                        </Grid.Item>
                        <Grid.Item grid-width='1-4'>
                            {RightContentSidebar}
                        </Grid.Item>
                    </Grid>
                    <Box box-padding-tb='xxl' box-border='muted' box-margin-top='xs'>
                        <Grid grid-wrap='nowrap' grid-align='center' grid-indent='xxs' grid-divider='muted' grid-valign='middle'>
                            <Grid.Item>
                                <BannerContent>
                                    <Text text-weight='bold'>
                                        Можно купить все
                                    </Text>
                                    <Box box-margin-top='xxs'>
                                        113 612 824 товаров и услуг
                                    </Box>
                                </BannerContent>
                            </Grid.Item>
                            <Grid.Item>
                                <BannerContent>
                                    <Text text-weight='bold'>
                                        Лучшие цены
                                    </Text>
                                    <Box box-margin-top='xxs'>
                                        Найдите дешевле
                                    </Box>
                                </BannerContent>
                            </Grid.Item>
                            <Grid.Item>
                                <BannerContent>
                                    <Text text-weight='bold'>
                                        Проверенные продавцы
                                    </Text>
                                    <Box box-margin-top='xxs'>
                                        Рейтинг по отзывам
                                    </Box>
                                </BannerContent>
                            </Grid.Item>
                            <Grid.Item>
                                <BannerContent>
                                    <Text text-weight='bold'>
                                        Покупка без риска
                                    </Text>
                                    <Box box-margin-top='xxs'>
                                        В посылке то, что на картинке
                                    </Box>
                                </BannerContent>
                            </Grid.Item>
                        </Grid>
                    </Box>
                </Grid.Item>
            </Grid>
            <Box box-margin-top='s'>
                <Plug style={{ height: 80 }}>Banner</Plug>
            </Box>
        </Fragment>
    );
}

ReactDOM.render(<HeaderContent />, document.getElementById('HeaderContent'));
