import { HttpRequest, HttpResponse } from "@angular/common/http";

export abstract class CacheMap {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | null;
  abstract put(req: HttpRequest<any>, res: HttpResponse<any>): void;
}