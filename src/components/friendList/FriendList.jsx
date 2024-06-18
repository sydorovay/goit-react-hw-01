import FriendListItem from '../FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  const { friendlist, friendListItem } = styles;

  return (
    <ul className={friendlist}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          className={friendListItem}
        />
      ))}
    </ul>
  );
};

export default FriendList;
