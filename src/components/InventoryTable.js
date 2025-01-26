import React, { useState } from "react";
import EditItemForm from "./EditItemForm";

const InventoryTable = ({ inventory, deleteItem, editItem }) => {
  const [editingItem, setEditingItem] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");

  // Filter items by category
  const filteredInventory = inventory.filter((item) =>
    item.category.toLowerCase().includes(filterCategory.toLowerCase())
  );

  // Sort items by quantity
  const sortedInventory = filteredInventory.sort((a, b) => a.quantity - b.quantity);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by category"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedInventory.map((item) => (
            <tr
              key={item.id}
              style={{ backgroundColor: item.quantity < 10 ? "red" : "white" }}
            >
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => setEditingItem(item)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingItem && (
        <EditItemForm item={editingItem} editItem={editItem} setEditingItem={setEditingItem} />
      )}
    </div>
  );
};

export default InventoryTable;
