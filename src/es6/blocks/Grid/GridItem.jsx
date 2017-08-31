import React from 'react';
import { uiKitComponent } from '../../component';

@uiKitComponent
export default class GridItem extends React.Component {
    static blockName = 'grid__item';

    render() {
        return (
            <div
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </div>
        );
    }
}
