import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, timeout } from "rxjs";
import { Card, MtgcardApi } from "../models/mtgcardapi.interface";

@Injectable({
  providedIn: "root",
})
export class MtgcardsService {
  constructor(private http: HttpClient) {}

  getAllMtgcards(): Observable<Card[]> {
    return this.http
      .get<MtgcardApi[]>("https://api.magicthegathering.io/v1/cards")
      .pipe(
        map((response: any) =>
          response.cards.filter((card: any) => card.imageUrl !== undefined)
        )
      );
  }

  /*getMtgcardById(id: string): Observable<Card> {
    return this.http
      .get<MtgcardApi>("https://api.magicthegathering.io/v1/cards/" + id)
      .pipe(map((response: MtgcardApi) => response.card));
  }*/

  getMtgcardById(id: string): Observable<Card> {
    return this.http
      .get<MtgcardApi>("https://api.magicthegathering.io/v1/cards/" + id)
      .pipe(
        timeout(4000),
        catchError((error) => {
          return of(null);
        }),
        map((response: MtgcardApi | null) =>
          response ? response : ({} as MtgcardApi)
        ),
        map((response: MtgcardApi) => response.card)
      );
  }
}
