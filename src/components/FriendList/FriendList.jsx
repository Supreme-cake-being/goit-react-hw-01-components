import PropTypes from 'prop-types';
import { List, Friend, Chip } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id}>
          <Chip online={isOnline}></Chip>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </Friend>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
