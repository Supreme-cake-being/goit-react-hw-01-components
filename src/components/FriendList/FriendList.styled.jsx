import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Chip = styled.span`
  width: 16px;
  height: 16px;

  border-radius: 100%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;

export { List, Friend, Chip };
