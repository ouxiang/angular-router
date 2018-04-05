import { CanActivate } from "@angular/router";

// 登录的守卫
export class LoginGuard implements CanActivate {
    canActivate() {
        // 模仿调用实际登录服务，用变量判断是否登录
        let loggedIn: boolean = Math.random() < 0.5;
        if (!loggedIn) {
            console.log("用户未登陆")
        }
        return loggedIn;
    }
}