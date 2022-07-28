import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationRenderingSplitComponent } from './presentation-rendering-split.component';

describe('PresentationRenderingSplitComponent', () => {
  let component: PresentationRenderingSplitComponent;
  let fixture: ComponentFixture<PresentationRenderingSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationRenderingSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationRenderingSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
