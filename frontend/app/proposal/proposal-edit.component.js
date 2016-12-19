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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var proposal_1 = require('./proposal');
var proposal_service_1 = require('./proposal.service');
var ProposalEditComponent = (function () {
    function ProposalEditComponent(router, http, route, proposalService) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.proposalService = proposalService;
    }
    ;
    ProposalEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var proposalRequest = this.route.params
            .flatMap(function (params) {
            return _this.proposalService.getProposal(+params['id']);
        });
        proposalRequest.subscribe(function (response) { return _this.proposal = response.json(); });
    };
    ProposalEditComponent.prototype.save = function () {
        var _this = this;
        this.proposalService.update(this.proposal)
            .then(function () { return _this.goBack(); });
    };
    ProposalEditComponent.prototype.goToProposals = function () {
        var link = ['/proposals'];
        return this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', proposal_1.Proposal)
    ], ProposalEditComponent.prototype, "proposal", void 0);
    ProposalEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-edit',
            templateUrl: 'proposal-edit.component.html',
            styleUrls: ['proposal-edit.component.css'],
            providers: [proposal_service_1.ProposalService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, router_1.ActivatedRoute, proposal_service_1.ProposalService])
    ], ProposalEditComponent);
    return ProposalEditComponent;
}());
exports.ProposalEditComponent = ProposalEditComponent;
//# sourceMappingURL=proposal-edit.component.js.map