import { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [products] = useState([
    { id: 1, image:"Images/product1.jpeg", name: "Produk A", price: 30000 },
    { id: 2, image:"Images/product2.jpeg", name: "Produk B", price: 50000 },
    { id: 3, image:"Images/product3.jpeg", name: "Produk c", price: 50000 },
    { id: 4, image:"Images/product4.jpeg", name: "Produk d", price: 50000 },
    { id: 5, image:"Images/product5.jpeg", name: "Produk e", price: 50000 },
    { id: 6, image:"Images/product6.jpeg", name: "Produk f", price: 50000 },
    { id: 7, image:"Images/product7.jpeg", name: "Produk g", price: 50000 },
    { id: 8, image:"Images/product8.jpeg", name: "Produk h", price: 50000 },
    { id: 9, image:"Images/product9.jpeg", name: "Produk i", price: 50000 },
    { id: 10, image:"Images/product10.jpeg", name: "Produk j", price: 50000 },
    { id: 11, image:"Images/product11.jpeg", name: "Produk k", price: 50000 },
    { id: 12, image:"Images/product12.jpeg", name: "Produk l", price: 50000 },
    // Tambahkan produk lainnya
  ]);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }

    const newTotalPrice = totalPrice + product.price;
    setTotalPrice(newTotalPrice);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((product) => product.id !== item.id);
    setCart(updatedCart);

    const reducedPrice = item.price * item.quantity;
    const newTotalPrice = totalPrice - reducedPrice;
    setTotalPrice(newTotalPrice);
  };

  const handleIncreaseQuantity = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);

    const newTotalPrice = totalPrice + item.price;
    setTotalPrice(newTotalPrice);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setCart(updatedCart);

      const reducedPrice = item.price;
      const newTotalPrice = totalPrice - reducedPrice;
      setTotalPrice(newTotalPrice);
    } else if (item.quantity === 1) {
      // Jika jumlah produk sama dengan 1, maka produk akan dihapus dari keranjang
      const updatedCart = cart.filter((product) => product.id !== item.id);
      setCart(updatedCart);

      const reducedPrice = item.price * item.quantity;
      const newTotalPrice = totalPrice - reducedPrice;
      setTotalPrice(newTotalPrice);
    }
  };

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="bg-[#F4F4F4]">
      <Navbar />
      <div className="pt-[60px] container m-auto flex h-screen overflow-hidden">
        <div className="left w-[70%] h-full ">
          <div className="head mb-[20px]">
            <div className="text-[33px] font-semibold">
              Choose Your Favorite Bouquet 
            </div>
            <div className="text-[16px]">
              Best Quality Flowers
            </div>
          </div>
          <div className="card  flex px-2 flex-wrap gap-3 overflow-y-auto h-full pb-[120px]">
            {products.map((product) => (
              <div
                key={product.id}
                className="card bg-white w-[200px] h-[238px] flex flex-col justify-center px-2 rounded shadow-xl pt-1 pb-3"
              >
                <div className="img h-[130px] bg-slate-300 m-auto overflow-hidden rounded">
                  <img
                    className="h-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="teks">
                  <div className="title text-[14px] font-bold">
                    {product.name}
                  </div>
                  <div className="price text-[11px] font-semibold text-[#ba3aec]">
                    {product.price}
                  </div>
                </div>
                <div className="btn flex justify-end mt-2">
                  <button
                    className="btn text-[11px] text-white bg-[#f524c8] rounded p-2 hover:bg-[#9e0a97]"
                    onClick={() => handleAddToCart(product)}>
                    + Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* keranjang */}
        <div className="right w-[30%] px-3 flex items-center justify-center ">
          <div className="keranjang produk bg-white h-[95%] w-full rounded-lg p-2 py-3 flex flex-col justify-between shadow-lg">
            <div className="produk  h-[85%]">
              <div className="head ">
                <h2 className="text-[18px] font-bold mb-4">Order Summary</h2>
                <div className="total-items-in-cart flex justify-between mb-4">
                  <p>Total Items in Cart:</p>
                  <p>{totalItemsInCart}</p>
                </div>
              </div>
              <div className="wrapcard  h-[77%] overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className=" flex items-center justify-between mb-2"
                >
                  <div className="left flex gap-3 items-center">
                    <div
                      onClick={() => handleRemoveFromCart(item)}
                      className="del cursor-pointer"
                    >
                      <img src="Images/delete.png" alt="" />
                    </div>
                    <div className="tels">
                      <div className="text-[12px] font-bold">{item.name}</div>
                      <div className="text-[10px] font-medium">
                        Rp. {item.price}
                      </div>
                    </div>
                  </div>
                  <div className="right flex gap-3 w-[160px]  justify-between ">
                    <div className="counter flex gap-2 items-center w-[70px] justify-between h-full">
                      <button
                        className="p-1 rounded-sm px-2 bg-primary inline-block text-white"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <div className="text-[14px]">{item.quantity}</div>
                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        className="p-1 rounded-sm px-2 bg-primary inline-block text-white"
                      >
                        +
                      </button>
                    </div>
                    <button className="text-[12px] font-bold">
                      Rp. {item.price * item.quantity}
                    </button>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <div className="bottom ">
              <div className="text-[18px] font-semibold flex justify-between mb-4">
                <h3 >Total Price: </h3>
                <h3>Rp.{totalPrice}</h3>
              </div>
              <button className="bg-[#4DE1C1] text-white w-full p-2 hover:bg-[#46C5A9]">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
