const { Fragment } = React;
const { Grid, Box, Text } = EvoKit;

function Advantages() {
    const Plug = (props) => (
        <Box box-position='relative' box-background='info' {...props}>
            <Box box-position='absolute' box-place='center'>
                <Text text-wrap='nowrap'>
                    &lt;{props.children} /&gt;
                </Text>
            </Box>
        </Box>
    );

    const AdvantagesItem = ({ children }) => (
        <Fragment>
            <Box box-margin-bottom='m'>
                <Plug style={{ height: 74, width: 74, margin: '0 auto' }}>Icon</Plug>
            </Box>
            {children}
        </Fragment>
    );

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

ReactDOM.render(<Advantages />, document.getElementById('Advantages'));
