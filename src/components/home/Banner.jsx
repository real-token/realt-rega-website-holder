import Link from "next/link";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    arrow: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const sliderContent = [
    {
      id: 1,
      bgImage: "slidebg-1",
      title: "Easily invest in rental homes",
      subTitle1:
        "Buy shares of properties, earn rental income and appreciation",
      subTitle2: "— let Arrived take care of the rest.",
      propertyList: [
        {
          id: 1,
          img: "assets/images/background/01.jpg",
          style: "home-item1"
        },
        {
          id: 2,
          img: "assets/images/background/02.jpg",
          style: "home-item2"
        },
        {
          id: 3,
          img: "assets/images/background/03.jpg",
          style: "home-item3"
        },
      ],
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
      {sliderContent.map((singleItem) => (
        <div
          className={`bs_carousel_bg ${singleItem.bgImage} vh-100`}
          key={singleItem.id}
        >
          <div className="carousel-slide ">
            <div className="bs-caption">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-7">
                    <div className="main_title">{singleItem.title}</div>
                    <p className="parag pb10">{singleItem.subTitle1}</p>
                    <p className="parag">{singleItem.subTitle2}</p>
                  </div>

                  <div className="col-md-6 col-lg-5">
                    {singleItem.propertyList.map((item) => (
                      <div className="item" key={item.id} id={item.style}>
                        <div className="feat_property home8">
                          <div className="details">
                            <img src={item.img} alt="" className=""/>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* End .container */}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
