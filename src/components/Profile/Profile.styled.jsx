import styled from '@emotion/styled';

const Box = styled.div`
  padding: 32px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-bottom: 16px;
`;

const Stats = styled.ul`
  display: flex;
  align-items: center;
`;

const Stat = styled.li`
  flex-basis: calc(100% / 3);

  display: flex;
  align-items: center;
  justify-conten: center;

  flex-direction: column;
`;

const Label = styled.span`
  font-size: 16px;
  line-height: 22px;
`;

const Quantity = styled.span`
  font-size: 16px;
  line-height: 22px;
`;

export { Box, Description, Stats, Stat, Label, Quantity };
