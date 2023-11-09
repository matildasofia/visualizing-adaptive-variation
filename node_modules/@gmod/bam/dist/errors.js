"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BamArgumentError = exports.BamSizeLimitError = exports.BamBufferOverrunError = exports.BamMalformedError = exports.BamUnimplementedError = exports.BamError = void 0;
class BamError extends Error {
}
exports.BamError = BamError;
/** Error caused by encountering a part of the BAM spec that has not yet been implemented */
class BamUnimplementedError extends Error {
}
exports.BamUnimplementedError = BamUnimplementedError;
/** An error caused by malformed data.  */
class BamMalformedError extends BamError {
}
exports.BamMalformedError = BamMalformedError;
/**
 * An error caused by attempting to read beyond the end of the defined data.
 */
class BamBufferOverrunError extends BamMalformedError {
}
exports.BamBufferOverrunError = BamBufferOverrunError;
/**
 * An error caused by data being too big, exceeding a size limit.
 */
class BamSizeLimitError extends BamError {
}
exports.BamSizeLimitError = BamSizeLimitError;
/**
 * An invalid argument was supplied to a bam-js method or object.
 */
class BamArgumentError extends BamError {
}
exports.BamArgumentError = BamArgumentError;
//# sourceMappingURL=errors.js.map