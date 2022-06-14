import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IncludesPipe } from "./includes.pipe";
import { IsArrayPipe } from './is-array.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [IncludesPipe, IsArrayPipe],
    exports: [IncludesPipe, IsArrayPipe],
})
export class PipesModule {
}

