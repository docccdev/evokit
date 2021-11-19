import React from 'react';
import Switch from 'react-switch';
import { Text, Grid } from '../UI';

export const SwitchBox = ({ checked, onChange, children, disabled }) => (
    <Grid
        grid-as='label'
        grid-indent='xs'
        grid-valign='middle'
        style={{ cursor: disabled ? 'default' : 'pointer' }}
    >
        <Grid.Item>
            <Text
                text-as={Switch}
                text-valign='top'
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor='#2684ff'
                offColor='#cccccc'
            />
        </Grid.Item>
        <Grid.Item>
            <Text text-color={disabled ? 'muted' : null}>
                {children}
            </Text>
        </Grid.Item>
    </Grid>
);
