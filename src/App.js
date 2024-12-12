import "./App.css";
import { Component, useEffect, useState } from "react";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/SearchBox/search-box-component";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newMonsters = monsters.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonsters(newMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder="Search Monsters"
        ClassName="monsters-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}
// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters : [],
//       searchField: "",
//     }
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((users)=> this.setState(()=>{
//       return {monsters: users, filteredMonsters: users}
//     },
//     ()=> {console.log(this.state);}
//     ));
//   }

//   onSearchChange  = (event)=>{
//     const searchField = event.target.value.toLowerCase();
//     this.setState({searchField})
//   }

//   render(){
//     const filteredMonsters = this.state.monsters.filter((user)=>{
//       return (user.name.toLowerCase().includes(this.state.searchField));
//     });

//     return (
//       <div className="App">
//         <h1 className= 'app-title'>Monsters Rolodex</h1>

//         <SearchBox onChangeHandler = {this.onSearchChange}
//           placeHolder = "Search Monsters"
//           ClassName = "monsters-search-box"/>

//         <CardList monsters = {filteredMonsters}/>

//       </div>
//     );
//   }
// }

// export default App;
