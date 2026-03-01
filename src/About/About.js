import Footer from "../Footer/Footer";
import "./About.css";

function About() {
  return (
    <>
    <div className="about-page">
      <div className="about-header">
        <h1>About Kavya Fashions</h1>
        <p>Where tradition meets modern elegance</p>
      </div>

      <div className="about-section">
        <div className="about-text">
          <p>
            Kavya Fashions is a fashion brand created to bring elegant,
            comfortable, and affordable clothing to everyone. We believe
            fashion is not just about style, but also about confidence and
            comfort.
          </p>
          <p>
            Our collections include casual wear, festive outfits, and
            traditional designs crafted with care and attention to detail.
            Each piece reflects quality, culture, and modern trends.
          </p>
          <p>
            At Kavya Fashions, we focus on premium fabrics, perfect fits,
            and designs that make you feel beautiful every day.
          </p>
        </div>
        <div className="about-image">
          <img src="https://kavyafashiontech.com/wp-content/uploads/2024/09/Screenshot-2024-09-17-133943.png" />
        </div>
      </div>

      <div className="about-values">
        <div className="value-box">
          <h3>Quality</h3>
          <p>Carefully selected fabrics and fine craftsmanship.</p>
        </div>

        <div className="value-box">
          <h3>Affordability</h3>
          <p>Trendy fashion at prices everyone can afford.</p>
        </div>

        <div className="value-box">
          <h3>Style</h3>
          <p>Designs inspired by modern and traditional fashion.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default About;
