import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


const search$ = new Observable<Event>(observer => {
  const search = document.getElementById('search');
  const stop = document.getElementById('stop');
  if (!search || !stop) {
    observer.error('Element does not exists on the page');
    return;
  }

  const onSearch = (event: Event | undefined) => {
    console.log(123);
    observer.next(event);
  };

  const onStop = () => {
    observer.complete();
    clear();
  };

  // @ts-ignore
  search.addEventListener('input', onSearch);
  stop.addEventListener('click', onStop);

  const clear = () => {
    search.removeEventListener('input', onSearch);
    stop.removeEventListener('click', onStop);
  };
});


// const search$: Observable<Event> = fromEvent<Event>(
//   // @ts-ignore
//   document.getElementById('search'), 'input'
// );

const searchSubscription = search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value;
  }),
  debounceTime(1000),
  map(value => value.length > 3 ? value : ''),
  distinctUntilChanged()
).subscribe(value => {
  console.log(value);
});

setTimeout(() => {
  console.log('unsub');
  searchSubscription.unsubscribe();
}, 10000);


