import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-login',
    loadChildren: () => import('./tab-login/tab-login.module').then( m => m.TabLoginPageModule)
  },
  {
    path: 'tab-register',
    loadChildren: () => import('./tab-register/tab-register.module').then( m => m.TabRegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
