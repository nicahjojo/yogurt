import "../globals.css";

export default function Login() {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <h1>Welcome Back 👋</h1>
        <p>Sign in to continue to PatFarm Yogurt</p>

        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="auth-switch">
          Don’t have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </section>
  );
}
