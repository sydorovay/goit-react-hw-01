
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="item">
      <span className={`status ${ isOnline  ? 'online' : 'offline'}`}></span>
      <img  src={avatar} alt={name} width="48" />
      <p >{name}</p>
    </div>
  );
};

export default FriendListItem;