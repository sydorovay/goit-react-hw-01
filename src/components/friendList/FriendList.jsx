import FriendListItem from '../FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';
``
const FriendList = ({ friends }) => {
  const { friendlist } = styles;
  return (
    <ul className={friendlist}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          className={styles.friendListItem} // Додайте className для FriendListItem
        />
      ))}
    </ul>
  );
};

export default FriendList;