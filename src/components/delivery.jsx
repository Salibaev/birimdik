import Footer from './footer';
import Nav from './navbar';



const Delivery =()=>{

    return(
        <>
        <Nav/>
        <div class="container">
      
    <div class="row">
    <div class="col-md-4">
    <h3>Укажите адрес доставки</h3>
    <input placeholder="Напишите адрес" class="form-control"></input>
    <div class="map-responsive">
<iframe width="100%" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.9614251725147!2d72.79630811524028!3d40.52034370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad454c0b0f35%3A0x9c8c247676a86a86!2z0KPQktCUINCzLtCe0Yg!5e0!3m2!1sru!2skg!4v1655561909147!5m2!1sru!2skg" ></iframe>
</div>
    </div>
    <div class="col-md-6">
        <div class="row">
            <div class="col-md-6 text-center">
             {/* <h3 class="mt-2 ">Имя заказчика</h3>
                <h3 class="mt-2">Номер телефона</h3>
                <h3 class="mt-2">Электронная почта</h3>
                <h3 class="mt-2">Почтовый индекс</h3>
                <h3 class="mt-2">Способ оплаты</h3>  */}
            </div>
            <div class="col-md-6">
                <input placeholder="Имя" class="form-control mt-2"></input>
                <input placeholder="Номер телефона" class="form-control mt-2"></input>
                <input placeholder="@Gmail.com" class="form-control mt-2"></input>
                <input placeholder="Индекс" class="form-control mt-2"></input>
                <select class="form-control mt-2">
                    <option>Картой</option>
                    <option>Наличными</option>
                </select>
                <button  class="btn btn-primary mt-5">Сохранить</button>
            </div>
        </div>
    </div>
    </div>
   
    </div>

    <Footer/>
    </>
    );
    }
    
    
    export default Delivery;


