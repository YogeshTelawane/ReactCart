import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleChange, handleDelete})=>{
    return (
        <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => {
                handleChange(item.id);
              }}
              checked={item.checked}
            />

            <label
                style={(item.checked) ? {textDecoration: 'line-through'}: null}
              onDoubleClick={() => {
                handleChange(item.id);
              }}
            >
              {item.item}
            </label>

            <FaTrashAlt onClick={()=>{ handleDelete(item.id) }} 
                role="button" 
                tabIndex="0" 
                aria-label={`Delete ${item.id}`}/>
          </li>
    )
}

export default LineItem;