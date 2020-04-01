import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const PACKAGES_LIST = [
    'evokit-body@3.1.0',
    'evokit-box@3.1.0',
    'evokit-button@3.0.0-beta.1',
    'evokit-grid@3.1.0',
    'evokit-image@3.1.0',
    'evokit-line@3.1.0',
    'evokit-link@3.1.0',
    'evokit-list@3.1.0',
    'evokit-picture@3.2.0',
    'evokit-text@3.1.0'
];

const SELECT_OPTIONS = PACKAGES_LIST.map(value => ({ value, label: value }));

export class SelectPackage extends React.Component {
    static propTypes = {
        onSelect: PropTypes.func.isRequired,
        onSuccess: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { packageName: '' };
    }

    getTheme = () => {
        const { onSelect, onSuccess } = this.props;
        const { packageName } = this.state;

        onSelect();

        fetch(`//unpkg.com/${packageName}/theme.css`).then(response => {
            response.text().then(resp => onSuccess(packageName, resp));
        });
    };

    onSelectChange = ({ value }) => {
        this.setState({ packageName: value }, this.getTheme);
    };

    render() {
        return (
            <Select
                options={SELECT_OPTIONS}
                onChange={this.onSelectChange}
                isSearchable={false}
                styles={{
                    control: (styles) => ({
                        ...styles,
                        width: 240,
                    }),
                }}
            />
        );
    }
}
