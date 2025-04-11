import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "./components/contexts/AuthContext";  // Make sure this path is correct

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth(); // Get login function from AuthContext
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login(formData.email, formData.password);
      // Navigation is handled in AuthContext after successful login
    } catch (err) {
      setError(err.message || 'Login failed');
      setLoading(false);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <motion.div 
        style={styles.loginCard}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div 
          style={styles.logoContainer}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div style={styles.logo}>CH</div>
          <div style={styles.logoText}>CollabHub</div>
        </motion.div>

        <div style={styles.cardHeader}>
          <motion.h2 
            style={styles.cardTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome Back
          </motion.h2>
          <motion.p 
            style={styles.cardSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sign in to continue your journey
          </motion.p>
        </div>

        {error && (
          <motion.div
            style={styles.errorAlert}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <motion.div 
            style={styles.inputGroup}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FiMail style={styles.inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </motion.div>

          <motion.div 
            style={styles.inputGroup}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FiLock style={styles.inputIcon} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
              style={styles.inputField}
            />
          </motion.div>

          <motion.div
            style={styles.forgotPassword}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/forgot-password" style={styles.link}>Forgot password?</Link>
          </motion.div>

          <motion.button
            type="submit"
            style={styles.loginButton}
            whileHover={{ 
              backgroundColor: "#3a86ff",
              boxShadow: "0 5px 15px rgba(58, 134, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            disabled={loading}
          >
            <FiLogIn style={styles.buttonIcon} />
            {loading ? 'Signing In...' : 'Sign In'}
          </motion.button>
        </form>

        <motion.div
          style={styles.signupPrompt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span style={styles.promptText}>New to CollabHub? </span>
          <Link to="/register" style={styles.signupLink}>Create account</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#f8fafc",
    margin: 0,
    padding: "20px",
    boxSizing: "border-box",
    backgroundImage: "radial-gradient(at top left, #f0f4ff 0%, transparent 50%)",
  },
  errorAlert: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '14px',
    border: '1px solid #fecaca'
  },
  loginCard: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "white",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
    padding: "40px",
    boxSizing: "border-box",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "30px",
  },
  logo: {
    width: "48px",
    height: "48px",
    backgroundColor: "#4895ef",
    color: "white",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(72, 149, 239, 0.3)",
  },
  logoText: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1e293b",
  },
  cardHeader: {
    marginBottom: "30px",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "8px",
  },
  cardSubtitle: {
    fontSize: "15px",
    color: "#64748b",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    position: "relative",
    width: "100%",
  },
  inputIcon: {
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#94a3b8",
    fontSize: "18px",
  },
  inputField: {
    width: "100%",
    padding: "15px 20px 15px 48px",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "15px",
    color: "#1e293b",
    backgroundColor: "#f8fafc",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  },
  inputField: {
    width: "100%",
    padding: "15px 20px 15px 48px",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "15px",
    color: "#1e293b",
    backgroundColor: "#f8fafc",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  },
  forgotPassword: {
    textAlign: "right",
    marginTop: "-10px",
  },
  link: {
    color: "#64748b",
    fontSize: "14px",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
    padding: "16px",
    backgroundColor: "#4895ef",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "10px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(72, 149, 239, 0.2)",
    opacity: (loading) => loading ? 0.7 : 1,
    cursor: (loading) => loading ? 'not-allowed' : 'pointer'
  },
  buttonIcon: {
    fontSize: "18px",
  },
  signupPrompt: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "15px",
    color: "#64748b",
  },
  promptText: {
    marginRight: "6px",
  },
  signupLink: {
    color: "#4895ef",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.2s",
  },
};

export default Login;