import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import List from "./List"

import Name from './Name'



function App() {
  const [currentItem,setCurrentItem] = useState(null);
  const [itemList,updateItemList] = useState([])
  const onChangeHandler=(e)=>{
console.log("current vaslue",e.target.value);
setCurrentItem(e.target.value);

  }
  const addItemToList =()=>{
    updateItemList([...itemList, {item :currentItem, key: Date.now() }])
    setCurrentItem("");
    
    
  }
  return (
    <div className="App">
      <header className="App-header">
    <div className="wrapper">
      <Name></Name>
      <div className="Input-wrapper">
        <input value={currentItem} onChange={onChangeHandler} />
        <button onClick={addItemToList}>+</button>
      </div>
      <List itemList={itemList} updateItemList ={updateItemList} />
    </div>
      </header>
    </div>
  );
}

export default App;
