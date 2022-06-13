import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveComponentModule } from "@ngrx/component";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { IconModule } from "./utils/icon/icon.module";
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

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
        AppRoutingModule,
        IconModule.forRoot({ path: "assets/symbol/sprite.svg" }),
        MatToolbarModule,
        ReactiveComponentModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
