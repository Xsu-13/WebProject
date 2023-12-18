import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import YearsBlock from './Components/yearsBlock';
import Support from './Components/support';
import Tarifs from './Components/tarifs';
import Team from './Components/team';
import Comments from './Components/comments';
import Workers from './Components/workers';
import FAQ from './Components/faq';
import Form from './Components/form';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YearsBlock />
    <Support />
    <Tarifs />
    <Team />
    <Comments />
    <Workers />
    <FAQ />
    <Form />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
