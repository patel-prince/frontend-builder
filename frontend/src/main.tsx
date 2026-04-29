import { StrictMode } from 'react'

import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        cssVar: { prefix: '' },
        token: {
          colorPrimary: '#7315e6',
          colorTextDescription: '#666',
          borderRadius: 6,
        },
        components: {
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
