import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListadoListComponent } from './components/listado-list/listado-list.component';
import { CountEmpleadoComponent } from './components/count-empleado/count-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoListComponent,
    CountEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
