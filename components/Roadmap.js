import Image from "next/image";

function Roadmap() {
  return (
    <div>
      <section id="roadmap" className="roadmap_area section-padding">
        <div className="container">
          <div className="ca-starts-in ">
            <h3>Road Map</h3>
            <span className="spanline">
              <Image src="/hippo.png" width="25px" height="25px" alt="hippo" />
            </span>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="timeline">
                <div
                  className="time_contain time_left wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset={0}
                >
                  <div className="time_content">
                    <h2>Merch</h2>
                    <p>
                      We Reward the members of our community for holding their
                      hippos! Any member that holds their hippo for seven days
                      will receive a high-quality Hippo U T-shirt with their in
                      any color of you choosing.
                    </p>
                    <p>
                      Hold your hippo for 30 days and you will receive a blanket
                      with your hippo on it.
                    </p>
                    <p>
                      Hold you hippo for one year and you will be rewarded your
                      graduation diploma and will be air dropped and adult hippo
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_right wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset={0}
                >
                  <div className="time_content">
                    <h2>Donations</h2>
                    <p>
                      The two most common types of hippos are labeled as
                      vulnerable and endangered.
                    </p>
                    <p>
                      Here at Hippo U, we want to change that! 50% off all
                      royalties will be donated to WWF and to put towards
                      “adopting” hippos…
                    </p>
                    <p>
                      It costs $60 to adopt a hippo. For every 100 hippos
                      adopted, We will donate an additional 1ETH to WWF. Let’s
                      all come together #Savethehippos
                    </p>
                  </div>
                </div>

                <div
                  className="time_contain time_left wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                  data-wow-offset={0}
                >
                  <div className="time_content">
                    <h2>Community Wallet</h2>
                    <p>
                      We will allocate 3 eth per month towards other NFT
                      projects. We will hold a community-wide vote (1 Hippo=1
                      Vote) towards what project we wish to support. We will
                      then hold the project in our community wallet and hold
                      weekly polls on how to manage the wallet. All profits will
                      be split evenly amongst hippos. We can’t wait to support
                      other projects in the NFT Space!
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_right wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                  data-wow-offset={0}
                >
                  <div className="time_content">
                    <h2>Community Involvement</h2>
                    <p>
                      We will hold weekly zoom “classes” led by our founders. We
                      will look to invite prominent voices in the NFT community
                      to join us. We can discuss crypto/nft investment
                      strategies, how to future support hippos, and basically
                      anything we wish to discuss. We aim towards building a
                      REAL campus community of friends who help support each
                      other.
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_left wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.7s"
                  data-wow-offset={0}
                >
                  <div className="time_content">
                    <h2>Campus Involvement</h2>
                    <p>
                      Each Hippo is placed into a club, team, or fraternity.
                      There are 50 students organization, as well as 15 Unique
                      positions. These include Headmaster, student body
                      president, prom king… ETC. There will be weekly
                      competitions between organizations include poker
                      tournaments, video game competitions, and trivia. 25% of
                      volume royalties will be allocated towards prizes for
                      these weekly competitions.
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_right wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                  data-wow-offset={0}
                >
                  <div className="time_content">
                    <h2>Metaverse</h2>
                    <p>
                      We will be allocating a portion of minting revenue towards
                      building the Hippo U campus on the Metaverse! We plan on
                      buying land on Decentraland and building our school there.
                      In our MetaCampus, hippos will be able to interact with
                      other hippos, attend classes, and compete in our weekly
                      competitions betweens clubs and fraternities. We will also
                      host exclusive meetings with prominent speakers from the
                      NFT space.
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_left wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.7s"
                  data-wow-offset={0}
                >
                  <div className="time_content">
                    <h2>Future access</h2>
                    <p>
                      All of our Hippo students will have early access to future
                      universities added to our ecosystem. We are just getting
                      started in this space! Many more exciting things to come
                      from our team, stay tuned!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
    </div>
  );
}

export default Roadmap;
