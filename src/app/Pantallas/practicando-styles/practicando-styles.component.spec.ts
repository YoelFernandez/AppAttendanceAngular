import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticandoStylesComponent } from './practicando-styles.component';

describe('PracticandoStylesComponent', () => {
  let component: PracticandoStylesComponent;
  let fixture: ComponentFixture<PracticandoStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticandoStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticandoStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
