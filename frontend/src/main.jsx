import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const redirectParams = new URLSearchParams(window.location.search);
const redirectPath = redirectParams.get('p');

if (redirectPath) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const query = redirectParams.get('q');
  window.history.replaceState(
    null,
    '',
    `${basePath}${redirectPath}${query ? `?${query}` : ''}${window.location.hash}`
  );
}

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
 </Provider>
)
