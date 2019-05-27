import { NgModule } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
// other imports
const MODULES = [
  CovalentLayoutModule,
  CovalentStepsModule,
  // (optional) Additional Covalent Modules imports
  CovalentHighlightModule,
  CovalentMarkdownModule,
  CovalentDynamicFormsModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class CovalentComponentModules { }