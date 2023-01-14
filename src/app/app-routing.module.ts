import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MtgcardComponent } from './components/mtgcard/mtgcard.component';
import { MtgcardsComponent } from './components/mtgcards/mtgcards.component';

const routes: Routes = [
  { path: '', component: MtgcardsComponent },
  { path: 'mtgcard/:id', component: MtgcardComponent },
  { path: '**', component: MtgcardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
