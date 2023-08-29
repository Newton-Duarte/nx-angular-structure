import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListPage implements OnInit {
  clients = [
    "Newton",
    "Rita",
    "Katia",
    "Maria",
    "Kleber",
    "Sabrina"
  ]

  constructor() {}
  ngOnInit(): void {}
}
