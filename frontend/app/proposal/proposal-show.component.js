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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var proposal_1 = require("./proposal");
var proposal_service_1 = require("./proposal.service");
var ProposalShowComponent = (function () {
    function ProposalShowComponent(router, http, route, proposalService) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.proposalService = proposalService;
        this.proposalEditor = false;
        this.submitted = false;
    }
    ;
    ProposalShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.debug("INIT");
        var proposalRequest = this.route.params
            .flatMap(function (params) {
            return _this.proposalService.getProposal(+params['id']);
        });
        proposalRequest.subscribe(function (response) {
            _this.proposal = response.json();
            // this.proposalService.setProposalDetails(this.proposal, false);
            _this.proposalService.setProposal(_this.proposal);
        });
    };
    ProposalShowComponent.prototype.goToProposals = function () {
        var link = ['/proposals'];
        return this.router.navigate(link);
    };
    ProposalShowComponent.prototype.goToEdit = function (proposal) {
        var link = ["proposals/" + proposal.id + "/edit"];
        // this.proposalService.writeProposal(proposal);
        // this.proposalService.proposalEditor = true;
        // this.proposalEditor = true;
        return this.router.navigate(link);
    };
    ProposalShowComponent.prototype.updateProposal = function (proposal) {
        this.submitted = true;
        return this.proposalService.updateProposal(proposal)
            .subscribe(function (data) { return true; }, function (error) {
            console.log('Smth went wrong');
            return Rx_1.Observable.throw(error);
        });
    };
    return ProposalShowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", proposal_1.Proposal)
], ProposalShowComponent.prototype, "proposal", void 0);
ProposalShowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-show',
        templateUrl: 'proposal-show.component.html',
        styleUrls: ['proposal-show.component.css'],
        providers: [proposal_service_1.ProposalService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        router_1.ActivatedRoute,
        proposal_service_1.ProposalService])
], ProposalShowComponent);
exports.ProposalShowComponent = ProposalShowComponent;
//# sourceMappingURL=proposal-show.component.js.map