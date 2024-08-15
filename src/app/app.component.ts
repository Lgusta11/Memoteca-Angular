import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./Components/cabecalho/cabecalho.component";
import { RodapeComponent } from "./Components/rodape/rodape.component";
import { CriarPensamentosComponent } from "./Components/pensamentos/criar-pensamentos/criar-pensamentos.component";
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from "./Components/pensamentos/listar-pensamento/listar-pensamento.component";
import { HttpClientModule } from '@angular/common/http'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    FormsModule,
    ListarPensamentoComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memoteca';
}
