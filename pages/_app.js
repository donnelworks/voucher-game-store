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
import Layout from "../components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
