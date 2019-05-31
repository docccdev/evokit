const { Grid, Link, Text } = EvoKit;

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
                <Link href='#'>
                    RU
                </Link>
            </Grid.Item>
        </Grid>
    );

    const rightContent = (
        <Grid grid-indent='xxl'>
            <Grid.Item>
                <Link href='#'>
                    Подать частное объявление
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#'>
                    Мобильное приложение
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#'>
                    Войти
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#'>
                    Зарегистрироваться
                </Link>
            </Grid.Item>
        </Grid>
    );

    return (
        <Grid grid-align='justify'>
            <Grid.Item>
                {leftContent}
            </Grid.Item>
            <Grid.Item>
                {rightContent}
            </Grid.Item>
        </Grid>
    );
}

ReactDOM.render(<HeaderService />, document.getElementById('HeaderService'));
