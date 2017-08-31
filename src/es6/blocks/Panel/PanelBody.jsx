import React from 'react';
import { uiKitComponent } from '../../component';

@uiKitComponent
export default class PanelBody extends React.Component {
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
