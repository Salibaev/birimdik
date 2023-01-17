import Footer from "./footer";
import Nav from './navbar';
import Postcard from "./postcard";
import Share from "./share";
import Smsmodal from "./smsmodal";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Post2 from "./post2";
import { Button, Image } from 'antd';
import React from 'react';


const Post = () => {

    // const [category_name,setCategory_name] = useState(null);
    // const Category_name = ()=>{
    //     if(product[0].categories == 1){
    //       setCategory_name('Недвижимость');
    //     }
    //     if(product[0].categories == 2){
    //         setCategory_name('Транспорт');
    //       }
    //    }
       

    const [visible, setVisible] = useState(false);

    const params = useParams();
    const id = params.id;
    const [products, setProducts] = useState(null);
    const [product, setProduct] = useState(null);
    const fetchProduct = async () => {
        const post = {
            id: id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/post'
        });
        if (data.data.status == 200) {
            setProduct(data.data.post);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }
    const [favorited,setFavorited]=useState(false);
    const fetchProducts = async () => {
        const params = {
            ad_id:ad_id,
            user_id:user_id,
            
        };

        const data = await axios({
            method:'get',
            params:params,
            url:'http://api.com/birimdik/favorite'
        });
        if (data.data.status == 200) {
            setFavorited(true);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            setFavorited(false);
            console.log(data);
        }
    }
  
   
    
    const [recommends,setRecommends] = useState(null);

const fetchRecommends = async () =>{
    
        const data = await axios({
        method: 'get',
        url: 'http://api.com/birimdik/rekom'
    });
    if (data.data.status == 200){
        setRecommends(data.data.post);
        console.log('data', data);
    } else {
        console.log('Error fetch recommends!');
        console.log('data', data);
    }
}

    const ad_id = params.id;
    const user_id = localStorage.getItem('token');

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
            fetchProducts();
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
            fetchProducts();
            }else{
                alert('Error')
            }
        }
    }
    

    useEffect(() => {
        // Category_name();
        fetchProduct();
        fetchProducts();
        fetchRecommends();
    }, [])





    return (
        <>
            <Smsmodal />
            <Share />



            <div className="navpost">
            <Nav  />
            </div>
            <div className="container block-max-600">
                <div className="row ds">
                    <div className="col-9"><i style={{fontSize:'18px'}} class="fa-solid fa-chevron-left"></i></div>
                    <div className=" col-1"><i  class=" fa-solid fa-heart   heart"></i></div>
                    <div className=" col-1"><i class="fas fa-sms heart"></i></div>
                </div>
            </div>
            <div class="container bg-light postcontainer">
                <div class="row">

                    {product != null || product != undefined || product?.length > 0 ?
                        <>
                            <div className="col-md-12">  
                                 {/* <p className="text-secondary">{category_name}</p>                      */}
                            </div>
                        

                    <div class="col-md-8 ">
                        <div className="row">
                          
                          <div style={{height:'250px'}} className="col-12 block-max-600">
                          <div id="carouselExampleIndicators" class="carousel " data-ride="carousel">
  <ol  class="carousel-indicators">
    <li  data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div  class="carousel-item active">
    <Image   
    style={{width:'100%',height:'250px'}}                       
    src={'http://api.com/birimdik/uploads/'+ product[0].images}
    />
    </div>
    <div class="carousel-item">
    <Image   
    style={{width:'100%',height:'250px'}}
    src={'http://api.com/birimdik/uploads/'+ product[0].image1}
    />
    </div>
    <div class="carousel-item">
    <Image
    style={{width:'100%',height:'250px'}}
    src={'http://api.com/birimdik/uploads/'+ product[0].image2}
    />
    </div>
    <div class="carousel-item">
    <Image
    style={{width:'100%',height:'250px'}}
    src={'http://api.com/birimdik/uploads/'+ product[0].image3}
    />
    </div>
    <div class="carousel-item">
    <Image
    style={{width:'100%',height:'250px'}}
    src={'http://api.com/birimdik/uploads/'+ product[0].image4}
    />
    </div>
    <div class="carousel-item">
    <Image
    style={{width:'100%',height:'250px'}}
    src={'http://api.com/birimdik/uploads/'+ product[0].image5}
    />
    </div>
    <div class="carousel-item">
    <Image
    style={{width:'100%',height:'250px'}}
    src={'http://api.com/birimdik/uploads/'+ product[0].image6}
    />
    </div>
  </div>
  <button style={{marginTop:'120px'}} class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button style={{marginTop:'120px'}} class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span  class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
                          </div>
                          <div style={{}} className="container">
                          <div class='row ' >
                                    <div className="col-md-6 card ">
                                        
                                            <Image
                                            className="imgnone"
                                            preview={{
                                            visible: false,
                                            }}
                                            width='100%'
                                            height='100%'
                                            src={product.images != null ? ('http://api.com/birimdik/uploads/'+ product[0].images) : ('http://api.com/birimdik/uploads/'+ 'no_image3.png')}
                                            onClick={() => setVisible(true)}
                                        />
                                        <div 
                                            style={{
                                            display: 'none',
                                            }}
                                        >
                                            <Image.PreviewGroup
                                            preview={{
                                                visible,
                                                onVisibleChange: (vis) => setVisible(vis),
                                            }}
                                            >
                                            <Image src={'http://api.com/birimdik/uploads/'+product[0].images}/>
                                            <Image src={'http://api.com/birimdik/uploads/'+product[0].image1}/>
                                            <Image src={'http://api.com/birimdik/uploads/'+product[0].image2}/>
                                            <Image src={'http://api.com/birimdik/uploads/'+product[0].image3}/>
                                            <Image src={'http://api.com/birimdik/uploads/'+product[0].image4}/>
                                            <Image src={'http://api.com/birimdik/uploads/'+product[0].image5}/>
                                            <Image src={'http://api.com/birimdik/uploads/'+product[0].image6}/>
                                            
                                            </Image.PreviewGroup>
                                        </div>
                                    </div>
                          
                                
                                   
                                    <div class="col-md-3 none-max-600">
                            {favorited ?
                      <>
                        <a onClick={delfavorites} style={{ border: "1px solid green" }} class="btn btn-light btbt"><i class=" fa-solid fa-heart text-danger "></i>Удалить из избранные</a>

                      </>
                      :<>
                        <a onClick={addfavorites} style={{ border: "1px solid green" }} class="btn btn-light btbt"><i class=" fa-solid fa-heart text-secondary "></i>Добавить в избранное</a>

                      </>
}        
                                
                                <div className="row">

                                <div className="col-md-12 col-12 none">
                                  <div className="row">
                                        <Image.PreviewGroup>
                                      <div style={{padding:'5px'}} className="col-md-6 col-6">
                                        <div><Image
                                          
                                          height='65px' width='100%'
                                          src={'http://api.com/birimdik/uploads/'+ product[0].image1}
                                          /></div>
                                          <div>
                                          <Image
                                          style={{marginTop:'5px'}}
                                          height='65px' width='100%'
                                          src={'http://api.com/birimdik/uploads/'+ product[0].image2}
                                          />
                                          </div>
                                          <div  style={{marginTop:'10px'}}>
                                          <Image
                                         
                                          height='65px' width='100%'
                                          src={'http://api.com/birimdik/uploads/'+ product[0].image3}
                                          />
                                          </div>
                                          
                                      </div>

                                      <div style={{padding:'5px'}} className="col-md-6 col-6">
                                        <div><Image
                                          
                                          height='65px' width='100%'
                                          src={'http://api.com/birimdik/uploads/'+ product[0].image4}
                                          /></div>
                                          <div>
                                          <Image
                                          style={{marginTop:'5px'}}
                                          height='65px' width='100%'
                                          src={'http://api.com/birimdik/uploads/'+ product[0].image5}
                                          />
                                          </div>
                                          <div  style={{marginTop:'10px'}}>
                                          <Image
                                         
                                          height='65px' width='100%'
                                          src={'http://api.com/birimdik/uploads/'+ product[0].image6}
                                          />
                                          </div>
                                          
                                      </div>
                                         
                                        
                                        </Image.PreviewGroup>
                                  </div>
                          
                          </div>

                                </div>


                            </div>
                            
                            <div className="col-md-3 none-max-600 " >
                                <div className="">
                                    <b>Полезная информация!</b>
                                    <label style={{ fontSize: '16px' }}>Избегайте мошенничества, проверяйте перед оплатой. Будьте внимательны. Этот сайт не несет ответственности за достоверность публикуемых объявлений.</label>
                                </div>
                            </div>
                            </div>  
                                </div>
                       
<div className="col-9 col-md-6 block-max-600">
    <p style={{ fontSize: '10px' }}><i class="fa-solid fa-eye"> : 150 просмотров</i></p>
</div>
<div className="col-3 block-max-600">
    
    <label style={{fontSize:'12px',float:'right'}}>45<i class="fa-solid fa-heart heart"></i></label>
</div>
<div className="col-12 block-max-600">
    <p className="txt7med">{product[0].price}<b style={{marginLeft:'10px',fontSize:'12px'}}>{product[0].currency}</b></p>
    <p style={{color:'grey',fontSize:'12px',marginTop:'-35px'}}>5 <label style={{color:'grey',fontSize:'10px'}}> USD</label></p>
</div>
<div style={{marginTop:'-20px'}} className="row block-max-600">
<div className="col-6 block-max-600">
    <Button danger style={{borderRadius:'15px'}}>Написать</Button>
</div>
<div  className="col-6 block-max-600">
<Button style={{borderRadius:'15px',float:'right',borderColor:'blue',color:'blue'}}>Позвонить</Button>
</div>
</div>

<div style={{marginTop:'0px'}} className="col-12  block-max-600">
    <b style={{ fontSize: '16px'}}>Описание</b>
    <p  className="card" style={{ fontSize: '18px', fontFamily: 'unset' }}>{product[0].descriptions}</p>
</div>
<div style={{marginTop:'-10px'}} className="col-12 block-max-600">
<i class="fa-sharp fa-solid fa-map-location-dot"></i> <a >Город: {product[0].city}</a>
</div>


                           
                            

                            <div class="col-md-12  none-max-600">
                                <div class="row card">
                                    <div className="row">
                                            <div class="col-md-6 ">
                                                <div><p className="txt777">{product[0].price}<label style={{marginLeft:'10px',fontSize:'12px'}}>{product[0].currency}</label></p></div>
                                                <div style={{marginTop:'-30px'}}><label ><i class="far fa-clock"></i> дата публикации  {product[0].time}</label></div>
                                                <div><p style={{ fontSize: '10px' }}><i class="fa-solid fa-eye"> : 150 просмотров</i></p></div>
                                                <div><i class="fa-sharp fa-solid fa-map-location-dot"></i>: <a >{product[0].city}</a></div>
                                                <div></div>
                                                <p><i class="fa-solid fa-user mt-3"></i> <a> ID:
                                                        <label style={{ fontSize: '18px', fontFamily: 'unset' }}>{product[0].id}</label>
                                                </a></p>
                                            </div>

                                       

                                    <div class="col-md-6  ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <a type="button" data-toggle="modal" data-target="#exampleModal" style={{ fontSize: '14px' }} class="btn btn-primary ml-2 mt-2"><i class="fa-solid fa-comment-sms"></i> Написать сообщение</a>
                                            </div>
                                            <div className="col-md-6">
                                                <a type="button" data-toggle="modal" data-target="#exampleModal1" style={{ fontSize: '14px' }} class="btn btn-warning ml-4 mt-2"><i class="fa-solid fa-share"></i>Поделиться</a>

                                            </div>
                                            
                                                    <div className="col-md-12">
                                                        <a style={{ float: "right", color: 'white' }} class="btn btn-success form-control mt-2"><i class="fa-solid fa-phone"></i> +996 {product[0].numbers}</a>
                                                    </div>
                                                
                                        </div>
                                        </div>
                                    </div>


                                    
                                            <div style={{marginTop:'-25px'}} className="col-md-12">
                                                <b style={{ fontSize: '16px' }}>Описание</b>
                                                <p className="card" style={{ fontSize: '18px', fontFamily: 'unset' }}>{product[0].descriptions}</p>
                                            </div>
                                            
                                    <div class="col-md-12">
                                        <h5>Рекомендации</h5>
                                    </div>
                                    <div className="row">
                                    {recommends != null || recommends != undefined || recommends?.length > 0 ?
                                        <>
                                        {recommends.map((item)=>
                                        <div class="col-6 col-md-4 mt-3">
                                            <Post2 product={item}/>
                                            
                                        </div>
                                        
                                        )
                                        }
                                        </>
                                        :<>Loading</>
                                    }   
                                    



                                </div>
                                </div>
                            </div>
                            <div class="col-md-4">

                            </div>

                        </div>
                    </div>
                    <div class="col-md-4 mt-2 card">
                        <h3>Похожие Обьявления</h3>
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <Postcard />
                            </div>
                            <div className="col-md-6 col-6">
                                <Postcard />
                            </div>
                            <div className="col-md-6 mt-2 col-6">
                                <Postcard />
                            </div>
                            <div className="col-md-6 mt-2 col-6">
                                <Postcard />
                            </div>
                        </div>
                    </div>


                    <div class="col-md-12 mt-5">
                        <div class="row">
                            <div class="col-md-12">
                                <h5>Показать еще</h5>
                            </div>



                        </div>

                    </div>
                    </>
                        : <>Loading</>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Post;