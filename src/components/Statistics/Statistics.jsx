import PropTypes from 'prop-types';
import {
  Box,
  PageTitle,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ data }) => {
  return (
    <Box>
      <PageTitle>Upload stats</PageTitle>

      <List>
        {data.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Box>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
