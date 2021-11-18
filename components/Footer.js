import Link from "next/link";
import Image from 'next/image'

function Footer() {
  return (
    <div>
      <span className="spanline footerspanline">
        <Image src="/hippo.png" width="25px" height="25px" alt="Image" />
      </span>
      <div className="footer">
        <div className="container">
          <div className="row text-center aligncenter">
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div>
                <Image
                  src="/footerlogo.jpeg"
                  alt="footer-image"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="footer_menu">
                <ul>
                  <li className="">
                    <Link href="#about">
                      <a className="">About Hippo U</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#roadmap">
                      <a className="">Road Map</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#faq">
                      <a className="">FAQ</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#team">
                      <a className="">Team</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div>
                <h2 className="h2footer">Join Us On Social Media</h2>
              </div>
              <div className="footer_profile">
                <ul>
                  <li>
                    <Link href="https://twitter.com/thehipposcampus?s=11">
                      <a>
                        <i className="fa fa-twitter" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://discord.com/invite/E3azhBqdbc">
                      <a>
                        <i className="fa fa-discord" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*- END ROW */}
          <div className="footer_copyright">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright © 2021 <span>Thehipposcampus</span> All rights
                  reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <p>Founded by the UMass Amherst Cryptocurrency Club</p>
              </div>
            </div>
          </div>
        </div>
        {/*- END CONTAINER */}
      </div>
    </div>
  );
}

export default Footer;
