import React from 'react';
import { createBlock } from '../component';

class PanelBody extends React.PureComponent {
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

export default createBlock(PanelBody);
