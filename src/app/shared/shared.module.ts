/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgModule } from '@angular/core';

const MODULES: any[] = [];
const COMPONENTS: any[] = [];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES]
})
export class SharedModule {}
