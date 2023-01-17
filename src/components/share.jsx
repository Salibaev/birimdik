const Share=()=>{
   
    return(
        <>

<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Поделиться в соц.сетях</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div style={{height:'150px'}} className="card">

            <div  class="card1 mt-5 text-center">
              <div class="card-block1">
              <img src="https://images.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" className="imgshare"></img>
              <p>Google</p>
              </div>
              <div class="card-block1">
              <img src="https://www.facebook.com/images/fb_icon_325x325.png" className="imgshare"></img>
              <p>Facebook</p>
              </div>
              <div class="card-block1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLql7-fO14CRRT0sjexQhG_7E9Xt3lbg60VnvhhziEgzIofBQght-EVFxYcI3-C4ro9PE&usqp=CAU" className="imgshare"></img>
              <p>Twitter</p>
              </div>
              <div class="card-block1">
              <img src="https://pbs.twimg.com/profile_images/1318652224638124032/wrpp2Nl4_400x400.png" className="imgshare"></img>
              <p>Whatsapp</p>
              </div>
              
            </div>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
    );
    }
    
    
    export default Share;

    