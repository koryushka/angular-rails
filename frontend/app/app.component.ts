import { Component } from '@angular/core';
import { ProposalService } from './proposal/proposal.service';


@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl:'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ProposalService]
})

export class AppComponent {
  title: 'Dashboard';
}
