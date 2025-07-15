import FriendsItem from "./FriendsItem";

export default function FriendsList({ friends, handleSelect, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendsItem
          friend={friend}
          key={friend.id}
          handleSelect={handleSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
