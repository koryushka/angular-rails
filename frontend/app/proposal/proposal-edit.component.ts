import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ProposalService } from './proposal.service';
import { Proposal } from './proposal';
import {Location} from '@angular/common';


// import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-edit',
  templateUrl: 'proposal-edit.component.html',
  styleUrls: ['proposal-edit.component.css']
  // inputs: ['proposalEditor'],
})

export class ProposalEditComponent implements OnInit {
  proposal:  Proposal;
  proposalEditor: boolean;
  submitted: boolean;

  constructor(private proposalService: ProposalService) {}

  ngOnInit() {
    // this.proposalEditor = true;
    // this.proposalEditor =   this.proposalService.proposalEditor
    // proposalService.setProposalDetails(this.proposal, true)
    console.debug("Edit: ", this.proposalService.proposal)
    this.proposal = this.proposalService.proposal;
  }

  goBack() {
    // this.proposalEditor =   false

    window.history.back();
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

}
