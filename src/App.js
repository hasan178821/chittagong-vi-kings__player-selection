import { useEffect, useState } from 'react';
import './App.css';
import Players from './Components/Players/Players';
import Selected from './Components/Selected/Selected';
import fakeData from './fakeData/data.json';

function App() {
const [players, setPlayers] =  useState([]);
const [selected, setSelected] = useState([]);

useEffect(() =>{
  setPlayers(fakeData);
  const playersDetails = fakeData.map(player => player.name);
  // console.log(playersDetails);
}, []);

const handleAddPlayers = (player) =>{
  console.log('player button clicked', player);
  const newSelected = [...selected, player];
  setSelected(newSelected);
}

const totalSalary = selected.reduce( (total, player) => (total + player.salary) , 0);

  return (
    <div className="App">
      <header className="App-header">
        {/* Added Bootstrap */}
        <h1 className="text-center py-4 text-success">Team: Chittagong VI Kings</h1>
        <h3 style={{textAlign: 'center', alignItems: 'flex-start', fontWeight: '400'}}>Selected Players: {selected.length} </h3>
        <div className="selected-players">
          {
            selected.map(select => <Selected select={select} key={select.id}></Selected>)
          }
        </div>
        <h2 style={{textAlign: 'center', fontWeight: '400', padding: '25px 0'}}>Total Players Salary: ${totalSalary}</h2>
      </header>
      <div className="all-players">
        {
          players.map(player => <Players player={player} handleAddPlayers={handleAddPlayers} key={player.id}></Players>)
        }
      </div>
    </div>
  );
}

export default App;
