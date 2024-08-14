import { ListarPensamentoComponent } from './Components/pensamentos/listar-pensamento/listar-pensamento.component';
import { Routes } from '@angular/router';
import { CriarPensamentosComponent } from './Components/pensamentos/criar-pensamentos/criar-pensamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  }
];

export const appRoutes: Routes = routes;
