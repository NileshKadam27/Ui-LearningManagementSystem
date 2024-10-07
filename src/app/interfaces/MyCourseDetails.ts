export interface MyCourse{
    message: string
    errorBean: any
    payload: MyCourseDetails
}

export interface MyCourseDetails{
    courseid:number,
    coursename:string,
    courselink:string,
    courseprogress:string,
    courserating:string
}