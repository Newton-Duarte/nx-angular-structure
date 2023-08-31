import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Client, ClientsService } from '../../data-access/clients.service';
import { Observable, catchError, ignoreElements, of } from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListPage {
  public clients$ = this.clientsService.init();
  public clientsError$ = this.clients$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );

  constructor(private clientsService: ClientsService) {}
}
