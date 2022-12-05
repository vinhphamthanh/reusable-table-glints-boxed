import { useEffect, useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import styled from 'styled-components';
import { Heading } from './components/common/Heading';
import { Loading } from './components/common/Loading';
import { Paging } from './components/common/Paging';
import { Search } from './components/common/Search';
import { Table } from './components/table/Table';
import { DATA_TYPES } from './constants/http';
import { tableActions } from './store/table/tableSlice';
import { GlobalStyle } from './styles/global';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`
function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const { totalPage, loading, data: list } = data;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(tableActions.fetchDataStart({
      query: { page },
      type: DATA_TYPES.POSTS,
    }));
  }, [dispatch, page]);

  const handleTableNavigation = step => {
    setPage(prev => prev + step)
  };

  const handleSearch = () => {}

  return (
    <AppContainer>
      <GlobalStyle />
      <Heading>Custom Reusable Table - Glints - BOXED</Heading>
      <Search />
      <Table data={list} />
      <Paging totalPage={totalPage} page={page} onNavigate={handleTableNavigation} isVisible />
      <Loading loading={loading} />
    </AppContainer>
  );
}

export default App;
