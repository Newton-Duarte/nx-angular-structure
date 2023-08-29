import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../clients-list/clients-list.module').then((m) => m.ClientsListPageModule),
  },
  {
    path: ':id',
    loadChildren: () => import('../clients-detail/clients-detail.module').then((m) => m.ClientsDetailPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsShellRoutingModule {}
