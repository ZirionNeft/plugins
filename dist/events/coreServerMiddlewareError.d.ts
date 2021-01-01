import { Event, PieceContext } from '@sapphire/framework';
import { MiddlewareErrorContext } from '../lib/structures/http/Server';
export declare class PluginEvent extends Event {
    constructor(context: PieceContext);
    run(error: Error, { response }: MiddlewareErrorContext): void;
}
//# sourceMappingURL=coreServerMiddlewareError.d.ts.map