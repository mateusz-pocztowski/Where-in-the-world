import React from 'react';
import styled, { css } from 'styled-components';
import searchIcon from 'icons/search.svg';
import searchWhiteIcon from 'icons/search-white.svg';
import useTheme from 'hooks/useTheme';

const Input = styled.input`
  padding: 18px 40px 18px 60px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  background: url(${searchIcon}) no-repeat;
  background-size: 18px;
  background-position: 25px 50%;
  background-color: ${({ theme }) => theme.element};
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  border: 2px solid;
  border-color: transparent;
  color: ${({ theme }) => theme.text};
  &:focus {
    border-color: ${({ theme }) => theme.blue};
  }
  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      background-image: url(${searchWhiteIcon});
      &::placeholder {
        color: ${({ theme }) => theme.text};
      }
    `}
`;

const SearchInput = () => {
  const { isDarkTheme } = useTheme();

  return (
    <Input
      isDarkTheme={isDarkTheme}
      type="text"
      placeholder="Search for a country..."
    />
  );
};

export default SearchInput;
