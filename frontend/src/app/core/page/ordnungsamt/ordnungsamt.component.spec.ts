import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdnungsamtComponent } from './ordnungsamt.component';

describe('OrdnungsamtComponent', () => {
  let component: OrdnungsamtComponent;
  let fixture: ComponentFixture<OrdnungsamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdnungsamtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdnungsamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
