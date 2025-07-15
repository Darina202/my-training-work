import { useState } from "react";
import Button from "./Button";
import "./EatSplit.css";
import FormAddFriends from "./FormAddFriends,";
import FriendsList from "./FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function EatSplit() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShow() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelect(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className="eat">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelect={handleSelect}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriends onAddFriend={handleAddFriend} />}
        <Button onClick={handleShow}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🧍‍♀️ Your expense</label> <input type="text" />
      <label>👫 {selectedFriend.name}'s expense</label>{" "}
      <input type="text" disabled />
      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="you">You</option>{" "}
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
