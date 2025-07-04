import { useState } from "react";

export default function Form() {
  // const [state, setState] = useState({ description: "", quantity: 1 });
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!description) {
      return;
    }

    setDescription("");
    setQuantity(1);
  }

  // function handleChange({ target }) {
  //   const { name, value } = target;
  //   console.log(Number(target.value));
  //   setState({
  //     ...state,
  //     [name]: value,
  //   });
  //   console.log(state.quantity);
  // }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name="quantity"
        value={quantity}
        onChange={({ target }) => setQuantity(Number(target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="description"
        value={description}
        placeholder="Item..."
        onChange={({ target }) => setDescription(target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
