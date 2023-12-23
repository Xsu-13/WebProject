import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/team.css"

function Team() {
    return (
        <div class="team">
            <div class="block-team container">
                <div class="our-team black-title">
                    Команда
                </div>
                <div class="employee-cards">
                    <div class="col-6 col-lg-4">
                        <div class="new-card">
                            <div class="card-photo">
                                <img src="images/employee-cards-image1.jpg" typeof="Image" alt="Фото члена команды"
                                    class="img-responsive" />
                            </div>
                            <div class="card-name">
                                <a href="https://drupal-coder.ru/team" title="Профиль на drupal.org" target="_blank">Сергей Синица</a>
                            </div>
                            <div class="card-post">Руководитель отдела веб-разработки, канд.техн.наук, заместитель директора
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4">
                        <div class="new-card">
                            <div class="card-photo">
                                <img src="images/employee-cards-image2.jpg" typeof="Image" alt="Фото члена команды"
                                    class="img-responsive" />
                            </div>
                            <div class="card-name">
                                <a href="#" title="Профиль на drupal.org" target="_blank">Роман Агабеков</a>
                            </div>
                            <div class="card-post">Руководитель отдела DevOPS, директор</div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4">
                        <div class="new-card">
                            <div class="card-photo">
                                <img src="images/employee-cards-image3.jpg" typeof="Image" alt="Фото члена команды"
                                    class="img-responsive" />
                            </div>
                            <div class="card-name">
                                <a href="#" title="Профиль на drupal.org" target="_blank">Алексей Синица</a>
                            </div>
                            <div class="card-post"> Руководитель отдела поддержки сайтов</div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4">
                        <div class="new-card">
                            <div class="card-photo">
                                <img src="images/employee-cards-image4.jpg" typeof="Image" alt="Фото члена команды"
                                    class="img-responsive" />
                            </div>
                            <div class="card-name">
                                <a href="#" title="Профиль на drupal.org" target="_blank">Дарья Бочкарёва</a>
                            </div>
                            <div class="card-post">Руководитель отдела продвижения, контекстной рекламы и контент-поддержки
                                сайтов</div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4">
                        <div class="new-card">
                            <div class="card-photo">
                                <img src="images/employee-cards-image5.jpg" typeof="Image" alt="Фото члена команды"
                                    class="img-responsive" />
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

