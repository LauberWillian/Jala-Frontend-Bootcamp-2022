import { Service } from './service';
import IUser from '../interfaces/IUser';
import { USER_API, API_ENDPOINT } from '../config';
import { IVerificationCode } from '../interfaces/IVerificationCode';

const url = API_ENDPOINT + USER_API;

export class UserService {
  constructor(private service: Service) { }

  public login = async (user: IUser): Promise<any> => {
    return this.service
      .post(url + '/login', user)
      .then(response => response.data)
      .catch(err => {
        console.log('user service login error:', err);
      })
  };

  public signup = async (user: IUser) => {
    return this.service
      .post(url + '/signup', user)
      .then(response => response.data)
      .catch(err => {
        console.log('user service signup error:', err);
      })
  };

  public emailVerification = async (verificationCode: any) => {
    return this.service
      .put(url + `/verify-email`, verificationCode)
      .then(response => response.data)
      .catch(err => {
        console.log('user service email verification error: ', err)
      })
  }
  public resetPassword = async (user: any)=>{
    return this.service
    .post(url + '/resetpassword', user)
    .then(response => response.data)
    .catch(err => {
      console.log('password reset error:', err);
    })
  }

}


const service = new Service();
const userService = new UserService(service);
export default userService;