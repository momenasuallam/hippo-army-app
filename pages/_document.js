import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        
          {/* Latest Bootstrap min CSS */}
          <link
            rel="stylesheet"
            href="assets/bootstrap/css/bootstrap.min.css"
          />
          {/* Font Awesome CSS */}
          <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
          <link rel="stylesheet" href="assets/fonts/themify-icons.css" />
          <link
            rel="stylesheet"
            href="assets/css/materialdesignicons-min.css"
          />
          <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.css" />
          {/* animate CSS */}
          <link rel="stylesheet" href="assets/css/animate.css" />
          {/* MAGNIFIC CSS */}
          <link rel="stylesheet" href="assets/css/magnific-popup.css" />
          {/* Style CSS */}
          <link rel="stylesheet" href="assets/css/style-two.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"/>
         
        </Head>
        <body data-spy="scroll" data-offset="80">
    
          <Main />

          <NextScript />
          {/* <!-- Latest jQuery --> */}
          <script src="assets/js/jquery-1.12.4.min.js"></script>
          {/* <!-- Latest compiled and minified Bootstrap --> */}
          <script src="assets/bootstrap/js/bootstrap.min.js"></script>
          {/* <!-- modernizer JS -->		 */}
          <script src="assets/js/modernizr-2.8.3.min.js"></script>
          {/* <!-- owl-carousel min js  --> */}
          <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
          {/* <!-- magnific-popup js -->                */}
          <script src="assets/js/jquery.magnific-popup.min.js"></script>
          {/* <!-- jquery counterup --> */}
          <script src="assets/js/jquery.counterup.min.js"></script>
          <script src="assets/js/countdown.js"></script>
          <script src="assets/js/app.js"></script>
          {/* <!-- WOW - Reveal Animations When You Scroll --> */}
          <script src="assets/js/wow.min.js"></script>
          {/* <!-- scrolltopcontrol js --> */}
          <script src="assets/js/scrolltopcontrol.js"></script>
          {/* <!-- scripts js --> */}
          <script src="assets/js/scripts.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
