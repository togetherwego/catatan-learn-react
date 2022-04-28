import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  //TODO 2
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "cookies",
    },
    {
      id: 2,
      checked: false,
      item: "bread",
    },
    {
      id: 3,
      checked: true,
      item: "ice cream",
    },
  ]);



  return (
    <main>
      {items.length ? (
        // {/* TODO 3 */}
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                // TODO 7
                checked={item.checked}
              ></input>
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              {/* TODO 4 */}
              <FaTrashAlt
                
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>The list is empty</p>
      )}
    </main>
  );
};

export default Content;
