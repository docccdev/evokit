const { Fragment } = React;
const {
    Body,
    Grid,
    Box,
    Line,
    Link,
    Text,
    Image,
    List,
} = EvoKit;

function Plug(props) {
    return (
        <Box box-position='relative' box-background='info' {...props}>
            <Box box-position='absolute' box-place='center'>
                <Text text-wrap='nowrap'>
                    &lt;{props.children} /&gt;
                </Text>
            </Box>
        </Box>
    );
}

function HeaderService() {
    const leftContent = (
        <Grid grid-indent='xs'>
            <Grid.Item>
                <Text text-color='muted'>
                    UA
                </Text>
            </Grid.Item>
            <Grid.Item>
                <Text text-color='muted'>|</Text>
            </Grid.Item>
            <Grid.Item>
                <Link href='#' link-color='reset'>
                    RU
                </Link>
            </Grid.Item>
        </Grid>
    );

    const rightContent = (
        <Grid grid-indent='xxl'>
            <Grid.Item>
                <Link href='#' link-color='reset'>
                    Подать частное объявление
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#' link-color='reset'>
                    Мобильное приложение
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#' link-color='reset'>
                    Войти
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#' link-color='reset'>
                    Зарегистрироваться
                </Link>
            </Grid.Item>
        </Grid>
    );

    return (
        <Box box-padding-tb='xs'>
            <Grid grid-align='justify'>
                <Grid.Item>
                    {leftContent}
                </Grid.Item>
                <Grid.Item>
                    {rightContent}
                </Grid.Item>
            </Grid>
        </Box>
    );
}

function Header() {
    return (
        <Box box-padding-tb='xs'>
            <Grid grid-valign='middle' grid-indent='m'>
                <Grid.Item>
                    <a href='#'>
                        <Image
                            image-valign='top'
                            src='//static-cache.ua.prom.ua/image/portal/UA/logo.png'
                            srcset='
                                //static-cache.ua.prom.ua/image/portal/UA/logo.svg 1x,
                                //static-cache.ua.prom.ua/image/portal/UA/logo.svg 2x,
                                //static-cache.ua.prom.ua/image/portal/UA/logo.svg 3x,
                                //static-cache.ua.prom.ua/image/portal/UA/logo.svg 4x
                            '
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
        </Box>
    );
}

function HeaderNav() {
    const SelfLink = ({ children }) => (
        <a href="#" className='HeaderNavLink'>
            {children}
        </a>
    )

    return (
        <Grid grid-column='expand'>
            <Grid.Item>
                <SelfLink>
                    Потребительские товары
                </SelfLink>
            </Grid.Item>
            <Grid.Item>
                <SelfLink>
                    Товары для бизнеса
                </SelfLink>
            </Grid.Item>
            <Grid.Item>
                <SelfLink>
                    Услуги
                </SelfLink>
            </Grid.Item>
            <Grid.Item>
                <SelfLink>
                    Частные объявления
                </SelfLink>
            </Grid.Item>
        </Grid>
    );
}

function HeaderContent() {
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
        <Box box-padding-tb='xl'>
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
        </Box>
    );
}

function Footer() {
    const MenuTitle = ({ children }) => (
        <Box box-margin-bottom='m'>
            <Text text-weight='bold'>
                {children}
            </Text>
        </Box>
    )

    const MenuList = (data) => (
        <List list-indent='s'>
            {data.map((value) => (
                <List.Item>
                    <Link href="#" link-lheight='medium' link-size='small' link-color='reset'>
                        {value}
                    </Link>
                </List.Item>
            ))}
        </List>
    )

    const MenuData1 = [
        'Как покупать на Prom.ua',
        'О сертифицированных компаниях',
        'Как покупать с Покупкой без риска',
        'Как оставить полезный отзыв',
        'Программа Защиты Покупателей',
        'Рекомендации по безопасным покупкам',
        'Покупателям с почтой .ru',
    ];

    const MenuData2 = [
        'Создать сайт на Prom.ua',
        'Тарифы',
        'Как продавать с Покупкой без риска',
        'Отзывы клиентов Prom.ua',
        'Рейтинг компаний по посещениям',
        'Пользовательское соглашение',
        'Политика конфиденциальности',
        'Правила пользования порталом',
        'Правила оформления товаров и услуг',
        'Руководство Google Ads',
    ];

    const MenuData3 = [
        'О Prom.ua',
        'СМИ о нас',
        'Работа в Prom.ua',
        'Реклама на Prom.ua',
        'Объявления на Prom.ua',
        'Справка и FAQ',
        'Администрация',
    ];

    const MenuData4 = [
        'EVO.business',
        'Kabanchik.ua',
        'Вчасно',
        'Crafta.ua',
        'Zakupki.prom.ua',
        'Shafa',
        'Bigl.ua',
        'Официальные дилеры Prom.ua',
        'RIA.com',
    ];

    const MenuData5 = [
        'Беларусь',
        'Казахстан',
        'Молдова',
        'Бразилия',
        'Турция',
    ];

    return (
        <Box box-margin-tb='m'>
            <Grid grid-indent='m' grid-column='expand'>
                <Grid.Item>
                    <MenuTitle>
                        Покупателям
                    </MenuTitle>
                    {MenuList(MenuData1)}
                </Grid.Item>
                <Grid.Item>
                    <MenuTitle>
                        Продавцам
                    </MenuTitle>
                    {MenuList(MenuData2)}
                </Grid.Item>
                <Grid.Item>
                    <MenuTitle>
                        О нас
                    </MenuTitle>
                    {MenuList(MenuData3)}
                </Grid.Item>
                <Grid.Item>
                    <MenuTitle>
                        Партнеры
                    </MenuTitle>
                    {MenuList(MenuData4)}
                </Grid.Item>
                <Grid.Item>
                    <MenuTitle>
                        Другие страны
                    </MenuTitle>
                    {MenuList(MenuData5)}
                </Grid.Item>
            </Grid>
        </Box>
    );
}

function SearchTags() {
    const MenuList = (data) => (
        <List list-indent='s'>
            {data.map((value) => (
                <List.Item>
                    <Link href="#" link-lheight='medium'>
                        {value}
                    </Link>
                </List.Item>
            ))}
        </List>
    )

    const MenuData1 = [
        'Куртки женские',
        'Автозапчасти',
        'Шины и диски',
        'Радиаторы и обогреватели',
    ];

    const MenuData2 = [
        'Спортивные костюмы',
        'Мягкая мебель для дома',
        'Товары для рыбалки',
        'Котлы твердотопливные',
    ];

    const MenuData3 = [
        'Планшетные компьютеры',
        'Детская одежда',
        'Водонагреватели, бойлеры, колонки',
        'Товары для офиса',
    ];

    const MenuData4 = [
        'Комплекты постельного белья',
        'Платья женские',
        'Тренажеры',
        'Коляски детские',
    ];

    const MenuData5 = [
        'Декоративная косметика',
        'Куртки мужские',
        'Детские игрушки',
        'Окна и двери',
    ];

    return (
        <Fragment>
            <Box box-margin-bottom='m'>
                <Text text-size='h1'>
                    Что ищут
                </Text>
            </Box>
            <Grid grid-indent='m' grid-column='expand'>
                <Grid.Item>
                    {MenuList(MenuData1)}
                </Grid.Item>
                <Grid.Item>
                    {MenuList(MenuData2)}
                </Grid.Item>
                <Grid.Item>
                    {MenuList(MenuData3)}
                </Grid.Item>
                <Grid.Item>
                    {MenuList(MenuData4)}
                </Grid.Item>
                <Grid.Item>
                    {MenuList(MenuData5)}
                </Grid.Item>
            </Grid>
        </Fragment>
    );
}

function Advantages() {
    const AdvantagesItem = ({ children }) => (
        <Fragment>
            <Box box-margin-bottom='m'>
                <Plug style={{ height: 74, width: 74, margin: '0 auto' }}>Icon</Plug>
            </Box>
            {children}
        </Fragment>
    )

    return (
        <Grid grid-indent='m' grid-column='expand'>
            <Grid.Item>
                <AdvantagesItem>
                    <Text text-align='center' text-weight='bold'>
                        Можно купить все
                    </Text>
                    <Box box-margin-top='xs'>
                        <Text text-align='center'>
                            113 612 824 товаров и услуг
                        </Text>
                    </Box>
                </AdvantagesItem>
            </Grid.Item>
            <Grid.Item>
                <AdvantagesItem>
                    <Text text-align='center' text-weight='bold'>
                        Лучшие цены
                    </Text>
                    <Box box-margin-top='xs'>
                        <Text text-align='center'>
                            Найдите дешевле
                        </Text>
                    </Box>
                </AdvantagesItem>
            </Grid.Item>
            <Grid.Item>
                <AdvantagesItem>
                    <Text text-align='center' text-weight='bold'>
                        Покупка без риска
                    </Text>
                    <Box box-margin-top='xs'>
                        <Text text-align='center'>
                            В посылке то, что на картинке
                        </Text>
                    </Box>
                </AdvantagesItem>
            </Grid.Item>
            <Grid.Item>
                <AdvantagesItem>
                    <Text text-align='center' text-weight='bold'>
                        Проверенные продавцы
                    </Text>
                    <Box box-margin-top='xs'>
                        <Text text-align='center'>
                            Рейтинг по отзывам
                        </Text>
                    </Box>
                </AdvantagesItem>
            </Grid.Item>
            <Grid.Item>
                <AdvantagesItem>
                    <Text text-align='center' text-weight='bold'>
                        Защита покупателей
                    </Text>
                    <Box box-margin-top='xs'>
                        <Text text-align='center'>
                            Защищаем покупки на 3 000 грн
                        </Text>
                    </Box>
                </AdvantagesItem>
            </Grid.Item>
        </Grid>
    );
}

function Main() {
    return (
        <Body body-indent='m' body-tag='div'>
            <Body.Section>
                <HeaderService />
            </Body.Section>
            <Line />
            <Body.Section>
                <Header />
            </Body.Section>
            <Box box-background='primary' className="FixBackgroundPrimary">
                <Body.Section>
                    <HeaderNav />
                </Body.Section>
            </Box>
            <Body.Section>
                <HeaderContent />
            </Body.Section>
            <Box box-background='primary' className="FixBackgroundPrimary">
                <Body.Section>
                    <Box box-padding-tb='xxl' box-margin-tb='xxl'>
                        <Text text-align='center' text-color='dark' text-transform='uppercase'>
                            ... custom content ...
                        </Text>
                    </Box>
                </Body.Section>
            </Box>
            <Box box-padding-tb='xxl'>
                <Body.Section>
                    <Advantages />
                </Body.Section>
            </Box>
            <Line />
            <Box box-padding-tb='xxl'>
                <Body.Section>
                    <SearchTags />
                </Body.Section>
            </Box>
            <Box box-padding-tb='xxl' box-background='muted'>
                <Body.Section>
                    <Footer />
                </Body.Section>
            </Box>
        </Body>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));
