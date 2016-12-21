import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ProposalService } from './proposal.service';
import { Proposal } from './proposal';


// import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-edit',
  templateUrl: 'proposal-edit.component.html',
  styleUrls: ['proposal-edit.component.css'],
  providers: [ ProposalService ]
})

export class ProposalEditComponent{
  // @Input() proposal: Proposal;
  constructor(
    private proposalService: ProposalService
  ){};

  // proposal: Proposal = new Proposal( 1, 'ABC Company', 'http://portfolio.com', 'Ruby on Rails', 150, 120, 15, 'my_email@google.com');
  proposal = JSON.stringify(this.proposalService);

  // proposal = 'Test'
}
