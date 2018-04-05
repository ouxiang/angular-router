import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent, Product } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';


// 路由配置  Routes   跟路由
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // 路由重定向
  { path: 'chat', component: ChatComponent, outlet: 'aux' },  // 辅助路由   outlet  当前路由显示在哪个插座上
  { path: 'home', component: HomeComponent }, // 一组路由组件
  // { path: 'product', component: ProductComponent },
  {
    path: 'product/:id', component: ProductComponent,
    children: [
      { path: '', component: ProductDescComponent },
      { path: 'seller/:id', component: SellerInfoComponent }
    ],
    // canActivate: [LoginGuard],
    // canDeactivate: [UnsavedGuard], // canActivate 和 canDeactivate配置在商品信息路由中,为了看到resolve效果先注释掉
    resolve: {
      product: ProductResolve
    }
  },  // 修改路由配置，可以传递参数   
  { path: '**', component: Code404Component }    // 通配符路由  放在路由最后
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule { }
