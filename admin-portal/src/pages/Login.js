import React, { useState } from 'react';

const Login = ({ onLogin, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clearing errors when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
      const userData = {
        id: 1,
        name: 'Admin User',
        email: formData.email,
        role: 'admin',
        lastLogin: new Date().toLocaleString()
      };
      
      onLogin(userData);
      setIsLoading(false);
    }, 1500);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    },
    card: {
      background: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '400px'
    },
    title: {
      textAlign: 'center',
      color: '#1f2937',
      marginBottom: '30px',
      fontSize: '28px',
      fontWeight: 'bold'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#374151',
      //fontWeight: '500'
      fontWeight: 'bold'
      
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.3s, box-shadow 0.3s'
    },
    inputError: {
      borderColor: '#ef4444',
      boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '14px',
      marginTop: '5px'
    },
    button: {
      width: '100%',
      padding: '14px',
      background: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 0.3s'
    },
    buttonLoading: {
      background: '#9ca3af',
      cursor: 'not-allowed'
    },
    switchText: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#6b7280'
    },
    switchLink: {
      color: '#3b82f6',
      cursor: 'pointer',
      fontWeight: '500'
    },
    demoAccounts: {
      background: '#f3f4f6',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏢 ParkBest Admin</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {})
              }}
              placeholder="Enter your email"
            />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.password ? styles.inputError : {})
              }}
              placeholder="Enter your password"
            />
            {errors.password && <div style={styles.errorText}>{errors.password}</div>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...styles.button,
              ...(isLoading ? styles.buttonLoading : {})
            }}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div style={styles.demoAccounts}>
          <strong>Demo Accounts:</strong>
          <p>Email: lawrenceadminparkbest@gmail.com</p>
          <p>Password: any password works well</p>
        </div>

        <div style={styles.switchText}>
          Don't have an account?{' '}
          <span 
            style={styles.switchLink}
            onClick={onSwitchToSignup}
          >
            Sign up here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;