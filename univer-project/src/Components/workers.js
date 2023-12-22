import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/comments.css"
import Slider from 'react-slick'


function Workers() {

    var settings={
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        dots:false,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2
              }
            }
        ]
    }

  return (
    <div class="workers">
        <div class="container">
            <div class="black-title workers-title">С нами работают</div>
            <div class="workers-text">
                Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои<br/>сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
            </div>
        </div>
        <div class="first-slider">
        <Slider {...settings}>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-0.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-1.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-2.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-3.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-1.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-1.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
        </Slider>
        </div>
        <div class="second-slider">
        <Slider {...settings}>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-0.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-1.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-2.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-3.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-1.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>
            <div class="slider-block slider_item">
                <div class="slider-block-img">
                    <img src="images/slider-logo-1.png" alt="иконка соответсвуюшая блоку" class="img-responsive"/>
                </div>
            </div>  
        </Slider>
        </div>
    </div>
  );
}

export default Workers;