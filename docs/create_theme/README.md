# CREATE THEME

!> Tool for creating custom themes

<style>
    .demo-box-react .meta,
    .demo-box-react .demo-block-control {
        display: none !important;
    }
</style>

<script type="text/template" id="theme-template">
:root {
    --ek-{{ templateName }}-border-color: {{ templateBorderColor }};
    --ek-{{ templateName }}-divider-color:  {{ templateDividerColor }};
    --ek-{{ templateName }}-background-color:  {{ templateBackgroundColor }};
    --ek-{{ templateName }}-text-color:  {{ templateTextColor }};
    --ek-{{ templateName }}-link-color:  {{ templateLinkColor }};
}

.ek-body_background_{{ templateName }} {
    background-color: var(--ek-{{ templateName }}-background-color);
}
.ek-box_background_{{ templateName }} {
    background-color: var(--ek-{{ templateName }}-background-color);
}
.ek-box_border_{{ templateName }} {
    border: 1px solid var(--ek-{{ templateName }}-border-color);
}
.ek-grid_divider_{{ templateName }} > .ek-grid__item {
        border: 0 solid var(--ek-{{ templateName }}-divider-color);
}
.ek-grid_divider_{{ templateName }} > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
}
.ek-list_color_{{ templateName }} > .ek-list__item:before {
            color: var(--ek-{{ templateName }}-text-color);
}
.ek-list_divider_{{ templateName }} > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-{{ templateName }}-divider-color);
}
.ek-link_color_{{ templateName }} {
    color: var(--ek-{{ templateName }}-link-color);
}
.ek-text_color_{{ templateName }} {
    color: var(--ek-{{ templateName }}-text-color);
}
.ek-line_color_{{ templateName }} {
    border-color: var(--ek-{{ templateName }}-divider-color);
}
@media (--ek-media-small) {
        .ek-body_background_{{ templateName }}\@small {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_background_{{ templateName }}\@small {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_border_{{ templateName }}\@small {
    border: 1px solid var(--ek-{{ templateName }}-border-color);
    }

    .ek-grid_divider_{{ templateName }}\@small > .ek-grid__item {
        border: 0 solid var(--ek-{{ templateName }}-divider-color);
    }

        .ek-grid_divider_{{ templateName }}\@small > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_{{ templateName }}\@small > .ek-list__item:before {
            color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-list_divider_{{ templateName }}\@small > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-{{ templateName }}-divider-color);
    }
        .ek-link_color_{{ templateName }}\@small {
    color: var(--ek-{{ templateName }}-link-color);
    }
        .ek-text_color_{{ templateName }}\@small {
    color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-line_color_{{ templateName }}\@small {
    border-color: var(--ek-{{ templateName }}-divider-color);
    }
}
@media (--ek-media-medium) {
        .ek-body_background_{{ templateName }}\@medium {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_background_{{ templateName }}\@medium {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_border_{{ templateName }}\@medium {
    border: 1px solid var(--ek-{{ templateName }}-border-color);
    }

    .ek-grid_divider_{{ templateName }}\@medium > .ek-grid__item {
        border: 0 solid var(--ek-{{ templateName }}-divider-color);
    }

        .ek-grid_divider_{{ templateName }}\@medium > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_{{ templateName }}\@medium > .ek-list__item:before {
            color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-list_divider_{{ templateName }}\@medium > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-{{ templateName }}-divider-color);
    }
        .ek-link_color_{{ templateName }}\@medium {
    color: var(--ek-{{ templateName }}-link-color);
    }
        .ek-text_color_{{ templateName }}\@medium {
    color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-line_color_{{ templateName }}\@medium {
    border-color: var(--ek-{{ templateName }}-divider-color);
    }
}
@media (--ek-media-large) {
        .ek-body_background_{{ templateName }}\@large {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_background_{{ templateName }}\@large {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_border_{{ templateName }}\@large {
    border: 1px solid var(--ek-{{ templateName }}-border-color);
    }

    .ek-grid_divider_{{ templateName }}\@large > .ek-grid__item {
        border: 0 solid var(--ek-{{ templateName }}-divider-color);
    }

        .ek-grid_divider_{{ templateName }}\@large > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_{{ templateName }}\@large > .ek-list__item:before {
            color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-list_divider_{{ templateName }}\@large > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-{{ templateName }}-divider-color);
    }
        .ek-link_color_{{ templateName }}\@large {
    color: var(--ek-{{ templateName }}-link-color);
    }
        .ek-text_color_{{ templateName }}\@large {
    color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-line_color_{{ templateName }}\@large {
    border-color: var(--ek-{{ templateName }}-divider-color);
    }
}
@media (--ek-media-wide) {
        .ek-body_background_{{ templateName }}\@wide {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_background_{{ templateName }}\@wide {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_border_{{ templateName }}\@wide {
    border: 1px solid var(--ek-{{ templateName }}-border-color);
    }

    .ek-grid_divider_{{ templateName }}\@wide > .ek-grid__item {
        border: 0 solid var(--ek-{{ templateName }}-divider-color);
    }

        .ek-grid_divider_{{ templateName }}\@wide > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_{{ templateName }}\@wide > .ek-list__item:before {
            color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-list_divider_{{ templateName }}\@wide > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-{{ templateName }}-divider-color);
    }
        .ek-link_color_{{ templateName }}\@wide {
    color: var(--ek-{{ templateName }}-link-color);
    }
        .ek-text_color_{{ templateName }}\@wide {
    color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-line_color_{{ templateName }}\@wide {
    border-color: var(--ek-{{ templateName }}-divider-color);
    }
}
@media (--ek-media-huge) {
        .ek-body_background_{{ templateName }}\@huge {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_background_{{ templateName }}\@huge {
    background-color: var(--ek-{{ templateName }}-background-color);
    }
        .ek-box_border_{{ templateName }}\@huge {
    border: 1px solid var(--ek-{{ templateName }}-border-color);
    }

    .ek-grid_divider_{{ templateName }}\@huge > .ek-grid__item {
        border: 0 solid var(--ek-{{ templateName }}-divider-color);
    }

        .ek-grid_divider_{{ templateName }}\@huge > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_{{ templateName }}\@huge > .ek-list__item:before {
            color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-list_divider_{{ templateName }}\@huge > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-{{ templateName }}-divider-color);
    }
        .ek-link_color_{{ templateName }}\@huge {
    color: var(--ek-{{ templateName }}-link-color);
    }
        .ek-text_color_{{ templateName }}\@huge {
    color: var(--ek-{{ templateName }}-text-color);
    }
        .ek-line_color_{{ templateName }}\@huge {
    border-color: var(--ek-{{ templateName }}-divider-color);
    }
}
</script>

```jsx
/*react*/
<script>
const { Box, Text, Grid, List, Picture, Link, Line } = EvoKit;


const PRESETS = {
    'primary': {
        'templateName': 'primary',
        'templateBackgroundColor': '#cce5ff',
        'templateBorderColor': '#b8daff',
        'templateDividerColor': '#b8daff',
        'templateTextColor': '#004085',
        'templateLinkColor': '#004085',
    },
    'secondary': {
        'templateName': 'secondary',
        'templateBackgroundColor': '#e2e3e5',
        'templateBorderColor': '#d6d8db',
        'templateDividerColor': '#d6d8db',
        'templateTextColor': '#383d41',
        'templateLinkColor': '#383d41',
    },
    'success': {
        'templateName': 'success',
        'templateBackgroundColor': '#d4edda',
        'templateBorderColor': '#c3e6cb',
        'templateDividerColor': '#c3e6cb',
        'templateTextColor': '#155724',
        'templateLinkColor': '#155724',
    },
    'danger': {
        'templateName': 'danger',
        'templateBackgroundColor': '#f8d7da',
        'templateBorderColor': '#f5c6cb',
        'templateDividerColor': '#f5c6cb',
        'templateTextColor': '#721c24',
        'templateLinkColor': '#721c24',
    },
    'warning': {
        'templateName': 'warning',
        'templateBackgroundColor': '#fff3cd',
        'templateBorderColor': '#ffeeba',
        'templateDividerColor': '#ffeeba',
        'templateTextColor': '#856404',
        'templateLinkColor': '#856404',
    },
    'info': {
        'templateName': 'info',
        'templateBackgroundColor': '#d1ecf1',
        'templateBorderColor': '#bee5eb',
        'templateDividerColor': '#bee5eb',
        'templateTextColor': '#0c5460',
        'templateLinkColor': '#0c5460',
    },
    'light': {
        'templateName': 'light',
        'templateBackgroundColor': '#fefefe',
        'templateBorderColor': '#fdfdfe',
        'templateDividerColor': '#fdfdfe',
        'templateTextColor': '#818182',
        'templateLinkColor': '#818182',
    },
    'dark': {
        'templateName': 'dark',
        'templateBackgroundColor': '#d6d8d9',
        'templateBorderColor': '#c6c8ca',
        'templateDividerColor': '#c6c8ca',
        'templateTextColor': '#1b1e21',
        'templateLinkColor': '#1b1e21',
    },
}

const SETTINGS_LABEL = {
    'templateName': 'Название темы',
    'templateBackgroundColor': 'Цвет фона',
    'templateBorderColor': 'Цвет рамки',
    'templateTextColor': 'Цвет текста',
    'templateDividerColor': 'Цвет линии',
    'templateLinkColor': 'Цвет ссылки',
};

const applyThemeSheme = (template, sheme) => {
    let result;

    Object.keys(sheme).map((key) => {
        const regex = new RegExp(`{{ ${key} }}`, 'g');

        result = (result || template).replace(regex, sheme[key]);
    });

    return result;
};

export default class EvoKitCreateTheme extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sheme: PRESETS['primary'],
        };

        this.template = document.getElementById('theme-template').innerText.trim();
        this.onChangeVar = this.onChangeVar.bind(this);
        this.onChangePreset = this.onChangePreset.bind(this);
    }

    onChangeVar({ target }) {
        this.setState({
            sheme: Object.assign(this.state.sheme, {
                [target.name]: target.value,
            }),
        });
    }

    onChangePreset(name) {
        this.setState({
            sheme: PRESETS[name],
        });
    }

    render() {
        const { sheme } = this.state;
        const template = applyThemeSheme(this.template, sheme);

        return (
            <div>
                <Grid grid-indent='xs'>
                    <Grid.Item>
                        Presets:
                    </Grid.Item>
                    {Object.keys(PRESETS).map((value, index) => (
                        <Grid.Item key={value}>
                            <Link
                                link-tag='span'
                                onClick={() => this.onChangePreset(value)}
                            >
                                {value}
                            </Link>{index < Object.keys(PRESETS).length - 1 ? ',' : null}
                        </Grid.Item>
                    ))}
                </Grid>
                <Line line-indent='xl' />
                <Grid grid-indent='xl'>
                    <Grid.Item mix-width='expand'>
                        <style dangerouslySetInnerHTML={{__html: template}}></style>
                        <Box box-margin-bottom='xl'>
                            <Text text-size='h1'>
                                Theme <Text text-weight='bold'>{sheme['templateName']}</Text>
                            </Text>
                        </Box>
                        <Box
                            box-padding='m'
                            box-background={sheme['templateName']}
                            box-border={sheme['templateName']}
                            mix-round='m'
                        >
                            <Grid grid-indent='m'>
                                <Grid.Item mix-width='2-10'>
                                    <Picture>
                                        <Picture.Item src='https://picsum.photos/300/300' />
                                    </Picture>
                                </Grid.Item>
                                <Grid.Item mix-width='expand'>
                                    <Text text-size='h1' text-color={sheme['templateName']}>
                                        What is Lorem Ipsum?
                                    </Text>
                                    <Line
                                        line-indent='s'
                                        line-color={sheme['templateName']}
                                    />
                                    <Text text-lheight='medium' text-color={sheme['templateName']}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </Text>
                                    <Box box-margin-top='xs'>
                                        <Link href="#" link-color={sheme['templateName']}>See More »</Link>
                                    </Box>
                                </Grid.Item>
                            </Grid>
                        </Box>
                        <pre style={{ display: 'none' }}>
                            <code
                                className='language-css'
                                dangerouslySetInnerHTML={{__html: template}}
                            />
                        </pre>
                    </Grid.Item>
                    <Grid.Item mix-width='2-10'>
                        <Box box-margin-bottom='xl'>
                            <Text text-size='h1'>
                                Settings:
                            </Text>
                        </Box>
                        <List list-indent='m'>
                            {Object.keys(sheme).map((key) => (
                                <List.Item key={key}>
                                    <Text text-weight='bold'>
                                        {SETTINGS_LABEL[key] || key}
                                    </Text>
                                    <Box box-margin-top='xxs'>
                                        {key === 'templateName' ? (
                                            <input
                                                type='text'
                                                value={sheme[key]}
                                                name={key}
                                                onChange={this.onChangeVar}
                                                style={{ width: '100%', boxSizing: 'border-box' }}
                                            />
                                        ) : (
                                            <Grid grid-indent='xs' grid-valign='middle'>
                                                <Grid.Item>
                                                    <input
                                                        type='color'
                                                        value={sheme[key]}
                                                        name={key}
                                                        onChange={this.onChangeVar}
                                                    />
                                                </Grid.Item>
                                                <Grid.Item mix-width='expand'>
                                                    <input
                                                        type='text'
                                                        value={sheme[key]}
                                                        name={key}
                                                        onChange={this.onChangeVar}
                                                        style={{ width: '100%', boxSizing: 'border-box' }}
                                                    />
                                                </Grid.Item>
                                            </Grid>
                                        )}
                                    </Box>
                                </List.Item>
                            ))}
                        </List>
                    </Grid.Item>
                </Grid>
            </div>
        )
    }
}
</script>
```


