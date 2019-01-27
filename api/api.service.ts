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

}
const apiService = new ApiService();
export default apiService;