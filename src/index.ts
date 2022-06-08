/**
 * @package abstract-connector
 */
import { EventEmitter } from 'node:events';
import { AbstractConnectorArguments, ConnectorUpdate, ConnectorEvent } from './types';
import __DEV__ from './declarations';

export abstract class AbstractConnector extends EventEmitter {
  public readonly supportedChainIds?: number[];

  constructor({ supportedChainIds }: AbstractConnectorArguments = {}) {
    super();
    this.supportedChainIds = supportedChainIds;
  }

  public abstract activate(): Promise<ConnectorUpdate>;
  public abstract getProvider(): Promise<any>;
  public abstract getChainId(): Promise<number | string>;
  public abstract getAccount(): Promise<null | string>;
  public abstract deactivate(): void;

  protected emitUpdate(update: ConnectorUpdate): void {
    if (__DEV__) {
      console.log(`Emitting '${ConnectorEvent.Update}' with payload`, update);
    }
    this.emit(ConnectorEvent.Update, update);
  }

  protected emitError(error: Error): void {
    if (__DEV__) {
      console.log(`Emitting '${ConnectorEvent.Error}' with payload`, error);
    }
    this.emit(ConnectorEvent.Error, error);
  }

  protected emitDeactivate(): void {
    if (__DEV__) {
      console.log(`Emitting '${ConnectorEvent.Deactivate}'`);
    }
    this.emit(ConnectorEvent.Deactivate);
  }
}
