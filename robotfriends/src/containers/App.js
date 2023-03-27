import React from "react";
import CardList from "../component/cardList";
import SearchBox from "../component/SearchBox";
import './App.css'
import Scroll from "../component/Scroll";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })

            });
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    render() {
        const {robots,searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ? <h1>Loading</h1> :
              (
                <div className="tc">
                    <h1>Robot Friends</h1>
                    <SearchBox onSearchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>

                </div>
            );
    }
}

export default App;