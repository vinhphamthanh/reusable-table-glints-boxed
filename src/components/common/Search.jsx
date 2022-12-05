import { useState } from 'react';
import styled from 'styled-components';
// import { useAppDispatch, useAppSelector } from '../utils/hooks';
// import { searchActions } from '../store/search/searchSaga';

const Container = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid dodgerblue;
  border-radius: 4rem;
  padding: 4px 8px;
  margin: 2em auto;
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
export const Search = () => {
  const [text, setText] = useState('')
  // const dispatch = useAppDispatch();
  const handleChange = evt => {
    const { value } = evt.target;
    setText(() => value)
  };

  const handleClear = () => {
    setText(() => '')
    // dispatch(searchActions.reset())
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    if (!text) return;
    //@ts-ignore
    // dispatch(searchActions.search({ q: text }))
  }

  return (
    <Container onSubmit={handleSubmit}>
			<Input value={text} onChange={handleChange} placeholder="Search thing ..." />
			<Clear type="button" onClick={handleClear}>CLEAR</Clear>
		</Container>
  );
};
