import Footer from './footer';
import Nav from './navbar';
import Post2 from './post2';



const Mainsms =()=>{

    return(
<>
<Nav/>
<div class="container bg-light">
    <div class="row">
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
</div>
<Footer/>
    </>
    );
    }
    
    
    export default Mainsms;