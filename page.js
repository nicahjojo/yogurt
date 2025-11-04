import "../globals.css";

export default function Services() {
  return (
    <section className="page-section">
      <h1>Our Services</h1>
      <div className="service-grid">
        <div className="service-card">
          <h3>Yogurt Making Classes</h3>
          <p>Learn how to craft your own yogurt with our guided sessions.</p>
        </div>
        <div className="service-card">
          <h3>Yogurt Tasting Events</h3>
          <p>Enjoy curated tastings featuring seasonal flavors.</p>
        </div>
        <div className="service-card">
          <h3>Custom Orders</h3>
          <p>Order in bulk or design your own flavor combinations.</p>
        </div>
      </div>
    </section>
  );
}
