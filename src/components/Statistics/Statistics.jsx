import PropTypes from 'prop-types';
import { Title } from '../Title/Title';
import { Box, List, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <Box>
      <Title title={title}></Title>

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
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
