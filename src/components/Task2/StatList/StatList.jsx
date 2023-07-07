import PropTypes from 'prop-types';
import { List, Item, Label, Percentage } from './StatList.styled';

export const StatList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </List>
  );
};
