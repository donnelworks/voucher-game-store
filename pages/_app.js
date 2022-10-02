import "../styles/custom/utilities.css";
import "../styles/custom/homepage.css";
import "../styles/custom/detail.css";
import "../styles/custom/checkout.css";
import "../styles/custom/complete-checkout.css";
import "../styles/custom/sign-in.css";
import "../styles/custom/sign-up.css";
import "../styles/custom/sign-up-success.css";
import "../styles/custom/sign-up-photo.css";
import "../styles/custom/sign-up-photo-success.css";
import "../styles/custom/404-not-found.css";
import "../styles/custom/sidebar.css";
import "../styles/custom/overview.css";
import "../styles/custom/transactions.css";
import "../styles/custom/transactions-detail.css";
import "../styles/custom/edit-profile.css";
import "../styles/custom/navbar-log-in.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
