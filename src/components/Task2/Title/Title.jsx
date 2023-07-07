import PropTypes from 'prop-types';
import { PageTitle } from './Title.styled';

export const Title = ({ text }) => {
  return <PageTitle>{text}</PageTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
