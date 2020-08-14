import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtaskInputComponent } from './ttask-input.component';

describe('TtaskInputComponent', () => {
  let component: TtaskInputComponent;
  let fixture: ComponentFixture<TtaskInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtaskInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtaskInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
