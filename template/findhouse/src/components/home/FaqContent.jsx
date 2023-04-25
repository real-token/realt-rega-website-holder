const FaqContent = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div id="headingOne">
            <button
              className="btn btn-link accordion-button collapsed home-faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <h3>Important Information</h3>
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <p className="pb10">
                    Arrived Holdings, Inc. ("Arrived"), as a manager of Arrived
                    Homes, LLC operates the <span className="title-blue">arrived.com </span>website (the "Site") and
                    is not a broker-dealer or investment advisor. All securities
                    related activity is conducted through Dalmore Group LLC, a
                    registered broker-dealer and member of <span className="title-blue">FINRA</span>/<span className="title-blue">SIPC</span>, located
                    at 525 Green Place, Woodmere, NY 11598. You can review the
                    <span className="title-blue">brokercheck for Dalmore</span>. An up-to-date <span className="title-blue">Dalmore Form CRS</span> is
                    available.
                  </p>
                  <p className="pb10">
                    You should speak with your financial advisor, accountant
                    and/or attorney when evaluating any offering. Neither
                    Arrived, Arrived Homes, LLC, nor Dalmore makes any
                    recommendations or provides advice about investments, and no
                    communication, through this website or in any other medium,
                    should be construed as a recommendation for any security
                    offered on or off this investment platform. The Site may
                    make forward-looking statements. You should not rely on
                    these statements but should carefully evaluate the offering
                    materials in assessing any investment opportunity, including
                    the complete set of risk factors that are provided as part
                    of the offering circular for your consideration.
                  </p>
                  <p className="pb10">
                    Arrived Homes, LLC is conducting public offerings pursuant
                    to Regulation A, as amended, through the Site. The <span className="title-blue">offering
                    circular for Arrived Homes, LLC</span> is available. Past
                    performance is no guarantee of future results. Investments
                    such as those on the Arrived platform are speculative and
                    involve substantial risks to consider before investing,
                    outlined in the respective offering materials and including,
                    but not limited to, illiquidity,
                  </p>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <p className="pb10">
                    lack of diversification and complete loss of capital. Key
                    risks include, but are not limited to, limited operating
                    history, limited diversification, risk of asset damage or
                    theft and lack of voting rights. Also, the adverse economic
                    effects of the COVID-19 pandemic remain unknown and could
                    materially impact this investment. An investment in an
                    offering constitutes only an investment in a particular
                    series and not in Arrived Homes, LLC or the underlying
                    asset(s). Investors should carefully review the risks
                    located in the respective offering materials for a more
                    comprehensive discussion of risk.
                  </p>
                  <p className="pb10">
                    From time to time, Arrived Homes, LLC will seek to qualify
                    additional series offerings of securities under regulation
                    A. For offerings that have not yet been qualified, no money
                    or other consideration is being solicited and, if sent in
                    response, will not be accepted. No offer to buy securities
                    of a particular offering can be accepted, and no part of the
                    purchase price can be received, until an offering statement
                    filed with the Securities and Exchange Commission (the
                    "SEC") relating to that series has been qualified by the
                    SEC. Any such offer may be withdrawn or revoked, without
                    obligation or commitment of any kind, at any time before
                    notice of acceptance given after the date of qualification
                    by the SEC. An indication of interest involves no obligation
                    or commitment of any kind.
                  </p>
                  <p className="pb10">
                    Investment overviews contained herein contain summaries of
                    the purpose and the principal business terms of the
                    investment opportunities. Such summaries are intended for
                    informational purposes only and do not
                  </p>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <p className="pb10">
                    purport to be complete, and each is qualified in its
                    entirety by reference to the more-detailed discussions
                    contained in the respective offering circular filed with the
                    SEC.
                  </p>
                  <p className="pb10">
                    Arrived Homes, LLC does not offer refunds after an
                    investment has been made. Please review the relevant
                    offering materials and subscription documentation for more
                    information.
                  </p>
                  <p className="pb10">
                    An active trading market for any series of Arrived Homes,
                    LLC interests may not develop or be sustained. If an active
                    public trading market for Arrived Homes, LLC series
                    interests does not develop or is not sustained, it may be
                    difficult or impossible for you to resell your interests at
                    any price. Even if an active market does develop, the market
                    price could decline below the amount you paid for your
                    interests. There is no assurance that the Arrived platform
                    will provide an active market for resales of Arrived Homes,
                    LLC series interests. Further, without the Arrived platform,
                    it may be difficult or impossible for you to dispose of your
                    interests. If the market develops for any series of Arrived
                    Homes, LLC interests, the market price of such interests
                    could fluctuate significantly for many reasons, including
                    reasons unrelated to performance, the underlying assets or
                    any series, such as reports by industry analysts, investor
                    perceptions or announcements by competitors regarding their
                    own performance, as well as general economic and industry
                    conditions.
                  </p>
                  <p className="pb10">
                    For additional risk factors and disclaimer information, you
                    can review our <span className="title-blue">communications disclaimer.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .card */}
      </div>
    </>
  );
};

export default FaqContent;
