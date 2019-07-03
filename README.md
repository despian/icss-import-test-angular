# ICSS import test Angular

Example of failure to import an ICSS module into a `ts` file in an Angular CLI project.

Run `ng serve` and navigate to `http://localhost:4200/`.

The attempted imports should be logged to the console. Something like:

```
{}                                          app.component.ts:15
undefined                                   app.component.ts:16
:export {                                   app.component.ts:17
  testVar3: purple;
  testVar4: green;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0L3RlbXAvaWNzcy1pbXBvcnQtdGVzdC1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxnQkFKVTtFQUtWLGVBSlU7QUNFWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0ZXN0LXZhcjM6IHB1cnBsZTtcbiR0ZXN0LXZhcjQ6IGdyZWVuO1xuXG46ZXhwb3J0IHtcbiAgdGVzdFZhcjM6ICR0ZXN0LXZhcjM7XG4gIHRlc3RWYXI0OiAkdGVzdC12YXI0O1xufVxuIiwiOmV4cG9ydCB7XG4gIHRlc3RWYXIzOiBwdXJwbGU7XG4gIHRlc3RWYXI0OiBncmVlbjtcbn0iXX0= */
undefined                                   app.component.ts:18
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.
