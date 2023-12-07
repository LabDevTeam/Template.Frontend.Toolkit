import React, { FC } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './App.css'

const App: FC = () => {
  const loadingIndicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (<>
  Hello world
  </>)
}

export default App
