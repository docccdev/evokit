import React from 'react';
import { Box, Text, Grid, List, Picture, Link, Line } from './index';

const PRESETS = {
    'success': {
        '__TEMPLATE_NAME__': 'success',
        '__TEMPLATE_BACKGROUND_COLOR__': '#d4edda',
        '__TEMPLATE_BORDER_COLOR__': '#c3e6cb',
        '__TEMPLATE_DIVIDER_COLOR__': '#c3e6cb',
        '__TEMPLATE_TEXT_COLOR__': '#155724',
        '__TEMPLATE_LINK_COLOR__': '#155724',
    },
    'info': {
        '__TEMPLATE_NAME__': 'info',
        '__TEMPLATE_BACKGROUND_COLOR__': '#d1ecf1',
        '__TEMPLATE_BORDER_COLOR__': '#bee5eb',
        '__TEMPLATE_DIVIDER_COLOR__': '#bee5eb',
        '__TEMPLATE_TEXT_COLOR__': '#0c5460',
        '__TEMPLATE_LINK_COLOR__': '#0c5460',
    },
    'warning': {
        '__TEMPLATE_NAME__': 'warning',
        '__TEMPLATE_BACKGROUND_COLOR__': '#fff3cd',
        '__TEMPLATE_BORDER_COLOR__': '#ffeeba',
        '__TEMPLATE_DIVIDER_COLOR__': '#ffeeba',
        '__TEMPLATE_TEXT_COLOR__': '#856404',
        '__TEMPLATE_LINK_COLOR__': '#856404',
    },
    'danger': {
        '__TEMPLATE_NAME__': 'danger',
        '__TEMPLATE_BACKGROUND_COLOR__': '#f8d7da',
        '__TEMPLATE_BORDER_COLOR__': '#f5c6cb',
        '__TEMPLATE_DIVIDER_COLOR__': '#f5c6cb',
        '__TEMPLATE_TEXT_COLOR__': '#721c24',
        '__TEMPLATE_LINK_COLOR__': '#721c24',
    },
}

const SETTINGS_LABEL = {
    '__TEMPLATE_NAME__': 'Template name',
    '__TEMPLATE_BACKGROUND_COLOR__': 'Background color',
    '__TEMPLATE_BORDER_COLOR__': 'Border color',
    '__TEMPLATE_DIVIDER_COLOR__': 'Line color',
    '__TEMPLATE_TEXT_COLOR__': 'Text color',
    '__TEMPLATE_LINK_COLOR__': 'Link color',
};

const applyThemeSheme = (template, sheme) => {
    let result;

    Object.keys(sheme).map((key) => {
        const regex = new RegExp(key, 'g');

        result = (result || template).replace(regex, sheme[key]);
    });

    return result;
};

const rootConfig = `
:root {
    --ek-__TEMPLATE_NAME__-background-color: __TEMPLATE_BACKGROUND_COLOR__;
    --ek-__TEMPLATE_NAME__-border-color: __TEMPLATE_BORDER_COLOR__;
    --ek-__TEMPLATE_NAME__-divider-color: __TEMPLATE_DIVIDER_COLOR__;
    --ek-__TEMPLATE_NAME__-text-color: __TEMPLATE_TEXT_COLOR__;
    --ek-__TEMPLATE_NAME__-link-color: __TEMPLATE_LINK_COLOR__;
}
`;

export class ThemeGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            template: null,
            sheme: PRESETS['success'],
        };

        this.onChangeVar = this.onChangeVar.bind(this);
        this.onChangePreset = this.onChangePreset.bind(this);
    }

    componentDidMount() {
        const { templateUrl } = this.props;

        fetch(templateUrl).then((response) => {
            response.text().then((text) => {
                this.setState({
                    template: rootConfig.trim() + '\n\n' + text.trim(),
                });
            });
        });
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

    download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    render() {
        const { sheme, template } = this.state;

        if(!template) {
            return (
                <Box box-padding='m'>
                    <Text text-align='center' text-size='h1'>
                        Loading...
                    </Text>
                </Box>
            );
        }

        const newTemplate = applyThemeSheme(template, sheme);
        const cssFileName = `theme-${sheme['__TEMPLATE_NAME__']}.css`;

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
                                link-color='default'
                                onClick={() => this.onChangePreset(value)}
                            >
                                {value}
                            </Link>{index < Object.keys(PRESETS).length - 1 ? ',' : null}
                        </Grid.Item>
                    ))}
                </Grid>
                <Line line-indent='xl' />
                <Grid grid-indent='xl'>
                    <Grid.Item grid-item-width='expand'>
                        <style dangerouslySetInnerHTML={{__html: newTemplate}}></style>
                        <Box box-margin-bottom='xl'>
                            <Text text-size='h1'>
                                Theme <Text text-weight='bold'>{sheme['__TEMPLATE_NAME__']}</Text>
                            </Text>
                        </Box>
                        <Box
                            box-padding='m'
                            box-background={sheme['__TEMPLATE_NAME__']}
                            box-border={sheme['__TEMPLATE_NAME__']}
                            box-round='m'
                        >
                            <Grid grid-indent='m'>
                                <Grid.Item grid-item-width='2-10'>
                                    <Picture>
                                        <Picture.Item src='https://picsum.photos/300/300' />
                                    </Picture>
                                </Grid.Item>
                                <Grid.Item grid-item-width='expand'>
                                    <Text text-size='h1' text-color={sheme['__TEMPLATE_NAME__']}>
                                        What is Lorem Ipsum?
                                    </Text>
                                    <Line
                                        line-indent='s'
                                        line-color={sheme['__TEMPLATE_NAME__']}
                                    />
                                    <Text text-lheight='medium' text-color={sheme['__TEMPLATE_NAME__']}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </Text>
                                    <Box box-margin-top='xs'>
                                        <Link href="#" link-color={sheme['__TEMPLATE_NAME__']}>See More »</Link>
                                    </Box>
                                </Grid.Item>
                            </Grid>
                        </Box>
                        <Box box-margin-lr='auto' box-margin-top='m' box-width='3-10'>
                            <button
                                type='button'
                                style={{ width: '100%', padding: 10, cursor: 'pointer' }}
                                onClick={() => this.download(cssFileName, newTemplate)}
                            >
                                <Text text-lheight='medium' text-wrap='ellipsis'>
                                    Download&nbsp;
                                    <Text text-weight='bold'>
                                        {cssFileName}
                                    </Text>
                                </Text>
                            </button>
                        </Box>
                        <pre style={{ display: 'none' }}>
                            <code
                                className='language-css'
                                dangerouslySetInnerHTML={{__html: newTemplate}}
                            />
                        </pre>
                    </Grid.Item>
                    <Grid.Item grid-item-width='2-10'>
                        <Box box-margin-bottom='xl'>
                            <Text text-size='h3'>
                                Settings
                            </Text>
                        </Box>
                        <List list-indent='m'>
                            {Object.keys(sheme).map((key) => (
                                <List.Item key={key}>
                                    <Text text-weight='bold'>
                                        {SETTINGS_LABEL[key] || key}
                                    </Text>
                                    <Box box-margin-top='xxs'>
                                        {key === '__TEMPLATE_NAME__' ? (
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
                                                <Grid.Item grid-item-width='expand'>
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
