import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Card } from "src/app/models/mtgcardapi.interface";
import { MtgcardsService } from "src/app/services/mtgcards.service";

@Component({
  selector: "app-mtgcard",
  templateUrl: "./mtgcard.component.html",
  styleUrls: ["./mtgcard.component.css"],
})
export class MtgcardComponent implements OnInit {
  mtgcard?: Card;
  panelOpenState = false;
  loading: boolean = true;
  //timeoutReturnButton: boolean = false;

  constructor(
    private mtgService: MtgcardsService,
    // El siguiente objeto permite leer el parámetro de la url
    private activatedRoute: ActivatedRoute,
    // El siguiente permite redirigir al usuario a esta vista si no se dispone de un identificador válido
    private router: Router
  ) {}

  ngOnInit(): void {
    // Ese 'id' tiene que ser el parámetro que está definido en app-routing.module.ts
    const identifier = this.activatedRoute.snapshot.paramMap.get("id");

    /*this.mtgService.getMtgcardById(identifier!).subscribe({
      next: (mtgcard) => {
        this.loading = false;
        if (!mtgcard) {
          return this.router.navigateByUrl("/");
        }
        this.mtgcard = mtgcard;
        return null;
      },
      error: (error) => {
        console.log("Entro en el error");
        this.loading = false;
        this.timeoutReturnButton = true;
      },
    });*/

    this.mtgService.getMtgcardById(identifier!).subscribe((mtgcard) => {
      this.loading = false;
      if (!mtgcard) {
        return this.router.navigateByUrl("/");
      }
      this.mtgcard = mtgcard;
      console.log(this.mtgcard);
      return null;
    });
  }
}
