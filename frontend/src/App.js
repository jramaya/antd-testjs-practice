import React from 'react';
import { Layout } from 'antd';
import OrdersNewForm from './OrdersNewForm';

const { Header, Content } = Layout;
function App() {

const headerStyle = {
  textAlign: 'left',
  color: '#ff6900',
  height: 64,
  fontWeight: 'bold',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'white',
  fontSize: '2em',
};

const contentStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  padding: '0px 20% 2em',
}


  return (
    <div className="App">
    <Layout>
      <Header style={headerStyle}>
        <span>goSendBOX</span>
      </Header>
      <Content style={contentStyle}>
        <OrdersNewForm></OrdersNewForm>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
