import Footer from './footer';
import Mainpost2 from './mainpost2';
import Nav from './navbar';
import Search1 from './search1';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import Category from './category';
import { Button, Popover } from 'antd';
import { useParams } from 'react-router-dom';
import { Carousel } from 'antd';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Main =()=>{
  const [products,setProducts] = useState(null);
    const fetchProducts = async () => {
        
        const data = await axios({
            method:'get',
            url:'http://api.com/birimdik/category'
        });
        if(data.data.status == 200){
            setProducts(data.data.post);
            console.log('data',data)
        }else{
            console.log("Error fetch products!");
        }
    }
    const params = useParams();
    const id = params.id;
    const [products_podcat,setProducts_podcat] = useState(null);
    const fetchProducts_podcat= async () => {
        const post = {
            id: id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/postcategory'
        });
        if (data.data.status == 200) {
            setProducts_podcat(data.data.postcategory);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }

useEffect(() => {
    fetchProducts();
    fetchProducts_podcat();
}, [])
const text = <span>Подкатегории</span>;
const content = (
  
  <div style={{width:'1000px',}}>
   {products_podcat != null || products_podcat != undefined || products_podcat?.length > 0 ?
    <>
                    {products.map((products_podcat)=>
            
                    <div className="col-md-2">
                    <a href={"/podcategory/"+ products_podcat.id}> <img  style={{width:'80px',height:'80px',borderRadius:'50%'}} src={products_podcat.image}></img></a>
                    <p style={{color:'black',fontSize:'18px',fontFamily:'initial'}}>{products_podcat.name}</p>
                    </div>
                    )
                    }
    
    </>
    :<>Loading</>
}
  </div>
);
const buttonWidth = '100%';
    return(
<>
<body  className='body'>
    <div  className='row mt-5 '>
    <div className='col-md-1'>
    </div>
        <div className='col-md-10 '>
          
        <div className='bg-light'>
                <Nav/>
                
                <div style={{marginTop:'7%'}} className='col-md-12'>
                <Search1/>
                </div>
                
                {products != null || products != undefined || products?.length > 0 ?
    <>
<div className='col-md-12 text-center'>
              <h2 style={{fontFamily:'sans-serif'}}>Категории</h2>
            </div>
                <div className='container podcat '>
        <div  className='row '>
            
       
            {products != null || products != undefined || products?.length > 0 ?
    <>
  

    {products.map((item)=>
    
      
        <div className='col-auto ml-4 text-center'>
          <Popover   placement="bottom" title={text} content={content} trigger="hover">
          <Button style={{display:'none'}}></Button>
          <Category products={item}/>
          
      </Popover>
        
        </div>
    

  
    )
    }
    </>
    :<>Loading</>
}
          
        </div>
      </div>
      </>
    :<>Loading</>
}
<div style={{background:'transparent'}} class="nav-scroller ">
  <nav style={{height:'100%'}} class="nav-scroller__items mt-4 navscroll">
  <a class="nav-scroller__item" style={{width:'27%'}} href="#"><div className=' text-center '>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://cdn.icon-icons.com/icons2/1151/PNG/512/1486505259-estate-home-house-building-property-real_81428.png'></img>
        <p className='navt'>Недвижимость</p>
          </div></a>
    <a class="nav-scroller__item" style={{width:'20%'}} href="#"><div className=' text-center '>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://static.tildacdn.com/tild3365-3739-4766-b435-353732363563/1634902083423.png'></img>
        <p className='navt'>Транспорт</p>
          </div></a>
    <a class="nav-scroller__item" style={{width:'17%'}} href="#"><div className=' text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://kverkus.su/wp-content/uploads/2018/07/smart-0.jpg'></img>
        <p className='navt'>Услуги</p>
          </div></a>
    <a class="nav-scroller__item" style={{width:'26%'}} href="#"><div className='text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://e7.pngegg.com/pngimages/587/790/png-clipart-electrical-wires-cable-electricity-building-installation-art-architectural-engineering-electricity-supplier-big-promotion-text-trademark.png'></img>
        <p className='navt'>Электроника</p>
          </div></a>
    <a class="nav-scroller__item" style={{width:'20%'}} href="#"><div className='  text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://media.baamboozle.com/uploads/images/99452/1642910058_50415.jpeg'></img>
        <p className='navt'>Дом и сад</p>
          </div></a>
    <a class="nav-scroller__item" style={{width:'20%'}} href="#"><div className='  text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://gelsfedu.ru/images/Mediateka/new_2019/04.03.2019/bezymyannyj.jpg'></img>
        <p className='navt'>Работа</p>
          </div></a>
    <a class="nav-scroller__item" style={{width:'22%'}} href="#"><div className=' text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-vectpr-%D0%BA%D1%80%D1%83%D0%B3-%D1%8B%D0%B9-%D0%BF-%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D1%81-%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%BE%D0%B9-%D0%B2%D0%B5%D1%88%D0%B0-%D0%BA%D0%BE%D0%B9-84827329.jpg'></img>
        <p className='navt'>Мода и стиль</p>
          </div></a>
    <a class="nav-scroller__item" style={{width:'25%'}} href="#"><div className='  text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://previews.123rf.com/images/linasemenova/linasemenova1809/linasemenova180900055/108651137-illustration-of-blue-baby-stroller-for-baby-boy-with-bag-in-basket-vector-icon-print-for-clothes-bag.jpg'></img>
        <p className='navt'>Детский мир</p>
          </div></a>
          <a class="nav-scroller__item" style={{width:'35%'}} href="#"><div className=' text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://i.pinimg.com/originals/95/67/98/95679877e88d7a43ec559978d9f4cd29.png'></img>
        <p className='navt'>Хобби,отдых и спорт</p>
          </div></a>
          <a class="nav-scroller__item" style={{width:'20%'}} href="#"><div className=' text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://clubhavana.ru/800/600/https/s3.amazonaws.com/uniiverse_production/photos/5d4c611142648e00505b148c/original/Screen_Shot_2019-08-08_at_10.51.04_AM.png'></img>
        <p className='navt'>Животное</p>
          </div></a>
          <a class="nav-scroller__item" style={{width:'25%'}} href="#"><div className=' text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://i.pinimg.com/originals/60/9b/74/609b743ccc33d761ff582ff8093b738b.jpg'></img>
        <p className='navt'>Отдам даром</p>
          </div></a>
          <a class="nav-scroller__item" style={{width:'25%'}} href="#"><div className=' text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://www.pngitem.com/pimgs/m/46-469532_hunting2-01-class-img-responsive-owl-first-image.png'></img>
        <p className='navt'>Детский мир</p>
          </div></a>
          <a class="nav-scroller__item" style={{width:'30%'}} href="#"><div className='  text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://previews.123rf.com/images/linasemenova/linasemenova1809/linasemenova180900055/108651137-illustration-of-blue-baby-stroller-for-baby-boy-with-bag-in-basket-vector-icon-print-for-clothes-bag.jpg'></img>
        <p className='navt'>Охота и рыбалка</p>
          </div></a>
          <a class="nav-scroller__item" style={{width:'20%'}} href="#"><div className='  text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://st4.depositphotos.com/3274935/22032/v/950/depositphotos_220327582-stock-illustration-hand-giving-gift-box-to.jpg'></img>
        <p className='navt'>Подарки</p>
          </div></a>
          <a class="nav-scroller__item" style={{width:'22%'}} href="#"><div className=' text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://sun6-22.userapi.com/s/v1/ig2/cdIsGYQz-qLyAxs_85LNUHbDYD0XRFWlz0qP-TJhmTyNxTUvnntIduWen4WNadVDsvbkDzLO0eCHJA9VjZWi6BAm.jpg?size=1077x1077&quality=95&crop=2,0,1077,1077&ava=1'></img>
        <p className='navt'>Авто запчасти</p>
          </div></a>
          <a class="nav-scroller__item" style={{width:'20%'}} href="#"><div className=' text-center'>
        <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://flomaster.club/uploads/posts/2021-12/1638531389_81-flomaster-club-p-risunok-na-temu-biznes-krasivie-risunki-92.jpg'></img>
        <p className='navt'>Бизнес</p>
          </div></a>
  </nav>
</div>

<div className=''>
          <Carousel autoplay  >
    <div>
      <h3 className='carousel2'  ><img width='100%' className='carimg'  src='https://images.wbstatic.net/bners1/big_ng_0101.jpg'></img></h3>
    </div>
    <div>
    
      <h3 className='carousel2'><img width='100%' className='carimg'  src='https://images.wbstatic.net/adsf/1672316022276698302A.jpg'></img></h3>
    </div>
    <div>
      <h3 className='carousel2'><img width='100%' className='carimg'  src='https://images.wbstatic.net/bners1/big_smart-2.jpg'></img></h3>
    </div>
    <div>
      <h3 className='carousel2'><img width='100%' className='carimg'  src='https://images.wbstatic.net/bners1/big_tasty_2312.jpg'></img></h3>
    </div>
  </Carousel>
          </div>       
                <Mainpost2/>
                <Footer/> 
                </div>
        </div>
        <div className='col-md-1'>
    </div>
    </div>




    </body>    
</>
    );
    }
    
    
    export default Main;
    



    