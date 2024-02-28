export interface ITask{
    taskId:string,
    taskName:string,
    projectName:string,
    description:string,
    assignedTo:string,
    priority:string,
    assignedBy:string,
    createdOn:Date,
    deadline:Date,
    closedOn?:Date,
    active:number
}