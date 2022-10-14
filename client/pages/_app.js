// import '../styles/globals.css';
import Head from "next/head";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
return (
<>
<Head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link href="images/favicon.png" rel="icon" />
<title>Scott - NFT Minting and Collection Landing Page HTML5 Template</title>
<meta name="description" content="Scott is responsive nft minting and collection landing page bootstrap 5 html template."/>
<meta name="author" content="harnishdesign.net" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"/>
<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="vendor/font-awesome/css/all.min.css" />
<link rel="stylesheet" type="text/css" href="vendor/owl.carousel/assets/owl.carousel.min.css" />
<link rel="stylesheet" type="text/css" href="css/stylesheet.css" />
</Head>
<Script src="vendor/jquery/jquery.min.js"/>
<Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"/>
<Script src="vendor/owl.carousel/owl.carousel.min.js"/>
<Script src="vendor/jquery-countdown/jquery.countdown.min.js"/>
<Script src="vendor/bootstrap-spinner/bootstrap-spinner.js"/>
<Script src="js/theme.js"/>

<Component {...pageProps} />
</>
)};
export default MyApp
