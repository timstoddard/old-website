"use strict";
var NicknameChunkType = (function () {
    function NicknameChunkType() {
    }
    Object.defineProperty(NicknameChunkType, "ADJECTIVE", {
        get: function () { return 'adjective'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NicknameChunkType, "ADVERB", {
        get: function () { return 'adverb'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NicknameChunkType, "VERB", {
        get: function () { return 'verb'; },
        enumerable: true,
        configurable: true
    });
    return NicknameChunkType;
}());
exports.NicknameChunkType = NicknameChunkType;
//# sourceMappingURL=nickname-chunk-type.js.map