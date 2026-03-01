import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div className="store">
        <div className="home-content">
          <div className="home-text">
            <h2>Welcome to Kavya Fashions</h2>
            <p>
              Kavya Fashions is your destination for elegant and affordable
              clothing designed to celebrate every moment of life.
            </p>
            <p>
              From everyday comfort wear to graceful festive outfits, our
              collections are thoughtfully curated to bring together tradition,
              style, and quality.
            </p>
            <p>
              Discover designs that make you feel confident, comfortable, and
              beautiful— because fashion should feel as good as it looks.
            </p>
            <Link to="/products">
              <button>Explore Store</button>
            </Link>
          </div>
          <div className="home-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIzjjO9hVDx7E3oZ7UpQMX_u4W7HND5LCnQ&s" />
          </div>
        </div>
      </div>
      <div className="second-section">
        <h2>Our Collections</h2>
        <div className="cards">
          <div className="card">
            <img src="https://civilisable.com/wp-content/uploads/2024/02/Traditional-Indian-Clothing-Karta-Angarkha-14.2.2024-960x960.jpg" />
            <p>Traditional Wear</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/originals/c0/37/12/c037121844264e7d40ffc2bb11335a21.jpg" />
            <p>Casual Wear</p>
          </div>
          <div className="card">
            <img src="https://suvidhafashion.com/cdn/shop/files/TTF1086SKY.jpg?v=1685181067&width=600" />
            <p>Party Wear</p>
          </div>
        </div>
      </div>
      <div className="why-section">
        <h2>Why Kavya Fashions</h2>
        <div className="why-features">
          <div className="why-box">
            <h4>Premium Quality</h4>
            <p>Carefully selected fabrics with lasting comfort.</p>
          </div>
          <div className="why-box">
            <h4>Affordable Fashion</h4>
            <p>Beautiful designs at prices you’ll love.</p>
          </div>
          <div className="why-box">
            <h4>Latest Trends</h4>
            <p>Styles inspired by modern and traditional fashion.</p>
          </div>
        </div>
        <div className="why-description">
          <p>
            Kavya Fashions brings you a perfect blend of tradition and modern
            style.
          </p>
          <p>
            Our designs are crafted to make you feel confident, elegant, and
            comfortable for every occasion.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;