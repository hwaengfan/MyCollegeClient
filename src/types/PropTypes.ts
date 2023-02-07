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

export interface UserHeaderProps {
  userFirstName: string;
  userLastName: string;
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
