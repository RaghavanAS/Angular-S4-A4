function mydecorator(param1: string) 
{
    return function(target: Function){
    console.log("parameter value",param1," is passed to function",target);
    }   
}
function methodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
    ) {
        console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

@mydecorator("hello")
class DecoratorEx{
    @methodDecorator
    myMethod(){}
}



