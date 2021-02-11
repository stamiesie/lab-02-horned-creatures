
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
                Number(e.target.value)
        });
    }

    render() {

        const { keyword, horns } = this.state;
        const filteredAnimals = images.filter((image) => {
            console.log(image.keyword === keyword);
            // if no keyword and no horns selected
            if (!keyword && !horns) return true;

            // if keyword but no horns selected
            if (keyword && !horns) {
                if (image.keyword === keyword) return true;
            }
            // if horns but no keyword selected
            if (horns && !keyword) {
                if (image.horns === horns) return true;
            }
            // if both horns and keyword selected
            if (keyword && horns) {
                if (image.keyword === keyword && image.horns === horns) return true;
            }

            return false;
        });
        console.log(filteredAnimals);

        return (
            <div className="main-page">
                <Header />
                <Dropdown
                    currentValue={keyword}
                    handleChange={this.handleNameChange}
                    options={['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}
                />

                <Dropdown
                    currentValue={horns}
                    handleChange={this.handleHornChange}
                    options={[1, 2, 3, 100]}
                />
                <div className="select-menu">

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

