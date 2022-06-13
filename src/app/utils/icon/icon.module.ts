import { CommonModule } from "@angular/common";
import {
  ModuleWithProviders,
  NgModule
} from "@angular/core";
import { IconSpriteService } from "./icon-sprite.service";
import { IconComponent } from "./icon.component";
import { IconSpriteConfig } from "./models/icon-sprite-config";

@NgModule({
  imports: [CommonModule],
  declarations: [IconComponent],
  providers: [IconSpriteService],
  exports: [IconComponent]
})
export class IconModule {
  public static forRoot(config: IconSpriteConfig): ModuleWithProviders<IconModule> {
    return {
      ngModule: IconModule,
      providers: [
        {
          provide: IconSpriteConfig,
          useValue: config
        }
      ]
    };
  }
}
