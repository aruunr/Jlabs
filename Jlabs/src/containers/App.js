import React from 'react';
import CardList from '../components/CardList';
//import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import robotsvg from '../robot-of-rounded-head.svg';


class App extends React.Component {
    constructor(){
        super();
        this.state= {
              robots : [],
              searchfield : ''
     
        }
        
    }

onSearchChange = (event) => {
    this.setState({
        searchfield : event.target.value
    })
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
} 
    

render() {
    
    const filteredRobots = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
        <div className='tc'>
       <img className = 'logo' src={robotsvg}/>
       <h1>Robot friends</h1> 
        <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots = {filteredRobots}/>       
        </div>
    );    
    }
}

export default App;