class Bind{
    constructor(object, view, props){
        let proxy = ProxyFactory.create(
            object,
            props,
            model => view.update(model)
        );
        view.update(object);
        return proxy;
    }
}