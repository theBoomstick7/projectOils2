import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "../core/authError/error.component";
import { GeneralErrorComponent } from "../core/general-error/general-error.component";
import { authGuard } from "../core/guards/authGuard";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [authGuard],
        data: {
        'mustBeLogged' : false
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [authGuard],
        data: {
        'mustBeLogged' : false
        }
    },
    {
        path: `error`,
        component: ErrorComponent
      },
    {
        path: '**',
        component: GeneralErrorComponent
    }
    
]

export const AuthRoutingModule = RouterModule.forChild(routes)