import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  flex-basis: 20%;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;

  color: white;
  background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Label = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

const Percentage = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;

export { List, Item, Label, Percentage };
