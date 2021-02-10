import React, { Component } from 'react'
import ImageItem from './image-item.js';

export default class ImageList extends Component {
    render() {
        const imageArray = this.props.images;
        return (
            <div>
                {imageArray.map((image) => {
                    return <ImageItem key={this.props.title} src={image} />
                }
                )}
            </div>
        )
    }
}
