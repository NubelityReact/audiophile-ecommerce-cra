import Ad from "../../components/Ad/Base";
import AdBrand from "../../components/Ad/Brand";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import Hero from "../../components/layout/Hero";
import { CategoryNavigationData } from "../../data/categoryNavigation";
import useViewportMatchSize from "../../hooks/useViewportMatchSize";
import styles from "./home.styles.module.css";

const Home = () => {
  const match = useViewportMatchSize("mobile");
  const matchTablet = useViewportMatchSize("tablet");

  const src = matchTablet
    ? "/assets/hero_tablet.png"
    : match
      ? "/assets/hero_mobile.png"
      : "/assets/hero.png";

  return (
    <div style={{ background: "white" }}>
      <Hero
        title="XX99 Mark II Headphones"
        paragraph="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        href="/product-details/id"
        img={{ src: src, alt: "heaphones xx99 mark two" }}
      />

      <main className={styles.main}>
        <CategoryNavigation cards={CategoryNavigationData} />
        <Ad
          img={{ src: "/assets/ads/speaker zx9.png", alt: "" }}
          type="A"
          title="ZX9 Speaker"
          description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          href="/"
          style={{ maxWidth: 327 }}
        />

        <Ad
          img={{ src: "/assets/ads/speaker zx7.png", alt: "" }}
          type="B"
          title="ZX7 Speaker"
          href="/"
          style={{ maxWidth: 327 }}
        />

        <Ad
          img={{ src: "/assets/ads/yx1 earphones.png", alt: "" }}
          type="C"
          title="ZX9 Speaker"
          href="/"
          style={{ maxWidth: 327 }}
        />
        <AdBrand
          img={{
            src: "/assets/banner2.png",
            alt: "person listen music with headphones",
          }}
          title={
            <span>
              Bringing you the <span className={styles.orange}>best</span> audio
              gear
            </span>
          }
          description="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
        />
      </main>
    </div>
  );
};

export default Home;
