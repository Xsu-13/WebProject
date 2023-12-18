import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/team.css"

function Team() {
  return (
    <div class="team">
        <div class="our-professional-developers-blok">
        <div class="container">
            <div class="row col-md-12">
                <div class="block-title our-professional-developers-name">
                    Наши профессиональные разработчики
                    <br/>
                    выполняют быстро любые задачи
                </div>
            </div>
            <div class="row row-flex competencies-row">
                <div class="col-sm-3 col-xs-6">
                    <div class="competency">
                        <div class="competency-wrapper">
                            <div class="competency-header">
                                <div class="background-icon"><img src="images/icon-bg.svg" alt="Задний фон блока 1"
                                        class="img-responsive"/></div>
                                <div class="competency-icon"><img src="images/competency-20.svg" alt="Иконка блока 1"
                                        class="img-responsive"/></div>
                            </div>
                            <div class="competency-body-big">
                                от 1ч
                            </div>
                            <div class="competency-body-our-professional-developers">
                                Настройка события GA <br/> в интернет-магазине
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                    <div class="competency">
                        <div class="competency-wrapper">
                            <div class="competency-header">
                                <div class="background-icon"><img src="images/icon-bg.svg" alt="Задний фон блока 1"
                                        class="img-responsive"/></div>
                                <div class="competency-icon"><img src="images/competency-21.svg" alt="Иконка блока 2"
                                        class="img-responsive"/></div>
                            </div>
                            <div class="competency-body-big">
                                от 20ч
                            </div>
                            <div class="competency-body-our-professional-developers">
                                Разработка мобильной <br/> версии сайта
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                    <div class="competency">
                        <div class="competency-wrapper">
                            <div class="competency-header">
                                <div class="background-icon"><img src="images/icon-bg.svg" alt="Задний фон блока 1"
                                        class="img-responsive"/></div>
                                <div class="competency-icon"><img src="images/competency-22.svg" alt="Иконка блока 3"
                                        class="img-responsive"/></div>
                            </div>
                            <div class="competency-body-big">
                                от 8ч
                            </div>
                            <div class="competency-body-our-professional-developers">
                                Интеграция <br/> модуля оплаты
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="block-team container">
        <div class="our-team black-title">
            Команда
        </div>
        <div class="employee-cards">
            <div class="col-xs-6 col-sm-6 col-md-4 views-row">
                <div class="new-card">
                    <div class="card-photo">
                        <img src="images/employee-cards-image1.jpg" typeof="Image" alt="Фото члена команды"
                            class="img-responsive"/>
                    </div>
                    <div class="card-name">
                        <a href="#" title="Профиль на drupal.org" target="_blank">Сергей Синица</a>
                    </div>
                    <div class="card-post">Руководитель отдела веб-разработки,канд.техн.наук, заместитель директора
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-4 views-row">
                <div class="new-card">
                    <div class="card-photo">
                        <img src="images/employee-cards-image2.jpg" typeof="Image" alt="Фото члена команды"
                            class="img-responsive"/>
                    </div>
                    <div class="card-name">
                        <a href="#" title="Профиль на drupal.org" target="_blank">Роман Агабеков</a>
                    </div>
                    <div class="card-post">Руководитель отдела DevOPS, директор</div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-4 views-row">
                <div class="new-card">
                    <div class="card-photo">
                        <img src="images/employee-cards-image3.jpg" typeof="Image" alt="Фото члена команды"
                            class="img-responsive"/>
                    </div>
                    <div class="card-name">
                        <a href="#" title="Профиль на drupal.org" target="_blank">Алексей Синица</a>
                    </div>
                    <div class="card-post"> Руководитель отдела поддержки сайтов</div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-4 views-row">
                <div class="new-card">
                    <div class="card-photo">
                        <img src="images/employee-cards-image4.jpg" typeof="Image" alt="Фото члена команды"
                            class="img-responsive"/>
                    </div>
                    <div class="card-name">
                        <a href="#" title="Профиль на drupal.org" target="_blank">Дарья Бочкарёва</a>
                    </div>
                    <div class="card-post">Руководитель отдела продвижения, контекстной рекламы и контент-поддержки
                        сайтов</div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-4 views-row">
                <div class="new-card">
                    <div class="card-photo">
                        <img src="images/employee-cards-image5.jpg" typeof="Image" alt="Фото члена команды"
                            class="img-responsive"/>
                    </div>
                    <div class="card-name">
                        <a href="#" title="Профиль на drupal.org" target="_blank">Ирина Торкунова</a>
                    </div>
                    <div class="card-post"> Менеджер по работе с клиентами </div>
                </div>
            </div>
        </div>
        <div class="all-the-team ">
            <a href="#" class="black-title">ВСЯ КОМАНДА</a>
        </div>
    </div>
    </div>
  );
}

export default Team;

