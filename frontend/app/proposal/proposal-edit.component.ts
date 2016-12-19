import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-edit',
  templateUrl: 'proposal-edit.component.html',
  styleUrls: ['proposal-edit.component.css'],
  providers: [ ProposalService ]
})

export class ProposalEditComponent implements OnInit{
  constructor(
    private router: Router,
    private http: Http,
    private route: ActivatedRoute,
    private proposalService: ProposalService
  ){};

  proposals: Proposal[];
  errorMessage: string;


  @Input()
  proposal: Proposal;

  ngOnInit(): void{
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
          this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(response => this.proposal = response.json())
  }

  save(): void {
    this.proposalService.update(this.proposal)
      .then(() => this.goBack());
  }

  goToProposals(){
    let link = ['/proposals']
    return this.router.navigate(link)
  }
}
