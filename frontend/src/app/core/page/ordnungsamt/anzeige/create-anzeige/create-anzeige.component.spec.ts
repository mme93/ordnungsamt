import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnzeigeComponent } from './create-anzeige.component';

describe('CreateAnzeigeComponent', () => {
  let component: CreateAnzeigeComponent;
  let fixture: ComponentFixture<CreateAnzeigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAnzeigeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnzeigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
