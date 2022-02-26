import { React, useState, useEffect } from 'react';
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header"
import AddItem from './components/AddItem';
import Content from "./components/Content"
import Footer from './components/Footer';
import SearchItem from './components/SearchItem';


function App() {

  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  const [fetchError, setFetchError] = useState(null);

  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchItem();
    }, 2000);
  }, [])

  const fetchItem = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not receive expected data');
      const listItems = await response.json();
      console.log(listItems);
      setItems(listItems);
      setFetchError(null);
    } catch (error) {
      console.log(error.message);
      setFetchError(error.message);
    }
    finally{
    setIsLoading(false);
    }
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem];
    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //addItem function
    addItem(newItem);
    setNewItem('');
    console.log('submitted');
  }

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }




  return (
    <div className='App'>

      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isloading && <p>Loading items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isloading && <Content
          items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer
        length={items.length} />

    </div>
  );
}

export default App;
