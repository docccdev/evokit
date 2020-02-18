import React from 'react';
import { Body } from '../Body';
import { Grid } from '../Grid';
import { Box } from '../Box';
import { List } from '../List';

export const App = () => (
    <Body body-as='div'>
        <Body.Section>
            <Box box-padding='5xl'>
                <List list-style='decimal' list-divider='red' list-divider-indent='5xl'>
                    <List.Item>
                        Hello world
                    </List.Item>
                    <List.Item>
                        Hello world
                    </List.Item>
                    <List.Item>
                        Hello world
                    </List.Item>
                </List>
            </Box>
        </Body.Section>
    </Body>
);
