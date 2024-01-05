import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/form.css"
import React, { useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useRef } from 'react'
import FormContent from './formContent'

function Form() {
    
    const navigate = useNavigate();
  
    const closeForm = () =>{
      navigate("/");
    }

    function onClose(e)
    {
      e.preventDefault();
      e.stopPropagation();

      //После добавления анимации обязательно заменить данную строку вызовом функции анимации закрытия (CloseAnimation),
      // в которой после окончания анимации уже будет вызвана closeForm().
      closeForm();
    }

    function CloseAnimation()
    {

    }

    function OpenAnimation()
    {

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
