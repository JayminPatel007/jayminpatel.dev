---
title: "Debounce Click Directive in Angular"
date: "2021-07-29"
tags: ["Angular", "Directive", "Debounce"]
titleImage: ../images/wait.jpg
creditLink: "https://unsplash.com/@kaip"
creditName: "Kai Pilger"
---
Directives was the most difficult topic to understand when I was learning Angular. But after that I have used it extensively
to achieve required functionalities. I have created some useful directives like ***debounce click directive, trap focus within 
directive, arrow key accessible directive, autofocus first invalid field on submit directive, announce progress in interval 
directive***. Directives makes code refactored, easy to understand and you can reuse this directives in other components.


In this article I want to discuss about Debounce Click Directive which I created in one of my projects. In the project 
there were multiple buttons which upon click made some network request to the servers. There were one specific button 
called ***Launch VM in the Browser*** which upon clicking making too many network requests. It was checking status of VM,
Status of gateway. If both are running then It should launch the VM in the browser otherwise it should make Network request 
to start VM and Container. I thought making ***Debounce Click directive*** would be a good idea. Though I created it for my 
project, It can be used in any project as well, so I would like to share it with you.


```typescript
import {
    Directive,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output
  } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
	  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
    @Input() debounceTime = 500;
    @Output() debounceClick = new EventEmitter();
    private clicks = new Subject();
    private subscription: Subscription;

    constructor() {}

    ngOnInit() {
      this.subscription = this.clicks
        .pipe(debounceTime(this.debounceTime))
        .subscribe(e => this.debounceClick.emit(e));
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    @HostListener('click', ['$event'])
    clickEvent(event) {
      event.preventDefault();
      event.stopPropagation();
      this.clicks.next(event);
    }
}
```
To implement this directive I have used RxJS. I have created subject called clicks. The main idea is that we will pass 
new values whenever user clicks to this observable and we will first filter observable using debounceTime and than subscribe
to new observable (filtered) and then whenever new value comes then we will emit new event ***debounceClick*** so we can
listen to this event on any element we have applied this directive.
