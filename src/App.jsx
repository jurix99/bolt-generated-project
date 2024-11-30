import React from 'react';
    import styled from 'styled-components';
    import TradingViewEmbed from './TradingViewEmbed';

    const Container = styled.div`
      padding: 2px;
      max-width: 1200px;
      margin: 0 auto;
    `;

    const Header = styled.header`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    `;

    const Title = styled.h1`
      font-size: 24px;
      font-weight: 600;
    `;

    const CryptoList = styled.div`
      margin-top: 20px;
    `;

    const CryptoItem = styled.div`
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #e0e0e0;
    `;

    const App = () => {
      return (
        <Container>
          <Header>
            <Title>Crypto Dashboard</Title>
          </Header>
          <CryptoList>
            <CryptoItem>
              <span>Bitcoin</span>
              <span>$50,000</span>
            </CryptoItem>
            <CryptoItem>
              <span>Ethereum</span>
              <span>$4,000</span>
            </CryptoItem>
          </CryptoList>
          <TradingViewEmbed symbol="BTCUSD" />
        </Container>
      );
    };

    export default App;
