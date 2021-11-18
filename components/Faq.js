import Image from "next/image";

function Faq() {
  return (
    <div>
      <section id="faq" className="faq1-area section-padding">
        <div className="container">
          <div className="ca-starts-in ">
            <h3>FAQ</h3>
            <span className="spanline">
              <Image src="/hippo.png" width="25px" height="25px" alt="Image" />
            </span>
            <h5>Frequently Ask Questions</h5>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-12 col-sm-12 col-xs-12 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      WHAT IS AN NFT?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      NFT stands for “Non-fungible token” and is a way of saying
                      it’s a unique, one of a kind digital item that users can
                      buy, own, and trade. Some NFTs main function are to be
                      digital art and look cool, some offer additional utility
                      like exclusive access to websites or participation in an
                      event, think of it like a rare piece of art that can also
                      act as a “members” card. Specific to each NFT is a digital
                      certificate that validates it as a one-of-a-kind asset via
                      its unique metadata. Owning an Hippo Army NFT is your
                      entry to the Burrow-Verse and all the cool perks and
                      rewards to follow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      WHEN IS THE LAUNCH?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Presale November 26th, Official sale November 28th
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      WHEN WILL MY HIPPO U REVEAL?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Pre-sale Minting will occur at 7:00pm EST on 11/26/21. The
                      Official Sale will follow at the same time on 11/28/21.
                      Hippos will reveal immediately following the official
                      sale.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*END  ROW  */}
        </div>
        {/* END CONTAINER  */}
      </section>
    </div>
  );
}

export default Faq;
