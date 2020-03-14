import React , {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state={
     monsters:[],
     searchMonster:''
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>response.json()).then(users=>this.setState({monsters:users}));
  }

  handleChange=(e)=>{
    this.setState({searchMonster:e.target.value});
  }
  render(){
    const { monsters,searchMonster} =this.state;
    const filteredMonster=monsters.filter(monster=>monster.name.toLocaleLowerCase().includes(searchMonster.toLocaleLowerCase()));
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox  placeholder='search monster'
      handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
