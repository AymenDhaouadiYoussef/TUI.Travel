import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';

export interface LoaderState {
  show : boolean;
}

@Injectable()
export class LoaderService {

  constructor() {}

  private loaderSubject = new Subject < LoaderState > ();

  get loaderState() : Observable < LoaderState > {
    return this
      .loaderSubject
      .asObservable();
  }

  public show()
  {
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  public hide()
  {
    this.loaderSubject.next(<LoaderState>{show: false});
  }
}
