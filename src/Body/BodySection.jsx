import React from 'react';
import { createBlock } from '../component';

class BodySection extends React.Component {
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
