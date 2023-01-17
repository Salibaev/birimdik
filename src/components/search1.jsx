import React,{ Component, useEffect } from 'react';
import{BrowserRouter as Router,Routes,Route, useParams} from 'react-router-dom';
import { Button, Modal, Radio, Tabs } from 'antd';
import  {useState} from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import axios from 'axios';

const { Search } = Input;


const Search1 =()=>{
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const [text, setText] = useState();
  const local = localStorage.getItem('token2');
  
  const Text = () => {
        window.location.href="/result/"+ text;
        localStorage.setItem('token2',text);
    
}

  
return(
  
    <>
    <div  className='col-md-12 medsearch'>
         <Space  style={{width:'100%',}} direction="vertical">
    <Search 
      placeholder="Я ищу..."
      enterButton="Поиск"
      size='large'
      onChange={(e) =>{setText(e.target.value)}}
      suffix={suffix}
      onSearch={Text}
    />
  </Space>
            
            </div>         
    </>
    
)
}


export default Search1;