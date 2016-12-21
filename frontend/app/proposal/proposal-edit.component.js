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
var proposal_service_1 = require("./proposal.service");
// import { Proposal } from './proposal';
var ProposalEditComponent = (function () {
    // @Input() proposal: Proposal;
    function ProposalEditComponent(proposalService) {
        this.proposalService = proposalService;
        // proposal: Proposal = new Proposal( 1, 'ABC Company', 'http://portfolio.com', 'Ruby on Rails', 150, 120, 15, 'my_email@google.com');
        this.proposal = JSON.stringify(this.proposalService);
    }
    ;
    return ProposalEditComponent;
}());
ProposalEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-edit',
        templateUrl: 'proposal-edit.component.html',
        styleUrls: ['proposal-edit.component.css'],
        providers: [proposal_service_1.ProposalService]
    }),
    __metadata("design:paramtypes", [proposal_service_1.ProposalService])
], ProposalEditComponent);
exports.ProposalEditComponent = ProposalEditComponent;
//# sourceMappingURL=proposal-edit.component.js.map