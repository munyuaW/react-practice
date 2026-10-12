import { useState } from "react";

const ItemsList = () => {
  const [items, setItems] = useState([
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
    { id: 2, name: "Item 3" },
  ]);

  const liEls = items.map(({ id, name }) => (
    <li key={id}>
      {name} <button onClick={() => removeItem(id)}>remove</button>
    </li>
  ));
  const addItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };

    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ul>{liEls}</ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ItemsList;
