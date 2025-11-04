import Image from "next/image";
import "../globals.css";

export default function Flavors() {
  return (
    <section className="page-section">
      <h1>Our Flavors</h1>
      <p>Discover the delicious yogurt varieties we make fresh every day!</p>

      <div className="flavor-grid">
        <div className="flavor-card">
          <Image
            src="/images/strawberry.jpg"
            alt="Strawberry Yogurt"
            width={400}
            height={300}
            className="flavor-img"
          />
          <h3>Strawberry Yogurt</h3>
          <p>Sweet, tangy, and full of real strawberry chunks.</p>
        </div>

        <div className="flavor-card">
          <Image
            src="/images/blueberry.jpg"
            alt="Blueberry Yogurt"
            width={400}
            height={300}
            className="flavor-img"
          />
          <h3>Blueberry Yogurt</h3>
          <p>Rich, creamy, and loaded with antioxidant-rich blueberries.</p>
        </div>

        <div className="flavor-card">
          <Image
            src="/images/vanilla.jpg"
            alt="Vanilla Yogurt"
            width={400}
            height={300}
            className="flavor-img"
          />
          <h3>Vanilla Yogurt</h3>
          <p>Classic, smooth, and perfect with fruits or granola.</p>
        </div>

        <div className="flavor-card">
          <Image
            src="/images/yogurt.jpg"
            alt="Plain Yogurt"
            width={400}
            height={300}
            className="flavor-img"
          />
          <h3>Plain Yogurt</h3>
          <p>Simple, pure, and perfect for mixing with fruits or cereals.</p>
        </div>
      </div>
    </section>
  );
}
