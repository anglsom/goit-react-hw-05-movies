// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import  App  from 'components/App';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';


// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <App />
// //     </BrowserRouter>
// //   </React.StrictMode>,
// // );
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <BrowserRouter basename="/goit-react-hw-05-movies/">
//       <App />
//     </BrowserRouter>
//   </>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//       < App />
//     </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);