import { useState } from 'react';
import '../Styles/Login.css';

const features = [
  ['fa-video', 'CCTV Analytics'],
  ['fa-crosshairs', 'Object Tracking'],
  ['fa-user', 'Face Detection'],
  ['fa-triangle-exclamation', 'Real-time Alerts'],
  ['fa-car', 'Vehicle Recognition'],
  ['fa-moon', 'Night Vision Analytics'],
  ['fa-person-walking', 'Intrusion Detection'],
  ['fa-chart-line', 'Behavioral Analytics'],
];

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanUsername = username.trim();
    const cleanPassword = password.trim();

    if (!cleanUsername || !cleanPassword) {
      setError('Please enter your Official ID and Password.');
      return;
    }

    setError('');
    onLogin(cleanUsername);
  };

  return (
    <div className="login-page">
      <div className="login-background" />
      <div className="login-top-right">
        SECURE BORDERS&nbsp; | &nbsp;SMARTER SURVEILLANCE&nbsp; | &nbsp;A SAFER NATION
        <div className="login-tricolor">
          <span className="login-saffron" />
          <span className="login-white" />
          <span className="login-green" />
        </div>
      </div>

      <main className="login-container">
        <section className="login-left-section">
          <div className="login-brand">
            <div className="login-brand-logo">
              <i className="fa-solid fa-shield-halved" />
            </div>
            <div>
              <h1>IBVAP</h1>
              <h2>INTELLIGENT BORDER<br />VIDEO ANALYTICS PLATFORM</h2>
            </div>
          </div>
          <p className="login-tagline">AI-POWERED BORDER SURVEILLANCE<br />FOR A SAFER TOMORROW</p>
          <div className="login-features">
            {features.map(([icon, label]) => (
              <div className="login-feature" key={label}>
                <i className={`fa-solid ${icon}`} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="login-flag-line">
            <span className="login-saffron" />
            <span className="login-white" />
            <span className="login-green" />
          </div>
        </section>

        <section className="login-right-section">
          <form className="login-card" onSubmit={handleSubmit}>
            <div className="login-emblem">
              <img src="/ashok-stambh.png" alt="Ashok Stambh" />
            </div>
            <h2 className="login-title">Login</h2>
            <p className="login-authorized">Authorized Personnel Only</p>

            <div className="login-input-group">
              <i className="fa-solid fa-user" />
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Official ID / Username"
                autoComplete="username"
                aria-label="Official ID or username"
              />
            </div>

            <div className="login-input-group">
              <i className="fa-solid fa-lock" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                autoComplete="current-password"
                aria-label="Password"
              />
              <button
                type="button"
                className="login-password-eye"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>
              <button type="button" className="login-forgot" onClick={() => setError('Please contact your administrator to reset your password.')}>Forgot Password?</button>
            </div>

            {error && <p className="login-error" role="alert">{error}</p>}

            <button className="login-button" type="submit">
              <i className="fa-solid fa-shield-halved" />
              SECURE LOGIN
            </button>

            <div className="login-or">OR</div>
            <button type="button" className="login-twofa" onClick={() => setError('Two-factor authentication is not configured yet.')}>
              <i className="fa-solid fa-mobile-screen-button" />
              Login with 2FA
            </button>
            <div className="login-security">
              <i className="fa-solid fa-shield-halved" />
              Protected by AI-powered surveillance infrastructure
            </div>
          </form>
        </section>
      </main>

      <div className="login-footer">
        IBVAP v1.0.0<br />
        <span><i className="fa-solid fa-circle-check" /> Secure Access</span>
      </div>
    </div>
  );
};

export default Login;
