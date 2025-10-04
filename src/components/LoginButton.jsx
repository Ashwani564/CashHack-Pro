import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button 
      onClick={() => loginWithRedirect()}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        padding: '0.75rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        color: 'white',
        background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        fontFamily: 'inherit'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.4)';
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
