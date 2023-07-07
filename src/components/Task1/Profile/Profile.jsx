import PropTypes from 'prop-types';
import { Box } from './Profile.styled';
import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';

export const Profile = ({ user }) => {
  // console.log(user);
  return (
    <Box>
      <Description
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      ></Description>

      <Stats stats={user.stats}></Stats>
    </Box>
  );
};

Profile.propTypes = PropTypes.exact({
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}).isRequired;
