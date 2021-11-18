import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import Faq from '../components/Faq'
import FooterSlideImages from '../components/FooterSlideImages'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Hippo U &#8211; Want to Save Hippos"
        />
        <meta name="keywords" content="bitcoin" />
        <title>Hippo U &#8211; Want to Save Hippos</title>
      </Head>

      <Navbar />

      <div>
        {/* START HOME */}
        <section id="home" className="home_bg">
          <div className="container">
            <div className="row aligncenter">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div
                  className="hero-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                  data-wow-offset={0}
                >
                  <h2>WELCOME TO HIPPO U</h2>
                  <h3>Here at Hippo U,</h3>
                  <p>
                    We offer an inclusive and interactive experience for all
                    members of our community. Here are some perks of being a
                    member!
                  </p>
                  <div className="home_btn">
                    <a
                      href="https://discord.com/invite/JYw8qMDV"
                      className="btn_one"
                    >
                      Join us on Discord
                    </a>
                  </div>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-6 col-sm-12 col-xs-12 text-center">
                <video
                  className="elementvideo wow fadeInRight"
                  src="https://skydigital.work/wp-content/uploads/2021/11/Attachment_1636488136.mov"
                  autoplay=""
                  loop=""
                  muted="muted"
                  playsinline=""
                  controlslist="nodownload"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                  data-wow-offset={0}
                ></video>
                {/**/}
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END  HOME */}
        {/* START ABOUT */}
        <section className="about_us section-padding div2hippo ">
          <div className="container">
            <div className="row aligncenter">
              <div className="col-md-6">
                <div
                  className="hoopiimg1 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset={0}
                >
                  <Image
                    alt="img"
                    src="/img1.jpeg"
                    className=""
                    width="500px"
                    height="500px"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="buy-icons">
                  <div className="ca-starts-in">
                    <h3>Presale</h3>
                    <span className="spanline">
                      <Image
                        alt="img"
                        src="/hippo.png"
                        width="25px"
                        height="25px"
                      />
                    </span>
                    <h5>Starts on Nov 26th 2021</h5>
                    <div className="timer-area">
                      <div data-countdown="2021/11/30" />
                    </div>
                    <div className="section-title text-center">
                      <h5>Charitable donations</h5>
                      <p>
                        For every 100 hippos adopted, We will donate an
                        additional 1ETH to WWF. Let’s all come together
                        #Savethehippos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* END ROW */}
          </div>
          {/* END CONTAINER */}
        </section>
        {/* END ABOUT */}

        <About />
        <Roadmap />
        <Team />
        <Faq />
      </div>
      <div>
        <FooterSlideImages />
        <Footer />
      </div>
    </>
  );
}
