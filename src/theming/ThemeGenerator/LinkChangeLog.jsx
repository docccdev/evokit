import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Box, Text, Link, List } from '../UI';

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

export const LinkChangeLog = ({ children, ...props }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Link {...props} onClick={() => setOpen(!isOpen)}>
                {children}
            </Link>
            {isOpen && (
                <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                    <Box
                        className='popup-changelog'
                        box-position='absolute center xs'
                        box-background='white'
                        box-padding='xl'
                        box-round='xs'
                    >
                        <Box box-margin-bottom='xl'>
                            <Text text-align='center' text-size='h4' text-weight='medium'>
                                Changelog
                            </Text>
                        </Box>
                        <BoxLogItem
                            box-margin-bottom='m'
                            version='1.3.0'
                            changes={[
                                'add checkbox slider color picker',
                                'add new block evokit-button',
                                'fix grid column for input colors'
                            ]}
                        />
                        <BoxLogItem
                            box-margin-bottom='m'
                            version='1.2.0'
                            changes={['add checkbox minimize css']}
                        />
                        <BoxLogItem
                            box-margin-bottom='m'
                            version='1.1.0'
                            changes={[
                                'package name cut spaces',
                                'package name max length 128 characters',
                                'code improvement',
                                'UI improvement'
                            ]}
                        />
                        <BoxLogItem version='1.0.0' changes={['initial version']} />
                    </Box>
                </OutsideClickHandler>
            )}
        </>
    );
};
