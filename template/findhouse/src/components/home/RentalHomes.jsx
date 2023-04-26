import Link from "next/link";
import rentalHomes from "../../data/rentalHomes";

const RentalHomes = () => {
  return (
    <>
      {rentalHomes.slice(0, 3).map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8" key={item.id}>
          <Link href="#">
            <a className="property_city_home6">
              <div className="thumb">
                <img className="img-fluid w100" src={item.img} alt="pc1.jpg" />
              </div>
              <div className="details">
                <h3>{item.name}</h3>
                {/* <p>{item.number} Properties</p> */}
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default RentalHomes;
