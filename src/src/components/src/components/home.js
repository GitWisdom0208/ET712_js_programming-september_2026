import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to PulseFit</h1>
          <p>Strength. Energy. Community. Your fitness journey starts here.</p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </section>

      <section className="section">
        <h2>Why Train With Us?</h2>
        <p className="intro">
          PulseFit is a modern fitness center offering expert coaching,
          state-of-the-art equipment, and programs for every fitness level.
        </p>
        <div className="card-grid">
          <div className="card">
            <h3>💪 Strength Training</h3>
            <p>Free weights, machines, and personal trainers to build real strength.</p>
          </div>
          <div className="card">
            <h3>🏃 Cardio Programs</h3>
            <p>Treadmills, cycling studios, and HIIT classes to boost endurance.</p>
          </div>
          <div className="card">
            <h3>🧘 Yoga & Recovery</h3>
            <p>Relaxing classes focused on flexibility, balance, and mindfulness.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;