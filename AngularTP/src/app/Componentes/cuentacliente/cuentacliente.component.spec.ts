import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaclienteComponent } from './cuentacliente.component';

describe('CuentaclienteComponent', () => {
  let component: CuentaclienteComponent;
  let fixture: ComponentFixture<CuentaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
