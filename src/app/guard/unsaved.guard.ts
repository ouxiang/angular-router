import { CanDeactivate } from "@angular/router";
import { ProductComponent } from "../product/product.component";
  // 泛型 ，指定要离开的那个组件
export class UnsavedGuard implements CanDeactivate<ProductComponent>{
    canDeactivate(component: ProductComponent) {

        return window.confirm('你还没有保存，确定要离开吗?')
    }
}