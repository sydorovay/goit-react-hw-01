import styles from './Profile.module.css';

const Profile = ({ username, tag, location, image, stats }) => (
  <div className={styles.profile}>
    <div>
      <img className={styles.image} src={image} alt={username} />
      <p className={styles.userName}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      {Object.entries(stats).map(([key, value]) => (
        <li className={styles.statItem} key={key}>
          <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Profile;