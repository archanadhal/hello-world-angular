import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchanaComponent } from './archana.component';

describe('ArchanaComponent', () => {
  let component: ArchanaComponent;
  let fixture: ComponentFixture<ArchanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
