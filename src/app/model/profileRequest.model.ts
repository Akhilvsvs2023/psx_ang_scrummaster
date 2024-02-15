import { IRequest } from "./request.model";
import { IUserDetails } from "./userDetails.model";

export interface IProfileRequest{
    userDetails:IUserDetails;
    request:IRequest;
}