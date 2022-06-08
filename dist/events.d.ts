/// <reference types="@types/node/events" />
import { EventEmitter } from 'node:events';
export declare class EventEmitterWrapper implements EventEmitter {
    private readonly _wrapped;
    constructor(_wrapped: EventEmitter);
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string | symbol | undefined): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string | symbol): Function[];
    rawListeners(event: string | symbol): Function[];
    emit(event: string | symbol, ...args: any[]): boolean;
    eventNames(): Array<string | symbol>;
    listenerCount(type: string | symbol): number;
}
export declare type Handler = (...args: any[]) => void;
/**
* SafeEventEmitter
* @license ISC License
* Copyright (c) 2020 MetaMask
*
*/
/** @class SafeEventEmitter */
export declare class SafeEventEmitter extends EventEmitter {
    emit(type: string, ...args: any[]): boolean;
}
export declare abstract class IEvents {
    abstract events: EventEmitter;
    abstract on(event: string, listener: any): void;
    abstract once(event: string, listener: any): void;
    abstract off(event: string, listener: any): void;
    abstract removeListener(event: string, listener: any): void;
}
