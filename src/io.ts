/**
 * @author WMXPY
 * @namespace IO
 * @description IO
 */

export abstract class BarkIO {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected constructor() {
    }

    public abstract write(content: string): void | Promise<void>;
}
