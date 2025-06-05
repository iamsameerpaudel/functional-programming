# Reactive Programming

> It is a programming paradigm which allows to control the stream of data.

> JS/TS is a blocking and synchronous programming language, i.e the code is executed line by line.

> Reactive programming means to work asynchronously with stream of data.

> Streams are orderd sequence of related data or event messages.

> These stream are created continuously or near-continuously.

> A source sends these stream of data and our code reacts to them.

> Asynchronous observers are used to observe the stream and allow asynchronous execution of the code.

> Reactive programming is a different paradigm. This is centered around the concept of reacting to changes in the data and events instead of waiting or the event to happen.

> There are multiple components in Reactive programming:

- Observables/Publishers: The source of data/data stream

- Observers/Subscribers: The code that consumes the data

- Operators/Functions: The functions that use the data and other important methods to create, filter, transform, etc.

- Schedulers

- Backpressure Handling: The stream of data may not be constant, some times it may be light other times it may be heavy. We can only accept what we can handle. Backpressure handling is the process of slowing down incoming stream to limit to what the subscriber can handle.
