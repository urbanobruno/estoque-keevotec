import { Component, OnInit, ViewChild } from '@angular/core';

import { Mercadoria } from '../models/mercadoria.model';
import { MercadoriaService } from '../mercadoria.service';

import { NgForm } from '@angular/forms';

declare var window: any;

@Component({
  selector: 'app-cadastro-mercadoria',
  templateUrl: './cadastro-mercadoria.component.html',
  styleUrls: ['./cadastro-mercadoria.component.css'],
})
export class CadastroMercadoriaComponent implements OnInit {
  codigo: string = '';
  descricao: string = '';
  quantidade: number = 0;
  unidade_medida: string = '';
  isModalOpen: boolean = false;

  formModal: any;

  @ViewChild('form') form!: NgForm;

  constructor(private mercadoriaService: MercadoriaService) {}

  ngOnInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('ModalMercadorias')
    );

    // Adicionar o event listener para o evento hidden.bs.modal
    this.formModal._element.addEventListener('hidden.bs.modal', () => {
      // A função a ser executada quando o modal for fechado
      this.closeModal();
    });
  }

  openModal() {
    this.formModal.show();
  }

  closeModal() {
    this.form.resetForm();
    this.formModal.hide();
  }

  cadastrar() {
    const mercadoria: Mercadoria = {
      codigo: this.codigo,
      descricao: this.descricao,
      quantidade: this.quantidade,
      unidade_medida: this.unidade_medida,
    };

    this.mercadoriaService.cadastrarMercadoria(mercadoria).subscribe(
      (data) => {

        // Emitir o evento após o sucesso do cadastro
        this.mercadoriaService.emitirEventoCadastro();

        this.form.resetForm();
        this.formModal.hide();
      },
      (error) => {
        console.error('Erro ao cadastrar mercadoria:', error);
      }
    );
  }
}
