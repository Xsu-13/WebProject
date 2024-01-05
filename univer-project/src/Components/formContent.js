import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/form.css"
import Loading from './loading'
import React, { useEffect, useState, useRef } from 'react'
import { connect, useDispatch} from 'react-redux'
import { fetchUsers, validateUser } from '../redux/userActions'

function FormContent(props) {

    const [fio, setFIO] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [comment, setComment] = useState("")
    const [active, setActive] = useState(false)

    const checkbox = useRef();

    const dispatch = useDispatch();
    console.log("is loading - " + props.loadingProgress);

    useEffect(() => {
        setInputValues();
        validate();
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

        dispatch(fetchUsers());
        ClearInputs();
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

    function safeToLocalStorage()
    {
        console.log({fio, tel, email, comment});
        localStorage.user = JSON.stringify({fio, tel, email, comment});
    }

    function validate()
    {
        dispatch(validateUser());
        setActive(props.correctData && checkbox.current.checked);
    }

  return (
<div>
    { props.loadingProgress && 
        <div class="loading-container">
            <Loading/>
        </div>
    }
    { !props.loadingProgress &&
        <form action="https://formcarry.com/s/fCsjmrtmZ4" method="POST" accept-charset="UTF-8" >
            <div class="form-group">
                <label for="name"></label>
                <input type="text" onChange={(e) => {setFIO(e.target.value); safeToLocalStorage(); validate();}} value={fio} class="form-control" id="name" placeholder="Ваше имя"/>
                {props.nameError!="" && 
                <div class="invalid-feedback">
                    name error
                </div>}
            </div>
            <div class="form-group">
                <label htmlFor="phone" for="phone"></label>
                <input type="tel" value={tel} onChange={(e) => {setTel(e.target.value); safeToLocalStorage(); validate(); }} class="form-control" id="phone"  placeholder="Телефон"/>
                {props.telError!="" && 
                <div class="invalid-feedback">
                    tel error
                </div>}
            </div>
            <div class="form-group">
                <label for="email"></label>
                <input type="email" value={email} onChange={(e) => {setEmail(e.target.value); safeToLocalStorage(); validate();}} class="form-control" id="email" placeholder="E-mail"/>
                {props.emailError!="" && 
                <div class="invalid-feedback">
                    email error
                </div>}
            </div>
            <div class="form-group">
                <label for="comment"></label>
                <textarea rows="6" type="text" value={comment} onChange={(e) => {setComment(e.target.value); safeToLocalStorage(); validate();}} class="form-control" id="comment" placeholder="Ваш комментарий"/>
                {props.commentError != "" && 
                <div class="invalid-feedback">
                    comment error
                </div>}
            </div>
            <div class="form-check">
                <input ref={checkbox} class="form-check-input" type="checkbox" onChange={() => {validate();}} id="agree" required/>
                <label class="form-check-label" for="agree">
                    Отправляя заявку, я даю согласие на обработку своих персональных данных
                </label>
            </div>
            <button type="submit" disabled={!active} onClick={(e) => onSubmit(e)} class="form-button">Оставить заявку!</button>    
        </form>
    }
</div>
    
  );
}

const mapStateToProps = (state) => {
    return{
        loadingProgress: state.user.loading,
        correctData: state.user.correctValidation,
        nameError: state.user.nameError,
        emailError: state.user.emailError,
        telError: state.user.telError,
        commentError: state.user.commentError,
    }
}

export default connect(mapStateToProps)(FormContent);
