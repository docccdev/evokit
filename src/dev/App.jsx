import React from 'react';
import { Body } from './UI/Body';
import { Grid } from './UI/Grid';
import { Box } from './UI/Box';
import { List } from './UI/List';
import { Button } from './UI/Button';
import { Text } from './UI/Text';

export const App = () => (
    <Body body-as='div'>
        <Body.Section>
            <Text style={{ width: 100 }} text-lheight='large' text-wrap={['break', 'two-line']}>
                gdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhgl
                gdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhglgdfjhgl
            </Text>
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
                            <Button
                                button-size='small'
                                button-valign='baseline'
                                button-theme='TEMPLATE_NAME:hover'
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
