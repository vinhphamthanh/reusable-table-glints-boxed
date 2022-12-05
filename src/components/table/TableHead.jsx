import { memo } from 'react';
import styled from 'styled-components';

const TableThead = styled.th`
  text-transform: uppercase;
  background: dodgerblue;
  text-align: left;
  color: white;
  padding: 5px;
  cursor: ${({ pointer }) => pointer ?
          'pointer' :
          'default'};
`;

const TableHead = ({
  item,
  onSort,
  filter,
}) => {
  const handleSort = () => {
    onSort(item);
  };

  return (
    <TableThead title={item} onClick={filter ?
      handleSort :
      () => {}} pointer={filter}
    >
      {item}
      {filter && <span dangerouslySetInnerHTML={{ __html: '&blacktriangledown;' }} />}
    </TableThead>
  );
};

export default memo(TableHead);
