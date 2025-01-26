import React, { useState } from "react";

const EditItemForm = ({ item, editItem, setEditingItem }) => {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    editItem({ ...item, name, category, quantity });
    setEditingItem(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditItemForm;
