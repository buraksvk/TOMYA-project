import {Environment} from "./dynamic.env";

export class Constants {
  public static stsAuthority = new Environment().issuer();
  //public static stsAuthority = 'https://tomyasso.uskagroup.com/';
  public static clientId = 'tomya_trade_pro';
  public static clientRoot = 'https:pro.tomya.com';
  public static clientScope = 'openid profile trade';

  public static apiRoot ='https:pro.tomya.com/api/';  
}