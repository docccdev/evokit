import React from 'react';
import { uiKitComponent } from '../component';

@uiKitComponent
export default class Picture extends React.Component {
    static blockName = 'picture';

    render() {
        return (
            <div className={this.getClassName()}>
                <img
                    className={this.getElementClassName('item')}
                    {...this.getCleanProps()}
                />
            </div>
        );
    }
}
