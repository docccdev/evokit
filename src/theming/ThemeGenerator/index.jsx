import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, Button, List } from '../UI';
import { downloadFile, replaceThemeCss } from './utils';
import { SelectPackage } from './SelectPackage';
import { PartTheme } from './PartTheme';
import { LinkChangeLog } from './LinkChangeLog';
import { SwitchBox } from './SwitchBox';
import postcss from 'postcss';
import cssnano from 'cssnano';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssPrettify from 'postcss-prettify';
import postcssDiscard from 'postcss-discard';

import './style.css';

const THEME_NAME_MAXLENGTH = 128;

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

export const ThemeGenerator = () => {
    const [loading, setLoading] = useState(false);
    const [rootDeclList, setRootDeclList] = useState([]);
    const [rootValues, setRootValues] = useState({});
    const [packageName, setPackageName] = useState('');
    const [themeName, setThemeName] = useState('');
    const [themeCss, setThemeCss] = useState('');
    const [singleColorValue, setSingleColorValue] = useState('');
    const [advancedMode, setAdvancedMode] = useState(false);
    const [resultThemeCSS, setResultThemeCSS] = useState('');

    // SETTINGS STATE
    const [minimizeChecked, setMinimizeChecked] = useState(true);
    const [removeRootChecked, setRemoveRootChecked] = useState(true);
    const [removeMediaRulesChecked, setRemoveMediaRulesChecked] = useState(false);
    const [previewCssChecked, setPreviewCssChecked] = useState(false);
    const [sliderPickerChecked, setSliderPickerChecked] = useState(false);

    const disabledDownload = !!!themeName;

    useEffect(() => {
        if (disabledDownload) {
            setResultThemeCSS('');
        } else {
            const plugins = [];

            const finishCss = replaceThemeCss(
                themeCss,
                themeName,
                rootValues
            );

            if (removeMediaRulesChecked) {
                plugins.push(
                    postcssDiscard({
                      atrule: [
                        /--ek-(.*?)-media-(.*?)/,
                      ],
                    })
                );
            }

            if (removeRootChecked) {
                plugins.push(postcssCustomProperties({ preserve: false }));
            }

            if (minimizeChecked) {
                plugins.push(cssnano({ preset: 'default' }));
            } else {
                plugins.push(postcssPrettify());
            }

            const postcssPromise = postcss(plugins)
                .process(finishCss)
                .then(result => {
                    let resultCSS = result.css;

                    if (!minimizeChecked) {
                        resultCSS = resultCSS.replace(/  /g, '    ');
                    }

                    setResultThemeCSS(resultCSS);
                }).catch(() => {
                    setResultThemeCSS('');
                });
        }
    }, [
        themeName,
        minimizeChecked,
        removeRootChecked,
        removeMediaRulesChecked,
        themeCss,
        rootValues,
    ]);

    const onSelectPackage = () => {
        setLoading(true);
    };

    const onSuccessSelectPackage = (newPackageName, themeTemplate) => {
        const parseCss = postcss.parse(themeTemplate);
        const parseRoot = parseCss.nodes.filter(
            ({ selector }) => selector === ':root'
        );

        const newRootDeclList = parseRoot.map((rule) => (
            rule.nodes.filter(({ type }) => type == 'decl')
        ));

        // const rootCommList = parseRoot.map((rule) => (
        //     rule.nodes.filter(({ type }) => type == 'comment')
        // ));

        const rootStateValues = newRootDeclList.reduce((acc, rootDecl) => {
            const values = rootDecl.reduce((accValues, { value }) => ({
                ...accValues,
                [value]: '',
            }), {});

            return { ...acc, ...values };
        }, {});


        setLoading(false);
        setRootDeclList(newRootDeclList);
        setRootValues(rootStateValues);
        setPackageName(newPackageName);
        setThemeCss(themeTemplate.trim());
        // setMinimizeChecked(true);
        setSliderPickerChecked(false);
        setSingleColorValue('');
        setResultThemeCSS('');
    };

    const onChangeThemeName = ({ target }) => {
        const themeName = target.value.trim().replace(/\s/g, '-');

        setThemeName(themeName);
    };

    const onPartThemeChange = (key, value) => {
        setRootValues({ ...rootValues, [key]: value });
    };

    const onPartThemeChangeAll = (value) => {
        const newRootValues = Object.keys(rootValues).reduce((acc, keyValue) => ({
            ...acc,
            [keyValue]: value,
        }), {});

        setSingleColorValue(value);
        setRootValues(newRootValues);
    };

    const hasRoot = !!rootDeclList.length;

    const inputThemeName = (
        <input
            className='input-value'
            type='text'
            placeholder='success'
            value={themeName}
            onChange={onChangeThemeName}
            autoFocus
            maxLength={THEME_NAME_MAXLENGTH}
        />
    );

    const getDownloadFileName = () => {
        // const minName = minimizeChecked ? '.min' : '';
        return `${packageName}-${themeName}.css`;
    };

    return (
        <>
            <Box box-position='relative' box-padding='xxl' box-background='muted'>
                <Text text-align='center' text-size='h1' text-weight='medium'>
                    Theming
                    <Text text-as='sup' text-size='small' text-color='muted'>
                        <LinkChangeLog />
                    </Text>
                </Text>
                <Box box-margin-top='xxs'>
                    <Text text-align='center' text-size='small' text-color='muted'>
                        Selected Block and create theme
                    </Text>
                </Box>
                <Box box-zindex='xs' box-align='center' box-margin-top='m'>
                    <SelectPackage
                        onSelect={onSelectPackage}
                        onSuccess={onSuccessSelectPackage}
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
                                        onChange={() => setAdvancedMode(!advancedMode)}
                                    >
                                        advanced mode
                                    </SwitchBox>
                                </Grid.Item>
                                <Grid.Item>
                                    <SwitchBox
                                        checked={sliderPickerChecked}
                                        onChange={() => setSliderPickerChecked(!sliderPickerChecked)}
                                    >
                                        slider color picker
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
                                <List list-indent='m'>
                                    {rootDeclList.map((rootDecl, rootDeclIndex) => (
                                        <List.Item key={rootDeclIndex}>
                                            <Grid
                                                grid-indent='m'
                                                grid-column={rootDecl.length < 3 ? 'expand' : 3}
                                            >
                                                {rootDecl.map(({ prop, value }) => (
                                                    <Grid.Item key={prop}>
                                                        <PartTheme
                                                            sliderPickerChecked={sliderPickerChecked}
                                                            rootVarKey={prop}
                                                            inputValue={rootValues[value]}
                                                            onChange={(newValue) => (
                                                                onPartThemeChange(value, newValue)
                                                            )}
                                                        />
                                                    </Grid.Item>
                                                ))}
                                            </Grid>
                                        </List.Item>
                                    ))}
                                </List>
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
                                        onChange={(value) => onPartThemeChangeAll(value)}
                                    />
                                </Grid.Item>
                            </Grid>
                        )}
                        <Box box-margin-top='xl'>
                            <Text text-align='center'>
                                <Grid grid-indent='xl' grid-align='center' grid-valign='middle'>
                                    <Grid.Item>
                                        <SwitchBox
                                            disabled={disabledDownload}
                                            checked={minimizeChecked}
                                            onChange={() => setMinimizeChecked(!minimizeChecked)}
                                        >
                                            Minimize
                                        </SwitchBox>
                                    </Grid.Item>
                                    <Grid.Item>
                                        <SwitchBox
                                            disabled={disabledDownload}
                                            checked={removeRootChecked}
                                            onChange={() => setRemoveRootChecked(!removeRootChecked)}
                                        >
                                            Remove :root
                                        </SwitchBox>
                                    </Grid.Item>
                                    <Grid.Item>
                                        <SwitchBox
                                            disabled={disabledDownload}
                                            checked={removeMediaRulesChecked}
                                            onChange={() => setRemoveMediaRulesChecked(!removeMediaRulesChecked)}
                                        >
                                            Remove @media
                                        </SwitchBox>
                                    </Grid.Item>
                                    <Grid.Item>
                                        <SwitchBox
                                            disabled={disabledDownload}
                                            checked={previewCssChecked}
                                            onChange={() => setPreviewCssChecked(!previewCssChecked)}
                                        >
                                            Preview
                                        </SwitchBox>
                                    </Grid.Item>
                                </Grid>
                                <Box box-margin-top='m'>
                                    <Button
                                        button-theme='blue'
                                        disabled={disabledDownload}
                                        type='button'
                                        onClick={() => {
                                            downloadFile(
                                                getDownloadFileName(),
                                                resultThemeCSS,
                                            );
                                        }}
                                    >
                                        Download
                                    </Button>
                                </Box>
                                {!!themeName && (
                                    <Box box-margin-top='xs'>
                                        <Text text-size='small' text-color='muted' text-wrap='ellipsis'>
                                            <Grid grid-valign='middle' grid-align='center' grid-indent='xxs'>
                                                <Grid.Item>
                                                    <SvgClip />
                                                </Grid.Item>
                                                <Grid.Item>
                                                    {getDownloadFileName()}
                                                </Grid.Item>
                                            </Grid>
                                        </Text>
                                    </Box>
                                )}
                            </Text>
                        </Box>
                        {(previewCssChecked && !disabledDownload) && (
                            <Box box-margin-top='xl'>
                                <Title>Preview</Title>
                                <code className='input-value' rows={10}>
                                    {resultThemeCSS}
                                </code>
                            </Box>
                        )}
                    </Box>
                )}
            </Box>
        </>
    );
};
