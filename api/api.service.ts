import axios, { AxiosRequestConfig } from "axios";

class ApiService {

    static endPoint: string = 'http://localhost:3001';

    getUsers(): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            let url = `${ApiService.endPoint}/users`;

            axios
                .get(url)
                .then(res => {
                    if (res.data.result == true) {
                        resolve(res.data.users);
                    }
                    else {
                        reject(res.data.err);
                    }
                })
                .catch(err => {
                    reject();
                });
        });
    }

    isUser(email:String, pw:String) : Promise<any> {
        return new Promise<any>( (resolve, reject) => {
            let url = `${ApiService.endPoint}/isuser`;

            let params = {
                id:email,
                pw:pw
            }

            axios
                .put(url, params)
                .then(res => {
                    if (res.data.result == true) {
                        console.log(res.data)
                        resolve(res.data.user);
                    }
                    else {
                        reject(res.data.err);
                    }
                })
                .catch(err => {
                    reject();
                });
        } )
    }

    getUserById(userid:String) : Promise<any> {
        return new Promise<any>( (resolve,reject) => {
            let url = `${ApiService.endPoint}/getuser/${userid}`;

            axios
                .get(url)
                .then(res => {
                    if(res.data.result == true) {
                        console.log(res.data)
                        resolve(res.data.user)
                    }
                    else {
                        reject(res.data.err)
                    }
                })
                .catch(err => {
                    reject();
                })
        } )
    }

    addUser(userinfo:any) : Promise<any> {
        return new Promise<any>( (resolve, reject) => {
            let url = `${ApiService.endPoint}/adduser`;

            let params = {
                id:userinfo.id,
                pw:userinfo.pw,
                name: userinfo.name
            }

            axios 
                .post(url, params)
                .then(res => {
                    if(res.data.result == true) {
                        console.log(res.data)
                        resolve(res.data.user)
                    }
                    else {
                        reject(res.data.err)
                    }
                })
                .catch(err => {
                    reject();
                })
        } )
    }

}
const apiService = new ApiService();
export default apiService;