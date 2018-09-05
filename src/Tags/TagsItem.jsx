import React from 'react';
import { createBlock } from '../component';

class TagsItem extends React.PureComponent {
    static blockName = 'tags__item';
    static blockMods = [
        'theme',
    ];

    render() {
        return (
            <li
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </li>
        );
    }
}

export default createBlock(TagsItem);
