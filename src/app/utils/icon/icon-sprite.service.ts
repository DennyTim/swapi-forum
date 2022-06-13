import {
  Injectable,
  Optional
} from "@angular/core";
import { IconSpriteConfig } from "./models/icon-sprite-config";

@Injectable({
  providedIn: "root"
})
export class IconSpriteService {
  public spritePath: string = "";

  constructor(@Optional() config: IconSpriteConfig) {
    if (config) {
      this.setPath(config.path);
    }
  }

  public setPath(path: string): void {
    this.spritePath = path;
  }

  public getPath(): string {
    return this.spritePath;
  }
}
