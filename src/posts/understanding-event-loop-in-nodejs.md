---
title: "Understanding Event Loop in Node.js"
date: "2021-07-28"
tags: ["Node.js", "Event Loop"]
titleImage: ../images/event-loop.jpg
creditLink: "https://unsplash.com/@tine999"
creditName: "Tine Ivanič"
---
It is very treaty to understand how Node.js is **single-threaded** and yet can perform **non-blocking I/O**. Node.js is 
single threaded means we don't have to deal with thread management and its complexities. Node.js event loop handles 
all this behind the scene so we don't have to manage all this complexities.

### The event loop

Event Loop is is a (almost) infinite loop. The reason this single threaded loop can perform otherwise blocking IO in 
a non blocking manner is due to offloading. Node.js offloads operations to the system kernel whenever possible. Since 
most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one 
of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll 
queue to eventually be executed. The loop in event loop refers to Node.js cycling through operations in order. 
we call this operations phases.

Event loop's one cycle has 6 phases.
1. timers
1. pending callbacks
1. idle, prepare
1. poll
1. check
1. close callbacks
Each phase has a FIFO queue of callbacks to execute.it will perform any operations specific to that phase, then 
execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has 
executed. When the queue has been exhausted or the callback limit is reached, the event loop will move to the next 
phase, and so on.                      

Now let's understand each phase in brief

#### Timers
`setTimeOut()` and `setInterval()` scheduled callbacks. 

#### Pending Callbacks
It executes I/O callbacks deferred to the next loop iteration.

#### Idle, prepare
only used internally.

#### Poll
retrieve new I/O events; execute I/O related callbacks 

#### Check
`setImmediate()` callbacks

#### close callbacks
close callbacks e.g. `socket.on('close', ...)`

