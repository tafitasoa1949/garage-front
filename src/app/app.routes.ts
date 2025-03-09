import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/components/not-found/not-found.component';
import { TestComponent } from './test/components/test/test.component';
import { VoitureFormComponent } from './voiture/voiture-form/voiture-form.component';

export const routes: Routes = [
    { path: 'test', component: TestComponent },
    { path: 'voiture', component: VoitureFormComponent },
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }

];
