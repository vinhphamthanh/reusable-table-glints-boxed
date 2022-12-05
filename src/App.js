import {
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { sortBy } from 'lodash';
import styled from 'styled-components';
import Heading from './components/common/Heading';
import Loading from './components/common/Loading';
import Paging from './components/common/Paging';
import Search from './components/common/Search';
import RawJson from './components/RawJson';
import { Table } from './components/table/Table';
import { DATA_TYPES } from './constants/http';
import { dataActions } from './store/data/dataSlice';
import { jsonActions } from './store/json/jsonSlice';
import { GlobalStyle } from './styles/global';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState('')

  useEffect(() => {
    dispatch(dataActions.fetchDataStart({
      query: { page },
      type: DATA_TYPES.POSTS,
    }));
  }, [dispatch, page]);

  const handlePaging = useCallback(step => {
    setPage(prev => prev + step);
    dispatch(jsonActions.checkDataStart({}))
  }, [dispatch, setPage]);

  const handleCheckData = index => evt => {
    const { checked } = evt.target;
    dispatch(jsonActions.checkDataStart({ [index]: checked }))
  }

  const displayData = useMemo(() => {
    const currentData = data.isSearching ? data.searchData : data.data;

    if (!sortKey) {
      return currentData;
    }

    return sortBy(currentData, sortKey)
  }, [sortKey, data.data, data.searchData, data.isSearching]);

  const handleSort = name => {
    setSortKey(() => name)
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <Heading>Custom Reusable Table - Glints - BOXED</Heading>
      <Search />
      <Table data={displayData} onCheck={handleCheckData} onSort={handleSort} />
      <Paging
        totalPage={data.totalPage}
        page={page}
        onPaging={handlePaging}
        isVisible={!data.isSearching}
      />
      <RawJson data={data.data} />
      <Loading loading={data.loading} />
    </AppContainer>
  );
}

export default App;
