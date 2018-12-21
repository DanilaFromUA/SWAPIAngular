import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MainRoutingModule} from './main-routing.module';
import {MatButtonModule, MatTableModule} from '@angular/material';
import {MainComponent} from './main.component';
import {SharedModule} from '../../shared-components/shared-module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class MainModule {}