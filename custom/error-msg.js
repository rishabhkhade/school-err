export function getValidationErrMsg(error) {
    let errorObj = {};
    error.details.forEach(el => {
        errorObj[el.context.key] = el.message;
    });
    return errorObj;
}

export function getIdNotFoundCommonMsg(modelName) {
    return `The ${modelName} for defind id not found`;
}

export function getNoRecordFoundMsg(modelName) {
    return `No ${modelName} result found`;
}

export function getIdAssignedMsg(modelName) {
    return `Cannot delete ${modelName}, related record found`;
}

export function getServerErrorMsg() {
    return `Internal Server Error`;
}

// getLotsMsg

export function getLotsMsg() {
    return `Lots for order has been completed`;
}

export function getMailLimitExceeded() {
    return `Maximum mail limit exceeded`;
}