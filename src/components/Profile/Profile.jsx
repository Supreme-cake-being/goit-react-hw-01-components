import PropTypes from 'prop-types';
import {
  Box,
  Description,
  Stats,
  Stat,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <Box>
      <Description>
        <img src={user.avatar} alt="User avatar" className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </Description>

      <Stats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{user.stats.followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{user.stats.views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{user.stats.likes}</Quantity>
        </Stat>
      </Stats>

      {/* <Description
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      ></Description>

      <Stats stats={user.stats}></Stats> */}
    </Box>
  );
};

Profile.propTypes = PropTypes.shape({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}).isRequired;
