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

  // TODO 7
  const handleCheck = (id) => {
    console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  // todo 9
  const handleDelete = (id) => {
    console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      {/* todo 10 */}
      {items.length ? (
        // {/* TODO 3 */}
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                // TODO 7
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              ></input>
              <label
                // todo 8
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              {/* TODO 4 */}
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
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
