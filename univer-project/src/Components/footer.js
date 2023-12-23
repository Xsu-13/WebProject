import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/Header.css"
import FormContent from './formContent'

function Footer() {
  return (
    <footer id="contacts">
        <div class=" container">
            <div class="footerIndent">
                <div>
                    <div class="row">
                        <div class="neform col-md-6">
                            <div>
                                <div class="block-form-wrapper">
                                    <div class="block-form-title">Оставить заявку на <br/> поддержку сайта</div>
                                    <div class="block-form-description">Срочно нужна поддержка сайта? Ваша команда
                                        не успевает справиться самостоятельно или предыдущий подрядчик не справился
                                        с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с
                                        вами свяжется!</div>
                                    <div class="block-form-contacts">
                                        <ul>
                                            <li class="block-form-phone"><a href="tel:88002222673"> <img class="tel" src="images/phone-line-2.png" alt=""/> 8 800 222-26-73</a></li>
                                            <li class="block-form-email"><a href="mailto:info@drupal-coder.ru"> <img class="mial" src="images/mail.png" alt=""/> info@drupal-coder.ru</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="f col-md-6">
                            <FormContent />
                        </div>
                    </div>
                </div>
                
                <div id="block-copyright" class="block block-block-content clearfix">
                    <div class="field">
                        <p>Проект ООО «Инитлаб», Краснодар, Россия.<br/>
                            Drupal является зарегистрированной торговой маркой Dries Buytaert.</p>
                    </div>
                </div>
            </div>
        </div>
<div class="line"></div>
    </footer>   
  );
}

export default Footer;