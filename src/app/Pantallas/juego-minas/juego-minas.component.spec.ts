import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoMinasComponent } from './juego-minas.component';

describe('JuegoMinasComponent', () => {
  let component: JuegoMinasComponent;
  let fixture: ComponentFixture<JuegoMinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoMinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoMinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
