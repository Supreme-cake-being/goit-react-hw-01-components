import PropTypes from 'prop-types';
import { StatContainer } from '../Stat/Stat.styled';

export const Stat = ({ label, quantity = 0 }) => {
  return (
    <StatContainer>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </StatContainer>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
