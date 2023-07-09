import PropTypes from 'prop-types';
import { PageTitle } from './Title.styled';

export const Title = ({ title }) => {
  return <>{title && <PageTitle>{title}</PageTitle>}</>;
};

Title.propTypes = {
  title: PropTypes.string,
};
