import { Navigate, createBrowserRouter } from 'react-router-dom'

import App from './App'
import ElementTags from './modules/element-tags'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/element-tags" replace /> },
      { path: 'element-tags', element: <ElementTags /> },
      { path: '*', element: <Navigate to="/element-tags" replace /> },
    ],
  },
])
