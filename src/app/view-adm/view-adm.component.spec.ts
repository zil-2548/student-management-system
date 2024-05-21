import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdmComponent } from './view-adm.component';

describe('ViewAdmComponent', () => {
  let component: ViewAdmComponent;
  let fixture: ComponentFixture<ViewAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
