import React from 'react';
import { createBlock } from '../component';

class BodySection extends React.PureComponent {
    static blockName = 'body__section';

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

export default createBlock(BodySection);
