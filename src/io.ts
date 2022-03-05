/**
 * @author WMXPY
 * @namespace IO
 * @description IO
 */

import { IOWriteResult } from "./declare";

export abstract class BarkIO {

    private readonly _identifier: string;

    protected constructor(identifier: string) {

        this._identifier = identifier;
    }

    public get identifier() {
        return this._identifier;
    }

    public async write(content: any): Promise<IOWriteResult> {

        if (Array.isArray(content)) {
            return await this.writeArray(content);
        }

        if (typeof content === 'object') {
            return await this.writeObject(content);
        }

        if (Object.hasOwnProperty.call(content, 'toString')) {
            return await this.writeString(content.toString());
        }

        return await this.writeString(String(content));
    }

    // INFO METHODS
    public abstract writeString(content: string): IOWriteResult | Promise<IOWriteResult>;

    public abstract writeObject(content: Record<string, string>): IOWriteResult | Promise<IOWriteResult>;

    public abstract writeArray(content: string[]): IOWriteResult | Promise<IOWriteResult>;

    // VERBOSE METHODS
    public abstract writeVerbose(content: string): IOWriteResult | Promise<IOWriteResult>;

    public abstract writeDebug(content: string): IOWriteResult | Promise<IOWriteResult>;

    public abstract writeWarning(content: string): IOWriteResult | Promise<IOWriteResult>;

    public abstract writeError(content: string): IOWriteResult | Promise<IOWriteResult>;
}
