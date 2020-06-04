# solution
marcopolo and User_story

question : When is it a good idea to not use NodeJs? Why? 
answer :node is generally used to develop backend services also called APIs.node can be used to build highly scalable services because of its non-blocking or Asynchronous nature.But node would not be a good choice for CPU-intesive applications like video encoding or image manipulation services because such applications are Cpu intensive and not I/O intensive .As node is single threaded they will block the call stack stripping node of its most important strength that is asynchronous behaviour . so node Would not be a good choice for event loop blocking use cases.
        
        
