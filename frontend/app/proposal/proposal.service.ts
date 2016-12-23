import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal'

@Injectable()

export class ProposalService {
  private proposalsUrl = 'http://localhost:3003/proposals';
  private headers = new Headers({'Content-Type': 'application/json'});
  proposal: Proposal;
  proposalEditor: boolean;

  constructor(
    private http: Http
  ){}

  setProposal(proposal: Proposal){
    this.proposal = proposal;
    // this.proposalEditor = proposalEditor;
  }


  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
                    .map((response: Response) => <Proposal[]>response.json())
  }

  getProposal(id: number){
    const url = `${this.proposalsUrl}/${id}`;
    return this.http.get(url);
  }

  createProposal(proposal: Proposal){
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: this.headers})
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), {headers: headers})
                    .map((resp: Response) => resp.json())
  }

  updateProposal(proposal: Proposal): Observable<Proposal> {
    const url = `${this.proposalsUrl}/${proposal.id}`;
    return this.http
      .put(url, JSON.stringify(proposal), {headers: this.headers})
      .map(()  => proposal)
  }

  removeProposal(id: number): Observable<void> {
    const url = `${this.proposalsUrl}/${id}`;
    let headers = new Headers({'Content-Type': 'application/json'})
    console.log(id)
    return this.http.delete(url, {headers: headers})
                    .map(()  => null)
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
