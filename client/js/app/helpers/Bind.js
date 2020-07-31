class Bind{
    // ...props é um operador REST (estruturo vários parametros passados em um array)
    // deve sempre ser o último parametro de uma função.
    constructor(object, view, ...props){
        let proxy = ProxyFactory.create(
            object,
            props,
            model => view.update(model)
        );
        view.update(object);
        return proxy;
    }
}