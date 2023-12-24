import { createBrowserRouter } from 'react-router-dom'
import GamePage from 'src/pages/Game'
import ResultPage from 'src/pages/Result'
import HomePage from 'src/pages/Home'
import NotFoundPage from 'src/pages/ErrorPage'
import MainLayout from 'src/components/layout'

export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: 'game',
        element: <GamePage />,
      },
      {
        path: 'result',
        element: <ResultPage />,
      },
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
