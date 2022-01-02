import {environment} from "../../environments/environment";

export class ApiRouter {
  static url(route: string) {
    const base = environment.apiBaseUrl;
    return (obj?: any) => {
      let res: string;
      if (obj) {
        let newRoute = route;
        Object.keys(obj).map(key => {
          newRoute = newRoute.replace(':' + key, obj[key]);
        });
        res = base + newRoute;
      } else {
        res = base + route;
      }
      return res;
    };
  }
}
