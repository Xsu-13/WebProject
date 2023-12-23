import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/our_prof.css"

function Our_prof() {
    return (
        <div class="our-professional-developers-blok">
            <div class="container">
                <div class="row">
                    <div class="block-title our-professional-developers-name">
                        Наши профессиональные разработчики
                        <br />
                        выполняют быстро любые задачи
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-3">
                        <div class="competency">
                            <div class="competency-wrapper">
                                <div class="competency-header">
                                    <div class="background-icon">
                                        <img src="images/icon-bg.svg" alt="Задний фон блока 1" class="img-responsive" />
                                    </div>
                                    <div class="competency-icon">
                                        <img src="images/competency-20.svg" alt="Иконка блока 1" class="img-responsive" />
                                    </div>
                                </div>
                                <div class="competency-body-big">
                                    от 1ч
                                </div>
                                <div class="competency-body-our-professional-developers">
                                    Настройка события GA <br /> в интернет-магазине
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xs-12 col-md-3">
                        <div class="competency">
                            <div class="competency-wrapper">
                                <div class="competency-header">
                                    <div class="background-icon">
                                        <img src="images/icon-bg.svg" alt="Задний фон блока 2" class="img-responsive" />
                                    </div>
                                    <div class="competency-icon">
                                        <img src="images/competency-21.svg" alt="Иконка блока 2" class="img-responsive" />
                                    </div>
                                </div>
                                <div class="competency-body-big">
                                    от 20ч
                                </div>
                                <div class="competency-body-our-professional-developers">
                                    Разработка мобильной <br /> версии сайта
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xs-12 col-md-3">
                        <div class="competency">
                            <div class="competency-wrapper">
                                <div class="competency-header">
                                    <div class="background-icon">
                                        <img src="images/icon-bg.svg" alt="Задний фон блока 3" class="img-responsive" />
                                    </div>
                                    <div class="competency-icon">
                                        <img src="images/competency-22.svg" alt="Иконка блока 3" class="img-responsive" />
                                    </div>
                                </div>
                                <div class="competency-body-big">
                                    от 8ч
                                </div>
                                <div class="competency-body-our-professional-developers">
                                    Интеграция <br /> модуля оплаты
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Our_prof;