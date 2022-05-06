import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { KontaktyComponent } from './components/kontakty/kontakty.component';

const appRoutes: Routes = [
  {path: '', component:GameComponent},
  {path: 'about', component:KontaktyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    KontaktyComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
