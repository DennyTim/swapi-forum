import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IconModule } from "./utils/icon/icon.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        IconModule.forRoot({ path: "assets/symbol/sprite.svg" }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
