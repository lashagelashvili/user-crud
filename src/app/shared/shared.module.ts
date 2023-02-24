import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackArrowComponent } from './components/back-arrow/back-arrow.component';
import { ReturnHomeComponent } from './components/return-home/return-home.component';

@NgModule({
  declarations: [BackArrowComponent, ReturnHomeComponent],
  imports: [],
  exports: [BackArrowComponent, ReturnHomeComponent],
})
export class SharedModule {}
