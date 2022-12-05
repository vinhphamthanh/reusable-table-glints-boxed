import { orderBy } from 'lodash';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import styled from 'styled-components';
import { EmptyPage } from './components/common/EmptyPage';
import Heading from './components/common/Heading';
import Loading from './components/common/Loading';
import Paging from './components/common/Paging';
import Search from './components/common/Search';
import RawJson from './components/RawJson';
import { Table } from './components/table/Table';
import { ORDER_BY } from './constants/common';
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
  const [sortKey, setSortKey] = useState('');
  const [orderType, setOrderType] = useState(ORDER_BY.desc);

  useEffect(() => {
    dispatch(dataActions.fetchDataStart({
      query: { page },
      type: DATA_TYPES.POSTS,
    }));
  }, [dispatch, page]);

  const handleClearJsonData = () => {
    dispatch(jsonActions.checkDataStart({}));
  };

  const handlePaging = useCallback(step => {
    setPage(prev => prev + step);
    handleClearJsonData();
  }, [dispatch, setPage]);

  const handleCheckData = index => evt => {
    const { checked } = evt.target;
    dispatch(jsonActions.checkDataStart({ [index]: checked }));
  };

  const displayData = useMemo(() => {
    const currentData = data.isSearching ?
      data.searchData :
      data.data;

    if (!sortKey) {
      return currentData;
    }

    return orderBy(currentData, [sortKey], orderType);
  }, [sortKey, data.data, data.searchData, data.isSearching, orderType]);

  const handleSort = name => {
    setSortKey(() => name);
    setOrderType(prev => ORDER_BY[prev]);
    handleClearJsonData();
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Heading>Custom Reusable Table - Glints - BOXED</Heading>
      <Search onClear={handleClearJsonData} />
      {displayData.length === 0 && <EmptyPage />}
      {displayData.length > 0 && <Table
        data={displayData} onCheck={handleCheckData} onSort={handleSort}
      />}
      <Paging
        totalPage={data.totalPage}
        page={page}
        onPaging={handlePaging}
        isVisible={!data.isSearching}
      />
      <RawJson data={displayData} />
      <Loading loading={data.loading} />
    </AppContainer>
  );
}

export default App;
