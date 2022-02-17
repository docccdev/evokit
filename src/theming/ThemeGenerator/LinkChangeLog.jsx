import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Box, Text, Link, List } from '../UI';

const CHANGELOG = {
    '1.0.0': ['initial version'],
    '1.1.0': [
        'package name cut spaces',
        'package name max length 128 characters',
        'code improvement',
        'UI improvement',
    ],
    '1.2.0': ['add checkbox minimize css'],
    '1.3.0': [
        'add checkbox slider color picker',
        'add new block evokit-button',
        'fix grid column for input colors',
    ],
    '1.4.0': [
        'add by default single mod',
        'improvement code',
    ],
    '1.4.1': ['improvement code'],
    '1.5.0': [
        'use react hooks',
        'add checkbox remove :root from css',
        'add checkbox remove @media from css',
        'add checkbox preview theme file',
    ],
    '1.5.1': [
        'add stylelint-disable comment',
    ],
};

export const VERSION = Object.keys(CHANGELOG).reverse()[0];

const BoxLogItem = ({ version, changes, children, ...props }) => (
    <Box {...props}>
        <Box box-margin-bottom='xs'>
            <Text text-align='center' text-color='muted'>
                v{version}
            </Text>
        </Box>
        <Text text-align='center'>
            {changes.length > 1 ? (
                <List list-indent='xxs'>
                    {changes.map(value => (
                        <List.Item key={value}>{value}</List.Item>
                    ))}
                </List>
            ) : (
                changes[0]
            )}
            {children && <Box box-margin-top='xxs'>{children}</Box>}
        </Text>
    </Box>
);

export const LinkChangeLog = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Link {...props} onClick={() => setOpen(!isOpen)}>
                v{VERSION}
            </Link>
            {isOpen && (
                <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                    <Box
                        className='popup-changelog'
                        box-position='absolute top m'
                        box-background='white'
                        box-padding='xl xl xs xl'
                        box-margin-top='xl'
                        box-round='xs'
                    >
                        <Box box-margin-bottom='xl'>
                            <Text text-align='center' text-size='h4' text-weight='medium'>
                                Changelog
                            </Text>
                        </Box>
                        {Object.keys(CHANGELOG).reverse().map((ver) => (
                            <BoxLogItem
                                box-margin-bottom='m'
                                key={ver}
                                version={ver}
                                changes={CHANGELOG[ver]}
                            />
                        ))}
                    </Box>
                </OutsideClickHandler>
            )}
        </>
    );
};
