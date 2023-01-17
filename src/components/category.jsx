import React,{ Component } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Category =({products})=>{
    
    return(
<>
{products != null || products != undefined || products?.length > 0 ?
    <>
    <div className='medcategory'><a href={"/podcategory/"+products.name+"/"+products.id} ><img  style={{width:'80px',height:'80px',borderRadius:'50%'}} src={products.image}></img></a>
        <p style={{color:'black',fontSize:'18px',fontFamily:'initial'}} >{products.name}</p></div>
        </>
    :<>Loading</>
}
     
        
</>
    );
    }
    export default Category;