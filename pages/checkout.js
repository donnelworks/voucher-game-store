import Image from "next/image";
import Link from "next/link";
import {
  CheckoutDetail,
  CheckoutGame,
  CheckoutSubmit,
} from "../components/organisms";

const Checkout = () => {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="/">
            <a>
              <Image src="/logo/logo.svg" width={60} height={60} alt="" />
            </a>
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutGame />
        <hr />
        <CheckoutDetail />
        <CheckoutSubmit />
      </div>
    </section>
  );
};

export default Checkout;
