import { Head } from './TableHead.styled';

export const TableHead = () => {
  return (
    <Head>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </Head>
  );
};
