import { useState } from 'react';
import { useForm } from 'react-hook-form';

const allSkills = ['JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js'];
const allDomains = ['Web Dev', 'Mobile', 'AI/ML', 'Cloud', 'DevOps', 'Data Science'];

const TechnicalSkillsForm = ({ data, onSubmit, onBack }) => {
  // ... [keep all your existing component logic] ...
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
  errorMessage: {
    color: '#e74c3c',
    fontSize: '0.8rem',
    marginTop: '0.25rem'
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem'
  },
  skillItem: {
    padding: '0.5rem 1rem',
    backgroundColor: '#ecf0f1',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    ':hover': {
      backgroundColor: '#d6eaf8'
    }
  },
  selectedSkill: {
    backgroundColor: '#3498db',
    color: 'white',
    boxShadow: '0 2px 5px rgba(52, 152, 219, 0.3)'
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

export default TechnicalSkillsForm;