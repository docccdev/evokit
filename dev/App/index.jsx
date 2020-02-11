import React from 'react';
import { Body } from '../Body';
import { Grid } from '../Grid';
import { Box } from '../Box';

export const App = () => (
    <Body body-as='div'>
        <Body.Section>
            <Box box-padding='5xl'>
                <Grid grid-indent='xxl' grid-column={2} grid-divider='red'>
                    <Grid.Item>
                        5656
                    </Grid.Item>
                    <Grid.Item>
                        5656
                    </Grid.Item>
                </Grid>
            </Box>
        </Body.Section>
    </Body>
);
