import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AntdWrapApp from './App';
import { ConfigProvider, App } from 'antd';
import ruRU from 'antd/locale/ru_RU'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <ConfigProvider locale={ruRU} theme={{
      components: {
        Menu: {
          horizontalItemSelectedColor: "black"
        },
        Input: {
          colorTextDisabled: "black"
        },
        Select: {
          colorTextDisabled: "black",
          colorTextPlaceholder: "#BABDBE"
        }
      }
    }}>
      <BrowserRouter>
        <App>
          <AntdWrapApp />
        </App>
      </BrowserRouter>
    </ConfigProvider>
);

const app = document.getElementById("app-body") as HTMLElement

app.addEventListener("wheel", (event) => {
  if (!event.ctrlKey) {
    return
  }
  event.preventDefault()
}, { passive: false })