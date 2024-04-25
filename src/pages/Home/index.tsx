import Ad from "../../components/Ad";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import Icon from "../../components/Icon";
import Hero from "../../components/layout/Hero";
import { CategoryNavigationData } from "../../data/categoryNavigation";
import useViewportMatchSize from "../../hooks/useViewportMatchSize";

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
      <CategoryNavigation cards={CategoryNavigationData} />
    </div>
  );
};

export default Home;
