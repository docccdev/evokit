import React from 'react';
import { uiKitComponent } from '../../component';

@uiKitComponent
export default class ListItem extends React.Component {
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
