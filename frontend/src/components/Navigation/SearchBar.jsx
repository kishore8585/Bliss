import React from 'react'
import styled from 'styled-components';

function SearchBar () {

  return (
      <Wrapper>
        <SearchInput placeholder='Search the store'/> 
      </Wrapper>
    
  )
}

const Wrapper = styled.section`
    width:100%;
    padding: 3.7rem 0;
    background-color: #fff;
    z-index: 2;
    display: flex;
    justify-content: center;
    @media (max-width:992px){
      padding-top: 36px;
      margin-bottom:-10px;
    }
`;
const SearchInput = styled.input`
    background-color: #8cd0e3;
    border: 1px solid grey;
    padding: 1rem 1.5rem;
    line-height: 21px;
    border: none;
    color: #000;
    width: 300px;
    margin: 10px;
`;

export default SearchBar;