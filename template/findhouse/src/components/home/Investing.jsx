import Link from "next/link";
import investing from "../../data/investing";

const Investing = () => {
  return (
    <>
      {investing.map((item) => (
        <div className="col-sm-6 col-lg-3" key={item.id}>
          <Link href="#">
            <a
              className="icon_hvr_img_box image-1 d-block"
              style={{
                backgroundImage: `url(${item.bgImg})`,
              }}
            >
              <div className="overlay">
                <div className="icon">
                  <span className={item.icon}></span>
                </div>
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Investing;
