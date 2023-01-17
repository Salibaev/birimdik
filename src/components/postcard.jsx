const Postcard =()=>{

    return(
        <>

    <div class="card bgmainposts" >
        <a href="/post">
        <img className="postcardimg" src="https://klike.net/uploads/posts/2020-03/1583054458_7.jpg"  alt="..."/>
        <label class="card-title txt77">10000 сом</label>
        <p class="cardtext ">Квартиры</p>
        </a>
    <div class="row">
    <div class="col-md-3 col-3">
        <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='carduserimg2'></img>
        </div>
        <div class="col-md-9 col-9">
            <label class="text-secondary datetxt"><i class="fa-solid fa-envelope ml-2 sms2"></i> <i class=" fa-solid fa-heart ml-2  heart"></i></label>
        </div>
        </div>
        
    </div>
</>
 
    );
    }
    
    
    export default Postcard;
