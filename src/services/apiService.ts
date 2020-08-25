import axios from 'axios';
import { Constants } from '../helpers/Constants';
import { AuthService } from './AuthService';

export class ApiService {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public callApi(serviceName:string): Promise<any> {
    return this.authService.getUser().then(user => {
      if (user && user.access_token) {
        return this._callApi(user.access_token,serviceName).catch(error => {
          if(error.response) { 
            if (error.response.status === 401) {
              return this.authService.renewToken().then(renewedUser => {
                return this._callApi(renewedUser.access_token,serviceName);
              });
            }
          }
         
          throw error;
        });
      } else if (user) {
        return this.authService.renewToken().then(renewedUser => {
          return this._callApi(renewedUser.access_token,serviceName);
        });
      } else {
        throw new Error('Kullanıcı girişi yapınız.');
      }
    });
  }

  public callApiPost(serviceName:string,data:string) { 
    return this.authService.getUser().then(user => {
      if (user && user.access_token) {
        return this._callApiPost(user.access_token,serviceName,data).catch(error => {
          if(error.response) {
            if (error.response.status === 401) {
              return this.authService.renewToken().then(renewedUser => {
                return this._callApiPost(renewedUser.access_token,serviceName,data);
              });
            }
          }
          throw error;
        });
      } else if (user) {
        return this.authService.renewToken().then(renewedUser => {
          return this._callApiPost(renewedUser.access_token,serviceName,data);
        });
      } else {
        throw new Error('Kullanıcı girişi yapınız');
      }
    });
  }

  private _callApi(token: string, serviceName:string) {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    };

    return axios.get(Constants.apiRoot + serviceName, { headers });
  }

  private _callApiPost(token : string, serviceName: string, data: string) { 
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    };
    
    return axios.post(Constants.apiRoot + serviceName, data , { headers });
  }

  public async isLoggedin() { 
    const user = await this.authService.getUser();
    return user ? true : false;
  }

}