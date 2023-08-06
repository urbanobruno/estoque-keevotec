import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mercadoria } from './models/mercadoria.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadoriaService {
  private apiUrlListar = 'http://localhost:8000/api/listar_mercadorias/'; 
  private apiUrlCadastro = 'http://localhost:8000/api/cadastrar_mercadoria/'; 
  private apiUrlEditar = 'http://localhost:8000/api/editar_mercadoria/'; 
  private apiUrlExcluir = 'http://localhost:8000/api/deletar_mercadoria'; // TODO check

  constructor(private http: HttpClient) { }

  listarMercadorias(): Observable<Mercadoria[]> {
    return this.http.get<Mercadoria[]>(this.apiUrlListar);
  }

  cadastrarMercadoria(mercadoria: Mercadoria) {
    return this.http.post(this.apiUrlCadastro, mercadoria);
  }

  editarMercadoria(mercadoria: Mercadoria) {
    return this.http.put(this.apiUrlEditar + mercadoria.id + '/', mercadoria);
  }

  deletarMercadoria(id: number | undefined) {
    return this.http.delete(`${this.apiUrlExcluir}/${id}/`);
  }

  // Evento de cadastro de uma nova mercadoria
  private eventoCadastroSubject = new Subject<void>();
  eventoCadastro$ = this.eventoCadastroSubject.asObservable();

  emitirEventoCadastro() {
    this.eventoCadastroSubject.next();
  }

}
