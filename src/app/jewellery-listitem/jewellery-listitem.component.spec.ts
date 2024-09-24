import { ComponentFixture, TestBed } from '@angular/core/testing';

import {JewelleryListItemComponent} from './jewellery-listitem.component';

describe('JewelleryListlitemComponent', () => {
  let component: JewelleryListItemComponent;
  let fixture: ComponentFixture<JewelleryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelleryListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelleryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
