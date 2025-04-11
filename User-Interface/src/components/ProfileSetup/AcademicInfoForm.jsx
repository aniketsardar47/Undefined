import { useForm } from 'react-hook-form';

const branches = [
  'Computer Science', 'Electrical', 'Mechanical', 
  'Civil', 'Electronics', 'Information Technology'
];

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

const AcademicInfoForm = ({ data, onSubmit, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data || {}
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <h2 style={styles.title}>Academic Information</h2>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>College/University*</label>
        <input
          {...register("college", { required: "Required" })}
          style={{ ...styles.input, ...(errors.college && styles.errorInput) }}
        />
        {errors.college && <span style={styles.errorMessage}>{errors.college.message}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Branch/Department*</label>
        <select
          {...register("branch", { required: "Required" })}
          style={{ ...styles.input, ...(errors.branch && styles.errorInput) }}
        >
          <option value="">Select Branch</option>
          {branches.map(branch => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </select>
        {errors.branch && <span style={styles.errorMessage}>{errors.branch.message}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Year of Study*</label>
        <div style={styles.yearOptions}>
          {years.map(year => (
            <div key={year} style={styles.yearOption}>
              <input
                type="radio"
                id={year}
                value={year}
                {...register("year", { required: true })}
                style={styles.radioInput}
              />
              <label htmlFor={year} style={styles.radioLabel}>{year}</label>
            </div>
          ))}
        </div>
        {errors.year && <span style={styles.errorMessage}>Please select a year</span>}
      </div>

      <div style={styles.buttonContainer}>
        <button 
          type="button" 
          onClick={onBack} 
          style={styles.secondaryButton}
        >
          Back
        </button>
        <button type="submit" style={styles.primaryButton}>Next: Technical Skills</button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '1.5rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontWeight: '600',
    color: '#34495e',
    fontSize: '0.9rem'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #bdc3c7',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: '#f8fafc',
    transition: 'border-color 0.3s',
    ':focus': {
      outline: 'none',
      borderColor: '#3498db',
      boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)'
    }
  },
  errorInput: {
    borderColor: '#e74c3c'
  },
  errorMessage: {
    color: '#e74c3c',
    fontSize: '0.8rem',
    marginTop: '0.25rem'
  },
  yearOptions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '0.5rem'
  },
  yearOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  radioInput: {
    margin: 0,
    width: '1rem',
    height: '1rem'
  },
  radioLabel: {
    cursor: 'pointer',
    fontSize: '0.9rem'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.5rem',
    gap: '1rem'
  },
  primaryButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'background-color 0.2s',
    flex: 1,
    ':hover': {
      backgroundColor: '#2980b9'
    }
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
    flex: 1,
    ':hover': {
      backgroundColor: '#7f8c8d'
    }
  }
};

export default AcademicInfoForm;