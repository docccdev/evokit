import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker, SliderPicker } from 'react-color';
import OutsideClickHandler from 'react-outside-click-handler';
import { Box, Text } from '../UI';

const getTitle = rootVarKey => {
    const _is = name => rootVarKey.search(`-${name}-`) !== -1;

    if (_is('disabled-background')) {
        return 'DISABLED background color';
    } else if (_is('disabled-color')) {
        return 'DISABLED text color';
    } else if (_is('disabled-border')) {
        return 'DISABLED border color';
    }

    if (_is('active-background')) {
        return 'ACTIVE background color';
    } else if (_is('active-color')) {
        return 'ACTIVE text color';
    } else if (_is('active-border')) {
        return 'ACTIVE border color';
    }

    if (_is('focus-background')) {
        return 'FOCUS background color';
    } else if (_is('focus-color')) {
        return 'FOCUS text color';
    } else if (_is('focus-border')) {
        return 'FOCUS border color';
    }

    if (_is('hover-background')) {
        return 'HOVER background color';
    } else if (_is('hover-color')) {
        return 'HOVER text color';
    } else if (_is('hover-border')) {
        return 'HOVER border color';
    }

    if (_is('background')) {
        return 'background color';
    } else if (_is('color')) {
        return 'text color';
    } else if (_is('border')) {
        return 'border color';
    }

    return 'other';
};

export const PartTheme = ({ rootVarKey, sliderPickerChecked, inputValue, onChange }) => {
    const [isPickerOpen, setPickerOpen] = useState(false);

    const onChangeInput = ({ target }) => onChange(target.value);
    const onOpenPicker = () => setPickerOpen(true);
    const onClosePicker = () => setPickerOpen(false);
    const onChangePicker = ({ hex }) => onChange(hex);

    return (
        <>
            {!!rootVarKey && (
                <Box box-margin-bottom='xs'>
                    <Text text-weight='medium' text-align='center'>
                        {getTitle(rootVarKey)}
                    </Text>
                </Box>
            )}
            <Box box-position='relative'>
                <input
                    className='input-value input-value_colorpicker'
                    type='text'
                    placeholder='#000000'
                    onChange={onChangeInput}
                    value={inputValue}
                />
                <Box
                    box-position='absolute'
                    box-place='center-right'
                    box-margin-right='xxs'
                >
                    <div
                        className='input-color'
                        style={{ background: inputValue }}
                        onClick={onOpenPicker}
                    />
                </Box>
            </Box>
            {sliderPickerChecked && (
                <Box box-margin-top='m'>
                    <SliderPicker
                        color={inputValue}
                        onChange={onChangePicker}
                        onChangeComplete={onChangePicker}
                    />
                </Box>
            )}
            {isPickerOpen && (
                <Box box-position='absolute top xs'  box-margin-top='xl'>
                    <OutsideClickHandler onOutsideClick={onClosePicker}>
                        <SketchPicker
                            color={inputValue}
                            onChange={onChangePicker}
                            onChangeComplete={onChangePicker}
                            disableAlpha
                        />
                    </OutsideClickHandler>
                </Box>
            )}
        </>
    );
};

PartTheme.propTypes = {
    rootVarKey: PropTypes.string,
    sliderPickerChecked: PropTypes.bool,
    inputValue: PropTypes.string,
    onChange: PropTypes.func,
};
