import Footer from './footer';
import Nav from './navbar';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import Upload1 from './upload';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

const New_post =()=>{
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
  
    const handleChange = (info) => {
      if (info.file.status === 'uploading') {
        setLoading(true);
        return;
      }
  
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (url) => {
          setLoading(false);
          setImageUrl(url);
        });
      }
    };
    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div
            style={{
              marginTop: 8,
            }}
          >
            Загрузить фото
          </div>
        </div>);
    return(
        <>
         
        <Nav/>


       
        <div className='container bg-light conn'>
           <Upload1/>

</div>

   <Footer />
   </>
   );
   }
   
   
   export default New_post;

   

