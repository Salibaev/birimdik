import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './footer';
import Nav from './navbar';
import React from 'react';
import { Button, Modal, Radio, Tabs } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import Post2 from './post2';
import { tab } from '@testing-library/user-event/dist/tab';
import Post_lk from './post_lk';
import { useParams } from 'react-router-dom';
import Post_lk_ak from './post_lk_ak';


const Userinfo = ()=>{
    const params = useParams();
    const user_id = localStorage.getItem('token');
    const [neaktiv, setNeaktiv] = useState(null);
    const [status2, setStatus2] = useState(null);
    const [products, setProducts] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [product, setProduct] = useState(null);
    // const ad_id = product.id;
   console.log(user_id)
    const fetchProduct = async () => {
        const post = {
            id: user_id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/users1'
        });
        console.log(data);
        if (data.data.status == 200) {
            setProduct(data.data.users1);
        } else {
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
      user_id: user_id,
  };
  const data = await axios({
      method: 'get',
      params: post,
      url: 'http://api.com/birimdik/get_favorites'
  });
  if (data.data.status == 200) {
      setProducts2(data.data.favorites);
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


  


    useEffect(() => {
        fetchProducts2();
        fetchProducts();
        fetchProduct();
        fetchNeaktiv();
    }, [])
    const tab1 = <Button  type="dark ml-3" >   <a style={{color:'black'}} href='#'>Профиль</a> </Button>;
    const tab2 = <Button onClick={fetchProducts2 }  type="dark " >   <a style={{color:'black'}} href='#'>Избранные</a> </Button>;  
    const tab3 = <Button onClick={fetchProducts}  type="dark " ><a style={{color:'black'}}>Мои обьявлении</a> </Button>;
    const tab4 = <Button  type="dark " >   <a style={{color:'black'}} href='#'>Покупки</a> </Button>;
    const tab5 = <Button  type="dark " >   <a style={{color:'black'}} href='#'>Отзывы и вопросы</a> </Button>;
    const tab6 = <Button  type="dark " >   <a style={{color:'black'}} href='#'>Сообщении</a> </Button>;
    const tab7 = <Button  type="dark " >   <a style={{color:'black'}} href='#'>Баланс</a> </Button>; 
    const tab8 = <Button  type="dark " >   <a style={{color:'black'}} href='#'>Активные</a> </Button>;  
    const tab9 = <Button  onClick={fetchNeaktiv} type="dark " >   <a style={{color:'black'}} href='#'>Неактивные</a> </Button>;  
    return(
        <>
        <Nav/>
        {product != null || product != undefined || product?.length > 0 ?
    <>
        <div class="container card usercard"> 
        
        
            <div class="col-md-12"> 
                <div class="row mt-2">
                <div className='col-md-12'>
                <Tabs defaultActiveKey="1">
                
    <Tabs.TabPane  className='row' tab={tab1} key="1">
    <h5>Профиль</h5>
                <div className='col-md-3 card  mt-2'>
                <div className='row'>
                      <div className='col-md-3'><img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={ product[0].avatar!= null ? 'http://api.com/birimdik/uploads/' + product[0].avatar : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}></img></div>
                        <div className='col-md-1'></div>
                      <div className='col-md-7 ml-3 mt-3'>
                        <p>{product[0].name}</p>
                        <b style={{color:'gold'}}>Подключить в бизнес аккаунт</b>
                        <p>ID: {product[0].id}</p>                        
                      </div>
                    
                    <div className='col-md-12'>
                        <Button href='put_user'>Изменить данные</Button>
                    </div>
                    </div>
                </div>
                
                <div className='col-md-8 ml-5 mt-5'>
                  <div className='row'>
                  <div style={{width:'200px'}} className=' card'>
                  <div className='row'>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Логин</p>
                    <label className='card'>{product[0].login}</label>
                  </div>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Пароль</p>
                    <label className='card'>{product[0].password}</label>
                  </div>

                  </div>
                </div>

                <div style={{width:'200px'}} className=' ml-3 card'>
                  <div className='row'>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Имя</p>
                    <label className='card'>{product[0].name}</label>
                  </div>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Фамилия</p>
                    <label className='card'>{product[0].surname}</label>
                  </div>

                  </div>
                </div>

                <div style={{width:'200px'}} className=' ml-3 card'>
                  <div className='row'>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Номер телефона</p>
                    <label className='card'>{product[0].numbers}</label>
                  </div>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Город</p>
                    <label className='card'>{product[0].city}</label>
                  </div>

                  </div>
                </div>

                <div style={{width:'200px'}} className=' ml-3 card'>
                  <div className='row'>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>E-mail</p>
                    <label className='card'>Не указано</label>
                  </div>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Пол</p>
                    <label className='card'>Не указано</label>
                  </div>

                  

                  </div>
                </div>
                
                  </div>
                </div>
    </Tabs.TabPane>
    <Tabs.TabPane className='row' tab={tab2} key="2">
      {/* <h1>{favorites.ad_id}</h1> */}
      {products2 != null || products2 != undefined || products2?.length > 0 ?
    <>
    <h5>Избранные</h5>
    {products2.map((item)=>
    <div class="col-6 col-md-3 mt-3 ">
        <a onClick={()=>delfavorites(item.ad_id)}><i style={{fontSize:'18px',color:'red'}} class="fa-solid fa-circle-minus"></i></a>
        <Post2 product={item}/>
    </div>
    
    )
    }
    </>
    :<>
    Вы еще не добавляли в избранное
    </>
}
    </Tabs.TabPane>
    <Tabs.TabPane className='row' tab={tab3} key="3">
        
    <Tabs defaultActiveKey="3">
    
        <Tabs.TabPane className='row' tab={tab8} key="8">
                    {products != null || products != undefined || products?.length > 0 ?
                <>
                <h5>Активные</h5>
                {products.map((item)=>
                <div class="col-6 col-md-3 mt-3">
                    <Post_lk_ak product={item}/>      
                </div>
                
                )
                }
                </>
                :<>Нет активных обьявлений...
                </>
            }
        </Tabs.TabPane>

        <Tabs.TabPane className='row' tab={tab9} key="9">
        {neaktiv != null || neaktiv != undefined || neaktiv?.length > 0 ?
                <>
                <h5>Неактивные</h5>
                {neaktiv.map((item)=>
                <div class="col-6 col-md-3 mt-3">
                    <Post_lk_ak product={item}/>
                </div>
                
                )
                }
                </>
                :<>Нет деактивированных обьявлений...
                </>
            }
        </Tabs.TabPane>
        
    </Tabs>
    
    </Tabs.TabPane>

    <Tabs.TabPane className='row' tab={tab4} key="4">
      Content of Tab Pane 2
    </Tabs.TabPane>

    <Tabs.TabPane className='row' tab={tab5} key="5">
      Content of Tab Pane 2
    </Tabs.TabPane>

    <Tabs.TabPane className='row' tab={tab6} key="6">
    <div class="row bg-light">
    <div class="col-md-12">
            <h1 class="kortxt2">Чаты</h1>
        </div>
        <div className='col-md-4'>
            <div className='row'>

                    <div class="col-md-6">
                    <select className='form-control'>
                        <option>
                            <button className='btn btn-primary'>Все</button>
                        </option>
                    </select>
                </div>
                <div class="col-md-6">
                    <select className='form-control'>
                        <option>
                            <button className='btn btn-primary'>По дате</button>
                        </option>
                    </select>
                </div>
                

                


                <div style={{height:'450px',overflow:'scroll'}} className='col-md-12 mt-3'>
                    <div className='row'>
                            <div  className='col-md-1'>
                            <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src='images/user.png'></img>
                            </div>
                            <div className='col-md-8'>
                            <b style={{fontSize:'18px'}} className='ml-3'>Продаю участок</b>
                            <p className='ml-3 text-secondary'>Ещё актульно?</p>
                            </div>
                            <div className='col-md-3'>
                                <img style={{width:'60px',height:'60px',borderRadius:'10px'}} src='https://st.depositphotos.com/2288675/2792/i/600/depositphotos_27926797-stock-photo-new-house.jpg'></img>
                            </div>

                            <div className='col-md-12 mt-3'>
                    <div className='row'>

                        <div  className='col-md-1'>
                            <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src='images/user.png'></img>
                        </div>

                        <div className='col-md-8'>
                            <b style={{fontSize:'18px'}} className='ml-3'> Сдается комната</b>
                            <p className='ml-3 text-secondary'>За сколько отдадите?</p>
                        </div>

                        <div className='col-md-3'>
                            <img style={{width:'60px',height:'60px',borderRadius:'10px'}} src='https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg'></img>
                        </div>
                        
                    </div>
                </div>

                <div className='col-md-12 mt-3'>
                    <div className='row'>

                        <div  className='col-md-1'>
                            <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src='images/user.png'></img>
                        </div>

                        <div className='col-md-8'>
                            <b style={{fontSize:'18px'}} className='ml-3'> Продаю машину</b>
                            <p className='ml-3 text-secondary'>Обмен возможен?</p>
                        </div>

                        <div className='col-md-3'>
                            <img style={{width:'60px',height:'60px',borderRadius:'10px'}} src='https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg'></img>
                        </div>
                        
                    </div>
                </div>

                <div className='col-md-12 mt-3'>
                    <div className='row'>

                        <div  className='col-md-1'>
                            <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src='images/user.png'></img>
                        </div>

                        <div className='col-md-8'>
                            <b style={{fontSize:'18px'}} className='ml-3'> Ищу работу</b>
                            <p className='ml-3 text-secondary'>Зарплата какая?</p>
                        </div>

                        <div className='col-md-3'>
                            <img style={{width:'60px',height:'60px',borderRadius:'10px'}} src='https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg'></img>
                        </div>
                        
                    </div>
                </div>

                <div className='col-md-12 mt-3'>
                    <div className='row'>

                        <div  className='col-md-1'>
                            <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src='images/user.png'></img>
                        </div>

                        <div className='col-md-8'>
                            <b style={{fontSize:'18px'}} className='ml-3'> Готовый бизнес</b>
                            <p className='ml-3 text-secondary'>Ещё актульно?</p>
                        </div>

                        <div className='col-md-3'>
                            <img style={{width:'60px',height:'60px',borderRadius:'10px'}} src='https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg'></img>
                        </div>
                        
                    </div>
                </div>

                    </div>
                </div>


                


            </div>
        </div>
        
        <div className='col-md-6 card'>
        <div className='row'>
                        <div className='col-md-1'>
                        <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src='images/user.png'></img>
                        </div>
                        <div className='col-md-9 '>
                            <b className='ml-2'>Чынгыз</b>
                            <p className='text-secondary ml-2'>Был(а) в сети 13 ч. назад</p>
                        </div>
                        <div className='col-md-1 text-center mt-2'>
                            <i style={{fontSize:'22px'}} class="fa-solid fa-phone text-success"></i>
                        </div>
                        <div className='col-md-1 text-center mt-1'>
                        <i style={{fontSize:'34px'}} class="fa-solid fa-ellipsis text-secondary"></i>
                        </div>
                        <div style={{marginTop:'-15px'}} className='col-md-12'>
                            <hr></hr>
                        </div>
                        <div className='col-md-1'>
                        <img style={{width:'50px',height:'50px',borderRadius:'10px'}} src='https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg'></img>
                        </div>
                        <div className='col-md-8 '>
                        <p className='ml-1 mt-2 text-secondary'><b  >Сдаю комнату на станции метро Арбатское</b></p>
                        </div>
                        <div className='col-md-3 '>
                        <p style={{fontSize:'16px',float:'right'}} className='ml-1 mt-1 '><b  >10000сом</b></p>
                        </div>
                        <div style={{marginTop:'-10px'}} className='col-md-12'>
                            <hr></hr>
                        </div>
                        <div className='col-md-12'>
                            <div className='row ' style={{height:'320px',overflow:'scroll'}} >
                                    <div className='col-md-12'>
                                    <i style={{float:'right',marginTop:'8%'}} class="fa-solid fa-check"></i>
                                        <label  style={{height:'50px',float:'right',overflow:'hidden',backgroundColor:'#F0FFF0',padding:'5px'}} className=' card'>За сколько отдадите?<p style={{float:'right',fontSize:'12px',marginTop:'5px'}}>11.09.2022</p></label>
                                     
                                        
                                        
                                    </div>
                                
                                <div className='col-md-12'>
                                    <label  style={{height:'50px',float:'left',overflow:'hidden',backgroundColor:'#F0FFFF',padding:'5px'}} className='card'>За сколько купите?<p style={{float:'right',fontSize:'12px',marginTop:'5px'}}>11.09.2022</p></label>
                                    
                                </div>

                                <div className='col-md-12'>
                                <i style={{float:'right',marginTop:'8%'}} class="fa-light fa-check-double"></i>
                                        <label  style={{height:'50px',float:'right',overflow:'hidden',backgroundColor:'#F0FFF0',padding:'5px'}} className=' card'>За 100000 готов забрать<p style={{float:'right',fontSize:'12px',marginTop:'5px'}}>11.09.2022</p></label>
                                    </div>

                                    <div className='col-md-12'>
                                    <label  style={{height:'50px',float:'left',overflow:'hidden',backgroundColor:'#F0FFFF',padding:'5px'}} className='card'>Заберите<p style={{float:'right',fontSize:'12px',marginTop:'5px'}}>11.09.2022</p></label>
                                </div>

                                <div className='col-md-12'>
                                <i style={{float:'right',marginTop:'8%'}} class="fa-solid fa-check"></i>
                                        <label  style={{height:'50px',float:'right',overflow:'hidden',backgroundColor:'#F0FFF0',padding:'5px'}} className=' card'>Напишите адрес<p style={{float:'right',fontSize:'12px',marginTop:'5px'}}>11.09.2022</p></label>
                                    </div>

                                    <div className='col-md-12'>
                                    <label  style={{height:'50px',float:'left',overflow:'hidden',backgroundColor:'#F0FFFF',padding:'5px'}} className='card'>Ул.Ленина 745к3<p style={{float:'right',fontSize:'12px',marginTop:'5px'}}>11.09.2022</p></label>
                                </div>

                                <div className='col-md-12'>
                                <i style={{float:'right',marginTop:'8%'}} class="fa-solid fa-check"></i>
                                        <label  style={{height:'50px',float:'right',overflow:'hidden',backgroundColor:'#F0FFF0',padding:'5px'}} className=' card'>Через час буду<p style={{float:'right',fontSize:'12px',marginTop:'5px'}}>11.09.2022</p></label>
                                    </div>

                                    <div className='col-md-12'>
                                    <label  style={{height:'50px',float:'left',overflow:'hidden',backgroundColor:'#F0FFFF',padding:'5px'}} className='card'>Хорошо<p style={{float:'right',fontSize:'12px',marginTop:'5px'}}>11.09.2022</p></label>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-1'>
                                        <i style={{fontSize:'36px',borderRadius:'10px'}} class="fa-solid fa-camera"></i>
                                            
                                        </div>
                                        <div className='col-md-8'>
                                            <input placeholder='Сообщение...' className='form-control'></input>
                                        </div>
                                        <div className='col-md-2'>
                                            <button className='btn btn-success'>Отправить</button>
                                        </div>
                                    </div>
                                </div>
                    </div>
        </div>
        <div className='col-md-12  mt-3'>
            <div className='row '>

                    

                

           
            </div>
        </div>
        
       
        
        <div class="col-md-3"></div>


    </div>
    </Tabs.TabPane>

    <Tabs.TabPane className='row' tab={tab7} key="7">
      Content of Tab Pane 2
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
    
    
    export default Userinfo;