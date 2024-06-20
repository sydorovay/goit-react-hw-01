import styles from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const { item, avatar: avatarStyle, name: nameStyle, online, offline, borderOnline, borderOffline } = styles;

  return (
    <div className={`${item} ${isOnline ? borderOnline : borderOffline}`}>

      <img className={avatarStyle} src={avatar} alt={name} width="48" />
      <p className={nameStyle}>{name}</p>
            <span className={isOnline ? online : offline}>
        {isOnline ? 'online' : 'offline'}
      </span>
    </div>
  );
};

export default FriendListItem;