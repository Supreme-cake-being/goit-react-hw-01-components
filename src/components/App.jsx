import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user}></Profile>

      <Statistics data={data}></Statistics>

      <FriendList friends={friends}></FriendList>

      <Transactions transactions={transactions}></Transactions>
    </Container>
  );
};
