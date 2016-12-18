import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal'


@Injectable()

export class ProposalService {
  private proposalsUrl = 'http://localhost:3003/proposals';

  constructor(
    private http: Http
  ){}

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
                    .map((response: Response) => <Proposal[]>response.json())
  }

  getProposal(id: number){
    return this.http.get(this.proposalsUrl + '/' + id + '.json');
  }

  createProposal(proposal: Proposal){
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: headers})
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), {headers})
                    .map((resp: Response) => resp.json())
  }

  // removeProposal(id: number){
  //   // let headers = new Headers({'Content-Type': 'application/json'})
  //   return this.http.delete(this.proposalsUrl + '/' + id);
  //
  // }

  // Delete a comment
  removeProposal(id:string) {
      return this.http.delete(`${this.proposalsUrl}/${id}`) // ...using put request
                      //  .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                      //  .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
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
