import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroMercadoriaComponent } from './cadastro-mercadoria/cadastro-mercadoria.component';
import { ListaMercadoriasComponent } from './lista-mercadorias/lista-mercadorias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    CadastroMercadoriaComponent,
    ListaMercadoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
