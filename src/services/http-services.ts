import { API_URLS} from "../constants/api.urls";
import { AXIOS } from "../config/axios.config";

interface Entity{
    id:number
}

class HttpServices {

    endpoint:string;

    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll<T>(){
        const controller = new AbortController();
        const result = AXIOS.get<T[]>(this.endpoint,{signal:controller.signal});
        return {result , cancel:()=>controller.abort()}
    }

    delete(id:number)
    {
       return AXIOS.delete(this.endpoint+"/"+id)
    }

    Create<t>(user:t)
    {
       return AXIOS.post(this.endpoint,user)
    }

    Update<T extends Entity>(user:T)
    {
       return AXIOS.patch(this.endpoint+"/"+user.id,user)
    }
};

const create = (endpoint:string)=> new HttpServices(endpoint);

export default create;