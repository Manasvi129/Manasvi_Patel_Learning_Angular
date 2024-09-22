import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryListComponent } from './jewellery-list.component';

describe('JewelleryListComponent', () => {
  let component: JewelleryListComponent;
  let fixture: ComponentFixture<JewelleryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelleryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
