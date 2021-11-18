import Image from "next/image";
import Link from "next/link";

function About() {
    return (
      <div>
        <section id="about" className="about_area section-padding">
          <div className="ca-starts-in">
            <h3>About Hippo U</h3>
            <span className="spanline">
              <Image src="/hippo.png" width="25px" height="25px" alt="Image" />
            </span>

            <div className="container custpadabout">
              <div className="row aligncenter">
                <div
                  className="col-lg-6 col-sm-12 col-xs-12 wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset={0}
                >
                  <div className="about-text">
                    <h5 className="textleft">Starts on Nov 26th 2021</h5>
                    <p className="textleft">
                      Hippo University will soon be a virtual school existing on
                      the metaverse. Created and maintained by the
                      Cryptocurrency club at UMass Amherst, Hippo U offers an
                      inclusive and innovative community for prospective
                      members. Built by students who are displeased with the
                      current education system, we are building a community
                      where we empower and support all of our fellow hippos.
                      Claim your unique hippopotamus student or teacher, and
                      join us as we help support an endangered population, build
                      lifelong friendships, and learn about what really matters
                      to people. Refer to our roadmap to further explore how we
                      plan on executing our mission.
                    </p>
                  </div>
                  <div className="about_btn">
                    <Link href="#">
                      <a className="video-play btn_one">View Details</a>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-sm-12 col-xs-12 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                  data-wow-offset={0}
                >
                  <div className="about-img">
                    <Image
                      src="/img2.jpeg"
                      width="400px"
                      height="400px"
                      className="img-fluid wow pulse"
                      alt="about-image"
                      data-wow-iteration="infinite"
                      data-wow-duration="2000ms"
                    />
                  </div>
                </div>
              </div>
              {/*- END ROW */}
            </div>
          </div>

          {/*- END CONTAINER */}
        </section>
      </div>
    );
}

export default About
