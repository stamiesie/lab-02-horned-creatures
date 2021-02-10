
import React, { Component } from 'react'
import './App.css';
import ImageList from './image-list.js';
import images from './data.js';
import Header from './header.js';

export default class App extends Component {
    state = {
        keyword: '',
        horns: '',
        title: ''
    }

    handleNameChange = (e) => {
        this.setState({
            keyword:
                e.target.value
        });

    }

    render() {
        // filter
        const filteredAnimals = images.filter((image) => {
            console.log(this.state.keyword, image.keyword);
            if (this.state.keyword === image.keyword) return true;

            return false;

        });
        return (
            <div className="main-page">
                <Header />
                <div className="select-menu">
                    <select value={this.state.keyword}
                        onChange={(e) => {
                            this.setState({
                                keyword: e.target.value
                            })

                        }}>
                        <option value="">Creatures</option>
                        <option value="narwhal">Narwhal</option>
                        <option value="rhino">Rhino</option>
                        <option value="unicorn">Unicorn</option>
                        <option value="unilego">UniLego</option>
                        <option value="triceratops">Triceratops</option>
                        <option value="markhor">Markhor</option>
                        <option value="mouflon">Mouflon</option>
                        <option value="addax">Addax</option>
                        <option value="chameleon">Chameleon</option>
                        <option value="lizard">Lizard</option>
                        <option value="dragon">Dragon</option>
                    </select>

                    <div className="photo-div">
                        <ImageList images={filteredAnimals} />
                    </div>
                </div>
            </div>


        )
    }
}

