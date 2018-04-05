import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Product } from "../product/product.component";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

//  Resolve  需要声明一个泛型
// 需要装饰器，router 才能被注入进来
@Injectable()
export class ProductResolve implements Resolve<Product> {
    constructor(private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {

        let productId: number = route.params['id'];

        //判断是否有数据，没有数据就导航home路由页面上
        if (productId == 1) {
            return new Product(1, 'IPhone8')
        } else {
            this.router.navigate(['/home'])
            // return undefined;
        }
    }
}