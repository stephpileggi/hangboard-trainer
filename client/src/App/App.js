// Yarn Imports
import React, { Component } from 'react';
import styled from 'styled-components';

// Shared Imports
import GlobalStyle from '../shared/GlobalStyle';

// Project Imports
import Header from '../shared/components/Header';

const RedBlob = styled.div`
  background-color: #FF5252;
  max-width: 800px;
  min-height: 300px;
  border-bottom-right-radius: 100%;
`;

class App extends Component {
  render() {
    return (
      <div>
        <RedBlob />
        <Header />
        <GlobalStyle />
      </div>
    )
  }
}

export default App;
