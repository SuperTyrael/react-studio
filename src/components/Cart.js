export default function Cart({ cart }) {
    // const allCart = [];
    // for (var i = 0; i < cart.length; i++) {
    //     var count = 0;
    //     for (var j = 0; j < cart.length; j++) {
    //         if (cart[i].name === cart[j].name) {
    //             count++;
    //         }
    //     }
    //     allCart.push([cart[i].name, count]);
    // }
    const map = new Map();
    for (const item of cart) {
        if (!map.has(item.name)) {
            map.set(item.name, 1);
        } else {
            map.set(item.name, map.get(item.name) + 1);
        }
    }
    const allCart = Array.from(map);
    return (
        <>
            <ul>
                {allCart.map(([name, count]) => (
                    <li>{name} x {count}</li>
                ))}
            </ul>
        </>
    )
}