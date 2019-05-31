const { Grid } = EvoKit;

function HeaderNav() {
    const SelfLink = ({ children }) => (
        <a href="#" className='HeaderNavLink'>
            {children}
        </a>
    );

    return (
        <Grid grid-tag='ul' grid-column='expand'>
            <Grid.Item grid-tag='li'>
                <SelfLink>
                    Потребительские товары
                </SelfLink>
            </Grid.Item>
            <Grid.Item grid-tag='li'>
                <SelfLink>
                    Товары для бизнеса
                </SelfLink>
            </Grid.Item>
            <Grid.Item grid-tag='li'>
                <SelfLink>
                    Услуги
                </SelfLink>
            </Grid.Item>
            <Grid.Item grid-tag='li'>
                <SelfLink>
                    Частные объявления
                </SelfLink>
            </Grid.Item>
        </Grid>
    );
}

ReactDOM.render(<HeaderNav />, document.getElementById('HeaderNav'));
