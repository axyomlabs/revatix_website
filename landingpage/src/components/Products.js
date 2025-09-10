import isp from "../Assets/isp.png"; // Product logo

function Product() {
  return (



    
      <section id="products" className="products-section">
       
        {showProduct && (
          <div className="popup">
            <img src={productLogo} alt="Product Logo" />
            <h3>🚀 Product Showcase</h3>
            <p>Explore our cutting-edge IT solutions for modern businesses.</p>
            <button onClick={() => setShowProduct(false)}>Close</button>
          </div>
        )}
      </section>
  );
}

export default Product;





