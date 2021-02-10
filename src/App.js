
import React, { Component } from 'react'
import './App.css';
import ImageList from './image-list.js';
import images from './data.js';
import Header from './header.js';
import Dropdown from './dropdown.js';

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

    handleHornChange = (e) => {
        this.setState({
            horns:
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
                    <Dropdown
                        keyword={keyword}
                        horns={horns}
                        handleNameChange={this.handleNameChange}
                        handleHornChange={this.handleHornChange}
                    />

                    <div className="image-list">
                        <ImageList
                            images={filteredAnimals}
                        />
                    </div>

                </div>
            </div>


        )
    }
}

