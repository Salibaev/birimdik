import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLikes } from '../redux/actions/like_actions';
import Post2 from './post2';



const Mainpost2 =()=>{
    const dispatch = useDispatch();
    // const [products2, setProducts2] = useState(null);
    const [products,setProducts] = useState(null);
    const user_id = localStorage.getItem('token');
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
            dispatch(setLikes(data.data.favorites));
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
      }

    useEffect(()=>{
        fetchProducts();
        fetchProducts2();
    },[])
    
    return(
        <>
        

<div  className='container '>
<div class="row bgmainposts">
<div class="col-md-12 ">
    <h2 class="txt5 ">Хиты продажи</h2>
</div>
{products != null || products != undefined || products?.length > 0 ?
    <>
    {products.map((item)=>
    <div class="col-6 col-md-3 mt-3">
        <Post2 product={item}/>
    </div>
    
    )
    }
    </>
    :<>Loading</>
}
    </div>
    </div>
    </>
    );
    }
    
    
    export default Mainpost2;