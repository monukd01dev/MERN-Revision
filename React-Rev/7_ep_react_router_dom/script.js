import ReactDOM from 'react-dom/client';
import App from './src/App';
import AppRouter from './src/routes/AppRouter'
import { RouterProvider } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>)