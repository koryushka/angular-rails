import { Component } from '@angular/core';
import { Proposal } from './proposal';
import { Observable } from 'rxjs/Rx';
// import { Observable } from "rxjs/Observable";
import { ProposalService } from './proposal.service';
@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css']
})

export class ProposalNewComponent {
  proposal = new Proposal();
  submitted: boolean = false;

  constructor(
    private proposalService: ProposalService
  ){}

  createProposal(proposal: Proposal){
    this.submitted = true
    return this.proposalService.createProposal(proposal)
               .subscribe(
                 data => {return true},
                 error => {
                   console.log('Smth went wrong');
                   return Observable.throw(error);
                 }
               );

  }
}
