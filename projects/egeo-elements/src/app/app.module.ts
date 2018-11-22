/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StHeaderModule } from '@stratio/egeo';
import { stElementsModules } from '@stratio/egeo-elements';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StHeaderModule
  ],
  providers: [ // Provide Service Here
    {
      provide: StHeaderModule,
      useFactory: (<any>StHeaderModule).withElements()
    }
  ],
  bootstrap: []
})
export class AppModule { }
