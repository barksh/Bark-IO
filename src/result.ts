/**
 * @author WMXPY
 * @namespace IO
 * @description Result
 */

import { IOWriteResult } from "./declare";

export const createIOWriteSuccess = (): IOWriteResult => {

    return {
        succeed: true,
    };
};

export const createIOWriteFail = (): IOWriteResult => {

    return {
        succeed: false,
    };
};
