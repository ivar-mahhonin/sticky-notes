import {environment} from "../../environments/environment";

export class ApiRouter {
  static url(route: string) {
    const base = environment.apiBaseUrl;
    return (params?: any): string => {
      let resultRoute: string;
      if (params) {
        let newRoute = route;
        Object.keys(params)
          .forEach(key => newRoute = newRoute.replace(':' + key, params[key]));
        resultRoute = base + newRoute;
      } else {
        resultRoute = base + route;
      }
      return resultRoute;
    };
  }
}
