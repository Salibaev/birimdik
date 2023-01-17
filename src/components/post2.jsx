import React,{ Component, useEffect, useState } from 'react';
import{BrowserRouter as Router,Routes,Route, useParams} from 'react-router-dom';
import { Button, Modal, Radio, Tabs } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import axios from 'axios';

const Post2 =({product})=>{
    const params = useParams();
    const id = params.id;
    const category_name = params.name;
    const ad_id = product.id;
    const user_id = localStorage.getItem('token');
    
    const [favorited,setFavorited]=useState(false);
    const [product3,setProduct3]=useState(null);
    console.log(user_id)
    const Favorited = ()=>{
        if(favorited != null){
          setFavorited(false);
        }
       }

       const [products,setProducts] = useState(null);
       const fetchProducts = async () => {
           const data = await axios({
               method:'get',
               url:'http://api.com/birimdik/client1'
           });
           if(data.data.status == 200){
               setProducts(data.data.posts);
               console.log('data',data)
           }else{
               console.log("Error fetch products!");
           }
       }


       
    const addfavorites = async (ad_id)=>{

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
            setFavorited(false);
            }else{
                alert('Error')
            }
        }
    }
    const fetchProduct3= async () => {
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
            setProduct3(data.data.users1);
        } else {
            console.log("Error fetch products!");

        }
        
    }

    useEffect(()=>{
        Favorited();
        fetchProduct3();
        fetchProducts();
      },[])

    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
      const contentStyle = {
        width:'100%',
        height: '200px',
        borderTopLeftRadius:'5px',
        borderTopRightRadius:'5px',

      };
      const contentStyle2 = {
        width:'174px',
        height:'150px',
        borderTopLeftRadius:'5px',
        borderTopRightRadius:'5px',


      };
      
      

      
    return(
<>

{products != null || products != undefined || products?.length > 0 ?
    <>
        <div style={{height:'95%'}} class="card obv" >
        <a className='none-max-600' href={"/post/"+ product.id}>
                        <Image  className='none-max-600' style={contentStyle} src={product.images != null ? ('http://api.com/birimdik/uploads/'+ product.images) : ('http://api.com/birimdik/uploads/'+ 'no_image3.png')}/>
            </a>
            <a className='postimage' href={"/post/"+ product.id}>
                        <Image className='postimage' style={contentStyle2} src={ product.images != null ? ('http://api.com/birimdik/uploads/'+ product.images) : ('http://api.com/birimdik/uploads/'+ 'no_image.jpg')}/>
            </a>
            <div class="card-body medbody">
           

                <div class="row">
                    
                        {/* <div  class="col-md-12 medname"> <label  style={{fontSize:'18px',fontFamily:'revert-layer'}}>{category_name}</label>
                            <i style={{float:'right',fontSize:'10px'}} class="fa-solid fa-eye  "> : 150</i>
                        </div> */}
                        
                    <div class="col-md-12">
                        <div className="row">
                       
                        <div style={{marginTop:'-20px'}} class="col-md-12 ">
                            <span  class="card-title  txt7">{product.price}</span>
                            <label class="card-title ml-2 txt7cur "><b>{product.currency}</b></label>
                        </div>
                        <div style={{height:'50px',marginTop:'-10px',marginLeft:'-10px'}} class="col-md-12">
                            <p className="destext" >{product.descriptions}</p>
                        </div>
                        <div  class="col-md-auto">
                            <p className='location_text'><i class="fa-sharp fa-solid fa-map-location-dot"></i> | {product.city}</p>
                        </div>
                        <div class="col-md-1">
              
                        </div>
                        <div class="col-md-3 meddate">
                            <label style={{fontSize:'10px',float:'right',marginRight:'-15px'}} class="text-secondary meddate">{product.date1}</label>
                        </div>

                        <div className='postbtn'>
                        {product3 != null || product3 != undefined || product3 ?.length > 0 ?
    <>
    <div className='userimg3'><a href={'/user/' + user_id}><img style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'-10px',marginTop:'-30px'}} src={product3[0].avatar != null ? 'http://api.com/birimdik/uploads/' + product3[0].avatar : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}></img></a></div>
    <div className='userimg4'><a href={'/user/' + user_id}><img style={{width:'30px',height:'30px',borderRadius:'50%',marginLeft:'-5px',marginTop:'-3px'}} src={product3[0].avatar != null ? 'http://api.com/birimdik/uploads/' + product3[0].avatar : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}></img></a></div>
     </>
                :<>
                </>
            }
                        {favorited ?
                      <> 
              <label class="text-secondary postsms"> <i class="fa-solid fa-envelope  sms2"></i> <i onClick={()=>delfavorites(product.id)} class=" fa-solid fa-heart   heart2"></i></label>
                      </>
                      :<>
                     <label  class="text-secondary postsms"> <i class="fa-solid fa-envelope  sms2"></i> <i onClick={()=>addfavorites(product.id)} class=" fa-solid fa-heart   heart"></i></label>

                      </>
}       
 {/* {favorited ?
                      <>
                        <a onClick={()=>delfavorites(product.id)} style={{ border: "1px solid green" }} class="btn btn-light btbt"><i class=" fa-solid fa-heart text-danger "></i>Удалить из избранные</a>

                      </>
                      :<>
                        <a onClick={()=>addfavorites(product.id)} style={{ border: "1px solid green" }} class="btn btn-light btbt"><i class=" fa-solid fa-heart text-secondary "></i>Добавить в избранное</a>

                      </>
}         */}
                        </div>
                        
                       
                    
                        </div>
                        
                        
                        
                    </div>

                </div>
            </div>
        </div>  

        </>
    :<>Loading</>
}

</>
    );
    }
    export default Post2;