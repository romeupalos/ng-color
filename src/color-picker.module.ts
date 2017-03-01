import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicColorPickerSlider } from './sample.component';
import { IonicColorPicker } from './color-picker.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { SliderDirective } from './slider.directive';
import { TextDirective } from './text.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    IonicColorPickerSlider,
    IonicColorPicker,
    SampleDirective,
    SamplePipe,
    SliderDirective,
    TextDirective
  ],
  bootstrap: [IonicApp],
  exports: [
    IonicColorPickerSlider,
    IonicColorPicker,
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}