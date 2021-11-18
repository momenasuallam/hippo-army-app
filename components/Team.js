import Image from "next/image";

function Team() {
  return (
    <div>
      <section id="team" className="team_member section-padding">
        <div className="container">
             <div className="ca-starts-in ">
            <h3>Team</h3>
            <span className="spanline">
              <Image src="/hippo.png" width="25px" height="25px" alt="hippo" />
            </span>
            </div>
          <div className="row text-center">
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <Image
                  src="/team1.jpeg"
                  className="img-fluid"
                  alt="board-image"
                  width="300px"
                  height="300px"
                />
                <h3>Kerm.eth </h3>

                <span>Co-founder</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <Image
                  src="/team2.jpeg"
                  className="img-fluid"
                  alt="board-image"
                  width="300px"
                  height="300px"
                />
                <h3>Dspa.eth </h3>

                <span>Co-founder</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <Image
                  src="/team3.jpeg"
                  className="img-fluid"
                  alt="board-image"
                  width="300px"
                  height="300px"
                />
                <h3>Tao.eth </h3>

                <span>Lead dev</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <Image
                  src="/team4.jpeg"
                  className="img-fluid"
                  alt="board-image"
                  width="300px"
                  height="300px"
                />
                <h3>Otb.eth </h3>

                <span>Head of Marketing</span>
              </div>
            </div>
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
    </div>
  );
}

export default Team;
