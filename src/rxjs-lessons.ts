import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, takeUntil} from 'rxjs/operators';


// const search$ = new Observable<Event>(observer => {
//   const search = document.getElementById('search');
//   const stop = document.getElementById('stop');
//   if (!search || !stop) {
//     observer.error('Element does not exists on the page');
//     return;
//   }
//
//   const onSearch = (event: Event | undefined) => {
//     checkSubscription();
//     observer.next(event);
//   };
//
//   const onStop = () => {
//     checkSubscription();
//     observer.complete();
//     clear();
//   };
//
//   // @ts-ignore
//   search.addEventListener('input', onSearch);
//   stop.addEventListener('click', onStop);
//
//   const checkSubscription = () => {
//     if (observer.closed) {
//       clear();
//     }
//   };
//
//   const clear = () => {
//     search.removeEventListener('input', onSearch);
//     stop.removeEventListener('click', onStop);
//   };
// });


const search$: Observable<Event> = fromEvent<Event>(
  // @ts-ignore
  document.getElementById('search'), 'input'
);

const stop$: Observable<Event> = fromEvent<Event>(
  // @ts-ignore
  document.getElementById('stop'), 'click'
);

const searchSubscription = search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value;
  }),
  debounceTime(1000),
  map(value => value.length > 3 ? value : ''),
  distinctUntilChanged(),
  takeUntil(stop$)
).subscribe(value => {
  console.log(value);
});

// setTimeout(() => {
//   console.log('unsub');
//   searchSubscription.unsubscribe();
// }, 10000);

// unsubscribe === takeUntil(stop$)
// const stopSubscription = stop$.subscribe(() => {
//   searchSubscription.unsubscribe();
//   stopSubscription.unsubscribe();
// });

