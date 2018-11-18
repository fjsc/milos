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

import { Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';

import { Option, HEADER_OPTIONS } from './header.model';

@Component({
  selector: 'demo-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class DemoHeaderComponent implements OnDestroy {

  public activeBackground = false;
  public options: Option[] = HEADER_OPTIONS;

   private _scrollEvent$;

  constructor() {
    this._scrollEvent$ = fromEvent(window, 'scroll').subscribe((e: any) => {
      this.activeBackground = window.scrollY > 100;
    });
  }

  ngOnDestroy(): void {
    this._scrollEvent$.unsubscribe();
  }

}
