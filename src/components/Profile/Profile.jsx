import styles from './Profile.module.css';

const Profile = ({ username, tag, location, image, stats }) => {
  const { profile, image: imgClass, username: userClass, tag: tagClass, location: locClass, statClass: statsClass, statItem: statItem } = styles;

  return (
    <div className={profile}>
      <div>
        <img className={imgClass} src={image} alt={username} />
        <p className={userClass}>{username}</p>
        <p className={tagClass}>@{tag}</p>
        <p className={locClass}>{location}</p>
      </div>

      <ul className={statsClass}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={statItem} key={key}>
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;