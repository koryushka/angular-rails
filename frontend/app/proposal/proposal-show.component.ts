import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ]
})

export class ProposalShowComponent implements OnInit {
  constructor(
    private router: Router,
    private http: Http,
    private route: ActivatedRoute,
    private proposalService: ProposalService
  ){};

  proposals: Proposal[];
  proposalEditor: boolean = false;
  submitted: boolean = false;

  errorMessage: string;

  ngOnInit(): void{
    console.debug("INIT")
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
          this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(response => {
      this.proposal = response.json();
      // this.proposalService.setProposalDetails(this.proposal, false);
      this.proposalService.setProposal(this.proposal);

    });
  }

  goToProposals(){
    let link = ['/proposals'];
    return this.router.navigate(link);
  }

  goToEdit(proposal: Proposal) {
    let link = [`proposals/${proposal.id}/edit`];
    // this.proposalService.writeProposal(proposal);
    // this.proposalService.proposalEditor = true;
    // this.proposalEditor = true;
    return this.router.navigate(link);
  }

  updateProposal(proposal: Proposal){
    this.submitted = true
    return this.proposalService.updateProposal(proposal)
               .subscribe(
                 data => {return true},
                 error => {
                   console.log('Smth went wrong');
                   return Observable.throw(error);
                 }
               );

  }

  @Input() proposal: Proposal;
}
