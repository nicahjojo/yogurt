import "../globals.css";

export default function Signup() {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <h1>Create an Account 🥛</h1>
        <p>Join PatFarm Yogurt and explore our delicious flavors!</p>

        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>

        <p className="auth-switch">
          Already have an account? <a href="/login">Sign in here</a>
        </p>
      </div>
    </section>
  );
}
