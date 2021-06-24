import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const PACKAGES_LIST = [
    'evokit-body@3.1.0',
    'evokit-box@3.1.0',
    'evokit-button@3.0.0',
    'evokit-grid@3.1.0',
    'evokit-image@3.2.0',
    'evokit-line@3.1.0',
    'evokit-link@3.1.0',
    'evokit-list@3.1.0',
    'evokit-picture@3.2.0',
    'evokit-text@3.1.0'
];

const SELECT_OPTIONS = PACKAGES_LIST.map(value => ({ value, label: value }));

export const SelectPackage = ({ onSelect, onSuccess }) => {
    const [packageName, setPackageName] = useState('');

    useEffect(() => {
        if (!PACKAGES_LIST.includes(packageName)) {
            return;
        }

        let themeUrl = `//unpkg.com/${packageName}/theme.css`;

        if (window.location.hostname === 'localhost') {
            const cleanPackageName = packageName.split('@')[0];
            themeUrl = `//${window.location.host}/packages/${cleanPackageName}/theme.css`;
        }

        onSelect();

        fetch(themeUrl).then((response) => {
            response.text().then((resp) => onSuccess(packageName, resp));
        });
    }, [packageName]);

    return (
        <Select
            options={SELECT_OPTIONS}
            onChange={({ value }) => setPackageName(value)}
            isSearchable={false}
            styles={{
                control: (styles) => ({
                    ...styles,
                    width: 240,
                }),
            }}
        />
    );
};

SelectPackage.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
};
