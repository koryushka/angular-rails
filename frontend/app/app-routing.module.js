"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var homepage_component_1 = require("./homepage/homepage.component");
var documents_component_1 = require("./documents/documents.component");
var proposal_list_component_1 = require("./proposal/proposal-list.component");
var proposal_new_component_1 = require("./proposal/proposal-new.component");
var proposal_show_component_1 = require("./proposal/proposal-show.component");
var proposal_edit_component_1 = require("./proposal/proposal-edit.component");
var indexRoute = { path: '', redirectTo: '/home', pathMatch: 'full' };
var fallbackRoute = { path: '**', component: homepage_component_1.HomepageComponent };
var routes = [
    { path: 'home', component: homepage_component_1.HomepageComponent },
    { path: 'documents', component: documents_component_1.DocumentsComponent },
    { path: 'proposals',
        children: [
            { path: '', component: proposal_list_component_1.ProposalListComponent },
            { path: 'new', component: proposal_new_component_1.ProposalNewComponent },
            { path: ':id',
                children: [
                    { path: '', component: proposal_show_component_1.ProposalShowComponent },
                    { path: 'edit', component: proposal_edit_component_1.ProposalEditComponent }
                ]
            }
        ]
    },
    {
        path: 'proposal-list',
        component: proposal_list_component_1.ProposalListComponent,
        outlet: 'proposal-list'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    indexRoute,
    fallbackRoute
];
//
// { path: 'product-details/:id', component: ProductDetails,
//   children: [
//     { path: '', redirectTo: 'overview', pathMatch: 'full' },
//     { path: 'overview', component: Overview },
//     { path: 'specs', component: Specs }
//   ]
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map