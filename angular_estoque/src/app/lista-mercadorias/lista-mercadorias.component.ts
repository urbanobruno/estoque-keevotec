import { Component, OnInit, ViewChild } from '@angular/core';
import { Mercadoria } from '../models/mercadoria.model';
import { MercadoriaService } from '../mercadoria.service';


import { NgForm } from '@angular/forms';

declare var window: any;

@Component({
  selector: 'app-lista-mercadorias',
  templateUrl: './lista-mercadorias.component.html',
  styleUrls: ['./lista-mercadorias.component.css'],
})
export class ListaMercadoriasComponent implements OnInit {
  mercadorias: Mercadoria[] = [];
  mercadoriaSelecionada: Mercadoria = {
    codigo: '',
    descricao: '',
    quantidade: 0,
    unidade_medida: ''
  };

  formEditarModal!: any;

  @ViewChild('formEditar') formEditar!: NgForm;


  constructor(private mercadoriaService: MercadoriaService) {}

  ngOnInit() {
    this.listarMercadorias();

    // Evento de cadastro de uma mercadoria
    this.mercadoriaService.eventoCadastro$.subscribe(() => {
      // Atualiza a lista de mercadorias
      this.listarMercadorias();
    });

    this.formEditarModal = new window.bootstrap.Modal(
      document.getElementById("ModalEditarMercadoria")
    );

  }

  closeEditarModal() {
    if (this.formEditarModal) {
      this.formEditarModal.hide();
    }
  }

  editarMercadoriaHandler(mercadoria: Mercadoria) {
    this.mercadoriaSelecionada = { ...mercadoria };

    this.formEditarModal.show();
  }

  editarRequest(mercadoria: Mercadoria) {
    this.mercadoriaService.editarMercadoria(mercadoria).subscribe(
      (data) => {
        // Emitir o evento após o sucesso do cadastro
        this.mercadoriaService.emitirEventoCadastro();
        
        this.formEditarModal.hide();

      },
      (error) => {
        console.error(error);
      }
    );
  }

  deletarMercadoria(mercadoria_id: number | undefined) {
    this.mercadoriaService.deletarMercadoria(mercadoria_id).subscribe(
      (data) => {
        // Emitir o evento após o sucesso do cadastro
        this.mercadoriaService.emitirEventoCadastro();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  listarMercadorias() {
    this.mercadoriaService.listarMercadorias().subscribe(
      (data) => {
        this.mercadorias = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
