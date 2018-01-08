var constructorToString = function (constructor) {
    if (constructor instanceof Array) {
        return constructor.map(constructorToString).join(' | ');
    }
    else if (constructor === Number) {
        return 'number';
    }
    else if (constructor === String) {
        return 'string';
    }
    else if (constructor === Object) {
        return 'object';
    }
    else if (constructor === Boolean) {
        return 'boolean';
    }
    else if (constructor === Function) {
        return "function";
    }
    else if (constructor === Symbol) {
        return 'Symbol';
    }
    else {
        return 'unknown';
    }
};
export default constructorToString;
