import { RegisterRequestModel } from "src/app/models/usuarios/register.request.model";
import { Observable } from 'rxjs'
import { RegisterResponseModel } from "src/app/models/usuarios/register.response.model";
import axios from "axios";
import { environment } from "src/environments/environment";


/*
    Função para realizar a chamada
    de cadastro de usuários na API
*/
export function postRegister(request: RegisterRequestModel): Observable<RegisterResponseModel> {
    //fazendo a requisição para a API usando o AXIOS
    return new Observable<RegisterResponseModel>(observer => {
        axios.post<RegisterResponseModel>(`${environment.apiUsuarios}/register`, request)
            .then(response => {
                observer.next(response.data);
                observer.complete();
            })
            .catch(e => {
                observer.error(e);
            });
    });
}


