import { StrictMode } from 'react'

import { ConfigProvider, theme } from 'antd'
import 'antd/dist/reset.css'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        cssVar: { prefix: '' },
        token: {
          colorPrimary: '#7315e6',
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
