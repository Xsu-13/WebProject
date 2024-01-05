import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/form.css"
import React, { useEffect, useState, useRef } from 'react'

function Test() {

    const fio = useRef()

    useEffect(() => {

    }, [fio]);


  return (
    <div class="black">
        <form action="https://formcarry.com/s/fCsjmrtmZ4" method="POST" accept-charset="UTF-8" >
                <input type="text" ref={fio} onChange={(e) => {console.log(fio.current.value);}} class="form-control" id="name" placeholder="Ваше имя"/>
        </form>
    </div>
    
  );
}


export default Test;