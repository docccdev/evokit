import React, { Fragment } from 'react';
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

export class PartTheme extends React.Component {
    static propTypes = {
        rootVarKey: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { inputValue: '', isPickerOpen: false };
    }

    onChangeInput = ({ target }) => {
        const { onChange } = this.props;
        const { value } = target;

        this.setState({ inputValue: value }, () => onChange(value));
    };

    onOpenPicker = () => this.setState({ isPickerOpen: true });

    onClosePicker = () => this.setState({ isPickerOpen: false });

    onChangePicker = ({ hex }) => this.setState({ inputValue: hex });

    onChangePickerComplete = ({ hex }) => this.props.onChange(hex);

    render() {
        const { rootVarKey, sliderPickerChecked } = this.props;
        const { inputValue, isPickerOpen } = this.state;

        return (
            <Fragment>
                <Box box-margin-bottom='xs'>
                    <Text text-weight='medium' text-align='center'>
                        {getTitle(rootVarKey)}
                    </Text>
                </Box>
                <Box box-position='relative'>
                    <input
                        className='input-value input-value_colorpicker'
                        type='text'
                        placeholder='#000000'
                        onChange={this.onChangeInput}
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
                            onClick={this.onOpenPicker}
                        />
                    </Box>
                </Box>
                {sliderPickerChecked && (
                    <Box box-margin-top='m'>
                        <SliderPicker
                            color={inputValue}
                            onChange={this.onChangePicker}
                            onChangeComplete={this.onChangePickerComplete}
                        />
                    </Box>
                )}
                {isPickerOpen && (
                    <Box box-position='absolute center xs'>
                        <OutsideClickHandler onOutsideClick={this.onClosePicker}>
                            <SketchPicker
                                color={inputValue}
                                onChange={this.onChangePicker}
                                onChangeComplete={this.onChangePickerComplete}
                                disableAlpha
                            />
                        </OutsideClickHandler>
                    </Box>
                )}
            </Fragment>
        );
    }
}
