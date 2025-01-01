export type subjectsType = {
    sem1:string[],
    sem2:string[],
    sem3:string[],
    sem4:string[],
    sem5:string[],
    sem6:string[],
    sem7:string[],
    sem8:string[],
}

export type courseType = {
    course:string,
    uploadedAt:string,
    sem_subjects:subjectsType,
    _id:string
}