
import './App.css';
import FriendList from './components/friendList/FriendList';
import Profile from './components/friendListItem/Profile';
import userData from './data/userData.json';
import friends from './data/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json'


export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>

  );
}


