import React, {useState} from "react";
import './App.css';
import CategoryBtn from "./components/CategoryBtn";
import MenuItems from "./components/MenuItems";
import MenuAPI from "./components/MenuAPI";

const allCatValue = [...new Set(MenuAPI.map((currElem)=> currElem.category)), "all"];

const App = () => {
  const [items, setItems] = useState(MenuAPI);
  const [catValue, setCatValue] = useState(allCatValue);

  const filterItems = (category) => {
    
      if(category === "all"){
        setItems(MenuAPI);
        return;
      }

      const updateItems = MenuAPI.filter((currElem) => {
        return currElem.category === category;
      });
    setItems(updateItems);
  }

  return (
    <>
      <div className="App">
        <div className="title mt-3"><h1>Order your favourite food!</h1></div><hr/>
        <CategoryBtn filterItems={filterItems} catValue={catValue} />
        <MenuItems items={items} />
      </div>
    </>
  );
}

export default App;
