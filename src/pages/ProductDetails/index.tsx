import { useParams } from "react-router-dom";
import styles from "./page.product.details.styles.module.css";
import { IProductDetailsParams } from "../../customTypes/pages.params";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AddProductToCart from "../../components/Card/AddProductToCart";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import { CategoryNavigationData } from "../../data/categoryNavigation";
import AdBrand from "../../components/Ad/Brand";
import GoBack from "../../components/Button/GoBack";

const ProductDetails = () => {
  const params = useParams<IProductDetailsParams>();
  const productId = params.id ?? "";

  // traerlo del estado
  const { products } = useSelector((state: RootState) => state.products);

  const thisProduct = products.find((item) => item.id.toString() === productId);

  // si no se encuentra se hace una peticion http con un useEffect para llamar al endpoint del producto

  if (!thisProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className={styles.container}>
      <GoBack style={{ marginBlockEnd: 24 }} />

      <div className={styles.content}>
        <AddProductToCart {...thisProduct} />

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

export default ProductDetails;
