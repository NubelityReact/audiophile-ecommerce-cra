import CategoryNavigation from "../../components/Containers/CategoryNavigation";
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
      <CategoryNavigation cards={CategoryNavigationData} />
    </div>
  );
};

export default Home;
