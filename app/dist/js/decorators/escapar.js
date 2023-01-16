export function Escapar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let retorno = metodoOriginal.apply(this, args);
            console.log(`@Escapar em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            if (typeof (retorno) === 'string') {
                retorno = retorno
                    .replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return retorno;
        };
        return descriptor;
    };
}
