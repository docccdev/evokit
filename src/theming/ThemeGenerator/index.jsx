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

const SvgClip = () => (
    <svg width='1.2em' height='1.2em' viewBox="0 0 30.34 30.34">
        <path
            fill='currentColor'
            d="M22.562,12.491c0,0,1.227-0.933,0.293-1.866c-0.934-0.933-1.842,0.271-1.842,0.271l-9.389,9.391
            c0,0-2.199,2.838-3.871,1.122c-1.67-1.718,1.121-3.872,1.121-3.872l12.311-12.31c0,0,2.873-3.165,5.574-0.466
            c2.697,2.7-0.477,5.579-0.477,5.579L12.449,24.173c0,0-4.426,5.113-8.523,1.015s1.066-8.474,1.066-8.474L15.494,6.209
            c0,0,1.176-0.982,0.295-1.866c-0.885-0.883-1.865,0.295-1.865,0.295L1.873,16.689c0,0-4.549,4.989,0.531,10.068
            c5.08,5.082,10.072,0.533,10.072,0.533l16.563-16.565c0,0,3.314-3.655-0.637-7.608s-7.607-0.639-7.607-0.639L6.543,16.728
            c0,0-3.65,2.969-0.338,6.279c3.312,3.314,6.227-0.39,6.227-0.39L22.562,12.491z"
        />
    </svg>
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
                            <Box box-margin-top='xl'>
                                <Text text-align='center'>
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
                                        Download
                                    </Button>
                                    {!!themeName && (
                                        <Box box-margin-top='xs'>
                                            <Text text-size='small' text-color='muted' text-wrap='ellipsis'>
                                                <Grid grid-valign='middle' grid-align='center' grid-indent='xxs'>
                                                    <Grid.Item>
                                                        <SvgClip />
                                                    </Grid.Item>
                                                    <Grid.Item>
                                                        {`${packageName}-${themeName}.css`}
                                                    </Grid.Item>
                                                </Grid>
                                            </Text>
                                        </Box>
                                    )}
                                </Text>
                            </Box>
                        </Box>
                    )}
                </Box>
            </>
        );
    }
}
