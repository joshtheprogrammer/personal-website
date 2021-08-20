import Rating from './Ratings'

const Product = ({product}) => {

    return (
        <a href={product.link}>
            <div className="product">
                <img src={product.img} className="productImage"></img>
                <h2 className="productTitle">{product.title}</h2>
                <h3 className="price">${product.price}</h3>
                <p className="stock">Stock: {product.stock}</p>
                <div className="ratings">
                    <Rating score={product.userRating||product.rating}/>
                </div>
                
                
            </div>
        </a>
    );
}

export default Product;