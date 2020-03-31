import React, { Fragment } from 'react';
import { Box, Text, Grid, Button } from '../UI';
import { downloadFile, replaceThemeCss } from './utils';
import { SelectPackage } from './SelectPackage';
import { PartTheme } from './PartTheme';
import { LinkChangeLog } from './LinkChangeLog';
import postcss from 'postcss';
import cssnano from 'cssnano';
import './style.css';

const THEME_NAME_MAXLENGTH = 128;
const VERSION = '1.3.0';

export class ThemeGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            root: {},
            rootValues: {},
            packageName: '',
            themeName: '',
            themeCss: ''
        };
    }

    onSelectPackage = () => {
        this.setState({ loading: true });
    };

    onSuccessSelectPackage = (packageName, themeTemplate) => {
        const parseCss = postcss.parse(themeTemplate);

        const rootNodes = parseCss.nodes.filter(
            ({ selector }) => selector === ':root'
        )[0];

        const root = rootNodes.nodes.reduce(
            (acc, node) => ({
                ...acc,
                [node.prop]: node.value
            }),
            {}
        );

        const rootValues = rootNodes.nodes.reduce(
            (acc, node) => ({
                ...acc,
                [node.value]: ''
            }),
            {}
        );

        this.setState({
            loading: false,
            root: root,
            rootValues: rootValues,
            packageName: packageName,
            themeCss: themeTemplate.trim(),
            minimizeChecked: true,
            sliderPickerChecked: false
        });
    };

    onChangeThemeName = ({ target }) => {
        const themeName = target.value.trim().replace(/\s/g, '-');
        this.setState({ themeName });
    };

    onPartThemeChange = (key, value) => {
        const { rootValues } = this.state;

        this.setState({
            rootValues: {
                ...rootValues,
                [key]: value
            }
        });
    };

    render() {
        const {
            loading,
            packageName,
            themeName,
            root,
            rootValues,
            themeCss,
            minimizeChecked,
            sliderPickerChecked
        } = this.state;
        const hasRoot = !!Object.keys(root).length;

        return (
            <>
                <Box box-position='relative' box-padding='xxl' box-background='muted'>
                    <Grid
                        grid-indent='xl'
                        grid-align='center'
                        grid-valign='middle'
                    >
                        <Grid.Item>
                            <Text text-align='center' text-size='h1' text-weight='medium'>
                                Theming
                                <Text text-as='sup' text-size='small' text-color='muted'>
                                    <LinkChangeLog>
                                        v{VERSION}
                                    </LinkChangeLog>
                                </Text>
                            </Text>
                            <Box box-margin-top='xs'>
                                <Text text-align='center' text-size='small' text-color='muted'>
                                    Selected Block and create theme
                                </Text>
                            </Box>
                            <Box box-margin-top='m'>
                                <SelectPackage
                                    onSelect={this.onSelectPackage}
                                    onSuccess={this.onSuccessSelectPackage}
                                />
                            </Box>
                            {loading ? (
                                <Box box-margin-top='xl'>
                                    <Text text-align='center'>Loading...</Text>
                                </Box>
                            ) : null}
                        </Grid.Item>
                        {!loading && hasRoot && (
                            <Fragment>
                                <Grid.Item grid-item-width='1-1'>
                                    <Box box-margin-bottom='xl'>
                                        <Text
                                            text-align='center'
                                            text-size='h4'
                                            text-weight='medium'
                                        >
                                            Name
                                        </Text>
                                    </Box>
                                    <Box box-margin-bottom='xl'>
                                        <input
                                            className='input-value'
                                            type='text'
                                            placeholder='success'
                                            value={themeName}
                                            onChange={this.onChangeThemeName}
                                            autoFocus
                                            maxLength={THEME_NAME_MAXLENGTH}
                                        />
                                    </Box>
                                    <Box box-margin-bottom='xl'>
                                        <Text
                                            text-align='center'
                                            text-size='h4'
                                            text-weight='medium'
                                        >
                                            Colors
                                        </Text>
                                    </Box>
                                    <Box box-margin-bottom='m' box-align='center'>
                                        <Grid grid-as='label' grid-indent='xs'>
                                            <Grid.Item>
                                                <input
                                                    type='checkbox'
                                                    checked={sliderPickerChecked}
                                                    onChange={() =>
                                                        this.setState({
                                                            sliderPickerChecked: !sliderPickerChecked
                                                        })
                                                    }
                                                />
                                            </Grid.Item>
                                            <Grid.Item>slider color picker</Grid.Item>
                                        </Grid>
                                    </Box>
                                    <Grid
                                        grid-indent='m'
                                        grid-column={Object.keys(root).length < 3 ? 'expand' : 3}
                                    >
                                        {Object.keys(root).map(key => (
                                            <Grid.Item key={key}>
                                                <PartTheme
                                                    sliderPickerChecked={sliderPickerChecked}
                                                    rootVarKey={key}
                                                    onChange={value =>
                                                        this.onPartThemeChange(root[key], value)
                                                    }
                                                />
                                            </Grid.Item>
                                        ))}
                                    </Grid>
                                </Grid.Item>
                                <Grid.Item>
                                    <Box>
                                        <Button
                                            button-theme='blue'
                                            disabled={!themeName}
                                            type='button'
                                            onClick={() => {
                                                const plugins = [];
                                                const finishCss = replaceThemeCss(
                                                    themeCss,
                                                    themeName,
                                                    rootValues
                                                );

                                                if (minimizeChecked) {
                                                    plugins.push(cssnano({ preset: 'default' }));
                                                }
                                                postcss(plugins)
                                                    .process(finishCss)
                                                    .then(result => {
                                                        downloadFile(
                                                            `${packageName}-${themeName}.css`,
                                                            result.css
                                                        );
                                                    });
                                            }}
                                        >
                                            <Text text-wrap='ellipsis'>
                                                {themeName
                                                    ? `${packageName}-${themeName}.css`
                                                    : 'Please enter a Theme Name'}
                                            </Text>
                                        </Button>
                                    </Box>
                                    <Box box-margin-top='m' box-align='center'>
                                        <Grid grid-as='label' grid-indent='xs'>
                                            <Grid.Item>
                                                <input
                                                    type='checkbox'
                                                    checked={minimizeChecked}
                                                    onChange={() =>
                                                        this.setState({
                                                            minimizeChecked: !minimizeChecked
                                                        })
                                                    }
                                                />
                                            </Grid.Item>
                                            <Grid.Item>minimize css</Grid.Item>
                                        </Grid>
                                    </Box>
                                </Grid.Item>
                            </Fragment>
                        )}
                    </Grid>
                </Box>
            </>
        );
    }
}
