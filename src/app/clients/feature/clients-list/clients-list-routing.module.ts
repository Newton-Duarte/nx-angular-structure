import { RouterModule, Routes } from "@angular/router";
import { ClientsListPage } from "./clients-list.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: ClientsListPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsListPageRoutingModule {}
