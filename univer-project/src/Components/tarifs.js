import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/tarifs.css"
import {useNavigate} from 'react-router-dom'

function Tarifs() {

    const navigate = useNavigate();
  
    const OpenForm = () =>{
      navigate("/form");
    }

  return (
    <div class="tarifs">
        <div class="container">
            <div class="tarif-title">
                Тарифы
            </div>
            <div class="row">
                <div class="col-md-4 card">
                    <div class="card-content">
                        <div class="card-title">
                            Стартовый
                        </div>
                        <div class="card-price">
                            2000<span class="sign"> ₽</span>     
                        </div>
                        <div class="card-price-time">
                            в час
                        </div>
                        <div class="card-list-content">
                            <ul class="card-list">
                                <li class="card-list-item">
                                    Предоплата от 2 часов
                                </li>
                                <li class="card-list-item">
                                    Консультации и работы по SEO
                                </li>
                                <li class="card-list-item">
                                    Услуги дизайнера
                                </li>
                                <li class="card-list-item">
                                    Стандартное время реакции
                                </li>
                                <li class="card-list-item">
                                    Неиспользованные оплаченные часы переносятся на следующий месяц
                                </li>
                            </ul>
                        </div>
                        <button onClick={() => OpenForm()} class="card-button unactive">Оставить заявку!</button>
                    </div>
                </div>
                <div class="col-md-4 card">
                    <div class="card-content">
                        <div class="card-title">
                            Бизнес
                        </div>
                        <div class="card-price">
                            2000<span class="sign"> ₽</span>     
                        </div>
                        <div class="card-price-time">
                            в час
                        </div>
                        <div class="card-list-content">
                            <ul class="card-list">
                                <li class="card-list-item">Предоплата от 10 часов</li>
                                <li class="card-list-item">Консультации и работы по SEO</li>
                                <li class="card-list-item">Услуги дизайнера</li>
                                <li class="card-list-item">Высокое время реакции –<br/>до 2 рабочих дней</li>
                                <li class="card-list-item">Неиспользованные часы не переносятся</li>
                            </ul>
                        </div>
                        <button onClick={() => OpenForm()} class="card-button active">Оставить заявку!</button>
                    </div>
                </div>
                <div class="col-md-4 card">
                    <div class="card-content">
                        <div class="card-title">
                            VIP
                        </div>
                        <div class="card-price">
                            1800<span class="sign"> ₽</span>     
                        </div>
                        <div class="card-price-time">
                            в час
                        </div>
                        <div class="card-list-content">
                            <ul class="card-list">
                                <li class="card-list-item">Предоплата от 100 часов</li>
                                <li class="card-list-item">Консультации и работы по SEO</li>
                                <li class="card-list-item">Услуги дизайнера</li>
                                <li class="card-list-item">Максимальное время<br/>реакции – в день обращения</li>
                                <li class="card-list-item">Неиспользованные часы не переносятся</li>
                            </ul>
                        </div>
                        <button onClick={() => OpenForm()} class="card-button unactive">Оставить заявку!</button>
                    </div>
                </div>
            </div>
            <div class="tarif-comment">
                Вам не подходят наши тарифы? Оставьте заявку и мы<br/> предложим вам индивидуальные условия!
            </div>
            <div class="tarif-href">
                Получить индивидуальный тариф
            </div>
        </div>        
    </div>
  );
}

export default Tarifs;

