import PropTypes from 'prop-types';
import { StatsBox } from '../Stats/Stats.styled';
import { Stat } from '../Stat/Stat';

export const Stats = ({ stats }) => {
  return (
    <StatsBox>
      <Stat label="Followers" quantity={stats.followers}></Stat>
      <Stat label="Views" quantity={stats.views}></Stat>
      <Stat label="Likes" quantity={stats.likes}></Stat>
    </StatsBox>
  );
};

Stats.propTypes = PropTypes.exact({
  followers: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
}).isRequired;
