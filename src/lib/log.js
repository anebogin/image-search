
export function log(message, properties) {
    if (__DEV__ && console.tron) {
        console.tron.log({
            message,
            ...properties,
        });
    }
}

export function warn(message, properties) {
    if (__DEV__ && console.tron) {
        console.tron.warn({
            message,
            ...properties,
        });
    }
}

export function error(error, message, properties) {
    if (__DEV__ && console.tron) {
        console.tron.error({
            message,
            errorMessage: error.message,
            error,
            ...properties,
        });
    }
}
