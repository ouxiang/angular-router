# Router

本部分主要讲解Angular  Route相关知识

路由对象：

Routes：       路由配置，保存着哪个URL对应哪个组件，以及在哪个RouterOutlet中展示组件
RouterOutlet： 在HTML中标记路由内容呈现位置的占位符指令
Router：       负责在运行执行路由的对象，可以通过调用其navigate()和navigateByUrl()方法来导航到一个指定的路由
RouterLink:    在Html中生命路由导航用的指令
ActivatedRoute:当前激活的路由对象，保存着当前路由的信息，如路由地址、路由参数


路由对象位置：

Routes:

path:/user, component：A
path:/order,component：B

AppComponent：

模板                                     
RouterOutlet                            
RouterLink	                          

控制器
Router
ActivatedRoute

在查询参数中传递数据

/product?id=1&name=2 => ActivatedRoute.queryParams[id]

在路由路径中传递数据

{path:/}

在路由配置中传递参数


// 重定向路由

在用户访问一个特定的地址时，将其重定向到另一个指定的地址
 { path: '', redirectTo: '/home', pathMatch: 'full' },  // 路由重定向

// 子路由
{path:’home’,component:HomeComponent,
    children:[]

}


// 辅助路由(多个插座)

1、
<router-outlet></router-outlet>
<router-outlet name=‘aux'></router-outlet>

App模板上再定义一个插座来显示聊天面板
单独开发一个聊天组件，只显示在新定义的插座上
通过路由参数控制新插座是否显示聊天面板



// 路由守卫
1、只有当用户已经登录并拥有某些权限时才能进入某些路由；
2、一个由多个表单组件组成的向导，例如注册流程，用户只有在当前路由的组件中填写的满足要求的信息才可以导航到下一个路由；
3、当用户未执行保存操作而试图离开当前导航时提醒用户

通过钩子实现以上操作，也称为路由守卫
1、CanActivate:  处理导航到某路由的情况
2、CanDeactivate：处理从当前路由离开的情况
3、Resolve：在路由激活之前获取路由数据