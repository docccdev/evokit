import React from 'react';
import { createBlock } from '../component';

class ListItem extends React.PureComponent {
    static blockName = 'list__item';

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

export default createBlock(ListItem);
