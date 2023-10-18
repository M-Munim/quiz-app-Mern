import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components import:
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

// react routes:
const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  }, {
    path: '/quiz',
    element: <Quiz></Quiz>
  }, {
    path: '/result',
    element: <Result></Result>
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
