export interface Dashboard {
    message: string
    errorBean: any
    payload: DashboardDetails[]
  }
  
  export interface DashboardDetails {
    courseName?: string
    numberStudentEnrolled?: number
  }
  