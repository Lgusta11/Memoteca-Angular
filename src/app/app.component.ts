import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./Components/cabecalho/cabecalho.component";
import { RodapeComponent } from "./Components/rodape/rodape.component";
import { CriarPensamentosComponent } from "./Components/pensamentos/criar-pensamentos/criar-pensamentos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoteca';
}
