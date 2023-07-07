import PropTypes from 'prop-types';
import { Data } from './TableRow.styled';

export const TableRow = ({ type, amount, currency }) => {
  return (
    <Data>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Data>
  );
};

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
