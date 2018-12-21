const { Fragment } = React;
const { Grid, Box, Link, Text, List } = EvoKit;

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
    );

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

ReactDOM.render(<SearchTags />, document.getElementById('SearchTags'));
