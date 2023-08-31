import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, delay, shareReplay, tap } from "rxjs";

export type Client = {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients!: Observable<Client[]>;

  constructor(private http: HttpClient) {}

  public init() {
    if (!this.clients) {
      this.clients = this.http
        .get<Client[]>('/assets/clients-data.json')
        .pipe(delay(800))
        .pipe(
          shareReplay(1)
        );
    }

    return this.clients;
  }
}
