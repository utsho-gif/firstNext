import Product from '../../components/product';

const ProductList = ({ products }: any) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>All Products</h1>
      {products.map((product: any) => (
        <Product key={product?.id} product={product} passHref></Product>
      ))}
    </div>
  );
};

export default ProductList;

export async function getStaticProps() {
  const response = await fetch(`http://localhost:4000/products`);
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
