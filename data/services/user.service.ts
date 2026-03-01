import {BaseService} from '@/data/services/base.service';
import {CreateUser, User} from '@/data/models/user.model';
import {API_URLS} from '@/shared/constants';
import {httpClient} from '@/data/services/lib/create-http-client';


class UserService extends BaseService<User, CreateUser>{
    constructor(path = API_URLS.users) {
        super(path, httpClient);
    }
    private scope(subPath: string): UserService {
        return new UserService(`${this.path}/${subPath}`);
    }

    user(id: CreateUser['userId']): UserService  {
        return this.scope(id);
    }
}

export const userService = (path?: string) => new UserService(path);