import { Component } from '@angular/core';
import { ToolbarModel } from './toolbarModel';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  providers:[ToolbarModel]
})

export class ToolbarComponent {

  constructor(public model: ToolbarModel) {}

}
