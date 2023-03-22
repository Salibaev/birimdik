import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './navbar';
import Post2 from './post2';
import Post_lk_ak from './post_lk_ak';
const User = () => {
  const params = useParams();
  const userid = params.id;
  const [neaktiv, setNeaktiv] = useState(null);
  const [productuser, setProductuser] = useState(null);
 const [products,setProducts] = useState(null);

  const fetchProductuser = async () => {
    const post = {
        id: userid,
    };
    const data = await axios({
        method: 'get',
        params: post,
        url: 'http://api.com/birimdik/users1'
    });
    console.log(data);
    if (data.data.status == 200) {
        setProductuser(data.data.users1);
    } else {
        console.log("Error fetch products!");

    }  
}

const fetchProducts = async () => {
  const post = {
      id: userid,
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

const fetchNeaktiv = async () => {
  const post = {
      user_id: userid,
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
useEffect(() => {
  fetchProductuser();
  fetchProducts();
  fetchNeaktiv();
}, [])

  return (
    <>
    {productuser != null || productuser != undefined || productuser ?.length > 0 ?
    <>
      <div className='container'>
      <Nav/>
    <div className='row mt-4'>
        
        <div className='col-md-1'>
<a href='/user1'><img style={{width:'100px',height:'100px',borderRadius:'50%',marginLeft:'-10px'}} src={productuser[0].avatar != null ? 'http://api.com/birimdik/uploads/' + productuser[0].avatar : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}></img></a>
    
        </div>

        <div className='col-md-2'>
          <h4 style={{fontFamily:'serif'}}><b>{productuser[0].name}</b></h4>
          <p style={{color:'green',marginTop:'-15px'}}><b>Онлайн</b></p>
          <p style={{color:'grey',marginTop:'-15px',fontSize:'18px'}}>Потвержден</p>
          <p style={{color:'grey',marginTop:'-15px',fontSize:'16px'}}>Дата регистрации : 18.05.22</p>
        </div>
<div className='row'>
<div style={{height:'450px',overflow:'scroll'}} className='col-md-6'>
  <div className='row'>
  {products != null || products != undefined || products?.length > 0 ?
                <>
                <h5>Активные</h5>
                {products.map((item)=>
                <div class="col-6 col-md-6 mt-3">
                    <Post2 product={item}/>      
                </div>
                
                )
                }
                </>
                :<>Нет активных обьявлений...
                </>
            }
  </div>
</div>




<div style={{height:'450px',overflow:'scroll'}} className='col-md-6'>
  <div className='row'>
  {neaktiv != null || neaktiv != undefined || neaktiv?.length > 0 ?
                <>
                <h5>Неактивные</h5>
                {neaktiv.map((item)=>
                <div class="col-6 col-md-6 mt-3">
                    <Post2 product={item}/>
                </div>
                
                )
                }
                </>
                :<>Нет деактивированных обьявлений...
                </>
            }
  </div>
</div>
</div>     
</div>
      
    </div>
  </>
                :<>loading...
                </>
            }     
    </>
  );
};
export default User;

