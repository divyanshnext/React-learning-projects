import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems(items=> [...items, newItem]);
  }

  function handleDeleteItem(id){
    setItems(items => items.filter(items => items.id !== id));
  }

  function handleToogleItem(id){
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }

  return (
    <div className="app">
      <header>
      <Logo />
      </header>
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItems={handleDeleteItem} onToogleItems={handleToogleItem}/>
      <Stats items={items}/>
    </div>
  )
}

function Logo() {
  return(
    <h1>🌴Far Away🎒</h1>

  )
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e){
    e.preventDefault();
    if (!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now()};
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
    
    
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip?</h3>
      <select value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
        {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        placeholder="Item..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form >
  )
}

function PackingList({items, onDeleteItems, onToogleItems}) {
  return (
    <div className="list">
    <ul>
      {items.map((item)=> (
      <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToogleItems={onToogleItems}/>
      ))}
    </ul>
    </div>
  );
}

function Item({item, onDeleteItems, onToogleItems}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={()=>onToogleItems(item.id)}></input>
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>
        {item.quantity}{item.description }
      </span>
      <button onClick={()=>onDeleteItems(item.id)}>❌</button>
    </li>
  )
}

function Stats({items}) {
  if (!items.length) return <p className="stats">Start adding some items to your packing list 📝</p>;
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const numPercent = Math.round(numPacked / numItems * 100 || 0);
  return (
    <footer className="stats">
      <em>
        {numPercent === 100 ? "🎉 You Got everything ! You are ready to go ✈️" : `🎒 You have ${numItems} items on your list, and you have packed ${numPacked} items (${numPercent}%).`}
      </em>
    </footer>
  )
}

