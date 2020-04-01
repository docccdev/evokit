import React from 'react';
import { Box, Text, Grid, Button } from '../UI';
import { downloadFile, replaceThemeCss } from './utils';
import { SelectPackage } from './SelectPackage';
import { PartTheme } from './PartTheme';
import { LinkChangeLog } from './LinkChangeLog';
import { SwitchBox } from './SwitchBox';
import postcss from 'postcss';
import cssnano from 'cssnano';
import './style.css';

const THEME_NAME_MAXLENGTH = 128;
const VERSION = '1.4.0';


const Title = ({ children }) => (
    <Box box-margin-bottom='xl'>
        <Text text-align='center' text-size='h4' text-weight='medium'>
            {children}
        </Text>
    </Box>
);

export class ThemeGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            root: {},
            rootValues: {},
            packageName: '',
            themeName: '',
            themeCss: '',
            singleColorValue: '',
            advancedMode: false,
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
            sliderPickerChecked: false,
            singleColorValue: '',
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

    onPartThemeChangeAll = (value) => {
        const { root, rootValues } = this.state;

        const newRootValues = {};

        Object.keys(root).forEach((key) => {
            newRootValues[root[key]] = value;
        });

        this.setState({
            singleColorValue: value,
            rootValues: {
                ...rootValues,
                ...newRootValues,
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
            sliderPickerChecked,
            singleColorValue,
            advancedMode,
        } = this.state;
        const hasRoot = !!Object.keys(root).length;

        const DownloadButton = () => (
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
                        : 'Please enter theme name'}
                </Text>
            </Button>
        );

        const inputThemeName = (
            <input
                className='input-value'
                type='text'
                placeholder='success'
                value={themeName}
                onChange={this.onChangeThemeName}
                autoFocus
                maxLength={THEME_NAME_MAXLENGTH}
            />
        );

        return (
            <>
                <Box box-position='relative' box-padding='xxl' box-background='muted'>
                    <Text text-align='center' text-size='h1' text-weight='medium'>
                        Theming
                        <Text text-as='sup' text-size='small' text-color='muted'>
                            <LinkChangeLog>
                                v{VERSION}
                            </LinkChangeLog>
                        </Text>
                    </Text>
                    <Box box-margin-top='xxs'>
                        <Text text-align='center' text-size='small' text-color='muted'>
                            Selected Block and create theme
                        </Text>
                    </Box>
                    <Box box-zindex='xs' box-align='center' box-margin-top='m'>
                        <SelectPackage
                            onSelect={this.onSelectPackage}
                            onSuccess={this.onSuccessSelectPackage}
                        />
                    </Box>
                    {loading && (
                        <Box box-margin-top='xl'>
                            <Text text-align='center'>Loading...</Text>
                        </Box>
                    )}
                    {!loading && hasRoot && (
                        <Box box-margin-top='xl'>
                            <Box box-margin-bottom='xl'>
                                <Grid grid-indent='xl' grid-align='center'>
                                    <Grid.Item>
                                        <SwitchBox
                                            checked={advancedMode}
                                            onChange={() =>
                                                this.setState({
                                                    advancedMode: !advancedMode
                                                })
                                            }
                                        >
                                            advanced mode
                                        </SwitchBox>
                                    </Grid.Item>
                                    <Grid.Item>
                                        <SwitchBox
                                            checked={sliderPickerChecked}
                                            onChange={() =>
                                                this.setState({
                                                    sliderPickerChecked: !sliderPickerChecked
                                                })
                                            }
                                        >
                                            slider color picker
                                        </SwitchBox>
                                    </Grid.Item>
                                    <Grid.Item>
                                        <SwitchBox
                                            checked={minimizeChecked}
                                            onChange={() =>
                                                this.setState({
                                                    minimizeChecked: !minimizeChecked
                                                })
                                            }
                                        >
                                            minimize css
                                        </SwitchBox>
                                    </Grid.Item>
                                </Grid>
                            </Box>
                            {advancedMode ? (
                                <>
                                    <Title>Name</Title>
                                    <Box box-margin-bottom='xl'>
                                        {inputThemeName}
                                    </Box>
                                    <Title>Colors</Title>
                                    <Grid
                                        grid-indent='m'
                                        grid-column={Object.keys(root).length < 3 ? 'expand' : 3}
                                    >
                                        {Object.keys(root).map(key => (
                                            <Grid.Item key={key}>
                                                <PartTheme
                                                    sliderPickerChecked={sliderPickerChecked}
                                                    rootVarKey={key}
                                                    inputValue={rootValues[root[key]]}
                                                    onChange={(value) =>
                                                        this.onPartThemeChange(root[key], value)
                                                    }
                                                />
                                            </Grid.Item>
                                        ))}
                                    </Grid>
                                </>
                            ) : (
                                <Grid grid-indent='m' grid-column='expand'>
                                    <Grid.Item>
                                        <Title>Name</Title>
                                        {inputThemeName}
                                    </Grid.Item>
                                    <Grid.Item>
                                        <Title>Color</Title>
                                        <PartTheme
                                            sliderPickerChecked={sliderPickerChecked}
                                            inputValue={singleColorValue}
                                            onChange={(value) =>
                                                this.onPartThemeChangeAll(value)
                                            }
                                        />
                                    </Grid.Item>
                                </Grid>
                            )}
                            <Box box-align='center' box-margin-top='xl'>
                                <DownloadButton />
                            </Box>
                        </Box>
                    )}
                </Box>
            </>
        );
    }
}
