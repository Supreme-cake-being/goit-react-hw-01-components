import PropTypes from 'prop-types';
import { Item, Chip } from './Friend.styled';

export const Friend = ({ avatar, name, online }) => {
  return (
    <Item>
      <Chip online={online}></Chip>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
