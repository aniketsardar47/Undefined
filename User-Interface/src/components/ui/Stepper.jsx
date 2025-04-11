const Stepper = ({ steps, currentStep }) => {
    return (
      <div style={styles.stepper}>
        {steps.map((step, index) => (
          <div 
            key={step} 
            style={{ 
              ...styles.step,
              ...(index <= currentStep && styles.activeStep)
            }}
          >
            <div style={styles.stepNumber}>{index + 1}</div>
            <div style={styles.stepLabel}>{step}</div>
            {index < steps.length - 1 && (
              <div style={styles.connector}></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  const styles = {
    stepper: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '2rem',
      position: 'relative'
    },
    step: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      flex: 1,
      zIndex: 2
    },
    stepNumber: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#e0e0e0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '8px',
      fontWeight: '500',
      color: '#757575',
      transition: 'all 0.3s ease'
    },
    stepLabel: {
      fontSize: '0.875rem',
      color: '#9e9e9e',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    },
    connector: {
      position: 'absolute',
      top: '16px',
      left: 'calc(50% + 16px)',
      right: '0',
      height: '2px',
      backgroundColor: '#e0e0e0',
      zIndex: 1
    },
    activeStep: {
      '& $stepNumber': {
        backgroundColor: '#3498db',
        color: 'white',
        transform: 'scale(1.1)'
      },
      '& $stepLabel': {
        color: '#3498db',
        fontWeight: '500'
      },
      '& $connector': {
        backgroundColor: '#3498db'
      }
    }
  };
  export default Stepper;