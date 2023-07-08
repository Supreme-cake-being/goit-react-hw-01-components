import styled from '@emotion/styled';

const Box = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const PageTitle = styled.h2`
  padding: 32px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  text-align: center;
`;

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

export { Box, PageTitle, List, Item, Label, Percentage };
