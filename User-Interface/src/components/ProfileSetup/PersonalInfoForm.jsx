import { useForm } from 'react-hook-form';

const PersonalInfoForm = ({ data, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data || {}
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <h2 style={styles.title}>Personal Information</h2>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Full Name*</label>
        <input
          {...register("fullName", { required: "Required" })}
          style={{ ...styles.input, ...(errors.fullName && styles.errorInput) }}
        />
        {errors.fullName && <span style={styles.errorMessage}>{errors.fullName.message}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Email*</label>
        <input
          type="email"
          {...register("email", { 
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email"
            }
          })}
          style={{ ...styles.input, ...(errors.email && styles.errorInput) }}
        />
        {errors.email && <span style={styles.errorMessage}>{errors.email.message}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Phone</label>
        <input
          type="tel"
          {...register("phone")}
          style={styles.input}
        />
      </div>

      <div style={styles.buttonContainer}>
        <button type="submit" style={styles.primaryButton}>Next: Academic Info</button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontWeight: '500',
    color: '#34495e'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #bdc3c7',
    borderRadius: '4px',
    fontSize: '1rem'
  },
  errorInput: {
    borderColor: '#e74c3c'
  },
  errorMessage: {
    color: '#e74c3c',
    fontSize: '0.875rem'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem'
  },
  primaryButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#2980b9'
    }
  }
};
export default PersonalInfoForm;