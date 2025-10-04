import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  return (
    isAuthenticated && (
      <div
        style={{
          position: 'fixed',
          top: '2rem',
          right: '10rem',
          padding: '0.75rem 1.25rem',
          background: 'rgba(17, 24, 39, 0.95)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}
      >
        <img 
          src={user.picture} 
          alt={user.name}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #8b5cf6'
          }}
        />
        <div>
          <div style={{ 
            fontSize: '0.95rem',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.15rem'
          }}>
            {user.name}
          </div>
          <div style={{ 
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            {user.email}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
