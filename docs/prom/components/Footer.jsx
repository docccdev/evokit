const { Grid, Box, Link, Text, List } = EvoKit;

function Footer() {
    const MenuTitle = ({ children }) => (
        <Box box-margin-bottom='m'>
            <Text text-weight='bold'>
                {children}
            </Text>
        </Box>
    );

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
    );

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

ReactDOM.render(<Footer />, document.getElementById('Footer'));
