export default function productCard({product}) {
    return (
        <div>
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
        </div>
    )
}