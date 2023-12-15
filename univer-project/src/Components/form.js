import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/form.css"
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

function Form() {
  const history = useHistory();
  
  const handleHistory = () =>{
    history.push("/form");
  }

    const [fio, setFIO] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    function onSubmit(e){
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/fCsjmrtmZ4", {
          method: 'POST',
          headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({fio, tel, email, comment})
        })
        .then(response => response.json())
        .then(response => {
          if (response.code === 200) {
            alert("We received your submission, thank you!");
          }
          else if(response.code === 422){
            // Field validation failed
            setError(response.message)
          }
          else {
            // other error from formcarry
            setError(response.message)
          }
        })
        .catch(error => {
          // request related error.
          setError(error.message ? error.message : error);
        });
    }


  return (
    <div class="form">
    <div class="form-wrapper">
        <form action="" onSubmit={(e) => onSubmit(e)}>
            <div class="form-group">
                <label for="name"></label>
                <input type="text" value={fio} class="form-control" id="name" placeholder="Ваше имя"/>
            </div>
            <div class="form-group">
                <label for="phone"></label>
                <input type="tel" value={tel} class="form-control" id="phone"  placeholder="Телефон"/>
            </div>
            <div class="form-group">
                <label for="email"></label>
                <input type="email" value={email} class="form-control" id="email" placeholder="E-mail"/>
            </div>
            <div class="form-group">
                <label for="comment"></label>
                <input type="text" value={comment} class="form-control" id="comment" placeholder="Ваш комментарий"/>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="agree"/>
                <label class="form-check-label" for="agree">
                    Отправляя заявку, я даю согласие на обработку своих <br/>персональных данных
                </label>
            </div>
            <button type="submit" class="form-button">Оставить заявку!</button>
        </form>
    </div>
</div>
  );
}

export default Form;
