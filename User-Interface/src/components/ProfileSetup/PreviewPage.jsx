const PreviewPage = ({ data, onBack }) => {
    const handleSubmit = () => {
      // Submit to backend
      alert('Profile submitted successfully!');
    };
  
    return (
      <div style={styles.container}>
        {/* Keep all your existing JSX exactly as is */}
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem'
    },
    title: {
      color: '#2c3e50',
      textAlign: 'center',
      marginBottom: '1rem',
      fontSize: '1.8rem'
    },
    section: {
      backgroundColor: '#f8f9fa',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    sectionTitle: {
      color: '#3498db',
      marginTop: 0,
      marginBottom: '1rem',
      borderBottom: '1px solid #dfe6e9',
      paddingBottom: '0.5rem',
      fontSize: '1.2rem'
    },
    previewRow: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '0.75rem',
      alignItems: 'center'
    },
    previewLabel: {
      fontWeight: '500',
      minWidth: '120px',
      color: '#7f8c8d'
    },
    projectPreview: {
      marginBottom: '1.5rem',
      padding: '1rem',
      backgroundColor: '#fff',
      borderRadius: '6px',
      border: '1px solid #e2e8f0'
    },
    projectTitle: {
      color: '#2c3e50',
      marginTop: 0,
      marginBottom: '0.5rem'
    },
    projectDescription: {
      color: '#4a5568',
      marginTop: 0,
      marginBottom: '0.75rem'
    },
    link: {
      color: '#3498db',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem'
    },
    secondaryButton: {
      backgroundColor: '#95a5a6',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#7f8c8d'
      }
    },
    submitButton: {
      backgroundColor: '#2ecc71',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#27ae60'
      }
    }
  };
  
  export default PreviewPage;