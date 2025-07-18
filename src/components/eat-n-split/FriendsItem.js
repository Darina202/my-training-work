import Button from "./Button";

export default function FriendsItem({ friend, handleSelect, selectedFriend }) {
  const isSelect = selectedFriend?.id === friend.id;

  return (
    <li className={isSelect ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => handleSelect(friend)}>
        {isSelect ? "Close" : "Select"}
      </Button>
    </li>
  );
}
