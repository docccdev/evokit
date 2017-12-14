import React from 'react';
import { uiKitComponent } from '../../component';

class TagsItem extends React.Component {
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

export default uiKitComponent(TagsItem);
