import { React } from "react";
  
import ItemList from "./ItemList";

const Content = ({items, handleChange, handleDelete}) => {
  

  return (
    <>
        {
            items.length ? (
                <ItemList
                items={items}
                handleChange={handleChange}
                handleDelete={handleDelete}/>
            ) : (
                <p>No items present!</p>
            )
        }
      
    </>
  );
};

export default Content;
