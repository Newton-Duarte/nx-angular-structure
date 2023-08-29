import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ClientsListPage } from "./clients-list.page";
import { ClientsListPageRoutingModule } from "./clients-list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientsListPageRoutingModule,
  ],
  declarations: [ClientsListPage],
})
export class ClientsListPageModule {}
