import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouersViewComponent } from './couers-view.component';

describe('CouersViewComponent', () => {
  let component: CouersViewComponent;
  let fixture: ComponentFixture<CouersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
