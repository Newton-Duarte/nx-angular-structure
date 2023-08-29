import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Client, ClientsService } from '../../data-access/clients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListPage implements OnInit {
  public clients$!: Observable<Client[]>;

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clients$ = this.clientsService.getClients();
    this.clientsService.init();
  }
}
