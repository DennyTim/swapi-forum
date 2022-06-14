import {
    Pipe,
    PipeTransform,
} from "@angular/core";

@Pipe({
    name: "includes",
})
export class IncludesPipe implements PipeTransform {
    transform(list: Array<string | boolean | number>, value: string | boolean | number): boolean {
        const typeofValue = typeof value;
        if (typeofValue === "string" || typeofValue === "number" || typeofValue || "boolean") {
            return list.includes(value);
        } else {
            return false;
        }
    }
}
