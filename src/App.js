
import React, { Component } from 'react'
import './App.css';
import ImageList from './image-list.js';
import images from './data.js';
import Header from './header.js';

export default class App extends Component {
    state = {
        keyword: '',
        horns: '',
        title: '',
    }

    handleNameChange = (e) => {
        this.setState({
            keyword:
                e.target.value
        });

    }

    render() {
        const { keyword, horns } = this.state;
        const filteredAnimals = images.filter((image) => {
            if (!keyword && !horns) return true;
            console.log(horns, keyword);
            if (image.keyword === keyword || image.horns === Number(horns)) return true;

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
                        <option value="">Creature Type</option>
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

                    <select value={this.state.horns}
                        onChange={(e) => {
                            this.setState({
                                horns: e.target.value
                            })
                        }}
                    >
                        <option value="">Number of Horns</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </select>

                    <div className="image-list">
                        <ImageList
                            images={filteredAnimals} />
                    </div>
                </div>
            </div>


        )
    }
}

