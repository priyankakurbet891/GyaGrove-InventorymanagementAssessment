import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddItemForm from "./components/AddItemForm";
import "./styles.css";

function App() {
  const [inventory, setInventory] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Add item to inventory
  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  // Edit item
  const editItem = (editedItem) => {
    setInventory(
      inventory.map((item) =>
        item.id === editedItem.id ? editedItem : item
      )
    );
  };

  // Delete item
  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add New Item"}
      </button>

      {showForm && <AddItemForm addItem={addItem} />}

      <InventoryTable
        inventory={inventory}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
