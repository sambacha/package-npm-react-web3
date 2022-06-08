import { EventEmitter } from 'node:events';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

var ConnectorEvent;

(function (ConnectorEvent) {
  ConnectorEvent["Update"] = "Web3ReactUpdate";
  ConnectorEvent["Error"] = "Web3ReactError";
  ConnectorEvent["Deactivate"] = "Web3ReactDeactivate";
})(ConnectorEvent || (ConnectorEvent = {}));

var __DEV__ = process.env.NODE_ENV !== "production";

var AbstractConnector = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(AbstractConnector, _EventEmitter);

  function AbstractConnector(_temp) {
    var _this;

    var _ref = _temp === void 0 ? {} : _temp,
        supportedChainIds = _ref.supportedChainIds;

    _this = _EventEmitter.call(this) || this;
    _this.supportedChainIds = supportedChainIds;
    return _this;
  }

  var _proto = AbstractConnector.prototype;

  _proto.emitUpdate = function emitUpdate(update) {
    if (__DEV__) {
      console.log("Emitting '" + ConnectorEvent.Update + "' with payload", update);
    }

    this.emit(ConnectorEvent.Update, update);
  };

  _proto.emitError = function emitError(error) {
    if (__DEV__) {
      console.log("Emitting '" + ConnectorEvent.Error + "' with payload", error);
    }

    this.emit(ConnectorEvent.Error, error);
  };

  _proto.emitDeactivate = function emitDeactivate() {
    if (__DEV__) {
      console.log("Emitting '" + ConnectorEvent.Deactivate + "'");
    }

    this.emit(ConnectorEvent.Deactivate);
  };

  return AbstractConnector;
}(EventEmitter);

export { AbstractConnector };
//# sourceMappingURL=web3-react-abstract-connector.esm.js.map
