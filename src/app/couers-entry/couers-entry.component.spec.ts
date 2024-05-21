import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouersEntryComponent } from './couers-entry.component';

describe('CouersEntryComponent', () => {
  let component: CouersEntryComponent;
  let fixture: ComponentFixture<CouersEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouersEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouersEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
