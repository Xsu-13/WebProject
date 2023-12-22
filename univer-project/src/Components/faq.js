import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/faq.css"
import $, { event } from "jquery"
import React, { useRef, useState, useEffect } from 'react'

function FAQ() {
    
    let classMainName = "question-item";
    let classActive = "activeAnswer";
    let classActiveBorder = "active-border";

    useEffect(() => {
        $('.question-item').on('click', function (e) {
            e.preventDefault();
            if($(this).hasClass('activeAnswer'))
            {
                console.log($(this));
                $(this).removeClass(classActive);
                $(this).removeClass(classActiveBorder);
            }
            else{
                $(this).addClass(classActive);
                $(this).addClass(classActiveBorder);
            }          
        });
    });

    return (
        <div class="block-faq">
            <div class="container">
                <div class="block-name-faq">
                    FAQ
                </div>
                <div class="question">
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title block-title">
                                Кто непосредственно занимается поддержкой?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Сайты поддерживают штатные сотрудники ООО «Инитлаб», г. Краснодар, прошедшие специальное
                                обучение и
                                имеющие опыт работы
                                с Друпал от 4 до 15 лет: 8 web-разработчиков, 2 специалиста по SEO, 4 системных
                                администратора.
                            </p>
                        </div>
                    </div>
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Как организована работа поддержки?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Клиент выбирает один из тарифов и делает предоплату. Все заявки на работы по сайту заводятся
                                в нашу систему Service desk.
                                В течение времени реакции по тарифу закрепленный за проектом специалист приступает к
                                выполнению заявки, фиксирует время,
                                потраченное на выполнение заявки и закрывает заявку по окончанию работы. Клиент может
                                посмотреть
                                все
                                заявки в работе и
                                отработанные часы в своем кабинете через веб-интерфейс.
                            </p>
                        </div>
                    </div>

                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Что происходит, когда отработаны все предоплаченные часы за месяц?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Мы уведомляем Клиента, о том, что последующие заявки в этом месяце будут выполняться с
                                доплатой
                                согласно тарифу либо будут
                                перенесены по срокам на следующий месяц. В конце месяца, в котором были заявки с доплатой,
                                клиентам
                                отправляется счет на
                                доплату по факту выполненных работ сверх предоплаты тарифного плана.
                            </p>
                        </div>
                    </div>

                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Что происходит, когда не отработаны все предоплаченные часы за месяц?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Предоплата не переносится на следующий месяц и деньги не возвращаются. Для продолжения
                                поддержки
                                сайта необходимо оплатить предоплату согласно выбранному тарифу за следующий месяц.
                            </p>
                        </div>
                    </div>

                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Как происходит оценка и согласование планируемого времени на выполнение заявок?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Заявки, выполнение которых укладывается в оставшееся предоплаченное время, по умолчанию не
                                оцениваются и время не согласовывается, мы стараемся сэкономить время и быстро выполнить
                                работу.
                                Если видим, что задача не укладывается в предоплаченное время, то делаем примерную оценку по
                                времени
                                и согласовываем оценку трудоемкости с Клиентом. Клиент может явно попросить предварительно
                                оценить
                                работу по времени и согласовать трудоемкость, направив заявку с припиской в теме письма
                                «Оценить
                                работу». В этом случае время на оценку также оплачивается согласно тарифу поддержки. Если
                                время
                                фактического выполнения превышает заранее согласованное, то уточняем оценку, договариваемся
                                о
                                возможной доплате и переносе сроков по задаче. На наше усмотрение большие задачи,
                                трудоемкость
                                которых мы можем заранее оценить, например, разработка отдельных модулей или самостоятельных
                                разделов сайта по подробному техническому заданию, могут быть вынесены из поддержки в
                                отдельный
                                проект на договорных условиях.
                            </p>
                        </div>
                    </div>
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Сколько программистов выделяется на проект?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <div class="question-ul">
                                1-2 человека. За каждым проектом закрепляется один ответственный специалист, через которого
                                проходят
                                все заявки. Все заявки становятся в очередь к ответственному в порядке их поступления в
                                Helpdesk.
                                Возможно привлечение дополнительных штатных специалистов в поддержку проекта в случаях,
                                когда:
                                <ul>
                                    <li>объем заявок стабильно большой и ответственный не успевает выполнять задачи;</li>
                                    <li>ответственный не может начать работу по заявке в срок (заболел, ушел в отпуск);</li>
                                    <li>специфика задачи такова, что кто-то в команде сделает эту работу существенно быстрее.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Как подать заявку на внесение изменений на сайте?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Для подачи заявки на внесение изменений на сайте необходимо написать письмо на email
                                поддержки с
                                указанием в теме письма домена сайта и подробным описанием вносимых изменений.
                            </p>
                        </div>
                    </div>
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Как подать заявку на добавление пользователя, изменение настроек веб-сервера и других задач
                                по
                                администрированию?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Для любых задач по администрированию необходимо написать письмо на email поддержки с
                                указанием
                                домена сайта и описанием задачи.
                            </p>
                        </div>
                    </div>
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                В течение какого времени начинается работа по заявке?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Время реакции зависит типа заявки и от выбранного тарифного плана. Время реакции на сбои,
                                обнаруживаемые системой мониторинга, от 2-х часов в рабочее время. Время реакции на заявки
                                по
                                доработке сайта от 24-х часов в рабочее время. Время реакции может быть более гибко
                                определено в
                                SLA.
                            </p>
                        </div>
                    </div>
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                В какое время работает поддержка?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Время работы поддержки с 10 до 18 часов (MSK, GMT+3) в рабочие дни. Мы также можем выполнять
                                работы
                                сверхурочно по договоренности с оплатой по двойной ставке часа.
                            </p>
                        </div>
                    </div>
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Подходят ли услуги поддержки, если необходимо произвести обновление ядра Drupal или модулей?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Обновление безопасности в рамках одной ветки Drupal делается в режиме поддержки на всех
                                тарифных
                                планах. Обновление, связанное с переходом на следующую ветку Drupal, например апгрейд с 6.х
                                на
                                7.х,
                                лучше делать в рамках отдельного проекта, стоимость и сроки которого мы можем предложить
                                после
                                проведения аудита апгрейда. Аудит апгрейда включает в себя анализ путей миграции и
                                трудоемкости
                                обновления для всех модулей, блоков кода, Views, тем оформления, стоит от 6500 рублей и, как
                                правило, занимает 1-3 дня, в зависимости от размера сайта.
                            </p>
                        </div>
                    </div>
                    <div className={classMainName}>
                        <div class="question-header">
                            <div class="question-title">
                                Можно ли пообщаться со специалистом голосом или в мессенджере?
                            </div>
                            <button class="question-toggle"></button>
                        </div>
                        <div class="question-content">
                            <p>
                                Для этого нужно написать заявку на консультацию на email поддержки и сообщить удобное время
                                и
                                контактные данные.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;