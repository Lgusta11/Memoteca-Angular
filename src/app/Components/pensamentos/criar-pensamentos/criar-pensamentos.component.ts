import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent implements OnInit{

  pensamento = {
    id : '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() {}

  ngOnInit(): void {

  }

  criarPensamento(){
    alert("Novo pensamento")
  }

}
