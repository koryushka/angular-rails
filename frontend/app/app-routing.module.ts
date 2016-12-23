import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { ProposalEditComponent } from './proposal/proposal-edit.component';

const indexRoute =   { path: '', redirectTo: '/home', pathMatch: 'full'}
const fallbackRoute = { path: '**', component: HomepageComponent }
const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'proposals',
    children: [
      {path: '', component: ProposalListComponent },
      { path: 'new', component: ProposalNewComponent },
      { path: ':id',
        children:[
          {path: '', component: ProposalShowComponent},
          { path: 'edit', component: ProposalEditComponent }
        ]
      }
    ]
 },
 {
   path: 'proposal-list',
   component: ProposalListComponent,
   outlet: 'proposal-list'
 },
 {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
},
indexRoute,
fallbackRoute

]
//
// { path: 'product-details/:id', component: ProductDetails,
//   children: [
//     { path: '', redirectTo: 'overview', pathMatch: 'full' },
//     { path: 'overview', component: Overview },
//     { path: 'specs', component: Specs }
//   ]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
