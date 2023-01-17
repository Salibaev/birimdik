import React,{ Component, useEffect, useState } from 'react';
import{BrowserRouter as Router,Routes,Route, useParams} from 'react-router-dom';
import { Button, Modal, Radio, Tabs } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import axios from 'axios';

const Post_lk =({product})=>{
    const params = useParams();
    const id = params.id;
    const category_name = params.name;
    const ad_id = product.id;
    const user_id = localStorage.getItem('token');
    const [status, setStatus] = useState(null);
    const [favorited,setFavorited]=useState(false);

    const Favorited = ()=>{
        if(favorited != null){
          setFavorited(false);
        }
       }
       const Status = ()=>{
        if(product.status != 2){
          setStatus(true);
        }
       }
    const addfavorites = async ()=>{

        const params = {
            ad_id:ad_id,
            user_id:user_id,
            
        };

        const data = await axios({
            method:'post',
            params:params,
            url:'http://api.com/birimdik/favorites'
        });

        console.log(data)
        if(data != null){
            if(data.status  == 200){
            console.log(data);
            setFavorited(true);
            alert('data',data.status)
            }else{
                alert('Error')
            }
        }
    }
    const delfavorites = async ()=>{

        const params = {
            ad_id:ad_id,
            user_id:user_id,
            
        };

        const data = await axios({
            method:'delete',
            params:params,
            url:'http://api.com/birimdik/delete_favorites'
        });

        console.log(data)
        if(data != null){
            if(data.status  == 200){
            console.log(data);
            setFavorited(false);
            alert('data',data.status)
            }else{
                alert('Error')
            }
        }
    }
    const del_ad = async ()=>{

        const params = {
            ad_id:ad_id,
            user_id:user_id,
            
        };

        const data = await axios({
            method:'delete',
            params:params,
            url:'http://api.com/birimdik/delete_ad'
        });

        console.log(data)
        if(data != null){
            if(data.status  == 200){
            console.log(data);
            
            alert('data',data.status)
            }else{
                alert('Error')
            }
        }
    }
    const iz_status2 = async ()=>{
        const params = {
            status:'2',
            ad_id:ad_id
        };
        const data = await axios({
            method:'post',
            params:params,
            url:'http://api.com/birimdik/iz_status2'
        });
        console.log(data)
        if(data != null){
            if(data.status  == 200){
            console.log(data)
            setStatus(false);
            window.location.href="userinfo";
            }else{
                alert('Error')
            }
        }
    }
    const iz_status1 = async ()=>{
        const params = {
            status:'1',
            ad_id:ad_id
        };
        const data = await axios({
            method:'post',
            params:params,
            url:'http://api.com/birimdik/iz_status2'
        });
        console.log(data)
        if(data != null){
            if(data.status  == 200){
            console.log(data)
            setStatus(false);
            window.location.href="userinfo";
            }else{
                alert('Error')
            }
        }
    }

    useEffect(()=>{
        Favorited();
        Status();
      },[])

    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );

      
    return(
<>


        <div style={{height:'100%'}} class="card obv" >
            <div class="card-body medbody">
                <div class="row">
                    
                        <div  class="col-md-12 medname"> <label  style={{fontSize:'18px',fontFamily:'revert-layer'}}>{category_name}</label>
                            <i style={{float:'right',fontSize:'10px'}} class="fa-solid fa-eye mt-2 "> : 150</i>
                        </div>
                        <a href={"/post/"+ product.id}>
                        <Image  class="cardimg" width='100%' src={'http://api.com/birimdik/uploads/'+ product.images}/>
                           
                        </a>
                  
                    
                    <div class="col-md-12">
                        <div className="row">
                       
                        <div class="col-md-12">
                            <label style={{marginTop:'0px'}} class="card-title  txt7">{product.price}</label>
                            <label style={{marginTop:'0px',marginLeft:'10px',fontSize:'12px'}} class="card-title  ">{product.currency}</label>
                        </div>
                        <div style={{height:'50px'}} class="col-md-12">
                            <p className="destext" >{product.descriptions}</p>
                        </div>
                        <div class="col-md-auto">
                            <p className='location_text'><i class="fa-sharp fa-solid fa-map-location-dot"></i> | {product.city}</p>
                        </div>
                        <div class="col-md-1">
              
                        </div>
                        <div class="col-md-3 meddate">
              <label style={{fontSize:'10px',float:'right',marginRight:'-15px'}} class="text-secondary meddate">{product.date1}</label>
                        </div>

                        <div  class="col-md-12">
                            <div className='bt_call2'>
                            <Button className='bt_call2' > <a  className='bt_call2'  href='registr'>Позвонить</a>  </Button>
                            </div>
                        {/* <button style={{fontSize:'14px'}} className="btn btn-success "> <i class="fa-solid fa-phone"></i>+996 {product.numbers}</button> */}
                        {favorited ?
                      <>
              <label style={{float:'right'}} class="text-secondary"> <i class="fa-solid fa-envelope  sms2"></i> <i onClick={delfavorites} class=" fa-solid fa-heart   heart2"></i></label>

                      </>
                      :<>
                     <label style={{float:'right'}} class="text-secondary"> <i class="fa-solid fa-envelope  sms2"></i> <i onClick={addfavorites} class=" fa-solid fa-heart   heart"></i></label>

                      </>
}        
                        </div>
                       <div className='col-md-6'>
                        <Button  type="primary" ghost href={"/put_ad/"+ product.id}>Редактировать</Button>
                       </div>
                       <div className='col-md-6'>
                       {status ?
                      <>
                        <Button style={{padding:'1px'}} danger onClick={iz_status2}>Деактивировать</Button>

                      </>
                      :<>
                        <Button style={{padding:'1px'}} danger onClick={iz_status1}>Активировать</Button>

                      </>
}        
                        
                       </div>
                    
                        </div>
                        
                        
                        
                    </div>

                </div>
            </div>
        </div>  



</>
    );
    }
    export default Post_lk;