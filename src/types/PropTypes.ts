// Home components
export interface ButtonProps {
  value: string;
}

export interface FieldProps {
  name: string;
  placeholder: string;
}

// User components
export interface CourseCardProps {
  key: number;
  courseName: string;
  image: string;
}

export interface ProfileFormProps {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userUsername: string;
  customFieldLabel?: string;
  customFieldValue?: string;
  customFieldName?: string;
}

export interface ErrorBoxProps {
  errorMessage: string;
}

// User pages
export interface StudentHeaderProps {
  studentFirstName: string;
  studentLastName: string;
}

export interface ProfessorHeaderProps {
  professorFirstName: string;
  professorLastName: string;
}

// Course Page
export interface AssignmentCardProps {
  assignmentName: string;
  assignmentDescription: string;
  assignmentGrade: string;
}
