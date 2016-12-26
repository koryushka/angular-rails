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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var ProposalService = (function () {
    function ProposalService(http) {
        this.http = http;
        this.proposalsUrl = 'http://localhost:3003/proposals';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ProposalService.prototype.setProposal = function (proposal) {
        this.proposal = proposal;
        // this.proposalEditor = proposalEditor;
        console.debug("Service: ", this.proposal);
    };
    ProposalService.prototype.getProposals = function () {
        return this.http.get(this.proposalsUrl)
            .map(function (response) { return response.json(); });
    };
    ProposalService.prototype.getProposal = function (id) {
        var url = this.proposalsUrl + "/" + id;
        return this.http.get(url);
    };
    ProposalService.prototype.createProposal = function (proposal) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this.http.post(this.proposalsUrl, JSON.stringify(proposal), { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    ProposalService.prototype.updateProposal = function (proposal) {
        var url = this.proposalsUrl + "/" + proposal.id;
        return this.http
            .put(url, JSON.stringify(proposal), { headers: this.headers })
            .map(function () { return proposal; });
    };
    ProposalService.prototype.removeProposal = function (id) {
        var url = this.proposalsUrl + "/" + id;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log(id);
        return this.http.delete(url, { headers: headers })
            .map(function () { return null; });
    };
    ProposalService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return ProposalService;
}());
ProposalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProposalService);
exports.ProposalService = ProposalService;
//# sourceMappingURL=proposal.service.js.map