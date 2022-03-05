/**
 * @author WMXPY
 * @namespace IO
 * @description Mock
 * @package Mock
 */

import { BarkIO, IOWriteResult } from "../../src";

export class MockIO extends BarkIO {

    private readonly _output: string[];

    public constructor() {

        super("MOCK");
        this._output = [];
    }

    public get output(): string[] {
        return this._output;
    }

    public writeString(content: string): IOWriteResult {

        this._output.push(content);

        return {
            succeed: true,
        };
    }
}
