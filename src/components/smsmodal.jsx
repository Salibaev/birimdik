

const Smsmodal=()=>{
   
    return(
        <>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Отправить сообщение</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="card">
          <textarea style={{height:'130px'}} className="form-control"></textarea>
          <div  className="row inline">
         
              
            </div>
            <div class="card1">
              <div class="card-block1">
              <button style={{fontSize:'12px',borderRadius:'15px'}} className="btn btn-success">за сколько отдадите?</button>
              </div>
              <div class="card-block1">
              <button style={{fontSize:'12px',borderRadius:'15px'}} className="btn btn-success">Еще актуально?</button>
              </div>
              <div class="card-block1">
              <button style={{fontSize:'12px',borderRadius:'15px'}} className="btn btn-success">Готов купить?</button>
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
    
    
    export default Smsmodal;

    