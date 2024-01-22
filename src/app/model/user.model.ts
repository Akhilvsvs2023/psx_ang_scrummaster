export interface IUser{
    empid:string;
    username:string,
    password:string,
    firstName:string,
    lastName:string,
    designation:string,
    reporting:string,
    email:string,
    createdOn?:Date
}