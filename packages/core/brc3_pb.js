// source: brc3.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.AD5940Config', null, global);
goog.exportSymbol('proto.AD5940Mode', null, global);
goog.exportSymbol('proto.AD5940Samples', null, global);
goog.exportSymbol('proto.AFE4900Color', null, global);
goog.exportSymbol('proto.AFE4900Config', null, global);
goog.exportSymbol('proto.AFE4900Dynamic', null, global);
goog.exportSymbol('proto.AFE4900DynamicConfigCommandParam', null, global);
goog.exportSymbol('proto.AFE4900ECGGain', null, global);
goog.exportSymbol('proto.AFE4900Mode', null, global);
goog.exportSymbol('proto.AFE4900OffdacScale', null, global);
goog.exportSymbol('proto.AFE4900Photodiode', null, global);
goog.exportSymbol('proto.AFE4900Samples', null, global);
goog.exportSymbol('proto.AFE4900TIAGain', null, global);
goog.exportSymbol('proto.AnnotateCommandParam', null, global);
goog.exportSymbol('proto.AnnotateResponseParam', null, global);
goog.exportSymbol('proto.Annotation', null, global);
goog.exportSymbol('proto.Command', null, global);
goog.exportSymbol('proto.DataMessage', null, global);
goog.exportSymbol('proto.DataMessage.DataCase', null, global);
goog.exportSymbol('proto.DebugRtosGetInfoResponseParam', null, global);
goog.exportSymbol('proto.DebugRtosTask', null, global);
goog.exportSymbol('proto.EnvironmentConfig', null, global);
goog.exportSymbol('proto.EnvironmentMode', null, global);
goog.exportSymbol('proto.EnvironmentSamples', null, global);
goog.exportSymbol('proto.ErrorCode', null, global);
goog.exportSymbol('proto.FaultAppError', null, global);
goog.exportSymbol('proto.FaultGetInfoResponseParam', null, global);
goog.exportSymbol('proto.FaultHardFault', null, global);
goog.exportSymbol('proto.FaultInfo', null, global);
goog.exportSymbol('proto.FaultInfo.InfoCase', null, global);
goog.exportSymbol('proto.FaultMemAcc', null, global);
goog.exportSymbol('proto.FaultSdAssert', null, global);
goog.exportSymbol('proto.FaultTaskStackOverflow', null, global);
goog.exportSymbol('proto.FaultType', null, global);
goog.exportSymbol('proto.FaultWatchdog', null, global);
goog.exportSymbol('proto.FaultWatchdogTask', null, global);
goog.exportSymbol('proto.FlashEraseBlockCommandParam', null, global);
goog.exportSymbol('proto.FlashReadDataCommandParam', null, global);
goog.exportSymbol('proto.FlashReadDataResponseParam', null, global);
goog.exportSymbol('proto.FlashWritePageCommandParam', null, global);
goog.exportSymbol('proto.MotionConfig', null, global);
goog.exportSymbol('proto.MotionMode', null, global);
goog.exportSymbol('proto.MotionRotationType', null, global);
goog.exportSymbol('proto.MotionSamples', null, global);
goog.exportSymbol('proto.PressureGetResponseParam', null, global);
goog.exportSymbol('proto.RawDataInfo', null, global);
goog.exportSymbol('proto.RecordingGetCountResponseParam', null, global);
goog.exportSymbol('proto.RecordingGetFreeSpaceResponseParam', null, global);
goog.exportSymbol('proto.RecordingGetInfoCommandParam', null, global);
goog.exportSymbol('proto.RecordingGetInfoResponseParam', null, global);
goog.exportSymbol('proto.RecordingInfo', null, global);
goog.exportSymbol('proto.RecordingPage', null, global);
goog.exportSymbol('proto.RecordingPage.SamplesCase', null, global);
goog.exportSymbol('proto.RecordingReadCommandParam', null, global);
goog.exportSymbol('proto.Request', null, global);
goog.exportSymbol('proto.Request.ParamCase', null, global);
goog.exportSymbol('proto.Response', null, global);
goog.exportSymbol('proto.Response.ParamCase', null, global);
goog.exportSymbol('proto.RotationSamples', null, global);
goog.exportSymbol('proto.SensingGetInfoResponseParam', null, global);
goog.exportSymbol('proto.SensingStartCommandParam', null, global);
goog.exportSymbol('proto.SensingStartResponseParam', null, global);
goog.exportSymbol('proto.SensingStopResponseParam', null, global);
goog.exportSymbol('proto.SensorConfig', null, global);
goog.exportSymbol('proto.SimulateFaultCommandParam', null, global);
goog.exportSymbol('proto.SimulateFaultType', null, global);
goog.exportSymbol('proto.StreamingInfo', null, global);
goog.exportSymbol('proto.StreamingSamples', null, global);
goog.exportSymbol('proto.StreamingSamples.SamplesCase', null, global);
goog.exportSymbol('proto.StreamingStartCommandParam', null, global);
goog.exportSymbol('proto.StreamingStartResponseParam', null, global);
goog.exportSymbol('proto.StreamingStopCommandParam', null, global);
goog.exportSymbol('proto.StreamingType', null, global);
goog.exportSymbol('proto.SystemStatusResponseParam', null, global);
goog.exportSymbol('proto.TemperatureGetResponseParam', null, global);
goog.exportSymbol('proto.TestDataCommandParam', null, global);
goog.exportSymbol('proto.TestDataOne', null, global);
goog.exportSymbol('proto.TestDataTwo', null, global);
goog.exportSymbol('proto.TimeGetResponseParam', null, global);
goog.exportSymbol('proto.TimeSetCommandParam', null, global);
goog.exportSymbol('proto.TimestampTestMessage', null, global);
goog.exportSymbol('proto.TimesyncRxEnableCommandParam', null, global);
goog.exportSymbol('proto.TimesyncTxEnableCommandParam', null, global);
goog.exportSymbol('proto.UploadStartCommandParam', null, global);
goog.exportSymbol('proto.UploadStartResponseParam', null, global);
goog.exportSymbol('proto.UploadType', null, global);
goog.exportSymbol('proto.UploadWritePageCommandParam', null, global);
goog.exportSymbol('proto.VersionGetResponseParam', null, global);
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
proto.FlashEraseBlockCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FlashEraseBlockCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FlashEraseBlockCommandParam.displayName = 'proto.FlashEraseBlockCommandParam';
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
proto.FlashWritePageCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FlashWritePageCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FlashWritePageCommandParam.displayName = 'proto.FlashWritePageCommandParam';
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
proto.FlashReadDataCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FlashReadDataCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FlashReadDataCommandParam.displayName = 'proto.FlashReadDataCommandParam';
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
proto.TestDataCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TestDataCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TestDataCommandParam.displayName = 'proto.TestDataCommandParam';
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
proto.PressureGetResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PressureGetResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PressureGetResponseParam.displayName = 'proto.PressureGetResponseParam';
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
proto.TemperatureGetResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TemperatureGetResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TemperatureGetResponseParam.displayName = 'proto.TemperatureGetResponseParam';
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
proto.FlashReadDataResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FlashReadDataResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FlashReadDataResponseParam.displayName = 'proto.FlashReadDataResponseParam';
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
proto.TimeGetResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TimeGetResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TimeGetResponseParam.displayName = 'proto.TimeGetResponseParam';
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
proto.TimeSetCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TimeSetCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TimeSetCommandParam.displayName = 'proto.TimeSetCommandParam';
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
proto.SystemStatusResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SystemStatusResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SystemStatusResponseParam.displayName = 'proto.SystemStatusResponseParam';
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
proto.SensingStartCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SensingStartCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SensingStartCommandParam.displayName = 'proto.SensingStartCommandParam';
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
proto.SensingStartResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SensingStartResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SensingStartResponseParam.displayName = 'proto.SensingStartResponseParam';
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
proto.SensingStopResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SensingStopResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SensingStopResponseParam.displayName = 'proto.SensingStopResponseParam';
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
proto.StreamingStartCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StreamingStartCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StreamingStartCommandParam.displayName = 'proto.StreamingStartCommandParam';
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
proto.StreamingStartResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StreamingStartResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StreamingStartResponseParam.displayName = 'proto.StreamingStartResponseParam';
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
proto.StreamingStopCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StreamingStopCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StreamingStopCommandParam.displayName = 'proto.StreamingStopCommandParam';
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
proto.UploadStartCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UploadStartCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UploadStartCommandParam.displayName = 'proto.UploadStartCommandParam';
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
proto.UploadStartResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UploadStartResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UploadStartResponseParam.displayName = 'proto.UploadStartResponseParam';
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
proto.UploadWritePageCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UploadWritePageCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UploadWritePageCommandParam.displayName = 'proto.UploadWritePageCommandParam';
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
proto.RecordingGetInfoCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecordingGetInfoCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecordingGetInfoCommandParam.displayName = 'proto.RecordingGetInfoCommandParam';
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
proto.RecordingGetInfoResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecordingGetInfoResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecordingGetInfoResponseParam.displayName = 'proto.RecordingGetInfoResponseParam';
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
proto.RecordingGetCountResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecordingGetCountResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecordingGetCountResponseParam.displayName = 'proto.RecordingGetCountResponseParam';
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
proto.RecordingReadCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecordingReadCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecordingReadCommandParam.displayName = 'proto.RecordingReadCommandParam';
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
proto.SensingGetInfoResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SensingGetInfoResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SensingGetInfoResponseParam.displayName = 'proto.SensingGetInfoResponseParam';
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
proto.RecordingGetFreeSpaceResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecordingGetFreeSpaceResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecordingGetFreeSpaceResponseParam.displayName = 'proto.RecordingGetFreeSpaceResponseParam';
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
proto.VersionGetResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.VersionGetResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.VersionGetResponseParam.displayName = 'proto.VersionGetResponseParam';
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
proto.TimesyncTxEnableCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TimesyncTxEnableCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TimesyncTxEnableCommandParam.displayName = 'proto.TimesyncTxEnableCommandParam';
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
proto.TimesyncRxEnableCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TimesyncRxEnableCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TimesyncRxEnableCommandParam.displayName = 'proto.TimesyncRxEnableCommandParam';
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
proto.AFE4900DynamicConfigCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AFE4900DynamicConfigCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AFE4900DynamicConfigCommandParam.displayName = 'proto.AFE4900DynamicConfigCommandParam';
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
proto.SimulateFaultCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SimulateFaultCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SimulateFaultCommandParam.displayName = 'proto.SimulateFaultCommandParam';
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
proto.FaultGetInfoResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FaultGetInfoResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultGetInfoResponseParam.displayName = 'proto.FaultGetInfoResponseParam';
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
proto.DebugRtosGetInfoResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DebugRtosGetInfoResponseParam.repeatedFields_, null);
};
goog.inherits(proto.DebugRtosGetInfoResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DebugRtosGetInfoResponseParam.displayName = 'proto.DebugRtosGetInfoResponseParam';
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
proto.AnnotateCommandParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AnnotateCommandParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AnnotateCommandParam.displayName = 'proto.AnnotateCommandParam';
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
proto.AnnotateResponseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AnnotateResponseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AnnotateResponseParam.displayName = 'proto.AnnotateResponseParam';
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
proto.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Request.oneofGroups_);
};
goog.inherits(proto.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Request.displayName = 'proto.Request';
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
proto.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Response.oneofGroups_);
};
goog.inherits(proto.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response.displayName = 'proto.Response';
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
proto.TestDataOne = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TestDataOne, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TestDataOne.displayName = 'proto.TestDataOne';
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
proto.TestDataTwo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TestDataTwo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TestDataTwo.displayName = 'proto.TestDataTwo';
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
proto.Annotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Annotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Annotation.displayName = 'proto.Annotation';
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
proto.MotionSamples = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MotionSamples.repeatedFields_, null);
};
goog.inherits(proto.MotionSamples, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MotionSamples.displayName = 'proto.MotionSamples';
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
proto.RotationSamples = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RotationSamples.repeatedFields_, null);
};
goog.inherits(proto.RotationSamples, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RotationSamples.displayName = 'proto.RotationSamples';
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
proto.AFE4900Samples = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AFE4900Samples.repeatedFields_, null);
};
goog.inherits(proto.AFE4900Samples, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AFE4900Samples.displayName = 'proto.AFE4900Samples';
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
proto.EnvironmentSamples = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.EnvironmentSamples.repeatedFields_, null);
};
goog.inherits(proto.EnvironmentSamples, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EnvironmentSamples.displayName = 'proto.EnvironmentSamples';
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
proto.AD5940Samples = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AD5940Samples.repeatedFields_, null);
};
goog.inherits(proto.AD5940Samples, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AD5940Samples.displayName = 'proto.AD5940Samples';
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
proto.StreamingSamples = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.StreamingSamples.oneofGroups_);
};
goog.inherits(proto.StreamingSamples, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StreamingSamples.displayName = 'proto.StreamingSamples';
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
proto.StreamingInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StreamingInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StreamingInfo.displayName = 'proto.StreamingInfo';
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
proto.DataMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DataMessage.repeatedFields_, proto.DataMessage.oneofGroups_);
};
goog.inherits(proto.DataMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DataMessage.displayName = 'proto.DataMessage';
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
proto.SensorConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SensorConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SensorConfig.displayName = 'proto.SensorConfig';
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
proto.AD5940Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AD5940Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AD5940Config.displayName = 'proto.AD5940Config';
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
proto.AFE4900Dynamic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AFE4900Dynamic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AFE4900Dynamic.displayName = 'proto.AFE4900Dynamic';
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
proto.AFE4900Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AFE4900Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AFE4900Config.displayName = 'proto.AFE4900Config';
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
proto.EnvironmentConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EnvironmentConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EnvironmentConfig.displayName = 'proto.EnvironmentConfig';
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
proto.MotionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MotionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MotionConfig.displayName = 'proto.MotionConfig';
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
proto.RecordingInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecordingInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecordingInfo.displayName = 'proto.RecordingInfo';
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
proto.RawDataInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RawDataInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RawDataInfo.displayName = 'proto.RawDataInfo';
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
proto.RecordingPage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.RecordingPage.oneofGroups_);
};
goog.inherits(proto.RecordingPage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecordingPage.displayName = 'proto.RecordingPage';
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
proto.TimestampTestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TimestampTestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TimestampTestMessage.displayName = 'proto.TimestampTestMessage';
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
proto.FaultAppError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FaultAppError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultAppError.displayName = 'proto.FaultAppError';
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
proto.FaultHardFault = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FaultHardFault, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultHardFault.displayName = 'proto.FaultHardFault';
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
proto.FaultSdAssert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FaultSdAssert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultSdAssert.displayName = 'proto.FaultSdAssert';
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
proto.FaultMemAcc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FaultMemAcc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultMemAcc.displayName = 'proto.FaultMemAcc';
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
proto.FaultWatchdog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FaultWatchdog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultWatchdog.displayName = 'proto.FaultWatchdog';
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
proto.FaultWatchdogTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FaultWatchdogTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultWatchdogTask.displayName = 'proto.FaultWatchdogTask';
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
proto.FaultTaskStackOverflow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FaultTaskStackOverflow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultTaskStackOverflow.displayName = 'proto.FaultTaskStackOverflow';
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
proto.FaultInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.FaultInfo.oneofGroups_);
};
goog.inherits(proto.FaultInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FaultInfo.displayName = 'proto.FaultInfo';
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
proto.DebugRtosTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DebugRtosTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DebugRtosTask.displayName = 'proto.DebugRtosTask';
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
proto.FlashEraseBlockCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.FlashEraseBlockCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FlashEraseBlockCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlashEraseBlockCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.FlashEraseBlockCommandParam}
 */
proto.FlashEraseBlockCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FlashEraseBlockCommandParam;
  return proto.FlashEraseBlockCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FlashEraseBlockCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FlashEraseBlockCommandParam}
 */
proto.FlashEraseBlockCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddress(value);
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
proto.FlashEraseBlockCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FlashEraseBlockCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FlashEraseBlockCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlashEraseBlockCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 address = 1;
 * @return {number}
 */
proto.FlashEraseBlockCommandParam.prototype.getAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FlashEraseBlockCommandParam} returns this
 */
proto.FlashEraseBlockCommandParam.prototype.setAddress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.FlashWritePageCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.FlashWritePageCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FlashWritePageCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlashWritePageCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64()
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
 * @return {!proto.FlashWritePageCommandParam}
 */
proto.FlashWritePageCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FlashWritePageCommandParam;
  return proto.FlashWritePageCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FlashWritePageCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FlashWritePageCommandParam}
 */
proto.FlashWritePageCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.FlashWritePageCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FlashWritePageCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FlashWritePageCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlashWritePageCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 address = 1;
 * @return {number}
 */
proto.FlashWritePageCommandParam.prototype.getAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FlashWritePageCommandParam} returns this
 */
proto.FlashWritePageCommandParam.prototype.setAddress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.FlashWritePageCommandParam.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.FlashWritePageCommandParam.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.FlashWritePageCommandParam.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.FlashWritePageCommandParam} returns this
 */
proto.FlashWritePageCommandParam.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.FlashReadDataCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.FlashReadDataCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FlashReadDataCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlashReadDataCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, 0),
    length: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.FlashReadDataCommandParam}
 */
proto.FlashReadDataCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FlashReadDataCommandParam;
  return proto.FlashReadDataCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FlashReadDataCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FlashReadDataCommandParam}
 */
proto.FlashReadDataCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLength(value);
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
proto.FlashReadDataCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FlashReadDataCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FlashReadDataCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlashReadDataCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 address = 1;
 * @return {number}
 */
proto.FlashReadDataCommandParam.prototype.getAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FlashReadDataCommandParam} returns this
 */
proto.FlashReadDataCommandParam.prototype.setAddress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 length = 2;
 * @return {number}
 */
proto.FlashReadDataCommandParam.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FlashReadDataCommandParam} returns this
 */
proto.FlashReadDataCommandParam.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.TestDataCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.TestDataCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TestDataCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestDataCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    numBytes: jspb.Message.getFieldWithDefault(msg, 100, 0)
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
 * @return {!proto.TestDataCommandParam}
 */
proto.TestDataCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestDataCommandParam;
  return proto.TestDataCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestDataCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestDataCommandParam}
 */
proto.TestDataCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 100:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumBytes(value);
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
proto.TestDataCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TestDataCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestDataCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestDataCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumBytes();
  if (f !== 0) {
    writer.writeUint32(
      100,
      f
    );
  }
};


/**
 * optional uint32 num_bytes = 100;
 * @return {number}
 */
proto.TestDataCommandParam.prototype.getNumBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.TestDataCommandParam} returns this
 */
proto.TestDataCommandParam.prototype.setNumBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
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
proto.PressureGetResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.PressureGetResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PressureGetResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PressureGetResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    pascals: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    externalTemperatureC: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.PressureGetResponseParam}
 */
proto.PressureGetResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PressureGetResponseParam;
  return proto.PressureGetResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PressureGetResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PressureGetResponseParam}
 */
proto.PressureGetResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPascals(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setExternalTemperatureC(value);
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
proto.PressureGetResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PressureGetResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PressureGetResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PressureGetResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPascals();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getExternalTemperatureC();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double pascals = 1;
 * @return {number}
 */
proto.PressureGetResponseParam.prototype.getPascals = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PressureGetResponseParam} returns this
 */
proto.PressureGetResponseParam.prototype.setPascals = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double external_temperature_c = 2;
 * @return {number}
 */
proto.PressureGetResponseParam.prototype.getExternalTemperatureC = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PressureGetResponseParam} returns this
 */
proto.PressureGetResponseParam.prototype.setExternalTemperatureC = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.TemperatureGetResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.TemperatureGetResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TemperatureGetResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TemperatureGetResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    temperatureC: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.TemperatureGetResponseParam}
 */
proto.TemperatureGetResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TemperatureGetResponseParam;
  return proto.TemperatureGetResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TemperatureGetResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TemperatureGetResponseParam}
 */
proto.TemperatureGetResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTemperatureC(value);
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
proto.TemperatureGetResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TemperatureGetResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TemperatureGetResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TemperatureGetResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperatureC();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 temperature_c = 1;
 * @return {number}
 */
proto.TemperatureGetResponseParam.prototype.getTemperatureC = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.TemperatureGetResponseParam} returns this
 */
proto.TemperatureGetResponseParam.prototype.setTemperatureC = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.FlashReadDataResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.FlashReadDataResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FlashReadDataResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlashReadDataResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
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
 * @return {!proto.FlashReadDataResponseParam}
 */
proto.FlashReadDataResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FlashReadDataResponseParam;
  return proto.FlashReadDataResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FlashReadDataResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FlashReadDataResponseParam}
 */
proto.FlashReadDataResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.FlashReadDataResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FlashReadDataResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FlashReadDataResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlashReadDataResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.FlashReadDataResponseParam.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.FlashReadDataResponseParam.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.FlashReadDataResponseParam.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.FlashReadDataResponseParam} returns this
 */
proto.FlashReadDataResponseParam.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.TimeGetResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.TimeGetResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimeGetResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimeGetResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.TimeGetResponseParam}
 */
proto.TimeGetResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimeGetResponseParam;
  return proto.TimeGetResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimeGetResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimeGetResponseParam}
 */
proto.TimeGetResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp(value);
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
proto.TimeGetResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TimeGetResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TimeGetResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimeGetResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double timestamp = 1;
 * @return {number}
 */
proto.TimeGetResponseParam.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.TimeGetResponseParam} returns this
 */
proto.TimeGetResponseParam.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
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
proto.TimeSetCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.TimeSetCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimeSetCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimeSetCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.TimeSetCommandParam}
 */
proto.TimeSetCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimeSetCommandParam;
  return proto.TimeSetCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimeSetCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimeSetCommandParam}
 */
proto.TimeSetCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp(value);
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
proto.TimeSetCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TimeSetCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TimeSetCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimeSetCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double timestamp = 1;
 * @return {number}
 */
proto.TimeSetCommandParam.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.TimeSetCommandParam} returns this
 */
proto.TimeSetCommandParam.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
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
proto.SystemStatusResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.SystemStatusResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SystemStatusResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SystemStatusResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    batteryPercent: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chargePower: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    uptimeSec: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resetReason: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.SystemStatusResponseParam}
 */
proto.SystemStatusResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SystemStatusResponseParam;
  return proto.SystemStatusResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SystemStatusResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SystemStatusResponseParam}
 */
proto.SystemStatusResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBatteryPercent(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChargePower(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUptimeSec(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResetReason(value);
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
proto.SystemStatusResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SystemStatusResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SystemStatusResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SystemStatusResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatteryPercent();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getChargePower();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUptimeSec();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getResetReason();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 battery_percent = 1;
 * @return {number}
 */
proto.SystemStatusResponseParam.prototype.getBatteryPercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SystemStatusResponseParam} returns this
 */
proto.SystemStatusResponseParam.prototype.setBatteryPercent = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool charge_power = 2;
 * @return {boolean}
 */
proto.SystemStatusResponseParam.prototype.getChargePower = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SystemStatusResponseParam} returns this
 */
proto.SystemStatusResponseParam.prototype.setChargePower = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 uptime_sec = 3;
 * @return {number}
 */
proto.SystemStatusResponseParam.prototype.getUptimeSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.SystemStatusResponseParam} returns this
 */
proto.SystemStatusResponseParam.prototype.setUptimeSec = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 reset_reason = 4;
 * @return {number}
 */
proto.SystemStatusResponseParam.prototype.getResetReason = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.SystemStatusResponseParam} returns this
 */
proto.SystemStatusResponseParam.prototype.setResetReason = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.SensingStartCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.SensingStartCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SensingStartCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensingStartCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.SensorConfig.toObject(includeInstance, f),
    maxDuration: jspb.Message.getFieldWithDefault(msg, 2, 0),
    metadata: msg.getMetadata_asB64()
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
 * @return {!proto.SensingStartCommandParam}
 */
proto.SensingStartCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SensingStartCommandParam;
  return proto.SensingStartCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SensingStartCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SensingStartCommandParam}
 */
proto.SensingStartCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SensorConfig;
      reader.readMessage(value,proto.SensorConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxDuration(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMetadata(value);
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
proto.SensingStartCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SensingStartCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SensingStartCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensingStartCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SensorConfig.serializeBinaryToWriter
    );
  }
  f = message.getMaxDuration();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMetadata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional SensorConfig config = 1;
 * @return {?proto.SensorConfig}
 */
proto.SensingStartCommandParam.prototype.getConfig = function() {
  return /** @type{?proto.SensorConfig} */ (
    jspb.Message.getWrapperField(this, proto.SensorConfig, 1));
};


/**
 * @param {?proto.SensorConfig|undefined} value
 * @return {!proto.SensingStartCommandParam} returns this
*/
proto.SensingStartCommandParam.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SensingStartCommandParam} returns this
 */
proto.SensingStartCommandParam.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SensingStartCommandParam.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 max_duration = 2;
 * @return {number}
 */
proto.SensingStartCommandParam.prototype.getMaxDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.SensingStartCommandParam} returns this
 */
proto.SensingStartCommandParam.prototype.setMaxDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes metadata = 3;
 * @return {!(string|Uint8Array)}
 */
proto.SensingStartCommandParam.prototype.getMetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes metadata = 3;
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {string}
 */
proto.SensingStartCommandParam.prototype.getMetadata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMetadata()));
};


/**
 * optional bytes metadata = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {!Uint8Array}
 */
proto.SensingStartCommandParam.prototype.getMetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.SensingStartCommandParam} returns this
 */
proto.SensingStartCommandParam.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
proto.SensingStartResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.SensingStartResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SensingStartResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensingStartResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordingId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.SensingStartResponseParam}
 */
proto.SensingStartResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SensingStartResponseParam;
  return proto.SensingStartResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SensingStartResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SensingStartResponseParam}
 */
proto.SensingStartResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecordingId(value);
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
proto.SensingStartResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SensingStartResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SensingStartResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensingStartResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordingId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 recording_id = 1;
 * @return {number}
 */
proto.SensingStartResponseParam.prototype.getRecordingId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SensingStartResponseParam} returns this
 */
proto.SensingStartResponseParam.prototype.setRecordingId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.SensingStopResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.SensingStopResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SensingStopResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensingStopResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordingId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.SensingStopResponseParam}
 */
proto.SensingStopResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SensingStopResponseParam;
  return proto.SensingStopResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SensingStopResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SensingStopResponseParam}
 */
proto.SensingStopResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecordingId(value);
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
proto.SensingStopResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SensingStopResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SensingStopResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensingStopResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordingId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 recording_id = 1;
 * @return {number}
 */
proto.SensingStopResponseParam.prototype.getRecordingId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SensingStopResponseParam} returns this
 */
proto.SensingStopResponseParam.prototype.setRecordingId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.StreamingStartCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.StreamingStartCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StreamingStartCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingStartCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.StreamingStartCommandParam}
 */
proto.StreamingStartCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StreamingStartCommandParam;
  return proto.StreamingStartCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StreamingStartCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StreamingStartCommandParam}
 */
proto.StreamingStartCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.StreamingType} */ (reader.readEnum());
      msg.setType(value);
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
proto.StreamingStartCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StreamingStartCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StreamingStartCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingStartCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional StreamingType type = 1;
 * @return {!proto.StreamingType}
 */
proto.StreamingStartCommandParam.prototype.getType = function() {
  return /** @type {!proto.StreamingType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.StreamingType} value
 * @return {!proto.StreamingStartCommandParam} returns this
 */
proto.StreamingStartCommandParam.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.StreamingStartResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.StreamingStartResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StreamingStartResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingStartResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.StreamingInfo.toObject(includeInstance, f)
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
 * @return {!proto.StreamingStartResponseParam}
 */
proto.StreamingStartResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StreamingStartResponseParam;
  return proto.StreamingStartResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StreamingStartResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StreamingStartResponseParam}
 */
proto.StreamingStartResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.StreamingInfo;
      reader.readMessage(value,proto.StreamingInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
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
proto.StreamingStartResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StreamingStartResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StreamingStartResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingStartResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.StreamingInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional StreamingInfo info = 1;
 * @return {?proto.StreamingInfo}
 */
proto.StreamingStartResponseParam.prototype.getInfo = function() {
  return /** @type{?proto.StreamingInfo} */ (
    jspb.Message.getWrapperField(this, proto.StreamingInfo, 1));
};


/**
 * @param {?proto.StreamingInfo|undefined} value
 * @return {!proto.StreamingStartResponseParam} returns this
*/
proto.StreamingStartResponseParam.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StreamingStartResponseParam} returns this
 */
proto.StreamingStartResponseParam.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StreamingStartResponseParam.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.StreamingStopCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.StreamingStopCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StreamingStopCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingStopCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.StreamingStopCommandParam}
 */
proto.StreamingStopCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StreamingStopCommandParam;
  return proto.StreamingStopCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StreamingStopCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StreamingStopCommandParam}
 */
proto.StreamingStopCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.StreamingType} */ (reader.readEnum());
      msg.setType(value);
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
proto.StreamingStopCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StreamingStopCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StreamingStopCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingStopCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional StreamingType type = 1;
 * @return {!proto.StreamingType}
 */
proto.StreamingStopCommandParam.prototype.getType = function() {
  return /** @type {!proto.StreamingType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.StreamingType} value
 * @return {!proto.StreamingStopCommandParam} returns this
 */
proto.StreamingStopCommandParam.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.UploadStartCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.UploadStartCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UploadStartCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadStartCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    crc: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.UploadStartCommandParam}
 */
proto.UploadStartCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UploadStartCommandParam;
  return proto.UploadStartCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UploadStartCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UploadStartCommandParam}
 */
proto.UploadStartCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.UploadType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCrc(value);
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
proto.UploadStartCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UploadStartCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UploadStartCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadStartCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getCrc();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional UploadType type = 1;
 * @return {!proto.UploadType}
 */
proto.UploadStartCommandParam.prototype.getType = function() {
  return /** @type {!proto.UploadType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.UploadType} value
 * @return {!proto.UploadStartCommandParam} returns this
 */
proto.UploadStartCommandParam.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.UploadStartCommandParam.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadStartCommandParam} returns this
 */
proto.UploadStartCommandParam.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 crc = 3;
 * @return {number}
 */
proto.UploadStartCommandParam.prototype.getCrc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadStartCommandParam} returns this
 */
proto.UploadStartCommandParam.prototype.setCrc = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.UploadStartResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.UploadStartResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UploadStartResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadStartResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxFastWriteSize: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.UploadStartResponseParam}
 */
proto.UploadStartResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UploadStartResponseParam;
  return proto.UploadStartResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UploadStartResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UploadStartResponseParam}
 */
proto.UploadStartResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxFastWriteSize(value);
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
proto.UploadStartResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UploadStartResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UploadStartResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadStartResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxFastWriteSize();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 max_fast_write_size = 1;
 * @return {number}
 */
proto.UploadStartResponseParam.prototype.getMaxFastWriteSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadStartResponseParam} returns this
 */
proto.UploadStartResponseParam.prototype.setMaxFastWriteSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.UploadWritePageCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.UploadWritePageCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UploadWritePageCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadWritePageCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64()
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
 * @return {!proto.UploadWritePageCommandParam}
 */
proto.UploadWritePageCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UploadWritePageCommandParam;
  return proto.UploadWritePageCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UploadWritePageCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UploadWritePageCommandParam}
 */
proto.UploadWritePageCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.UploadWritePageCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UploadWritePageCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UploadWritePageCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadWritePageCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 offset = 1;
 * @return {number}
 */
proto.UploadWritePageCommandParam.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadWritePageCommandParam} returns this
 */
proto.UploadWritePageCommandParam.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.UploadWritePageCommandParam.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.UploadWritePageCommandParam.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.UploadWritePageCommandParam.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.UploadWritePageCommandParam} returns this
 */
proto.UploadWritePageCommandParam.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.RecordingGetInfoCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.RecordingGetInfoCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecordingGetInfoCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingGetInfoCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordingId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.RecordingGetInfoCommandParam}
 */
proto.RecordingGetInfoCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecordingGetInfoCommandParam;
  return proto.RecordingGetInfoCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecordingGetInfoCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecordingGetInfoCommandParam}
 */
proto.RecordingGetInfoCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecordingId(value);
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
proto.RecordingGetInfoCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecordingGetInfoCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecordingGetInfoCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingGetInfoCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRecordingId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.RecordingGetInfoCommandParam.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingGetInfoCommandParam} returns this
 */
proto.RecordingGetInfoCommandParam.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 recording_id = 2;
 * @return {number}
 */
proto.RecordingGetInfoCommandParam.prototype.getRecordingId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingGetInfoCommandParam} returns this
 */
proto.RecordingGetInfoCommandParam.prototype.setRecordingId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.RecordingGetInfoResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.RecordingGetInfoResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecordingGetInfoResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingGetInfoResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.RecordingInfo.toObject(includeInstance, f)
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
 * @return {!proto.RecordingGetInfoResponseParam}
 */
proto.RecordingGetInfoResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecordingGetInfoResponseParam;
  return proto.RecordingGetInfoResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecordingGetInfoResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecordingGetInfoResponseParam}
 */
proto.RecordingGetInfoResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RecordingInfo;
      reader.readMessage(value,proto.RecordingInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
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
proto.RecordingGetInfoResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecordingGetInfoResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecordingGetInfoResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingGetInfoResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RecordingInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional RecordingInfo info = 1;
 * @return {?proto.RecordingInfo}
 */
proto.RecordingGetInfoResponseParam.prototype.getInfo = function() {
  return /** @type{?proto.RecordingInfo} */ (
    jspb.Message.getWrapperField(this, proto.RecordingInfo, 1));
};


/**
 * @param {?proto.RecordingInfo|undefined} value
 * @return {!proto.RecordingGetInfoResponseParam} returns this
*/
proto.RecordingGetInfoResponseParam.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RecordingGetInfoResponseParam} returns this
 */
proto.RecordingGetInfoResponseParam.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RecordingGetInfoResponseParam.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.RecordingGetCountResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.RecordingGetCountResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecordingGetCountResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingGetCountResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.RecordingGetCountResponseParam}
 */
proto.RecordingGetCountResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecordingGetCountResponseParam;
  return proto.RecordingGetCountResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecordingGetCountResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecordingGetCountResponseParam}
 */
proto.RecordingGetCountResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
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
proto.RecordingGetCountResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecordingGetCountResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecordingGetCountResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingGetCountResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 count = 1;
 * @return {number}
 */
proto.RecordingGetCountResponseParam.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingGetCountResponseParam} returns this
 */
proto.RecordingGetCountResponseParam.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.RecordingReadCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.RecordingReadCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecordingReadCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingReadCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordingId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    firstPage: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.RecordingReadCommandParam}
 */
proto.RecordingReadCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecordingReadCommandParam;
  return proto.RecordingReadCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecordingReadCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecordingReadCommandParam}
 */
proto.RecordingReadCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecordingId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirstPage(value);
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
proto.RecordingReadCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecordingReadCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecordingReadCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingReadCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordingId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFirstPage();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 recording_id = 1;
 * @return {number}
 */
proto.RecordingReadCommandParam.prototype.getRecordingId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingReadCommandParam} returns this
 */
proto.RecordingReadCommandParam.prototype.setRecordingId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 first_page = 2;
 * @return {number}
 */
proto.RecordingReadCommandParam.prototype.getFirstPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingReadCommandParam} returns this
 */
proto.RecordingReadCommandParam.prototype.setFirstPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.SensingGetInfoResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.SensingGetInfoResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SensingGetInfoResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensingGetInfoResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    sensorConfig: (f = msg.getSensorConfig()) && proto.SensorConfig.toObject(includeInstance, f),
    timestampStart: jspb.Message.getFieldWithDefault(msg, 3, 0),
    recordingId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.SensingGetInfoResponseParam}
 */
proto.SensingGetInfoResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SensingGetInfoResponseParam;
  return proto.SensingGetInfoResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SensingGetInfoResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SensingGetInfoResponseParam}
 */
proto.SensingGetInfoResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = new proto.SensorConfig;
      reader.readMessage(value,proto.SensorConfig.deserializeBinaryFromReader);
      msg.setSensorConfig(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimestampStart(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecordingId(value);
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
proto.SensingGetInfoResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SensingGetInfoResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SensingGetInfoResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensingGetInfoResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSensorConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SensorConfig.serializeBinaryToWriter
    );
  }
  f = message.getTimestampStart();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getRecordingId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.SensingGetInfoResponseParam.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SensingGetInfoResponseParam} returns this
 */
proto.SensingGetInfoResponseParam.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional SensorConfig sensor_config = 2;
 * @return {?proto.SensorConfig}
 */
proto.SensingGetInfoResponseParam.prototype.getSensorConfig = function() {
  return /** @type{?proto.SensorConfig} */ (
    jspb.Message.getWrapperField(this, proto.SensorConfig, 2));
};


/**
 * @param {?proto.SensorConfig|undefined} value
 * @return {!proto.SensingGetInfoResponseParam} returns this
*/
proto.SensingGetInfoResponseParam.prototype.setSensorConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SensingGetInfoResponseParam} returns this
 */
proto.SensingGetInfoResponseParam.prototype.clearSensorConfig = function() {
  return this.setSensorConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SensingGetInfoResponseParam.prototype.hasSensorConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 timestamp_start = 3;
 * @return {number}
 */
proto.SensingGetInfoResponseParam.prototype.getTimestampStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.SensingGetInfoResponseParam} returns this
 */
proto.SensingGetInfoResponseParam.prototype.setTimestampStart = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 recording_id = 4;
 * @return {number}
 */
proto.SensingGetInfoResponseParam.prototype.getRecordingId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.SensingGetInfoResponseParam} returns this
 */
proto.SensingGetInfoResponseParam.prototype.setRecordingId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.RecordingGetFreeSpaceResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.RecordingGetFreeSpaceResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecordingGetFreeSpaceResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingGetFreeSpaceResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    freeBlocks: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalBlocks: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.RecordingGetFreeSpaceResponseParam}
 */
proto.RecordingGetFreeSpaceResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecordingGetFreeSpaceResponseParam;
  return proto.RecordingGetFreeSpaceResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecordingGetFreeSpaceResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecordingGetFreeSpaceResponseParam}
 */
proto.RecordingGetFreeSpaceResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFreeBlocks(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalBlocks(value);
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
proto.RecordingGetFreeSpaceResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecordingGetFreeSpaceResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecordingGetFreeSpaceResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingGetFreeSpaceResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFreeBlocks();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTotalBlocks();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 free_blocks = 1;
 * @return {number}
 */
proto.RecordingGetFreeSpaceResponseParam.prototype.getFreeBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingGetFreeSpaceResponseParam} returns this
 */
proto.RecordingGetFreeSpaceResponseParam.prototype.setFreeBlocks = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 total_blocks = 2;
 * @return {number}
 */
proto.RecordingGetFreeSpaceResponseParam.prototype.getTotalBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingGetFreeSpaceResponseParam} returns this
 */
proto.RecordingGetFreeSpaceResponseParam.prototype.setTotalBlocks = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.VersionGetResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.VersionGetResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.VersionGetResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VersionGetResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    firmwareVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bootloaderVersion: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.VersionGetResponseParam}
 */
proto.VersionGetResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.VersionGetResponseParam;
  return proto.VersionGetResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.VersionGetResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.VersionGetResponseParam}
 */
proto.VersionGetResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirmwareVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBootloaderVersion(value);
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
proto.VersionGetResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.VersionGetResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.VersionGetResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VersionGetResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirmwareVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBootloaderVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string firmware_version = 1;
 * @return {string}
 */
proto.VersionGetResponseParam.prototype.getFirmwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.VersionGetResponseParam} returns this
 */
proto.VersionGetResponseParam.prototype.setFirmwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string bootloader_version = 2;
 * @return {string}
 */
proto.VersionGetResponseParam.prototype.getBootloaderVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.VersionGetResponseParam} returns this
 */
proto.VersionGetResponseParam.prototype.setBootloaderVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.TimesyncTxEnableCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.TimesyncTxEnableCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimesyncTxEnableCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimesyncTxEnableCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, 0),
    intervalMs: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.TimesyncTxEnableCommandParam}
 */
proto.TimesyncTxEnableCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimesyncTxEnableCommandParam;
  return proto.TimesyncTxEnableCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimesyncTxEnableCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimesyncTxEnableCommandParam}
 */
proto.TimesyncTxEnableCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIntervalMs(value);
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
proto.TimesyncTxEnableCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TimesyncTxEnableCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TimesyncTxEnableCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimesyncTxEnableCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIntervalMs();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 address = 1;
 * @return {number}
 */
proto.TimesyncTxEnableCommandParam.prototype.getAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.TimesyncTxEnableCommandParam} returns this
 */
proto.TimesyncTxEnableCommandParam.prototype.setAddress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 interval_ms = 2;
 * @return {number}
 */
proto.TimesyncTxEnableCommandParam.prototype.getIntervalMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.TimesyncTxEnableCommandParam} returns this
 */
proto.TimesyncTxEnableCommandParam.prototype.setIntervalMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.TimesyncRxEnableCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.TimesyncRxEnableCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimesyncRxEnableCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimesyncRxEnableCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, 0),
    intervalMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    calibrationEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.TimesyncRxEnableCommandParam}
 */
proto.TimesyncRxEnableCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimesyncRxEnableCommandParam;
  return proto.TimesyncRxEnableCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimesyncRxEnableCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimesyncRxEnableCommandParam}
 */
proto.TimesyncRxEnableCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIntervalMs(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCalibrationEnabled(value);
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
proto.TimesyncRxEnableCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TimesyncRxEnableCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TimesyncRxEnableCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimesyncRxEnableCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIntervalMs();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getCalibrationEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint32 address = 1;
 * @return {number}
 */
proto.TimesyncRxEnableCommandParam.prototype.getAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.TimesyncRxEnableCommandParam} returns this
 */
proto.TimesyncRxEnableCommandParam.prototype.setAddress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 interval_ms = 2;
 * @return {number}
 */
proto.TimesyncRxEnableCommandParam.prototype.getIntervalMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.TimesyncRxEnableCommandParam} returns this
 */
proto.TimesyncRxEnableCommandParam.prototype.setIntervalMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool calibration_enabled = 3;
 * @return {boolean}
 */
proto.TimesyncRxEnableCommandParam.prototype.getCalibrationEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.TimesyncRxEnableCommandParam} returns this
 */
proto.TimesyncRxEnableCommandParam.prototype.setCalibrationEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.AFE4900DynamicConfigCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.AFE4900DynamicConfigCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AFE4900DynamicConfigCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AFE4900DynamicConfigCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    dynamic: (f = msg.getDynamic()) && proto.AFE4900Dynamic.toObject(includeInstance, f)
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
 * @return {!proto.AFE4900DynamicConfigCommandParam}
 */
proto.AFE4900DynamicConfigCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AFE4900DynamicConfigCommandParam;
  return proto.AFE4900DynamicConfigCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AFE4900DynamicConfigCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AFE4900DynamicConfigCommandParam}
 */
proto.AFE4900DynamicConfigCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AFE4900Dynamic;
      reader.readMessage(value,proto.AFE4900Dynamic.deserializeBinaryFromReader);
      msg.setDynamic(value);
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
proto.AFE4900DynamicConfigCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AFE4900DynamicConfigCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AFE4900DynamicConfigCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AFE4900DynamicConfigCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDynamic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.AFE4900Dynamic.serializeBinaryToWriter
    );
  }
};


/**
 * optional AFE4900Dynamic dynamic = 1;
 * @return {?proto.AFE4900Dynamic}
 */
proto.AFE4900DynamicConfigCommandParam.prototype.getDynamic = function() {
  return /** @type{?proto.AFE4900Dynamic} */ (
    jspb.Message.getWrapperField(this, proto.AFE4900Dynamic, 1));
};


/**
 * @param {?proto.AFE4900Dynamic|undefined} value
 * @return {!proto.AFE4900DynamicConfigCommandParam} returns this
*/
proto.AFE4900DynamicConfigCommandParam.prototype.setDynamic = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AFE4900DynamicConfigCommandParam} returns this
 */
proto.AFE4900DynamicConfigCommandParam.prototype.clearDynamic = function() {
  return this.setDynamic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AFE4900DynamicConfigCommandParam.prototype.hasDynamic = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.SimulateFaultCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.SimulateFaultCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SimulateFaultCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SimulateFaultCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    fault: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.SimulateFaultCommandParam}
 */
proto.SimulateFaultCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SimulateFaultCommandParam;
  return proto.SimulateFaultCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SimulateFaultCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SimulateFaultCommandParam}
 */
proto.SimulateFaultCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SimulateFaultType} */ (reader.readEnum());
      msg.setFault(value);
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
proto.SimulateFaultCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SimulateFaultCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SimulateFaultCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SimulateFaultCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFault();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional SimulateFaultType fault = 1;
 * @return {!proto.SimulateFaultType}
 */
proto.SimulateFaultCommandParam.prototype.getFault = function() {
  return /** @type {!proto.SimulateFaultType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.SimulateFaultType} value
 * @return {!proto.SimulateFaultCommandParam} returns this
 */
proto.SimulateFaultCommandParam.prototype.setFault = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.FaultGetInfoResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultGetInfoResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultGetInfoResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultGetInfoResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    faultInfo: (f = msg.getFaultInfo()) && proto.FaultInfo.toObject(includeInstance, f)
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
 * @return {!proto.FaultGetInfoResponseParam}
 */
proto.FaultGetInfoResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultGetInfoResponseParam;
  return proto.FaultGetInfoResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultGetInfoResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultGetInfoResponseParam}
 */
proto.FaultGetInfoResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.FaultInfo;
      reader.readMessage(value,proto.FaultInfo.deserializeBinaryFromReader);
      msg.setFaultInfo(value);
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
proto.FaultGetInfoResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultGetInfoResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultGetInfoResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultGetInfoResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFaultInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.FaultInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional FaultInfo fault_info = 1;
 * @return {?proto.FaultInfo}
 */
proto.FaultGetInfoResponseParam.prototype.getFaultInfo = function() {
  return /** @type{?proto.FaultInfo} */ (
    jspb.Message.getWrapperField(this, proto.FaultInfo, 1));
};


/**
 * @param {?proto.FaultInfo|undefined} value
 * @return {!proto.FaultGetInfoResponseParam} returns this
*/
proto.FaultGetInfoResponseParam.prototype.setFaultInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FaultGetInfoResponseParam} returns this
 */
proto.FaultGetInfoResponseParam.prototype.clearFaultInfo = function() {
  return this.setFaultInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FaultGetInfoResponseParam.prototype.hasFaultInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DebugRtosGetInfoResponseParam.repeatedFields_ = [1];



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
proto.DebugRtosGetInfoResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.DebugRtosGetInfoResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DebugRtosGetInfoResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DebugRtosGetInfoResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.DebugRtosTask.toObject, includeInstance),
    heapFreeSpace: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.DebugRtosGetInfoResponseParam}
 */
proto.DebugRtosGetInfoResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DebugRtosGetInfoResponseParam;
  return proto.DebugRtosGetInfoResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DebugRtosGetInfoResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DebugRtosGetInfoResponseParam}
 */
proto.DebugRtosGetInfoResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DebugRtosTask;
      reader.readMessage(value,proto.DebugRtosTask.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeapFreeSpace(value);
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
proto.DebugRtosGetInfoResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DebugRtosGetInfoResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DebugRtosGetInfoResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DebugRtosGetInfoResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.DebugRtosTask.serializeBinaryToWriter
    );
  }
  f = message.getHeapFreeSpace();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * repeated DebugRtosTask tasks = 1;
 * @return {!Array<!proto.DebugRtosTask>}
 */
proto.DebugRtosGetInfoResponseParam.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.DebugRtosTask>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DebugRtosTask, 1));
};


/**
 * @param {!Array<!proto.DebugRtosTask>} value
 * @return {!proto.DebugRtosGetInfoResponseParam} returns this
*/
proto.DebugRtosGetInfoResponseParam.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.DebugRtosTask=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DebugRtosTask}
 */
proto.DebugRtosGetInfoResponseParam.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.DebugRtosTask, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.DebugRtosGetInfoResponseParam} returns this
 */
proto.DebugRtosGetInfoResponseParam.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional uint32 heap_free_space = 2;
 * @return {number}
 */
proto.DebugRtosGetInfoResponseParam.prototype.getHeapFreeSpace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.DebugRtosGetInfoResponseParam} returns this
 */
proto.DebugRtosGetInfoResponseParam.prototype.setHeapFreeSpace = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.AnnotateCommandParam.prototype.toObject = function(opt_includeInstance) {
  return proto.AnnotateCommandParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AnnotateCommandParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AnnotateCommandParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotationData: msg.getAnnotationData_asB64(),
    overrideTimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.AnnotateCommandParam}
 */
proto.AnnotateCommandParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AnnotateCommandParam;
  return proto.AnnotateCommandParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AnnotateCommandParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AnnotateCommandParam}
 */
proto.AnnotateCommandParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAnnotationData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOverrideTimestamp(value);
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
proto.AnnotateCommandParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AnnotateCommandParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AnnotateCommandParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AnnotateCommandParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotationData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOverrideTimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional bytes annotation_data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.AnnotateCommandParam.prototype.getAnnotationData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes annotation_data = 1;
 * This is a type-conversion wrapper around `getAnnotationData()`
 * @return {string}
 */
proto.AnnotateCommandParam.prototype.getAnnotationData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAnnotationData()));
};


/**
 * optional bytes annotation_data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAnnotationData()`
 * @return {!Uint8Array}
 */
proto.AnnotateCommandParam.prototype.getAnnotationData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAnnotationData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.AnnotateCommandParam} returns this
 */
proto.AnnotateCommandParam.prototype.setAnnotationData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional double override_timestamp = 2;
 * @return {number}
 */
proto.AnnotateCommandParam.prototype.getOverrideTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.AnnotateCommandParam} returns this
 */
proto.AnnotateCommandParam.prototype.setOverrideTimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.AnnotateResponseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.AnnotateResponseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AnnotateResponseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AnnotateResponseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.AnnotateResponseParam}
 */
proto.AnnotateResponseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AnnotateResponseParam;
  return proto.AnnotateResponseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AnnotateResponseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AnnotateResponseParam}
 */
proto.AnnotateResponseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp(value);
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
proto.AnnotateResponseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AnnotateResponseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AnnotateResponseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AnnotateResponseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double timestamp = 1;
 * @return {number}
 */
proto.AnnotateResponseParam.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.AnnotateResponseParam} returns this
 */
proto.AnnotateResponseParam.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Request.oneofGroups_ = [[101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117]];

/**
 * @enum {number}
 */
proto.Request.ParamCase = {
  PARAM_NOT_SET: 0,
  TEST_DATA: 101,
  TIME_SET: 102,
  FLASH_ERASE_BLOCK: 103,
  FLASH_WRITE_PAGE: 104,
  FLASH_READ_DATA: 105,
  SENSING_START: 106,
  STREAMING_START: 107,
  STREAMING_STOP: 108,
  UPLOAD_START: 109,
  UPLOAD_WRITE_PAGE: 110,
  RECORDING_GET_INFO: 111,
  RECORDING_READ: 112,
  TIMESYNC_TX_ENABLE: 113,
  TIMESYNC_RX_ENABLE: 114,
  AFE4900_DYNAMIC_CONFIG: 115,
  SIMULATE_FAULT: 116,
  ANNOTATE: 117
};

/**
 * @return {proto.Request.ParamCase}
 */
proto.Request.prototype.getParamCase = function() {
  return /** @type {proto.Request.ParamCase} */(jspb.Message.computeOneofCase(this, proto.Request.oneofGroups_[0]));
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
proto.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    testData: (f = msg.getTestData()) && proto.TestDataCommandParam.toObject(includeInstance, f),
    timeSet: (f = msg.getTimeSet()) && proto.TimeSetCommandParam.toObject(includeInstance, f),
    flashEraseBlock: (f = msg.getFlashEraseBlock()) && proto.FlashEraseBlockCommandParam.toObject(includeInstance, f),
    flashWritePage: (f = msg.getFlashWritePage()) && proto.FlashWritePageCommandParam.toObject(includeInstance, f),
    flashReadData: (f = msg.getFlashReadData()) && proto.FlashReadDataCommandParam.toObject(includeInstance, f),
    sensingStart: (f = msg.getSensingStart()) && proto.SensingStartCommandParam.toObject(includeInstance, f),
    streamingStart: (f = msg.getStreamingStart()) && proto.StreamingStartCommandParam.toObject(includeInstance, f),
    streamingStop: (f = msg.getStreamingStop()) && proto.StreamingStopCommandParam.toObject(includeInstance, f),
    uploadStart: (f = msg.getUploadStart()) && proto.UploadStartCommandParam.toObject(includeInstance, f),
    uploadWritePage: (f = msg.getUploadWritePage()) && proto.UploadWritePageCommandParam.toObject(includeInstance, f),
    recordingGetInfo: (f = msg.getRecordingGetInfo()) && proto.RecordingGetInfoCommandParam.toObject(includeInstance, f),
    recordingRead: (f = msg.getRecordingRead()) && proto.RecordingReadCommandParam.toObject(includeInstance, f),
    timesyncTxEnable: (f = msg.getTimesyncTxEnable()) && proto.TimesyncTxEnableCommandParam.toObject(includeInstance, f),
    timesyncRxEnable: (f = msg.getTimesyncRxEnable()) && proto.TimesyncRxEnableCommandParam.toObject(includeInstance, f),
    afe4900DynamicConfig: (f = msg.getAfe4900DynamicConfig()) && proto.AFE4900DynamicConfigCommandParam.toObject(includeInstance, f),
    simulateFault: (f = msg.getSimulateFault()) && proto.SimulateFaultCommandParam.toObject(includeInstance, f),
    annotate: (f = msg.getAnnotate()) && proto.AnnotateCommandParam.toObject(includeInstance, f)
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
 * @return {!proto.Request}
 */
proto.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Request;
  return proto.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Request}
 */
proto.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Command} */ (reader.readEnum());
      msg.setCommand(value);
      break;
    case 101:
      var value = new proto.TestDataCommandParam;
      reader.readMessage(value,proto.TestDataCommandParam.deserializeBinaryFromReader);
      msg.setTestData(value);
      break;
    case 102:
      var value = new proto.TimeSetCommandParam;
      reader.readMessage(value,proto.TimeSetCommandParam.deserializeBinaryFromReader);
      msg.setTimeSet(value);
      break;
    case 103:
      var value = new proto.FlashEraseBlockCommandParam;
      reader.readMessage(value,proto.FlashEraseBlockCommandParam.deserializeBinaryFromReader);
      msg.setFlashEraseBlock(value);
      break;
    case 104:
      var value = new proto.FlashWritePageCommandParam;
      reader.readMessage(value,proto.FlashWritePageCommandParam.deserializeBinaryFromReader);
      msg.setFlashWritePage(value);
      break;
    case 105:
      var value = new proto.FlashReadDataCommandParam;
      reader.readMessage(value,proto.FlashReadDataCommandParam.deserializeBinaryFromReader);
      msg.setFlashReadData(value);
      break;
    case 106:
      var value = new proto.SensingStartCommandParam;
      reader.readMessage(value,proto.SensingStartCommandParam.deserializeBinaryFromReader);
      msg.setSensingStart(value);
      break;
    case 107:
      var value = new proto.StreamingStartCommandParam;
      reader.readMessage(value,proto.StreamingStartCommandParam.deserializeBinaryFromReader);
      msg.setStreamingStart(value);
      break;
    case 108:
      var value = new proto.StreamingStopCommandParam;
      reader.readMessage(value,proto.StreamingStopCommandParam.deserializeBinaryFromReader);
      msg.setStreamingStop(value);
      break;
    case 109:
      var value = new proto.UploadStartCommandParam;
      reader.readMessage(value,proto.UploadStartCommandParam.deserializeBinaryFromReader);
      msg.setUploadStart(value);
      break;
    case 110:
      var value = new proto.UploadWritePageCommandParam;
      reader.readMessage(value,proto.UploadWritePageCommandParam.deserializeBinaryFromReader);
      msg.setUploadWritePage(value);
      break;
    case 111:
      var value = new proto.RecordingGetInfoCommandParam;
      reader.readMessage(value,proto.RecordingGetInfoCommandParam.deserializeBinaryFromReader);
      msg.setRecordingGetInfo(value);
      break;
    case 112:
      var value = new proto.RecordingReadCommandParam;
      reader.readMessage(value,proto.RecordingReadCommandParam.deserializeBinaryFromReader);
      msg.setRecordingRead(value);
      break;
    case 113:
      var value = new proto.TimesyncTxEnableCommandParam;
      reader.readMessage(value,proto.TimesyncTxEnableCommandParam.deserializeBinaryFromReader);
      msg.setTimesyncTxEnable(value);
      break;
    case 114:
      var value = new proto.TimesyncRxEnableCommandParam;
      reader.readMessage(value,proto.TimesyncRxEnableCommandParam.deserializeBinaryFromReader);
      msg.setTimesyncRxEnable(value);
      break;
    case 115:
      var value = new proto.AFE4900DynamicConfigCommandParam;
      reader.readMessage(value,proto.AFE4900DynamicConfigCommandParam.deserializeBinaryFromReader);
      msg.setAfe4900DynamicConfig(value);
      break;
    case 116:
      var value = new proto.SimulateFaultCommandParam;
      reader.readMessage(value,proto.SimulateFaultCommandParam.deserializeBinaryFromReader);
      msg.setSimulateFault(value);
      break;
    case 117:
      var value = new proto.AnnotateCommandParam;
      reader.readMessage(value,proto.AnnotateCommandParam.deserializeBinaryFromReader);
      msg.setAnnotate(value);
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
proto.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTestData();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.TestDataCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getTimeSet();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.TimeSetCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getFlashEraseBlock();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      proto.FlashEraseBlockCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getFlashWritePage();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      proto.FlashWritePageCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getFlashReadData();
  if (f != null) {
    writer.writeMessage(
      105,
      f,
      proto.FlashReadDataCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getSensingStart();
  if (f != null) {
    writer.writeMessage(
      106,
      f,
      proto.SensingStartCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getStreamingStart();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      proto.StreamingStartCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getStreamingStop();
  if (f != null) {
    writer.writeMessage(
      108,
      f,
      proto.StreamingStopCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getUploadStart();
  if (f != null) {
    writer.writeMessage(
      109,
      f,
      proto.UploadStartCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getUploadWritePage();
  if (f != null) {
    writer.writeMessage(
      110,
      f,
      proto.UploadWritePageCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getRecordingGetInfo();
  if (f != null) {
    writer.writeMessage(
      111,
      f,
      proto.RecordingGetInfoCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getRecordingRead();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      proto.RecordingReadCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getTimesyncTxEnable();
  if (f != null) {
    writer.writeMessage(
      113,
      f,
      proto.TimesyncTxEnableCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getTimesyncRxEnable();
  if (f != null) {
    writer.writeMessage(
      114,
      f,
      proto.TimesyncRxEnableCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getAfe4900DynamicConfig();
  if (f != null) {
    writer.writeMessage(
      115,
      f,
      proto.AFE4900DynamicConfigCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getSimulateFault();
  if (f != null) {
    writer.writeMessage(
      116,
      f,
      proto.SimulateFaultCommandParam.serializeBinaryToWriter
    );
  }
  f = message.getAnnotate();
  if (f != null) {
    writer.writeMessage(
      117,
      f,
      proto.AnnotateCommandParam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Command command = 1;
 * @return {!proto.Command}
 */
proto.Request.prototype.getCommand = function() {
  return /** @type {!proto.Command} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Command} value
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.setCommand = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TestDataCommandParam test_data = 101;
 * @return {?proto.TestDataCommandParam}
 */
proto.Request.prototype.getTestData = function() {
  return /** @type{?proto.TestDataCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.TestDataCommandParam, 101));
};


/**
 * @param {?proto.TestDataCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setTestData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearTestData = function() {
  return this.setTestData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasTestData = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional TimeSetCommandParam time_set = 102;
 * @return {?proto.TimeSetCommandParam}
 */
proto.Request.prototype.getTimeSet = function() {
  return /** @type{?proto.TimeSetCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.TimeSetCommandParam, 102));
};


/**
 * @param {?proto.TimeSetCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setTimeSet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearTimeSet = function() {
  return this.setTimeSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasTimeSet = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional FlashEraseBlockCommandParam flash_erase_block = 103;
 * @return {?proto.FlashEraseBlockCommandParam}
 */
proto.Request.prototype.getFlashEraseBlock = function() {
  return /** @type{?proto.FlashEraseBlockCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.FlashEraseBlockCommandParam, 103));
};


/**
 * @param {?proto.FlashEraseBlockCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setFlashEraseBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 103, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearFlashEraseBlock = function() {
  return this.setFlashEraseBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasFlashEraseBlock = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional FlashWritePageCommandParam flash_write_page = 104;
 * @return {?proto.FlashWritePageCommandParam}
 */
proto.Request.prototype.getFlashWritePage = function() {
  return /** @type{?proto.FlashWritePageCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.FlashWritePageCommandParam, 104));
};


/**
 * @param {?proto.FlashWritePageCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setFlashWritePage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearFlashWritePage = function() {
  return this.setFlashWritePage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasFlashWritePage = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * optional FlashReadDataCommandParam flash_read_data = 105;
 * @return {?proto.FlashReadDataCommandParam}
 */
proto.Request.prototype.getFlashReadData = function() {
  return /** @type{?proto.FlashReadDataCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.FlashReadDataCommandParam, 105));
};


/**
 * @param {?proto.FlashReadDataCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setFlashReadData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 105, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearFlashReadData = function() {
  return this.setFlashReadData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasFlashReadData = function() {
  return jspb.Message.getField(this, 105) != null;
};


/**
 * optional SensingStartCommandParam sensing_start = 106;
 * @return {?proto.SensingStartCommandParam}
 */
proto.Request.prototype.getSensingStart = function() {
  return /** @type{?proto.SensingStartCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.SensingStartCommandParam, 106));
};


/**
 * @param {?proto.SensingStartCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setSensingStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 106, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearSensingStart = function() {
  return this.setSensingStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasSensingStart = function() {
  return jspb.Message.getField(this, 106) != null;
};


/**
 * optional StreamingStartCommandParam streaming_start = 107;
 * @return {?proto.StreamingStartCommandParam}
 */
proto.Request.prototype.getStreamingStart = function() {
  return /** @type{?proto.StreamingStartCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.StreamingStartCommandParam, 107));
};


/**
 * @param {?proto.StreamingStartCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setStreamingStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 107, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearStreamingStart = function() {
  return this.setStreamingStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasStreamingStart = function() {
  return jspb.Message.getField(this, 107) != null;
};


/**
 * optional StreamingStopCommandParam streaming_stop = 108;
 * @return {?proto.StreamingStopCommandParam}
 */
proto.Request.prototype.getStreamingStop = function() {
  return /** @type{?proto.StreamingStopCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.StreamingStopCommandParam, 108));
};


/**
 * @param {?proto.StreamingStopCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setStreamingStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 108, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearStreamingStop = function() {
  return this.setStreamingStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasStreamingStop = function() {
  return jspb.Message.getField(this, 108) != null;
};


/**
 * optional UploadStartCommandParam upload_start = 109;
 * @return {?proto.UploadStartCommandParam}
 */
proto.Request.prototype.getUploadStart = function() {
  return /** @type{?proto.UploadStartCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.UploadStartCommandParam, 109));
};


/**
 * @param {?proto.UploadStartCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setUploadStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 109, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearUploadStart = function() {
  return this.setUploadStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasUploadStart = function() {
  return jspb.Message.getField(this, 109) != null;
};


/**
 * optional UploadWritePageCommandParam upload_write_page = 110;
 * @return {?proto.UploadWritePageCommandParam}
 */
proto.Request.prototype.getUploadWritePage = function() {
  return /** @type{?proto.UploadWritePageCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.UploadWritePageCommandParam, 110));
};


/**
 * @param {?proto.UploadWritePageCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setUploadWritePage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 110, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearUploadWritePage = function() {
  return this.setUploadWritePage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasUploadWritePage = function() {
  return jspb.Message.getField(this, 110) != null;
};


/**
 * optional RecordingGetInfoCommandParam recording_get_info = 111;
 * @return {?proto.RecordingGetInfoCommandParam}
 */
proto.Request.prototype.getRecordingGetInfo = function() {
  return /** @type{?proto.RecordingGetInfoCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.RecordingGetInfoCommandParam, 111));
};


/**
 * @param {?proto.RecordingGetInfoCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setRecordingGetInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 111, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearRecordingGetInfo = function() {
  return this.setRecordingGetInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasRecordingGetInfo = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional RecordingReadCommandParam recording_read = 112;
 * @return {?proto.RecordingReadCommandParam}
 */
proto.Request.prototype.getRecordingRead = function() {
  return /** @type{?proto.RecordingReadCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.RecordingReadCommandParam, 112));
};


/**
 * @param {?proto.RecordingReadCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setRecordingRead = function(value) {
  return jspb.Message.setOneofWrapperField(this, 112, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearRecordingRead = function() {
  return this.setRecordingRead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasRecordingRead = function() {
  return jspb.Message.getField(this, 112) != null;
};


/**
 * optional TimesyncTxEnableCommandParam timesync_tx_enable = 113;
 * @return {?proto.TimesyncTxEnableCommandParam}
 */
proto.Request.prototype.getTimesyncTxEnable = function() {
  return /** @type{?proto.TimesyncTxEnableCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.TimesyncTxEnableCommandParam, 113));
};


/**
 * @param {?proto.TimesyncTxEnableCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setTimesyncTxEnable = function(value) {
  return jspb.Message.setOneofWrapperField(this, 113, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearTimesyncTxEnable = function() {
  return this.setTimesyncTxEnable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasTimesyncTxEnable = function() {
  return jspb.Message.getField(this, 113) != null;
};


/**
 * optional TimesyncRxEnableCommandParam timesync_rx_enable = 114;
 * @return {?proto.TimesyncRxEnableCommandParam}
 */
proto.Request.prototype.getTimesyncRxEnable = function() {
  return /** @type{?proto.TimesyncRxEnableCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.TimesyncRxEnableCommandParam, 114));
};


/**
 * @param {?proto.TimesyncRxEnableCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setTimesyncRxEnable = function(value) {
  return jspb.Message.setOneofWrapperField(this, 114, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearTimesyncRxEnable = function() {
  return this.setTimesyncRxEnable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasTimesyncRxEnable = function() {
  return jspb.Message.getField(this, 114) != null;
};


/**
 * optional AFE4900DynamicConfigCommandParam afe4900_dynamic_config = 115;
 * @return {?proto.AFE4900DynamicConfigCommandParam}
 */
proto.Request.prototype.getAfe4900DynamicConfig = function() {
  return /** @type{?proto.AFE4900DynamicConfigCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.AFE4900DynamicConfigCommandParam, 115));
};


/**
 * @param {?proto.AFE4900DynamicConfigCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setAfe4900DynamicConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 115, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearAfe4900DynamicConfig = function() {
  return this.setAfe4900DynamicConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasAfe4900DynamicConfig = function() {
  return jspb.Message.getField(this, 115) != null;
};


/**
 * optional SimulateFaultCommandParam simulate_fault = 116;
 * @return {?proto.SimulateFaultCommandParam}
 */
proto.Request.prototype.getSimulateFault = function() {
  return /** @type{?proto.SimulateFaultCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.SimulateFaultCommandParam, 116));
};


/**
 * @param {?proto.SimulateFaultCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setSimulateFault = function(value) {
  return jspb.Message.setOneofWrapperField(this, 116, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearSimulateFault = function() {
  return this.setSimulateFault(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasSimulateFault = function() {
  return jspb.Message.getField(this, 116) != null;
};


/**
 * optional AnnotateCommandParam annotate = 117;
 * @return {?proto.AnnotateCommandParam}
 */
proto.Request.prototype.getAnnotate = function() {
  return /** @type{?proto.AnnotateCommandParam} */ (
    jspb.Message.getWrapperField(this, proto.AnnotateCommandParam, 117));
};


/**
 * @param {?proto.AnnotateCommandParam|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setAnnotate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 117, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearAnnotate = function() {
  return this.setAnnotate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasAnnotate = function() {
  return jspb.Message.getField(this, 117) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Response.oneofGroups_ = [[20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37]];

/**
 * @enum {number}
 */
proto.Response.ParamCase = {
  PARAM_NOT_SET: 0,
  TEMPERATURE_GET: 20,
  TIME_GET: 21,
  FLASH_READ_DATA: 22,
  PRESSURE_GET: 24,
  SYSTEM_STATUS: 25,
  STREAMING_START: 26,
  RECORDING_GET_INFO: 27,
  SENSING_GET_INFO: 28,
  RECORDING_GET_FREE_SPACE: 29,
  VERSION_GET: 30,
  UPLOAD_START: 31,
  SENSING_START: 32,
  RECORDING_GET_COUNT: 33,
  FAULT_GET_INFO: 34,
  DEBUG_RTOS_GET_INFO: 35,
  SENSING_STOP: 36,
  ANNOTATE: 37
};

/**
 * @return {proto.Response.ParamCase}
 */
proto.Response.prototype.getParamCase = function() {
  return /** @type {proto.Response.ParamCase} */(jspb.Message.computeOneofCase(this, proto.Response.oneofGroups_[0]));
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
proto.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 3, ""),
    temperatureGet: (f = msg.getTemperatureGet()) && proto.TemperatureGetResponseParam.toObject(includeInstance, f),
    timeGet: (f = msg.getTimeGet()) && proto.TimeGetResponseParam.toObject(includeInstance, f),
    flashReadData: (f = msg.getFlashReadData()) && proto.FlashReadDataResponseParam.toObject(includeInstance, f),
    pressureGet: (f = msg.getPressureGet()) && proto.PressureGetResponseParam.toObject(includeInstance, f),
    systemStatus: (f = msg.getSystemStatus()) && proto.SystemStatusResponseParam.toObject(includeInstance, f),
    streamingStart: (f = msg.getStreamingStart()) && proto.StreamingStartResponseParam.toObject(includeInstance, f),
    recordingGetInfo: (f = msg.getRecordingGetInfo()) && proto.RecordingGetInfoResponseParam.toObject(includeInstance, f),
    sensingGetInfo: (f = msg.getSensingGetInfo()) && proto.SensingGetInfoResponseParam.toObject(includeInstance, f),
    recordingGetFreeSpace: (f = msg.getRecordingGetFreeSpace()) && proto.RecordingGetFreeSpaceResponseParam.toObject(includeInstance, f),
    versionGet: (f = msg.getVersionGet()) && proto.VersionGetResponseParam.toObject(includeInstance, f),
    uploadStart: (f = msg.getUploadStart()) && proto.UploadStartResponseParam.toObject(includeInstance, f),
    sensingStart: (f = msg.getSensingStart()) && proto.SensingStartResponseParam.toObject(includeInstance, f),
    recordingGetCount: (f = msg.getRecordingGetCount()) && proto.RecordingGetCountResponseParam.toObject(includeInstance, f),
    faultGetInfo: (f = msg.getFaultGetInfo()) && proto.FaultGetInfoResponseParam.toObject(includeInstance, f),
    debugRtosGetInfo: (f = msg.getDebugRtosGetInfo()) && proto.DebugRtosGetInfoResponseParam.toObject(includeInstance, f),
    sensingStop: (f = msg.getSensingStop()) && proto.SensingStopResponseParam.toObject(includeInstance, f),
    annotate: (f = msg.getAnnotate()) && proto.AnnotateResponseParam.toObject(includeInstance, f)
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
 * @return {!proto.Response}
 */
proto.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response;
  return proto.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response}
 */
proto.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Command} */ (reader.readEnum());
      msg.setCommand(value);
      break;
    case 2:
      var value = /** @type {!proto.ErrorCode} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 20:
      var value = new proto.TemperatureGetResponseParam;
      reader.readMessage(value,proto.TemperatureGetResponseParam.deserializeBinaryFromReader);
      msg.setTemperatureGet(value);
      break;
    case 21:
      var value = new proto.TimeGetResponseParam;
      reader.readMessage(value,proto.TimeGetResponseParam.deserializeBinaryFromReader);
      msg.setTimeGet(value);
      break;
    case 22:
      var value = new proto.FlashReadDataResponseParam;
      reader.readMessage(value,proto.FlashReadDataResponseParam.deserializeBinaryFromReader);
      msg.setFlashReadData(value);
      break;
    case 24:
      var value = new proto.PressureGetResponseParam;
      reader.readMessage(value,proto.PressureGetResponseParam.deserializeBinaryFromReader);
      msg.setPressureGet(value);
      break;
    case 25:
      var value = new proto.SystemStatusResponseParam;
      reader.readMessage(value,proto.SystemStatusResponseParam.deserializeBinaryFromReader);
      msg.setSystemStatus(value);
      break;
    case 26:
      var value = new proto.StreamingStartResponseParam;
      reader.readMessage(value,proto.StreamingStartResponseParam.deserializeBinaryFromReader);
      msg.setStreamingStart(value);
      break;
    case 27:
      var value = new proto.RecordingGetInfoResponseParam;
      reader.readMessage(value,proto.RecordingGetInfoResponseParam.deserializeBinaryFromReader);
      msg.setRecordingGetInfo(value);
      break;
    case 28:
      var value = new proto.SensingGetInfoResponseParam;
      reader.readMessage(value,proto.SensingGetInfoResponseParam.deserializeBinaryFromReader);
      msg.setSensingGetInfo(value);
      break;
    case 29:
      var value = new proto.RecordingGetFreeSpaceResponseParam;
      reader.readMessage(value,proto.RecordingGetFreeSpaceResponseParam.deserializeBinaryFromReader);
      msg.setRecordingGetFreeSpace(value);
      break;
    case 30:
      var value = new proto.VersionGetResponseParam;
      reader.readMessage(value,proto.VersionGetResponseParam.deserializeBinaryFromReader);
      msg.setVersionGet(value);
      break;
    case 31:
      var value = new proto.UploadStartResponseParam;
      reader.readMessage(value,proto.UploadStartResponseParam.deserializeBinaryFromReader);
      msg.setUploadStart(value);
      break;
    case 32:
      var value = new proto.SensingStartResponseParam;
      reader.readMessage(value,proto.SensingStartResponseParam.deserializeBinaryFromReader);
      msg.setSensingStart(value);
      break;
    case 33:
      var value = new proto.RecordingGetCountResponseParam;
      reader.readMessage(value,proto.RecordingGetCountResponseParam.deserializeBinaryFromReader);
      msg.setRecordingGetCount(value);
      break;
    case 34:
      var value = new proto.FaultGetInfoResponseParam;
      reader.readMessage(value,proto.FaultGetInfoResponseParam.deserializeBinaryFromReader);
      msg.setFaultGetInfo(value);
      break;
    case 35:
      var value = new proto.DebugRtosGetInfoResponseParam;
      reader.readMessage(value,proto.DebugRtosGetInfoResponseParam.deserializeBinaryFromReader);
      msg.setDebugRtosGetInfo(value);
      break;
    case 36:
      var value = new proto.SensingStopResponseParam;
      reader.readMessage(value,proto.SensingStopResponseParam.deserializeBinaryFromReader);
      msg.setSensingStop(value);
      break;
    case 37:
      var value = new proto.AnnotateResponseParam;
      reader.readMessage(value,proto.AnnotateResponseParam.deserializeBinaryFromReader);
      msg.setAnnotate(value);
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
proto.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getError();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTemperatureGet();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.TemperatureGetResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getTimeGet();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.TimeGetResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getFlashReadData();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.FlashReadDataResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getPressureGet();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.PressureGetResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getSystemStatus();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.SystemStatusResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getStreamingStart();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.StreamingStartResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getRecordingGetInfo();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.RecordingGetInfoResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getSensingGetInfo();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.SensingGetInfoResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getRecordingGetFreeSpace();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.RecordingGetFreeSpaceResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getVersionGet();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.VersionGetResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getUploadStart();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.UploadStartResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getSensingStart();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.SensingStartResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getRecordingGetCount();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.RecordingGetCountResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getFaultGetInfo();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.FaultGetInfoResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getDebugRtosGetInfo();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.DebugRtosGetInfoResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getSensingStop();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.SensingStopResponseParam.serializeBinaryToWriter
    );
  }
  f = message.getAnnotate();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.AnnotateResponseParam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Command command = 1;
 * @return {!proto.Command}
 */
proto.Response.prototype.getCommand = function() {
  return /** @type {!proto.Command} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Command} value
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.setCommand = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ErrorCode error = 2;
 * @return {!proto.ErrorCode}
 */
proto.Response.prototype.getError = function() {
  return /** @type {!proto.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ErrorCode} value
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.setError = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.Response.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TemperatureGetResponseParam temperature_get = 20;
 * @return {?proto.TemperatureGetResponseParam}
 */
proto.Response.prototype.getTemperatureGet = function() {
  return /** @type{?proto.TemperatureGetResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.TemperatureGetResponseParam, 20));
};


/**
 * @param {?proto.TemperatureGetResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setTemperatureGet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearTemperatureGet = function() {
  return this.setTemperatureGet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasTemperatureGet = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional TimeGetResponseParam time_get = 21;
 * @return {?proto.TimeGetResponseParam}
 */
proto.Response.prototype.getTimeGet = function() {
  return /** @type{?proto.TimeGetResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.TimeGetResponseParam, 21));
};


/**
 * @param {?proto.TimeGetResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setTimeGet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearTimeGet = function() {
  return this.setTimeGet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasTimeGet = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional FlashReadDataResponseParam flash_read_data = 22;
 * @return {?proto.FlashReadDataResponseParam}
 */
proto.Response.prototype.getFlashReadData = function() {
  return /** @type{?proto.FlashReadDataResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.FlashReadDataResponseParam, 22));
};


/**
 * @param {?proto.FlashReadDataResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setFlashReadData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearFlashReadData = function() {
  return this.setFlashReadData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasFlashReadData = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional PressureGetResponseParam pressure_get = 24;
 * @return {?proto.PressureGetResponseParam}
 */
proto.Response.prototype.getPressureGet = function() {
  return /** @type{?proto.PressureGetResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.PressureGetResponseParam, 24));
};


/**
 * @param {?proto.PressureGetResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setPressureGet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearPressureGet = function() {
  return this.setPressureGet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasPressureGet = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional SystemStatusResponseParam system_status = 25;
 * @return {?proto.SystemStatusResponseParam}
 */
proto.Response.prototype.getSystemStatus = function() {
  return /** @type{?proto.SystemStatusResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.SystemStatusResponseParam, 25));
};


/**
 * @param {?proto.SystemStatusResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setSystemStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearSystemStatus = function() {
  return this.setSystemStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasSystemStatus = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional StreamingStartResponseParam streaming_start = 26;
 * @return {?proto.StreamingStartResponseParam}
 */
proto.Response.prototype.getStreamingStart = function() {
  return /** @type{?proto.StreamingStartResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.StreamingStartResponseParam, 26));
};


/**
 * @param {?proto.StreamingStartResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setStreamingStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearStreamingStart = function() {
  return this.setStreamingStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasStreamingStart = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional RecordingGetInfoResponseParam recording_get_info = 27;
 * @return {?proto.RecordingGetInfoResponseParam}
 */
proto.Response.prototype.getRecordingGetInfo = function() {
  return /** @type{?proto.RecordingGetInfoResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.RecordingGetInfoResponseParam, 27));
};


/**
 * @param {?proto.RecordingGetInfoResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRecordingGetInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRecordingGetInfo = function() {
  return this.setRecordingGetInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRecordingGetInfo = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional SensingGetInfoResponseParam sensing_get_info = 28;
 * @return {?proto.SensingGetInfoResponseParam}
 */
proto.Response.prototype.getSensingGetInfo = function() {
  return /** @type{?proto.SensingGetInfoResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.SensingGetInfoResponseParam, 28));
};


/**
 * @param {?proto.SensingGetInfoResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setSensingGetInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearSensingGetInfo = function() {
  return this.setSensingGetInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasSensingGetInfo = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional RecordingGetFreeSpaceResponseParam recording_get_free_space = 29;
 * @return {?proto.RecordingGetFreeSpaceResponseParam}
 */
proto.Response.prototype.getRecordingGetFreeSpace = function() {
  return /** @type{?proto.RecordingGetFreeSpaceResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.RecordingGetFreeSpaceResponseParam, 29));
};


/**
 * @param {?proto.RecordingGetFreeSpaceResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRecordingGetFreeSpace = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRecordingGetFreeSpace = function() {
  return this.setRecordingGetFreeSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRecordingGetFreeSpace = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional VersionGetResponseParam version_get = 30;
 * @return {?proto.VersionGetResponseParam}
 */
proto.Response.prototype.getVersionGet = function() {
  return /** @type{?proto.VersionGetResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.VersionGetResponseParam, 30));
};


/**
 * @param {?proto.VersionGetResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setVersionGet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearVersionGet = function() {
  return this.setVersionGet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasVersionGet = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional UploadStartResponseParam upload_start = 31;
 * @return {?proto.UploadStartResponseParam}
 */
proto.Response.prototype.getUploadStart = function() {
  return /** @type{?proto.UploadStartResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.UploadStartResponseParam, 31));
};


/**
 * @param {?proto.UploadStartResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setUploadStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearUploadStart = function() {
  return this.setUploadStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasUploadStart = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional SensingStartResponseParam sensing_start = 32;
 * @return {?proto.SensingStartResponseParam}
 */
proto.Response.prototype.getSensingStart = function() {
  return /** @type{?proto.SensingStartResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.SensingStartResponseParam, 32));
};


/**
 * @param {?proto.SensingStartResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setSensingStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearSensingStart = function() {
  return this.setSensingStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasSensingStart = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional RecordingGetCountResponseParam recording_get_count = 33;
 * @return {?proto.RecordingGetCountResponseParam}
 */
proto.Response.prototype.getRecordingGetCount = function() {
  return /** @type{?proto.RecordingGetCountResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.RecordingGetCountResponseParam, 33));
};


/**
 * @param {?proto.RecordingGetCountResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRecordingGetCount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRecordingGetCount = function() {
  return this.setRecordingGetCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRecordingGetCount = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional FaultGetInfoResponseParam fault_get_info = 34;
 * @return {?proto.FaultGetInfoResponseParam}
 */
proto.Response.prototype.getFaultGetInfo = function() {
  return /** @type{?proto.FaultGetInfoResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.FaultGetInfoResponseParam, 34));
};


/**
 * @param {?proto.FaultGetInfoResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setFaultGetInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearFaultGetInfo = function() {
  return this.setFaultGetInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasFaultGetInfo = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional DebugRtosGetInfoResponseParam debug_rtos_get_info = 35;
 * @return {?proto.DebugRtosGetInfoResponseParam}
 */
proto.Response.prototype.getDebugRtosGetInfo = function() {
  return /** @type{?proto.DebugRtosGetInfoResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.DebugRtosGetInfoResponseParam, 35));
};


/**
 * @param {?proto.DebugRtosGetInfoResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setDebugRtosGetInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearDebugRtosGetInfo = function() {
  return this.setDebugRtosGetInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasDebugRtosGetInfo = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional SensingStopResponseParam sensing_stop = 36;
 * @return {?proto.SensingStopResponseParam}
 */
proto.Response.prototype.getSensingStop = function() {
  return /** @type{?proto.SensingStopResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.SensingStopResponseParam, 36));
};


/**
 * @param {?proto.SensingStopResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setSensingStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearSensingStop = function() {
  return this.setSensingStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasSensingStop = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional AnnotateResponseParam annotate = 37;
 * @return {?proto.AnnotateResponseParam}
 */
proto.Response.prototype.getAnnotate = function() {
  return /** @type{?proto.AnnotateResponseParam} */ (
    jspb.Message.getWrapperField(this, proto.AnnotateResponseParam, 37));
};


/**
 * @param {?proto.AnnotateResponseParam|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setAnnotate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearAnnotate = function() {
  return this.setAnnotate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasAnnotate = function() {
  return jspb.Message.getField(this, 37) != null;
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
proto.TestDataOne.prototype.toObject = function(opt_includeInstance) {
  return proto.TestDataOne.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TestDataOne} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestDataOne.toObject = function(includeInstance, msg) {
  var f, obj = {
    myDataOne: msg.getMyDataOne_asB64()
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
 * @return {!proto.TestDataOne}
 */
proto.TestDataOne.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestDataOne;
  return proto.TestDataOne.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestDataOne} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestDataOne}
 */
proto.TestDataOne.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 200:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMyDataOne(value);
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
proto.TestDataOne.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TestDataOne.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestDataOne} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestDataOne.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyDataOne_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      200,
      f
    );
  }
};


/**
 * optional bytes my_data_one = 200;
 * @return {!(string|Uint8Array)}
 */
proto.TestDataOne.prototype.getMyDataOne = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 200, ""));
};


/**
 * optional bytes my_data_one = 200;
 * This is a type-conversion wrapper around `getMyDataOne()`
 * @return {string}
 */
proto.TestDataOne.prototype.getMyDataOne_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMyDataOne()));
};


/**
 * optional bytes my_data_one = 200;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMyDataOne()`
 * @return {!Uint8Array}
 */
proto.TestDataOne.prototype.getMyDataOne_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMyDataOne()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.TestDataOne} returns this
 */
proto.TestDataOne.prototype.setMyDataOne = function(value) {
  return jspb.Message.setProto3BytesField(this, 200, value);
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
proto.TestDataTwo.prototype.toObject = function(opt_includeInstance) {
  return proto.TestDataTwo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TestDataTwo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestDataTwo.toObject = function(includeInstance, msg) {
  var f, obj = {
    foo: jspb.Message.getFieldWithDefault(msg, 200, 0),
    myDataTwo: msg.getMyDataTwo_asB64()
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
 * @return {!proto.TestDataTwo}
 */
proto.TestDataTwo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestDataTwo;
  return proto.TestDataTwo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestDataTwo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestDataTwo}
 */
proto.TestDataTwo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 200:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFoo(value);
      break;
    case 201:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMyDataTwo(value);
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
proto.TestDataTwo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TestDataTwo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestDataTwo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestDataTwo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFoo();
  if (f !== 0) {
    writer.writeUint32(
      200,
      f
    );
  }
  f = message.getMyDataTwo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      201,
      f
    );
  }
};


/**
 * optional uint32 foo = 200;
 * @return {number}
 */
proto.TestDataTwo.prototype.getFoo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 200, 0));
};


/**
 * @param {number} value
 * @return {!proto.TestDataTwo} returns this
 */
proto.TestDataTwo.prototype.setFoo = function(value) {
  return jspb.Message.setProto3IntField(this, 200, value);
};


/**
 * optional bytes my_data_two = 201;
 * @return {!(string|Uint8Array)}
 */
proto.TestDataTwo.prototype.getMyDataTwo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 201, ""));
};


/**
 * optional bytes my_data_two = 201;
 * This is a type-conversion wrapper around `getMyDataTwo()`
 * @return {string}
 */
proto.TestDataTwo.prototype.getMyDataTwo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMyDataTwo()));
};


/**
 * optional bytes my_data_two = 201;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMyDataTwo()`
 * @return {!Uint8Array}
 */
proto.TestDataTwo.prototype.getMyDataTwo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMyDataTwo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.TestDataTwo} returns this
 */
proto.TestDataTwo.prototype.setMyDataTwo = function(value) {
  return jspb.Message.setProto3BytesField(this, 201, value);
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
proto.Annotation.prototype.toObject = function(opt_includeInstance) {
  return proto.Annotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Annotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Annotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotationData: msg.getAnnotationData_asB64()
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
 * @return {!proto.Annotation}
 */
proto.Annotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Annotation;
  return proto.Annotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Annotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Annotation}
 */
proto.Annotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAnnotationData(value);
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
proto.Annotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Annotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Annotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Annotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotationData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes annotation_data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Annotation.prototype.getAnnotationData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes annotation_data = 1;
 * This is a type-conversion wrapper around `getAnnotationData()`
 * @return {string}
 */
proto.Annotation.prototype.getAnnotationData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAnnotationData()));
};


/**
 * optional bytes annotation_data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAnnotationData()`
 * @return {!Uint8Array}
 */
proto.Annotation.prototype.getAnnotationData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAnnotationData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Annotation} returns this
 */
proto.Annotation.prototype.setAnnotationData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MotionSamples.repeatedFields_ = [1,2,3,4,5,6,30,31,32];



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
proto.MotionSamples.prototype.toObject = function(opt_includeInstance) {
  return proto.MotionSamples.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MotionSamples} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MotionSamples.toObject = function(includeInstance, msg) {
  var f, obj = {
    accelXList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    accelYList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    accelZList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    gyroXList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    gyroYList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    gyroZList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    magXList: (f = jspb.Message.getRepeatedField(msg, 30)) == null ? undefined : f,
    magYList: (f = jspb.Message.getRepeatedField(msg, 31)) == null ? undefined : f,
    magZList: (f = jspb.Message.getRepeatedField(msg, 32)) == null ? undefined : f
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
 * @return {!proto.MotionSamples}
 */
proto.MotionSamples.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MotionSamples;
  return proto.MotionSamples.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MotionSamples} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MotionSamples}
 */
proto.MotionSamples.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setAccelXList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setAccelYList(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setAccelZList(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setGyroXList(value);
      break;
    case 5:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setGyroYList(value);
      break;
    case 6:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setGyroZList(value);
      break;
    case 30:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setMagXList(value);
      break;
    case 31:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setMagYList(value);
      break;
    case 32:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setMagZList(value);
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
proto.MotionSamples.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MotionSamples.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MotionSamples} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MotionSamples.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccelXList();
  if (f.length > 0) {
    writer.writePackedSint32(
      1,
      f
    );
  }
  f = message.getAccelYList();
  if (f.length > 0) {
    writer.writePackedSint32(
      2,
      f
    );
  }
  f = message.getAccelZList();
  if (f.length > 0) {
    writer.writePackedSint32(
      3,
      f
    );
  }
  f = message.getGyroXList();
  if (f.length > 0) {
    writer.writePackedSint32(
      4,
      f
    );
  }
  f = message.getGyroYList();
  if (f.length > 0) {
    writer.writePackedSint32(
      5,
      f
    );
  }
  f = message.getGyroZList();
  if (f.length > 0) {
    writer.writePackedSint32(
      6,
      f
    );
  }
  f = message.getMagXList();
  if (f.length > 0) {
    writer.writePackedSint32(
      30,
      f
    );
  }
  f = message.getMagYList();
  if (f.length > 0) {
    writer.writePackedSint32(
      31,
      f
    );
  }
  f = message.getMagZList();
  if (f.length > 0) {
    writer.writePackedSint32(
      32,
      f
    );
  }
};


/**
 * repeated sint32 accel_x = 1;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getAccelXList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setAccelXList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addAccelX = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearAccelXList = function() {
  return this.setAccelXList([]);
};


/**
 * repeated sint32 accel_y = 2;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getAccelYList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setAccelYList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addAccelY = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearAccelYList = function() {
  return this.setAccelYList([]);
};


/**
 * repeated sint32 accel_z = 3;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getAccelZList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setAccelZList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addAccelZ = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearAccelZList = function() {
  return this.setAccelZList([]);
};


/**
 * repeated sint32 gyro_x = 4;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getGyroXList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setGyroXList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addGyroX = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearGyroXList = function() {
  return this.setGyroXList([]);
};


/**
 * repeated sint32 gyro_y = 5;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getGyroYList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setGyroYList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addGyroY = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearGyroYList = function() {
  return this.setGyroYList([]);
};


/**
 * repeated sint32 gyro_z = 6;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getGyroZList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setGyroZList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addGyroZ = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearGyroZList = function() {
  return this.setGyroZList([]);
};


/**
 * repeated sint32 mag_x = 30;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getMagXList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 30));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setMagXList = function(value) {
  return jspb.Message.setField(this, 30, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addMagX = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 30, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearMagXList = function() {
  return this.setMagXList([]);
};


/**
 * repeated sint32 mag_y = 31;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getMagYList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 31));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setMagYList = function(value) {
  return jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addMagY = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearMagYList = function() {
  return this.setMagYList([]);
};


/**
 * repeated sint32 mag_z = 32;
 * @return {!Array<number>}
 */
proto.MotionSamples.prototype.getMagZList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 32));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.setMagZList = function(value) {
  return jspb.Message.setField(this, 32, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.addMagZ = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 32, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MotionSamples} returns this
 */
proto.MotionSamples.prototype.clearMagZList = function() {
  return this.setMagZList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RotationSamples.repeatedFields_ = [1,2,3,4];



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
proto.RotationSamples.prototype.toObject = function(opt_includeInstance) {
  return proto.RotationSamples.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RotationSamples} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RotationSamples.toObject = function(includeInstance, msg) {
  var f, obj = {
    quatAList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    quatBList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    quatCList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
    quatDList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.RotationSamples}
 */
proto.RotationSamples.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RotationSamples;
  return proto.RotationSamples.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RotationSamples} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RotationSamples}
 */
proto.RotationSamples.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setQuatAList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setQuatBList(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setQuatCList(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setQuatDList(value);
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
proto.RotationSamples.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RotationSamples.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RotationSamples} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RotationSamples.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuatAList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getQuatBList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = message.getQuatCList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getQuatDList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
};


/**
 * repeated float quat_a = 1;
 * @return {!Array<number>}
 */
proto.RotationSamples.prototype.getQuatAList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.setQuatAList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.addQuatA = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.clearQuatAList = function() {
  return this.setQuatAList([]);
};


/**
 * repeated float quat_b = 2;
 * @return {!Array<number>}
 */
proto.RotationSamples.prototype.getQuatBList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.setQuatBList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.addQuatB = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.clearQuatBList = function() {
  return this.setQuatBList([]);
};


/**
 * repeated float quat_c = 3;
 * @return {!Array<number>}
 */
proto.RotationSamples.prototype.getQuatCList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.setQuatCList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.addQuatC = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.clearQuatCList = function() {
  return this.setQuatCList([]);
};


/**
 * repeated float quat_d = 4;
 * @return {!Array<number>}
 */
proto.RotationSamples.prototype.getQuatDList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.setQuatDList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.addQuatD = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RotationSamples} returns this
 */
proto.RotationSamples.prototype.clearQuatDList = function() {
  return this.setQuatDList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AFE4900Samples.repeatedFields_ = [1,2,3];



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
proto.AFE4900Samples.prototype.toObject = function(opt_includeInstance) {
  return proto.AFE4900Samples.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AFE4900Samples} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AFE4900Samples.toObject = function(includeInstance, msg) {
  var f, obj = {
    ecgList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    ppgList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    ambientList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.AFE4900Samples}
 */
proto.AFE4900Samples.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AFE4900Samples;
  return proto.AFE4900Samples.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AFE4900Samples} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AFE4900Samples}
 */
proto.AFE4900Samples.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setEcgList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setPpgList(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setAmbientList(value);
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
proto.AFE4900Samples.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AFE4900Samples.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AFE4900Samples} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AFE4900Samples.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEcgList();
  if (f.length > 0) {
    writer.writePackedSint32(
      1,
      f
    );
  }
  f = message.getPpgList();
  if (f.length > 0) {
    writer.writePackedSint32(
      2,
      f
    );
  }
  f = message.getAmbientList();
  if (f.length > 0) {
    writer.writePackedSint32(
      3,
      f
    );
  }
};


/**
 * repeated sint32 ecg = 1;
 * @return {!Array<number>}
 */
proto.AFE4900Samples.prototype.getEcgList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.setEcgList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.addEcg = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.clearEcgList = function() {
  return this.setEcgList([]);
};


/**
 * repeated sint32 ppg = 2;
 * @return {!Array<number>}
 */
proto.AFE4900Samples.prototype.getPpgList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.setPpgList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.addPpg = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.clearPpgList = function() {
  return this.setPpgList([]);
};


/**
 * repeated sint32 ambient = 3;
 * @return {!Array<number>}
 */
proto.AFE4900Samples.prototype.getAmbientList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.setAmbientList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.addAmbient = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AFE4900Samples} returns this
 */
proto.AFE4900Samples.prototype.clearAmbientList = function() {
  return this.setAmbientList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.EnvironmentSamples.repeatedFields_ = [2,3,4];



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
proto.EnvironmentSamples.prototype.toObject = function(opt_includeInstance) {
  return proto.EnvironmentSamples.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnvironmentSamples} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnvironmentSamples.toObject = function(includeInstance, msg) {
  var f, obj = {
    pascalsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    temperatureCList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
    externalTemperatureCList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.EnvironmentSamples}
 */
proto.EnvironmentSamples.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnvironmentSamples;
  return proto.EnvironmentSamples.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnvironmentSamples} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnvironmentSamples}
 */
proto.EnvironmentSamples.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setPascalsList(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setTemperatureCList(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setExternalTemperatureCList(value);
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
proto.EnvironmentSamples.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EnvironmentSamples.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EnvironmentSamples} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnvironmentSamples.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPascalsList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = message.getTemperatureCList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getExternalTemperatureCList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
};


/**
 * repeated float pascals = 2;
 * @return {!Array<number>}
 */
proto.EnvironmentSamples.prototype.getPascalsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.setPascalsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.addPascals = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.clearPascalsList = function() {
  return this.setPascalsList([]);
};


/**
 * repeated float temperature_c = 3;
 * @return {!Array<number>}
 */
proto.EnvironmentSamples.prototype.getTemperatureCList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.setTemperatureCList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.addTemperatureC = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.clearTemperatureCList = function() {
  return this.setTemperatureCList([]);
};


/**
 * repeated float external_temperature_c = 4;
 * @return {!Array<number>}
 */
proto.EnvironmentSamples.prototype.getExternalTemperatureCList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.setExternalTemperatureCList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.addExternalTemperatureC = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.EnvironmentSamples} returns this
 */
proto.EnvironmentSamples.prototype.clearExternalTemperatureCList = function() {
  return this.setExternalTemperatureCList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AD5940Samples.repeatedFields_ = [1,2];



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
proto.AD5940Samples.prototype.toObject = function(opt_includeInstance) {
  return proto.AD5940Samples.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AD5940Samples} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AD5940Samples.toObject = function(includeInstance, msg) {
  var f, obj = {
    zMagList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    zPhaseList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.AD5940Samples}
 */
proto.AD5940Samples.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AD5940Samples;
  return proto.AD5940Samples.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AD5940Samples} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AD5940Samples}
 */
proto.AD5940Samples.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setZMagList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setZPhaseList(value);
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
proto.AD5940Samples.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AD5940Samples.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AD5940Samples} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AD5940Samples.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZMagList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getZPhaseList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
};


/**
 * repeated float z_mag = 1;
 * @return {!Array<number>}
 */
proto.AD5940Samples.prototype.getZMagList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.AD5940Samples} returns this
 */
proto.AD5940Samples.prototype.setZMagList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.AD5940Samples} returns this
 */
proto.AD5940Samples.prototype.addZMag = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AD5940Samples} returns this
 */
proto.AD5940Samples.prototype.clearZMagList = function() {
  return this.setZMagList([]);
};


/**
 * repeated float z_phase = 2;
 * @return {!Array<number>}
 */
proto.AD5940Samples.prototype.getZPhaseList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.AD5940Samples} returns this
 */
proto.AD5940Samples.prototype.setZPhaseList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.AD5940Samples} returns this
 */
proto.AD5940Samples.prototype.addZPhase = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AD5940Samples} returns this
 */
proto.AD5940Samples.prototype.clearZPhaseList = function() {
  return this.setZPhaseList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.StreamingSamples.oneofGroups_ = [[20,21,22,23,24]];

/**
 * @enum {number}
 */
proto.StreamingSamples.SamplesCase = {
  SAMPLES_NOT_SET: 0,
  MOTION: 20,
  AFE4900: 21,
  ENVIRONMENT: 22,
  ROTATION: 23,
  AD5940: 24
};

/**
 * @return {proto.StreamingSamples.SamplesCase}
 */
proto.StreamingSamples.prototype.getSamplesCase = function() {
  return /** @type {proto.StreamingSamples.SamplesCase} */(jspb.Message.computeOneofCase(this, proto.StreamingSamples.oneofGroups_[0]));
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
proto.StreamingSamples.prototype.toObject = function(opt_includeInstance) {
  return proto.StreamingSamples.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StreamingSamples} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingSamples.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    samplingPeriod: jspb.Message.getFieldWithDefault(msg, 2, 0),
    motion: (f = msg.getMotion()) && proto.MotionSamples.toObject(includeInstance, f),
    afe4900: (f = msg.getAfe4900()) && proto.AFE4900Samples.toObject(includeInstance, f),
    environment: (f = msg.getEnvironment()) && proto.EnvironmentSamples.toObject(includeInstance, f),
    rotation: (f = msg.getRotation()) && proto.RotationSamples.toObject(includeInstance, f),
    ad5940: (f = msg.getAd5940()) && proto.AD5940Samples.toObject(includeInstance, f)
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
 * @return {!proto.StreamingSamples}
 */
proto.StreamingSamples.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StreamingSamples;
  return proto.StreamingSamples.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StreamingSamples} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StreamingSamples}
 */
proto.StreamingSamples.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSamplingPeriod(value);
      break;
    case 20:
      var value = new proto.MotionSamples;
      reader.readMessage(value,proto.MotionSamples.deserializeBinaryFromReader);
      msg.setMotion(value);
      break;
    case 21:
      var value = new proto.AFE4900Samples;
      reader.readMessage(value,proto.AFE4900Samples.deserializeBinaryFromReader);
      msg.setAfe4900(value);
      break;
    case 22:
      var value = new proto.EnvironmentSamples;
      reader.readMessage(value,proto.EnvironmentSamples.deserializeBinaryFromReader);
      msg.setEnvironment(value);
      break;
    case 23:
      var value = new proto.RotationSamples;
      reader.readMessage(value,proto.RotationSamples.deserializeBinaryFromReader);
      msg.setRotation(value);
      break;
    case 24:
      var value = new proto.AD5940Samples;
      reader.readMessage(value,proto.AD5940Samples.deserializeBinaryFromReader);
      msg.setAd5940(value);
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
proto.StreamingSamples.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StreamingSamples.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StreamingSamples} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingSamples.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSamplingPeriod();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMotion();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.MotionSamples.serializeBinaryToWriter
    );
  }
  f = message.getAfe4900();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.AFE4900Samples.serializeBinaryToWriter
    );
  }
  f = message.getEnvironment();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.EnvironmentSamples.serializeBinaryToWriter
    );
  }
  f = message.getRotation();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.RotationSamples.serializeBinaryToWriter
    );
  }
  f = message.getAd5940();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.AD5940Samples.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.StreamingSamples.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.StreamingSamples} returns this
 */
proto.StreamingSamples.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 sampling_period = 2;
 * @return {number}
 */
proto.StreamingSamples.prototype.getSamplingPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.StreamingSamples} returns this
 */
proto.StreamingSamples.prototype.setSamplingPeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional MotionSamples motion = 20;
 * @return {?proto.MotionSamples}
 */
proto.StreamingSamples.prototype.getMotion = function() {
  return /** @type{?proto.MotionSamples} */ (
    jspb.Message.getWrapperField(this, proto.MotionSamples, 20));
};


/**
 * @param {?proto.MotionSamples|undefined} value
 * @return {!proto.StreamingSamples} returns this
*/
proto.StreamingSamples.prototype.setMotion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.StreamingSamples.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StreamingSamples} returns this
 */
proto.StreamingSamples.prototype.clearMotion = function() {
  return this.setMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StreamingSamples.prototype.hasMotion = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional AFE4900Samples afe4900 = 21;
 * @return {?proto.AFE4900Samples}
 */
proto.StreamingSamples.prototype.getAfe4900 = function() {
  return /** @type{?proto.AFE4900Samples} */ (
    jspb.Message.getWrapperField(this, proto.AFE4900Samples, 21));
};


/**
 * @param {?proto.AFE4900Samples|undefined} value
 * @return {!proto.StreamingSamples} returns this
*/
proto.StreamingSamples.prototype.setAfe4900 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.StreamingSamples.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StreamingSamples} returns this
 */
proto.StreamingSamples.prototype.clearAfe4900 = function() {
  return this.setAfe4900(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StreamingSamples.prototype.hasAfe4900 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional EnvironmentSamples environment = 22;
 * @return {?proto.EnvironmentSamples}
 */
proto.StreamingSamples.prototype.getEnvironment = function() {
  return /** @type{?proto.EnvironmentSamples} */ (
    jspb.Message.getWrapperField(this, proto.EnvironmentSamples, 22));
};


/**
 * @param {?proto.EnvironmentSamples|undefined} value
 * @return {!proto.StreamingSamples} returns this
*/
proto.StreamingSamples.prototype.setEnvironment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.StreamingSamples.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StreamingSamples} returns this
 */
proto.StreamingSamples.prototype.clearEnvironment = function() {
  return this.setEnvironment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StreamingSamples.prototype.hasEnvironment = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional RotationSamples rotation = 23;
 * @return {?proto.RotationSamples}
 */
proto.StreamingSamples.prototype.getRotation = function() {
  return /** @type{?proto.RotationSamples} */ (
    jspb.Message.getWrapperField(this, proto.RotationSamples, 23));
};


/**
 * @param {?proto.RotationSamples|undefined} value
 * @return {!proto.StreamingSamples} returns this
*/
proto.StreamingSamples.prototype.setRotation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.StreamingSamples.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StreamingSamples} returns this
 */
proto.StreamingSamples.prototype.clearRotation = function() {
  return this.setRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StreamingSamples.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional AD5940Samples ad5940 = 24;
 * @return {?proto.AD5940Samples}
 */
proto.StreamingSamples.prototype.getAd5940 = function() {
  return /** @type{?proto.AD5940Samples} */ (
    jspb.Message.getWrapperField(this, proto.AD5940Samples, 24));
};


/**
 * @param {?proto.AD5940Samples|undefined} value
 * @return {!proto.StreamingSamples} returns this
*/
proto.StreamingSamples.prototype.setAd5940 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.StreamingSamples.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StreamingSamples} returns this
 */
proto.StreamingSamples.prototype.clearAd5940 = function() {
  return this.setAd5940(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StreamingSamples.prototype.hasAd5940 = function() {
  return jspb.Message.getField(this, 24) != null;
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
proto.StreamingInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.StreamingInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StreamingInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    accelGScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    gyroDpsScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    afe4900EcgVScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    magUtScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    timestampScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    samplingPeriodScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.StreamingInfo}
 */
proto.StreamingInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StreamingInfo;
  return proto.StreamingInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StreamingInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StreamingInfo}
 */
proto.StreamingInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAccelGScale(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGyroDpsScale(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAfe4900EcgVScale(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMagUtScale(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTimestampScale(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSamplingPeriodScale(value);
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
proto.StreamingInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StreamingInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StreamingInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StreamingInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccelGScale();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getGyroDpsScale();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAfe4900EcgVScale();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getMagUtScale();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTimestampScale();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getSamplingPeriodScale();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional float accel_g_scale = 1;
 * @return {number}
 */
proto.StreamingInfo.prototype.getAccelGScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.StreamingInfo} returns this
 */
proto.StreamingInfo.prototype.setAccelGScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float gyro_dps_scale = 2;
 * @return {number}
 */
proto.StreamingInfo.prototype.getGyroDpsScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.StreamingInfo} returns this
 */
proto.StreamingInfo.prototype.setGyroDpsScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float afe4900_ecg_v_scale = 3;
 * @return {number}
 */
proto.StreamingInfo.prototype.getAfe4900EcgVScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.StreamingInfo} returns this
 */
proto.StreamingInfo.prototype.setAfe4900EcgVScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float mag_ut_scale = 4;
 * @return {number}
 */
proto.StreamingInfo.prototype.getMagUtScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.StreamingInfo} returns this
 */
proto.StreamingInfo.prototype.setMagUtScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float timestamp_scale = 5;
 * @return {number}
 */
proto.StreamingInfo.prototype.getTimestampScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.StreamingInfo} returns this
 */
proto.StreamingInfo.prototype.setTimestampScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float sampling_period_scale = 6;
 * @return {number}
 */
proto.StreamingInfo.prototype.getSamplingPeriodScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.StreamingInfo} returns this
 */
proto.StreamingInfo.prototype.setSamplingPeriodScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DataMessage.repeatedFields_ = [103];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DataMessage.oneofGroups_ = [[100,101,102,104]];

/**
 * @enum {number}
 */
proto.DataMessage.DataCase = {
  DATA_NOT_SET: 0,
  TEST_DATA_ONE: 100,
  TEST_DATA_TWO: 101,
  STREAMING_SAMPLES: 102,
  TIMESTAMP_TEST: 104
};

/**
 * @return {proto.DataMessage.DataCase}
 */
proto.DataMessage.prototype.getDataCase = function() {
  return /** @type {proto.DataMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.DataMessage.oneofGroups_[0]));
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
proto.DataMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DataMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DataMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DataMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    testDataOne: (f = msg.getTestDataOne()) && proto.TestDataOne.toObject(includeInstance, f),
    testDataTwo: (f = msg.getTestDataTwo()) && proto.TestDataTwo.toObject(includeInstance, f),
    streamingSamples: (f = msg.getStreamingSamples()) && proto.StreamingSamples.toObject(includeInstance, f),
    timestampTest: (f = msg.getTimestampTest()) && proto.TimestampTestMessage.toObject(includeInstance, f),
    recordingPagesList: jspb.Message.toObjectList(msg.getRecordingPagesList(),
    proto.RecordingPage.toObject, includeInstance)
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
 * @return {!proto.DataMessage}
 */
proto.DataMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DataMessage;
  return proto.DataMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DataMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DataMessage}
 */
proto.DataMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 100:
      var value = new proto.TestDataOne;
      reader.readMessage(value,proto.TestDataOne.deserializeBinaryFromReader);
      msg.setTestDataOne(value);
      break;
    case 101:
      var value = new proto.TestDataTwo;
      reader.readMessage(value,proto.TestDataTwo.deserializeBinaryFromReader);
      msg.setTestDataTwo(value);
      break;
    case 102:
      var value = new proto.StreamingSamples;
      reader.readMessage(value,proto.StreamingSamples.deserializeBinaryFromReader);
      msg.setStreamingSamples(value);
      break;
    case 104:
      var value = new proto.TimestampTestMessage;
      reader.readMessage(value,proto.TimestampTestMessage.deserializeBinaryFromReader);
      msg.setTimestampTest(value);
      break;
    case 103:
      var value = new proto.RecordingPage;
      reader.readMessage(value,proto.RecordingPage.deserializeBinaryFromReader);
      msg.addRecordingPages(value);
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
proto.DataMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DataMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DataMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DataMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTestDataOne();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.TestDataOne.serializeBinaryToWriter
    );
  }
  f = message.getTestDataTwo();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.TestDataTwo.serializeBinaryToWriter
    );
  }
  f = message.getStreamingSamples();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.StreamingSamples.serializeBinaryToWriter
    );
  }
  f = message.getTimestampTest();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      proto.TimestampTestMessage.serializeBinaryToWriter
    );
  }
  f = message.getRecordingPagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      103,
      f,
      proto.RecordingPage.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestDataOne test_data_one = 100;
 * @return {?proto.TestDataOne}
 */
proto.DataMessage.prototype.getTestDataOne = function() {
  return /** @type{?proto.TestDataOne} */ (
    jspb.Message.getWrapperField(this, proto.TestDataOne, 100));
};


/**
 * @param {?proto.TestDataOne|undefined} value
 * @return {!proto.DataMessage} returns this
*/
proto.DataMessage.prototype.setTestDataOne = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.DataMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DataMessage} returns this
 */
proto.DataMessage.prototype.clearTestDataOne = function() {
  return this.setTestDataOne(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DataMessage.prototype.hasTestDataOne = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional TestDataTwo test_data_two = 101;
 * @return {?proto.TestDataTwo}
 */
proto.DataMessage.prototype.getTestDataTwo = function() {
  return /** @type{?proto.TestDataTwo} */ (
    jspb.Message.getWrapperField(this, proto.TestDataTwo, 101));
};


/**
 * @param {?proto.TestDataTwo|undefined} value
 * @return {!proto.DataMessage} returns this
*/
proto.DataMessage.prototype.setTestDataTwo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.DataMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DataMessage} returns this
 */
proto.DataMessage.prototype.clearTestDataTwo = function() {
  return this.setTestDataTwo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DataMessage.prototype.hasTestDataTwo = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional StreamingSamples streaming_samples = 102;
 * @return {?proto.StreamingSamples}
 */
proto.DataMessage.prototype.getStreamingSamples = function() {
  return /** @type{?proto.StreamingSamples} */ (
    jspb.Message.getWrapperField(this, proto.StreamingSamples, 102));
};


/**
 * @param {?proto.StreamingSamples|undefined} value
 * @return {!proto.DataMessage} returns this
*/
proto.DataMessage.prototype.setStreamingSamples = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.DataMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DataMessage} returns this
 */
proto.DataMessage.prototype.clearStreamingSamples = function() {
  return this.setStreamingSamples(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DataMessage.prototype.hasStreamingSamples = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional TimestampTestMessage timestamp_test = 104;
 * @return {?proto.TimestampTestMessage}
 */
proto.DataMessage.prototype.getTimestampTest = function() {
  return /** @type{?proto.TimestampTestMessage} */ (
    jspb.Message.getWrapperField(this, proto.TimestampTestMessage, 104));
};


/**
 * @param {?proto.TimestampTestMessage|undefined} value
 * @return {!proto.DataMessage} returns this
*/
proto.DataMessage.prototype.setTimestampTest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.DataMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DataMessage} returns this
 */
proto.DataMessage.prototype.clearTimestampTest = function() {
  return this.setTimestampTest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DataMessage.prototype.hasTimestampTest = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * repeated RecordingPage recording_pages = 103;
 * @return {!Array<!proto.RecordingPage>}
 */
proto.DataMessage.prototype.getRecordingPagesList = function() {
  return /** @type{!Array<!proto.RecordingPage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.RecordingPage, 103));
};


/**
 * @param {!Array<!proto.RecordingPage>} value
 * @return {!proto.DataMessage} returns this
*/
proto.DataMessage.prototype.setRecordingPagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 103, value);
};


/**
 * @param {!proto.RecordingPage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.RecordingPage}
 */
proto.DataMessage.prototype.addRecordingPages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 103, opt_value, proto.RecordingPage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.DataMessage} returns this
 */
proto.DataMessage.prototype.clearRecordingPagesList = function() {
  return this.setRecordingPagesList([]);
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
proto.SensorConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.SensorConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SensorConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensorConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordingEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    motion: (f = msg.getMotion()) && proto.MotionConfig.toObject(includeInstance, f),
    afe4900: (f = msg.getAfe4900()) && proto.AFE4900Config.toObject(includeInstance, f),
    environment: (f = msg.getEnvironment()) && proto.EnvironmentConfig.toObject(includeInstance, f),
    ad5940: (f = msg.getAd5940()) && proto.AD5940Config.toObject(includeInstance, f)
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
 * @return {!proto.SensorConfig}
 */
proto.SensorConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SensorConfig;
  return proto.SensorConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SensorConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SensorConfig}
 */
proto.SensorConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecordingEnabled(value);
      break;
    case 1:
      var value = new proto.MotionConfig;
      reader.readMessage(value,proto.MotionConfig.deserializeBinaryFromReader);
      msg.setMotion(value);
      break;
    case 2:
      var value = new proto.AFE4900Config;
      reader.readMessage(value,proto.AFE4900Config.deserializeBinaryFromReader);
      msg.setAfe4900(value);
      break;
    case 4:
      var value = new proto.EnvironmentConfig;
      reader.readMessage(value,proto.EnvironmentConfig.deserializeBinaryFromReader);
      msg.setEnvironment(value);
      break;
    case 5:
      var value = new proto.AD5940Config;
      reader.readMessage(value,proto.AD5940Config.deserializeBinaryFromReader);
      msg.setAd5940(value);
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
proto.SensorConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SensorConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SensorConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensorConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordingEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMotion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MotionConfig.serializeBinaryToWriter
    );
  }
  f = message.getAfe4900();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AFE4900Config.serializeBinaryToWriter
    );
  }
  f = message.getEnvironment();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.EnvironmentConfig.serializeBinaryToWriter
    );
  }
  f = message.getAd5940();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.AD5940Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool recording_enabled = 3;
 * @return {boolean}
 */
proto.SensorConfig.prototype.getRecordingEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SensorConfig} returns this
 */
proto.SensorConfig.prototype.setRecordingEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional MotionConfig motion = 1;
 * @return {?proto.MotionConfig}
 */
proto.SensorConfig.prototype.getMotion = function() {
  return /** @type{?proto.MotionConfig} */ (
    jspb.Message.getWrapperField(this, proto.MotionConfig, 1));
};


/**
 * @param {?proto.MotionConfig|undefined} value
 * @return {!proto.SensorConfig} returns this
*/
proto.SensorConfig.prototype.setMotion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SensorConfig} returns this
 */
proto.SensorConfig.prototype.clearMotion = function() {
  return this.setMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SensorConfig.prototype.hasMotion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AFE4900Config afe4900 = 2;
 * @return {?proto.AFE4900Config}
 */
proto.SensorConfig.prototype.getAfe4900 = function() {
  return /** @type{?proto.AFE4900Config} */ (
    jspb.Message.getWrapperField(this, proto.AFE4900Config, 2));
};


/**
 * @param {?proto.AFE4900Config|undefined} value
 * @return {!proto.SensorConfig} returns this
*/
proto.SensorConfig.prototype.setAfe4900 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SensorConfig} returns this
 */
proto.SensorConfig.prototype.clearAfe4900 = function() {
  return this.setAfe4900(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SensorConfig.prototype.hasAfe4900 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EnvironmentConfig environment = 4;
 * @return {?proto.EnvironmentConfig}
 */
proto.SensorConfig.prototype.getEnvironment = function() {
  return /** @type{?proto.EnvironmentConfig} */ (
    jspb.Message.getWrapperField(this, proto.EnvironmentConfig, 4));
};


/**
 * @param {?proto.EnvironmentConfig|undefined} value
 * @return {!proto.SensorConfig} returns this
*/
proto.SensorConfig.prototype.setEnvironment = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SensorConfig} returns this
 */
proto.SensorConfig.prototype.clearEnvironment = function() {
  return this.setEnvironment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SensorConfig.prototype.hasEnvironment = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AD5940Config ad5940 = 5;
 * @return {?proto.AD5940Config}
 */
proto.SensorConfig.prototype.getAd5940 = function() {
  return /** @type{?proto.AD5940Config} */ (
    jspb.Message.getWrapperField(this, proto.AD5940Config, 5));
};


/**
 * @param {?proto.AD5940Config|undefined} value
 * @return {!proto.SensorConfig} returns this
*/
proto.SensorConfig.prototype.setAd5940 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SensorConfig} returns this
 */
proto.SensorConfig.prototype.clearAd5940 = function() {
  return this.setAd5940(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SensorConfig.prototype.hasAd5940 = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.AD5940Config.prototype.toObject = function(opt_includeInstance) {
  return proto.AD5940Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AD5940Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AD5940Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    measureBaseline: jspb.Message.getBooleanFieldWithDefault(msg, 30, false)
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
 * @return {!proto.AD5940Config}
 */
proto.AD5940Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AD5940Config;
  return proto.AD5940Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AD5940Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AD5940Config}
 */
proto.AD5940Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.AD5940Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 30:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMeasureBaseline(value);
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
proto.AD5940Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AD5940Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AD5940Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AD5940Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMeasureBaseline();
  if (f) {
    writer.writeBool(
      30,
      f
    );
  }
};


/**
 * optional AD5940Mode mode = 1;
 * @return {!proto.AD5940Mode}
 */
proto.AD5940Config.prototype.getMode = function() {
  return /** @type {!proto.AD5940Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.AD5940Mode} value
 * @return {!proto.AD5940Config} returns this
 */
proto.AD5940Config.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool measure_baseline = 30;
 * @return {boolean}
 */
proto.AD5940Config.prototype.getMeasureBaseline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 30, false));
};


/**
 * @param {boolean} value
 * @return {!proto.AD5940Config} returns this
 */
proto.AD5940Config.prototype.setMeasureBaseline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 30, value);
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
proto.AFE4900Dynamic.prototype.toObject = function(opt_includeInstance) {
  return proto.AFE4900Dynamic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AFE4900Dynamic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AFE4900Dynamic.toObject = function(includeInstance, msg) {
  var f, obj = {
    tiaGain: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ledCurrent: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offdacCurrent: jspb.Message.getFieldWithDefault(msg, 3, 0),
    photodiodeDisconnect: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    offdacCurrentAmbient: jspb.Message.getFieldWithDefault(msg, 5, 0),
    offdacScale: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.AFE4900Dynamic}
 */
proto.AFE4900Dynamic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AFE4900Dynamic;
  return proto.AFE4900Dynamic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AFE4900Dynamic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AFE4900Dynamic}
 */
proto.AFE4900Dynamic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.AFE4900TIAGain} */ (reader.readEnum());
      msg.setTiaGain(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLedCurrent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffdacCurrent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPhotodiodeDisconnect(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffdacCurrentAmbient(value);
      break;
    case 6:
      var value = /** @type {!proto.AFE4900OffdacScale} */ (reader.readEnum());
      msg.setOffdacScale(value);
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
proto.AFE4900Dynamic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AFE4900Dynamic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AFE4900Dynamic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AFE4900Dynamic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTiaGain();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLedCurrent();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getOffdacCurrent();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPhotodiodeDisconnect();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getOffdacCurrentAmbient();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getOffdacScale();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional AFE4900TIAGain tia_gain = 1;
 * @return {!proto.AFE4900TIAGain}
 */
proto.AFE4900Dynamic.prototype.getTiaGain = function() {
  return /** @type {!proto.AFE4900TIAGain} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.AFE4900TIAGain} value
 * @return {!proto.AFE4900Dynamic} returns this
 */
proto.AFE4900Dynamic.prototype.setTiaGain = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 led_current = 2;
 * @return {number}
 */
proto.AFE4900Dynamic.prototype.getLedCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.AFE4900Dynamic} returns this
 */
proto.AFE4900Dynamic.prototype.setLedCurrent = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 offdac_current = 3;
 * @return {number}
 */
proto.AFE4900Dynamic.prototype.getOffdacCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.AFE4900Dynamic} returns this
 */
proto.AFE4900Dynamic.prototype.setOffdacCurrent = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool photodiode_disconnect = 4;
 * @return {boolean}
 */
proto.AFE4900Dynamic.prototype.getPhotodiodeDisconnect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.AFE4900Dynamic} returns this
 */
proto.AFE4900Dynamic.prototype.setPhotodiodeDisconnect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 offdac_current_ambient = 5;
 * @return {number}
 */
proto.AFE4900Dynamic.prototype.getOffdacCurrentAmbient = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.AFE4900Dynamic} returns this
 */
proto.AFE4900Dynamic.prototype.setOffdacCurrentAmbient = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional AFE4900OffdacScale offdac_scale = 6;
 * @return {!proto.AFE4900OffdacScale}
 */
proto.AFE4900Dynamic.prototype.getOffdacScale = function() {
  return /** @type {!proto.AFE4900OffdacScale} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.AFE4900OffdacScale} value
 * @return {!proto.AFE4900Dynamic} returns this
 */
proto.AFE4900Dynamic.prototype.setOffdacScale = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
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
proto.AFE4900Config.prototype.toObject = function(opt_includeInstance) {
  return proto.AFE4900Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AFE4900Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AFE4900Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ecgGain: jspb.Message.getFieldWithDefault(msg, 2, 0),
    color: jspb.Message.getFieldWithDefault(msg, 3, 0),
    photodiode: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.AFE4900Config}
 */
proto.AFE4900Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AFE4900Config;
  return proto.AFE4900Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AFE4900Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AFE4900Config}
 */
proto.AFE4900Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.AFE4900Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {!proto.AFE4900ECGGain} */ (reader.readEnum());
      msg.setEcgGain(value);
      break;
    case 3:
      var value = /** @type {!proto.AFE4900Color} */ (reader.readEnum());
      msg.setColor(value);
      break;
    case 4:
      var value = /** @type {!proto.AFE4900Photodiode} */ (reader.readEnum());
      msg.setPhotodiode(value);
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
proto.AFE4900Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AFE4900Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AFE4900Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AFE4900Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEcgGain();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getColor();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPhotodiode();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional AFE4900Mode mode = 1;
 * @return {!proto.AFE4900Mode}
 */
proto.AFE4900Config.prototype.getMode = function() {
  return /** @type {!proto.AFE4900Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.AFE4900Mode} value
 * @return {!proto.AFE4900Config} returns this
 */
proto.AFE4900Config.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AFE4900ECGGain ecg_gain = 2;
 * @return {!proto.AFE4900ECGGain}
 */
proto.AFE4900Config.prototype.getEcgGain = function() {
  return /** @type {!proto.AFE4900ECGGain} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.AFE4900ECGGain} value
 * @return {!proto.AFE4900Config} returns this
 */
proto.AFE4900Config.prototype.setEcgGain = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional AFE4900Color color = 3;
 * @return {!proto.AFE4900Color}
 */
proto.AFE4900Config.prototype.getColor = function() {
  return /** @type {!proto.AFE4900Color} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.AFE4900Color} value
 * @return {!proto.AFE4900Config} returns this
 */
proto.AFE4900Config.prototype.setColor = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional AFE4900Photodiode photodiode = 4;
 * @return {!proto.AFE4900Photodiode}
 */
proto.AFE4900Config.prototype.getPhotodiode = function() {
  return /** @type {!proto.AFE4900Photodiode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.AFE4900Photodiode} value
 * @return {!proto.AFE4900Config} returns this
 */
proto.AFE4900Config.prototype.setPhotodiode = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.EnvironmentConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.EnvironmentConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnvironmentConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnvironmentConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    samplingPeriodUs: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.EnvironmentConfig}
 */
proto.EnvironmentConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnvironmentConfig;
  return proto.EnvironmentConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnvironmentConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnvironmentConfig}
 */
proto.EnvironmentConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.EnvironmentMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSamplingPeriodUs(value);
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
proto.EnvironmentConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EnvironmentConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EnvironmentConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnvironmentConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSamplingPeriodUs();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional EnvironmentMode mode = 1;
 * @return {!proto.EnvironmentMode}
 */
proto.EnvironmentConfig.prototype.getMode = function() {
  return /** @type {!proto.EnvironmentMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.EnvironmentMode} value
 * @return {!proto.EnvironmentConfig} returns this
 */
proto.EnvironmentConfig.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 sampling_period_us = 2;
 * @return {number}
 */
proto.EnvironmentConfig.prototype.getSamplingPeriodUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.EnvironmentConfig} returns this
 */
proto.EnvironmentConfig.prototype.setSamplingPeriodUs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.MotionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.MotionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MotionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MotionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    samplingPeriodUs: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accelGRange: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gyroDpsRange: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rotationType: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.MotionConfig}
 */
proto.MotionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MotionConfig;
  return proto.MotionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MotionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MotionConfig}
 */
proto.MotionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSamplingPeriodUs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccelGRange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGyroDpsRange(value);
      break;
    case 4:
      var value = /** @type {!proto.MotionMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 5:
      var value = /** @type {!proto.MotionRotationType} */ (reader.readEnum());
      msg.setRotationType(value);
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
proto.MotionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MotionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MotionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MotionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSamplingPeriodUs();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAccelGRange();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getGyroDpsRange();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getRotationType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional uint32 sampling_period_us = 1;
 * @return {number}
 */
proto.MotionConfig.prototype.getSamplingPeriodUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MotionConfig} returns this
 */
proto.MotionConfig.prototype.setSamplingPeriodUs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 accel_g_range = 2;
 * @return {number}
 */
proto.MotionConfig.prototype.getAccelGRange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MotionConfig} returns this
 */
proto.MotionConfig.prototype.setAccelGRange = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 gyro_dps_range = 3;
 * @return {number}
 */
proto.MotionConfig.prototype.getGyroDpsRange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MotionConfig} returns this
 */
proto.MotionConfig.prototype.setGyroDpsRange = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional MotionMode mode = 4;
 * @return {!proto.MotionMode}
 */
proto.MotionConfig.prototype.getMode = function() {
  return /** @type {!proto.MotionMode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.MotionMode} value
 * @return {!proto.MotionConfig} returns this
 */
proto.MotionConfig.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional MotionRotationType rotation_type = 5;
 * @return {!proto.MotionRotationType}
 */
proto.MotionConfig.prototype.getRotationType = function() {
  return /** @type {!proto.MotionRotationType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.MotionRotationType} value
 * @return {!proto.MotionConfig} returns this
 */
proto.MotionConfig.prototype.setRotationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
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
proto.RecordingInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.RecordingInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecordingInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordingId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numPages: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    timestampStart: jspb.Message.getFieldWithDefault(msg, 3, 0),
    durationSec: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sensorConfig: (f = msg.getSensorConfig()) && proto.SensorConfig.toObject(includeInstance, f),
    rawDataInfo: (f = msg.getRawDataInfo()) && proto.RawDataInfo.toObject(includeInstance, f),
    inProgress: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    metadata: msg.getMetadata_asB64()
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
 * @return {!proto.RecordingInfo}
 */
proto.RecordingInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecordingInfo;
  return proto.RecordingInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecordingInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecordingInfo}
 */
proto.RecordingInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecordingId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPages(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSizeBytes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimestampStart(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDurationSec(value);
      break;
    case 5:
      var value = new proto.SensorConfig;
      reader.readMessage(value,proto.SensorConfig.deserializeBinaryFromReader);
      msg.setSensorConfig(value);
      break;
    case 8:
      var value = new proto.RawDataInfo;
      reader.readMessage(value,proto.RawDataInfo.deserializeBinaryFromReader);
      msg.setRawDataInfo(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInProgress(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMetadata(value);
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
proto.RecordingInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecordingInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecordingInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordingId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNumPages();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getTimestampStart();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDurationSec();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getSensorConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SensorConfig.serializeBinaryToWriter
    );
  }
  f = message.getRawDataInfo();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.RawDataInfo.serializeBinaryToWriter
    );
  }
  f = message.getInProgress();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getMetadata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
};


/**
 * optional uint32 recording_id = 1;
 * @return {number}
 */
proto.RecordingInfo.prototype.getRecordingId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.setRecordingId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 num_pages = 2;
 * @return {number}
 */
proto.RecordingInfo.prototype.getNumPages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.setNumPages = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 size_bytes = 6;
 * @return {number}
 */
proto.RecordingInfo.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 timestamp_start = 3;
 * @return {number}
 */
proto.RecordingInfo.prototype.getTimestampStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.setTimestampStart = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 duration_sec = 4;
 * @return {number}
 */
proto.RecordingInfo.prototype.getDurationSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.setDurationSec = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SensorConfig sensor_config = 5;
 * @return {?proto.SensorConfig}
 */
proto.RecordingInfo.prototype.getSensorConfig = function() {
  return /** @type{?proto.SensorConfig} */ (
    jspb.Message.getWrapperField(this, proto.SensorConfig, 5));
};


/**
 * @param {?proto.SensorConfig|undefined} value
 * @return {!proto.RecordingInfo} returns this
*/
proto.RecordingInfo.prototype.setSensorConfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.clearSensorConfig = function() {
  return this.setSensorConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RecordingInfo.prototype.hasSensorConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RawDataInfo raw_data_info = 8;
 * @return {?proto.RawDataInfo}
 */
proto.RecordingInfo.prototype.getRawDataInfo = function() {
  return /** @type{?proto.RawDataInfo} */ (
    jspb.Message.getWrapperField(this, proto.RawDataInfo, 8));
};


/**
 * @param {?proto.RawDataInfo|undefined} value
 * @return {!proto.RecordingInfo} returns this
*/
proto.RecordingInfo.prototype.setRawDataInfo = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.clearRawDataInfo = function() {
  return this.setRawDataInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RecordingInfo.prototype.hasRawDataInfo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool in_progress = 7;
 * @return {boolean}
 */
proto.RecordingInfo.prototype.getInProgress = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.setInProgress = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bytes metadata = 9;
 * @return {!(string|Uint8Array)}
 */
proto.RecordingInfo.prototype.getMetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes metadata = 9;
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {string}
 */
proto.RecordingInfo.prototype.getMetadata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMetadata()));
};


/**
 * optional bytes metadata = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {!Uint8Array}
 */
proto.RecordingInfo.prototype.getMetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.RecordingInfo} returns this
 */
proto.RecordingInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
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
proto.RawDataInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.RawDataInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RawDataInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RawDataInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    samplingPeriodScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    accelGScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    gyroDpsScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    afe4900EcgVScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.RawDataInfo}
 */
proto.RawDataInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RawDataInfo;
  return proto.RawDataInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RawDataInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RawDataInfo}
 */
proto.RawDataInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTimestampScale(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSamplingPeriodScale(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAccelGScale(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGyroDpsScale(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAfe4900EcgVScale(value);
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
proto.RawDataInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RawDataInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RawDataInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RawDataInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampScale();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSamplingPeriodScale();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAccelGScale();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getGyroDpsScale();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getAfe4900EcgVScale();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional float timestamp_scale = 1;
 * @return {number}
 */
proto.RawDataInfo.prototype.getTimestampScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RawDataInfo} returns this
 */
proto.RawDataInfo.prototype.setTimestampScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float sampling_period_scale = 2;
 * @return {number}
 */
proto.RawDataInfo.prototype.getSamplingPeriodScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RawDataInfo} returns this
 */
proto.RawDataInfo.prototype.setSamplingPeriodScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float accel_g_scale = 3;
 * @return {number}
 */
proto.RawDataInfo.prototype.getAccelGScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RawDataInfo} returns this
 */
proto.RawDataInfo.prototype.setAccelGScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float gyro_dps_scale = 4;
 * @return {number}
 */
proto.RawDataInfo.prototype.getGyroDpsScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RawDataInfo} returns this
 */
proto.RawDataInfo.prototype.setGyroDpsScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float afe4900_ecg_v_scale = 5;
 * @return {number}
 */
proto.RawDataInfo.prototype.getAfe4900EcgVScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RawDataInfo} returns this
 */
proto.RawDataInfo.prototype.setAfe4900EcgVScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.RecordingPage.oneofGroups_ = [[4,5,6,7,8]];

/**
 * @enum {number}
 */
proto.RecordingPage.SamplesCase = {
  SAMPLES_NOT_SET: 0,
  MOTION: 4,
  AFE4900: 5,
  AD5940: 6,
  ENVIRONMENT: 7,
  ANNOTATION: 8
};

/**
 * @return {proto.RecordingPage.SamplesCase}
 */
proto.RecordingPage.prototype.getSamplesCase = function() {
  return /** @type {proto.RecordingPage.SamplesCase} */(jspb.Message.computeOneofCase(this, proto.RecordingPage.oneofGroups_[0]));
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
proto.RecordingPage.prototype.toObject = function(opt_includeInstance) {
  return proto.RecordingPage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecordingPage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingPage.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    samplingPeriod: jspb.Message.getFieldWithDefault(msg, 3, 0),
    motion: (f = msg.getMotion()) && proto.MotionSamples.toObject(includeInstance, f),
    afe4900: (f = msg.getAfe4900()) && proto.AFE4900Samples.toObject(includeInstance, f),
    ad5940: (f = msg.getAd5940()) && proto.AD5940Samples.toObject(includeInstance, f),
    environment: (f = msg.getEnvironment()) && proto.EnvironmentSamples.toObject(includeInstance, f),
    annotation: (f = msg.getAnnotation()) && proto.Annotation.toObject(includeInstance, f)
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
 * @return {!proto.RecordingPage}
 */
proto.RecordingPage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecordingPage;
  return proto.RecordingPage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecordingPage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecordingPage}
 */
proto.RecordingPage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSamplingPeriod(value);
      break;
    case 4:
      var value = new proto.MotionSamples;
      reader.readMessage(value,proto.MotionSamples.deserializeBinaryFromReader);
      msg.setMotion(value);
      break;
    case 5:
      var value = new proto.AFE4900Samples;
      reader.readMessage(value,proto.AFE4900Samples.deserializeBinaryFromReader);
      msg.setAfe4900(value);
      break;
    case 6:
      var value = new proto.AD5940Samples;
      reader.readMessage(value,proto.AD5940Samples.deserializeBinaryFromReader);
      msg.setAd5940(value);
      break;
    case 7:
      var value = new proto.EnvironmentSamples;
      reader.readMessage(value,proto.EnvironmentSamples.deserializeBinaryFromReader);
      msg.setEnvironment(value);
      break;
    case 8:
      var value = new proto.Annotation;
      reader.readMessage(value,proto.Annotation.deserializeBinaryFromReader);
      msg.setAnnotation(value);
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
proto.RecordingPage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecordingPage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecordingPage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecordingPage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSamplingPeriod();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMotion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.MotionSamples.serializeBinaryToWriter
    );
  }
  f = message.getAfe4900();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.AFE4900Samples.serializeBinaryToWriter
    );
  }
  f = message.getAd5940();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.AD5940Samples.serializeBinaryToWriter
    );
  }
  f = message.getEnvironment();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.EnvironmentSamples.serializeBinaryToWriter
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.Annotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 page_number = 1;
 * @return {number}
 */
proto.RecordingPage.prototype.getPageNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingPage} returns this
 */
proto.RecordingPage.prototype.setPageNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.RecordingPage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingPage} returns this
 */
proto.RecordingPage.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 sampling_period = 3;
 * @return {number}
 */
proto.RecordingPage.prototype.getSamplingPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecordingPage} returns this
 */
proto.RecordingPage.prototype.setSamplingPeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional MotionSamples motion = 4;
 * @return {?proto.MotionSamples}
 */
proto.RecordingPage.prototype.getMotion = function() {
  return /** @type{?proto.MotionSamples} */ (
    jspb.Message.getWrapperField(this, proto.MotionSamples, 4));
};


/**
 * @param {?proto.MotionSamples|undefined} value
 * @return {!proto.RecordingPage} returns this
*/
proto.RecordingPage.prototype.setMotion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.RecordingPage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RecordingPage} returns this
 */
proto.RecordingPage.prototype.clearMotion = function() {
  return this.setMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RecordingPage.prototype.hasMotion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AFE4900Samples afe4900 = 5;
 * @return {?proto.AFE4900Samples}
 */
proto.RecordingPage.prototype.getAfe4900 = function() {
  return /** @type{?proto.AFE4900Samples} */ (
    jspb.Message.getWrapperField(this, proto.AFE4900Samples, 5));
};


/**
 * @param {?proto.AFE4900Samples|undefined} value
 * @return {!proto.RecordingPage} returns this
*/
proto.RecordingPage.prototype.setAfe4900 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.RecordingPage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RecordingPage} returns this
 */
proto.RecordingPage.prototype.clearAfe4900 = function() {
  return this.setAfe4900(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RecordingPage.prototype.hasAfe4900 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AD5940Samples ad5940 = 6;
 * @return {?proto.AD5940Samples}
 */
proto.RecordingPage.prototype.getAd5940 = function() {
  return /** @type{?proto.AD5940Samples} */ (
    jspb.Message.getWrapperField(this, proto.AD5940Samples, 6));
};


/**
 * @param {?proto.AD5940Samples|undefined} value
 * @return {!proto.RecordingPage} returns this
*/
proto.RecordingPage.prototype.setAd5940 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.RecordingPage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RecordingPage} returns this
 */
proto.RecordingPage.prototype.clearAd5940 = function() {
  return this.setAd5940(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RecordingPage.prototype.hasAd5940 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional EnvironmentSamples environment = 7;
 * @return {?proto.EnvironmentSamples}
 */
proto.RecordingPage.prototype.getEnvironment = function() {
  return /** @type{?proto.EnvironmentSamples} */ (
    jspb.Message.getWrapperField(this, proto.EnvironmentSamples, 7));
};


/**
 * @param {?proto.EnvironmentSamples|undefined} value
 * @return {!proto.RecordingPage} returns this
*/
proto.RecordingPage.prototype.setEnvironment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.RecordingPage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RecordingPage} returns this
 */
proto.RecordingPage.prototype.clearEnvironment = function() {
  return this.setEnvironment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RecordingPage.prototype.hasEnvironment = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Annotation annotation = 8;
 * @return {?proto.Annotation}
 */
proto.RecordingPage.prototype.getAnnotation = function() {
  return /** @type{?proto.Annotation} */ (
    jspb.Message.getWrapperField(this, proto.Annotation, 8));
};


/**
 * @param {?proto.Annotation|undefined} value
 * @return {!proto.RecordingPage} returns this
*/
proto.RecordingPage.prototype.setAnnotation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.RecordingPage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RecordingPage} returns this
 */
proto.RecordingPage.prototype.clearAnnotation = function() {
  return this.setAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RecordingPage.prototype.hasAnnotation = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.TimestampTestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.TimestampTestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimestampTestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimestampTestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.TimestampTestMessage}
 */
proto.TimestampTestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimestampTestMessage;
  return proto.TimestampTestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimestampTestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimestampTestMessage}
 */
proto.TimestampTestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
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
proto.TimestampTestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TimestampTestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TimestampTestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimestampTestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.TimestampTestMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.TimestampTestMessage} returns this
 */
proto.TimestampTestMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.FaultAppError.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultAppError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultAppError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultAppError.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lineNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorCode: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.FaultAppError}
 */
proto.FaultAppError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultAppError;
  return proto.FaultAppError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultAppError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultAppError}
 */
proto.FaultAppError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLineNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setErrorCode(value);
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
proto.FaultAppError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultAppError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultAppError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultAppError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLineNumber();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getErrorCode();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string file_name = 1;
 * @return {string}
 */
proto.FaultAppError.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.FaultAppError} returns this
 */
proto.FaultAppError.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 line_number = 2;
 * @return {number}
 */
proto.FaultAppError.prototype.getLineNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultAppError} returns this
 */
proto.FaultAppError.prototype.setLineNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 error_code = 3;
 * @return {number}
 */
proto.FaultAppError.prototype.getErrorCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultAppError} returns this
 */
proto.FaultAppError.prototype.setErrorCode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.FaultHardFault.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultHardFault.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultHardFault} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultHardFault.toObject = function(includeInstance, msg) {
  var f, obj = {
    r0: jspb.Message.getFieldWithDefault(msg, 1, 0),
    r1: jspb.Message.getFieldWithDefault(msg, 2, 0),
    r2: jspb.Message.getFieldWithDefault(msg, 3, 0),
    r3: jspb.Message.getFieldWithDefault(msg, 4, 0),
    r12: jspb.Message.getFieldWithDefault(msg, 5, 0),
    lr: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pc: jspb.Message.getFieldWithDefault(msg, 7, 0),
    psr: jspb.Message.getFieldWithDefault(msg, 8, 0),
    cfsr: jspb.Message.getFieldWithDefault(msg, 9, 0),
    hfsr: jspb.Message.getFieldWithDefault(msg, 10, 0),
    mmfar: jspb.Message.getFieldWithDefault(msg, 11, 0),
    bfar: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.FaultHardFault}
 */
proto.FaultHardFault.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultHardFault;
  return proto.FaultHardFault.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultHardFault} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultHardFault}
 */
proto.FaultHardFault.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR0(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR2(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR3(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR12(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLr(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPc(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPsr(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCfsr(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHfsr(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMmfar(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBfar(value);
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
proto.FaultHardFault.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultHardFault.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultHardFault} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultHardFault.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getR0();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getR1();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getR2();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getR3();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getR12();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getLr();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getPc();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getPsr();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getCfsr();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getHfsr();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getMmfar();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getBfar();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
};


/**
 * optional uint32 r0 = 1;
 * @return {number}
 */
proto.FaultHardFault.prototype.getR0 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setR0 = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 r1 = 2;
 * @return {number}
 */
proto.FaultHardFault.prototype.getR1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setR1 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 r2 = 3;
 * @return {number}
 */
proto.FaultHardFault.prototype.getR2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setR2 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 r3 = 4;
 * @return {number}
 */
proto.FaultHardFault.prototype.getR3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setR3 = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 r12 = 5;
 * @return {number}
 */
proto.FaultHardFault.prototype.getR12 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setR12 = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 lr = 6;
 * @return {number}
 */
proto.FaultHardFault.prototype.getLr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setLr = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 pc = 7;
 * @return {number}
 */
proto.FaultHardFault.prototype.getPc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setPc = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 psr = 8;
 * @return {number}
 */
proto.FaultHardFault.prototype.getPsr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setPsr = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 cfsr = 9;
 * @return {number}
 */
proto.FaultHardFault.prototype.getCfsr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setCfsr = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 hfsr = 10;
 * @return {number}
 */
proto.FaultHardFault.prototype.getHfsr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setHfsr = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 mmfar = 11;
 * @return {number}
 */
proto.FaultHardFault.prototype.getMmfar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setMmfar = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 bfar = 12;
 * @return {number}
 */
proto.FaultHardFault.prototype.getBfar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultHardFault} returns this
 */
proto.FaultHardFault.prototype.setBfar = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
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
proto.FaultSdAssert.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultSdAssert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultSdAssert} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultSdAssert.toObject = function(includeInstance, msg) {
  var f, obj = {
    pc: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.FaultSdAssert}
 */
proto.FaultSdAssert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultSdAssert;
  return proto.FaultSdAssert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultSdAssert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultSdAssert}
 */
proto.FaultSdAssert.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPc(value);
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
proto.FaultSdAssert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultSdAssert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultSdAssert} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultSdAssert.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPc();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 pc = 1;
 * @return {number}
 */
proto.FaultSdAssert.prototype.getPc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultSdAssert} returns this
 */
proto.FaultSdAssert.prototype.setPc = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.FaultMemAcc.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultMemAcc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultMemAcc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultMemAcc.toObject = function(includeInstance, msg) {
  var f, obj = {
    pc: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.FaultMemAcc}
 */
proto.FaultMemAcc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultMemAcc;
  return proto.FaultMemAcc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultMemAcc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultMemAcc}
 */
proto.FaultMemAcc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPc(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddress(value);
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
proto.FaultMemAcc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultMemAcc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultMemAcc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultMemAcc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPc();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 pc = 1;
 * @return {number}
 */
proto.FaultMemAcc.prototype.getPc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultMemAcc} returns this
 */
proto.FaultMemAcc.prototype.setPc = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 address = 2;
 * @return {number}
 */
proto.FaultMemAcc.prototype.getAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultMemAcc} returns this
 */
proto.FaultMemAcc.prototype.setAddress = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.FaultWatchdog.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultWatchdog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultWatchdog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultWatchdog.toObject = function(includeInstance, msg) {
  var f, obj = {
    r0: jspb.Message.getFieldWithDefault(msg, 1, 0),
    r1: jspb.Message.getFieldWithDefault(msg, 2, 0),
    r2: jspb.Message.getFieldWithDefault(msg, 3, 0),
    r3: jspb.Message.getFieldWithDefault(msg, 4, 0),
    r12: jspb.Message.getFieldWithDefault(msg, 5, 0),
    lr: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pc: jspb.Message.getFieldWithDefault(msg, 7, 0),
    psr: jspb.Message.getFieldWithDefault(msg, 8, 0),
    icsr: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.FaultWatchdog}
 */
proto.FaultWatchdog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultWatchdog;
  return proto.FaultWatchdog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultWatchdog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultWatchdog}
 */
proto.FaultWatchdog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR0(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR2(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR3(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR12(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLr(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPc(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPsr(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIcsr(value);
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
proto.FaultWatchdog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultWatchdog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultWatchdog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultWatchdog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getR0();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getR1();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getR2();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getR3();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getR12();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getLr();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getPc();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getPsr();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getIcsr();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional uint32 r0 = 1;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getR0 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setR0 = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 r1 = 2;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getR1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setR1 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 r2 = 3;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getR2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setR2 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 r3 = 4;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getR3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setR3 = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 r12 = 5;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getR12 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setR12 = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 lr = 6;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getLr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setLr = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 pc = 7;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getPc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setPc = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 psr = 8;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getPsr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setPsr = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 icsr = 9;
 * @return {number}
 */
proto.FaultWatchdog.prototype.getIcsr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdog} returns this
 */
proto.FaultWatchdog.prototype.setIcsr = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
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
proto.FaultWatchdogTask.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultWatchdogTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultWatchdogTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultWatchdogTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lr: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pc: jspb.Message.getFieldWithDefault(msg, 3, 0),
    blockingQueue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    blockingOnQueueSend: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.FaultWatchdogTask}
 */
proto.FaultWatchdogTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultWatchdogTask;
  return proto.FaultWatchdogTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultWatchdogTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultWatchdogTask}
 */
proto.FaultWatchdogTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLr(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPc(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockingQueue(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockingOnQueueSend(value);
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
proto.FaultWatchdogTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultWatchdogTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultWatchdogTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultWatchdogTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLr();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPc();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getBlockingQueue();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getBlockingOnQueueSend();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string task_name = 1;
 * @return {string}
 */
proto.FaultWatchdogTask.prototype.getTaskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.FaultWatchdogTask} returns this
 */
proto.FaultWatchdogTask.prototype.setTaskName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 lr = 2;
 * @return {number}
 */
proto.FaultWatchdogTask.prototype.getLr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdogTask} returns this
 */
proto.FaultWatchdogTask.prototype.setLr = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 pc = 3;
 * @return {number}
 */
proto.FaultWatchdogTask.prototype.getPc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdogTask} returns this
 */
proto.FaultWatchdogTask.prototype.setPc = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 blocking_queue = 4;
 * @return {number}
 */
proto.FaultWatchdogTask.prototype.getBlockingQueue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultWatchdogTask} returns this
 */
proto.FaultWatchdogTask.prototype.setBlockingQueue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool blocking_on_queue_send = 5;
 * @return {boolean}
 */
proto.FaultWatchdogTask.prototype.getBlockingOnQueueSend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FaultWatchdogTask} returns this
 */
proto.FaultWatchdogTask.prototype.setBlockingOnQueueSend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.FaultTaskStackOverflow.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultTaskStackOverflow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultTaskStackOverflow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultTaskStackOverflow.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.FaultTaskStackOverflow}
 */
proto.FaultTaskStackOverflow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultTaskStackOverflow;
  return proto.FaultTaskStackOverflow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultTaskStackOverflow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultTaskStackOverflow}
 */
proto.FaultTaskStackOverflow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskName(value);
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
proto.FaultTaskStackOverflow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultTaskStackOverflow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultTaskStackOverflow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultTaskStackOverflow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string task_name = 1;
 * @return {string}
 */
proto.FaultTaskStackOverflow.prototype.getTaskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.FaultTaskStackOverflow} returns this
 */
proto.FaultTaskStackOverflow.prototype.setTaskName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.FaultInfo.oneofGroups_ = [[3,4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.FaultInfo.InfoCase = {
  INFO_NOT_SET: 0,
  APP_ERROR: 3,
  HARD_FAULT: 4,
  SD_ASSERT: 5,
  MEM_ACC: 6,
  WATCHDOG: 7,
  WATCHDOG_TASK: 8,
  TASK_STACK_OVERFLOW: 9
};

/**
 * @return {proto.FaultInfo.InfoCase}
 */
proto.FaultInfo.prototype.getInfoCase = function() {
  return /** @type {proto.FaultInfo.InfoCase} */(jspb.Message.computeOneofCase(this, proto.FaultInfo.oneofGroups_[0]));
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
proto.FaultInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.FaultInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FaultInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    appError: (f = msg.getAppError()) && proto.FaultAppError.toObject(includeInstance, f),
    hardFault: (f = msg.getHardFault()) && proto.FaultHardFault.toObject(includeInstance, f),
    sdAssert: (f = msg.getSdAssert()) && proto.FaultSdAssert.toObject(includeInstance, f),
    memAcc: (f = msg.getMemAcc()) && proto.FaultMemAcc.toObject(includeInstance, f),
    watchdog: (f = msg.getWatchdog()) && proto.FaultWatchdog.toObject(includeInstance, f),
    watchdogTask: (f = msg.getWatchdogTask()) && proto.FaultWatchdogTask.toObject(includeInstance, f),
    taskStackOverflow: (f = msg.getTaskStackOverflow()) && proto.FaultTaskStackOverflow.toObject(includeInstance, f)
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
 * @return {!proto.FaultInfo}
 */
proto.FaultInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FaultInfo;
  return proto.FaultInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FaultInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FaultInfo}
 */
proto.FaultInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.FaultType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = new proto.FaultAppError;
      reader.readMessage(value,proto.FaultAppError.deserializeBinaryFromReader);
      msg.setAppError(value);
      break;
    case 4:
      var value = new proto.FaultHardFault;
      reader.readMessage(value,proto.FaultHardFault.deserializeBinaryFromReader);
      msg.setHardFault(value);
      break;
    case 5:
      var value = new proto.FaultSdAssert;
      reader.readMessage(value,proto.FaultSdAssert.deserializeBinaryFromReader);
      msg.setSdAssert(value);
      break;
    case 6:
      var value = new proto.FaultMemAcc;
      reader.readMessage(value,proto.FaultMemAcc.deserializeBinaryFromReader);
      msg.setMemAcc(value);
      break;
    case 7:
      var value = new proto.FaultWatchdog;
      reader.readMessage(value,proto.FaultWatchdog.deserializeBinaryFromReader);
      msg.setWatchdog(value);
      break;
    case 8:
      var value = new proto.FaultWatchdogTask;
      reader.readMessage(value,proto.FaultWatchdogTask.deserializeBinaryFromReader);
      msg.setWatchdogTask(value);
      break;
    case 9:
      var value = new proto.FaultTaskStackOverflow;
      reader.readMessage(value,proto.FaultTaskStackOverflow.deserializeBinaryFromReader);
      msg.setTaskStackOverflow(value);
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
proto.FaultInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FaultInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FaultInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FaultInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAppError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.FaultAppError.serializeBinaryToWriter
    );
  }
  f = message.getHardFault();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.FaultHardFault.serializeBinaryToWriter
    );
  }
  f = message.getSdAssert();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.FaultSdAssert.serializeBinaryToWriter
    );
  }
  f = message.getMemAcc();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.FaultMemAcc.serializeBinaryToWriter
    );
  }
  f = message.getWatchdog();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.FaultWatchdog.serializeBinaryToWriter
    );
  }
  f = message.getWatchdogTask();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.FaultWatchdogTask.serializeBinaryToWriter
    );
  }
  f = message.getTaskStackOverflow();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.FaultTaskStackOverflow.serializeBinaryToWriter
    );
  }
};


/**
 * optional FaultType type = 1;
 * @return {!proto.FaultType}
 */
proto.FaultInfo.prototype.getType = function() {
  return /** @type {!proto.FaultType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.FaultType} value
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 timestamp = 2;
 * @return {number}
 */
proto.FaultInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional FaultAppError app_error = 3;
 * @return {?proto.FaultAppError}
 */
proto.FaultInfo.prototype.getAppError = function() {
  return /** @type{?proto.FaultAppError} */ (
    jspb.Message.getWrapperField(this, proto.FaultAppError, 3));
};


/**
 * @param {?proto.FaultAppError|undefined} value
 * @return {!proto.FaultInfo} returns this
*/
proto.FaultInfo.prototype.setAppError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.FaultInfo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.clearAppError = function() {
  return this.setAppError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FaultInfo.prototype.hasAppError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FaultHardFault hard_fault = 4;
 * @return {?proto.FaultHardFault}
 */
proto.FaultInfo.prototype.getHardFault = function() {
  return /** @type{?proto.FaultHardFault} */ (
    jspb.Message.getWrapperField(this, proto.FaultHardFault, 4));
};


/**
 * @param {?proto.FaultHardFault|undefined} value
 * @return {!proto.FaultInfo} returns this
*/
proto.FaultInfo.prototype.setHardFault = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.FaultInfo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.clearHardFault = function() {
  return this.setHardFault(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FaultInfo.prototype.hasHardFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FaultSdAssert sd_assert = 5;
 * @return {?proto.FaultSdAssert}
 */
proto.FaultInfo.prototype.getSdAssert = function() {
  return /** @type{?proto.FaultSdAssert} */ (
    jspb.Message.getWrapperField(this, proto.FaultSdAssert, 5));
};


/**
 * @param {?proto.FaultSdAssert|undefined} value
 * @return {!proto.FaultInfo} returns this
*/
proto.FaultInfo.prototype.setSdAssert = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.FaultInfo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.clearSdAssert = function() {
  return this.setSdAssert(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FaultInfo.prototype.hasSdAssert = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional FaultMemAcc mem_acc = 6;
 * @return {?proto.FaultMemAcc}
 */
proto.FaultInfo.prototype.getMemAcc = function() {
  return /** @type{?proto.FaultMemAcc} */ (
    jspb.Message.getWrapperField(this, proto.FaultMemAcc, 6));
};


/**
 * @param {?proto.FaultMemAcc|undefined} value
 * @return {!proto.FaultInfo} returns this
*/
proto.FaultInfo.prototype.setMemAcc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.FaultInfo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.clearMemAcc = function() {
  return this.setMemAcc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FaultInfo.prototype.hasMemAcc = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FaultWatchdog watchdog = 7;
 * @return {?proto.FaultWatchdog}
 */
proto.FaultInfo.prototype.getWatchdog = function() {
  return /** @type{?proto.FaultWatchdog} */ (
    jspb.Message.getWrapperField(this, proto.FaultWatchdog, 7));
};


/**
 * @param {?proto.FaultWatchdog|undefined} value
 * @return {!proto.FaultInfo} returns this
*/
proto.FaultInfo.prototype.setWatchdog = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.FaultInfo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.clearWatchdog = function() {
  return this.setWatchdog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FaultInfo.prototype.hasWatchdog = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional FaultWatchdogTask watchdog_task = 8;
 * @return {?proto.FaultWatchdogTask}
 */
proto.FaultInfo.prototype.getWatchdogTask = function() {
  return /** @type{?proto.FaultWatchdogTask} */ (
    jspb.Message.getWrapperField(this, proto.FaultWatchdogTask, 8));
};


/**
 * @param {?proto.FaultWatchdogTask|undefined} value
 * @return {!proto.FaultInfo} returns this
*/
proto.FaultInfo.prototype.setWatchdogTask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.FaultInfo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.clearWatchdogTask = function() {
  return this.setWatchdogTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FaultInfo.prototype.hasWatchdogTask = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional FaultTaskStackOverflow task_stack_overflow = 9;
 * @return {?proto.FaultTaskStackOverflow}
 */
proto.FaultInfo.prototype.getTaskStackOverflow = function() {
  return /** @type{?proto.FaultTaskStackOverflow} */ (
    jspb.Message.getWrapperField(this, proto.FaultTaskStackOverflow, 9));
};


/**
 * @param {?proto.FaultTaskStackOverflow|undefined} value
 * @return {!proto.FaultInfo} returns this
*/
proto.FaultInfo.prototype.setTaskStackOverflow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.FaultInfo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FaultInfo} returns this
 */
proto.FaultInfo.prototype.clearTaskStackOverflow = function() {
  return this.setTaskStackOverflow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FaultInfo.prototype.hasTaskStackOverflow = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.DebugRtosTask.prototype.toObject = function(opt_includeInstance) {
  return proto.DebugRtosTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DebugRtosTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DebugRtosTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stackHighWaterMark: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.DebugRtosTask}
 */
proto.DebugRtosTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DebugRtosTask;
  return proto.DebugRtosTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DebugRtosTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DebugRtosTask}
 */
proto.DebugRtosTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStackHighWaterMark(value);
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
proto.DebugRtosTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DebugRtosTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DebugRtosTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DebugRtosTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStackHighWaterMark();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string task_name = 1;
 * @return {string}
 */
proto.DebugRtosTask.prototype.getTaskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DebugRtosTask} returns this
 */
proto.DebugRtosTask.prototype.setTaskName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 stack_high_water_mark = 2;
 * @return {number}
 */
proto.DebugRtosTask.prototype.getStackHighWaterMark = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.DebugRtosTask} returns this
 */
proto.DebugRtosTask.prototype.setStackHighWaterMark = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.Command = {
  COMMAND_UNDEFINED: 0,
  TEMPERATURE_GET: 20,
  TIME_GET: 21,
  TIME_SET: 22,
  FLASH_ERASE_BLOCK: 24,
  FLASH_WRITE_PAGE: 25,
  FLASH_READ_DATA: 26,
  PRESSURE_GET: 28,
  SYSTEM_STATUS: 29,
  POWER_OFF: 30,
  RESET: 31,
  SENSING_START: 32,
  SENSING_STOP: 33,
  STREAMING_START: 34,
  STREAMING_STOP: 35,
  UPLOAD_START: 36,
  UPLOAD_WRITE_PAGE: 37,
  UPLOAD_FINISH: 38,
  CLEAR_ALL_RECORDINGS: 39,
  RECORDING_GET_INFO: 40,
  RECORDING_READ: 41,
  SENSING_GET_INFO: 42,
  RECORDING_GET_FREE_SPACE: 43,
  VERSION_GET: 44,
  TIMESYNC_TX_DISABLE: 45,
  TIMESYNC_TX_ENABLE: 46,
  TIMESYNC_RX_DISABLE: 47,
  TIMESYNC_RX_ENABLE: 48,
  AFE4900_DYNAMIC_CONFIG: 49,
  LOAD_FIRMWARE_IMAGE: 50,
  SIMULATE_FAULT: 51,
  UPLOAD_WRITE_PAGES_FAST: 52,
  RECORDING_GET_COUNT: 53,
  RECORDING_CLEAR_OLDEST: 54,
  FAULT_GET_INFO: 55,
  DEBUG_RTOS_GET_INFO: 56,
  ANNOTATE: 57,
  TEST_DATA: 101,
  BLINK_LEDS: 102,
  TIMESTAMP_TEST_DISABLE: 103,
  TIMESTAMP_TEST_ENABLE: 104,
  ADVERTISING_DISABLE: 105
};

/**
 * @enum {number}
 */
proto.ErrorCode = {
  ERROR_UNDEFINED: 0,
  SUCCESS: 1,
  PARSE: 2,
  UNSUPPORTED: 3,
  FAIL: 4,
  INVALID_PARAMETER: 5,
  TIME_NOT_SET: 6,
  CANNOT_START: 7,
  CANNOT_STOP: 8,
  UPLOAD_FAILED: 9,
  MEMORY_FULL: 10,
  RECORDING_NOT_FOUND: 11,
  FIRMWARE_IMAGE_INCOMPATIBLE: 12,
  FIRMWARE_IMAGE_INVALID: 13,
  RECORDING_IN_PROGRESS: 14,
  RECORDING_NOT_IN_PROGRESS: 15
};

/**
 * @enum {number}
 */
proto.UploadType = {
  UPLOAD_TYPE_UNDEFINED: 0,
  FIRMWARE_IMAGE: 1
};

/**
 * @enum {number}
 */
proto.StreamingType = {
  STREAMING_TYPE_UNDEFINED: 0,
  MOTION: 1,
  AFE4900: 2,
  ENVIRONMENT: 3,
  AD5940: 4
};

/**
 * @enum {number}
 */
proto.AD5940Mode = {
  AD5940_MODE_UNDEFINED: 0,
  EDA: 1
};

/**
 * @enum {number}
 */
proto.AFE4900Mode = {
  AFE4900_MODE_UNDEFINED: 0,
  ECG: 1,
  PPG: 2,
  PTT: 3
};

/**
 * @enum {number}
 */
proto.AFE4900ECGGain = {
  AFE4900ECGGAIN_UNDEFINED: 0,
  GAIN_2: 1,
  GAIN_3: 2,
  GAIN_4: 3,
  GAIN_5: 4,
  GAIN_6: 5,
  GAIN_9: 6,
  GAIN_12: 7
};

/**
 * @enum {number}
 */
proto.AFE4900Color = {
  AFE4900COLOR_UNDEFINED: 0,
  GREEN: 1,
  RED: 2,
  INFRARED: 3
};

/**
 * @enum {number}
 */
proto.AFE4900Photodiode = {
  AFE4900PHOTODIODE_UNDEFINED: 0,
  PD1: 1,
  PD2: 2
};

/**
 * @enum {number}
 */
proto.AFE4900TIAGain = {
  AFE4900TIAGAIN_UNDEFINED: 0,
  TIA_GAIN_10KOHM: 1,
  TIA_GAIN_25KOHM: 2,
  TIA_GAIN_50KOHM: 3,
  TIA_GAIN_100KOHM: 4,
  TIA_GAIN_250KOHM: 5,
  TIA_GAIN_500KOHM: 6,
  TIA_GAIN_1000KOHM: 7,
  TIA_GAIN_1500KOHM: 8,
  TIA_GAIN_2000KOHM: 9
};

/**
 * @enum {number}
 */
proto.AFE4900OffdacScale = {
  AFE4900OFFDACSCALE_UNDEFINED: 0,
  OFFDAC_SCALE_1X: 1,
  OFFDAC_SCALE_2X: 2,
  OFFDAC_SCALE_4X: 3,
  OFFDAC_SCALE_8X: 4
};

/**
 * @enum {number}
 */
proto.EnvironmentMode = {
  ENVIRONMENTMODE_UNDEFINED: 0,
  ALL: 1
};

/**
 * @enum {number}
 */
proto.MotionMode = {
  MOTION_MODE_UNDEFINED: 0,
  ACCEL: 1,
  ACCEL_GYRO: 2,
  COMPASS: 3,
  ROTATION: 4
};

/**
 * @enum {number}
 */
proto.MotionRotationType = {
  MOTIONROTATIONTYPE_UNDEFINED: 0,
  ROT_ACCEL_GYRO: 1,
  ROT_ACCEL_GYRO_MAG: 2,
  ROT_ACCEL_MAG: 3
};

/**
 * @enum {number}
 */
proto.SimulateFaultType = {
  SIMULATEFAULTTYPE_UNDEFINED: 0,
  SIM_HUNG_TASK: 1,
  SIM_APP_ERROR: 2,
  SIM_HARD_FAULT: 3,
  SIM_SD_ASSERT: 4,
  SIM_INVALID_MEM_ACC: 5,
  SIM_HUNG_ISR: 6,
  SIM_MAIN_STACK_OVERFLOW: 7,
  SIM_TASK_STACK_OVERFLOW: 8
};

/**
 * @enum {number}
 */
proto.FaultType = {
  NO_FAULT: 0,
  SD_ASSERT: 1,
  APP_MEMACC: 2,
  APP_ERROR: 3,
  HARD_FAULT: 4,
  WATCHDOG: 5,
  WATCHDOG_TASK: 6,
  TASK_STACK_OVERFLOW: 7
};

goog.object.extend(exports, proto);
