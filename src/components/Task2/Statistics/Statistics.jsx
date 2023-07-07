import PropTypes from 'prop-types';
import { Box } from './Statistics.styled';
import { Title } from '../Title/Title';
import { StatList } from '../StatList/StatList';

export const Statistics = ({ data }) => {
  return (
    <Box>
      <Title text="Upload stats"></Title>

      <StatList stats={data}></StatList>
    </Box>
  );
};

Statistics.propTypes = PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired
).isRequired;
