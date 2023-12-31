import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanyResponse } from '../application';


interface CompanySelectionProps {
  compnayData: (data: string) => void;
 }

export default function AuthUser() {

    const navigate = useNavigate();
    // const getToken = () =>{
    //     const tokenString = sessionStorage.getItem('token') ?? '';
    //     const userToken = JSON.parse(tokenString);
    //     return userToken;
    // }
    const GetUsercompaniesList = async () => {
      try {
        var response = await instance.post('/Authentication/GetUserCompanies')
        var resultarray: CompanyResponse[] = response.data;
        return resultarray;
      } catch (error) {
        console.error(error);
      }
    
    // navigate('/companyselection');
}
    const SetUserCompanies = async () => {
        instance.post('/Authentication/GetUserCompanies')
      .then(async (response) => {
        var firstresult : CompanyResponse;
        firstresult = response.data[0];
        UpdateSelectedCompany(firstresult);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
   

    const UpdateSelectedCompany = (request : CompanyResponse) => {
        instance.post('/Authentication/UpdateSelectedCompany', request)
          .then(async (response) => {
            

        if(response.data != null && response.data.isSuccess)
        {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          localStorage.setItem('companyName', request.companyName);
        }

      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    // const logout = () => {
    //     sessionStorage.clear();
    //     navigate('/login');
    // }

    const instance = axios.create({
        baseURL: 'https://bluelotus360.co/CoreAPI/api',
        headers: {
            "Content-type" : "application/json",
            "Accept" : "application/json",
            "IntegrationID":"1aa6a39b-5f54-4905-880a-a52733fd6105"
          },
      });
    
      instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token') ?? '';
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
              }
              return config;
        },
        (error) => {
            return Promise.reject(error);
        });
        
    return {   
        instance,
        SetUserCompanies,
        useEffect,GetUsercompaniesList
    }
}