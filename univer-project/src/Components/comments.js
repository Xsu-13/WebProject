import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/comments.css"
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div style={{...style}} className={className} onClick={onClick} class="slick-prev comment-arrow-prev slick-arrow">
            <img src="images/arrow-left.svg" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
        </div>
    );
  }
  
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div style={{...style}} className={className} onClick={onClick} class="slick-next comment-arrow-next slick-arrow">
            <img src="images/arrow-right.svg" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
        </div>
    );
  }

function Comments() {

    const customeSlider = useRef();
    let [currentSlide, setSlide] = useState("01");

    const prev = () => {
        customeSlider.current.slickNext();
        var i = parseInt(currentSlide) - 1;
        var result;
        if(i < 1)
            result = "08";
        else
            result = "0" + i;
        setSlide(result);
      };
    
      const next = () => {
        customeSlider.current.slickPrev();
        var i = parseInt(currentSlide) + 1;
        var result;
        if(i > 8)
            result = "01";
        else
            result = "0" + i;
        setSlide(result);
      };

    var settings={
        adaptiveHeight:true,
        centerMode:false,
        slidesToShow: 1,
        autoplay: false,
        dots:false,
        draggable: false,
        fade: true,
        arrows: false
    }

  return (
    <div class="comments" id='comments'>
        <div class="container">
            <div class="comments-title black-title">
                Отзывы
            </div>
            <div class="comment-card">
                <div class="comment-card-wrapper">
                    <div class="row">
                        <div class="col-md-8 comment-slider">
                        <Slider {...settings} ref={customeSlider} >
                            <div class="comment-card-content slider_item">
                                <div class="comment-logo">
                                    <img src="images/logo_0.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                                </div>
                                <div class="comment-text">
                                    The long search for the one and only master on the long-suffering site www.cielparfum.com which was assembled by an extremely incompetent programmer and once a month stably threatened to die, led me to the site and, as a result, to the guys from Drupal-coder. And for almost six months now, not a day has passed that I haven't been surprised and pleased with my luck! Fixed everything that didn't work - from the search to the menu display. We carried out a redesign - without departing from the desired, but with its own significant and high-quality additions. We have implemented a number of projects - contests, tests, etc. And there are countless minor repairs and improvements! And most importantly - everything is high-quality and fast (despite not the "fastest" tariff). There are questions - the wonderful Alexey will always prompt, support, repair and / or just make from scratch. There is an idea for implementation - the wonderful Sergey will discuss and offer the ideal option. There is a problem - wonderful Nadezhda and Roman will fix, correct, do! The guys proved that this CMS is a powerful and competent management system. I hope that our cooperation will last for a long time! Thanks!!!
                                </div>
                                <div class="comment-info">
                                    Sincerely, Natalia Sushkova, Head of the Web Projects Department of the Si El Perfume Group of Companies.
                                </div>
                            </div>
                            <div class="comment-card-content slider_item">
                                <div class="comment-logo">
                                    <img src="images/logo_1.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                                </div>
                                <div class="comment-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint optio est earum facere! Ut laudantium inventore, blanditiis delectus rerum illo doloremque, excepturi voluptatum, nihil praesentium sapiente quam pariatur. Tempore?
                                    Accusantium veritatis fugiat autem quam dicta quas, aperiam doloribus eveniet, ullam, illo ipsum ipsa. Nobis voluptas dignissimos aut quos reprehenderit animi blanditiis, ullam in labore explicabo! Rerum cumque mollitia voluptate.
                                </div>
                                <div class="comment-info">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint optio est earum facere! Ut laudantium inventore, blanditiis delectus rerum illo doloremque, excepturi voluptatum.
                                </div>
                            </div>
                            <div class="comment-card-content slider_item">
                                <div class="comment-logo">
                                    <img src="images/logo_2.jpg" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                                </div>
                                <div class="comment-text">
                                    The long search for the one and only master on the long-suffering site www.cielparfum.com which was assembled by an extremely incompetent programmer and once a month stably threatened to die, led me to the site and, as a result, to the guys from Drupal-coder. And for almost six months now, not a day has passed that I haven't been surprised and pleased with my luck! Fixed everything that didn't work - from the search to the menu display. We carried out a redesign - without departing from the desired, but with its own significant and high-quality additions. We have implemented a number of projects - contests, tests, etc. And there are countless minor repairs and improvements! And most importantly - everything is high-quality and fast (despite not the "fastest" tariff). There are questions - the wonderful Alexey will always prompt, support, repair and / or just make from scratch. There is an idea for implementation - the wonderful Sergey will discuss and offer the ideal option. There is a problem - wonderful Nadezhda and Roman will fix, correct, do! The guys proved that this CMS is a powerful and competent management system. I hope that our cooperation will last for a long time! Thanks!!!
                                </div>
                                <div class="comment-info">
                                    Sincerely, Natalia Sushkova, Head of the Web Projects Department of the Si El Perfume Group of Companies.
                                </div>
                            </div>
                            <div class="comment-card-content slider_item">
                                <div class="comment-logo">
                                    <img src="images/logo_3.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                                </div>
                                <div class="comment-text">
                                    The long search for the one and only master on the long-suffering site www.cielparfum.com which was assembled by an extremely incompetent programmer and once a month stably threatened to die, led me to the site and, as a result, to the guys from Drupal-coder. And for almost six months now, not a day has passed that I haven't been surprised and pleased with my luck! Fixed everything that didn't work - from the search to the menu display. We carried out a redesign - without departing from the desired, but with its own significant and high-quality additions. We have implemented a number of projects - contests, tests, etc. And there are countless minor repairs and improvements! And most importantly - everything is high-quality and fast (despite not the "fastest" tariff). There are questions - the wonderful Alexey will always prompt, support, repair and / or just make from scratch. There is an idea for implementation - the wonderful Sergey will discuss and offer the ideal option. There is a problem - wonderful Nadezhda and Roman will fix, correct, do! The guys proved that this CMS is a powerful and competent management system. I hope that our cooperation will last for a long time! Thanks!!!
                                </div>
                                <div class="comment-info">
                                    Sincerely, Natalia Sushkova, Head of the Web Projects Department of the Si El Perfume Group of Companies.
                                </div>
                            </div>
                            <div class="comment-card-content slider_item">
                                <div class="comment-logo">
                                    <img src="images/logo_2.jpg" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                                </div>
                                <div class="comment-text">
                                    The long search for the one and only master on the long-suffering site www.cielparfum.com which was assembled by an extremely incompetent programmer and once a month stably threatened to die, led me to the site and, as a result, to the guys from Drupal-coder. And for almost six months now, not a day has passed that I haven't been surprised and pleased with my luck! Fixed everything that didn't work - from the search to the menu display. We carried out a redesign - without departing from the desired, but with its own significant and high-quality additions. We have implemented a number of projects - contests, tests, etc. And there are countless minor repairs and improvements! And most importantly - everything is high-quality and fast (despite not the "fastest" tariff). There are questions - the wonderful Alexey will always prompt, support, repair and / or just make from scratch. There is an idea for implementation - the wonderful Sergey will discuss and offer the ideal option. There is a problem - wonderful Nadezhda and Roman will fix, correct, do! The guys proved that this CMS is a powerful and competent management system. I hope that our cooperation will last for a long time! Thanks!!!
                                </div>
                                <div class="comment-info">
                                    Sincerely, Natalia Sushkova, Head of the Web Projects Department of the Si El Perfume Group of Companies.
                                </div>
                            </div>
                            <div class="comment-card-content slider_item">
                                <div class="comment-logo">
                                    <img src="images/logo_3.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                                </div>
                                <div class="comment-text">
                                    The long search for the one and only master on the long-suffering site www.cielparfum.com which was assembled by an extremely incompetent programmer and once a month stably threatened to die, led me to the site and, as a result, to the guys from Drupal-coder. And for almost six months now, not a day has passed that I haven't been surprised and pleased with my luck! Fixed everything that didn't work - from the search to the menu display. We carried out a redesign - without departing from the desired, but with its own significant and high-quality additions. We have implemented a number of projects - contests, tests, etc. And there are countless minor repairs and improvements! And most importantly - everything is high-quality and fast (despite not the "fastest" tariff). There are questions - the wonderful Alexey will always prompt, support, repair and / or just make from scratch. There is an idea for implementation - the wonderful Sergey will discuss and offer the ideal option. There is a problem - wonderful Nadezhda and Roman will fix, correct, do! The guys proved that this CMS is a powerful and competent management system. I hope that our cooperation will last for a long time! Thanks!!!
                                </div>
                                <div class="comment-info">
                                    Sincerely, Natalia Sushkova, Head of the Web Projects Department of the Si El Perfume Group of Companies.
                                </div>
                            </div>
                            <div class="comment-card-content slider_item">
                                <div class="comment-logo">
                                    <img src="images/logo_4.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                                </div>
                                <div class="comment-text">
                                    The long search for the one and only master on the long-suffering site www.cielparfum.com which was assembled by an extremely incompetent programmer and once a month stably threatened to die, led me to the site and, as a result, to the guys from Drupal-coder. And for almost six months now, not a day has passed that I haven't been surprised and pleased with my luck! Fixed everything that didn't work - from the search to the menu display. We carried out a redesign - without departing from the desired, but with its own significant and high-quality additions. We have implemented a number of projects - contests, tests, etc. And there are countless minor repairs and improvements! And most importantly - everything is high-quality and fast (despite not the "fastest" tariff). There are questions - the wonderful Alexey will always prompt, support, repair and / or just make from scratch. There is an idea for implementation - the wonderful Sergey will discuss and offer the ideal option. There is a problem - wonderful Nadezhda and Roman will fix, correct, do! The guys proved that this CMS is a powerful and competent management system. I hope that our cooperation will last for a long time! Thanks!!!
                                </div>
                                <div class="comment-info">
                                    Sincerely, Natalia Sushkova, Head of the Web Projects Department of the Si El Perfume Group of Companies.
                                </div>
                            </div>
                            <div class="comment-card-content slider_item">
                                <div class="comment-logo">
                                    <img src="images/logo_5.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                                </div>
                                <div class="comment-text">
                                    The long search for the one and only master on the long-suffering site www.cielparfum.com which was assembled by an extremely incompetent programmer and once a month stably threatened to die, led me to the site and, as a result, to the guys from Drupal-coder. And for almost six months now, not a day has passed that I haven't been surprised and pleased with my luck! Fixed everything that didn't work - from the search to the menu display. We carried out a redesign - without departing from the desired, but with its own significant and high-quality additions. We have implemented a number of projects - contests, tests, etc. And there are countless minor repairs and improvements! And most importantly - everything is high-quality and fast (despite not the "fastest" tariff). There are questions - the wonderful Alexey will always prompt, support, repair and / or just make from scratch. There is an idea for implementation - the wonderful Sergey will discuss and offer the ideal option. There is a problem - wonderful Nadezhda and Roman will fix, correct, do! The guys proved that this CMS is a powerful and competent management system. I hope that our cooperation will last for a long time! Thanks!!!
                                </div>
                                <div class="comment-info">
                                    Sincerely, Natalia Sushkova, Head of the Web Projects Department of the Si El Perfume Group of Companies.
                                </div>
                            </div>
                        </Slider>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="comment-navigation">
                                <div class="comment-navigation-wrapper">
                                    <PrevArrow onClick={prev} />
                                    <div class="comment-num-text">
                                        <span class="current-num">{currentSlide}</span><span class="sum-num"> / 08</span>
                                    </div>
                                    <NextArrow onClick={next} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Comments;

