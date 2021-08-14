import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIDEBARComponent } from './sidebar.component';

describe('SIDEBARComponent', () => {
  let component: SIDEBARComponent;
  let fixture: ComponentFixture<SIDEBARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIDEBARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SIDEBARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
