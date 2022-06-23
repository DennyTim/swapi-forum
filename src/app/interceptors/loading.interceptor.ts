import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    concatMap,
    finalize,
    Observable,
    timer,
} from "rxjs";
import { LoadingService } from "../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingService: LoadingService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.showLoading();

        return timer(200).pipe(
            concatMap(() => {
                return next.handle(req)
                    .pipe(finalize(() => this.loadingService.hideLoading()));
            }),
        );
    }
}
