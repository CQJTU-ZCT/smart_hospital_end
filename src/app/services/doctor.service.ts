import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class DoctorService {
  private subject = new Subject<any>();

  sendMessae(msg: any) {
    this.subject.next({
      data: msg
    });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }


  constructor() { }

}
