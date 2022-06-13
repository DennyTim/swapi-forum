import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
} from "@angular/core";
import { IconSpriteService } from "./icon-sprite.service";

@Component({
    selector: "app-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
    @Input()
    public src: string = "";
    @Input()
    public title: string = "";
    @Input()
    public width = "100%";
    @Input()
    public height?: string;
    @Input()
    public className = "";
    @Input()
    public preserveAspectRatio = "xMinYMax meet";

    constructor(private iconSpriteService: IconSpriteService) {
    }

    ngOnChanges(): void {
        if (this.src && !this.src.includes("#") && this.iconSpriteService.spritePath) {
            this.src = `${this.iconSpriteService.getPath()}#${this.src}`;
        }
    }
}
