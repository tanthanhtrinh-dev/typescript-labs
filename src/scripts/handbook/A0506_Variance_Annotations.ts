// Contravariant annotation
interface Consumer<in T> {
  consume: (arg: T) => void;
}
// Covariant annotation
interface Producer<out T> {
  make(): T;
}
// Invariant annotation
interface ProducerConsumer<in out T> {
  consume: (arg: T) => void;
  make(): T;
}

