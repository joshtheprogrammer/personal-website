import Product from './Product'

const Store = ({products}) => {
    return (
        <div className="STORE">
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default Store;