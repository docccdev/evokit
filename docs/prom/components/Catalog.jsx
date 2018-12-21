const { Fragment } = React;
const { Grid, Box, Link, Text, List, Picture } = EvoKit;

function Catalog() {
    const Plug = (props) => (
        <Box box-position='relative' box-background='info' {...props}>
            <Box box-position='absolute' box-place='center'>
                <Text text-wrap='nowrap'>
                    &lt;{props.children} /&gt;
                </Text>
            </Box>
        </Box>
    );

    const Breadcrumbs = (
        <Grid grid-indent='xxs'>
            <Grid.Item>
                <Link href="#">
                    Prom.ua
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Text text-size='small'>
                    /
                </Text>
            </Grid.Item>
            <Grid.Item>
                <Link href="#">
                    Потребительские товары
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Text text-size='small'>
                    /
                </Text>
            </Grid.Item>
            <Grid.Item>
                <Link href="#">
                    Одежда и обувь
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Text text-size='small'>
                    /
                </Text>
            </Grid.Item>
            <Grid.Item>
                <Link href="#">
                    Одежда женская
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Text text-size='small'>
                    /
                </Text>
            </Grid.Item>
            <Grid.Item>
                Свитеры и кардиганы женские
            </Grid.Item>
        </Grid>
    );

    const Product = ({ src, priceOld }) => (
        <Box box-padding='m' box-background='default' className='Height100Perc'>
            <Box box-margin-bottom='xs'>
                <a href="#">
                    <Picture
                        src={src}
                        alt=''
                    />
                </a>
            </Box>
            <Box box-margin-bottom='xs'>
                <Plug style={{ height: 25, width: 75 }}>Label</Plug>
            </Box>
            {priceOld ? (
                <Fragment>
                    <Box box-margin-bottom='xxs'>
                        <Text text-color='danger' text-weight='bold' text-size='h5'>
                            599 грн.
                        </Text>
                    </Box>
                    <Box box-margin-bottom='xs'>
                        <Text text-weight='bold' text-style='strike'>
                            599 грн.
                        </Text>
                    </Box>
                </Fragment>
            ) : (
                <Box box-margin-bottom='xs'>
                    <Text text-weight='bold' text-size='h5'>
                        599 грн.
                    </Text>
                </Box>
            )}
            <Box box-margin-bottom='xs'>
                <Text text-color='success'>
                    В наличии
                </Text>
            </Box>
            <Text text-lheight='medium' text-wrap='two-line'>
                <Link href="#" link-lheight='medium' link-color='reset' link-style='multi-line'>
                    SKMEI ILLUMINATOR мужские спортивные часы SKMEI ILLUMINATOR мужские спортивные часы
                </Link>
            </Text>
        </Box>
    );

    const Sort = (
        <Grid grid-valign='middle' grid-align='justify'>
            <Grid.Item>
                <Grid grid-indent='xl'>
                    <Grid.Item>
                        <Text text-weight='bold'>
                            Все
                        </Text>
                    </Grid.Item>
                    <Grid.Item>
                        <Link href='#'>
                            Магазины
                        </Link>
                    </Grid.Item>
                    <Grid.Item>
                        <Link href='#'>
                            Объявления
                        </Link>
                    </Grid.Item>
                </Grid>
            </Grid.Item>
            <Grid.Item>
                <Grid grid-indent='xl'>
                    <Grid.Item>
                        <Text text-weight='bold'>
                            По рейтингу
                        </Text>
                    </Grid.Item>
                    <Grid.Item>
                        <Link href='#'>
                            Дешевые
                        </Link>
                    </Grid.Item>
                    <Grid.Item>
                        <Link href='#'>
                            Дорогие
                        </Link>
                    </Grid.Item>
                </Grid>
            </Grid.Item>
        </Grid>
    );

    return (
        <Box>
            <Box box-margin-bottom='l'>
                {Breadcrumbs}
            </Box>
            <Box box-margin-bottom='xl'>
                <Text text-size='h2'>
                    Свитеры и кардиганы женские в Украине
                </Text>
            </Box>
            <Box box-margin-bottom='m' box-width='5-6' box-margin-left='auto'>
                {Sort}
            </Box>
            <Grid grid-indent='xs'>
                <Grid.Item grid-width='1-6'>
                    <Plug style={{ height: '25%' }}>Filter</Plug>
                </Grid.Item>
                <Grid.Item grid-width='expand'>
                    <Grid grid-column={5} grid-indent='xs'>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1338955288_w200_h200_skmei_illuminator_main_700x700.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product
                                src='https://images.ua.prom.st/1206848884_w200_h200_bgb_w720_70546_hd.jpg'
                                priceOld
                            />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/195442043_w200_h200_cid2069607_pid112479646-3e4c19be.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1108694084_w200_h200_cid436057_pid666275961-f44e8d90.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/664535859_w200_h200_2sekvzj7nx4.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1256186103_w200_h200_cid2955133_pid746948733-019d8a15.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/862599301_w200_h200_bgb_b720_84218.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/185373441_w200_h200_acura_mdx_1308__7589_1_big.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/106536230_w200_h200_51r19zpewtl._sy300_.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1338955288_w200_h200_skmei_illuminator_main_700x700.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product
                                src='https://images.ua.prom.st/1206848884_w200_h200_bgb_w720_70546_hd.jpg'
                                priceOld
                            />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/195442043_w200_h200_cid2069607_pid112479646-3e4c19be.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1108694084_w200_h200_cid436057_pid666275961-f44e8d90.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/664535859_w200_h200_2sekvzj7nx4.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1256186103_w200_h200_cid2955133_pid746948733-019d8a15.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/862599301_w200_h200_bgb_b720_84218.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/185373441_w200_h200_acura_mdx_1308__7589_1_big.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/106536230_w200_h200_51r19zpewtl._sy300_.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1338955288_w200_h200_skmei_illuminator_main_700x700.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product
                                src='https://images.ua.prom.st/1206848884_w200_h200_bgb_w720_70546_hd.jpg'
                                priceOld
                            />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/195442043_w200_h200_cid2069607_pid112479646-3e4c19be.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1108694084_w200_h200_cid436057_pid666275961-f44e8d90.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/664535859_w200_h200_2sekvzj7nx4.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/1256186103_w200_h200_cid2955133_pid746948733-019d8a15.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/862599301_w200_h200_bgb_b720_84218.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/185373441_w200_h200_acura_mdx_1308__7589_1_big.jpg' />
                        </Grid.Item>
                        <Grid.Item>
                            <Product src='https://images.ua.prom.st/106536230_w200_h200_51r19zpewtl._sy300_.jpg' />
                        </Grid.Item>
                    </Grid>
                </Grid.Item>
            </Grid>
        </Box>
    );
}

ReactDOM.render(<Catalog />, document.getElementById('Catalog'));
