import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { Friend } from '../Friend/Friend';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id} avatar={avatar} name={name} online={isOnline}></Friend>
      ))}
    </List>
  );
};

FriendList.propTypes = PropTypes.arrayOf(
  PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
).isRequired;
