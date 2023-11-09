import type { _EventMap } from '@gosling-lang/gosling-schema';
type EventName = keyof _EventMap;
export declare function publish<Name extends EventName>(name: Name, data: _EventMap[Name]): void;
export declare function subscribe<Name extends EventName>(name: Name, callback: (msg: string, data: _EventMap[Name]) => void): void;
export declare function unsubscribe(name: EventName): void;
export {};
//# sourceMappingURL=pubsub.d.ts.map