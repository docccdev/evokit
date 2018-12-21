const { Grid, Link, Text } = EvoKit;

function HeaderServicePrimary() {
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
                <Link href='#' link-color='dark'>
                    RU
                </Link>
            </Grid.Item>
        </Grid>
    );

    const rightContent = (
        <Grid grid-indent='xxl'>
            <Grid.Item>
                <Link href='#' link-color='dark'>
                    Подать частное объявление
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#' link-color='dark'>
                    Мобильное приложение
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#' link-color='dark'>
                    Войти
                </Link>
            </Grid.Item>
            <Grid.Item>
                <Link href='#' link-color='dark'>
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

ReactDOM.render(<HeaderServicePrimary />, document.getElementById('HeaderServicePrimary'));
