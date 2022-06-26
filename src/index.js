import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import Libray from './chapter3/Library';
// import Clock from './chapter4/clock';
// import CommentList from './chapter5/CommentList';
// import NotificationList from './chapter6/NotificationList';
// import Accommodate from './chapter7/Accommodate';
// import ConfirmEvent from './chapter8/ConfirmEvent';
// import LandingPage from './chapter9/LandingPage';
// import AttendanceBook from './chapter10/AttendanceBook';
// import SignUp from './chapter11/SignUp';
// import Calcul from './chapter12/Calcul';
import ProfileCard from './chapter13/ProfileCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);


// setInterval(()=>{
//   root.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>)
// },1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
