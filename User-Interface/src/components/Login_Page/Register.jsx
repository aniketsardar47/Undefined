import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiUserPlus, FiUser, FiMail, FiLock, FiBook } from "react-icons/fi";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    department: '',
    areasOfExpertise: ''
  });
  const navigate = useNavigate();

  const departments = [
    'Computer Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Biomedical Engineering'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Registration data:', formData);
    navigate('/dashboard');
  };

  return (
    <div style={styles.pageContainer}>
      <motion.div 
        style={styles.registerCard}
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
            Join Our Community
          </motion.h2>
          <motion.p 
            style={styles.cardSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Start your mentorship journey today
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <motion.div 
            style={styles.inputGroup}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FiUser style={styles.inputIcon} />
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </motion.div>

          <motion.div 
            style={styles.inputGroup}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.55 }}
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
              placeholder="Password (min 8 characters)"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
              style={styles.inputField}
            />
          </motion.div>

          <motion.div 
            style={styles.inputGroup}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <FiLock style={styles.inputIcon} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength="8"
              style={styles.inputField}
            />
          </motion.div>

          

          <motion.div
            style={styles.roleSelection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <h3 style={styles.roleTitle}>Register as:</h3>
            <div style={styles.roleOptions}>
              <motion.div
                style={{
                  ...styles.roleOption,
                  ...(formData.role === 'student' ? styles.roleOptionSelected : {})
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData({...formData, role: 'student'})}
              >
                <h4 style={styles.roleName}>Student</h4>
                <p style={styles.roleDescription}>Looking for mentorship</p>
              </motion.div>

              <motion.div
                style={{
                  ...styles.roleOption,
                  ...(formData.role === 'mentor' ? styles.roleOptionSelected : {})
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData({...formData, role: 'mentor'})}
              >
                <h4 style={styles.roleName}>Mentor</h4>
                <p style={styles.roleDescription}>Share your knowledge</p>
              </motion.div>
            </div>
          </motion.div>

        

          <motion.button
            type="submit"
            style={styles.registerButton}
            whileHover={{ 
              backgroundColor: "#3a86ff",
              boxShadow: "0 5px 15px rgba(58, 134, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <FiUserPlus style={styles.buttonIcon} />
            Create Account
          </motion.button>
        </form>

        <motion.div
          style={styles.loginPrompt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span style={styles.promptText}>Already have an account? </span>
          <Link to="/login" style={styles.loginLink}>Sign in</Link>
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
  registerCard: {
    width: "100%",
    maxWidth: "480px",
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
  selectField: {
    width: "100%",
    padding: "15px 20px 15px 48px",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "15px",
    color: "#1e293b",
    backgroundColor: "#f8fafc",
    appearance: "none",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  roleSelection: {
    margin: "15px 0",
  },
  roleTitle: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "12px",
  },
  roleOptions: {
    display: "flex",
    gap: "12px",
  },
  roleOption: {
    flex: 1,
    padding: "16px",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#f8fafc",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  },
  roleOptionSelected: {
    borderColor: "#4895ef",
    backgroundColor: "rgba(72, 149, 239, 0.1)",
  },
  roleName: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#1e293b",
    marginBottom: "6px",
  },
  roleDescription: {
    fontSize: "13px",
    color: "#64748b",
    margin: 0,
  },
  registerButton: {
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
  },
  buttonIcon: {
    fontSize: "18px",
  },
  loginPrompt: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "15px",
    color: "#64748b",
  },
  promptText: {
    marginRight: "6px",
  },
  loginLink: {
    color: "#4895ef",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.2s",
  },
};

export default Register;