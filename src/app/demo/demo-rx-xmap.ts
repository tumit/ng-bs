import { BehaviorSubject, map, Observable, of } from 'rxjs';

// string => Observable<string>
const http = {
  getAwesomeMessagesObservable(name: string): Observable<string> {
    return of(`${name} is awesome! (msg #1)`, `${name} is awesome! (msg #2)`);
  },
};

const namesObservable = new BehaviorSubject<string>('A');

namesObservable.pipe(map(name => http.getAwesomeMessagesObservable(name))).subscribe(result => console.log(result));
