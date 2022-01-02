import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesListComponent} from "./notes-list/notes-list.component";

const routes: Routes = [
  {path: 'notes', component: NotesListComponent},
  {path: '', redirectTo: '/notes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
