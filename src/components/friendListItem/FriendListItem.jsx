import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const { item, online, offline, avatar: avatarStyle, name: nameStyle } = styles;

  return (
    <div className={item}>
      <span className={isOnline ? online : offline}></span>
      <img className={avatarStyle} src={avatar} alt={name} width="48" />
      <p className={nameStyle}>{name}</p>
    </div>
  );
};

export default FriendListItem;