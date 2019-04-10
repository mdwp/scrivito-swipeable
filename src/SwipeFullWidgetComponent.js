import * as React from 'react';
import Slider from 'react-slick';
import * as Scrivito from 'scrivito';
import ReactMarkdown from 'react-markdown';

function urlFromBinary(binary) {
  if (!binary) {
    return null;
  }

  const blob = binary.get("blob");
  if (!blob) {
    return null;
  }

  return blob.url() || null;
}

Scrivito.provideComponent("SwipeFullWidget", ({ widget }) => {
    const items = widget.get('items');
    const settings = sliderSettings(items);

    /*if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center={ true }>
          Add content in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }*/

    return (
      <div>

        <div>

            {
              <div className="slick-gallary-fluid">

              <Slider { ...settings } className="slickslide">
                {
                  items.map((item, index) =>
                    <SwipeContent
                      widget={ item }
                      key={ `${item.id()}${index}` }

                    />)
                }
              </Slider>

            </div>
            }
          </div>


      </div>
    );
  }
)

const sectionStyle = {};
const SwipeContent = Scrivito.connect(({ widget}) => {
const backgroundImage = widget.get('backgroundImage');
  if (backgroundImage) {


    sectionStyle.background = [
      {
        image: "linear-gradient(rgba(65, 65, 60, 0.7), rgba(65, 65, 60, 0.7))",
      },
      { image: backgroundImage },
    ];



  const text = widget.get('text');
  const title = widget.get('title');

  return (
    <Scrivito.BackgroundImageTag
      tag="div"
      className="full-height"
      style={ sectionStyle }
    >
    <div className="container">
    <div className="text-white">

          <h1 className="text-white h1">{ title }</h1>
          <ReactMarkdown source={text}></ReactMarkdown>

    </div>
    </div>
    </Scrivito.BackgroundImageTag>
  );
}
else {
  const videoUrl = urlFromBinary(widget.get('video'));

    if (!videoUrl && !Scrivito.isInPlaceEditingActive()) {
      return null;
    }

    const posterUrl = urlFromBinary(widget.get('poster'));
    const src = posterUrl ? videoUrl : `${videoUrl}#t=0.01`;
  return (
    <Scrivito.ContentTag
      tag="video"
      src={ src }
      content={ widget }
      attribute="video"
      poster={ posterUrl }
      width='100%'
      autoplay="true"
    />
  );
}
});



function sliderSettings(images) {
  return {
    arrows: true,
    autoPlay: false,
    autoplaySpeed: 20000,
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    dots: false,
    fade: false,
    infinite: true,
    lazyLoad: true,
    slide: 'div',
    slidesToShow: 1,
    speed: 1000,
    variableWidth: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        centerMode: false,
      },
    }],


  };
}

