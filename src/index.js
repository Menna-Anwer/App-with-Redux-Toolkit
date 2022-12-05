import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import AddPost from './Pages/AddPost';
import Edit from './Pages/Edit';
import App from './App';
import ErrorPage from './Pages/ErrorPage';
import Details from './Pages/Details';
import { Provider } from 'react-redux';
import { store } from './State/Store';

const router = createBrowserRouter([
  {
  path:"/",element:<RootLayout/>,
  errorElement:<ErrorPage/>,
   children:[
    {index:true,element:<App/>},
    {path:"add",element:<AddPost/>},
    {path:":id/edit",element:<Edit/>},
    {
      path:":id",
      element:<Details/>,
      loader: ({ params }) => {
        if(isNaN(params.id)){
          throw new Response("Bad Request", {
            statusText:"Pleace enter a number",
            status: 400 
          });
        }
      }
    }
  ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

//export default App;

//ReactDOM.render(<Parent/>,document.getElementById('root'));
//ReactDOM.render(<Parent2 />,document.getElementById('app'));
reportWebVitals();     
 