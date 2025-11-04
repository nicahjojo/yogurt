import Image from "next/image";
import "../globals.css";

export default function About() {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-text">
          <h1>About PatFarm</h1>
          <p>
            At <strong>PatFarm</strong>, we believe that great yogurt starts
            with simple, honest ingredients. Our journey began with a passion
            for crafting creamy, flavorful, and nutritious yogurt made from
            farm-fresh milk and real fruits.
          </p>
          <p>
            Every cup is packed with love, probiotics, and natural goodness —
            bringing you a taste that’s as wholesome as it is delicious.
          </p>
        </div>
        <div className="page-image">
          <Image
            src="/yogo3.jpg"
            alt="About PatFarm Yogurt"
            width={600}
            height={400}
            className="rounded-image"
          />
        </div>
      </div>
    </section>
  );
}
