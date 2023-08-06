import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMercadoriasComponent } from './lista-mercadorias.component';

describe('ListaMercadoriasComponent', () => {
  let component: ListaMercadoriasComponent;
  let fixture: ComponentFixture<ListaMercadoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaMercadoriasComponent]
    });
    fixture = TestBed.createComponent(ListaMercadoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
