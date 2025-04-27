import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducaoDeCustoMedioComponent } from './reducao-de-custo-medio.component';

describe('ReducaoDeCustoMedioComponent', () => {
  let component: ReducaoDeCustoMedioComponent;
  let fixture: ComponentFixture<ReducaoDeCustoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReducaoDeCustoMedioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReducaoDeCustoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
