import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/form.css"
import React, { useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useRef } from 'react'
import FormContent from './formContent'

function Form() {
    
    const navigate = useNavigate();
    const form = useRef();
  
    const closeForm = () =>{
      navigate("/");
    }

    useEffect(() => {
      OpenAnimation();
  }, []);

    function onClose(e)
    {
      e.preventDefault();
      e.stopPropagation();

      // После добавления анимации обязательно заменить данную строку вызовом функции анимации закрытия (CloseAnimation),
      // в которой после окончания анимации уже будет вызвана closeForm().
      CloseAnimation();
    }

    function CloseAnimation()
    {
      const duration = 500;

        let startAnimation = null;
        requestAnimationFrame(function measure(time)
        {
            if(!startAnimation)
              startAnimation = time;

            const progress = (time-startAnimation) / duration;

            form.current.style.opacity = 1 - progress;
            form.current.style.transform = `translate(-50%, -50%) scale(${1 - progress})`;

            if(progress < 1)
              requestAnimationFrame(measure)
            else closeForm();
        })
    }

    function OpenAnimation()
    {
        const duration = 500;

        let startAnimation = null;
        requestAnimationFrame(function measure(time)
        {
            if(!startAnimation)
              startAnimation = time;

            const progress = (time-startAnimation) / duration;

            form.current.style.opacity = progress;
            form.current.style.transform = `translate(-50%, -50%) scale(${progress})`;

            if(progress < 1)
              requestAnimationFrame(measure)
        })
    }

  return (
  <div class="form" ref={form}>
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