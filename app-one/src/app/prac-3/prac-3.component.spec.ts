import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac3Component } from './prac-3.component';

describe('Prac3Component', () => {
  let component: Prac3Component;
  let fixture: ComponentFixture<Prac3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prac3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
