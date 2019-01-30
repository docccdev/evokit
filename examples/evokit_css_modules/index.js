import React from 'react';
import ReactDOM from 'react-dom';
import { CSSModules, Box, Grid, Picture, List } from './evokit';
import css from './test.css';

CSSModules(Box, css);
CSSModules(Grid, css);
CSSModules(Grid.Item, css);
CSSModules(Picture, css);
CSSModules(Picture.Item, css);
CSSModules(List, css);
CSSModules(List.Item, css);

class FormContainer extends React.Component {
    render() {
        return (
            <Box box-background={['danger@large']} box-padding={['xs', 'xxl@large']} className='test'>
                <Grid grid-divider='danger@large' grid-indent='xl' grid-column={6}>
                    <Grid.Item mix-width='1-10'>
                        <Picture>
                            <Picture.Item
                                src='https://picsum.photos/300/300'
                                alt='fsdfds'
                            />
                        </Picture>
                    </Grid.Item>
                    <Grid.Item>
                        <List>
                            <List.Item>
                                45456
                            </List.Item>
                            <List.Item>
                                45456
                            </List.Item>
                        </List>
                    </Grid.Item>
                    <Grid.Item>
                        3
                    </Grid.Item>
                    <Grid.Item>
                        4
                    </Grid.Item>
                    <Grid.Item>
                        5
                    </Grid.Item>
                    <Grid.Item>
                        6
                    </Grid.Item>
                    <Grid.Item>
                        7
                    </Grid.Item>
                    <Grid.Item>
                        8
                    </Grid.Item>
                    <Grid.Item>
                        9
                    </Grid.Item>
                    <Grid.Item>
                        10
                    </Grid.Item>
                </Grid>
            </Box>
        );
    }
}

const wrapper = document.getElementById("root");
ReactDOM.render(<FormContainer />, wrapper);
