searchState.loadedDescShard("std", 4, "Creates a new atomic integer.\nCreates a new atomic integer.\nSignals the processor that it is inside a busy-wait …\nStores a value into the bool.\nStores a value into the pointer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the atomic integer.\nStores a value into the bool, returning the previous value.\nStores a value into the pointer, returning the previous …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\nStores a value into the atomic integer, returning the …\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe <strong>channel</strong>’s sending half has become disconnected, and …\nThe <strong>channel</strong>’s sending half has become disconnected, and …\nThis <code>sync_channel</code>’s receiving half has disconnected, so …\nThis <strong>channel</strong> is currently empty, but the <strong>Sender</strong>(s) have …\nThe data could not be sent on the <code>sync_channel</code> because it …\nAn owning iterator over messages on a <code>Receiver</code>, created by …\nAn iterator over messages on a <code>Receiver</code>, created by <code>iter</code>.\nThe receiving half of Rust’s <code>channel</code> (or <code>sync_channel</code>) …\nAn error returned from the <code>recv</code> function on a <code>Receiver</code>.\nThis enumeration is the list of possible errors that made …\nAn error returned from the <code>Sender::send</code> or <code>SyncSender::send</code>\nThe sending-half of Rust’s asynchronous <code>channel</code> type.\nThe sending-half of Rust’s synchronous <code>sync_channel</code> type.\nThis <strong>channel</strong> is currently empty, but the <strong>Sender</strong>(s) have …\nAn iterator that attempts to yield all pending values for …\nThis enumeration is the list of the possible reasons that …\nThis enumeration is the list of the possible error …\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCreates a new asynchronous channel, returning the …\nClone a sender to send to other threads.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a <code>RecvError</code> into a <code>TryRecvError</code>.\nReturns the argument unchanged.\nConverts a <code>RecvError</code> into a <code>RecvTimeoutError</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a <code>SendError&lt;T&gt;</code> into a <code>TrySendError&lt;T&gt;</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n\n\n\n\n\nReturns an iterator that will block waiting for messages, …\n\n\n\nAttempts to wait for a value on this receiver, returning …\nAttempts to wait for a value on this receiver, returning …\nAttempts to wait for a value on this receiver, returning …\nAttempts to send a value on this channel, returning it …\nSends a value on this synchronous channel.\nCreates a new synchronous, bounded channel. All data sent …\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nReturns an iterator that will attempt to yield all pending …\nAttempts to return a pending value on this receiver …\nAttempts to send a value on this channel without blocking.\n\n\n\n\n\n\n\n\n\n\n\nThe context of an asynchronous task.\nA Builder used to construct a <code>Context</code> instance with …\nA helper constant for internal desugaring – produces …\nAn analogous trait to <code>Wake</code> but used to construct a …\nA <code>LocalWaker</code> is analogous to a <code>Waker</code>, but it does not …\nA helper constant for internal desugaring – produces …\nRepresents that a value is not ready yet.\nIndicates whether a value is available or if the current …\nA <code>RawWaker</code> allows the implementor of a task executor to …\nA virtual function pointer table (vtable) that specifies …\nRepresents that a value is immediately ready.\nThe implementation of waking a task on an executor.\nA <code>Waker</code> is a handle for waking up a task by notifying its …\nGet a reference to the underlying <code>RawWaker</code>.\nGet a reference to the underlying <code>RawWaker</code>.\n\nA helper function for internal desugaring – produces …\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBuilds the <code>Context</code>.\n\n\n\n\n\n\n\n\n\n\n\nGet the <code>data</code> pointer used to create this <code>RawWaker</code>.\n\n\n\n\n\n\n\n\n\n\n\n\nReturns the argument unchanged.\nUse a <code>Wake</code>-able type as a <code>Waker</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nUse a <code>Wake</code>-able type as a <code>LocalWaker</code>.\nReturns the argument unchanged.\nMoves the value into a <code>Poll::Ready</code> to make a <code>Poll&lt;T&gt;</code>.\n\nReturns the argument unchanged.\nUse a <code>Wake</code>-able type as a <code>RawWaker</code>.\nUse a <code>Wake</code>-able type as a <code>RawWaker</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\n\n\nCreates a new <code>Waker</code> from <code>RawWaker</code>.\nCreates a new <code>LocalWaker</code> from <code>RawWaker</code>.\n\n\nCreate a new <code>Context</code> from a <code>&amp;Waker</code>.\nCreate a ContextBuilder from a Waker.\n\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the poll is a <code>Pending</code> value.\nReturns <code>true</code> if the poll is a <code>Poll::Ready</code> value.\nReturns a reference to the <code>LocalWaker</code> for the current task.\nThis method is used to set the value for the local waker …\nMaps a <code>Poll&lt;T&gt;</code> to <code>Poll&lt;U&gt;</code> by applying a function to a …\nMaps a <code>Poll::Ready&lt;Option&lt;Result&lt;T, E&gt;&gt;&gt;</code> to …\nMaps a <code>Poll::Ready&lt;Result&lt;T, E&gt;&gt;</code> to …\nMaps a <code>Poll&lt;Option&lt;Result&lt;T, E&gt;&gt;&gt;</code> to …\nMaps a <code>Poll&lt;Result&lt;T, E&gt;&gt;</code> to <code>Poll&lt;Result&lt;U, E&gt;&gt;</code> by …\nCreates a new <code>RawWaker</code> from the provided <code>data</code> pointer and …\nCreates a new <code>RawWakerVTable</code> from the provided <code>clone</code>, <code>wake</code>,\nReturns a reference to a <code>Waker</code> that does nothing when used.\nCreates a new <code>LocalWaker</code> that does nothing when <code>wake</code> is …\n\nExtracts the successful type of a <code>Poll&lt;T&gt;</code>.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nGet the <code>vtable</code> pointer used to create this <code>RawWaker</code>.\nWake this task.\nWake this task.\nWake up the task associated with this <code>Waker</code>.\nWake up the task associated with this <code>LocalWaker</code>.\nWake this task without consuming the waker.\nWake this task without consuming the local waker.\nWake up the task associated with this <code>Waker</code> without …\nWake up the task associated with this <code>LocalWaker</code> without …\nReturns a reference to the <code>Waker</code> for the current task.\nReturns <code>true</code> if this <code>Waker</code> and another <code>Waker</code> would awake …\nReturns <code>true</code> if this <code>LocalWaker</code> and another <code>LocalWaker</code> …\nAn error returned by <code>LocalKey::try_with</code>.\nThread factory, which can be used in order to configure …\nContains the error value\nAn owned permission to join on a thread (block on its …\nA thread local storage key which owns its contents.\nContains the success value\nA specialized <code>Result</code> type for threads.\nA scope to spawn scoped threads in.\nAn owned permission to join on a scoped thread (block on …\nA handle to a thread.\nA unique identifier for a running thread.\n\n\n\nThis returns a numeric identifier for the thread …\nReturns an estimate of the default amount of parallelism a …\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nGets a handle to the thread that invokes it.\n\n\n\n\n\n\n\n\n\n\n\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a copy of the contained value.\n\nGets the thread’s unique identifier.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n\n\nChecks if the associated thread has finished running its …\nChecks if the associated thread has finished running its …\nWaits for the associated thread to finish.\nWaits for the associated thread to finish.\nNames the thread-to-be. Currently the name is used for …\nGets the thread’s name.\nGenerates the base configuration for spawning a thread, …\nDetermines whether the current thread is unwinding because …\nBlocks unless or until the current thread’s token is …\nBlocks unless or until the current thread’s token is …\nUse <code>park_timeout</code>.\nReplaces the contained value, returning the old value.\nReplaces the contained value, returning the old value.\nCreate a scope for spawning scoped threads.\nSets or initializes the contained value.\nSets or initializes the contained value.\nPuts the current thread to sleep for at least the …\nUse <code>sleep</code>.\nPuts the current thread to sleep until the specified …\nSpawns a new thread, returning a <code>JoinHandle</code> for it.\nSpawns a new thread within a scope, returning a …\nSpawns a new thread by taking ownership of the <code>Builder</code>, …\nSpawns a new scoped thread using the settings set through …\nSpawns a new thread without any lifetime restrictions by …\nSets the size of the stack (in bytes) for the new thread.\nTakes the contained value, leaving <code>Default::default()</code> in …\nTakes the contained value, leaving <code>Default::default()</code> in …\nExtracts a handle to the underlying thread.\nExtracts a handle to the underlying thread.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAcquires a reference to the value in this TLS key.\n\n\n\n\n\n\n\n\nAtomically makes the handle’s token available if it is …\nAcquires a reference to the value in this TLS key.\nAcquires a reference to the contained value.\nAcquires a mutable reference to the contained value.\nCooperatively gives up a timeslice to the OS scheduler.\nA <code>Duration</code> type to represent a span of time, typically …\nA measurement of a monotonically nondecreasing clock. …\nThe maximum duration.\nThe duration of one microsecond.\nThe duration of one millisecond.\nThe duration of one nanosecond.\nThe duration of one second.\nA measurement of the system clock, useful for talking to …\nAn error returned from the <code>duration_since</code> and <code>elapsed</code> …\nAn error which can be returned when converting a …\nAn anchor in time which can be used to create new …\nAn anchor in time which can be used to create new …\nA duration of zero time.\nComputes the absolute difference between <code>self</code> and <code>other</code>.\nPanics\nPanics\n\n\n\n\nReturns the total number of whole microseconds contained …\nReturns the total number of whole milliseconds contained …\nReturns the number of milliseconds contained by this …\nReturns the number of milliseconds contained by this …\nReturns the total number of nanoseconds contained by this …\nReturns the number of <em>whole</em> seconds contained by this …\nReturns the number of seconds contained by this <code>Duration</code> …\nReturns the number of seconds contained by this <code>Duration</code> …\n\n\n\n\n\n\n\n\n\n\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self + duration</code> if <code>t</code> …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self + duration</code> if <code>t</code> …\nChecked <code>Duration</code> addition. Computes <code>self + other</code>, …\nChecked <code>Duration</code> division. Computes <code>self / other</code>, …\nReturns the amount of time elapsed from another instant to …\nChecked <code>Duration</code> multiplication. Computes <code>self * other</code>, …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self - duration</code> if <code>t</code> …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self - duration</code> if <code>t</code> …\nChecked <code>Duration</code> subtraction. Computes <code>self - other</code>, …\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDivide <code>Duration</code> by <code>Duration</code> and return <code>f32</code>.\nDivide <code>Duration</code> by <code>Duration</code> and return <code>f64</code>.\nDivide <code>Duration</code> by <code>f32</code>.\nDivide <code>Duration</code> by <code>f64</code>.\nReturns the positive duration which represents how far …\nReturns the amount of time elapsed from another instant to …\nReturns the amount of time elapsed from an earlier point …\nReturns the amount of time elapsed since this instant.\nReturns the difference from this system time to the …\n\n\n\n\n\n\n\n\n\n\n\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>Duration</code> from the specified number of days.\nCreates a new <code>Duration</code> from the specified number of hours.\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of whole …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of weeks.\n\n\n\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if this <code>Duration</code> spans no time.\n\n\nMultiplies <code>Duration</code> by <code>f32</code>.\nMultiplies <code>Duration</code> by <code>f64</code>.\nCreates a new <code>Duration</code> from the specified number of whole …\nReturns an instant corresponding to “now”.\nReturns the system time corresponding to “now”.\n\n\n\nSaturating <code>Duration</code> addition. Computes <code>self + other</code>, …\nReturns the amount of time elapsed from another instant to …\nSaturating <code>Duration</code> multiplication. Computes <code>self * other</code>, …\nSaturating <code>Duration</code> subtraction. Computes <code>self - other</code>, …\n\nReturns the amount of time elapsed from another instant to …\n\n\n\n\n\nReturns the fractional part of this <code>Duration</code>, in whole …\nReturns the fractional part of this <code>Duration</code>, in whole …\nReturns the fractional part of this <code>Duration</code>, in …\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe checked version of <code>from_secs_f32</code>.\nThe checked version of <code>from_secs_f64</code>.\n\n\n\n\n\n\n\n\n\n\nThe largest value that can be represented by this integer …\nThe smallest value that can be represented by this integer …\nThe largest value that can be represented by this integer …\nThe smallest value that can be represented by this integer …\nThe largest value that can be represented by this integer …\nThe smallest value that can be represented by this integer …\nThe largest value that can be represented by this integer …\nThe smallest value that can be represented by this integer …\nThe largest value that can be represented by this integer …\nThe smallest value that can be represented by this integer …\nThe largest value that can be represented by this integer …\nThe smallest value that can be represented by this integer …\nA draining iterator for <code>Vec&lt;T&gt;</code>.\nAn iterator which uses a closure to determine if an …\nAn iterator that moves out of a vector.\nA splicing iterator for <code>Vec</code>.\nA contiguous growable array type, written as <code>Vec&lt;T&gt;</code>, short …\n\n\nReturns a reference to the underlying allocator.\nReturns a reference to the underlying allocator.\nReturns a reference to the underlying allocator.\nReturns a reference to the underlying allocator.\nMoves all the elements of <code>other</code> into <code>self</code>, leaving <code>other</code> …\n\n\nReturns an unsafe mutable pointer to the vector’s …\nReturns the remaining items of this iterator as a mutable …\nExtracts a mutable slice of the entire vector.\nReturns a raw pointer to the vector’s buffer, or a …\n\n\n\n\nReturns the remaining items of this iterator as a slice.\nReturns the remaining items of this iterator as a slice.\nExtracts a slice containing the entire vector.\n\n\n\n\n\n\n\n\n\n\n\n\nReturns the total number of elements the vector can hold …\nClears the vector, removing all values.\n\n\n\n\n\n\n\nRemoves consecutive repeated elements in the vector …\nRemoves all but the first of consecutive elements in the …\nRemoves all but the first of consecutive elements in the …\nCreates an empty <code>vec::IntoIter</code>.\nCreates an empty <code>Vec&lt;T&gt;</code>.\n\n\nRemoves the specified range from the vector in bulk, …\n\n\n\n\n\n\n\n\n\n\n\n\n\nClones and appends all elements in a slice to the <code>Vec</code>.\nCopies elements from <code>src</code> range to the end of the vector.\n\n\n\n\nCreates an iterator which uses a closure to determine if …\n\n\n\n\n\n\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTurn a <code>VecDeque&lt;T&gt;</code> into a <code>Vec&lt;T&gt;</code>.\nAllocate a <code>Vec&lt;T&gt;</code> and fill it by cloning <code>s</code>’s items.\nConvert a boxed slice into a vector by transferring …\nConverts a <code>CString</code> into a Vec&lt;u8&gt;.\nAllocate a <code>Vec&lt;T&gt;</code> and fill it by cloning <code>s</code>’s items.\nConverts a <code>BinaryHeap&lt;T&gt;</code> into a <code>Vec&lt;T&gt;</code>.\nAllocate a <code>Vec&lt;T&gt;</code> and fill it by cloning <code>s</code>’s items.\nAllocate a <code>Vec&lt;T&gt;</code> and fill it by cloning <code>s</code>’s items.\nConverts the given <code>String</code> to a vector <code>Vec</code> that holds …\nAllocate a <code>Vec&lt;T&gt;</code> and move <code>s</code>’s items into it.\nAllocate a <code>Vec&lt;u8&gt;</code> and fill it with a UTF-8 string.\nConvert a clone-on-write slice into a vector.\nReturns the argument unchanged.\nReturns the argument unchanged.\n\nCreates a <code>Vec&lt;T&gt;</code> directly from a pointer, a length, and a …\nCreates a <code>Vec&lt;T, A&gt;</code> directly from a pointer, a length, a …\n\n\n\nInserts an element at position <code>index</code> within the vector, …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the vector into <code>Box&lt;[T]&gt;</code>.\nTakes a <code>Vec&lt;[T; N]&gt;</code> and flattens it into a <code>Vec&lt;T&gt;</code>.\n\n\n\n\nCreates a consuming iterator, that is, one that moves each …\n\n\nDecomposes a <code>Vec&lt;T&gt;</code> into its raw components: …\nDecomposes a <code>Vec&lt;T&gt;</code> into its raw components: …\n\n\nReturns <code>true</code> if the vector contains no elements.\n\nKeep unyielded elements in the source <code>Vec</code>.\nConsumes and leaks the <code>Vec</code>, returning a mutable reference …\nReturns the number of elements in the vector, also …\n\n\n\n\n\n\nConstructs a new, empty <code>Vec&lt;T&gt;</code>.\nConstructs a new, empty <code>Vec&lt;T, A&gt;</code>.\n\n\n\n\n\n\n\n\n\nRemoves the last element from a vector and returns it, or …\nAppends an element to the back of a collection.\nAppends an element if there is sufficient spare capacity, …\nRemoves and returns the element at position <code>index</code> within …\nReserves capacity for at least <code>additional</code> more elements to …\nReserves the minimum capacity for at least <code>additional</code> more …\nResizes the <code>Vec</code> in-place so that <code>len</code> is equal to <code>new_len</code>.\nResizes the <code>Vec</code> in-place so that <code>len</code> is equal to <code>new_len</code>.\nRetains only the elements specified by the predicate.\nRetains only the elements specified by the predicate, …\nForces the length of the vector to <code>new_len</code>.\nShrinks the capacity of the vector with a lower bound.\nShrinks the capacity of the vector as much as possible.\n\n\n\n\nReturns the remaining spare capacity of the vector as a …\nCreates a splicing iterator that replaces the specified …\nReturns vector content as a slice of <code>T</code>, along with the …\nSplits the collection into two at the given index.\nRemoves an element from the vector and returns it.\n\n\nShortens the vector, keeping the first <code>len</code> elements and …\n\n\n\n\n\n\n\n\n\n\nTries to reserve capacity for at least <code>additional</code> more …\nTries to reserve the minimum capacity for at least …\nConstructs a new, empty <code>Vec&lt;T&gt;</code> with at least the specified …\nConstructs a new, empty <code>Vec&lt;T, A&gt;</code> with at least the …\n\n\n\n\n\nConstructs a new, empty <code>Vec&lt;T&gt;</code> with at least the specified …\nConstructs a new, empty <code>Vec&lt;T, A&gt;</code> with at least the …\n\n\n")