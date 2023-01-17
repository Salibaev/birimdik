import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './navbar';
const User = () => {
  const params = useParams();
    const userid = params.id;
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
useEffect(() => {
  fetchProductuser();
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

