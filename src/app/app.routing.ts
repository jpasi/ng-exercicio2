import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './componentes/usuario/usuario.component';



const APP_ROUTES: Routes = [
    { path: 'usuario', component: UsuarioComponent},

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);