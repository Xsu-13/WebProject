import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/form.css"
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import FormContent from './formContent'

function Form() {
    
    const navigate = useNavigate();
  
    const closeForm = () =>{
      navigate("/");
    }

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

    function onClose(e)
    {
        e.preventDefault();
        e.stopPropagation();

        localStorage.user = JSON.stringify({fio, tel, email, comment});
        closeForm();
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
    <div class="form">
    <div class="form-wrapper">
        <button type="button" onClick={(e) => onClose(e)} id="close-btn" class="btn-close-form">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
            </svg>
        </button>
        <FormContent/>
    </div>
</div>
  );
}

export default Form;
