import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="row">
      <div className="start_partner tac-smd">
        <div className="home-partner">
          <img className="img-fluid" src={`assets/images/header-logo2.png`} />
          <h2>Demo</h2>
        </div>

        {/* <p>We only work with the best companies around the globe</p> */}
      </div>
      {/* End .col */}

      {/* <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd">
          <Link href="/register">
            <a className="btn btn-thm2">Register Now</a>
          </Link>
        </div>
      </div> */}
      {/* End .col */}
    </div>
  );
};

export default CallToAction;
