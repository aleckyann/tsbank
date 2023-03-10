export function LogarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            let divisor = 1;
            let unidadeDeMedida = 'milisegundos';
            if (emSegundos) {
                let divisor = 1000;
                let unidadeDeMedida = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O método: ${propertyKey} executou em ${(t2 - t1) / divisor} ${unidadeDeMedida}.`);
            return retorno;
        }
        return descriptor;
    }
}