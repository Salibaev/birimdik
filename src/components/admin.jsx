import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './footer';
import Nav from './navbar';
import React from 'react';
import { Button, Image, Modal, Radio, Table, Tabs } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import Post2 from './post2';
import { tab } from '@testing-library/user-event/dist/tab';
import Post_lk from './post_lk';
import { useParams } from 'react-router-dom';
import Post_lk_ak from './post_lk_ak';
import { AppstoreOutlined, CheckOutlined, CloseOutlined, EditOutlined, EyeOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


const Admin = ()=>{
    const params = useParams();
    const user_id = localStorage.getItem('token2');
    const [neaktiv, setNeaktiv] = useState(null);
    const [otkl, setOtkl] = useState(null);
    const [status2, setStatus2] = useState(null);
    const [products, setProducts] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [product, setProduct] = useState(null);
    // const ad_id = product.id;
   console.log(user_id)

    const fetchProduct = async () => {
        const data = await axios({
            method:'get',
            url:'http://api.com/birimdik/client1_ad_vse'
        });
        if(data.data.status == 200){
            setProduct(data.data.post_ad);
            console.log('data',data)
        }else{
            console.log("Error fetch products!");
        }
    }

    const fetchProducts = async () => {
      const post = {
          id: user_id,
      };
      const data = await axios({
          method: 'get',
          params: post,
          url: 'http://api.com/birimdik/my_ad'
      });
      if (data.data.status == 200) {
          setProducts(data.data.my_ad);
          console.log('data', data)
      } else {
          console.log("Error fetch products!");
          console.log(data);
      }
  }

const fetchProducts2 = async () => {
  const post = {
      id: 0,
  };
  const data = await axios({
      method: 'get',
      params: post,
      url: 'http://api.com/birimdik/status'
  });
  if (data.data.status == 200) {
      setProducts2(data.data.po_status);
      console.log('data', data)
  } else {
      console.log("Error fetch products!");
      console.log(data);
  }
}
const fetchNeaktiv = async () => {
    const post = {
        user_id: user_id,
    };
    const data = await axios({
        method: 'get',
        params: post,
        url: 'http://api.com/birimdik/neaktiv'
    });
    if (data.data.status == 200) {
        setNeaktiv(data.data.neaktiv);
        console.log('data', data)
    } else {
        console.log("Error fetch products!");
        console.log(data);
    }
}
const fetchOtkl = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://api.com/birimdik/otkl'
    });
    if (data.data.status == 200) {
        setOtkl(data.data.otkl);
        console.log('data', data)
    } else {
        console.log("Error fetch products!");
        console.log(data);
    }
}
const delfavorites = async (ad_id)=>{

    const params = {
        ad_id:ad_id,
        user_id:user_id,
        
    };
    console.log('params',params);

    const data = await axios({
        method:'delete',
        params:params,
        url:'http://api.com/birimdik/delete_favorites'
    });

    console.log('data',data)
    if(data != null){
        if(data.status  == 200){
        console.log(data);
        window.location.href="userinfo";
        }else{
            alert('Error')
        }
    }
}

const href = (id)=>{
    window.location.href="/post/" + id;
}

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Обьявления', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const [openKeys, setOpenKeys] = useState(['sub1']);
const onOpenChange = (keys) => {
  const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    setOpenKeys(keys);
  } else {
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  }
};



    useEffect(() => {
        fetchProducts2();
        fetchProducts();
        fetchProduct();
        fetchNeaktiv();
        fetchOtkl();
    }, [])
    const tab1 = <Button  type="dark ml-3" >   <a style={{color:'black'}} href='#'>Все</a> </Button>;
    const tab2 = <Button onClick={fetchProducts2 }  type="dark " >   <a style={{color:'black'}} href='#'>На модерации</a> </Button>;  
    const tab3 = <Button onClick={fetchProducts}  type="dark " ><a style={{color:'black'}}>Мои обьявлении</a> </Button>;
    const tab4 = <Button onClick={fetchOtkl}  type="dark " >   <a style={{color:'black'}} href='#'>Отключенные</a> </Button>;
    const tab5 = <Button  type="dark " >   <a style={{color:'black'}} href='#'>Активные</a> </Button>;
    const tab6 = <Button  type="dark " >   <a style={{color:'black'}} href='#'>Деактивированные</a> </Button>;
    const tab7 = <Button  type="dark " >   <a style={{color:'black'}} href='#'>Баланс</a> </Button>; 
    return(
        <>
        <Nav/>
        {product != null || product != undefined || product?.length > 0 ?
    <>
        <div class="container card usercard"> 
        
        
            <div class="col-md-12"> 
                <div class="row mt-2">
                    <div className='col-md-2'>
                    

    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: '100%',
      }}
      items={items}
    />


                    </div>
                <div className='col-md-10'>
                <Tabs defaultActiveKey="1">
                
    <Tabs.TabPane  className='row' tab={tab1} key="1">
    <h5>Все обьявлении</h5>
    <table class="table">
    
	<thead >
		<tr>
			<th>Id</th>
            <th>Фото</th>
			<th>Город</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Валюта</th>
            <th>Описание</th>
            <th>Управлять</th>
            
		</tr>
	</thead>
	<tbody >
    {product != null || product != undefined || product?.length > 0 ?
    <>
    {product.map((item)=>
		<tr className='hh' >
			<td onClick={()=>href(item.id)}>{item.id}</td>
            <Image className='none-max-600' style={{width:'100px',height:'70px'}} src={item.images != null ? ('http://api.com/birimdik/uploads/' + item.images) : ('http://api.com/birimdik/uploads/' + 'no_image3.png')} />	
			<td onClick={()=>href(item.id)}>{item.city}</td>
            <td onClick={()=>href(item.id)}>{item.date1}</td>
			<td onClick={()=>href(item.id)}>{item.price}</td>
			<td onClick={()=>href(item.id)}>{item.currency}</td>
			<td onClick={()=>href(item.id)} style={{width:'200px'}}>
                <label className='' style={{overflow:'auto',width:'200px',height:'80px'}}>
                {item.descriptions}
                </label>
            </td>
            <td>
            <a href='#'><button className='btn'><EyeOutlined style={{fontSize:'26px'}} /></button></a>
            
                <button className='btn' ><EditOutlined style={{fontSize:'26px',marginLeft:'10px'}}  /></button>
                <button className='btn'> <CloseOutlined style={{fontSize:'26px',marginLeft:'10px'}}  /></button>
            </td>
        </tr>
		 )
        }
        </>
        :<>Loading</>
    }
	</tbody>
    
</table>

   
             
    </Tabs.TabPane>
    <Tabs.TabPane className='row' tab={tab2} key="2">
      {/* <h1>{favorites.ad_id}</h1> */}
      <table class="table">
    
	<thead >
		<tr>
			<th>Id</th>
            <th>Фото</th>
			<th>Город</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Валюта</th>
            <th>Описание</th>
            <th>Управлять</th>
		</tr>
	</thead>
	<tbody >
    {products2 != null || products2 != undefined || products2?.length > 0 ?
    <>
    {products2.map((item)=>
		<tr className='hh'  >
			<td onClick={()=>href(item.id)} >{item.id}</td>
            <Image className='none-max-600' style={{width:'100px',height:'70px'}} src={item.images != null ? ('http://api.com/birimdik/uploads/' + item.images) : ('http://api.com/birimdik/uploads/' + 'no_image3.png')} />	
			<td onClick={()=>href(item.id)}>{item.city}</td>
            <td onClick={()=>href(item.id)}>{item.date1}</td>
			<td onClick={()=>href(item.id)}>{item.price}</td>
			<td onClick={()=>href(item.id)}>{item.currency}</td>
			<td onClick={()=>href(item.id)} style={{width:'200px'}}><label className='' style={{overflow:'auto',width:'200px',height:'80px'}}>
                {item.descriptions}
                </label></td>
                <td>
            <a href='#'><button className='btn'><EyeOutlined style={{fontSize:'26px'}} /></button></a>
            
                <button className='btn' ><CheckOutlined style={{fontSize:'26px',marginLeft:'10px'}} /></button>
                <button className='btn'> <CloseOutlined style={{fontSize:'26px',marginLeft:'10px'}}  /></button>
            </td>
        </tr>
        
		 )
        }
        </>
        :<>Loading</>
    }
	</tbody>
    
</table>

    </Tabs.TabPane>


    <Tabs.TabPane className='row' tab={tab4} key="4">
    <table class="table">
    
	<thead >
		<tr>
			<th>Id</th>
            <th>Фото</th>
			<th>Город</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Валюта</th>
            <th>Описание</th>
            
		</tr>
	</thead>
	<tbody >
    {otkl != null || otkl != undefined || otkl ?.length > 0 ?
    <>
    {otkl.map((item)=>
		<tr onClick={()=>href(item.id)} className='hh'>
			<td >{item.id}</td>
            <Image className='none-max-600' style={{width:'100px',height:'70px'}} src={item.images != null ? ('http://api.com/birimdik/uploads/' + item.images) : ('http://api.com/birimdik/uploads/' + 'no_image3.png')} />	
			<td>{item.city}</td>
            <td>{item.date1}</td>
			<td>{item.price}</td>
			<td>{item.currency}</td>
			<td style={{width:'200px'}}><label className='' style={{overflow:'auto',width:'200px',height:'80px'}}>
                {item.descriptions}
                </label></td>
        </tr>
		 )
        }
        </>
        :<>Loading</>
    }
    	</tbody>
    
    </table>
    </Tabs.TabPane>

    <Tabs.TabPane className='row' tab={tab5} key="5">
    <table class="table">
    
	<thead >
		<tr>
			<th>Id</th>
            <th>Фото</th>
			<th>Город</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Валюта</th>
            <th>Описание</th>
            
		</tr>
	</thead>
	<tbody >
    {products != null || products != undefined || products?.length > 0 ?
    <>
    {products.map((item)=>
		<tr onClick={()=>href(item.id)} className='hh' >
			<td >{item.id}</td>
            <Image className='none-max-600' style={{width:'100px',height:'70px'}} src={item.images != null ? ('http://api.com/birimdik/uploads/' + item.images) : ('http://api.com/birimdik/uploads/' + 'no_image3.png')} />	
			<td>{item.city}</td>
            <td>{item.date1}</td>
			<td>{item.price}</td>
			<td>{item.currency}</td>
			<td style={{width:'200px'}}><label className='' style={{overflow:'auto',width:'200px',height:'80px'}}>
                {item.descriptions}
                </label></td>
        </tr>
		 )
        }
        </>
        :<>Loading</>
    }
	</tbody>
    
</table>
    </Tabs.TabPane>

    <Tabs.TabPane className='row' tab={tab6} key="6">
    <table class="table">
    
	<thead >
		<tr>
			<th>Id</th>
            <th>Фото</th>
			<th>Город</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Валюта</th>
            <th>Описание</th>
            
		</tr>
	</thead>
	<tbody >
    {neaktiv != null || neaktiv != undefined || neaktiv?.length > 0 ?
    <>
    {neaktiv.map((item)=>
		<tr className='hh' onClick={()=>href(item.id)}>
			<td >{item.id}</td>
            <Image className='none-max-600' style={{width:'100px',height:'70px'}} src={item.images != null ? ('http://api.com/birimdik/uploads/' + item.images) : ('http://api.com/birimdik/uploads/' + 'no_image3.png')} />	
			<td>{item.city}</td>
            <td>{item.date1}</td>
			<td>{item.price}</td>
			<td>{item.currency}</td>
			<td style={{width:'200px'}}><label className='' style={{overflow:'auto',width:'200px',height:'80px'}}>
                {item.descriptions}
                </label></td>
        </tr>
		 )
        }
        </>
        :<>Loading</>
    }
	</tbody>
    
</table>
   
    </Tabs.TabPane>

    <Tabs.TabPane className='row' tab={tab7} key="7">
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h2>Кошелек</h2>
            </div>
            <div className='col-md-6'>
                <h5>Кошелек - ваш персональный баланс на Birimdik.ru Пополняйте ваш Кошелек любым удобным способом и платите за услуги, не выходя из дома!</h5>
            </div>

            <div className='col-md-12'>
                <label style={{fontSize:'18px'}}>Выберите сумму пополнения:</label>
            </div>

            <div className='col-md-12'>
              <input type='radio'></input> <label style={{fontSize:'18px'}}>3000 KGS</label>
            </div>
            <div className='col-md-12'>
              <input type='radio'></input> <label style={{fontSize:'18px'}}>2000 KGS</label>
            </div>
            <div className='col-md-12'>
              <input type='radio'></input> <label style={{fontSize:'18px'}}>1000 KGS</label>
            </div>
            <div className='col-md-12'>
              <input type='radio'></input> <label style={{fontSize:'18px'}}>500 KGS</label>
            </div>
            <div className='col-md-12'>
              <input type='radio'></input> <label style={{fontSize:'18px'}}>300 KGS</label>
            </div>
            <div className='col-md-12'>
              <input type='radio'></input> <label style={{fontSize:'18px'}}>200 KGS</label>
            </div>
            <div className='col-md-12'>
              <input type='radio'></input> <label style={{fontSize:'18px'}}>150 KGS</label>
            </div>
            <div className='col-md-12'>
                <button className='btn btn-primary'>Пополнить</button>
            </div>
        </div>
      </div>
    </Tabs.TabPane>

  </Tabs>
                </div>
                
                <div className='row'>
                  
                
                </div>
                

                </div>
                
                
            </div>
           
        </div></>
    :<>Loading</>
}
<div className='col-md-12 '>
<Footer/>
</div>
        
        
    </>
    
    );
    }
    
    
    export default Admin;