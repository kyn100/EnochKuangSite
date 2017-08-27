import { NgModule } from '@angular/core';
import { 
  MdCheckboxModule,
  MdRadioModule,
  MdSelectModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdIconModule,
  MdButtonModule,
  MdChipsModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdTabsModule,
  MdDialogModule
} from '@angular/material';

@NgModule({
  exports: [
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdIconModule,
    MdButtonModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdTabsModule,
    MdDialogModule
  ]
})
export class MdComponentsModule { }
