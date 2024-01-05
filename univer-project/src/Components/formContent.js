import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/form.css"
import Loading from './loading'
import React, { useEffect, useState, useRef } from 'react'
import { connect, useDispatch} from 'react-redux'
import { fetchUsers, nameError, validateUser } from '../redux/userActions'

function FormContent(props) {

    //const [active, setActive] = useState(false)

    const checkbox = useRef();
    const fio = useRef()
    const email= useRef()
    const tel = useRef()
    const comment = useRef()

    const dispatch = useDispatch();
    console.log("is loading - " + props.loadingProgress);

    useEffect(() => {
        setInputValues();
        validate();
    }, []);

    function ClearInputs()
    {
        fio.current.value = '';
        email.current.value = '';
        tel.current.value = '';
        comment.current.value = '';
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
            fio.current.value = data.fio;
            email.current.value = data.email;
            tel.current.value = data.tel;
            comment.current.value = data.comment;
        }
    }

    function safeToLocalStorage()
    {
        console.log(fio.current.value, tel.current.value, email.current.value, comment.current.value);
        localStorage.user = JSON.stringify({fio: fio.current.value, tel: tel.current.value, email: email.current.value, comment: comment.current.value,});
        validate();
    }

    function validate()
    {
        dispatch(validateUser());
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
                <input type="text" ref={fio} onChange={()=>{safeToLocalStorage();}} class="form-control" id="name" placeholder="Ваше имя"/>
                {props.nameError!="" && 
                <div class="invalid">
                    {props.nameError}
                </div>}
            </div>
            <div class="form-group">
                <label htmlFor="phone" for="phone"></label>
                <input type="tel" ref={tel} onChange={() => { safeToLocalStorage(); }} class="form-control" id="phone"  placeholder="Телефон"/>
                {props.telError!="" && 
                <div class="invalid">
                    {props.telError}
                </div>}
            </div>
            <div class="form-group">
                <label for="email"></label>
                <input type="email" ref={email} onChange={() => { safeToLocalStorage();}} class="form-control" id="email" placeholder="E-mail"/>
                {props.emailError!="" && 
                <div class="invalid">
                    {props.emailError}
                </div>}
            </div>
            <div class="form-group">
                <label for="comment"></label>
                <textarea rows="6" type="text" ref={comment} onChange={() => { safeToLocalStorage();}} class="form-control" id="comment" placeholder="Ваш комментарий"/>
                {props.commentError != "" && 
                <div class="invalid">
                    {props.commentError}
                </div>}
            </div>
            <div class="form-check">
                <input ref={checkbox} class="form-check-input" type="checkbox" onChange={() => {validate();}} id="agree" required/>
                <label class="form-check-label" for="agree">
                    Отправляя заявку, я даю согласие на обработку своих персональных данных
                </label>
            </div>
            <button type="submit" disabled={!(props.nameError === "" && props.emailError === "" && props.telError === "" && props.commentError === "" && checkbox.current.checked)} onClick={(e) => onSubmit(e)} class="form-button">Оставить заявку!</button>    
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
