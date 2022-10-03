import { FeaturedGameItem } from "../molecules";

const FeaturedGame = () => {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeaturedGameItem
            thumbnail="/img/Thumbnail-1.png"
            title="Super Mechs"
            category="Mobile"
          />
          <FeaturedGameItem
            thumbnail="/img/Thumbnail-2.png"
            title="Call of Duty: Modern"
            category="Mobile"
          />
          <FeaturedGameItem
            thumbnail="/img/Thumbnail-3.png"
            title="Mobile Legends"
            category="Mobile"
          />
          <FeaturedGameItem
            thumbnail="/img/Thumbnail-4.png"
            title="Clash of Clans"
            category="Mobile"
          />
          <FeaturedGameItem
            thumbnail="/img/Thumbnail-5.png"
            title="Valorant"
            category="Desktop"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
