import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components import:
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';

// react routes:
const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  }, {
    path: '/quiz',
    element: <CheckUserExist> <Quiz /></CheckUserExist>
  }, {
    path: '/result',
    element: <CheckUserExist> <Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
