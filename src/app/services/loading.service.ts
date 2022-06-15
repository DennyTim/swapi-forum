import { DOCUMENT } from "@angular/common";
import {
    Inject,
    Injectable,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { MainState } from "../store";
import {
    requestHideLoading,
    requestLoading,
} from "../store/actions/loading.action";

@Injectable({
    providedIn: "root",
})
export class LoadingService {
    private numberOfLoaders = 0;
    private loading?: HTMLElement;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private store: Store<MainState>,
    ) {
    }

    public showLoading(isLoading: boolean = false): void {
        !this.loading && this.initLoading(isLoading);
        if (this.numberOfLoaders === 0) {
            requestAnimationFrame(() => {
                if (this.numberOfLoaders !== 0) {
                    this.setStartLoading() && requestAnimationFrame(() =>
                        this.setLoadingProcess(isLoading),
                    );
                }
            });
        }
        this.numberOfLoaders++;
    }

    public hideLoading(isLoading: boolean = false): void {
        !this.loading && this.initLoading(isLoading);
        if (this.numberOfLoaders === 1) {
            requestAnimationFrame(() => {
                this.numberOfLoaders === 0 && this.setLoadingFinish(isLoading);
            });
        }
        this.numberOfLoaders--;
    }

    public initLoading(isLoading: boolean) {
        this.loading = this.document.createElement("div");
        this.setLoadingFinish(isLoading) && this.document.body.appendChild(this.loading);
    }

    private setStartLoading(): boolean {
        if (this.loading) {
            this.loading.className = "top-loader _loading-start";
        }
        return true;
    }

    private setLoadingProcess(isLoading: boolean) {
        if (this.loading) {
            this.loading.className = "top-loader _loading";
        }
        !isLoading && this.store.dispatch(requestLoading());
    }

    private setLoadingFinish(isLoading: boolean): boolean {
        if (this.loading) {
            this.loading.className = "top-loader";
        }
        !isLoading && this.store.dispatch(requestHideLoading());
        return true;
    }
}
