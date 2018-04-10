import {
  Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef,
} from '@angular/core';

import { FirstComponent } from '../../components/first/first.component';
import { SecondComponent } from '../../components/second/second.component';
import { UnknownComponent } from '../../components/unknown/unknown.component';
import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit, OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  type: string;

  @Input()
  context: any;

  private componentRef: ComponentRef<{}>;
  private mappings = {
    'FirstComponent': FirstComponent,
    'SecondComponent': SecondComponent,
  };
  getComponentType(typeName: string) {
    return this.mappings[typeName] || UnknownComponent;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      // set component context
      const instance = <DynamicComponent> this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
