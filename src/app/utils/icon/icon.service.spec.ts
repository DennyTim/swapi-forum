import { TestBed } from "@angular/core/testing";

import { IconSpriteService } from "./icon-sprite.service";

describe("IconService", () => {
  let service: IconSpriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconSpriteService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
