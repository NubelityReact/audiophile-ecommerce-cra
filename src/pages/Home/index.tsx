import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import { CategoryNavigationData } from "../../data/categoryNavigation";

const Home = () => {
  return (
    <div style={{ background: "white" }}>
      <CategoryNavigation cards={CategoryNavigationData} />
    </div>
  );
};

export default Home;
