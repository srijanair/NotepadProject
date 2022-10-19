import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditusersComponent } from './addeditusers.component';

describe('AddeditusersComponent', () => {
  let component: AddeditusersComponent;
  let fixture: ComponentFixture<AddeditusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
