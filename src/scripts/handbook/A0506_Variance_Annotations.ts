
/*** 
 * Contravariant annotation
 * Không cho phép thay đổi kiểu dữ liệu đã khai báo hay dùng kiểu dữ liệu như khai báo
 */
interface Consumer<in T> {
  consume: (arg: T) => void;
}

/**
 * Covariant annotation
 * Cho phép thay thế kiểu dữ liệu con `(Subtype)` trong generic type.
 */
interface Producer<out T> {
  make(): T;
}

// Invariant annotation
interface ProducerConsumer<in out T> {
  consume: (arg: T) => void;
  make(): T;
}

