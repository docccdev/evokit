import React from 'react';
import { uiKitComponent } from '../../component';

class GridItem extends React.Component {
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

export default uiKitComponent(GridItem);
