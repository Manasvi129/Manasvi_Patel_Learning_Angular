import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryListlitemComponent } from './jewellery-listlitem.component';

describe('JewelleryListlitemComponent', () => {
  let component: JewelleryListlitemComponent;
  let fixture: ComponentFixture<JewelleryListlitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelleryListlitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelleryListlitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
