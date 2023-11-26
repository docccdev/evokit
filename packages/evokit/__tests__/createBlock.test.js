import React from 'react';
import { shallow, mount } from 'enzyme';
import { createBlock } from '../src';

describe("import { createBlock } from 'evokit';", () => {
    it('default', () => {
        const Block = createBlock('div', 'block');
        expect(Block.displayName).toBe('block');
        expect(shallow(<Block />).contains(<div className='ek-block'></div>)).toBeTruthy();
        expect(shallow(<Block>text</Block>).contains(<div className='ek-block'>text</div>)).toBeTruthy();
    });

    it('createRef()', () => {
        const Block = createBlock('div', 'block');
        const blockRef = React.createRef();
        const wrapper = mount(
            <>
                <Block ref={blockRef}>ololo</Block>
            </>
        );

        expect(wrapper.find('div').text()).toEqual('ololo');
        expect(wrapper.find('div').instance()).toEqual(blockRef.current);
    });

    it('DEPRECATED prop ref', () => {
        const Block = createBlock('div', 'block');
        let blockRef = null;
        const wrapper = mount(
            <>
                <Block
                    block-ref={(target) => {
                        blockRef = target;
                    }}
                >
                    ololo
                </Block>
            </>
        );

        expect(wrapper.find('div').text()).toEqual('ololo');
        expect(wrapper.find('div').instance()).toEqual(blockRef);
    });

    it('elem', () => {
        const Element = createBlock('li', 'list__item');
        expect(shallow(<Element />).contains(<li className='ek-list__item'></li>)).toBeTruthy();
    });

    it('tag', () => {
        const Block = createBlock('span', 'block');
        expect(shallow(<Block />).contains(<span className='ek-block' />)).toBeTruthy();
    });

    it('mods', () => {
        const Block = createBlock('div', 'block', ['modName']);
        expect(
            shallow(<Block block-modName='modValue' />).contains(<div className='ek-block ek-block_modName_modValue' />)
        ).toBeTruthy();
    });

    it('extended mods', () => {
        const Block = createBlock('div', 'block', [
            'modName',
            ['border', ['border-color', 'border-weight', 'border-style']],
            [
                'border-color',
                [
                    ['border-color-top', 'border-color-bottom'],
                    ['border-color-right', 'border-color-left'],
                    'border-color-bottom',
                    'border-color-left',
                ],
            ],
            [
                'border-weight',
                [
                    ['border-weight-top', 'border-weight-bottom'],
                    ['border-weight-right', 'border-weight-left'],
                    'border-weight-bottom',
                    'border-weight-left',
                ],
            ],
        ]);
        expect(shallow(<Block block-modName='modValue' />).html()).toEqual(
            '<div class="ek-block ek-block_modName_modValue"></div>'
        );
        expect(shallow(<Block block-modName='modValue ololo' />).html()).toEqual(
            '<div class="ek-block ek-block_modName_modValue"></div>'
        );
        expect(shallow(<Block block-border='value' />).html()).toEqual(
            '<div class="ek-block ek-block_border_value"></div>'
        );
        expect(shallow(<Block block-border='color weight' />).html()).toEqual(
            '<div class="ek-block ek-block_border-color_color ek-block_border-weight_weight"></div>'
        );
        expect(shallow(<Block block-border='color weight solid' />).html()).toEqual(
            '<div class="ek-block ek-block_border-color_color ek-block_border-weight_weight ek-block_border-style_solid"></div>'
        );
        expect(shallow(<Block block-border-color='value' />).html()).toEqual(
            '<div class="ek-block ek-block_border-color_value"></div>'
        );
        expect(shallow(<Block block-border-color='color1 color2' />).html()).toEqual(
            '<div class="ek-block ek-block_border-color-top_color1 ek-block_border-color-bottom_color1 ek-block_border-color-right_color2 ek-block_border-color-left_color2"></div>'
        );
        expect(shallow(<Block block-border-color='color1 color2 color3' />).html()).toEqual(
            '<div class="ek-block ek-block_border-color-top_color1 ek-block_border-color-right_color2 ek-block_border-color-left_color2 ek-block_border-color-bottom_color3"></div>'
        );
        expect(shallow(<Block block-border-color='color1 color2 color3 color4' />).html()).toEqual(
            '<div class="ek-block ek-block_border-color-top_color1 ek-block_border-color-right_color2 ek-block_border-color-bottom_color3 ek-block_border-color-left_color4"></div>'
        );
    });

    it('blackhole', () => {
        const Block = createBlock('div', 'block', ['modName']);
        expect(
            shallow(
                <Block
                    block-blackhole='sucks'
                    block-modName='modValue'
                />
            ).contains(<div className='ek-block ek-block_blackhole_sucks ek-block_modName_modValue' />)
        ).toBeTruthy();
    });

    it('with children', () => {
        const Block = createBlock('div', 'block');
        expect(shallow(<Block>ololo</Block>).contains(<div className='ek-block'>ololo</div>)).toBeTruthy();
    });

    describe('as props', () => {
        const Block = createBlock('div', 'block', ['modName']);
        const FuncComponent = (props) => (
            <table
                data-test='test'
                {...props}
            />
        );
        class ClassComponent extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <header
                        data-test='test'
                        {...this.props}
                    />
                );
            }
        }

        it('string', () => {
            const wrapper = shallow(<Block block-as='section' />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toMatchSnapshot();
            expect(wrapper.html()).toEqual('<section class="ek-block"></section>');
        });

        it('func', () => {
            const wrapper = shallow(<Block block-as={FuncComponent} />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toMatchSnapshot();
            expect(wrapper.html()).toEqual('<table data-test="test" class="ek-block"></table>');
        });

        it('class', () => {
            const wrapper = shallow(<Block block-as={ClassComponent} />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toMatchSnapshot();
            expect(wrapper.html()).toEqual('<header data-test="test" class="ek-block"></header>');
        });

        it('func with mods', () => {
            const wrapper = shallow(
                <Block
                    block-modName='modValue'
                    block-as={FuncComponent}
                />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toMatchSnapshot();
            expect(wrapper.html()).toEqual(
                '<table data-test="test" class="ek-block ek-block_modName_modValue"></table>'
            );
        });

        it('class with mods', () => {
            const wrapper = shallow(
                <Block
                    block-modName='modValue'
                    block-as={ClassComponent}
                />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toMatchSnapshot();
            expect(wrapper.html()).toEqual(
                '<header data-test="test" class="ek-block ek-block_modName_modValue"></header>'
            );
        });
    });

    describe('with props', () => {
        const Block = createBlock('div', 'block', ['modName']);
        const BlockItem = createBlock('div', 'block__item', ['elModName']);

        it('elem', () => {
            expect(
                shallow(<BlockItem block-item-elModName='elModValue' />).contains(
                    <div className='ek-block__item ek-block__item_elModName_elModValue'></div>
                )
            ).toBeTruthy();
        });

        it('DEPRECATED prop tag', () => {
            expect(shallow(<Block block-tag='span' />).contains(<span className='ek-block'></span>)).toBeTruthy();
        });

        it('mods', () => {
            expect(
                shallow(<Block block-modName='modValue' />).contains(
                    <div className='ek-block ek-block_modName_modValue'></div>
                )
            ).toBeTruthy();
        });

        it('with className', () => {
            expect(
                shallow(
                    <Block
                        block-modName='modValue'
                        className='class-name'
                    />
                ).contains(<div className='ek-block ek-block_modName_modValue class-name'></div>)
            ).toBeTruthy();
        });

        describe('custom class prefix', () => {
            it('default', () => {
                expect(
                    shallow(<Block block-preset={{ b: 'ek-' }} />).contains(<div className='ek-block'></div>)
                ).toBeTruthy();
            });

            it('mods', () => {
                expect(
                    shallow(
                        <Block
                            block-preset={{ b: 'ek-' }}
                            block-modName='modValue'
                        />
                    ).contains(<div className='ek-block ek-block_modName_modValue'></div>)
                ).toBeTruthy();
            });
        });

        describe('css modules', () => {
            it('default', () => {
                expect(
                    shallow(<Block block-preset={{ b: '', css: { block: 'h67f' } }} />).contains(
                        <div className='h67f'></div>
                    )
                ).toBeTruthy();
            });

            it('with mods', () => {
                expect(
                    shallow(
                        <Block
                            block-preset={{ b: '', css: { block: 'h67f', block_modName_modValue: 'ko45' } }}
                            block-modName='modValue'
                        />
                    ).contains(<div className='h67f ko45'></div>)
                ).toBeTruthy();
            });

            it('with className', () => {
                expect(
                    shallow(
                        <Block
                            block-preset={{ b: '', css: { block: 'h67f' } }}
                            className='class-name'
                        />
                    ).contains(<div className='h67f class-name'></div>)
                ).toBeTruthy();
            });

            it('with mods and className', () => {
                expect(
                    shallow(
                        <Block
                            block-preset={{ b: '', css: { block: 'h67f', block_modName_modValue: 'ko45' } }}
                            block-modName='modValue'
                            className='class-name VasYa'
                        />
                    ).contains(<div className='h67f ko45 class-name VasYa'></div>)
                ).toBeTruthy();
            });
        });
    });
});
