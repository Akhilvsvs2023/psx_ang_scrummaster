import { IRequest } from "./request.model";
import { IUser } from "./user.model";

export interface IProfileRequest{
    user:IUser;
    request:IRequest;
}