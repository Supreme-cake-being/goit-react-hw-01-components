import { Box } from './Statistics.styled';
import { Title } from '../Title/Title';
import { StatList } from '../StatList/StatList';

export const Statistics = ({ data }) => {
  return (
    <Box>
      <Title text="Upload stats"></Title>

      <StatList stats={data}></StatList>
    </Box>
  );
};
