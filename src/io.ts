/**
 * @author WMXPY
 * @namespace IO
 * @description IO
 */

export abstract class BarkIO {

    protected constructor() {
    }

    public abstract write(content: string): void | Promise<void>;
}
