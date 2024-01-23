export interface IUser{
    userId:string,
    password:string;
    empId:string;
    firstName:string,
    lastName:string,
    departmentName:string,
    role:string,
    emailId:string,
    reportingTo:string,
    createdOn:Date,
    approvedOn?:Date,
    active:string,
    gender:string
}