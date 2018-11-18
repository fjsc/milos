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

import { Component } from '@angular/core';
import { DEMO_MENU, DemoMenu } from '@app/demos/demos.routes';

import { DemoSideMenu } from '../../../shared/menu/menu.model';

@Component({
   selector: 'demo-layout',
   templateUrl: './demo-layout.component.html',
   styleUrls: ['./demo-layout.component.scss']
})
export class DemoLayoutComponent {
   public menu: DemoMenu[] = DEMO_MENU || [];
   public title: string;

   public get demoMenu(): DemoSideMenu[] {
      return DEMO_MENU.map(_ => ({ label: _.name, url: `/components/demo/${_.path}` }));
   }

   public updateDemoTitle(demoPosition: number): void {
      this.title = DEMO_MENU[demoPosition] ? DEMO_MENU[demoPosition].name : '';
   }
}
