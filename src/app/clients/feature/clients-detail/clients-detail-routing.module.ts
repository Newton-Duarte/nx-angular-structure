import { RouterModule, Routes } from "@angular/router";
import { ClientsDetailPage } from "./clients-detail.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: ClientsDetailPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsDetailPageRoutingModule {}
