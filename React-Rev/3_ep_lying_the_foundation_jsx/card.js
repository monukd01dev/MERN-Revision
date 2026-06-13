const Card = function (props) {
    
    const {picture,name,login,email,location,dob} = props.userData
    // console.log("card props",props)
    return (
        <div style={glassCardStyles}>
            {/* 1. Profile Picture */}
            <img
                src={picture.large}
                alt="User Avatar"
                style={glassCardStyles.avatar}
            />

            {/* 2. Primary Identity */}
            <h2 style={glassCardStyles.name}>
                {`${name.title} ${name.first} ${name.last}`}
            </h2>
            <p style={glassCardStyles.username}>@{ login.username }</p>

            {/* Separation Line */}
            <div style={glassCardStyles.divider}></div>

            {/* 3. Essential Meta Data */}
            <div style={glassCardStyles.detailsGrid}>
                <div style={glassCardStyles.infoRow}>
                    <span style={glassCardStyles.label}>Email</span>
                    <span style={glassCardStyles.value}>{email}</span>
                </div>

                <div style={glassCardStyles.infoRow}>
                    <span style={glassCardStyles.label}>Location</span>
                    <span style={glassCardStyles.value}>{ `${location.city}, ${location.country}`}</span>
                </div>

                <div style={glassCardStyles.infoRow}>
                    <span style={glassCardStyles.label}>Age</span>
                    <span style={glassCardStyles.value}>{dob.age } Years</span>
                </div>
            </div>
        </div>

    )


}
const glassCardStyles = {
  // Container Layout
  width: '380px',
  padding: '2rem',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  color: '#ffffff',
  margin: '20px auto',

  // ✨ Pure Glassmorphism Core Properties
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)', // Safari support
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',

  // Image Styling
  avatar: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    border: '3px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    objectFit: 'cover',
    marginBottom: '1rem',
  },

  // Typography & Content Layout
  name: {
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '0 0 0.25rem 0',
    letterSpacing: '0.5px',
  },
  
  username: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.7)',
    margin: '0 0 1.5rem 0',
  },

  divider: {
    width: '100%',
    height: '1px',
    background: 'rgba(255, 255, 255, 0.15)',
    marginBottom: '1.25rem',
  },

  detailsGrid: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    fontSize: '0.9rem',
  },

  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    color: 'rgba(255, 255, 255, 0.6)',
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    letterSpacing: '1px',
  },

  value: {
    fontWeight: '500',
    textAlign: 'right',
    maxWidth: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
};
export default Card;
