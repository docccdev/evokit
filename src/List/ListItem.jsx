import React from 'react';
import { uiKitComponent } from '../component';

class ListItem extends React.Component {
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

export default uiKitComponent(ListItem);
