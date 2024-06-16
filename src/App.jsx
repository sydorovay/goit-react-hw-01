
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './data/userData.json';
import friendsData from './data/friends.json';
import transactionsData from './data/transactions.json';
import styles from './App.module.css'

export default function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div className={styles.App}>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
} 

