import './App.css';
import React,{Component} from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'moment/locale/ru';
import Main from './components/main';
import Nav from './components/navbar';
import Footer from './components/footer';
import Post from './components/post';
import Delivery from './components/delivery';
import Userinfo from './components/userinfo';
import Korzina from './components/korzina';
import Newpost from './components/new_post';
import Mainpost from './components/mainpost';
import Postcard from './components/postcard';
import Mainpost2 from './components/mainpost2';
import Post2 from './components/post2';
import Post3 from './components/post3';
import New_post from './components/new_post';
import Smsmodal from './components/smsmodal';
import Share from './components/share';
import Mainsms from './components/mainsms';
import Menuhover from './components/menuhover';
import Transport from './components/transport';
import Upload1 from './components/upload';
import Registr from './components/registr';
import Vhod from './components/vhod';
import Podcategory from './components/podcategory';
import Nedvij from './components/nedvij';
import Result1 from './components/result';
import Filter_city from './components/filter_city';
import Put_ad from './components/put_ad';
import Post_lk from './components/post_lk';
import Put_user from './components/put_user';
import User from './components/user';
import Registrmob from './components/registrmob';
import Put_user2 from './components/put_user2';
import Registr2 from './components/registr2';
import Newpassword from './components/newpassword';
import Panel from './components/panel';
import Admin from './components/admin';





function App() {
  return (
    <>
    

      <Router>
      <Routes>
      <Route path = '/' element ={<Main/>}/>
      <Route path = '/navbar' element ={<Nav/>}/>
      <Route path = '/footer' element ={<Footer/>}/>
      <Route path = '/post/:id' element ={<Post/>}/>
      <Route path = '/delivery' element ={<Delivery/>}/>
      <Route path = '/userinfo' element ={<Userinfo/>}/>
      <Route path = '/korzina' element ={<Korzina/>}/>
      <Route path = '/newpost' element ={<Newpost/>}/>
      <Route path = '/mainpost' element ={<Mainpost/>}/>
      <Route path = '/vhod' element ={<Vhod/>}/>
      <Route path = '/postcard' element ={<Postcard/>}/>
      <Route path = '/mainpost2' element ={< Mainpost2/>}/>
      <Route path = '/post2' element ={<Post2/>}/>
      <Route path = '/post3' element ={<Post3/>}/>
      <Route path = '/post_lk' element ={<Post_lk/>}/>
      <Route path = '/registr' element ={<Registr/>}/>
      <Route path = '/registr2/:token2' element ={<Registr2/>}/>
      <Route path = '/registrmob' element ={<Registrmob/>}/>
      <Route path = '/user/:id' element ={<User/>}/>
      <Route path = '/new_post' element ={<New_post/>}/>
      <Route path = '/newpost' element ={<Newpost/>}/>
      <Route path = '/smsmodal' element ={<Smsmodal/>}/>
      <Route path = '/share' element ={<Share/>}/>
      <Route path = '/mainsms' element ={<Mainsms/>}/>
      <Route path = '/menuhover' element ={<Menuhover/>}/>
      <Route path = '/transport' element ={<Transport/>}/>
      <Route path = '/upload1/:id' element ={<Upload1/>}/>
      <Route path = '/podcategory/:name/:id' element ={<Podcategory/>}/>
      <Route path = '/nedvij/:id' element ={<Nedvij/>}/>
      <Route path = '/result/:text' element ={<Result1/>}/>
      <Route path = '/filter_city' element ={<Filter_city/>}/>
      <Route path = '/put_ad/:id' element ={<Put_ad/>}/>
      <Route path = '/put_user' element ={<Put_user/>}/>
      <Route path = '/put_user2/:number' element ={<Put_user2/>}/>
      <Route path = '/newpassword' element ={<Newpassword/>}/>
      <Route path = '/panel' element ={<Panel/>}/>
      <Route path = '/panel/admin' element ={<Admin/>}/>
      </Routes>
      </Router>

    
    
    
    </>
  );
}

export default App;
