
import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return (
            <div className="photo-parent">
                <div className="photo-div">
                    <p>Horns: {this.props.src.horns}</p>
                    <img className="creature-photo" alt="animal" key={this.props.src.title} src={this.props.src.url} />
                    <p>{this.props.src.keyword}</p>
                </div>
            </div>
        )
    }
}
