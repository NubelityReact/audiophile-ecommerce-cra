import { useParams } from "react-router-dom";
import { ICategoryParams } from "../../customTypes/pages.params";
import Typography from "../../components/Typography";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SeeProduct from "../../components/Card/SeeProduct";
import AdBrand from "../../components/Ad/Brand";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import { CategoryNavigationData } from "../../data/categoryNavigation";
import styles from "./pages.category.styles.module.css";

const Category = () => {
  const params = useParams<ICategoryParams>();

  const categoryName = params.name ?? "";

  const { products, loading } = useSelector(
    (state: RootState) => state.products,
  );

  if (loading) {
    return <div>Cargando productos....</div>;
  }

  const categoryProducts = products
    .filter((item) => item.category === categoryName)
    .sort((item) => (item.new ? -1 : 1));

  return (
    <div className={styles.container}>
      <Typography className={styles.header} variant="h4" as="h1">
        {categoryName}
      </Typography>
      <div className={styles.content}>
        {categoryProducts.map((item) => {
          return <SeeProduct key={item.id} {...item} />;
        })}

        <CategoryNavigation cards={CategoryNavigationData} />

        <AdBrand
          img={{
            src: "/assets/banner2.png",
            alt: "person listen music with headphones",
          }}
          title={
            <span>
              Bringing you the <span className={"orange"}>best</span> audio gear
            </span>
          }
          description="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
        />
      </div>
    </div>
  );
};

export default Category;
