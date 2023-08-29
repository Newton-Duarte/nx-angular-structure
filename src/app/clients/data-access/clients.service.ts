import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, delay } from "rxjs";

export type Client = {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clients$ = new BehaviorSubject<Client[]>([]);

  constructor(private http: HttpClient) {}

  public init(): void {
    this.http
      .get<Client[]>('/assets/clients-data.json')
      .pipe(delay(800))
      .subscribe((response) => {
        this.clients$.next(response);
      });
  }

  public getClients(): Observable<Client[]> {
    return this.clients$;
  }
}
