import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpartanComponent } from './spartan.component';

describe('SpartanComponent', () => {
  let component: SpartanComponent;
  let fixture: ComponentFixture<SpartanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpartanComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
