import { Container } from './App.styled';
import { Profile } from './Task1/Profile/Profile';
import { Statistics } from './Task2/Statistics/Statistics';
import { FriendList } from './Task3/FriendList/FriendList';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user}></Profile>

      <Statistics data={data}></Statistics>

      <FriendList friends={friends}></FriendList>
    </Container>
  );
};
