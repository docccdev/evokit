const { Fragment } = React;
const { Grid, Box, Link, Text, List, Picture, Line } = EvoKit;

function ProductCart() {
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
                    <Picture>
                        <Picture.Item src={src} alt='' />
                    </Picture>
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

    const moreData = [
        'Мужской свитер бордо',
        'Свитер молодежный мужской',
        'Мягкий мужской свитер',
        'Свитер мужской тёплый',
        'Мужской свитер турция',
        'Жилеты и безрукавки мужские в Черновицкой области',
        'Пиджаки мужские в Винницкой области',
        'Верхняя одежда мужская в Волынской области',
        'Парная одежда в Днепропетровской области',
        'Рубашки мужские в Донецкой области',
    ];

    const More = (
        <Fragment>
            <Box box-margin-bottom='m'>
                <Text text-size='h1'>
                    Еще
                </Text>
            </Box>
            {moreData.map((value) => <Link link-lheight='medium' href='#'>{value}</Link>).reduce((prev, curr) => [prev, ', ', curr])}
        </Fragment>
    );

    const Recomended = (
        <Fragment>
            <Box box-margin-bottom='m'>
                <Text text-size='h1'>
                    Мы рекомендуем
                </Text>
            </Box>
            <Grid grid-column={2} grid-indent='xs'>
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
            </Grid>
        </Fragment>
    );

    const Attributes = (
        <Fragment>
            <Box box-margin-bottom='s'>
                <Text text-size='h1'>
                    Характеристики
                </Text>
            </Box>
            <Box box-margin-bottom='xs'>
                <Plug style={{ height: 150 }}>Attributes</Plug>
            </Box>
            <Link link-style='dotted'>
                Показать все
            </Link>
        </Fragment>
    );

    const Description = (
        <Fragment>
            <Box box-margin-bottom='s'>
                <Text text-size='h1'>
                    Описание
                </Text>
            </Box>
            <Text text-tag='div' text-lheight='large'>
                Свитер мужской молодежный.
                <br />
                Необычный дизайн свитера с оленями в скандинавском стиле: теплый, мягкий.
                <br />
                Приятный сюрприз к Новому году.
            </Text>
        </Fragment>
    );

    const OpinionProduct = (
        <Fragment>
            <Box box-margin-bottom='s'>
                <Text text-size='h1'>
                    Отзывы о товаре
                </Text>
            </Box>
            <Box box-margin-bottom='s'>
                <Text text-tag='div' text-lheight='medium'>
                    Об этом товаре пока что нет отзывов.
                    <br />
                    Вы можете оставить первый отзыв.
                </Text>
            </Box>
            <Plug style={{ height: 36, width: 210 }}>Button</Plug>
        </Fragment>
    );

    const OpinionCompany = (
        <Fragment>
            <Box box-margin-bottom='s'>
                <Text text-size='h1'>
                    Отзывы о компании&nbsp;
                    <Link href='#'>
                        boxmeup
                    </Link>
                </Text>
            </Box>
            <Box box-margin-bottom='s'>
                <Text text-tag='div' text-lheight='medium'>
                    Об этом товаре пока что нет отзывов.
                    <br />
                    Вы можете оставить первый отзыв.
                </Text>
            </Box>
            <Plug style={{ height: 36, width: 240 }}>Button</Plug>
        </Fragment>
    );

    const SimilarProducts = (
        <Fragment>
            <Box box-margin-bottom='s'>
                <Grid grid-align='justify' grid-valign='baseline'>
                    <Grid.Item>
                        <Text text-size='h1'>
                            Подобные товары других компаний
                        </Text>
                    </Grid.Item>
                    <Grid.Item>
                        <Link href='#'>
                            Смотреть все
                        </Link>
                    </Grid.Item>
                </Grid>
            </Box>
            <Plug style={{ height: 250 }}>SimilarProducts</Plug>
        </Fragment>
    );

    const Sidebar = (
        <List list-divider='transparent' list-indent='l'>
            <List.Item>
                <Box box-margin-bottom='m'>
                    <Link href='#' link-weight='bold' link-color='reset'>
                        boxmeup
                    </Link>
                </Box>
                <List list-indent='xs'>
                    <List.Item>
                        <Grid grid-indent='xs' grid-valign='middle' grid-wrap='nowrap'>
                            <Grid.Item>
                                <Plug style={{ width: 20, height: 20 }}></Plug>
                            </Grid.Item>
                            <Grid.Item mix-width='expand'>
                                <Link href='#' link-style='dotted'>
                                    Киев
                                </Link>
                            </Grid.Item>
                        </Grid>
                    </List.Item>
                    <List.Item>
                        <Grid grid-indent='xs' grid-valign='middle' grid-wrap='nowrap'>
                            <Grid.Item>
                                <Plug style={{ width: 20, height: 20 }}></Plug>
                            </Grid.Item>
                            <Grid.Item mix-width='expand'>
                                <Link href='#' link-style='dotted'>
                                    График работы
                                </Link>
                            </Grid.Item>
                        </Grid>
                    </List.Item>
                    <List.Item>
                        <Grid grid-indent='xs' grid-valign='middle' grid-wrap='nowrap'>
                            <Grid.Item>
                                <Plug style={{ width: 20, height: 20 }}></Plug>
                            </Grid.Item>
                            <Grid.Item mix-width='expand'>
                                <Link href='#' link-style='dotted'>
                                    +380 показать номер
                                </Link>
                            </Grid.Item>
                        </Grid>
                    </List.Item>
                </List>
            </List.Item>
            <List.Item>
                <Box box-margin-bottom='m'>
                    <Text text-weight='bold'>
                        Рейтинг продавца
                    </Text>
                </Box>
                Нет отзывов.&nbsp;
                <Link href='#'>
                    Добавить
                </Link>
            </List.Item>
            <List.Item>
                <Box box-margin-bottom='m'>
                    <Text text-weight='bold'>
                        Достижения продавца
                    </Text>
                </Box>
                <Grid grid-indent='xs' grid-valign='middle' grid-wrap='nowrap'>
                    <Grid.Item>
                        <Plug style={{ width: 40, height: 40 }}></Plug>
                    </Grid.Item>
                    <Grid.Item mix-width='expand'>
                        <Text text-lheight='medium'>
                            1 год
                            <br />
                            на портале
                        </Text>
                    </Grid.Item>
                </Grid>
            </List.Item>
        </List>
    );

    return (
        <Fragment>
            <Box box-margin-bottom='l'>
                {Breadcrumbs}
            </Box>
            <Box box-margin-bottom='m' box-background='light'>
                <Grid grid-divider='muted'>
                    <Grid.Item mix-width='expand'>
                        <Box box-padding='m'>
                            top
                        </Box>
                        <Line />
                        <Box box-padding='m'>
                            bottom
                        </Box>
                    </Grid.Item>
                    <Grid.Item mix-width='2-10'>
                        <Box box-padding='m'>
                            {Sidebar}
                        </Box>
                    </Grid.Item>
                </Grid>
            </Box>
            <Box box-margin-bottom='m'>
                <Grid grid-indent='xs'>
                    <Grid.Item mix-width='expand'>
                        <Box box-padding='m' box-background='light'>
                            <List list-indent='xl'>
                                <List.Item>
                                    {Attributes}
                                </List.Item>
                                <List.Item>
                                    {Description}
                                </List.Item>
                                <List.Item>
                                    {OpinionProduct}
                                </List.Item>
                                <List.Item>
                                    {OpinionCompany}
                                </List.Item>
                                <List.Item>
                                    {SimilarProducts}
                                </List.Item>
                            </List>
                        </Box>
                    </Grid.Item>
                    <Grid.Item mix-width='4-10'>
                        {Recomended}
                    </Grid.Item>
                </Grid>
            </Box>
            {More}
        </Fragment>
    );
}

ReactDOM.render(<ProductCart />, document.getElementById('ProductCart'));
