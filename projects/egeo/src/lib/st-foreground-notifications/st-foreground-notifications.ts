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
import {Component, Input, EventEmitter, Output, ElementRef, OnInit} from '@angular/core';

@Component({
   selector: 'st-foreground-notifications',
   templateUrl: 'st-foreground-notifications.html',
   styleUrls: ['st-foreground-notifications.scss'],
   host: {
      '[class.visible]': '_visible'
   }
})
/**
 * @description {Component} [Foreground notifications]
 *
 * Foreground notifications are made to let the user know info about a process she is performing in real time.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-foreground-notifications status="success" text="text" [visible]="isVisible"></st-foreground-notifications>
 *
 * ```
 */

export class StForegroundNotificationsComponent implements OnInit {


   /** @Input {bollean} [visible=flase] When true the notification is shown */
   @Input()
   set visible(value: boolean) {
      if (value !== undefined) {
         this._visible = value;
         this.visibleChange.emit(this._visible);
      }
   }
   get visible(): boolean {
      return this._visible;
   }

   /** @Input {string} [text=''] Displayed text */
   @Input() text: string;
   /** @Input {NotificationStatus} [status='NotificationStatus.default'] Defines the criticality level of the notification */
   @Input() status: string = 'default';

   /** @Input {autoCloseTime} [autoCloseTime='1000'] Defines the time in milliseconds for autoclose the notification */
   @Input() autoCloseTime: number;

   @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

   public _visible: boolean = false;

   constructor() { }

   ngOnInit(): void {
      if (this.autoCloseTime) {
         setTimeout(() => this.onClose(), this.autoCloseTime);
      }
   }

   onClose(): void {
      this.visible = false;
   }

   getStatus(): string {
      switch (this.status) {
         case 'success':
         case 'warning':
         case 'critical':
            return this.status;
         default:
            return 'default';
      }
   }

}


