
// Define the structure of the user model

  export interface TokenRequest {
    UserName : string,
    Password : string
  }

  export interface TokenResponse {
    token : string,
    refreshToken : string,
    isSuccess : boolean
  }

  export interface CompanyResponse {
    companyKey : number,
    companyCode : string,
    companyName : string
  }

  // Define the default values
  export const tokenRequest : TokenRequest = {
    UserName: '',
    Password: ''
  };

  export const companyResponse : CompanyResponse = {
    companyKey : 1,
    companyCode: '',
    companyName: ''
};