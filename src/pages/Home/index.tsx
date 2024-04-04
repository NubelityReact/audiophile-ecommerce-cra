import FormBillingDetails from "../../components/Examples/Forms/BillingDetails";
import MouseTracker from "../../components/Examples/Refs";
import FactorialCalculator from "../../hooks/TestUseMemo";

const Home = () => {
  return (
    <div>
      <FactorialCalculator />

      <FormBillingDetails />

      <MouseTracker />
    </div>
  );
};

export default Home;
