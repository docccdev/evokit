import React from 'react';
import { Body } from '../Body';
import { Grid } from '../Grid';
import { Box } from '../Box';
import { List } from '../List';
import { Button } from '../Button';

export const App = () => (
    <Body body-as='div'>
        <Body.Section>
            <Box box-padding='5xl' box-border='red'>
                <Grid grid-divider-indent='xl' grid-divider-column='3' grid-divider='red'>
                    {[1,2,3,4,5,6,7].map((value) => (
                        <Grid.Item key={value}>
                            <Button
                                button-padding={value === 1 ? 's 5xl' : null}
                                button-theme='switcher'
                                button-height='1-1'
                            >
                                привет
                            </Button>
                        </Grid.Item>
                    ))}
                </Grid>
            </Box>

{/*            <Box box-border='red1'>
                <Grid grid-divider-indent='5xl xs' grid-divider-column={['1', '2@medium', '3@large', '4@wide', 'expand@huge']} grid-divider='red'>
                    {[1,2,3,4,5,6,7].map((value) => (
                        <Grid.Item key={value}>
                            45465465
                        </Grid.Item>
                    ))}
                </Grid>
            </Box>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Box box-border='red1'>
                <Grid grid-divider-indent='xxs' grid-divider-column={['expand', '2@medium', 'auto@large', '4@wide', 'expand@huge']} grid-divider='red'>
                    {[1,2,3,4,5,6,7].map((value) => (
                        <Grid.Item key={value}>
                            45465465
                        </Grid.Item>
                    ))}
                </Grid>
            </Box>*/}
        </Body.Section>
    </Body>
);