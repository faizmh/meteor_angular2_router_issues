import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { MARKET_DECLARATIONS } from './market';
import { HOME_DECLARATIONS } from './home';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [
    AppComponent,
    ...MARKET_DECLARATIONS,
    ...HOME_DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}