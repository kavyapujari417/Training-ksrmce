import { Link } from "react-router-dom";
import "./Products.css";
import Footer from "../Footer/Footer";

function Products() {
  return (
    <>
    <div className="products">
      <h1 className="products-title">Kavya Fashions Collections</h1>
      <p className="products-subtitle">
        Discover our latest styles crafted for comfort, elegance, and everyday beauty.
      </p>

      <div className="products-list">
        <div className="product">
          <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjURRQxdPtg_wWDy3V5W1DvQeXnFB-vrL_EWasFry93UdnP1vf94-uMdKqVBOdRxyGjdu0k-t4vaUuhz4O2JmTxePyDPkbc6dQmcYYcDBWZsidqp66BRDfJVdtDUqAlfRscbv2mMoP07Kze5Zz_z1GRS7s2dkyT5ITv6rW4xASb-ZhnMe1xoQFPbFFo=w512-h640" />
          <h3>Elegant Saree</h3>
          <p>999</p>
          <Link to="/buy"><button>Buy Now</button></Link>
          
        </div>
        <div className="product">
          <img src="https://tse2.mm.bing.net/th/id/OIP.p4WEoz8QdxtM5iLlkFoxiAHaKL?rs=1&pid=ImgDetMain&o=7&rm=3" />
          <h3>Casual Kurti</h3>
          <p>599</p>
           <Link to="/buy"><button>Buy Now</button></Link>
        </div>
        <div className="product">
          <img src="https://i.pinimg.com/originals/16/db/d1/16dbd1184afe32b89a0ed213bfe670bd.jpg" />
          <h3>Party Wear Dress</h3>
          <p>1199</p>
           <Link to="/buy"><button>Buy Now</button></Link>
        </div>
        <div className="product">
          <img src="https://img.freepik.com/premium-photo/illustration-lehenga-choli-hd-isolated-image-white-background_756405-56824.jpg?w=2000" />
          <h3>Traditional Lehenga</h3>
          <p>1499</p>
           <Link to="/buy"><button>Buy Now</button></Link>
        </div>
        <div className="product">
          <img src="https://images.cbazaar.com/images/metalic-foil-print-lavender-anarkali-gown-bgwrsom5012-l.jpg" />
          <h3>Festive Anarkali</h3>
          <p>999</p>
           <Link to="/buy"><button>Buy Now</button></Link>
        </div>
        <div className="product">
          <img src="https://i.pinimg.com/originals/38/67/64/3867648012ce509912e745404b6bbc5e.jpg" />
          <h3>Daily Wear Kurti</h3>
          <p>699</p>
           <Link to="/buy"><button>Buy Now</button></Link>
        </div>
        <div className="product">
          <img src="https://tipsandbeauty.com/wp-content/uploads/2020/01/Panelled-Office-Wear-Kurti-With-Side-Button-Placket-193x300.jpg" />
          <h3>Office Wear Kurti</h3>
          <p>999</p>
           <Link to="/buy"><button>Buy Now</button></Link>
        </div>
        <div className="product">
          <img src="https://pictures.kartmax.in/live/cover/600x800/sites/9s145MyZrWdIAwpU0JYS/product-images/charcoal_grey_designer_gown_17123884661049.jpg" />
          <h3>Designer Gown</h3>
          <p>2799</p>
           <Link to="/buy"><button>Buy Now</button></Link>
        </div>
        <div className="product">
          <img src="https://tse3.mm.bing.net/th/id/OIP.erOnXfVur0adgOKfqgVw2wHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" />
          <h3>Printed Cotton Saree</h3>
          <p>1299</p>
           <Link to="/buy"><button>Buy Now</button></Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Products;
