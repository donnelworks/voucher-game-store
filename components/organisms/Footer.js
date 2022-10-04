import Image from "next/image";
import React from "react";
import { FooterLink } from "../molecules";

const Footer = () => {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/logo/logo.svg" width={60} height={60} alt="" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <FooterLink
                    title="Company"
                    links={[
                      { title: "About Us", href: "/" },
                      { title: "Press Release", href: "/" },
                      { title: "Terms of Use", href: "/" },
                      { title: "Privacy & Policy", href: "/" },
                    ]}
                  />
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <FooterLink
                    title="Support"
                    links={[
                      { title: "Refund Policy", href: "/" },
                      { title: "Unlock Rewards", href: "/" },
                      { title: "Live Chatting", href: "/" },
                    ]}
                  />
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <FooterLink
                    title="Connect"
                    links={[
                      { title: "hi@store.gg", href: "/" },
                      { title: "team@store.gg", href: "/" },
                      { title: "Pasific 12, Jakarta Selatan", href: "/" },
                      { title: "021 - 1122 - 9090", href: "/" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
