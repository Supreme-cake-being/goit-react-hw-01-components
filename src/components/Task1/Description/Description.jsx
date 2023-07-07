import PropTypes from 'prop-types';
import { DescriptionBox } from '../Description/Description.styled';

export const Description = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  username = 'anonymous',
  tag = 'anonymous',
  location = 'somewhere on Earth or maybe on Mars',
}) => {
  return (
    <DescriptionBox>
      <img src={avatar} width="240" alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </DescriptionBox>
  );
};

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
