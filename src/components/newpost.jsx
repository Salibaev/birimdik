import Footer from './footer';
import Nav from './navbar';



const Newpost =()=>{

    return(
        <>
        <Nav/>
        <div  className='container bg-light'>
<div class="row">
<div class="col-md-6">
    <div class="row">
        <div className='col-md-12'>

        </div>
        <input class="form-control" name="postname" type="text" placeholder="Названия товара1111" />
        <input class="form-control" name="images" type="text" placeholder="Вставьте ссылку на картинку" />
        <input class="form-control" name="price" type="text" placeholder="Укажите цену" />
        <input class="form-control" name="oldprice" type="text" placeholder="Укажите старую цену" />
        <input class="form-control" name="opisania" type="text" placeholder="Опишите товар" />
        <input class="form-control" type="text" placeholder="Местоположения" /> 
        <select name="categoria" class="form-control mt-3">
            <option value="Категория">Категория1</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Дом">Дом</option>
            <option value="Услуга">Услуга</option>
            <option value="Работа">Работа</option>
        </select>
        <input class="btn btn-primary mt-3" type="submit" value="Готов" />
    </div>
</div>
</div>
</div>

   <Footer/>
   </>
   );
   }
   
   
   export default Newpost;