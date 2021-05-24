import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Zorro Components
import {NzButtonModule} from 'ng-zorro-antd/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule
  ],
  exports: [
    NzButtonModule
  ]
})
export class MaterialModule { }
