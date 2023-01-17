import React,{ Component } from 'react';
import { Button, Modal, Radio, Tabs } from 'antd';
import  {useState} from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space  } from 'antd';
import { useEffect } from 'react';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);

const Nav =()=>{
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () =>{
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [logged,setLogged]=useState(false);
  const local = localStorage.getItem('token');
 const Logged = ()=>{
  if(local != null){
    setLogged(true);
  }
 }

  const LogOut = ()=>{
    localStorage.removeItem('token');
    setLogged(false);
    window.location.href="/";
}
useEffect(()=>{
  Logged();
},[])
return(
  
    <>
      <div style={{backgroundColor:'#2d2d7f'}} class="container fix" >
        <div class="row ">
          
            <div style={{height:'50px'}} className='col-md-3  birimdikdiv '>
            
                  <a href="/"><b class="market ">Birimdik.ru</b></a>
                  <div className='reg'><Button className='reg' href='registr' ghost style={{float:'right',marginTop:'10px'}}>Войти / Регистрация</Button></div>
                  {/* onClick={showModal} */}
                  {/* onClick={showModal} */}  
            </div>
            
            <div className='col-md-3 search2'>
                  <Search
      placeholder="Я ищу..."
      onSearch={onSearch}
      style={{
        width: '100%',
        borderRadius:'25px'
      }}
    />
                  </div>
            <div style={{backgroundColor:'#2d2d7f'}}  className='col-md-9 col-sm-12 '>
              <div className='row'>
                  <nav class="navbar navbar-expand-lg main-nav px-0">
                <div className='col-6 col-md-auto'>
                  <a href='/mainsms'><i  class="fa-solid fa-envelope sms1"></i></a>
                  <a className='ml-4' href='/korzina'><i class="fa-solid fa-heart heart1 "></i> </a>
                </div>
                <div className='col-6 reg'><label style={{color:'white',float:'right',marginTop:'-25px'}}>Город: <i class="fas fa-map-marked-alt"></i></label></div>
              <div class="collapse navbar-collapse " id="mainMenu">
                  <ul class="navbar-nav ml-auto text-uppercase f1">
                    <li>
                      <a href="#home" class="active active-first"></a>
                    </li>
                    <li>
                    {logged ?
                      <>
              <a  href='/upload1'> Подать обьявление </a>

                      </>
                      :<>
                     <a  href='/vhod'>Подать обьявление</a>

                      </>
}        
                    </li>
                    <li>{logged ?
                      <>
              <a onClick={LogOut} href=''><Button onClick={LogOut}  ghost   type="solid " >   <a style={{color:'white'}} >Выход</a> </Button></a>

                      </>
                      :<>
                      <a href='vhod' ><Button  ghost   type="solid " >   <a style={{color:'white'}} href='vhod'>Вход</a> </Button></a>

                      </>
} 
            </li>
            <li>
            <a href='registr' ><Button  ghost  type="solid " >   <a style={{color:'white'}} href='registr'>Регистрация</a> </Button></a>
            </li>
            <li>
              <a href='/userinfo'><Button   ghost   type="solid " >   <a style={{color:'white'}} href='/userinfo'>Личный кабинет</a> </Button></a>
            </li>
            <li>
              <a href='/userinfo'><Button   ghost   type="solid " >   <a style={{color:'white'}} href='/userinfo'>Язык</a> </Button></a>
            </li>
          </ul>
        </div>
      </nav>
               
              </div>
              
            </div>
           
          
          

           
         </div>
      </div>

      
      

    
    </>
    
)
}


export default Nav;


