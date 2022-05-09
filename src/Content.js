import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  //TODO 2
  // data already move to app.js

  // // TODO 7
  // handleCheck function move to app.js

  // // todo 9
  //  handleDelete function move to app.js

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
