import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataActions } from '../../store/data/dataSlice';
import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid dodgerblue;
  border-radius: 4rem;
  padding: 4px 8px;
  margin: 1em auto;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 4px;

  &:focus {
    outline: none;
  }
`;

const Clear = styled.button`
	border: none;
	background: white;
	
	&:hover {
		cursor: pointer;
	}
	
`
const Search = ({ onClear, dataSource }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const handleChange = evt => {
    const { value } = evt.target;
    setText(() => value)
  };

  const handleClear = () => {
    setText(() => '')
    dispatch(dataActions.searchClearStart())
    onClear();
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    if (!text) return;
    dispatch(dataActions.searchDataStart({ q: text, type: dataSource }))
    onClear();
  }

  return (
    <Container onSubmit={handleSubmit}>
			<Input value={text} onChange={handleChange} placeholder="Search thing ..." />
			<Clear type="button" onClick={handleClear}>CLEAR</Clear>
		</Container>
  );
};

export default memo(Search)
