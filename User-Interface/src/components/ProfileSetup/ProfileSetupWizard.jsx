import { useState } from 'react';
import Stepper from '../ui/Stepper';
import PersonalInfoForm from './PersonalInfoForm';
import AcademicInfoForm from './AcademicInfoForm';
import TechnicalSkillsForm from './TechnicalSkillsForm';
import ProjectsForm from './ProjectsForm';
import PreviewPage from './PreviewPage';

const steps = [
  'Personal Info',
  'Academic Info',
  'Technical Skills',
  'Projects',
  'Review'
];

const ProfileSetupWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {},
    academic: {},
    technical: {},
    projects: []
  });

  const updateFormData = (step, data) => {
    setFormData(prev => ({ ...prev, [step]: data }));
  };

  return (
    <div style={styles.container}>
      <Stepper steps={steps} currentStep={currentStep} />
      
      {currentStep === 0 && (
        <PersonalInfoForm 
          data={formData.personal}
          onSubmit={(data) => {
            updateFormData('personal', data);
            setCurrentStep(1);
          }}
        />
      )}
      
      {currentStep === 1 && (
        <AcademicInfoForm 
          data={formData.academic}
          onSubmit={(data) => {
            updateFormData('academic', data);
            setCurrentStep(2);
          }}
          onBack={() => setCurrentStep(0)}
        />
      )}
      
      {currentStep === 2 && (
        <TechnicalSkillsForm 
          data={formData.technical}
          onSubmit={(data) => {
            updateFormData('technical', data);
            setCurrentStep(3);
          }}
          onBack={() => setCurrentStep(1)}
        />
      )}
      
      {currentStep === 3 && (
        <ProjectsForm 
          data={formData.projects}
          onSubmit={(data) => {
            updateFormData('projects', data);
            setCurrentStep(4);
          }}
          onBack={() => setCurrentStep(2)}
        />
      )}
      
      {currentStep === 4 && (
        <PreviewPage 
          data={formData}
          onBack={() => setCurrentStep(3)}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }
};

export default ProfileSetupWizard;