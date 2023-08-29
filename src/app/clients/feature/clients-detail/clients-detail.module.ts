import { NgModule } from "@angular/core";
import { ClientsDetailPage } from "./clients-detail.page";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClientsDetailPageRoutingModule } from "./clients-detail-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientsDetailPageRoutingModule,
  ],
  declarations: [ClientsDetailPage],
})
export class ClientsDetailPageModule {}
