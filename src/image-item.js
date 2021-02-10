
import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return (
            <div className="photo-div">
                <img className="creature-photo" alt="animal" key={this.props.src.title} src={this.props.src.url} />

            </div>
        )
    }
}
