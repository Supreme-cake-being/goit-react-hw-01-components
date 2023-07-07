import PropTypes from 'prop-types';
import { Box } from './Transactions.styled';
import { TableHead } from '../TableHead/TableHead';
import { TableRow } from '../TableData/TableRow';

export const Transactions = ({ transactions }) => {
  return (
    <Box>
      <TableHead></TableHead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TableRow>
        ))}
      </tbody>
    </Box>
  );
};

Transactions.propTypes = PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired
).isRequired;
