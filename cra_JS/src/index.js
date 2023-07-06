import ReactDOM from 'react-dom/client';
//
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient('https://antgdwrtvdbjnntjfyyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudGdkd3J0dmRiam5udGpmeXlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3NjI5MTksImV4cCI6MjAwMDMzODkxOX0.jKGjaLTgsZfXayHt-p1JgUtsaE512pslDdAKCGHCizo');


// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
