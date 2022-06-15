import { CommonModule } from "@angular/common";
import {
    HTTP_INTERCEPTORS,
    HttpClientModule,
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveComponentModule } from "@ngrx/component";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoadingInterceptor } from "./services/loading.interceptor";
import {
    effectList,
    mainReducer,
} from "./store";
import { IconModule } from "./utils/icon/icon.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ErrorPageComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        IconModule.forRoot({ path: "assets/symbol/sprite.svg" }),
        StoreModule.forRoot(mainReducer),
        EffectsModule.forRoot(effectList),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        MatToolbarModule,
        ReactiveComponentModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
