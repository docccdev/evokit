import React from 'react';
import { createBlock } from '../../component';

class PictureItem extends React.Component {
    static blockTag = 'img';
    static blockName = 'picture__item';

    render() {
        return (
            React.createElement(
                this.getTagName(),
                this.getProps(),
            )
        );
    }
}

export default createBlock(PictureItem);
