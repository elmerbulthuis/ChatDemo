// source: service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require("google-protobuf");
var goog = jspb;
var global =
  (typeof globalThis !== "undefined" && globalThis) ||
  (typeof window !== "undefined" && window) ||
  (typeof global !== "undefined" && global) ||
  (typeof self !== "undefined" && self) ||
  function () {
    return this;
  }.call(null) ||
  Function("return this")();

goog.exportSymbol("proto.Message", null, global);
goog.exportSymbol("proto.MessageEvent", null, global);
goog.exportSymbol("proto.MessageEvent.TypeCase", null, global);
goog.exportSymbol("proto.MessageNew", null, global);
goog.exportSymbol("proto.MessageSnapshot", null, global);
goog.exportSymbol("proto.Messages", null, global);
goog.exportSymbol("proto.Nothing", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Message = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Message.displayName = "proto.Message";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Messages = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Messages.repeatedFields_, null);
};
goog.inherits(proto.Messages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Messages.displayName = "proto.Messages";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MessageEvent = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.MessageEvent.oneofGroups_);
};
goog.inherits(proto.MessageEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MessageEvent.displayName = "proto.MessageEvent";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MessageSnapshot = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MessageSnapshot.repeatedFields_, null);
};
goog.inherits(proto.MessageSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MessageSnapshot.displayName = "proto.MessageSnapshot";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MessageNew = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MessageNew, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MessageNew.displayName = "proto.MessageNew";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Nothing = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Nothing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Nothing.displayName = "proto.Nothing";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Message.prototype.toObject = function (opt_includeInstance) {
    return proto.Message.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Message} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Message.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        value: jspb.Message.getFieldWithDefault(msg, 1, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Message();
  return proto.Message.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setValue(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Message.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Message.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string value = 1;
 * @return {string}
 */
proto.Message.prototype.getValue = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setValue = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Messages.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Messages.prototype.toObject = function (opt_includeInstance) {
    return proto.Messages.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Messages} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Messages.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Messages}
 */
proto.Messages.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Messages();
  return proto.Messages.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Messages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Messages}
 */
proto.Messages.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.addValues(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Messages.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Messages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Messages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Messages.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
};

/**
 * repeated string values = 1;
 * @return {!Array<string>}
 */
proto.Messages.prototype.getValuesList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.Messages} returns this
 */
proto.Messages.prototype.setValuesList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Messages} returns this
 */
proto.Messages.prototype.addValues = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Messages} returns this
 */
proto.Messages.prototype.clearValuesList = function () {
  return this.setValuesList([]);
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.MessageEvent.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.MessageEvent.TypeCase = {
  TYPE_NOT_SET: 0,
  SNAPSHOT: 1,
  NEW: 2,
};

/**
 * @return {proto.MessageEvent.TypeCase}
 */
proto.MessageEvent.prototype.getTypeCase = function () {
  return /** @type {proto.MessageEvent.TypeCase} */ (
    jspb.Message.computeOneofCase(this, proto.MessageEvent.oneofGroups_[0])
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.MessageEvent.prototype.toObject = function (opt_includeInstance) {
    return proto.MessageEvent.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.MessageEvent} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.MessageEvent.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        snapshot: (f = msg.getSnapshot()) && proto.MessageSnapshot.toObject(includeInstance, f),
        pb_new: (f = msg.getNew()) && proto.MessageNew.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MessageEvent}
 */
proto.MessageEvent.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MessageEvent();
  return proto.MessageEvent.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MessageEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MessageEvent}
 */
proto.MessageEvent.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.MessageSnapshot();
        reader.readMessage(value, proto.MessageSnapshot.deserializeBinaryFromReader);
        msg.setSnapshot(value);
        break;
      case 2:
        var value = new proto.MessageNew();
        reader.readMessage(value, proto.MessageNew.deserializeBinaryFromReader);
        msg.setNew(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MessageEvent.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.MessageEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MessageEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MessageEvent.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(1, f, proto.MessageSnapshot.serializeBinaryToWriter);
  }
  f = message.getNew();
  if (f != null) {
    writer.writeMessage(2, f, proto.MessageNew.serializeBinaryToWriter);
  }
};

/**
 * optional MessageSnapshot snapshot = 1;
 * @return {?proto.MessageSnapshot}
 */
proto.MessageEvent.prototype.getSnapshot = function () {
  return /** @type{?proto.MessageSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.MessageSnapshot, 1)
  );
};

/**
 * @param {?proto.MessageSnapshot|undefined} value
 * @return {!proto.MessageEvent} returns this
 */
proto.MessageEvent.prototype.setSnapshot = function (value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.MessageEvent.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.MessageEvent} returns this
 */
proto.MessageEvent.prototype.clearSnapshot = function () {
  return this.setSnapshot(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MessageEvent.prototype.hasSnapshot = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional MessageNew new = 2;
 * @return {?proto.MessageNew}
 */
proto.MessageEvent.prototype.getNew = function () {
  return /** @type{?proto.MessageNew} */ (jspb.Message.getWrapperField(this, proto.MessageNew, 2));
};

/**
 * @param {?proto.MessageNew|undefined} value
 * @return {!proto.MessageEvent} returns this
 */
proto.MessageEvent.prototype.setNew = function (value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.MessageEvent.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.MessageEvent} returns this
 */
proto.MessageEvent.prototype.clearNew = function () {
  return this.setNew(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MessageEvent.prototype.hasNew = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MessageSnapshot.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.MessageSnapshot.prototype.toObject = function (opt_includeInstance) {
    return proto.MessageSnapshot.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.MessageSnapshot} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.MessageSnapshot.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        messagesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MessageSnapshot}
 */
proto.MessageSnapshot.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MessageSnapshot();
  return proto.MessageSnapshot.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MessageSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MessageSnapshot}
 */
proto.MessageSnapshot.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.addMessages(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MessageSnapshot.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.MessageSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MessageSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MessageSnapshot.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
};

/**
 * repeated string messages = 1;
 * @return {!Array<string>}
 */
proto.MessageSnapshot.prototype.getMessagesList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.MessageSnapshot} returns this
 */
proto.MessageSnapshot.prototype.setMessagesList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.MessageSnapshot} returns this
 */
proto.MessageSnapshot.prototype.addMessages = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MessageSnapshot} returns this
 */
proto.MessageSnapshot.prototype.clearMessagesList = function () {
  return this.setMessagesList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.MessageNew.prototype.toObject = function (opt_includeInstance) {
    return proto.MessageNew.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.MessageNew} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.MessageNew.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        message: jspb.Message.getFieldWithDefault(msg, 1, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MessageNew}
 */
proto.MessageNew.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MessageNew();
  return proto.MessageNew.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MessageNew} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MessageNew}
 */
proto.MessageNew.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setMessage(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MessageNew.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.MessageNew.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MessageNew} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MessageNew.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string message = 1;
 * @return {string}
 */
proto.MessageNew.prototype.getMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.MessageNew} returns this
 */
proto.MessageNew.prototype.setMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Nothing.prototype.toObject = function (opt_includeInstance) {
    return proto.Nothing.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Nothing} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Nothing.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Nothing}
 */
proto.Nothing.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Nothing();
  return proto.Nothing.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Nothing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Nothing}
 */
proto.Nothing.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Nothing.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Nothing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Nothing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Nothing.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

goog.object.extend(exports, proto);