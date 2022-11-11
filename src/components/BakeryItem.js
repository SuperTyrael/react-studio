import Button from 'react-bootstrap/Button';
// TODO: create a component that displays a single bakery item
export default function BakeryItem({ item, addToCart }) { 
    return (
        <>
            <div className="BakeryItem col-3 padding px-4 py-4">
                <div className="BakeryItem-image">
                    <img className='img-fluid' src={item.image} alt={item.name} />
                </div>
                <div className="BakeryItem-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
                <div></div>
                <div className="BakeryItem-price row ">
                    <h3 className='col'>${item.price}</h3>
                    <Button className='btn col-3' onClick={addToCart}>Add to Cart</Button>
                </div>
            </div>
            
        </>
    )
}