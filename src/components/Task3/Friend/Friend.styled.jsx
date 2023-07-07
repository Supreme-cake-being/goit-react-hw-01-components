import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Chip = styled.span`
  width: 16px;
  height: 16px;

  border-radius: 100%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;
