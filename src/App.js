import React, {Component, useState} from 'react';
import {CardList} from "./component/card-list/card-list.component";
import {Search} from "./component/Search/search.component";
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField:''

        };
        this.handleChange =  this.handleChange.bind(this)
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //fetch
            .then(response => response.json())
            .then(users => this.setState({monsters:users})); //update our array

    };

    handleChange = (e) => {
        this.setState({searchField:e.target.value})

    }


    render() {
        const {monsters, searchField} = this.state
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <h1 className={'body'}> Monster rolodex </h1>
                <Search
                    placeholder = 'search monsters'
                    handleChange = {this.handleChange}
                />

                <CardList mon = {filteredMonsters}>

                </CardList>

            </div>
        );
    }

}

const search = () => {


}

export default App;
