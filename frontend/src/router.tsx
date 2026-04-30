import { Navigate, createBrowserRouter } from 'react-router-dom'

import App from './App'
import ElementTags from './modules/element-tags'
import CreateElementTag from './modules/element-tags/create'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/element-tags" replace /> },
      {
        path: 'element-tags',
        children: [
          {
            index: true,
            element: <ElementTags />,
          },
          {
            path: 'create',
            element: <CreateElementTag />,
          },
        ],
      },
      { path: '*', element: <Navigate to="/element-tags" replace /> },
    ],
  },
])
