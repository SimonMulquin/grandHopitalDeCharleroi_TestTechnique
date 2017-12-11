//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, FileCollection;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/vsivsi_file-collection/resumable/resumable.js                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
/*                                                                                                               // 1
* MIT Licensed                                                                                                   // 2
* http://www.23developer.com/opensource                                                                          // 3
* http://github.com/23/resumable.js                                                                              // 4
* Steffen Tiedemann Christensen, steffen@23company.com                                                           // 5
*/                                                                                                               // 6
                                                                                                                 // 7
(function(){                                                                                                     // 8
"use strict";                                                                                                    // 9
                                                                                                                 // 10
  var Resumable = function(opts){                                                                                // 11
    if ( !(this instanceof Resumable) ) {                                                                        // 12
      return new Resumable(opts);                                                                                // 13
    }                                                                                                            // 14
    this.version = 1.0;                                                                                          // 15
    // SUPPORTED BY BROWSER?                                                                                     // 16
    // Check if these features are support by the browser:                                                       // 17
    // - File object type                                                                                        // 18
    // - Blob object type                                                                                        // 19
    // - FileList object type                                                                                    // 20
    // - slicing files                                                                                           // 21
    this.support = (                                                                                             // 22
                   (typeof(File)!=='undefined')                                                                  // 23
                   &&                                                                                            // 24
                   (typeof(Blob)!=='undefined')                                                                  // 25
                   &&                                                                                            // 26
                   (typeof(FileList)!=='undefined')                                                              // 27
                   &&                                                                                            // 28
                   (!!Blob.prototype.webkitSlice||!!Blob.prototype.mozSlice||!!Blob.prototype.slice||false)      // 29
                   );                                                                                            // 30
    if(!this.support) return(false);                                                                             // 31
                                                                                                                 // 32
                                                                                                                 // 33
    // PROPERTIES                                                                                                // 34
    var $ = this;                                                                                                // 35
    $.files = [];                                                                                                // 36
    $.defaults = {                                                                                               // 37
      chunkSize:1*1024*1024,                                                                                     // 38
      forceChunkSize:false,                                                                                      // 39
      simultaneousUploads:3,                                                                                     // 40
      fileParameterName:'file',                                                                                  // 41
      chunkNumberParameterName: 'resumableChunkNumber',                                                          // 42
      chunkSizeParameterName: 'resumableChunkSize',                                                              // 43
      currentChunkSizeParameterName: 'resumableCurrentChunkSize',                                                // 44
      totalSizeParameterName: 'resumableTotalSize',                                                              // 45
      typeParameterName: 'resumableType',                                                                        // 46
      identifierParameterName: 'resumableIdentifier',                                                            // 47
      fileNameParameterName: 'resumableFilename',                                                                // 48
      relativePathParameterName: 'resumableRelativePath',                                                        // 49
      totalChunksParameterName: 'resumableTotalChunks',                                                          // 50
      throttleProgressCallbacks: 0.5,                                                                            // 51
      query:{},                                                                                                  // 52
      headers:{},                                                                                                // 53
      preprocess:null,                                                                                           // 54
      method:'multipart',                                                                                        // 55
      uploadMethod: 'POST',                                                                                      // 56
      testMethod: 'GET',                                                                                         // 57
      prioritizeFirstAndLastChunk:false,                                                                         // 58
      target:'/',                                                                                                // 59
      testTarget: null,                                                                                          // 60
      parameterNamespace:'',                                                                                     // 61
      testChunks:true,                                                                                           // 62
      generateUniqueIdentifier:null,                                                                             // 63
      getTarget:null,                                                                                            // 64
      maxChunkRetries:100,                                                                                       // 65
      chunkRetryInterval:undefined,                                                                              // 66
      permanentErrors:[400, 404, 415, 500, 501],                                                                 // 67
      maxFiles:undefined,                                                                                        // 68
      withCredentials:false,                                                                                     // 69
      xhrTimeout:0,                                                                                              // 70
      clearInput:true,                                                                                           // 71
      maxFilesErrorCallback:function (files, errorCount) {                                                       // 72
        var maxFiles = $.getOpt('maxFiles');                                                                     // 73
        alert('Please upload no more than ' + maxFiles + ' file' + (maxFiles === 1 ? '' : 's') + ' at a time.');
      },                                                                                                         // 75
      minFileSize:1,                                                                                             // 76
      minFileSizeErrorCallback:function(file, errorCount) {                                                      // 77
        alert(file.fileName||file.name +' is too small, please upload files larger than ' + $h.formatSize($.getOpt('minFileSize')) + '.');
      },                                                                                                         // 79
      maxFileSize:undefined,                                                                                     // 80
      maxFileSizeErrorCallback:function(file, errorCount) {                                                      // 81
        alert(file.fileName||file.name +' is too large, please upload files less than ' + $h.formatSize($.getOpt('maxFileSize')) + '.');
      },                                                                                                         // 83
      fileType: [],                                                                                              // 84
      fileTypeErrorCallback: function(file, errorCount) {                                                        // 85
        alert(file.fileName||file.name +' has type not allowed, please upload files of type ' + $.getOpt('fileType') + '.');
      }                                                                                                          // 87
    };                                                                                                           // 88
    $.opts = opts||{};                                                                                           // 89
    $.getOpt = function(o) {                                                                                     // 90
      var $opt = this;                                                                                           // 91
      // Get multiple option if passed an array                                                                  // 92
      if(o instanceof Array) {                                                                                   // 93
        var options = {};                                                                                        // 94
        $h.each(o, function(option){                                                                             // 95
          options[option] = $opt.getOpt(option);                                                                 // 96
        });                                                                                                      // 97
        return options;                                                                                          // 98
      }                                                                                                          // 99
      // Otherwise, just return a simple option                                                                  // 100
      if ($opt instanceof ResumableChunk) {                                                                      // 101
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }                                        // 102
        else { $opt = $opt.fileObj; }                                                                            // 103
      }                                                                                                          // 104
      if ($opt instanceof ResumableFile) {                                                                       // 105
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }                                        // 106
        else { $opt = $opt.resumableObj; }                                                                       // 107
      }                                                                                                          // 108
      if ($opt instanceof Resumable) {                                                                           // 109
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }                                        // 110
        else { return $opt.defaults[o]; }                                                                        // 111
      }                                                                                                          // 112
    };                                                                                                           // 113
                                                                                                                 // 114
    // EVENTS                                                                                                    // 115
    // catchAll(event, ...)                                                                                      // 116
    // fileSuccess(file), fileProgress(file), fileAdded(file, event), filesAdded(files, filesSkipped), fileRetry(file),
    // fileError(file, message), complete(), progress(), error(message, file), pause()                           // 118
    $.events = [];                                                                                               // 119
    $.on = function(event,callback){                                                                             // 120
      $.events.push(event.toLowerCase(), callback);                                                              // 121
    };                                                                                                           // 122
    $.fire = function(){                                                                                         // 123
      // `arguments` is an object, not array, in FF, so:                                                         // 124
      var args = [];                                                                                             // 125
      for (var i=0; i<arguments.length; i++) args.push(arguments[i]);                                            // 126
      // Find event listeners, and support pseudo-event `catchAll`                                               // 127
      var event = args[0].toLowerCase();                                                                         // 128
      for (var i=0; i<=$.events.length; i+=2) {                                                                  // 129
        if($.events[i]==event) $.events[i+1].apply($,args.slice(1));                                             // 130
        if($.events[i]=='catchall') $.events[i+1].apply(null,args);                                              // 131
      }                                                                                                          // 132
      if(event=='fileerror') $.fire('error', args[2], args[1]);                                                  // 133
      if(event=='fileprogress') $.fire('progress');                                                              // 134
    };                                                                                                           // 135
                                                                                                                 // 136
                                                                                                                 // 137
    // INTERNAL HELPER METHODS (handy, but ultimately not part of uploading)                                     // 138
    var $h = {                                                                                                   // 139
      stopEvent: function(e){                                                                                    // 140
        e.stopPropagation();                                                                                     // 141
        e.preventDefault();                                                                                      // 142
      },                                                                                                         // 143
      each: function(o,callback){                                                                                // 144
        if(typeof(o.length)!=='undefined') {                                                                     // 145
          for (var i=0; i<o.length; i++) {                                                                       // 146
            // Array or FileList                                                                                 // 147
            if(callback(o[i])===false) return;                                                                   // 148
          }                                                                                                      // 149
        } else {                                                                                                 // 150
          for (i in o) {                                                                                         // 151
            // Object                                                                                            // 152
            if(callback(i,o[i])===false) return;                                                                 // 153
          }                                                                                                      // 154
        }                                                                                                        // 155
      },                                                                                                         // 156
      generateUniqueIdentifier:function(file, event){                                                            // 157
        var custom = $.getOpt('generateUniqueIdentifier');                                                       // 158
        if(typeof custom === 'function') {                                                                       // 159
          return custom(file, event);                                                                            // 160
        }                                                                                                        // 161
        var relativePath = file.webkitRelativePath||file.fileName||file.name; // Some confusion in different versions of Firefox
        var size = file.size;                                                                                    // 163
        return(size + '-' + relativePath.replace(/[^0-9a-zA-Z_-]/img, ''));                                      // 164
      },                                                                                                         // 165
      contains:function(array,test) {                                                                            // 166
        var result = false;                                                                                      // 167
                                                                                                                 // 168
        $h.each(array, function(value) {                                                                         // 169
          if (value == test) {                                                                                   // 170
            result = true;                                                                                       // 171
            return false;                                                                                        // 172
          }                                                                                                      // 173
          return true;                                                                                           // 174
        });                                                                                                      // 175
                                                                                                                 // 176
        return result;                                                                                           // 177
      },                                                                                                         // 178
      formatSize:function(size){                                                                                 // 179
        if(size<1024) {                                                                                          // 180
          return size + ' bytes';                                                                                // 181
        } else if(size<1024*1024) {                                                                              // 182
          return (size/1024.0).toFixed(0) + ' KB';                                                               // 183
        } else if(size<1024*1024*1024) {                                                                         // 184
          return (size/1024.0/1024.0).toFixed(1) + ' MB';                                                        // 185
        } else {                                                                                                 // 186
          return (size/1024.0/1024.0/1024.0).toFixed(1) + ' GB';                                                 // 187
        }                                                                                                        // 188
      },                                                                                                         // 189
      getTarget:function(request, params){                                                                       // 190
        var target = $.getOpt('target');                                                                         // 191
                                                                                                                 // 192
        if (request === 'test' && $.getOpt('testTarget')) {                                                      // 193
          target = $.getOpt('testTarget') === '/' ? $.getOpt('target') : $.getOpt('testTarget');                 // 194
        }                                                                                                        // 195
                                                                                                                 // 196
        if (typeof target === 'function') {                                                                      // 197
          return target(params);                                                                                 // 198
        }                                                                                                        // 199
                                                                                                                 // 200
        var separator = target.indexOf('?') < 0 ? '?' : '&';                                                     // 201
        var joinedParams = params.join('&');                                                                     // 202
                                                                                                                 // 203
        return target + separator + joinedParams;                                                                // 204
      }                                                                                                          // 205
    };                                                                                                           // 206
                                                                                                                 // 207
    var onDrop = function(event){                                                                                // 208
      $h.stopEvent(event);                                                                                       // 209
                                                                                                                 // 210
      //handle dropped things as items if we can (this lets us deal with folders nicer in some cases)            // 211
      if (event.dataTransfer && event.dataTransfer.items) {                                                      // 212
        loadFiles(event.dataTransfer.items, event);                                                              // 213
      }                                                                                                          // 214
      //else handle them as files                                                                                // 215
      else if (event.dataTransfer && event.dataTransfer.files) {                                                 // 216
        loadFiles(event.dataTransfer.files, event);                                                              // 217
      }                                                                                                          // 218
    };                                                                                                           // 219
    var preventDefault = function(e) {                                                                           // 220
      e.preventDefault();                                                                                        // 221
    };                                                                                                           // 222
                                                                                                                 // 223
    /**                                                                                                          // 224
     * processes a single upload item (file or directory)                                                        // 225
     * @param {Object} item item to upload, may be file or directory entry                                       // 226
     * @param {string} path current file path                                                                    // 227
     * @param {File[]} items list of files to append new items to                                                // 228
     * @param {Function} cb callback invoked when item is processed                                              // 229
     */                                                                                                          // 230
    function processItem(item, path, items, cb) {                                                                // 231
      var entry;                                                                                                 // 232
      if(item.isFile){                                                                                           // 233
        // file provided                                                                                         // 234
        return item.file(function(file){                                                                         // 235
          file.relativePath = path + file.name;                                                                  // 236
          items.push(file);                                                                                      // 237
          cb();                                                                                                  // 238
        });                                                                                                      // 239
      }else if(item.isDirectory){                                                                                // 240
        // item is already a directory entry, just assign                                                        // 241
        entry = item;                                                                                            // 242
      }else if(item instanceof File) {                                                                           // 243
        items.push(item);                                                                                        // 244
      }                                                                                                          // 245
      if('function' === typeof item.webkitGetAsEntry){                                                           // 246
        // get entry from file object                                                                            // 247
        entry = item.webkitGetAsEntry();                                                                         // 248
      }                                                                                                          // 249
      if(entry && entry.isDirectory){                                                                            // 250
        // directory provided, process it                                                                        // 251
        return processDirectory(entry, path + entry.name + '/', items, cb);                                      // 252
      }                                                                                                          // 253
      if('function' === typeof item.getAsFile){                                                                  // 254
        // item represents a File object, convert it                                                             // 255
        item = item.getAsFile();                                                                                 // 256
        item.relativePath = path + item.name;                                                                    // 257
        items.push(item);                                                                                        // 258
      }                                                                                                          // 259
      cb(); // indicate processing is done                                                                       // 260
    }                                                                                                            // 261
                                                                                                                 // 262
                                                                                                                 // 263
    /**                                                                                                          // 264
     * cps-style list iteration.                                                                                 // 265
     * invokes all functions in list and waits for their callback to be                                          // 266
     * triggered.                                                                                                // 267
     * @param  {Function[]}   items list of functions expecting callback parameter                               // 268
     * @param  {Function} cb    callback to trigger after the last callback has been invoked                     // 269
     */                                                                                                          // 270
    function processCallbacks(items, cb){                                                                        // 271
      if(!items || items.length === 0){                                                                          // 272
        // empty or no list, invoke callback                                                                     // 273
        return cb();                                                                                             // 274
      }                                                                                                          // 275
      // invoke current function, pass the next part as continuation                                             // 276
      items[0](function(){                                                                                       // 277
        processCallbacks(items.slice(1), cb);                                                                    // 278
      });                                                                                                        // 279
    }                                                                                                            // 280
                                                                                                                 // 281
    /**                                                                                                          // 282
     * recursively traverse directory and collect files to upload                                                // 283
     * @param  {Object}   directory directory to process                                                         // 284
     * @param  {string}   path      current path                                                                 // 285
     * @param  {File[]}   items     target list of items                                                         // 286
     * @param  {Function} cb        callback invoked after traversing directory                                  // 287
     */                                                                                                          // 288
    function processDirectory (directory, path, items, cb) {                                                     // 289
      var dirReader = directory.createReader();                                                                  // 290
      dirReader.readEntries(function(entries){                                                                   // 291
        if(!entries.length){                                                                                     // 292
          // empty directory, skip                                                                               // 293
          return cb();                                                                                           // 294
        }                                                                                                        // 295
        // process all conversion callbacks, finally invoke own one                                              // 296
        processCallbacks(                                                                                        // 297
          entries.map(function(entry){                                                                           // 298
            // bind all properties except for callback                                                           // 299
            return processItem.bind(null, entry, path, items);                                                   // 300
          }),                                                                                                    // 301
          cb                                                                                                     // 302
        );                                                                                                       // 303
      });                                                                                                        // 304
    }                                                                                                            // 305
                                                                                                                 // 306
    /**                                                                                                          // 307
     * process items to extract files to be uploaded                                                             // 308
     * @param  {File[]} items items to process                                                                   // 309
     * @param  {Event} event event that led to upload                                                            // 310
     */                                                                                                          // 311
    function loadFiles(items, event) {                                                                           // 312
      if(!items.length){                                                                                         // 313
        return; // nothing to do                                                                                 // 314
      }                                                                                                          // 315
      $.fire('beforeAdd');                                                                                       // 316
      var files = [];                                                                                            // 317
      processCallbacks(                                                                                          // 318
          Array.prototype.map.call(items, function(item){                                                        // 319
            // bind all properties except for callback                                                           // 320
            return processItem.bind(null, item, "", files);                                                      // 321
          }),                                                                                                    // 322
          function(){                                                                                            // 323
            if(files.length){                                                                                    // 324
              // at least one file found                                                                         // 325
              appendFilesFromFileList(files, event);                                                             // 326
            }                                                                                                    // 327
          }                                                                                                      // 328
      );                                                                                                         // 329
    };                                                                                                           // 330
                                                                                                                 // 331
    var appendFilesFromFileList = function(fileList, event){                                                     // 332
      // check for uploading too many files                                                                      // 333
      var errorCount = 0;                                                                                        // 334
      var o = $.getOpt(['maxFiles', 'minFileSize', 'maxFileSize', 'maxFilesErrorCallback', 'minFileSizeErrorCallback', 'maxFileSizeErrorCallback', 'fileType', 'fileTypeErrorCallback']);
      if (typeof(o.maxFiles)!=='undefined' && o.maxFiles<(fileList.length+$.files.length)) {                     // 336
        // if single-file upload, file is already added, and trying to add 1 new file, simply replace the already-added file
        if (o.maxFiles===1 && $.files.length===1 && fileList.length===1) {                                       // 338
          $.removeFile($.files[0]);                                                                              // 339
        } else {                                                                                                 // 340
          o.maxFilesErrorCallback(fileList, errorCount++);                                                       // 341
          return false;                                                                                          // 342
        }                                                                                                        // 343
      }                                                                                                          // 344
      var files = [], filesSkipped = [], remaining = fileList.length;                                            // 345
      var decreaseReamining = function(){                                                                        // 346
        if(!--remaining){                                                                                        // 347
          // all files processed, trigger event                                                                  // 348
          if(!files.length && !filesSkipped.length){                                                             // 349
            // no succeeded files, just skip                                                                     // 350
            return;                                                                                              // 351
          }                                                                                                      // 352
          window.setTimeout(function(){                                                                          // 353
            $.fire('filesAdded', files, filesSkipped);                                                           // 354
          },0);                                                                                                  // 355
        }                                                                                                        // 356
      };                                                                                                         // 357
      $h.each(fileList, function(file){                                                                          // 358
        var fileName = file.name;                                                                                // 359
        if(o.fileType.length > 0){                                                                               // 360
          var fileTypeFound = false;                                                                             // 361
          for(var index in o.fileType){                                                                          // 362
            var extension = '.' + o.fileType[index];                                                             // 363
            if(fileName.indexOf(extension, fileName.length - extension.length) !== -1){                          // 364
              fileTypeFound = true;                                                                              // 365
              break;                                                                                             // 366
            }                                                                                                    // 367
          }                                                                                                      // 368
          if (!fileTypeFound) {                                                                                  // 369
            o.fileTypeErrorCallback(file, errorCount++);                                                         // 370
            return false;                                                                                        // 371
          }                                                                                                      // 372
        }                                                                                                        // 373
                                                                                                                 // 374
        if (typeof(o.minFileSize)!=='undefined' && file.size<o.minFileSize) {                                    // 375
          o.minFileSizeErrorCallback(file, errorCount++);                                                        // 376
          return false;                                                                                          // 377
        }                                                                                                        // 378
        if (typeof(o.maxFileSize)!=='undefined' && file.size>o.maxFileSize) {                                    // 379
          o.maxFileSizeErrorCallback(file, errorCount++);                                                        // 380
          return false;                                                                                          // 381
        }                                                                                                        // 382
                                                                                                                 // 383
        function addFile(uniqueIdentifier){                                                                      // 384
          if (!$.getFromUniqueIdentifier(uniqueIdentifier)) {(function(){                                        // 385
            file.uniqueIdentifier = uniqueIdentifier;                                                            // 386
            var f = new ResumableFile($, file, uniqueIdentifier);                                                // 387
            $.files.push(f);                                                                                     // 388
            files.push(f);                                                                                       // 389
            f.container = (typeof event != 'undefined' ? event.srcElement : null);                               // 390
            window.setTimeout(function(){                                                                        // 391
              $.fire('fileAdded', f, event)                                                                      // 392
            },0);                                                                                                // 393
          })()} else {                                                                                           // 394
            filesSkipped.push(file);                                                                             // 395
          };                                                                                                     // 396
          decreaseReamining();                                                                                   // 397
        }                                                                                                        // 398
        // directories have size == 0                                                                            // 399
        var uniqueIdentifier = $h.generateUniqueIdentifier(file, event);                                         // 400
        if(uniqueIdentifier && typeof uniqueIdentifier.then === 'function'){                                     // 401
          // Promise or Promise-like object provided as unique identifier                                        // 402
          uniqueIdentifier                                                                                       // 403
          .then(                                                                                                 // 404
            function(uniqueIdentifier){                                                                          // 405
              // unique identifier generation succeeded                                                          // 406
              addFile(uniqueIdentifier);                                                                         // 407
            },                                                                                                   // 408
           function(){                                                                                           // 409
              // unique identifier generation failed                                                             // 410
              // skip further processing, only decrease file count                                               // 411
              decreaseReamining();                                                                               // 412
            }                                                                                                    // 413
          );                                                                                                     // 414
        }else{                                                                                                   // 415
          // non-Promise provided as unique identifier, process synchronously                                    // 416
          addFile(uniqueIdentifier);                                                                             // 417
        }                                                                                                        // 418
      });                                                                                                        // 419
    };                                                                                                           // 420
                                                                                                                 // 421
    // INTERNAL OBJECT TYPES                                                                                     // 422
    function ResumableFile(resumableObj, file, uniqueIdentifier){                                                // 423
      var $ = this;                                                                                              // 424
      $.opts = {};                                                                                               // 425
      $.getOpt = resumableObj.getOpt;                                                                            // 426
      $._prevProgress = 0;                                                                                       // 427
      $.resumableObj = resumableObj;                                                                             // 428
      $.file = file;                                                                                             // 429
      $.fileName = file.fileName||file.name; // Some confusion in different versions of Firefox                  // 430
      $.size = file.size;                                                                                        // 431
      $.relativePath = file.relativePath || file.webkitRelativePath || $.fileName;                               // 432
      $.uniqueIdentifier = uniqueIdentifier;                                                                     // 433
      $._pause = false;                                                                                          // 434
      $.container = '';                                                                                          // 435
      var _error = uniqueIdentifier !== undefined;                                                               // 436
                                                                                                                 // 437
      // Callback when something happens within the chunk                                                        // 438
      var chunkEvent = function(event, message){                                                                 // 439
        // event can be 'progress', 'success', 'error' or 'retry'                                                // 440
        switch(event){                                                                                           // 441
        case 'progress':                                                                                         // 442
          $.resumableObj.fire('fileProgress', $);                                                                // 443
          break;                                                                                                 // 444
        case 'error':                                                                                            // 445
          $.abort();                                                                                             // 446
          _error = true;                                                                                         // 447
          $.chunks = [];                                                                                         // 448
          $.resumableObj.fire('fileError', $, message);                                                          // 449
          break;                                                                                                 // 450
        case 'success':                                                                                          // 451
          if(_error) return;                                                                                     // 452
          $.resumableObj.fire('fileProgress', $); // it's at least progress                                      // 453
          if($.isComplete()) {                                                                                   // 454
            $.resumableObj.fire('fileSuccess', $, message);                                                      // 455
          }                                                                                                      // 456
          break;                                                                                                 // 457
        case 'retry':                                                                                            // 458
          $.resumableObj.fire('fileRetry', $);                                                                   // 459
          break;                                                                                                 // 460
        }                                                                                                        // 461
      };                                                                                                         // 462
                                                                                                                 // 463
      // Main code to set up a file object with chunks,                                                          // 464
      // packaged to be able to handle retries if needed.                                                        // 465
      $.chunks = [];                                                                                             // 466
      $.abort = function(){                                                                                      // 467
        // Stop current uploads                                                                                  // 468
        var abortCount = 0;                                                                                      // 469
        $h.each($.chunks, function(c){                                                                           // 470
          if(c.status()=='uploading') {                                                                          // 471
            c.abort();                                                                                           // 472
            abortCount++;                                                                                        // 473
          }                                                                                                      // 474
        });                                                                                                      // 475
        if(abortCount>0) $.resumableObj.fire('fileProgress', $);                                                 // 476
      };                                                                                                         // 477
      $.cancel = function(){                                                                                     // 478
        // Reset this file to be void                                                                            // 479
        var _chunks = $.chunks;                                                                                  // 480
        $.chunks = [];                                                                                           // 481
        // Stop current uploads                                                                                  // 482
        $h.each(_chunks, function(c){                                                                            // 483
          if(c.status()=='uploading')  {                                                                         // 484
            c.abort();                                                                                           // 485
            $.resumableObj.uploadNextChunk();                                                                    // 486
          }                                                                                                      // 487
        });                                                                                                      // 488
        $.resumableObj.removeFile($);                                                                            // 489
        $.resumableObj.fire('fileProgress', $);                                                                  // 490
      };                                                                                                         // 491
      $.retry = function(){                                                                                      // 492
        $.bootstrap();                                                                                           // 493
        var firedRetry = false;                                                                                  // 494
        $.resumableObj.on('chunkingComplete', function(){                                                        // 495
          if(!firedRetry) $.resumableObj.upload();                                                               // 496
          firedRetry = true;                                                                                     // 497
        });                                                                                                      // 498
      };                                                                                                         // 499
      $.bootstrap = function(){                                                                                  // 500
        $.abort();                                                                                               // 501
        _error = false;                                                                                          // 502
        // Rebuild stack of chunks from file                                                                     // 503
        $.chunks = [];                                                                                           // 504
        $._prevProgress = 0;                                                                                     // 505
        var round = $.getOpt('forceChunkSize') ? Math.ceil : Math.floor;                                         // 506
        var maxOffset = Math.max(round($.file.size/$.getOpt('chunkSize')),1);                                    // 507
        for (var offset=0; offset<maxOffset; offset++) {(function(offset){                                       // 508
            window.setTimeout(function(){                                                                        // 509
                $.chunks.push(new ResumableChunk($.resumableObj, $, offset, chunkEvent));                        // 510
                $.resumableObj.fire('chunkingProgress',$,offset/maxOffset);                                      // 511
            },0);                                                                                                // 512
        })(offset)}                                                                                              // 513
        window.setTimeout(function(){                                                                            // 514
            $.resumableObj.fire('chunkingComplete',$);                                                           // 515
        },0);                                                                                                    // 516
      };                                                                                                         // 517
      $.progress = function(){                                                                                   // 518
        if(_error) return(1);                                                                                    // 519
        // Sum up progress across everything                                                                     // 520
        var ret = 0;                                                                                             // 521
        var error = false;                                                                                       // 522
        $h.each($.chunks, function(c){                                                                           // 523
          if(c.status()=='error') error = true;                                                                  // 524
          ret += c.progress(true); // get chunk progress relative to entire file                                 // 525
        });                                                                                                      // 526
        ret = (error ? 1 : (ret>0.99999 ? 1 : ret));                                                             // 527
        ret = Math.max($._prevProgress, ret); // We don't want to lose percentages when an upload is paused      // 528
        $._prevProgress = ret;                                                                                   // 529
        return(ret);                                                                                             // 530
      };                                                                                                         // 531
      $.isUploading = function(){                                                                                // 532
        var uploading = false;                                                                                   // 533
        $h.each($.chunks, function(chunk){                                                                       // 534
          if(chunk.status()=='uploading') {                                                                      // 535
            uploading = true;                                                                                    // 536
            return(false);                                                                                       // 537
          }                                                                                                      // 538
        });                                                                                                      // 539
        return(uploading);                                                                                       // 540
      };                                                                                                         // 541
      $.isComplete = function(){                                                                                 // 542
        var outstanding = false;                                                                                 // 543
        $h.each($.chunks, function(chunk){                                                                       // 544
          var status = chunk.status();                                                                           // 545
          if(status=='pending' || status=='uploading' || chunk.preprocessState === 1) {                          // 546
            outstanding = true;                                                                                  // 547
            return(false);                                                                                       // 548
          }                                                                                                      // 549
        });                                                                                                      // 550
        return(!outstanding);                                                                                    // 551
      };                                                                                                         // 552
      $.pause = function(pause){                                                                                 // 553
          if(typeof(pause)==='undefined'){                                                                       // 554
              $._pause = ($._pause ? false : true);                                                              // 555
          }else{                                                                                                 // 556
              $._pause = pause;                                                                                  // 557
          }                                                                                                      // 558
      };                                                                                                         // 559
      $.isPaused = function() {                                                                                  // 560
        return $._pause;                                                                                         // 561
      };                                                                                                         // 562
                                                                                                                 // 563
                                                                                                                 // 564
      // Bootstrap and return                                                                                    // 565
      $.resumableObj.fire('chunkingStart', $);                                                                   // 566
      $.bootstrap();                                                                                             // 567
      return(this);                                                                                              // 568
    }                                                                                                            // 569
                                                                                                                 // 570
                                                                                                                 // 571
    function ResumableChunk(resumableObj, fileObj, offset, callback){                                            // 572
      var $ = this;                                                                                              // 573
      $.opts = {};                                                                                               // 574
      $.getOpt = resumableObj.getOpt;                                                                            // 575
      $.resumableObj = resumableObj;                                                                             // 576
      $.fileObj = fileObj;                                                                                       // 577
      $.fileObjSize = fileObj.size;                                                                              // 578
      $.fileObjType = fileObj.file.type;                                                                         // 579
      $.offset = offset;                                                                                         // 580
      $.callback = callback;                                                                                     // 581
      $.lastProgressCallback = (new Date);                                                                       // 582
      $.tested = false;                                                                                          // 583
      $.retries = 0;                                                                                             // 584
      $.pendingRetry = false;                                                                                    // 585
      $.preprocessState = 0; // 0 = unprocessed, 1 = processing, 2 = finished                                    // 586
                                                                                                                 // 587
      // Computed properties                                                                                     // 588
      var chunkSize = $.getOpt('chunkSize');                                                                     // 589
      $.loaded = 0;                                                                                              // 590
      $.startByte = $.offset*chunkSize;                                                                          // 591
      $.endByte = Math.min($.fileObjSize, ($.offset+1)*chunkSize);                                               // 592
      if ($.fileObjSize-$.endByte < chunkSize && !$.getOpt('forceChunkSize')) {                                  // 593
        // The last chunk will be bigger than the chunk size, but less than 2*chunkSize                          // 594
        $.endByte = $.fileObjSize;                                                                               // 595
      }                                                                                                          // 596
      $.xhr = null;                                                                                              // 597
                                                                                                                 // 598
      // test() makes a GET request without any data to see if the chunk has already been uploaded in a previous session
      $.test = function(){                                                                                       // 600
        // Set up request and listen for event                                                                   // 601
        $.xhr = new XMLHttpRequest();                                                                            // 602
                                                                                                                 // 603
        var testHandler = function(e){                                                                           // 604
          $.tested = true;                                                                                       // 605
          var status = $.status();                                                                               // 606
          if(status=='success') {                                                                                // 607
            $.callback(status, $.message());                                                                     // 608
            $.resumableObj.uploadNextChunk();                                                                    // 609
          } else {                                                                                               // 610
            $.send();                                                                                            // 611
          }                                                                                                      // 612
        };                                                                                                       // 613
        $.xhr.addEventListener('load', testHandler, false);                                                      // 614
        $.xhr.addEventListener('error', testHandler, false);                                                     // 615
        $.xhr.addEventListener('timeout', testHandler, false);                                                   // 616
                                                                                                                 // 617
        // Add data from the query options                                                                       // 618
        var params = [];                                                                                         // 619
        var parameterNamespace = $.getOpt('parameterNamespace');                                                 // 620
        var customQuery = $.getOpt('query');                                                                     // 621
        if(typeof customQuery == 'function') customQuery = customQuery($.fileObj, $);                            // 622
        $h.each(customQuery, function(k,v){                                                                      // 623
          params.push([encodeURIComponent(parameterNamespace+k), encodeURIComponent(v)].join('='));              // 624
        });                                                                                                      // 625
        // Add extra data to identify chunk                                                                      // 626
        params = params.concat(                                                                                  // 627
          [                                                                                                      // 628
            // define key/value pairs for additional parameters                                                  // 629
            ['chunkNumberParameterName', $.offset + 1],                                                          // 630
            ['chunkSizeParameterName', $.getOpt('chunkSize')],                                                   // 631
            ['currentChunkSizeParameterName', $.endByte - $.startByte],                                          // 632
            ['totalSizeParameterName', $.fileObjSize],                                                           // 633
            ['typeParameterName', $.fileObjType],                                                                // 634
            ['identifierParameterName', $.fileObj.uniqueIdentifier],                                             // 635
            ['fileNameParameterName', $.fileObj.fileName],                                                       // 636
            ['relativePathParameterName', $.fileObj.relativePath],                                               // 637
            ['totalChunksParameterName', $.fileObj.chunks.length]                                                // 638
          ].filter(function(pair){                                                                               // 639
            // include items that resolve to truthy values                                                       // 640
            // i.e. exclude false, null, undefined and empty strings                                             // 641
            return $.getOpt(pair[0]);                                                                            // 642
          })                                                                                                     // 643
          .map(function(pair){                                                                                   // 644
            // map each key/value pair to its final form                                                         // 645
            return [                                                                                             // 646
              parameterNamespace + $.getOpt(pair[0]),                                                            // 647
              encodeURIComponent(pair[1])                                                                        // 648
            ].join('=');                                                                                         // 649
          })                                                                                                     // 650
        );                                                                                                       // 651
        // Append the relevant chunk and send it                                                                 // 652
        $.xhr.open($.getOpt('testMethod'), $h.getTarget('test', params));                                        // 653
        $.xhr.timeout = $.getOpt('xhrTimeout');                                                                  // 654
        $.xhr.withCredentials = $.getOpt('withCredentials');                                                     // 655
        // Add data from header options                                                                          // 656
        var customHeaders = $.getOpt('headers');                                                                 // 657
        if(typeof customHeaders === 'function') {                                                                // 658
          customHeaders = customHeaders($.fileObj, $);                                                           // 659
        }                                                                                                        // 660
        $h.each(customHeaders, function(k,v) {                                                                   // 661
          $.xhr.setRequestHeader(k, v);                                                                          // 662
        });                                                                                                      // 663
        $.xhr.send(null);                                                                                        // 664
      };                                                                                                         // 665
                                                                                                                 // 666
      $.preprocessFinished = function(){                                                                         // 667
        $.preprocessState = 2;                                                                                   // 668
        $.send();                                                                                                // 669
      };                                                                                                         // 670
                                                                                                                 // 671
      // send() uploads the actual data in a POST call                                                           // 672
      $.send = function(){                                                                                       // 673
        var preprocess = $.getOpt('preprocess');                                                                 // 674
        if(typeof preprocess === 'function') {                                                                   // 675
          switch($.preprocessState) {                                                                            // 676
          case 0: $.preprocessState = 1; preprocess($); return;                                                  // 677
          case 1: return;                                                                                        // 678
          case 2: break;                                                                                         // 679
          }                                                                                                      // 680
        }                                                                                                        // 681
        if($.getOpt('testChunks') && !$.tested) {                                                                // 682
          $.test();                                                                                              // 683
          return;                                                                                                // 684
        }                                                                                                        // 685
                                                                                                                 // 686
        // Set up request and listen for event                                                                   // 687
        $.xhr = new XMLHttpRequest();                                                                            // 688
                                                                                                                 // 689
        // Progress                                                                                              // 690
        $.xhr.upload.addEventListener('progress', function(e){                                                   // 691
          if( (new Date) - $.lastProgressCallback > $.getOpt('throttleProgressCallbacks') * 1000 ) {             // 692
            $.callback('progress');                                                                              // 693
            $.lastProgressCallback = (new Date);                                                                 // 694
          }                                                                                                      // 695
          $.loaded=e.loaded||0;                                                                                  // 696
        }, false);                                                                                               // 697
        $.loaded = 0;                                                                                            // 698
        $.pendingRetry = false;                                                                                  // 699
        $.callback('progress');                                                                                  // 700
                                                                                                                 // 701
        // Done (either done, failed or retry)                                                                   // 702
        var doneHandler = function(e){                                                                           // 703
          var status = $.status();                                                                               // 704
          if(status=='success'||status=='error') {                                                               // 705
            $.callback(status, $.message());                                                                     // 706
            $.resumableObj.uploadNextChunk();                                                                    // 707
          } else {                                                                                               // 708
            $.callback('retry', $.message());                                                                    // 709
            $.abort();                                                                                           // 710
            $.retries++;                                                                                         // 711
            var retryInterval = $.getOpt('chunkRetryInterval');                                                  // 712
            if(retryInterval !== undefined) {                                                                    // 713
              $.pendingRetry = true;                                                                             // 714
              setTimeout($.send, retryInterval);                                                                 // 715
            } else {                                                                                             // 716
              $.send();                                                                                          // 717
            }                                                                                                    // 718
          }                                                                                                      // 719
        };                                                                                                       // 720
        $.xhr.addEventListener('load', doneHandler, false);                                                      // 721
        $.xhr.addEventListener('error', doneHandler, false);                                                     // 722
        $.xhr.addEventListener('timeout', doneHandler, false);                                                   // 723
                                                                                                                 // 724
        // Set up the basic query data from Resumable                                                            // 725
        var query = [                                                                                            // 726
          ['chunkNumberParameterName', $.offset + 1],                                                            // 727
          ['chunkSizeParameterName', $.getOpt('chunkSize')],                                                     // 728
          ['currentChunkSizeParameterName', $.endByte - $.startByte],                                            // 729
          ['totalSizeParameterName', $.fileObjSize],                                                             // 730
          ['typeParameterName', $.fileObjType],                                                                  // 731
          ['identifierParameterName', $.fileObj.uniqueIdentifier],                                               // 732
          ['fileNameParameterName', $.fileObj.fileName],                                                         // 733
          ['relativePathParameterName', $.fileObj.relativePath],                                                 // 734
          ['totalChunksParameterName', $.fileObj.chunks.length],                                                 // 735
        ].filter(function(pair){                                                                                 // 736
          // include items that resolve to truthy values                                                         // 737
          // i.e. exclude false, null, undefined and empty strings                                               // 738
          return $.getOpt(pair[0]);                                                                              // 739
        })                                                                                                       // 740
        .reduce(function(query, pair){                                                                           // 741
          // assign query key/value                                                                              // 742
          query[$.getOpt(pair[0])] = pair[1];                                                                    // 743
          return query;                                                                                          // 744
        }, {});                                                                                                  // 745
        // Mix in custom data                                                                                    // 746
        var customQuery = $.getOpt('query');                                                                     // 747
        if(typeof customQuery == 'function') customQuery = customQuery($.fileObj, $);                            // 748
        $h.each(customQuery, function(k,v){                                                                      // 749
          query[k] = v;                                                                                          // 750
        });                                                                                                      // 751
                                                                                                                 // 752
        var func = ($.fileObj.file.slice ? 'slice' : ($.fileObj.file.mozSlice ? 'mozSlice' : ($.fileObj.file.webkitSlice ? 'webkitSlice' : 'slice')));
        var bytes = $.fileObj.file[func]($.startByte, $.endByte);                                                // 754
        var data = null;                                                                                         // 755
        var params = [];                                                                                         // 756
                                                                                                                 // 757
        var parameterNamespace = $.getOpt('parameterNamespace');                                                 // 758
        if ($.getOpt('method') === 'octet') {                                                                    // 759
          // Add data from the query options                                                                     // 760
          data = bytes;                                                                                          // 761
          $h.each(query, function (k, v) {                                                                       // 762
            params.push([encodeURIComponent(parameterNamespace + k), encodeURIComponent(v)].join('='));          // 763
          });                                                                                                    // 764
        } else {                                                                                                 // 765
          // Add data from the query options                                                                     // 766
          data = new FormData();                                                                                 // 767
          $h.each(query, function (k, v) {                                                                       // 768
            data.append(parameterNamespace + k, v);                                                              // 769
            params.push([encodeURIComponent(parameterNamespace + k), encodeURIComponent(v)].join('='));          // 770
          });                                                                                                    // 771
          data.append(parameterNamespace + $.getOpt('fileParameterName'), bytes, $.fileObj.fileName);            // 772
        }                                                                                                        // 773
                                                                                                                 // 774
        var target = $h.getTarget('upload', params);                                                             // 775
        var method = $.getOpt('uploadMethod');                                                                   // 776
                                                                                                                 // 777
        $.xhr.open(method, target);                                                                              // 778
        if ($.getOpt('method') === 'octet') {                                                                    // 779
          $.xhr.setRequestHeader('Content-Type', 'application/octet-stream');                                    // 780
        }                                                                                                        // 781
        $.xhr.timeout = $.getOpt('xhrTimeout');                                                                  // 782
        $.xhr.withCredentials = $.getOpt('withCredentials');                                                     // 783
        // Add data from header options                                                                          // 784
        var customHeaders = $.getOpt('headers');                                                                 // 785
        if(typeof customHeaders === 'function') {                                                                // 786
          customHeaders = customHeaders($.fileObj, $);                                                           // 787
        }                                                                                                        // 788
                                                                                                                 // 789
        $h.each(customHeaders, function(k,v) {                                                                   // 790
          $.xhr.setRequestHeader(k, v);                                                                          // 791
        });                                                                                                      // 792
                                                                                                                 // 793
        $.xhr.send(data);                                                                                        // 794
      };                                                                                                         // 795
      $.abort = function(){                                                                                      // 796
        // Abort and reset                                                                                       // 797
        if($.xhr) $.xhr.abort();                                                                                 // 798
        $.xhr = null;                                                                                            // 799
      };                                                                                                         // 800
      $.status = function(){                                                                                     // 801
        // Returns: 'pending', 'uploading', 'success', 'error'                                                   // 802
        if($.pendingRetry) {                                                                                     // 803
          // if pending retry then that's effectively the same as actively uploading,                            // 804
          // there might just be a slight delay before the retry starts                                          // 805
          return('uploading');                                                                                   // 806
        } else if(!$.xhr) {                                                                                      // 807
          return('pending');                                                                                     // 808
        } else if($.xhr.readyState<4) {                                                                          // 809
          // Status is really 'OPENED', 'HEADERS_RECEIVED' or 'LOADING' - meaning that stuff is happening        // 810
          return('uploading');                                                                                   // 811
        } else {                                                                                                 // 812
          if($.xhr.status == 200 || $.xhr.status == 201) {                                                       // 813
            // HTTP 200, 201 (created)                                                                           // 814
            return('success');                                                                                   // 815
          } else if($h.contains($.getOpt('permanentErrors'), $.xhr.status) || $.retries >= $.getOpt('maxChunkRetries')) {
            // HTTP 415/500/501, permanent error                                                                 // 817
            return('error');                                                                                     // 818
          } else {                                                                                               // 819
            // this should never happen, but we'll reset and queue a retry                                       // 820
            // a likely case for this would be 503 service unavailable                                           // 821
            $.abort();                                                                                           // 822
            return('pending');                                                                                   // 823
          }                                                                                                      // 824
        }                                                                                                        // 825
      };                                                                                                         // 826
      $.message = function(){                                                                                    // 827
        return($.xhr ? $.xhr.responseText : '');                                                                 // 828
      };                                                                                                         // 829
      $.progress = function(relative){                                                                           // 830
        if(typeof(relative)==='undefined') relative = false;                                                     // 831
        var factor = (relative ? ($.endByte-$.startByte)/$.fileObjSize : 1);                                     // 832
        if($.pendingRetry) return(0);                                                                            // 833
        if(!$.xhr || !$.xhr.status) factor*=.95;                                                                 // 834
        var s = $.status();                                                                                      // 835
        switch(s){                                                                                               // 836
        case 'success':                                                                                          // 837
        case 'error':                                                                                            // 838
          return(1*factor);                                                                                      // 839
        case 'pending':                                                                                          // 840
          return(0*factor);                                                                                      // 841
        default:                                                                                                 // 842
          return($.loaded/($.endByte-$.startByte)*factor);                                                       // 843
        }                                                                                                        // 844
      };                                                                                                         // 845
      return(this);                                                                                              // 846
    }                                                                                                            // 847
                                                                                                                 // 848
    // QUEUE                                                                                                     // 849
    $.uploadNextChunk = function(){                                                                              // 850
      var found = false;                                                                                         // 851
                                                                                                                 // 852
      // In some cases (such as videos) it's really handy to upload the first                                    // 853
      // and last chunk of a file quickly; this let's the server check the file's                                // 854
      // metadata and determine if there's even a point in continuing.                                           // 855
      if ($.getOpt('prioritizeFirstAndLastChunk')) {                                                             // 856
        $h.each($.files, function(file){                                                                         // 857
          if(file.chunks.length && file.chunks[0].status()=='pending' && file.chunks[0].preprocessState === 0) {
            file.chunks[0].send();                                                                               // 859
            found = true;                                                                                        // 860
            return(false);                                                                                       // 861
          }                                                                                                      // 862
          if(file.chunks.length>1 && file.chunks[file.chunks.length-1].status()=='pending' && file.chunks[file.chunks.length-1].preprocessState === 0) {
            file.chunks[file.chunks.length-1].send();                                                            // 864
            found = true;                                                                                        // 865
            return(false);                                                                                       // 866
          }                                                                                                      // 867
        });                                                                                                      // 868
        if(found) return(true);                                                                                  // 869
      }                                                                                                          // 870
                                                                                                                 // 871
      // Now, simply look for the next, best thing to upload                                                     // 872
      $h.each($.files, function(file){                                                                           // 873
        if(file.isPaused()===false){                                                                             // 874
         $h.each(file.chunks, function(chunk){                                                                   // 875
           if(chunk.status()=='pending' && chunk.preprocessState === 0) {                                        // 876
             chunk.send();                                                                                       // 877
             found = true;                                                                                       // 878
             return(false);                                                                                      // 879
           }                                                                                                     // 880
          });                                                                                                    // 881
        }                                                                                                        // 882
        if(found) return(false);                                                                                 // 883
      });                                                                                                        // 884
      if(found) return(true);                                                                                    // 885
                                                                                                                 // 886
      // The are no more outstanding chunks to upload, check is everything is done                               // 887
      var outstanding = false;                                                                                   // 888
      $h.each($.files, function(file){                                                                           // 889
        if(!file.isComplete()) {                                                                                 // 890
          outstanding = true;                                                                                    // 891
          return(false);                                                                                         // 892
        }                                                                                                        // 893
      });                                                                                                        // 894
      if(!outstanding) {                                                                                         // 895
        // All chunks have been uploaded, complete                                                               // 896
        $.fire('complete');                                                                                      // 897
      }                                                                                                          // 898
      return(false);                                                                                             // 899
    };                                                                                                           // 900
                                                                                                                 // 901
                                                                                                                 // 902
    // PUBLIC METHODS FOR RESUMABLE.JS                                                                           // 903
    $.assignBrowse = function(domNodes, isDirectory){                                                            // 904
      if(typeof(domNodes.length)=='undefined') domNodes = [domNodes];                                            // 905
                                                                                                                 // 906
      $h.each(domNodes, function(domNode) {                                                                      // 907
        var input;                                                                                               // 908
        if(domNode.tagName==='INPUT' && domNode.type==='file'){                                                  // 909
          input = domNode;                                                                                       // 910
        } else {                                                                                                 // 911
          input = document.createElement('input');                                                               // 912
          input.setAttribute('type', 'file');                                                                    // 913
          input.style.display = 'none';                                                                          // 914
          domNode.addEventListener('click', function(){                                                          // 915
            input.style.opacity = 0;                                                                             // 916
            input.style.display='block';                                                                         // 917
            input.focus();                                                                                       // 918
            input.click();                                                                                       // 919
            input.style.display='none';                                                                          // 920
          }, false);                                                                                             // 921
          domNode.appendChild(input);                                                                            // 922
        }                                                                                                        // 923
        var maxFiles = $.getOpt('maxFiles');                                                                     // 924
        if (typeof(maxFiles)==='undefined'||maxFiles!=1){                                                        // 925
          input.setAttribute('multiple', 'multiple');                                                            // 926
        } else {                                                                                                 // 927
          input.removeAttribute('multiple');                                                                     // 928
        }                                                                                                        // 929
        if(isDirectory){                                                                                         // 930
          input.setAttribute('webkitdirectory', 'webkitdirectory');                                              // 931
        } else {                                                                                                 // 932
          input.removeAttribute('webkitdirectory');                                                              // 933
        }                                                                                                        // 934
        // When new files are added, simply append them to the overall list                                      // 935
        input.addEventListener('change', function(e){                                                            // 936
          appendFilesFromFileList(e.target.files,e);                                                             // 937
          var clearInput = $.getOpt('clearInput');                                                               // 938
          if (clearInput) {                                                                                      // 939
            e.target.value = '';                                                                                 // 940
          }                                                                                                      // 941
        }, false);                                                                                               // 942
      });                                                                                                        // 943
    };                                                                                                           // 944
    $.assignDrop = function(domNodes){                                                                           // 945
      if(typeof(domNodes.length)=='undefined') domNodes = [domNodes];                                            // 946
                                                                                                                 // 947
      $h.each(domNodes, function(domNode) {                                                                      // 948
        domNode.addEventListener('dragover', preventDefault, false);                                             // 949
        domNode.addEventListener('dragenter', preventDefault, false);                                            // 950
        domNode.addEventListener('drop', onDrop, false);                                                         // 951
      });                                                                                                        // 952
    };                                                                                                           // 953
    $.unAssignDrop = function(domNodes) {                                                                        // 954
      if (typeof(domNodes.length) == 'undefined') domNodes = [domNodes];                                         // 955
                                                                                                                 // 956
      $h.each(domNodes, function(domNode) {                                                                      // 957
        domNode.removeEventListener('dragover', preventDefault);                                                 // 958
        domNode.removeEventListener('dragenter', preventDefault);                                                // 959
        domNode.removeEventListener('drop', onDrop);                                                             // 960
      });                                                                                                        // 961
    };                                                                                                           // 962
    $.isUploading = function(){                                                                                  // 963
      var uploading = false;                                                                                     // 964
      $h.each($.files, function(file){                                                                           // 965
        if (file.isUploading()) {                                                                                // 966
          uploading = true;                                                                                      // 967
          return(false);                                                                                         // 968
        }                                                                                                        // 969
      });                                                                                                        // 970
      return(uploading);                                                                                         // 971
    };                                                                                                           // 972
    $.upload = function(){                                                                                       // 973
      // Make sure we don't start too many uploads at once                                                       // 974
      if($.isUploading()) return;                                                                                // 975
      // Kick off the queue                                                                                      // 976
      $.fire('uploadStart');                                                                                     // 977
      for (var num=1; num<=$.getOpt('simultaneousUploads'); num++) {                                             // 978
        $.uploadNextChunk();                                                                                     // 979
      }                                                                                                          // 980
    };                                                                                                           // 981
    $.pause = function(){                                                                                        // 982
      // Resume all chunks currently being uploaded                                                              // 983
      $h.each($.files, function(file){                                                                           // 984
        file.abort();                                                                                            // 985
      });                                                                                                        // 986
      $.fire('pause');                                                                                           // 987
    };                                                                                                           // 988
    $.cancel = function(){                                                                                       // 989
      $.fire('beforeCancel');                                                                                    // 990
      for(var i = $.files.length - 1; i >= 0; i--) {                                                             // 991
        $.files[i].cancel();                                                                                     // 992
      }                                                                                                          // 993
      $.fire('cancel');                                                                                          // 994
    };                                                                                                           // 995
    $.progress = function(){                                                                                     // 996
      var totalDone = 0;                                                                                         // 997
      var totalSize = 0;                                                                                         // 998
      // Resume all chunks currently being uploaded                                                              // 999
      $h.each($.files, function(file){                                                                           // 1000
        totalDone += file.progress()*file.size;                                                                  // 1001
        totalSize += file.size;                                                                                  // 1002
      });                                                                                                        // 1003
      return(totalSize>0 ? totalDone/totalSize : 0);                                                             // 1004
    };                                                                                                           // 1005
    $.addFile = function(file, event){                                                                           // 1006
      appendFilesFromFileList([file], event);                                                                    // 1007
    };                                                                                                           // 1008
    $.removeFile = function(file){                                                                               // 1009
      for(var i = $.files.length - 1; i >= 0; i--) {                                                             // 1010
        if($.files[i] === file) {                                                                                // 1011
          $.files.splice(i, 1);                                                                                  // 1012
        }                                                                                                        // 1013
      }                                                                                                          // 1014
    };                                                                                                           // 1015
    $.getFromUniqueIdentifier = function(uniqueIdentifier){                                                      // 1016
      var ret = false;                                                                                           // 1017
      $h.each($.files, function(f){                                                                              // 1018
        if(f.uniqueIdentifier==uniqueIdentifier) ret = f;                                                        // 1019
      });                                                                                                        // 1020
      return(ret);                                                                                               // 1021
    };                                                                                                           // 1022
    $.getSize = function(){                                                                                      // 1023
      var totalSize = 0;                                                                                         // 1024
      $h.each($.files, function(file){                                                                           // 1025
        totalSize += file.size;                                                                                  // 1026
      });                                                                                                        // 1027
      return(totalSize);                                                                                         // 1028
    };                                                                                                           // 1029
    $.handleDropEvent = function (e) {                                                                           // 1030
      onDrop(e);                                                                                                 // 1031
    };                                                                                                           // 1032
    $.handleChangeEvent = function (e) {                                                                         // 1033
      appendFilesFromFileList(e.target.files, e);                                                                // 1034
      e.target.value = '';                                                                                       // 1035
    };                                                                                                           // 1036
    $.updateQuery = function(query){                                                                             // 1037
        $.opts.query = query;                                                                                    // 1038
    };                                                                                                           // 1039
                                                                                                                 // 1040
    return(this);                                                                                                // 1041
  };                                                                                                             // 1042
                                                                                                                 // 1043
                                                                                                                 // 1044
  // Node.js-style export for Node and Component                                                                 // 1045
  if (typeof module != 'undefined') {                                                                            // 1046
    module.exports = Resumable;                                                                                  // 1047
  } else if (typeof define === "function" && define.amd) {                                                       // 1048
    // AMD/requirejs: Define the module                                                                          // 1049
    define(function(){                                                                                           // 1050
      return Resumable;                                                                                          // 1051
    });                                                                                                          // 1052
  } else {                                                                                                       // 1053
    // Browser: Expose to window                                                                                 // 1054
    window.Resumable = Resumable;                                                                                // 1055
  }                                                                                                              // 1056
                                                                                                                 // 1057
})();                                                                                                            // 1058
                                                                                                                 // 1059
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/vsivsi_file-collection/src/gridFS.coffee.js                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
share.defaultChunkSize = 2 * 1024 * 1024 - 1024;                                                                 // 7
share.defaultRoot = 'fs';                                                                                        // 8
share.resumableBase = '/_resumable';                                                                             // 10
                                                                                                                 //
share.insert_func = function (file, chunkSize) {                                                                 // 12
  var id, ref, ref1, ref2, ref3, subFile;                                                                        // 13
                                                                                                                 //
  if (file == null) {                                                                                            // 9
    file = {};                                                                                                   // 12
  }                                                                                                              // 11
                                                                                                                 //
  try {                                                                                                          // 13
    id = new Mongo.ObjectID("" + file._id);                                                                      // 14
  } catch (error) {                                                                                              // 13
    id = new Mongo.ObjectID();                                                                                   // 16
  }                                                                                                              // 16
                                                                                                                 //
  subFile = {};                                                                                                  // 17
  subFile._id = id;                                                                                              // 18
  subFile.length = 0;                                                                                            // 19
  subFile.md5 = 'd41d8cd98f00b204e9800998ecf8427e';                                                              // 20
  subFile.uploadDate = new Date();                                                                               // 21
  subFile.chunkSize = chunkSize;                                                                                 // 22
  subFile.filename = (ref = file.filename) != null ? ref : '';                                                   // 23
  subFile.metadata = (ref1 = file.metadata) != null ? ref1 : {};                                                 // 24
  subFile.aliases = (ref2 = file.aliases) != null ? ref2 : [];                                                   // 25
  subFile.contentType = (ref3 = file.contentType) != null ? ref3 : 'application/octet-stream';                   // 26
  return subFile;                                                                                                // 27
};                                                                                                               // 12
                                                                                                                 //
share.reject_file_modifier = function (modifier) {                                                               // 29
  var forbidden, required;                                                                                       // 31
  forbidden = Match.OneOf(Match.ObjectIncluding({                                                                // 31
    _id: Match.Any                                                                                               // 32
  }), Match.ObjectIncluding({                                                                                    // 32
    length: Match.Any                                                                                            // 33
  }), Match.ObjectIncluding({                                                                                    // 33
    chunkSize: Match.Any                                                                                         // 34
  }), Match.ObjectIncluding({                                                                                    // 34
    md5: Match.Any                                                                                               // 35
  }), Match.ObjectIncluding({                                                                                    // 35
    uploadDate: Match.Any                                                                                        // 36
  }));                                                                                                           // 36
  required = Match.OneOf(Match.ObjectIncluding({                                                                 // 39
    _id: Match.Any                                                                                               // 40
  }), Match.ObjectIncluding({                                                                                    // 40
    length: Match.Any                                                                                            // 41
  }), Match.ObjectIncluding({                                                                                    // 41
    chunkSize: Match.Any                                                                                         // 42
  }), Match.ObjectIncluding({                                                                                    // 42
    md5: Match.Any                                                                                               // 43
  }), Match.ObjectIncluding({                                                                                    // 43
    uploadDate: Match.Any                                                                                        // 44
  }), Match.ObjectIncluding({                                                                                    // 44
    metadata: Match.Any                                                                                          // 45
  }), Match.ObjectIncluding({                                                                                    // 45
    aliases: Match.Any                                                                                           // 46
  }), Match.ObjectIncluding({                                                                                    // 46
    filename: Match.Any                                                                                          // 47
  }), Match.ObjectIncluding({                                                                                    // 47
    contentType: Match.Any                                                                                       // 48
  }));                                                                                                           // 48
  return Match.test(modifier, Match.OneOf(Match.ObjectIncluding({                                                // 51
    $set: forbidden                                                                                              // 52
  }), Match.ObjectIncluding({                                                                                    // 52
    $unset: required                                                                                             // 53
  }), Match.ObjectIncluding({                                                                                    // 53
    $inc: forbidden                                                                                              // 54
  }), Match.ObjectIncluding({                                                                                    // 54
    $mul: forbidden                                                                                              // 55
  }), Match.ObjectIncluding({                                                                                    // 55
    $bit: forbidden                                                                                              // 56
  }), Match.ObjectIncluding({                                                                                    // 56
    $min: forbidden                                                                                              // 57
  }), Match.ObjectIncluding({                                                                                    // 57
    $max: forbidden                                                                                              // 58
  }), Match.ObjectIncluding({                                                                                    // 58
    $rename: required                                                                                            // 59
  }), Match.ObjectIncluding({                                                                                    // 59
    $currentDate: forbidden                                                                                      // 60
  }), Match.Where(function (pat) {                                                                               // 60
    return !Match.test(pat, Match.OneOf(Match.ObjectIncluding({                                                  // 62
      $inc: Match.Any                                                                                            // 63
    }), Match.ObjectIncluding({                                                                                  // 63
      $set: Match.Any                                                                                            // 64
    }), Match.ObjectIncluding({                                                                                  // 64
      $unset: Match.Any                                                                                          // 65
    }), Match.ObjectIncluding({                                                                                  // 65
      $addToSet: Match.Any                                                                                       // 66
    }), Match.ObjectIncluding({                                                                                  // 66
      $pop: Match.Any                                                                                            // 67
    }), Match.ObjectIncluding({                                                                                  // 67
      $pullAll: Match.Any                                                                                        // 68
    }), Match.ObjectIncluding({                                                                                  // 68
      $pull: Match.Any                                                                                           // 69
    }), Match.ObjectIncluding({                                                                                  // 69
      $pushAll: Match.Any                                                                                        // 70
    }), Match.ObjectIncluding({                                                                                  // 70
      $push: Match.Any                                                                                           // 71
    }), Match.ObjectIncluding({                                                                                  // 71
      $bit: Match.Any                                                                                            // 72
    })));                                                                                                        // 72
  })));                                                                                                          // 61
};                                                                                                               // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/vsivsi_file-collection/src/resumable_client.coffee.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isClient) {                                                                                           // 7
  if (!Function.prototype.bind) {                                                                                // 10
    Function.prototype.bind = function (oThis) {                                                                 // 11
      var aArgs, fBound, fNOP, fToBind;                                                                          // 12
                                                                                                                 //
      if (typeof this !== "function") {                                                                          // 12
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");             // 14
      }                                                                                                          // 7
                                                                                                                 //
      aArgs = Array.prototype.slice.call(arguments, 1);                                                          // 16
      fToBind = this;                                                                                            // 17
                                                                                                                 //
      fNOP = function () {};                                                                                     // 18
                                                                                                                 //
      fBound = function () {                                                                                     // 19
        var func;                                                                                                // 20
        func = this instanceof fNOP && oThis ? this : oThis;                                                     // 20
        return fToBind.apply(func, aArgs.concat(Array.prototype.slice.call(arguments)));                         // 21
      };                                                                                                         // 19
                                                                                                                 //
      fNOP.prototype = this.prototype;                                                                           // 23
      fBound.prototype = new fNOP();                                                                             // 25
      return fBound;                                                                                             // 26
    };                                                                                                           // 11
  }                                                                                                              // 20
                                                                                                                 //
  share.setup_resumable = function () {                                                                          // 28
    var r, url;                                                                                                  // 29
    url = "" + this.baseURL + share.resumableBase;                                                               // 29
                                                                                                                 //
    if (Meteor.isCordova) {                                                                                      // 30
      url = Meteor.absoluteUrl(url.replace(/^\//, ''));                                                          // 30
    }                                                                                                            // 26
                                                                                                                 //
    r = new Resumable({                                                                                          // 31
      target: url,                                                                                               // 32
      generateUniqueIdentifier: function (file) {                                                                // 33
        return "" + new Mongo.ObjectID();                                                                        // 30
      },                                                                                                         // 32
      fileParameterName: 'file',                                                                                 // 34
      chunkSize: this.chunkSize,                                                                                 // 35
      testChunks: true,                                                                                          // 36
      testMethod: 'HEAD',                                                                                        // 37
      permanentErrors: [204, 404, 415, 500, 501],                                                                // 38
      simultaneousUploads: 3,                                                                                    // 39
      maxFiles: void 0,                                                                                          // 40
      maxFilesErrorCallback: void 0,                                                                             // 41
      prioritizeFirstAndLastChunk: false,                                                                        // 42
      query: void 0,                                                                                             // 43
      headers: {},                                                                                               // 44
      maxChunkRetries: 5,                                                                                        // 45
      withCredentials: true                                                                                      // 46
    });                                                                                                          // 32
                                                                                                                 //
    if (!r.support) {                                                                                            // 48
      console.warn("resumable.js not supported by this Browser, uploads will be disabled");                      // 49
      return this.resumable = null;                                                                              // 48
    } else {                                                                                                     // 48
      return this.resumable = r;                                                                                 // 50
    }                                                                                                            // 51
  };                                                                                                             // 28
}                                                                                                                // 53
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/vsivsi_file-collection/src/gridFS_client.coffee.js                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
                                                                                                                 //
var extend = function (child, parent) {                                                                          // 7
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                              // 7
    if (hasProp.call(parent, key)) child[key] = parent[key];                                                     // 7
  }                                                                                                              // 7
                                                                                                                 //
  function ctor() {                                                                                              // 7
    this.constructor = child;                                                                                    // 7
  }                                                                                                              // 7
                                                                                                                 //
  ctor.prototype = parent.prototype;                                                                             // 7
  child.prototype = new ctor();                                                                                  // 7
  child.__super__ = parent.prototype;                                                                            // 7
  return child;                                                                                                  // 7
},                                                                                                               // 7
    hasProp = {}.hasOwnProperty;                                                                                 // 7
                                                                                                                 //
if (Meteor.isClient) {                                                                                           // 7
  FileCollection = function (superClass) {                                                                       // 9
    extend(FileCollection, superClass);                                                                          // 7
                                                                                                                 //
    function FileCollection(root1, options) {                                                                    // 11
      var ref, ref1;                                                                                             // 12
      this.root = root1 != null ? root1 : share.defaultRoot;                                                     // 11
                                                                                                                 //
      if (options == null) {                                                                                     // 12
        options = {};                                                                                            // 11
      }                                                                                                          // 14
                                                                                                                 //
      if (!(this instanceof FileCollection)) {                                                                   // 12
        return new FileCollection(root, options);                                                                // 13
      }                                                                                                          // 17
                                                                                                                 //
      if (!(this instanceof Mongo.Collection)) {                                                                 // 15
        throw new Meteor.Error('The global definition of Mongo.Collection has changed since the file-collection package was loaded. Please ensure that any packages that redefine Mongo.Collection are loaded before file-collection.');
      }                                                                                                          // 20
                                                                                                                 //
      if (Mongo.Collection !== Mongo.Collection.prototype.constructor) {                                         // 18
        throw new Meteor.Error('The global definition of Mongo.Collection has been patched by another package, and the prototype constructor has been left in an inconsistent state. Please see this link for a workaround: https://github.com/vsivsi/meteor-file-sample-app/issues/2#issuecomment-120780592');
      }                                                                                                          // 23
                                                                                                                 //
      if (_typeof(this.root) === 'object') {                                                                     // 21
        options = this.root;                                                                                     // 22
        this.root = share.defaultRoot;                                                                           // 23
      }                                                                                                          // 27
                                                                                                                 //
      this.base = this.root;                                                                                     // 25
      this.baseURL = (ref = options.baseURL) != null ? ref : "/gridfs/" + this.root;                             // 26
      this.chunkSize = (ref1 = options.chunkSize) != null ? ref1 : share.defaultChunkSize;                       // 27
                                                                                                                 //
      FileCollection.__super__.constructor.call(this, this.root + '.files', {                                    // 28
        idGeneration: 'MONGO'                                                                                    // 28
      });                                                                                                        // 28
                                                                                                                 //
      if (options.resumable) {                                                                                   // 32
        share.setup_resumable.bind(this)();                                                                      // 33
      }                                                                                                          // 36
    }                                                                                                            // 11
                                                                                                                 //
    FileCollection.prototype.insert = function (file, callback) {                                                // 39
      if (callback == null) {                                                                                    // 40
        callback = void 0;                                                                                       // 41
      }                                                                                                          // 42
                                                                                                                 //
      file = share.insert_func(file, this.chunkSize);                                                            // 44
      return FileCollection.__super__.insert.call(this, file, callback);                                         // 44
    };                                                                                                           // 41
                                                                                                                 //
    FileCollection.prototype.localUpdate = function (selector, modifier, options, callback) {                    // 47
      var err;                                                                                                   // 51
                                                                                                                 //
      if (options == null) {                                                                                     // 49
        options = {};                                                                                            // 50
      }                                                                                                          // 51
                                                                                                                 //
      if (callback == null) {                                                                                    // 52
        callback = void 0;                                                                                       // 50
      }                                                                                                          // 54
                                                                                                                 //
      if (callback == null && typeof options === 'function') {                                                   // 51
        callback = options;                                                                                      // 52
        options = {};                                                                                            // 53
      }                                                                                                          // 58
                                                                                                                 //
      if (options.upsert != null) {                                                                              // 55
        err = new Meteor.Error("Update does not support the upsert option");                                     // 56
                                                                                                                 //
        if (callback != null) {                                                                                  // 57
          return callback(err);                                                                                  // 58
        } else {                                                                                                 // 57
          throw err;                                                                                             // 60
        }                                                                                                        // 55
      }                                                                                                          // 66
                                                                                                                 //
      if (share.reject_file_modifier(modifier)) {                                                                // 62
        err = new Meteor.Error("Modifying gridFS read-only document elements is a very bad idea!");              // 63
                                                                                                                 //
        if (callback != null) {                                                                                  // 64
          return callback(err);                                                                                  // 65
        } else {                                                                                                 // 64
          throw err;                                                                                             // 67
        }                                                                                                        // 62
      } else {                                                                                                   // 62
        return this.find().collection.update(selector, modifier, options, callback);                             // 75
      }                                                                                                          // 76
    };                                                                                                           // 50
                                                                                                                 //
    FileCollection.prototype.allow = function () {                                                               // 79
      throw new Meteor.Error("File Collection Allow rules may not be set in client code.");                      // 72
    };                                                                                                           // 71
                                                                                                                 //
    FileCollection.prototype.deny = function () {                                                                // 83
      throw new Meteor.Error("File Collection Deny rules may not be set in client code.");                       // 75
    };                                                                                                           // 74
                                                                                                                 //
    FileCollection.prototype.upsert = function () {                                                              // 87
      throw new Meteor.Error("File Collections do not support 'upsert'");                                        // 78
    };                                                                                                           // 77
                                                                                                                 //
    FileCollection.prototype.update = function () {                                                              // 91
      throw new Meteor.Error("File Collections do not support 'update' on client, use method calls instead");    // 81
    };                                                                                                           // 80
                                                                                                                 //
    FileCollection.prototype.findOneStream = function () {                                                       // 95
      throw new Meteor.Error("File Collections do not support 'findOneStream' in client code.");                 // 84
    };                                                                                                           // 83
                                                                                                                 //
    FileCollection.prototype.upsertStream = function () {                                                        // 99
      throw new Meteor.Error("File Collections do not support 'upsertStream' in client code.");                  // 87
    };                                                                                                           // 86
                                                                                                                 //
    FileCollection.prototype.importFile = function () {                                                          // 103
      throw new Meteor.Error("File Collections do not support 'importFile' in client code.");                    // 90
    };                                                                                                           // 89
                                                                                                                 //
    FileCollection.prototype.exportFile = function () {                                                          // 107
      throw new Meteor.Error("File Collections do not support 'exportFile' in client code.");                    // 93
    };                                                                                                           // 92
                                                                                                                 //
    return FileCollection;                                                                                       // 111
  }(Mongo.Collection);                                                                                           // 113
}                                                                                                                // 114
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['vsivsi:file-collection'] = {}, {
  FileCollection: FileCollection
});

})();
