import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMercadoriaComponent } from './cadastro-mercadoria.component';

describe('CadastroMercadoriaComponent', () => {
  let component: CadastroMercadoriaComponent;
  let fixture: ComponentFixture<CadastroMercadoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroMercadoriaComponent]
    });
    fixture = TestBed.createComponent(CadastroMercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
