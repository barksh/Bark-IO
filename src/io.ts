/**
 * @author WMXPY
 * @namespace IO
 * @description IO
 */

export abstract class BarkIO {

    private readonly _identifier: string;

    protected constructor(identifier: string) {

        this._identifier = identifier;
    }

    public abstract write(content: string): void | Promise<void>;
}
