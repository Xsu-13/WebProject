import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/form.css"
import React, { useEffect, useState } from 'react'

function FormContent() {

    const [fio, setFIO] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setInputValues();
    }, []);

    function ClearInputs()
    {
        setFIO('');
        setEmail('');
        setTel('');
        setComment('');
    }

    function onSubmit(e){

        e.preventDefault();
        e.stopPropagation();

        fetch('https://formcarry.com/s/fCsjmrtmZ4', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({fio, tel, email, comment})
        })
        .then(response => {
            console.log(response);
            localStorage.clear();
            ClearInputs();})
        .catch(error => {
            console.log(error);
            localStorage.clear();
            ClearInputs();});
    } 

    function setInputValues()
    {
        if(localStorage.user != null)
        {
            let data = JSON.parse(localStorage.user);
            setFIO(data.fio);
            setEmail(data.email);
            setTel(data.tel);
            setComment(data.comment);
        }
    }

  return (
        <form action="https://formcarry.com/s/fCsjmrtmZ4" method="POST" accept-charset="UTF-8" >
            <div class="form-group">
                <label for="name"></label>
                <input type="text" value={fio} onChange={(e) => setFIO(e.target.value)} class="form-control" id="name" placeholder="Ваше имя"/>
            </div>
            <div class="form-group">
                <label htmlFor="phone" for="phone"></label>
                <input type="tel" pattern="\d*" value={tel} onChange={(e) => setTel(e.target.value)} class="form-control" id="phone"  placeholder="Телефон"/>
            </div>
            <div class="form-group">
                <label for="email"></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="email" placeholder="E-mail"/>
            </div>
            <div class="form-group">
                <label for="comment"></label>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} class="form-control" id="comment" placeholder="Ваш комментарий"/>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="agree" required/>
                <label class="form-check-label" for="agree">
                    Отправляя заявку, я даю согласие на обработку своих <br/>персональных данных
                </label>
            </div>
            <button type="submit" onSubmit={(e) => onSubmit(e)} class="form-button">Оставить заявку!</button>
        </form>
  );
}

export default FormContent;
