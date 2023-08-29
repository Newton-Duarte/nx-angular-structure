import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.page.html',
  styleUrls: ['./clients-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsDetailPage implements OnInit {
  clientId: string | null = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id');
  }
}
