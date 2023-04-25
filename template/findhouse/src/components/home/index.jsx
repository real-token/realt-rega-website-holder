import { useState } from "react";
import ToolTip from "react-portal-tooltip";

import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import Blogs from "../common/Blogs";
import FeaturedProperties from "./FeaturedProperties";
// import FindProperties from "./FindProperties";
import Header from "./Header";
import Hero from "./Hero";
import WhyChoose from "../common/WhyChoose";
import PopupSignInUp from "../common/PopupSignInUp";

import FaqContent from "./FaqContent";
import ComfortPlace from "./ComfortPlace";
import RentalHomes from "./RentalHomes";

const Index = () => {
  const [tooltipActive, setTooltipActive] = useState(false);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      {/* <section id="feature-property" className="feature-property bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Featured Properties</h2>
                <p>Handpicked properties by our team.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="main-title text-center home-title">
            <h2>
              We&apos;re <span className="title-blue">built</span> for people who
              wants to invest in real estate, but don&apos;t want to buy a whole home
              or deal with operational headaches.
            </h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
          <div className="row">{/* <FindProperties /> */}</div>
        </div>
      </section>

      {/* <!-- Why Chose Us --> */}
      <section id="why-chose" className="whychose_us bgc-f7 pb30">
        <div className="container">
          <div className="main-title text-center home-title">
            <h1>A Better Way to Invest in Real Estate</h1>
            {/* <p>We provide full service at every step.</p> */}
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>

      {/* <!-- Our Blog --> */}
      {/* <section className="our-blog bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Partners --> */}
      {/* <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Footer --> */}
      {/* <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section> */}

      {/* <!-- Find Comfort Place --> */}
      <section id="comfort-place" className="comfort-place pb30 bb1">
        <div className="container">
          <div className="main-title text-center home-title">
            <h2>Investing In Real Estate Has Never Been Easier</h2>
            {/* <p>
              Explore the greates places in the city. You won’t be disappointed.
            </p> */}
          </div>
          <div className="row">
            <ComfortPlace />
            <div className="parner_reg_btn text-right tac-smd comfort-btn">
              <a className="btn btn-thm2">How Works</a>
            </div>
          </div>
        </div>
      </section>

      <section id="property-city" className="property-city pb30 rental">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Rental Homes</h2>
              </div>
            </div>
          </div>
          <div className="reantalHomes">
            <RentalHomes />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="main-title text-center home-title w75">
            <h2 className="pb30">We&apos;re on a mission</h2>
            <div className="mission-content">
              <h4 className="pb20">
                At Arrived, our mission is to empower the world to build wealth
                through modern real estate investing.
              </h4>
              <h4 className="pb20">
                While residential real estate has been the{" "}
                <a
                  className="mission-tooltip title-blue"
                  onMouseEnter={() => setTooltipActive(true)}
                  onMouseLeave={() => setTooltipActive(false)}
                  id="tooltip"
                >
                  best long-run investment in modern history
                </a>
                <ToolTip
                  active={tooltipActive}
                  position="top"
                  parent="#tooltip"
                >
                  <h4>
                    The Rate of Return on Everything, 1870–2015 (
                    <span className="title-blue">2019 Research Study</span>)
                  </h4>
                  <p>
                    The first key finding is that residential real estate, not
                    equity, has been the best long-run investment over the
                    course of modern history. Although returns on housing and
                    equities are similar, the volatility of housing returns is
                    substantially lower, as Table II shows. Returns on the two
                    asset classes are in the same ballpark—around 7%—but the
                    standard deviation of housing returns is substantially
                    smaller than that of equities (10% for housing versus 22%
                    for equities). Predictably, with thinner tails, the
                    compounded return (using the geometric average) is vastly
                    better for housing than for equities—6.6% for housing versus
                    4.7% for equities. This finding appears to contradict one of
                    the basic tenets of modern valuation models: higher risks
                    should come with higher rewards.
                  </p>
                </ToolTip>
                , operational headaches and larger upfront financial commitments
                prevent many people from participating.
              </h4>
              <h4>
                By breaking down the barriers to investing in rental properties,
                we believe we can help millions of people better access this
                incredible asset class.
              </h4>
            </div>
          </div>
          <div className="row">{/* <FindProperties /> */}</div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners pt50 pb50">
        <div className="home-contact">
          <CallToAction />
        </div>
      </section>

      {/* Faq Component */}

      <section className="pb20">
        <div className="home-faq">
          <div className="faq_according">
            <FaqContent />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      {/* <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section> */}
    </>
  );
};

export default Index;
