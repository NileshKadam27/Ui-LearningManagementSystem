export interface VideoBean {
    videoId: number;
    videoLink: string ;
    videoTitle: string;
    videoDuration: string ;
    videoDescription: string;
    videoFile: string ;
}

export interface CourseDetail {
    courseId: number;
    courseName: string;
    professorName: string;
    experience: string;
    about: string ;
    videoLink: string ;
    userprofilekey: string ;
    coursedescription: string;
    videoBean: VideoBean[];
}

export interface CourseCategory {
    id: number;
    courseCategory: string;
    courseDetailList: CourseDetail[];
}




  
  