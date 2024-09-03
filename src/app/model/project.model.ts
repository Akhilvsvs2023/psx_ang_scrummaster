export interface IProject {
    projectId   : string,
    projectName : string,
    description : string,
    createdBy   : string,
    teamInvolved: string,
    createdOn   : Date,
    closedOn   ?: Date,
    active      : number,
    lchgtime    : Date
}