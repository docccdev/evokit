import React from 'react';
import { uiKitComponent } from '../component';

class PanelBody extends React.Component {
    static blockName = 'panel__body';

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

export default uiKitComponent(PanelBody);
