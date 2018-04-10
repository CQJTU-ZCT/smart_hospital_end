import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventService {

  private subject = new Subject<any>();

  publish(value: any) {
    this.subject.next(value);
  }

  subscribe(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }

}
