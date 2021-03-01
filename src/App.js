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
        <h4 className="text-center fst-italic pt-3"><span className="text-success">Bangladesh</span> <span className="text-danger">Premier</span> <span className="text-success">League</span> (BPL)</h4>
        <h3 className="text-center py-2 text-success">Team: Chittagong VI Kings</h3>
        <h4 style={{textAlign: 'center', alignItems: 'flex-start', fontWeight: '400', color: 'cyan'}}>Selected Players: {selected.length} </h4>
        <div className="selected-players">
          {
            selected.map(select => <Selected select={select} key={select.id}></Selected>)
          }
        </div>
        <h3 style={{textAlign: 'center', fontWeight: '400', padding: '15px 0', color: 'cyan'}}>Total Players Salary: ${totalSalary}</h3>
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
