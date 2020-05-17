import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsHorizontalComponent } from './graphics-horizontal.component';

describe('GraphicsHorizontalComponent', () => {
  let component: GraphicsHorizontalComponent;
  let fixture: ComponentFixture<GraphicsHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
