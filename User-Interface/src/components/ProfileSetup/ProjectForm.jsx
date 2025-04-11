import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ProjectsForm = ({ data, onSubmit, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data || { projects: [{}] }
  });

  const [projects, setProjects] = useState(data?.projects || [{}]);

  const addProject = () => {
    setProjects([...projects, {}]);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    };
    setProjects(updatedProjects);
  };

  const handleFormSubmit = () => {
    onSubmit({ projects });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} style={styles.form}>
      <h2 style={styles.title}>Projects & Hackathons</h2>
      
      {projects.map((project, index) => (
        <div key={index} style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Project {index + 1}</h3>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Title*</label>
            <input
              value={project.title || ''}
              onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Description*</label>
            <textarea
              value={project.description || ''}
              onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
              style={{ ...styles.input, minHeight: '100px' }}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Tech Stack</label>
            <input
              value={project.techStack || ''}
              onChange={(e) => handleProjectChange(index, 'techStack', e.target.value)}
              style={styles.input}
              placeholder="React, Node.js, MongoDB..."
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>GitHub Link</label>
            <input
              type="url"
              value={project.github || ''}
              onChange={(e) => handleProjectChange(index, 'github', e.target.value)}
              style={styles.input}
            />
          </div>

          {projects.length > 1 && (
            <button
              type="button"
              onClick={() => removeProject(index)}
              style={styles.removeButton}
            >
              Remove Project
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addProject}
        style={styles.addButton}
      >
        + Add Another Project
      </button>

      <div style={styles.buttonContainer}>
        <button 
          type="button" 
          onClick={onBack} 
          style={styles.secondaryButton}
        >
          Back
        </button>
        <button type="submit" style={styles.primaryButton}>Review Profile</button>
      </div>
    </form>
  );
};

const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      maxWidth: '800px',
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
    errorMessage: {
      color: '#e74c3c',
      fontSize: '0.8rem',
      marginTop: '0.25rem'
    },
    projectCard: {
      backgroundColor: '#f8f9fa',
      padding: '1.5rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      border: '1px solid #e9ecef'
    },
    projectTitle: {
      color: '#2c3e50',
      marginTop: 0,
      marginBottom: '1rem',
      fontSize: '1.2rem'
    },
    addButton: {
      backgroundColor: 'transparent',
      color: '#3498db',
      border: '1px dashed #3498db',
      padding: '0.75rem',
      borderRadius: '6px',
      cursor: 'pointer',
      width: '100%',
      marginBottom: '1.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'all 0.2s',
      ':hover': {
        backgroundColor: '#ebf5fb'
      }
    },
    removeButton: {
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#c0392b'
      }
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1rem',
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
  
  export default ProjectsForm;