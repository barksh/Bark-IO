/**
 * @author WMXPY
 * @namespace IO
 * @description Placeholder
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { MockIO } from '../mock/mock';

describe('Given {BarkIO} Class', (): void => {

    const chance: Chance.Chance = new Chance('io-io');

    it('should be able to record logs', (): void => {

        const io: MockIO = new MockIO();

        io.write(chance.string());

        expect(io.output).to.be.lengthOf(1);
    });
});
