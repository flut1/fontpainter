/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(293);
	
	__webpack_require__(295);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);
	
	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);
	
	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);
	
	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});
	
	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {fill: __webpack_require__(188)});
	
	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);
	
	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _RobotoBlackWebfont = __webpack_require__(299);
	
	var _RobotoBlackWebfont2 = _interopRequireDefault(_RobotoBlackWebfont);
	
	var _lobster_13Webfont = __webpack_require__(300);
	
	var _lobster_13Webfont2 = _interopRequireDefault(_lobster_13Webfont);
	
	var _AleoRegularWebfont = __webpack_require__(301);
	
	var _AleoRegularWebfont2 = _interopRequireDefault(_AleoRegularWebfont);
	
	__webpack_require__(302);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var examplesContext = __webpack_require__(309);
	
	var examples = examplesContext.keys().sort().map(function (path) {
		return examplesContext(path);
	});
	var mainMenu = document.querySelector('.main-menu');
	var demoWrapper = document.querySelector('.demo-wrapper');
	var demoInput = document.querySelector('#demo-input');
	var updateButton = document.querySelector('#update-button');
	var fontSelect = document.querySelector('#font-select');
	
	var fonts = [{ path: _RobotoBlackWebfont2.default, name: 'Roboto Black' }, { path: _AleoRegularWebfont2.default, name: 'Aleo Regular' }, { path: _lobster_13Webfont2.default, name: 'Lobster' }];
	
	fonts.forEach(function (font) {
		var option = document.createElement('option');
		option.innerHTML = font.name;
		option.value = font.path;
		fontSelect.appendChild(option);
	});
	
	demoInput.addEventListener('input', handleInput);
	fontSelect.addEventListener('change', handleInput);
	updateButton.addEventListener('click', renderDemo);
	
	var activeDemo = null;
	
	var menuItems = examples.map(function (example, index) {
		var menuItem = document.createElement('li');
		mainMenu.appendChild(menuItem);
		menuItem.innerHTML = example.menuName;
		menuItem.addEventListener('click', function () {
			return startExample(index);
		});
		return menuItem;
	});
	
	function startExample(index) {
		menuItems.forEach(function (menuItem, menuItemIndex) {
			menuItem.classList[index === menuItemIndex ? 'add' : 'remove']('is-active');
		});
	
		demoWrapper.innerHTML = examples[index].template;
		demoInput.value = examples[index].defaultText;
		if (activeDemo) {
			activeDemo.dispose();
		}
		activeDemo = new examples[index].Demo();
	
		updateButton.style.display = activeDemo.immediate ? 'none' : 'block';
	
		renderDemo();
	}
	
	function renderDemo() {
		if (activeDemo) {
			activeDemo.render(demoInput.value, fontSelect.value);
		}
	}
	
	function handleInput() {
		if (activeDemo.immediate) {
			renderDemo();
		}
	}
	
	startExample(0);

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a771641ea19cf0f3a27b0b29f867e303.svg";

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "751b1e5e5a1fd2e8367b37a74bb63360.svg";

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "24861539e3f8f41e8ec4a33aef2d2b4e.svg";

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(303);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(308)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(304)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: 'robotoblack';\n  src: url(" + __webpack_require__(305) + ");\n  src: url(" + __webpack_require__(305) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(306) + ") format(\"woff\"), url(" + __webpack_require__(307) + ") format(\"truetype\"), url(" + __webpack_require__(299) + "#robotoblack) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\nbody, html {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #282828;\n  font-family: 'robotoblack', Arial, sans-serif;\n  font-size: 16px; }\n\n.main-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  color: #fefefe;\n  justify-content: center;\n  border-bottom: 2px solid #fff; }\n  .main-menu li {\n    flex: 0 1 auto;\n    padding: 5px;\n    margin: 0;\n    cursor: pointer;\n    background-color: #282828;\n    transition: background-color .2s ease-out, color .2s ease-out; }\n    .main-menu li.is-active {\n      cursor: default;\n      background-color: #fefefe;\n      color: #282828; }\n\n.demo-wrapper {\n  width: 100%;\n  height: 800px;\n  box-sizing: border-box;\n  position: relative;\n  padding-top: 30px; }\n\n.demo-input-wrapper {\n  display: flex;\n  align-items: center;\n  width: 100%; }\n  .demo-input-wrapper > label {\n    flex: 0 1 auto;\n    padding: 0 10px;\n    color: #fff; }\n  .demo-input-wrapper .demo-input {\n    flex: 1 1 auto;\n    height: 2em;\n    padding: 0 10px;\n    font-size: 16px;\n    box-sizing: border-box; }\n  .demo-input-wrapper .font-select {\n    flex: 0 1 auto;\n    font-size: 14px;\n    padding-left: 20px;\n    padding-right: 20px;\n    align-self: stretch; }\n  .demo-input-wrapper .update-button {\n    display: none;\n    flex: 0 1 auto;\n    font-size: 16px;\n    box-sizing: border-box;\n    cursor: pointer;\n    font-weight: bold;\n    border: 4px solid #ff7a1f;\n    color: #ff7a1f;\n    background: #fff;\n    padding-left: 20px;\n    padding-right: 20px;\n    outline: none;\n    align-self: stretch; }\n", ""]);
	
	// exports


/***/ },
/* 304 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3fb7ee3c46a4737ced31105b89e87f0c.eot";

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "901074e1322592fd0b82687d09602c9a.woff";

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c4c42ad89a06874362de0ca8909f101c.ttf";

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./1-simple/index.js": 310,
		"./2-animated-border/index.js": 334,
		"./3-animated-fill/index.js": 338,
		"./4-simple-canvas/index.js": 342,
		"./5-exact-fit/index.js": 346
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 309;


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.template = exports.defaultText = exports.menuName = exports.Demo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(311);
	
	Object.defineProperty(exports, 'template', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_template).default;
		}
	});
	
	var _fontpainter = __webpack_require__(312);
	
	var _fontpainter2 = _interopRequireDefault(_fontpainter);
	
	__webpack_require__(332);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Demo = exports.Demo = function () {
		function Demo() {
			_classCallCheck(this, Demo);
	
			this.immediate = true;
	
			this.container = document.querySelector('.example-simple');
			this.painter = new _fontpainter2.default();
			this.engine = new _fontpainter.RenderEngineSVG();
			this.painter.setEngine(this.engine);
			this.painter.fontSize = 45;
			this.painter.bounds = new _fontpainter.RenderBoundsElementWidth(this.container);
		}
	
		_createClass(Demo, [{
			key: 'render',
			value: function render() {
				var _this = this;
	
				var copy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var fontPath = arguments[1];
	
				this.painter.loadFont(fontPath, _fontpainter.FontParserSVG);
				this.painter.getFont().then(function () {
					_this.painter.paint(copy);
					_this.container.appendChild(_this.engine.svgElement);
				});
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.painter.dispose();
			}
		}]);
	
		return Demo;
	}();
	
	var menuName = exports.menuName = 'Simple SVG';
	
	var defaultText = exports.defaultText = 'The quick brown fox jumps over the lazy dog';

/***/ },
/* 311 */
/***/ function(module, exports) {

	module.exports = "<div class=\"example-simple\">\r\n\r\n</div>\r\n"

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Main exports of this module. Can be imported like so:
	 * ```
	 * import FontPainter, { WrapMode, Glyph } from 'fontpainter';
	 * ```
	 *
	 * @module fontpainter
	 * @preferred
	 */ /** */
	__webpack_require__(313);
	var FontPainter_1 = __webpack_require__(314);
	var GlyphBoundingRect_1 = __webpack_require__(323);
	exports.GlyphBoundingRect = GlyphBoundingRect_1.default;
	var Glyph_1 = __webpack_require__(321);
	exports.Glyph = Glyph_1.default;
	var FontParserSVG_1 = __webpack_require__(320);
	exports.FontParserSVG = FontParserSVG_1.default;
	var WrapMode_1 = __webpack_require__(316);
	exports.WrapMode = WrapMode_1.default;
	var TextAlign_1 = __webpack_require__(326);
	exports.TextAlign = TextAlign_1.default;
	var RenderEngineSVG_1 = __webpack_require__(327);
	exports.RenderEngineSVG = RenderEngineSVG_1.default;
	var RenderEngineCanvas_1 = __webpack_require__(329);
	exports.RenderEngineCanvas = RenderEngineCanvas_1.default;
	var RenderBoundsElementWidth_1 = __webpack_require__(330);
	exports.RenderBoundsElementWidth = RenderBoundsElementWidth_1.default;
	var RenderBoundsFixedWidth_1 = __webpack_require__(331);
	exports.RenderBoundsFixedWidth = RenderBoundsFixedWidth_1.default;
	exports.default = FontPainter_1.default;


/***/ },
/* 313 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {function __assignFn(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s)
	            if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	    }
	    return t;
	}
	function __extendsFn(d, b) {
	    for (var p in b)
	        if (b.hasOwnProperty(p))
	            d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	function __decorateFn(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
	        r = Reflect.decorate(decorators, target, key, desc);
	    else
	        for (var i = decorators.length - 1; i >= 0; i--)
	            if (d = decorators[i])
	                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __metadataFn(k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
	        return Reflect.metadata(k, v);
	}
	function __paramFn(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); };
	}
	function __awaiterFn(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try {
	            step(generator.next(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function rejected(value) { try {
	            step(generator.throw(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	}
	// hook global helpers
	(function (__global) {
	    __global.__assign = (__global && __global.__assign) || Object.assign || __assignFn;
	    __global.__extends = (__global && __global.__extends) || __extendsFn;
	    __global.__decorate = (__global && __global.__decorate) || __decorateFn;
	    __global.__metadata = (__global && __global.__metadata) || __metadataFn;
	    __global.__param = (__global && __global.__param) || __paramFn;
	    __global.__awaiter = (__global && __global.__awaiter) || __awaiterFn;
	})(typeof window !== "undefined" ? window :
	    typeof WorkerGlobalScope !== "undefined" ? self :
	        typeof global !== "undefined" ? global :
	            Function("return this;")());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(315);
	var WrapMode_1 = __webpack_require__(316);
	var seng_disposable_1 = __webpack_require__(317);
	var FontLoader_1 = __webpack_require__(319);
	var FontParserSVG_1 = __webpack_require__(320);
	var TextAlign_1 = __webpack_require__(326);
	var FontPainter = (function (_super) {
	    tslib_1.__extends(FontPainter, _super);
	    function FontPainter() {
	        var _this = _super.call(this) || this;
	        _this.bounds = null;
	        _this.wrapMode = WrapMode_1.default.BREAK_WHITESPACE;
	        _this.align = TextAlign_1.default.NONE;
	        _this.letterSpacing = 0;
	        _this.lineHeight = 1.2;
	        _this.exactFit = false;
	        _this.fontSize = 16;
	        _this._fontPromise = null;
	        _this._engine = null;
	        _this._fontParser = null;
	        _this.fontLoader = new FontLoader_1.default();
	        _this.fontLoader.setDefaultParser('svg', FontParserSVG_1.default);
	        return _this;
	    }
	    FontPainter.prototype.setEngine = function (engine) {
	        this._engine = engine;
	    };
	    FontPainter.prototype.paint = function (copy) {
	        if (this._engine === null) {
	            throw new ReferenceError('Please use setEngine() to set a rendering engine before calling paint()');
	        }
	        this._engine.render(this.getCopyProps(copy.replace(/\s+$/, '')), this._fontParser, this);
	    };
	    FontPainter.prototype.getCopyProps = function (copy) {
	        if (this._fontParser === null) {
	            throw new ReferenceError('Font is undefined or has not yet completed loading');
	        }
	        var parser = this._fontParser;
	        var characters = copy.split('');
	        var charCodes = characters.map(function (glyph) { return glyph.charCodeAt(0); });
	        var glyphs = charCodes.reduce(function (glyphMap, charCode, index) {
	            if (!glyphMap[charCode]) {
	                glyphMap[charCode] = parser.getGlyph(characters[index]);
	            }
	            return glyphMap;
	        }, {});
	        var kernings = charCodes.map(function (charCode, index) {
	            if (index === charCodes.length - 1) {
	                return 0;
	            }
	            return parser.getKerning(charCode, charCodes[index + 1]);
	        });
	        return { copy: copy, characters: characters, charCodes: charCodes, kernings: kernings, glyphs: glyphs };
	    };
	    FontPainter.prototype.setFontParser = function (parser) {
	        this._fontParser = parser;
	        this._fontPromise = Promise.resolve(parser);
	    };
	    FontPainter.prototype.loadFont = function (url, parser) {
	        var _this = this;
	        this._fontPromise = this.fontLoader.load(url, parser).then(function (parser) {
	            _this._fontParser = parser;
	            return parser;
	        });
	        return this._fontPromise;
	    };
	    FontPainter.prototype.getFont = function () {
	        return this._fontPromise;
	    };
	    FontPainter.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	    };
	    return FontPainter;
	}(seng_disposable_1.default));
	exports.default = FontPainter;


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	
	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	
	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	
	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	        return t;
	    };
	
	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };
	
	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };
	
	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };
	
	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };
	
	    __generator = function (thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	        return { next: verb(0), "throw": verb(1), "return": verb(2) };
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [0, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };
	
	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 316 */
/***/ function(module, exports) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var WrapMode;
	(function (WrapMode) {
	    WrapMode[WrapMode["BREAK_WHITESPACE"] = 0] = "BREAK_WHITESPACE";
	    WrapMode[WrapMode["BREAK_WORD"] = 1] = "BREAK_WORD";
	})(WrapMode || (WrapMode = {}));
	exports.default = WrapMode;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Disposable_1 = __webpack_require__(318);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Disposable_1.default;


/***/ },
/* 318 */
/***/ function(module, exports) {

	"use strict";
	var Disposable = (function () {
	    function Disposable() {
	        this._isDisposed = false;
	    }
	    /**
	     * After {@link dispose} has been called, this method returns true.
	     * Use this method to determine whether dispose() should be run again.
	     */
	    Disposable.prototype.isDisposed = function () {
	        return this._isDisposed;
	    };
	    /**
	     * Destruct this class.
	     */
	    Disposable.prototype.dispose = function () {
	        this._isDisposed = true;
	    };
	    return Disposable;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Disposable;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(315);
	/**
	 *
	 * @module lib/utils/FontLoader
	 */ /** */
	var seng_disposable_1 = __webpack_require__(317);
	var FontLoader = (function (_super) {
	    tslib_1.__extends(FontLoader, _super);
	    function FontLoader() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this._defaultParsers = {};
	        _this._files = [];
	        return _this;
	    }
	    FontLoader.prototype.setDefaultParser = function (extension, parser) {
	        this._defaultParsers[extension] = parser;
	    };
	    FontLoader.prototype.load = function (path, _parser) {
	        var pendingFile = this._files.find(function (file) { return file.path === path; });
	        if (pendingFile) {
	            return pendingFile.loading;
	        }
	        var Parser = _parser;
	        if (!_parser) {
	            var parserExtension = Object.keys(this._defaultParsers).find(function (extension) { return (path.indexOf(extension, path.length - extension.length) !== -1); });
	            if (!parserExtension) {
	                throw new Error("No default parser defined for path \"" + path + "\". Please provide a parser");
	            }
	            Parser = this._defaultParsers[parserExtension];
	        }
	        var loading = fetch(path).then(function (response) { return response.text(); }).then(function (text) {
	            return new Parser(text);
	        });
	        this._files.push({
	            path: path,
	            loading: loading
	        });
	        return loading;
	    };
	    return FontLoader;
	}(seng_disposable_1.default));
	exports.default = FontLoader;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Glyph_1 = __webpack_require__(321);
	var svgUtils_1 = __webpack_require__(324);
	var pathUtils_1 = __webpack_require__(322);
	/**
	 * Parses an SVG font file and contains various methods to extract glyph information
	 */
	var FontParserSVG = (function () {
	    /**
	     * Constructs a new SVGFontParser instance and initializes loading
	     * @param rawData The string data from an SVG file
	     */
	    function FontParserSVG(rawData) {
	        this.rawData = rawData;
	        this._domParser = new DOMParser();
	        this._document = this._domParser.parseFromString(rawData, 'application/xml');
	        this._parseFontProperties();
	        this._parseFontKerning();
	    }
	    FontParserSVG.prototype.getGlyph = function (glyph) {
	        var element = this._document.querySelector(getUnicodeSelector(glyph));
	        if (!element) {
	            element = this._missingGlyph;
	        }
	        if (element) {
	            return new Glyph_1.default(pathUtils_1.parsePathData(element.getAttribute('d') || '', true), getXMLIntAttribute(element, 'horiz-adv-x', this.horizAdvX));
	        }
	        // todo: proper warning
	        console.log('GLYPH NOT FOUND :(');
	        return null;
	    };
	    /**
	     * Finds the kerning for the 2 given characters based on the kerningMaps parsed
	     * from the font file.
	     * @param u1 The unicode for the first character
	     * @param u2 The unicode for the succeeding character
	     * @returns {number} The amount of kerning
	     */
	    FontParserSVG.prototype.getKerning = function (u1, u2) {
	        var u1Matches = [];
	        for (var i = 0; i < this._kerningMaps.length; i++) {
	            var kerningMap = this._kerningMaps[i];
	            if ((kerningMap.u1[0] <= u1) && (kerningMap.u1[1] >= u1)) {
	                u1Matches.push(kerningMap);
	            }
	            else if ((kerningMap.u1[0] >= u1) && (kerningMap.u1[1] < u1)) {
	                break;
	            }
	        }
	        for (var i = 0; i < u1Matches.length; i++) {
	            for (var j = 0; j < u1Matches[i].u2.length; j++) {
	                if ((u1Matches[i].u2[j][0] <= u2) && (u1Matches[i].u2[j][1] >= u2)) {
	                    return u1Matches[i].u2[j][2];
	                }
	            }
	        }
	        return 0;
	    };
	    FontParserSVG.prototype._parseFontKerning = function () {
	        var _this = this;
	        var hkernElements = this._document.querySelectorAll('hkern');
	        this._kerningMaps = [];
	        var _loop_1 = function (i) {
	            var hkern = hkernElements[i];
	            var _a = ['u1', 'g1', 'u2', 'g2'].map(function (attr) {
	                var val = hkern.getAttribute(attr);
	                if (val) {
	                    return val.split(',');
	                }
	                return [];
	            }), u1 = _a[0], g1 = _a[1], u2 = _a[2], g2 = _a[3];
	            var k = getXMLIntAttribute(hkern, 'k');
	            var u1Ranges = svgUtils_1.getUnicodeRanges(u1, g1);
	            var u2Ranges = svgUtils_1.getUnicodeRanges(u2, g2);
	            u1Ranges.forEach(function (u1Range) {
	                var kerningMap = _this._kerningMaps.find(function (kerning) { return (kerning.u1[0] === u1Range[0] && kerning.u1[1] === u1Range[1]); });
	                if (kerningMap) {
	                    u2Ranges.forEach(function (u2Range) { return kerningMap.u2.push(u2Range.concat([k])); });
	                }
	                else {
	                    _this._kerningMaps.push({
	                        u1: u1Range,
	                        u2: u2Ranges.map(function (u2Range) { return u2Range.concat([k]); })
	                    });
	                }
	            });
	        };
	        for (var i = 0; i < hkernElements.length; i++) {
	            _loop_1(i);
	        }
	        this._kerningMaps.sort(function (a, b) {
	            if (a.u1[0] === b.u1[0]) {
	                return b.u1[1] - a.u1[1];
	            }
	            else if (a.u1[0] > b.u1[0]) {
	                return 1;
	            }
	            return -1;
	        });
	    };
	    /**
	     * Parses and saves all general properties of the SVG font document
	     */
	    FontParserSVG.prototype._parseFontProperties = function () {
	        var fontFace = this._document.querySelector('font-face');
	        var font = this._document.querySelector('font');
	        this._missingGlyph = this._document.querySelector('missing-glyph');
	        this.unitsPerEm = getXMLIntAttribute(fontFace, 'units-per-em', 1000);
	        this.ascent = getXMLIntAttribute(fontFace, 'ascent');
	        this.descent = getXMLIntAttribute(fontFace, 'descent');
	        this.horizAdvX = getXMLIntAttribute(font, 'horiz-adv-x', 1000);
	    };
	    return FontParserSVG;
	}());
	exports.default = FontParserSVG;
	/**
	 * Returns a query selector string to get the given glyph from an XMLDocument.
	 * @hidden
	 * @param glyph The glyph to select
	 * @returns {string} The selector
	 */
	function getUnicodeSelector(glyph) {
	    var withQuotes = (glyph == "'") ? "\"'\"" : "'" + glyph + "'";
	    return "[unicode=" + withQuotes + "]";
	}
	/**
	 * Gets the given attribute from an XML node and parses it to an integer
	 * @hidden
	 * @param xml The node to get the attribute from
	 * @param attribute The attribute name
	 * @param defaultValue If set, returns this value
	 */
	function getXMLIntAttribute(xml, attribute, defaultValue) {
	    var result = xml.getAttribute(attribute);
	    if (result !== null && result !== '') {
	        return parseInt(result, 10);
	    }
	    return defaultValue;
	}


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var pathUtils_1 = __webpack_require__(322);
	/**
	 * Class that represents a single parsed glyph
	 */
	var Glyph = (function () {
	    function Glyph(instructions, horizAdvX) {
	        this.instructions = instructions;
	        this.horizAdvX = horizAdvX;
	        this._boundingRect = null;
	        this._canvasCommands = null;
	    }
	    Glyph.prototype.getBoundingRect = function () {
	        if (!this._boundingRect) {
	            this._boundingRect = pathUtils_1.getInstructionsBoundingRect(this.instructions);
	        }
	        return this._boundingRect;
	    };
	    Glyph.prototype.getCanvasCommands = function () {
	        if (!this._canvasCommands) {
	            this._canvasCommands = pathUtils_1.getCanvasCommands(this.instructions);
	        }
	        return this._canvasCommands;
	    };
	    return Glyph;
	}());
	exports.default = Glyph;


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var GlyphBoundingRect_1 = __webpack_require__(323);
	var SVGCommandDef = (function () {
	    function SVGCommandDef(canvasCommand, paramLength, hasX, hasY) {
	        if (paramLength === void 0) { paramLength = 2; }
	        if (hasX === void 0) { hasX = true; }
	        if (hasY === void 0) { hasY = true; }
	        this.canvasCommand = canvasCommand;
	        this.paramLength = paramLength;
	        this.hasX = hasX;
	        this.hasY = hasY;
	    }
	    return SVGCommandDef;
	}());
	var SVG_COMMAND_MAP = {
	    M: new SVGCommandDef('moveTo'),
	    L: new SVGCommandDef('lineTo'),
	    Z: new SVGCommandDef('lineTo', 0, false, false),
	    H: new SVGCommandDef('lineTo', 1, true, false),
	    V: new SVGCommandDef('lineTo', 1, false),
	    C: new SVGCommandDef('bezierCurveTo', 6),
	    S: new SVGCommandDef('bezierCurveTo', 4),
	    Q: new SVGCommandDef('quadraticCurveTo', 4),
	    T: new SVGCommandDef('quadraticCurveTo', 2)
	};
	function getCanvasCommands(pathData) {
	    var commands = [];
	    var cx = 0;
	    var cy = 0;
	    var subPathStart = null;
	    if (!pathData.length) {
	        return commands;
	    }
	    commands.push({ command: 'beginPath', params: [] });
	    pathData.forEach(function (pathInstruction) {
	        var command = pathInstruction.command, params = pathInstruction.params;
	        var commandName = command.toUpperCase();
	        var isAbsolute = command === commandName;
	        if (!subPathStart && commandName !== 'M' && commandName !== 'Z') {
	            subPathStart = [cx, cy];
	        }
	        var commandDef = SVG_COMMAND_MAP[commandName];
	        if (commandDef) {
	            var absParams = [];
	            if (commandDef.paramLength) {
	                for (var p = 0; p < params.length; p += commandDef.paramLength) {
	                    var singleParams = params.slice(0, commandDef.paramLength);
	                    absParams = isAbsolute ? singleParams : singleParams.map(function (param, paramIndex) {
	                        var isX = commandDef.hasX ? (commandDef.hasY ? !(paramIndex % 2) : true) : false;
	                        return isX ? cx + param : cy + param;
	                    });
	                    switch (commandName) {
	                        case 'H':
	                            absParams.push(cy);
	                            break;
	                        case 'V':
	                            absParams.unshift(cx);
	                            break;
	                        case 'S':
	                        case 'T':
	                            var prevCommand = commands[commands.length - 1];
	                            var controlPoint = (prevCommand && prevCommand.command === commandDef.canvasCommand) ? [
	                                2 * cx - prevCommand.params[prevCommand.params.length - 4],
	                                2 * cy - prevCommand.params[prevCommand.params.length - 3]
	                            ] : [cx, cy];
	                            absParams.splice.apply(absParams, [absParams.length - 2, 0].concat(controlPoint));
	                            break;
	                        default:
	                    }
	                }
	            }
	            else if (commandName === 'Z') {
	                absParams.push.apply(absParams, subPathStart);
	                subPathStart = null;
	            }
	            commands.push({
	                command: commandDef.canvasCommand,
	                params: absParams
	            });
	            if (commandDef.hasX) {
	                cx = absParams[absParams.length - 2];
	            }
	            if (commandDef.hasY) {
	                cy = absParams[absParams.length - 1];
	            }
	        }
	        else if (commandName === 'A') {
	            // TODO: implement "A"
	        }
	        else {
	            throw new Error("Unknown command in SVG path \"" + command + "\"");
	        }
	    });
	    commands.push({ command: 'closePath', params: [] });
	    return commands;
	}
	exports.getCanvasCommands = getCanvasCommands;
	/**
	 * Parses an SVG Path data string into an array of separate instructions.
	 * For more info on Path Data see: http://www.w3.org/TR/SVG/paths.html#PathData
	 * @param d The data string to parse.
	 * @param invertY If true, will invert all y coordinates. Defaults to false
	 * @returns An array of instructions, containing a single letter as command and an array of
	 * integers for parameters.
	 */
	function parsePathData(d, invertY) {
	    if (invertY === void 0) { invertY = false; }
	    var commandRegex = /[MZLHVCSQTA](:?\-?[0-9.]+[, ]?)*/gi;
	    var paramRegex = /-?[0-9.]+/g;
	    var instructions = d.match(commandRegex);
	    if (!instructions) {
	        return [];
	    }
	    var parsedInstructions = instructions.map(function (match) {
	        var command = match.charAt(0);
	        var params = match.match(paramRegex) || [];
	        return {
	            command: command,
	            params: params.map(function (param) { return parseFloat(param); })
	        };
	    });
	    return invertY ? invertInstructionsY(parsedInstructions) : parsedInstructions;
	}
	exports.parsePathData = parsePathData;
	/**
	 * Converts separate path instructions (as returned by parsePathData()) back to
	 * a single path data string that can be applied as an svg 'd' attribute
	 * @param instructions
	 */
	exports.instructionsToDataString = function (instructions) {
	    return instructions.reduce(function (d, _a) {
	        var command = _a.command, params = _a.params;
	        return d + ("" + command + params.join(' '));
	    }, '');
	};
	/**
	 * Inverts the Y-axis of an array of PathInstructions. Useful for SVG Fonts, where the
	 * Y-axis is in the opposite direction as an HTML SVG document.
	 * note: mutates the array in-place
	 * @param instructions
	 * @returns The original array with mutated y params
	 */
	function invertInstructionsY(instructions) {
	    instructions.forEach(function (_a) {
	        var params = _a.params, command = _a.command;
	        var commandName = command.toUpperCase();
	        if (SVG_COMMAND_MAP[commandName]) {
	            var commandDef = SVG_COMMAND_MAP[commandName];
	            if (commandDef.paramLength) {
	                var isY = true;
	                for (var p = 0; p < params.length; p++) {
	                    if (isY && commandDef.hasX) {
	                        isY = false;
	                    }
	                    else if (!isY && commandDef.hasY) {
	                        isY = true;
	                    }
	                    if (isY) {
	                        params[p] *= -1;
	                    }
	                }
	            }
	        }
	        else if (commandName === 'A') {
	            // TODO: currently does not support elliptical arc curve commands (A)
	        }
	    });
	    return instructions;
	}
	exports.invertInstructionsY = invertInstructionsY;
	/**
	 * Gets the bounding box of an array of PathInstructions that form a path. For performance
	 * reasons, this algorithm will only use the path endpoints and will not account for any curves
	 * that might go outside of the bounding box.
	 * @param instructions An array containing SVG Path instructions
	 * @returns The bounding rect of the instruction set
	 */
	function getInstructionsBoundingRect(instructions) {
	    var cx = 0, cy = 0;
	    var pointsX = [];
	    var pointsY = [];
	    instructions.forEach(function (_a) {
	        var command = _a.command, params = _a.params;
	        var commandName = command.toUpperCase();
	        var absolute = command === commandName;
	        var commandDef = SVG_COMMAND_MAP[commandName];
	        if (commandDef && commandDef.paramLength) {
	            if (commandDef.hasX) {
	                var xPos = commandDef.paramLength - (commandDef.hasY ? 2 : 1);
	                while (typeof params[xPos] !== 'undefined') {
	                    if (absolute) {
	                        cx = 0;
	                    }
	                    cx += params[xPos];
	                    pointsX.push(cx);
	                    xPos += commandDef.paramLength;
	                }
	            }
	            if (commandDef.hasY) {
	                var yPos = commandDef.paramLength - 1;
	                while (typeof params[yPos] !== 'undefined') {
	                    if (absolute) {
	                        cy = 0;
	                    }
	                    cy += params[yPos];
	                    pointsY.push(cy);
	                    yPos += commandDef.paramLength;
	                }
	            }
	        }
	        else if (commandName === 'A') {
	            // TODO: currently does not support elliptical arc curve commands (A)
	        }
	    });
	    return new GlyphBoundingRect_1.default(Math.min.apply(Math, pointsX), Math.min.apply(Math, pointsY), Math.max.apply(Math, pointsX), Math.max.apply(Math, pointsY));
	}
	exports.getInstructionsBoundingRect = getInstructionsBoundingRect;


/***/ },
/* 323 */
/***/ function(module, exports) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var GlyphBoundingRect = (function () {
	    function GlyphBoundingRect(minX, minY, maxX, maxY) {
	        this.minX = minX;
	        this.minY = minY;
	        this.maxX = maxX;
	        this.maxY = maxY;
	    }
	    Object.defineProperty(GlyphBoundingRect.prototype, "width", {
	        get: function () {
	            return this.maxX - this.minX;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GlyphBoundingRect.prototype, "height", {
	        get: function () {
	            return this.maxY - this.minY;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return GlyphBoundingRect;
	}());
	exports.default = GlyphBoundingRect;


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 *
	 * @module lib/utils/svgUtils
	 */ /** */
	var entities_1 = __webpack_require__(325);
	/**
	 * Returns a set of unicode ranges based on the supplied u and g arguments. Used as a helper
	 * function to parse attributes of the <hkern> element in an SVG font file. Parsed according
	 * to rules defined at
	 * https://www.w3.org/TR/SVG/fonts.html#KernElements
	 * @param u Array of strings that corresponds with the <hkern> "u1" or "u2" attribute, split
	 * by comma
	 * @param g Array of strings that corresponds with the <hkern> "g1" or "g2" attribute, split
	 * by comma
	 * @returns {Array<[number,number]>} An array of number tuples that present unicode ranges.
	 * The first number is the start, the second is the end of the range (inclusive). For single
	 * unicode characters, these numbers are the same.
	 */
	function getUnicodeRanges(u, g) {
	    var result = [];
	    g.forEach(function (name) {
	        if (name.length === 1) {
	            var charCode = name.charCodeAt(0);
	            result.push([charCode, charCode]);
	        }
	        else {
	            var charCode = entities_1.default[name];
	            if (charCode) {
	                result.push([charCode, charCode]);
	            }
	        }
	    });
	    u.forEach(function (character) {
	        if (character.length === 1) {
	            var charCode = character.charCodeAt(0);
	            result.push([charCode, charCode]);
	        }
	        else {
	            var range1_1 = character.match(/U\+([0-9A-F]{1,9})-([0-9A-F]{1,9})$/);
	            if (range1_1) {
	                result.push([1, 2].map(function (index) { return parseInt(range1_1[index], 16); }));
	            }
	            else {
	                var range2 = character.match(/U\+([0-9A-F?]{1,9}$)/);
	                if (range2) {
	                    result.push([
	                        parseInt(range2[1].replace(/\?/g, '0'), 16),
	                        parseInt(range2[1].replace(/\?/g, 'F'), 16)
	                    ]);
	                }
	            }
	        }
	    });
	    return result.sort(function (a, b) { return a[0] - b[0]; });
	}
	exports.getUnicodeRanges = getUnicodeRanges;
	exports.SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
	exports.createSVGElement = function (name) { return document.createElementNS(exports.SVG_NAMESPACE, name); };
	function setSVGAttributes(element, attributes) {
	    Object.keys(attributes).forEach(function (key) { return element.setAttribute(key, attributes[key]); });
	}
	exports.setSVGAttributes = setSVGAttributes;
	function positionTransformSVG(element, x, y) {
	    if (x === void 0) { x = 0; }
	    if (y === void 0) { y = 0; }
	    setSVGAttributes(element, {
	        transform: "translate(" + x + ", " + y + ")"
	    });
	}
	exports.positionTransformSVG = positionTransformSVG;


/***/ },
/* 325 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var entities = {
	    "AElig": 198,
	    "AMP": 38,
	    "Aacute": 193,
	    "Abreve": 258,
	    "Acirc": 194,
	    "Acy": 1040,
	    "Afr": 120068,
	    "Agrave": 192,
	    "Alpha": 913,
	    "Amacr": 256,
	    "And": 10835,
	    "Aogon": 260,
	    "Aopf": 120120,
	    "ApplyFunction": 8289,
	    "Aring": 197,
	    "Ascr": 119964,
	    "Assign": 8788,
	    "Atilde": 195,
	    "Auml": 196,
	    "Backslash": 8726,
	    "Barv": 10983,
	    "Barwed": 8966,
	    "Bcy": 1041,
	    "Because": 8757,
	    "Bernoullis": 8492,
	    "Beta": 914,
	    "Bfr": 120069,
	    "Bopf": 120121,
	    "Breve": 728,
	    "Bscr": 8492,
	    "Bumpeq": 8782,
	    "CHcy": 1063,
	    "COPY": 169,
	    "Cacute": 262,
	    "Cap": 8914,
	    "CapitalDifferentialD": 8517,
	    "Cayleys": 8493,
	    "Ccaron": 268,
	    "Ccedil": 199,
	    "Ccirc": 264,
	    "Cconint": 8752,
	    "Cdot": 266,
	    "Cedilla": 184,
	    "CenterDot": 183,
	    "Cfr": 8493,
	    "Chi": 935,
	    "CircleDot": 8857,
	    "CircleMinus": 8854,
	    "CirclePlus": 8853,
	    "CircleTimes": 8855,
	    "ClockwiseContourIntegral": 8754,
	    "CloseCurlyDoubleQuote": 8221,
	    "CloseCurlyQuote": 8217,
	    "Colon": 8759,
	    "Colone": 10868,
	    "Congruent": 8801,
	    "Conint": 8751,
	    "ContourIntegral": 8750,
	    "Copf": 8450,
	    "Coproduct": 8720,
	    "CounterClockwiseContourIntegral": 8755,
	    "Cross": 10799,
	    "Cscr": 119966,
	    "Cup": 8915,
	    "CupCap": 8781,
	    "DD": 8517,
	    "DDotrahd": 10513,
	    "DJcy": 1026,
	    "DScy": 1029,
	    "DZcy": 1039,
	    "Dagger": 8225,
	    "Darr": 8609,
	    "Dashv": 10980,
	    "Dcaron": 270,
	    "Dcy": 1044,
	    "Del": 8711,
	    "Delta": 916,
	    "Dfr": 120071,
	    "DiacriticalAcute": 180,
	    "DiacriticalDot": 729,
	    "DiacriticalDoubleAcute": 733,
	    "DiacriticalGrave": 96,
	    "DiacriticalTilde": 732,
	    "Diamond": 8900,
	    "DifferentialD": 8518,
	    "Dopf": 120123,
	    "Dot": 168,
	    "DotDot": 8412,
	    "DotEqual": 8784,
	    "DoubleContourIntegral": 8751,
	    "DoubleDot": 168,
	    "DoubleDownArrow": 8659,
	    "DoubleLeftArrow": 8656,
	    "DoubleLeftRightArrow": 8660,
	    "DoubleLeftTee": 10980,
	    "DoubleLongLeftArrow": 10232,
	    "DoubleLongLeftRightArrow": 10234,
	    "DoubleLongRightArrow": 10233,
	    "DoubleRightArrow": 8658,
	    "DoubleRightTee": 8872,
	    "DoubleUpArrow": 8657,
	    "DoubleUpDownArrow": 8661,
	    "DoubleVerticalBar": 8741,
	    "DownArrow": 8595,
	    "DownArrowBar": 10515,
	    "DownArrowUpArrow": 8693,
	    "DownBreve": 785,
	    "DownLeftRightVector": 10576,
	    "DownLeftTeeVector": 10590,
	    "DownLeftVector": 8637,
	    "DownLeftVectorBar": 10582,
	    "DownRightTeeVector": 10591,
	    "DownRightVector": 8641,
	    "DownRightVectorBar": 10583,
	    "DownTee": 8868,
	    "DownTeeArrow": 8615,
	    "Downarrow": 8659,
	    "Dscr": 119967,
	    "Dstrok": 272,
	    "ENG": 330,
	    "ETH": 208,
	    "Eacute": 201,
	    "Ecaron": 282,
	    "Ecirc": 202,
	    "Ecy": 1069,
	    "Edot": 278,
	    "Efr": 120072,
	    "Egrave": 200,
	    "Element": 8712,
	    "Emacr": 274,
	    "EmptySmallSquare": 9723,
	    "EmptyVerySmallSquare": 9643,
	    "Eogon": 280,
	    "Eopf": 120124,
	    "Epsilon": 917,
	    "Equal": 10869,
	    "EqualTilde": 8770,
	    "Equilibrium": 8652,
	    "Escr": 8496,
	    "Esim": 10867,
	    "Eta": 919,
	    "Euml": 203,
	    "Exists": 8707,
	    "ExponentialE": 8519,
	    "Fcy": 1060,
	    "Ffr": 120073,
	    "FilledSmallSquare": 9724,
	    "FilledVerySmallSquare": 9642,
	    "Fopf": 120125,
	    "ForAll": 8704,
	    "Fouriertrf": 8497,
	    "Fscr": 8497,
	    "GJcy": 1027,
	    "GT": 62,
	    "Gamma": 915,
	    "Gammad": 988,
	    "Gbreve": 286,
	    "Gcedil": 290,
	    "Gcirc": 284,
	    "Gcy": 1043,
	    "Gdot": 288,
	    "Gfr": 120074,
	    "Gg": 8921,
	    "Gopf": 120126,
	    "GreaterEqual": 8805,
	    "GreaterEqualLess": 8923,
	    "GreaterFullEqual": 8807,
	    "GreaterGreater": 10914,
	    "GreaterLess": 8823,
	    "GreaterSlantEqual": 10878,
	    "GreaterTilde": 8819,
	    "Gscr": 119970,
	    "Gt": 8811,
	    "HARDcy": 1066,
	    "Hacek": 711,
	    "Hat": 94,
	    "Hcirc": 292,
	    "Hfr": 8460,
	    "HilbertSpace": 8459,
	    "Hopf": 8461,
	    "HorizontalLine": 9472,
	    "Hscr": 8459,
	    "Hstrok": 294,
	    "HumpDownHump": 8782,
	    "HumpEqual": 8783,
	    "IEcy": 1045,
	    "IJlig": 306,
	    "IOcy": 1025,
	    "Iacute": 205,
	    "Icirc": 206,
	    "Icy": 1048,
	    "Idot": 304,
	    "Ifr": 8465,
	    "Igrave": 204,
	    "Im": 8465,
	    "Imacr": 298,
	    "ImaginaryI": 8520,
	    "Implies": 8658,
	    "Int": 8748,
	    "Integral": 8747,
	    "Intersection": 8898,
	    "InvisibleComma": 8291,
	    "InvisibleTimes": 8290,
	    "Iogon": 302,
	    "Iopf": 120128,
	    "Iota": 921,
	    "Iscr": 8464,
	    "Itilde": 296,
	    "Iukcy": 1030,
	    "Iuml": 207,
	    "Jcirc": 308,
	    "Jcy": 1049,
	    "Jfr": 120077,
	    "Jopf": 120129,
	    "Jscr": 119973,
	    "Jsercy": 1032,
	    "Jukcy": 1028,
	    "KHcy": 1061,
	    "KJcy": 1036,
	    "Kappa": 922,
	    "Kcedil": 310,
	    "Kcy": 1050,
	    "Kfr": 120078,
	    "Kopf": 120130,
	    "Kscr": 119974,
	    "LJcy": 1033,
	    "LT": 60,
	    "Lacute": 313,
	    "Lambda": 923,
	    "Lang": 10218,
	    "Laplacetrf": 8466,
	    "Larr": 8606,
	    "Lcaron": 317,
	    "Lcedil": 315,
	    "Lcy": 1051,
	    "LeftAngleBracket": 10216,
	    "LeftArrow": 8592,
	    "LeftArrowBar": 8676,
	    "LeftArrowRightArrow": 8646,
	    "LeftCeiling": 8968,
	    "LeftDoubleBracket": 10214,
	    "LeftDownTeeVector": 10593,
	    "LeftDownVector": 8643,
	    "LeftDownVectorBar": 10585,
	    "LeftFloor": 8970,
	    "LeftRightArrow": 8596,
	    "LeftRightVector": 10574,
	    "LeftTee": 8867,
	    "LeftTeeArrow": 8612,
	    "LeftTeeVector": 10586,
	    "LeftTriangle": 8882,
	    "LeftTriangleBar": 10703,
	    "LeftTriangleEqual": 8884,
	    "LeftUpDownVector": 10577,
	    "LeftUpTeeVector": 10592,
	    "LeftUpVector": 8639,
	    "LeftUpVectorBar": 10584,
	    "LeftVector": 8636,
	    "LeftVectorBar": 10578,
	    "Leftarrow": 8656,
	    "Leftrightarrow": 8660,
	    "LessEqualGreater": 8922,
	    "LessFullEqual": 8806,
	    "LessGreater": 8822,
	    "LessLess": 10913,
	    "LessSlantEqual": 10877,
	    "LessTilde": 8818,
	    "Lfr": 120079,
	    "Ll": 8920,
	    "Lleftarrow": 8666,
	    "Lmidot": 319,
	    "LongLeftArrow": 10229,
	    "LongLeftRightArrow": 10231,
	    "LongRightArrow": 10230,
	    "Longleftarrow": 10232,
	    "Longleftrightarrow": 10234,
	    "Longrightarrow": 10233,
	    "Lopf": 120131,
	    "LowerLeftArrow": 8601,
	    "LowerRightArrow": 8600,
	    "Lscr": 8466,
	    "Lsh": 8624,
	    "Lstrok": 321,
	    "Lt": 8810,
	    "Map": 10501,
	    "Mcy": 1052,
	    "MediumSpace": 8287,
	    "Mellintrf": 8499,
	    "Mfr": 120080,
	    "MinusPlus": 8723,
	    "Mopf": 120132,
	    "Mscr": 8499,
	    "Mu": 924,
	    "NJcy": 1034,
	    "Nacute": 323,
	    "Ncaron": 327,
	    "Ncedil": 325,
	    "Ncy": 1053,
	    "NegativeMediumSpace": 8203,
	    "NegativeThickSpace": 8203,
	    "NegativeThinSpace": 8203,
	    "NegativeVeryThinSpace": 8203,
	    "NestedGreaterGreater": 8811,
	    "NestedLessLess": 8810,
	    "NewLine": 10,
	    "Nfr": 120081,
	    "NoBreak": 8288,
	    "NonBreakingSpace": 160,
	    "Nopf": 8469,
	    "Not": 10988,
	    "NotCongruent": 8802,
	    "NotCupCap": 8813,
	    "NotDoubleVerticalBar": 8742,
	    "NotElement": 8713,
	    "NotEqual": 8800,
	    "NotEqualTilde": 8770,
	    "NotExists": 8708,
	    "NotGreater": 8815,
	    "NotGreaterEqual": 8817,
	    "NotGreaterFullEqual": 8807,
	    "NotGreaterGreater": 8811,
	    "NotGreaterLess": 8825,
	    "NotGreaterSlantEqual": 10878,
	    "NotGreaterTilde": 8821,
	    "NotHumpDownHump": 8782,
	    "NotHumpEqual": 8783,
	    "NotLeftTriangle": 8938,
	    "NotLeftTriangleBar": 10703,
	    "NotLeftTriangleEqual": 8940,
	    "NotLess": 8814,
	    "NotLessEqual": 8816,
	    "NotLessGreater": 8824,
	    "NotLessLess": 8810,
	    "NotLessSlantEqual": 10877,
	    "NotLessTilde": 8820,
	    "NotNestedGreaterGreater": 10914,
	    "NotNestedLessLess": 10913,
	    "NotPrecedes": 8832,
	    "NotPrecedesEqual": 10927,
	    "NotPrecedesSlantEqual": 8928,
	    "NotReverseElement": 8716,
	    "NotRightTriangle": 8939,
	    "NotRightTriangleBar": 10704,
	    "NotRightTriangleEqual": 8941,
	    "NotSquareSubset": 8847,
	    "NotSquareSubsetEqual": 8930,
	    "NotSquareSuperset": 8848,
	    "NotSquareSupersetEqual": 8931,
	    "NotSubset": 8834,
	    "NotSubsetEqual": 8840,
	    "NotSucceeds": 8833,
	    "NotSucceedsEqual": 10928,
	    "NotSucceedsSlantEqual": 8929,
	    "NotSucceedsTilde": 8831,
	    "NotSuperset": 8835,
	    "NotSupersetEqual": 8841,
	    "NotTilde": 8769,
	    "NotTildeEqual": 8772,
	    "NotTildeFullEqual": 8775,
	    "NotTildeTilde": 8777,
	    "NotVerticalBar": 8740,
	    "Nscr": 119977,
	    "Ntilde": 209,
	    "Nu": 925,
	    "OElig": 338,
	    "Oacute": 211,
	    "Ocirc": 212,
	    "Ocy": 1054,
	    "Odblac": 336,
	    "Ofr": 120082,
	    "Ograve": 210,
	    "Omacr": 332,
	    "Omega": 937,
	    "Omicron": 927,
	    "Oopf": 120134,
	    "OpenCurlyDoubleQuote": 8220,
	    "OpenCurlyQuote": 8216,
	    "Or": 10836,
	    "Oscr": 119978,
	    "Oslash": 216,
	    "Otilde": 213,
	    "Otimes": 10807,
	    "Ouml": 214,
	    "OverBar": 8254,
	    "OverBrace": 9182,
	    "OverBracket": 9140,
	    "OverParenthesis": 9180,
	    "PartialD": 8706,
	    "Pcy": 1055,
	    "Pfr": 120083,
	    "Phi": 934,
	    "Pi": 928,
	    "PlusMinus": 177,
	    "Poincareplane": 8460,
	    "Popf": 8473,
	    "Pr": 10939,
	    "Precedes": 8826,
	    "PrecedesEqual": 10927,
	    "PrecedesSlantEqual": 8828,
	    "PrecedesTilde": 8830,
	    "Prime": 8243,
	    "Product": 8719,
	    "Proportion": 8759,
	    "Proportional": 8733,
	    "Pscr": 119979,
	    "Psi": 936,
	    "QUOT": 34,
	    "Qfr": 120084,
	    "Qopf": 8474,
	    "Qscr": 119980,
	    "RBarr": 10512,
	    "REG": 174,
	    "Racute": 340,
	    "Rang": 10219,
	    "Rarr": 8608,
	    "Rarrtl": 10518,
	    "Rcaron": 344,
	    "Rcedil": 342,
	    "Rcy": 1056,
	    "Re": 8476,
	    "ReverseElement": 8715,
	    "ReverseEquilibrium": 8651,
	    "ReverseUpEquilibrium": 10607,
	    "Rfr": 8476,
	    "Rho": 929,
	    "RightAngleBracket": 10217,
	    "RightArrow": 8594,
	    "RightArrowBar": 8677,
	    "RightArrowLeftArrow": 8644,
	    "RightCeiling": 8969,
	    "RightDoubleBracket": 10215,
	    "RightDownTeeVector": 10589,
	    "RightDownVector": 8642,
	    "RightDownVectorBar": 10581,
	    "RightFloor": 8971,
	    "RightTee": 8866,
	    "RightTeeArrow": 8614,
	    "RightTeeVector": 10587,
	    "RightTriangle": 8883,
	    "RightTriangleBar": 10704,
	    "RightTriangleEqual": 8885,
	    "RightUpDownVector": 10575,
	    "RightUpTeeVector": 10588,
	    "RightUpVector": 8638,
	    "RightUpVectorBar": 10580,
	    "RightVector": 8640,
	    "RightVectorBar": 10579,
	    "Rightarrow": 8658,
	    "Ropf": 8477,
	    "RoundImplies": 10608,
	    "Rrightarrow": 8667,
	    "Rscr": 8475,
	    "Rsh": 8625,
	    "RuleDelayed": 10740,
	    "SHCHcy": 1065,
	    "SHcy": 1064,
	    "SOFTcy": 1068,
	    "Sacute": 346,
	    "Sc": 10940,
	    "Scaron": 352,
	    "Scedil": 350,
	    "Scirc": 348,
	    "Scy": 1057,
	    "Sfr": 120086,
	    "ShortDownArrow": 8595,
	    "ShortLeftArrow": 8592,
	    "ShortRightArrow": 8594,
	    "ShortUpArrow": 8593,
	    "Sigma": 931,
	    "SmallCircle": 8728,
	    "Sopf": 120138,
	    "Sqrt": 8730,
	    "Square": 9633,
	    "SquareIntersection": 8851,
	    "SquareSubset": 8847,
	    "SquareSubsetEqual": 8849,
	    "SquareSuperset": 8848,
	    "SquareSupersetEqual": 8850,
	    "SquareUnion": 8852,
	    "Sscr": 119982,
	    "Star": 8902,
	    "Sub": 8912,
	    "Subset": 8912,
	    "SubsetEqual": 8838,
	    "Succeeds": 8827,
	    "SucceedsEqual": 10928,
	    "SucceedsSlantEqual": 8829,
	    "SucceedsTilde": 8831,
	    "SuchThat": 8715,
	    "Sum": 8721,
	    "Sup": 8913,
	    "Superset": 8835,
	    "SupersetEqual": 8839,
	    "Supset": 8913,
	    "THORN": 222,
	    "TRADE": 8482,
	    "TSHcy": 1035,
	    "TScy": 1062,
	    "Tab": 9,
	    "Tau": 932,
	    "Tcaron": 356,
	    "Tcedil": 354,
	    "Tcy": 1058,
	    "Tfr": 120087,
	    "Therefore": 8756,
	    "Theta": 920,
	    "ThickSpace": 8287,
	    "ThinSpace": 8201,
	    "Tilde": 8764,
	    "TildeEqual": 8771,
	    "TildeFullEqual": 8773,
	    "TildeTilde": 8776,
	    "Topf": 120139,
	    "TripleDot": 8411,
	    "Tscr": 119983,
	    "Tstrok": 358,
	    "Uacute": 218,
	    "Uarr": 8607,
	    "Uarrocir": 10569,
	    "Ubrcy": 1038,
	    "Ubreve": 364,
	    "Ucirc": 219,
	    "Ucy": 1059,
	    "Udblac": 368,
	    "Ufr": 120088,
	    "Ugrave": 217,
	    "Umacr": 362,
	    "UnderBar": 95,
	    "UnderBrace": 9183,
	    "UnderBracket": 9141,
	    "UnderParenthesis": 9181,
	    "Union": 8899,
	    "UnionPlus": 8846,
	    "Uogon": 370,
	    "Uopf": 120140,
	    "UpArrow": 8593,
	    "UpArrowBar": 10514,
	    "UpArrowDownArrow": 8645,
	    "UpDownArrow": 8597,
	    "UpEquilibrium": 10606,
	    "UpTee": 8869,
	    "UpTeeArrow": 8613,
	    "Uparrow": 8657,
	    "Updownarrow": 8661,
	    "UpperLeftArrow": 8598,
	    "UpperRightArrow": 8599,
	    "Upsi": 978,
	    "Upsilon": 933,
	    "Uring": 366,
	    "Uscr": 119984,
	    "Utilde": 360,
	    "Uuml": 220,
	    "VDash": 8875,
	    "Vbar": 10987,
	    "Vcy": 1042,
	    "Vdash": 8873,
	    "Vdashl": 10982,
	    "Vee": 8897,
	    "Verbar": 8214,
	    "Vert": 8214,
	    "VerticalBar": 8739,
	    "VerticalLine": 124,
	    "VerticalSeparator": 10072,
	    "VerticalTilde": 8768,
	    "VeryThinSpace": 8202,
	    "Vfr": 120089,
	    "Vopf": 120141,
	    "Vscr": 119985,
	    "Vvdash": 8874,
	    "Wcirc": 372,
	    "Wedge": 8896,
	    "Wfr": 120090,
	    "Wopf": 120142,
	    "Wscr": 119986,
	    "Xfr": 120091,
	    "Xi": 926,
	    "Xopf": 120143,
	    "Xscr": 119987,
	    "YAcy": 1071,
	    "YIcy": 1031,
	    "YUcy": 1070,
	    "Yacute": 221,
	    "Ycirc": 374,
	    "Ycy": 1067,
	    "Yfr": 120092,
	    "Yopf": 120144,
	    "Yscr": 119988,
	    "Yuml": 376,
	    "ZHcy": 1046,
	    "Zacute": 377,
	    "Zcaron": 381,
	    "Zcy": 1047,
	    "Zdot": 379,
	    "ZeroWidthSpace": 8203,
	    "Zeta": 918,
	    "Zfr": 8488,
	    "Zopf": 8484,
	    "Zscr": 119989,
	    "aacute": 225,
	    "abreve": 259,
	    "ac": 8766,
	    "acE": 8766,
	    "acd": 8767,
	    "acirc": 226,
	    "acute": 180,
	    "acy": 1072,
	    "aelig": 230,
	    "af": 8289,
	    "afr": 120094,
	    "agrave": 224,
	    "alefsym": 8501,
	    "aleph": 8501,
	    "alpha": 945,
	    "amacr": 257,
	    "amalg": 10815,
	    "amp": 38,
	    "and": 8743,
	    "andand": 10837,
	    "andd": 10844,
	    "andslope": 10840,
	    "andv": 10842,
	    "ang": 8736,
	    "ange": 10660,
	    "angle": 8736,
	    "angmsd": 8737,
	    "angmsdaa": 10664,
	    "angmsdab": 10665,
	    "angmsdac": 10666,
	    "angmsdad": 10667,
	    "angmsdae": 10668,
	    "angmsdaf": 10669,
	    "angmsdag": 10670,
	    "angmsdah": 10671,
	    "angrt": 8735,
	    "angrtvb": 8894,
	    "angrtvbd": 10653,
	    "angsph": 8738,
	    "angst": 197,
	    "angzarr": 9084,
	    "aogon": 261,
	    "aopf": 120146,
	    "ap": 8776,
	    "apE": 10864,
	    "apacir": 10863,
	    "ape": 8778,
	    "apid": 8779,
	    "apos": 39,
	    "approx": 8776,
	    "approxeq": 8778,
	    "aring": 229,
	    "ascr": 119990,
	    "ast": 42,
	    "asymp": 8776,
	    "asympeq": 8781,
	    "atilde": 227,
	    "auml": 228,
	    "awconint": 8755,
	    "awint": 10769,
	    "bNot": 10989,
	    "backcong": 8780,
	    "backepsilon": 1014,
	    "backprime": 8245,
	    "backsim": 8765,
	    "backsimeq": 8909,
	    "barvee": 8893,
	    "barwed": 8965,
	    "barwedge": 8965,
	    "bbrk": 9141,
	    "bbrktbrk": 9142,
	    "bcong": 8780,
	    "bcy": 1073,
	    "bdquo": 8222,
	    "becaus": 8757,
	    "because": 8757,
	    "bemptyv": 10672,
	    "bepsi": 1014,
	    "bernou": 8492,
	    "beta": 946,
	    "beth": 8502,
	    "between": 8812,
	    "bfr": 120095,
	    "bigcap": 8898,
	    "bigcirc": 9711,
	    "bigcup": 8899,
	    "bigodot": 10752,
	    "bigoplus": 10753,
	    "bigotimes": 10754,
	    "bigsqcup": 10758,
	    "bigstar": 9733,
	    "bigtriangledown": 9661,
	    "bigtriangleup": 9651,
	    "biguplus": 10756,
	    "bigvee": 8897,
	    "bigwedge": 8896,
	    "bkarow": 10509,
	    "blacklozenge": 10731,
	    "blacksquare": 9642,
	    "blacktriangle": 9652,
	    "blacktriangledown": 9662,
	    "blacktriangleleft": 9666,
	    "blacktriangleright": 9656,
	    "blank": 9251,
	    "blk12": 9618,
	    "blk14": 9617,
	    "blk34": 9619,
	    "block": 9608,
	    "bne": 61,
	    "bnequiv": 8801,
	    "bnot": 8976,
	    "bopf": 120147,
	    "bot": 8869,
	    "bottom": 8869,
	    "bowtie": 8904,
	    "boxDL": 9559,
	    "boxDR": 9556,
	    "boxDl": 9558,
	    "boxDr": 9555,
	    "boxH": 9552,
	    "boxHD": 9574,
	    "boxHU": 9577,
	    "boxHd": 9572,
	    "boxHu": 9575,
	    "boxUL": 9565,
	    "boxUR": 9562,
	    "boxUl": 9564,
	    "boxUr": 9561,
	    "boxV": 9553,
	    "boxVH": 9580,
	    "boxVL": 9571,
	    "boxVR": 9568,
	    "boxVh": 9579,
	    "boxVl": 9570,
	    "boxVr": 9567,
	    "boxbox": 10697,
	    "boxdL": 9557,
	    "boxdR": 9554,
	    "boxdl": 9488,
	    "boxdr": 9484,
	    "boxh": 9472,
	    "boxhD": 9573,
	    "boxhU": 9576,
	    "boxhd": 9516,
	    "boxhu": 9524,
	    "boxminus": 8863,
	    "boxplus": 8862,
	    "boxtimes": 8864,
	    "boxuL": 9563,
	    "boxuR": 9560,
	    "boxul": 9496,
	    "boxur": 9492,
	    "boxv": 9474,
	    "boxvH": 9578,
	    "boxvL": 9569,
	    "boxvR": 9566,
	    "boxvh": 9532,
	    "boxvl": 9508,
	    "boxvr": 9500,
	    "bprime": 8245,
	    "breve": 728,
	    "brvbar": 166,
	    "bscr": 119991,
	    "bsemi": 8271,
	    "bsim": 8765,
	    "bsime": 8909,
	    "bsol": 92,
	    "bsolb": 10693,
	    "bsolhsub": 10184,
	    "bull": 8226,
	    "bullet": 8226,
	    "bump": 8782,
	    "bumpE": 10926,
	    "bumpe": 8783,
	    "bumpeq": 8783,
	    "cacute": 263,
	    "cap": 8745,
	    "capand": 10820,
	    "capbrcup": 10825,
	    "capcap": 10827,
	    "capcup": 10823,
	    "capdot": 10816,
	    "caps": 8745,
	    "caret": 8257,
	    "caron": 711,
	    "ccaps": 10829,
	    "ccaron": 269,
	    "ccedil": 231,
	    "ccirc": 265,
	    "ccups": 10828,
	    "ccupssm": 10832,
	    "cdot": 267,
	    "cedil": 184,
	    "cemptyv": 10674,
	    "cent": 162,
	    "centerdot": 183,
	    "cfr": 120096,
	    "chcy": 1095,
	    "check": 10003,
	    "checkmark": 10003,
	    "chi": 967,
	    "cir": 9675,
	    "cirE": 10691,
	    "circ": 710,
	    "circeq": 8791,
	    "circlearrowleft": 8634,
	    "circlearrowright": 8635,
	    "circledR": 174,
	    "circledS": 9416,
	    "circledast": 8859,
	    "circledcirc": 8858,
	    "circleddash": 8861,
	    "cire": 8791,
	    "cirfnint": 10768,
	    "cirmid": 10991,
	    "cirscir": 10690,
	    "clubs": 9827,
	    "clubsuit": 9827,
	    "colon": 58,
	    "colone": 8788,
	    "coloneq": 8788,
	    "comma": 44,
	    "commat": 64,
	    "comp": 8705,
	    "compfn": 8728,
	    "complement": 8705,
	    "complexes": 8450,
	    "cong": 8773,
	    "congdot": 10861,
	    "conint": 8750,
	    "copf": 120148,
	    "coprod": 8720,
	    "copy": 169,
	    "copysr": 8471,
	    "crarr": 8629,
	    "cross": 10007,
	    "cscr": 119992,
	    "csub": 10959,
	    "csube": 10961,
	    "csup": 10960,
	    "csupe": 10962,
	    "ctdot": 8943,
	    "cudarrl": 10552,
	    "cudarrr": 10549,
	    "cuepr": 8926,
	    "cuesc": 8927,
	    "cularr": 8630,
	    "cularrp": 10557,
	    "cup": 8746,
	    "cupbrcap": 10824,
	    "cupcap": 10822,
	    "cupcup": 10826,
	    "cupdot": 8845,
	    "cupor": 10821,
	    "cups": 8746,
	    "curarr": 8631,
	    "curarrm": 10556,
	    "curlyeqprec": 8926,
	    "curlyeqsucc": 8927,
	    "curlyvee": 8910,
	    "curlywedge": 8911,
	    "curren": 164,
	    "curvearrowleft": 8630,
	    "curvearrowright": 8631,
	    "cuvee": 8910,
	    "cuwed": 8911,
	    "cwconint": 8754,
	    "cwint": 8753,
	    "cylcty": 9005,
	    "dArr": 8659,
	    "dHar": 10597,
	    "dagger": 8224,
	    "daleth": 8504,
	    "darr": 8595,
	    "dash": 8208,
	    "dashv": 8867,
	    "dbkarow": 10511,
	    "dblac": 733,
	    "dcaron": 271,
	    "dcy": 1076,
	    "dd": 8518,
	    "ddagger": 8225,
	    "ddarr": 8650,
	    "ddotseq": 10871,
	    "deg": 176,
	    "delta": 948,
	    "demptyv": 10673,
	    "dfisht": 10623,
	    "dfr": 120097,
	    "dharl": 8643,
	    "dharr": 8642,
	    "diam": 8900,
	    "diamond": 8900,
	    "diamondsuit": 9830,
	    "diams": 9830,
	    "die": 168,
	    "digamma": 989,
	    "disin": 8946,
	    "div": 247,
	    "divide": 247,
	    "divideontimes": 8903,
	    "divonx": 8903,
	    "djcy": 1106,
	    "dlcorn": 8990,
	    "dlcrop": 8973,
	    "dollar": 36,
	    "dopf": 120149,
	    "dot": 729,
	    "doteq": 8784,
	    "doteqdot": 8785,
	    "dotminus": 8760,
	    "dotplus": 8724,
	    "dotsquare": 8865,
	    "doublebarwedge": 8966,
	    "downarrow": 8595,
	    "downdownarrows": 8650,
	    "downharpoonleft": 8643,
	    "downharpoonright": 8642,
	    "drbkarow": 10512,
	    "drcorn": 8991,
	    "drcrop": 8972,
	    "dscr": 119993,
	    "dscy": 1109,
	    "dsol": 10742,
	    "dstrok": 273,
	    "dtdot": 8945,
	    "dtri": 9663,
	    "dtrif": 9662,
	    "duarr": 8693,
	    "duhar": 10607,
	    "dwangle": 10662,
	    "dzcy": 1119,
	    "dzigrarr": 10239,
	    "eDDot": 10871,
	    "eDot": 8785,
	    "eacute": 233,
	    "easter": 10862,
	    "ecaron": 283,
	    "ecir": 8790,
	    "ecirc": 234,
	    "ecolon": 8789,
	    "ecy": 1101,
	    "edot": 279,
	    "ee": 8519,
	    "efDot": 8786,
	    "efr": 120098,
	    "eg": 10906,
	    "egrave": 232,
	    "egs": 10902,
	    "egsdot": 10904,
	    "el": 10905,
	    "elinters": 9191,
	    "ell": 8467,
	    "els": 10901,
	    "elsdot": 10903,
	    "emacr": 275,
	    "empty": 8709,
	    "emptyset": 8709,
	    "emptyv": 8709,
	    "emsp13": 8196,
	    "emsp14": 8197,
	    "emsp": 8195,
	    "eng": 331,
	    "ensp": 8194,
	    "eogon": 281,
	    "eopf": 120150,
	    "epar": 8917,
	    "eparsl": 10723,
	    "eplus": 10865,
	    "epsi": 949,
	    "epsilon": 949,
	    "epsiv": 1013,
	    "eqcirc": 8790,
	    "eqcolon": 8789,
	    "eqsim": 8770,
	    "eqslantgtr": 10902,
	    "eqslantless": 10901,
	    "equals": 61,
	    "equest": 8799,
	    "equiv": 8801,
	    "equivDD": 10872,
	    "eqvparsl": 10725,
	    "erDot": 8787,
	    "erarr": 10609,
	    "escr": 8495,
	    "esdot": 8784,
	    "esim": 8770,
	    "eta": 951,
	    "eth": 240,
	    "euml": 235,
	    "euro": 8364,
	    "excl": 33,
	    "exist": 8707,
	    "expectation": 8496,
	    "exponentiale": 8519,
	    "fallingdotseq": 8786,
	    "fcy": 1092,
	    "female": 9792,
	    "ffilig": 64259,
	    "fflig": 64256,
	    "ffllig": 64260,
	    "ffr": 120099,
	    "filig": 64257,
	    "fjlig": 102,
	    "flat": 9837,
	    "fllig": 64258,
	    "fltns": 9649,
	    "fnof": 402,
	    "fopf": 120151,
	    "forall": 8704,
	    "fork": 8916,
	    "forkv": 10969,
	    "fpartint": 10765,
	    "frac12": 189,
	    "frac13": 8531,
	    "frac14": 188,
	    "frac15": 8533,
	    "frac16": 8537,
	    "frac18": 8539,
	    "frac23": 8532,
	    "frac25": 8534,
	    "frac34": 190,
	    "frac35": 8535,
	    "frac38": 8540,
	    "frac45": 8536,
	    "frac56": 8538,
	    "frac58": 8541,
	    "frac78": 8542,
	    "frasl": 8260,
	    "frown": 8994,
	    "fscr": 119995,
	    "gE": 8807,
	    "gEl": 10892,
	    "gacute": 501,
	    "gamma": 947,
	    "gammad": 989,
	    "gap": 10886,
	    "gbreve": 287,
	    "gcirc": 285,
	    "gcy": 1075,
	    "gdot": 289,
	    "ge": 8805,
	    "gel": 8923,
	    "geq": 8805,
	    "geqq": 8807,
	    "geqslant": 10878,
	    "ges": 10878,
	    "gescc": 10921,
	    "gesdot": 10880,
	    "gesdoto": 10882,
	    "gesdotol": 10884,
	    "gesl": 8923,
	    "gesles": 10900,
	    "gfr": 120100,
	    "gg": 8811,
	    "ggg": 8921,
	    "gimel": 8503,
	    "gjcy": 1107,
	    "gl": 8823,
	    "glE": 10898,
	    "gla": 10917,
	    "glj": 10916,
	    "gnE": 8809,
	    "gnap": 10890,
	    "gnapprox": 10890,
	    "gne": 10888,
	    "gneq": 10888,
	    "gneqq": 8809,
	    "gnsim": 8935,
	    "gopf": 120152,
	    "grave": 96,
	    "gscr": 8458,
	    "gsim": 8819,
	    "gsime": 10894,
	    "gsiml": 10896,
	    "gt": 62,
	    "gtcc": 10919,
	    "gtcir": 10874,
	    "gtdot": 8919,
	    "gtlPar": 10645,
	    "gtquest": 10876,
	    "gtrapprox": 10886,
	    "gtrarr": 10616,
	    "gtrdot": 8919,
	    "gtreqless": 8923,
	    "gtreqqless": 10892,
	    "gtrless": 8823,
	    "gtrsim": 8819,
	    "gvertneqq": 8809,
	    "gvnE": 8809,
	    "hArr": 8660,
	    "hairsp": 8202,
	    "half": 189,
	    "hamilt": 8459,
	    "hardcy": 1098,
	    "harr": 8596,
	    "harrcir": 10568,
	    "harrw": 8621,
	    "hbar": 8463,
	    "hcirc": 293,
	    "hearts": 9829,
	    "heartsuit": 9829,
	    "hellip": 8230,
	    "hercon": 8889,
	    "hfr": 120101,
	    "hksearow": 10533,
	    "hkswarow": 10534,
	    "hoarr": 8703,
	    "homtht": 8763,
	    "hookleftarrow": 8617,
	    "hookrightarrow": 8618,
	    "hopf": 120153,
	    "horbar": 8213,
	    "hscr": 119997,
	    "hslash": 8463,
	    "hstrok": 295,
	    "hybull": 8259,
	    "hyphen": 8208,
	    "iacute": 237,
	    "ic": 8291,
	    "icirc": 238,
	    "icy": 1080,
	    "iecy": 1077,
	    "iexcl": 161,
	    "iff": 8660,
	    "ifr": 120102,
	    "igrave": 236,
	    "ii": 8520,
	    "iiiint": 10764,
	    "iiint": 8749,
	    "iinfin": 10716,
	    "iiota": 8489,
	    "ijlig": 307,
	    "imacr": 299,
	    "image": 8465,
	    "imagline": 8464,
	    "imagpart": 8465,
	    "imath": 305,
	    "imof": 8887,
	    "imped": 437,
	    "in": 8712,
	    "incare": 8453,
	    "infin": 8734,
	    "infintie": 10717,
	    "inodot": 305,
	    "int": 8747,
	    "intcal": 8890,
	    "integers": 8484,
	    "intercal": 8890,
	    "intlarhk": 10775,
	    "intprod": 10812,
	    "iocy": 1105,
	    "iogon": 303,
	    "iopf": 120154,
	    "iota": 953,
	    "iprod": 10812,
	    "iquest": 191,
	    "iscr": 119998,
	    "isin": 8712,
	    "isinE": 8953,
	    "isindot": 8949,
	    "isins": 8948,
	    "isinsv": 8947,
	    "isinv": 8712,
	    "it": 8290,
	    "itilde": 297,
	    "iukcy": 1110,
	    "iuml": 239,
	    "jcirc": 309,
	    "jcy": 1081,
	    "jfr": 120103,
	    "jmath": 567,
	    "jopf": 120155,
	    "jscr": 119999,
	    "jsercy": 1112,
	    "jukcy": 1108,
	    "kappa": 954,
	    "kappav": 1008,
	    "kcedil": 311,
	    "kcy": 1082,
	    "kfr": 120104,
	    "kgreen": 312,
	    "khcy": 1093,
	    "kjcy": 1116,
	    "kopf": 120156,
	    "kscr": 120000,
	    "lAarr": 8666,
	    "lArr": 8656,
	    "lAtail": 10523,
	    "lBarr": 10510,
	    "lE": 8806,
	    "lEg": 10891,
	    "lHar": 10594,
	    "lacute": 314,
	    "laemptyv": 10676,
	    "lagran": 8466,
	    "lambda": 955,
	    "lang": 10216,
	    "langd": 10641,
	    "langle": 10216,
	    "lap": 10885,
	    "laquo": 171,
	    "larr": 8592,
	    "larrb": 8676,
	    "larrbfs": 10527,
	    "larrfs": 10525,
	    "larrhk": 8617,
	    "larrlp": 8619,
	    "larrpl": 10553,
	    "larrsim": 10611,
	    "larrtl": 8610,
	    "lat": 10923,
	    "latail": 10521,
	    "late": 10925,
	    "lates": 10925,
	    "lbarr": 10508,
	    "lbbrk": 10098,
	    "lbrace": 123,
	    "lbrack": 91,
	    "lbrke": 10635,
	    "lbrksld": 10639,
	    "lbrkslu": 10637,
	    "lcaron": 318,
	    "lcedil": 316,
	    "lceil": 8968,
	    "lcub": 123,
	    "lcy": 1083,
	    "ldca": 10550,
	    "ldquo": 8220,
	    "ldquor": 8222,
	    "ldrdhar": 10599,
	    "ldrushar": 10571,
	    "ldsh": 8626,
	    "le": 8804,
	    "leftarrow": 8592,
	    "leftarrowtail": 8610,
	    "leftharpoondown": 8637,
	    "leftharpoonup": 8636,
	    "leftleftarrows": 8647,
	    "leftrightarrow": 8596,
	    "leftrightarrows": 8646,
	    "leftrightharpoons": 8651,
	    "leftrightsquigarrow": 8621,
	    "leftthreetimes": 8907,
	    "leg": 8922,
	    "leq": 8804,
	    "leqq": 8806,
	    "leqslant": 10877,
	    "les": 10877,
	    "lescc": 10920,
	    "lesdot": 10879,
	    "lesdoto": 10881,
	    "lesdotor": 10883,
	    "lesg": 8922,
	    "lesges": 10899,
	    "lessapprox": 10885,
	    "lessdot": 8918,
	    "lesseqgtr": 8922,
	    "lesseqqgtr": 10891,
	    "lessgtr": 8822,
	    "lesssim": 8818,
	    "lfisht": 10620,
	    "lfloor": 8970,
	    "lfr": 120105,
	    "lg": 8822,
	    "lgE": 10897,
	    "lhard": 8637,
	    "lharu": 8636,
	    "lharul": 10602,
	    "lhblk": 9604,
	    "ljcy": 1113,
	    "ll": 8810,
	    "llarr": 8647,
	    "llcorner": 8990,
	    "llhard": 10603,
	    "lltri": 9722,
	    "lmidot": 320,
	    "lmoust": 9136,
	    "lmoustache": 9136,
	    "lnE": 8808,
	    "lnap": 10889,
	    "lnapprox": 10889,
	    "lne": 10887,
	    "lneq": 10887,
	    "lneqq": 8808,
	    "lnsim": 8934,
	    "loang": 10220,
	    "loarr": 8701,
	    "lobrk": 10214,
	    "longleftarrow": 10229,
	    "longleftrightarrow": 10231,
	    "longmapsto": 10236,
	    "longrightarrow": 10230,
	    "looparrowleft": 8619,
	    "looparrowright": 8620,
	    "lopar": 10629,
	    "lopf": 120157,
	    "loplus": 10797,
	    "lotimes": 10804,
	    "lowast": 8727,
	    "lowbar": 95,
	    "loz": 9674,
	    "lozenge": 9674,
	    "lozf": 10731,
	    "lpar": 40,
	    "lparlt": 10643,
	    "lrarr": 8646,
	    "lrcorner": 8991,
	    "lrhar": 8651,
	    "lrhard": 10605,
	    "lrm": 8206,
	    "lrtri": 8895,
	    "lsaquo": 8249,
	    "lscr": 120001,
	    "lsh": 8624,
	    "lsim": 8818,
	    "lsime": 10893,
	    "lsimg": 10895,
	    "lsqb": 91,
	    "lsquo": 8216,
	    "lsquor": 8218,
	    "lstrok": 322,
	    "lt": 60,
	    "ltcc": 10918,
	    "ltcir": 10873,
	    "ltdot": 8918,
	    "lthree": 8907,
	    "ltimes": 8905,
	    "ltlarr": 10614,
	    "ltquest": 10875,
	    "ltrPar": 10646,
	    "ltri": 9667,
	    "ltrie": 8884,
	    "ltrif": 9666,
	    "lurdshar": 10570,
	    "luruhar": 10598,
	    "lvertneqq": 8808,
	    "lvnE": 8808,
	    "mDDot": 8762,
	    "macr": 175,
	    "male": 9794,
	    "malt": 10016,
	    "maltese": 10016,
	    "map": 8614,
	    "mapsto": 8614,
	    "mapstodown": 8615,
	    "mapstoleft": 8612,
	    "mapstoup": 8613,
	    "marker": 9646,
	    "mcomma": 10793,
	    "mcy": 1084,
	    "mdash": 8212,
	    "measuredangle": 8737,
	    "mfr": 120106,
	    "mho": 8487,
	    "micro": 181,
	    "mid": 8739,
	    "midast": 42,
	    "midcir": 10992,
	    "middot": 183,
	    "minus": 8722,
	    "minusb": 8863,
	    "minusd": 8760,
	    "minusdu": 10794,
	    "mlcp": 10971,
	    "mldr": 8230,
	    "mnplus": 8723,
	    "models": 8871,
	    "mopf": 120158,
	    "mp": 8723,
	    "mscr": 120002,
	    "mstpos": 8766,
	    "mu": 956,
	    "multimap": 8888,
	    "mumap": 8888,
	    "nGg": 8921,
	    "nGt": 8811,
	    "nGtv": 8811,
	    "nLeftarrow": 8653,
	    "nLeftrightarrow": 8654,
	    "nLl": 8920,
	    "nLt": 8810,
	    "nLtv": 8810,
	    "nRightarrow": 8655,
	    "nVDash": 8879,
	    "nVdash": 8878,
	    "nabla": 8711,
	    "nacute": 324,
	    "nang": 8736,
	    "nap": 8777,
	    "napE": 10864,
	    "napid": 8779,
	    "napos": 329,
	    "napprox": 8777,
	    "natur": 9838,
	    "natural": 9838,
	    "naturals": 8469,
	    "nbsp": 160,
	    "nbump": 8782,
	    "nbumpe": 8783,
	    "ncap": 10819,
	    "ncaron": 328,
	    "ncedil": 326,
	    "ncong": 8775,
	    "ncongdot": 10861,
	    "ncup": 10818,
	    "ncy": 1085,
	    "ndash": 8211,
	    "ne": 8800,
	    "neArr": 8663,
	    "nearhk": 10532,
	    "nearr": 8599,
	    "nearrow": 8599,
	    "nedot": 8784,
	    "nequiv": 8802,
	    "nesear": 10536,
	    "nesim": 8770,
	    "nexist": 8708,
	    "nexists": 8708,
	    "nfr": 120107,
	    "ngE": 8807,
	    "nge": 8817,
	    "ngeq": 8817,
	    "ngeqq": 8807,
	    "ngeqslant": 10878,
	    "nges": 10878,
	    "ngsim": 8821,
	    "ngt": 8815,
	    "ngtr": 8815,
	    "nhArr": 8654,
	    "nharr": 8622,
	    "nhpar": 10994,
	    "ni": 8715,
	    "nis": 8956,
	    "nisd": 8954,
	    "niv": 8715,
	    "njcy": 1114,
	    "nlArr": 8653,
	    "nlE": 8806,
	    "nlarr": 8602,
	    "nldr": 8229,
	    "nle": 8816,
	    "nleftarrow": 8602,
	    "nleftrightarrow": 8622,
	    "nleq": 8816,
	    "nleqq": 8806,
	    "nleqslant": 10877,
	    "nles": 10877,
	    "nless": 8814,
	    "nlsim": 8820,
	    "nlt": 8814,
	    "nltri": 8938,
	    "nltrie": 8940,
	    "nmid": 8740,
	    "nopf": 120159,
	    "not": 172,
	    "notin": 8713,
	    "notinE": 8953,
	    "notindot": 8949,
	    "notinva": 8713,
	    "notinvb": 8951,
	    "notinvc": 8950,
	    "notni": 8716,
	    "notniva": 8716,
	    "notnivb": 8958,
	    "notnivc": 8957,
	    "npar": 8742,
	    "nparallel": 8742,
	    "nparsl": 11005,
	    "npart": 8706,
	    "npolint": 10772,
	    "npr": 8832,
	    "nprcue": 8928,
	    "npre": 10927,
	    "nprec": 8832,
	    "npreceq": 10927,
	    "nrArr": 8655,
	    "nrarr": 8603,
	    "nrarrc": 10547,
	    "nrarrw": 8605,
	    "nrightarrow": 8603,
	    "nrtri": 8939,
	    "nrtrie": 8941,
	    "nsc": 8833,
	    "nsccue": 8929,
	    "nsce": 10928,
	    "nscr": 120003,
	    "nshortmid": 8740,
	    "nshortparallel": 8742,
	    "nsim": 8769,
	    "nsime": 8772,
	    "nsimeq": 8772,
	    "nsmid": 8740,
	    "nspar": 8742,
	    "nsqsube": 8930,
	    "nsqsupe": 8931,
	    "nsub": 8836,
	    "nsubE": 10949,
	    "nsube": 8840,
	    "nsubset": 8834,
	    "nsubseteq": 8840,
	    "nsubseteqq": 10949,
	    "nsucc": 8833,
	    "nsucceq": 10928,
	    "nsup": 8837,
	    "nsupE": 10950,
	    "nsupe": 8841,
	    "nsupset": 8835,
	    "nsupseteq": 8841,
	    "nsupseteqq": 10950,
	    "ntgl": 8825,
	    "ntilde": 241,
	    "ntlg": 8824,
	    "ntriangleleft": 8938,
	    "ntrianglelefteq": 8940,
	    "ntriangleright": 8939,
	    "ntrianglerighteq": 8941,
	    "nu": 957,
	    "num": 35,
	    "numero": 8470,
	    "numsp": 8199,
	    "nvDash": 8877,
	    "nvHarr": 10500,
	    "nvap": 8781,
	    "nvdash": 8876,
	    "nvge": 8805,
	    "nvgt": 62,
	    "nvinfin": 10718,
	    "nvlArr": 10498,
	    "nvle": 8804,
	    "nvlt": 60,
	    "nvltrie": 8884,
	    "nvrArr": 10499,
	    "nvrtrie": 8885,
	    "nvsim": 8764,
	    "nwArr": 8662,
	    "nwarhk": 10531,
	    "nwarr": 8598,
	    "nwarrow": 8598,
	    "nwnear": 10535,
	    "oS": 9416,
	    "oacute": 243,
	    "oast": 8859,
	    "ocir": 8858,
	    "ocirc": 244,
	    "ocy": 1086,
	    "odash": 8861,
	    "odblac": 337,
	    "odiv": 10808,
	    "odot": 8857,
	    "odsold": 10684,
	    "oelig": 339,
	    "ofcir": 10687,
	    "ofr": 120108,
	    "ogon": 731,
	    "ograve": 242,
	    "ogt": 10689,
	    "ohbar": 10677,
	    "ohm": 937,
	    "oint": 8750,
	    "olarr": 8634,
	    "olcir": 10686,
	    "olcross": 10683,
	    "oline": 8254,
	    "olt": 10688,
	    "omacr": 333,
	    "omega": 969,
	    "omicron": 959,
	    "omid": 10678,
	    "ominus": 8854,
	    "oopf": 120160,
	    "opar": 10679,
	    "operp": 10681,
	    "oplus": 8853,
	    "or": 8744,
	    "orarr": 8635,
	    "ord": 10845,
	    "order": 8500,
	    "orderof": 8500,
	    "ordf": 170,
	    "ordm": 186,
	    "origof": 8886,
	    "oror": 10838,
	    "orslope": 10839,
	    "orv": 10843,
	    "oscr": 8500,
	    "oslash": 248,
	    "osol": 8856,
	    "otilde": 245,
	    "otimes": 8855,
	    "otimesas": 10806,
	    "ouml": 246,
	    "ovbar": 9021,
	    "par": 8741,
	    "para": 182,
	    "parallel": 8741,
	    "parsim": 10995,
	    "parsl": 11005,
	    "part": 8706,
	    "pcy": 1087,
	    "percnt": 37,
	    "period": 46,
	    "permil": 8240,
	    "perp": 8869,
	    "pertenk": 8241,
	    "pfr": 120109,
	    "phi": 966,
	    "phiv": 981,
	    "phmmat": 8499,
	    "phone": 9742,
	    "pi": 960,
	    "pitchfork": 8916,
	    "piv": 982,
	    "planck": 8463,
	    "planckh": 8462,
	    "plankv": 8463,
	    "plus": 43,
	    "plusacir": 10787,
	    "plusb": 8862,
	    "pluscir": 10786,
	    "plusdo": 8724,
	    "plusdu": 10789,
	    "pluse": 10866,
	    "plusmn": 177,
	    "plussim": 10790,
	    "plustwo": 10791,
	    "pm": 177,
	    "pointint": 10773,
	    "popf": 120161,
	    "pound": 163,
	    "pr": 8826,
	    "prE": 10931,
	    "prap": 10935,
	    "prcue": 8828,
	    "pre": 10927,
	    "prec": 8826,
	    "precapprox": 10935,
	    "preccurlyeq": 8828,
	    "preceq": 10927,
	    "precnapprox": 10937,
	    "precneqq": 10933,
	    "precnsim": 8936,
	    "precsim": 8830,
	    "prime": 8242,
	    "primes": 8473,
	    "prnE": 10933,
	    "prnap": 10937,
	    "prnsim": 8936,
	    "prod": 8719,
	    "profalar": 9006,
	    "profline": 8978,
	    "profsurf": 8979,
	    "prop": 8733,
	    "propto": 8733,
	    "prsim": 8830,
	    "prurel": 8880,
	    "pscr": 120005,
	    "psi": 968,
	    "puncsp": 8200,
	    "qfr": 120110,
	    "qint": 10764,
	    "qopf": 120162,
	    "qprime": 8279,
	    "qscr": 120006,
	    "quaternions": 8461,
	    "quatint": 10774,
	    "quest": 63,
	    "questeq": 8799,
	    "quot": 34,
	    "rAarr": 8667,
	    "rArr": 8658,
	    "rAtail": 10524,
	    "rBarr": 10511,
	    "rHar": 10596,
	    "race": 8765,
	    "racute": 341,
	    "radic": 8730,
	    "raemptyv": 10675,
	    "rang": 10217,
	    "rangd": 10642,
	    "range": 10661,
	    "rangle": 10217,
	    "raquo": 187,
	    "rarr": 8594,
	    "rarrap": 10613,
	    "rarrb": 8677,
	    "rarrbfs": 10528,
	    "rarrc": 10547,
	    "rarrfs": 10526,
	    "rarrhk": 8618,
	    "rarrlp": 8620,
	    "rarrpl": 10565,
	    "rarrsim": 10612,
	    "rarrtl": 8611,
	    "rarrw": 8605,
	    "ratail": 10522,
	    "ratio": 8758,
	    "rationals": 8474,
	    "rbarr": 10509,
	    "rbbrk": 10099,
	    "rbrace": 125,
	    "rbrack": 93,
	    "rbrke": 10636,
	    "rbrksld": 10638,
	    "rbrkslu": 10640,
	    "rcaron": 345,
	    "rcedil": 343,
	    "rceil": 8969,
	    "rcub": 125,
	    "rcy": 1088,
	    "rdca": 10551,
	    "rdldhar": 10601,
	    "rdquo": 8221,
	    "rdquor": 8221,
	    "rdsh": 8627,
	    "real": 8476,
	    "realine": 8475,
	    "realpart": 8476,
	    "reals": 8477,
	    "rect": 9645,
	    "reg": 174,
	    "rfisht": 10621,
	    "rfloor": 8971,
	    "rfr": 120111,
	    "rhard": 8641,
	    "rharu": 8640,
	    "rharul": 10604,
	    "rho": 961,
	    "rhov": 1009,
	    "rightarrow": 8594,
	    "rightarrowtail": 8611,
	    "rightharpoondown": 8641,
	    "rightharpoonup": 8640,
	    "rightleftarrows": 8644,
	    "rightleftharpoons": 8652,
	    "rightrightarrows": 8649,
	    "rightsquigarrow": 8605,
	    "rightthreetimes": 8908,
	    "ring": 730,
	    "risingdotseq": 8787,
	    "rlarr": 8644,
	    "rlhar": 8652,
	    "rlm": 8207,
	    "rmoust": 9137,
	    "rmoustache": 9137,
	    "rnmid": 10990,
	    "roang": 10221,
	    "roarr": 8702,
	    "robrk": 10215,
	    "ropar": 10630,
	    "ropf": 120163,
	    "roplus": 10798,
	    "rotimes": 10805,
	    "rpar": 41,
	    "rpargt": 10644,
	    "rppolint": 10770,
	    "rrarr": 8649,
	    "rsaquo": 8250,
	    "rscr": 120007,
	    "rsh": 8625,
	    "rsqb": 93,
	    "rsquo": 8217,
	    "rsquor": 8217,
	    "rthree": 8908,
	    "rtimes": 8906,
	    "rtri": 9657,
	    "rtrie": 8885,
	    "rtrif": 9656,
	    "rtriltri": 10702,
	    "ruluhar": 10600,
	    "rx": 8478,
	    "sacute": 347,
	    "sbquo": 8218,
	    "sc": 8827,
	    "scE": 10932,
	    "scap": 10936,
	    "scaron": 353,
	    "sccue": 8829,
	    "sce": 10928,
	    "scedil": 351,
	    "scirc": 349,
	    "scnE": 10934,
	    "scnap": 10938,
	    "scnsim": 8937,
	    "scpolint": 10771,
	    "scsim": 8831,
	    "scy": 1089,
	    "sdot": 8901,
	    "sdotb": 8865,
	    "sdote": 10854,
	    "seArr": 8664,
	    "searhk": 10533,
	    "searr": 8600,
	    "searrow": 8600,
	    "sect": 167,
	    "semi": 59,
	    "seswar": 10537,
	    "setminus": 8726,
	    "setmn": 8726,
	    "sext": 10038,
	    "sfr": 120112,
	    "sfrown": 8994,
	    "sharp": 9839,
	    "shchcy": 1097,
	    "shcy": 1096,
	    "shortmid": 8739,
	    "shortparallel": 8741,
	    "shy": 173,
	    "sigma": 963,
	    "sigmaf": 962,
	    "sigmav": 962,
	    "sim": 8764,
	    "simdot": 10858,
	    "sime": 8771,
	    "simeq": 8771,
	    "simg": 10910,
	    "simgE": 10912,
	    "siml": 10909,
	    "simlE": 10911,
	    "simne": 8774,
	    "simplus": 10788,
	    "simrarr": 10610,
	    "slarr": 8592,
	    "smallsetminus": 8726,
	    "smashp": 10803,
	    "smeparsl": 10724,
	    "smid": 8739,
	    "smile": 8995,
	    "smt": 10922,
	    "smte": 10924,
	    "smtes": 10924,
	    "softcy": 1100,
	    "sol": 47,
	    "solb": 10692,
	    "solbar": 9023,
	    "sopf": 120164,
	    "spades": 9824,
	    "spadesuit": 9824,
	    "spar": 8741,
	    "sqcap": 8851,
	    "sqcaps": 8851,
	    "sqcup": 8852,
	    "sqcups": 8852,
	    "sqsub": 8847,
	    "sqsube": 8849,
	    "sqsubset": 8847,
	    "sqsubseteq": 8849,
	    "sqsup": 8848,
	    "sqsupe": 8850,
	    "sqsupset": 8848,
	    "sqsupseteq": 8850,
	    "squ": 9633,
	    "square": 9633,
	    "squarf": 9642,
	    "squf": 9642,
	    "srarr": 8594,
	    "sscr": 120008,
	    "ssetmn": 8726,
	    "ssmile": 8995,
	    "sstarf": 8902,
	    "star": 9734,
	    "starf": 9733,
	    "straightepsilon": 1013,
	    "straightphi": 981,
	    "strns": 175,
	    "sub": 8834,
	    "subE": 10949,
	    "subdot": 10941,
	    "sube": 8838,
	    "subedot": 10947,
	    "submult": 10945,
	    "subnE": 10955,
	    "subne": 8842,
	    "subplus": 10943,
	    "subrarr": 10617,
	    "subset": 8834,
	    "subseteq": 8838,
	    "subseteqq": 10949,
	    "subsetneq": 8842,
	    "subsetneqq": 10955,
	    "subsim": 10951,
	    "subsub": 10965,
	    "subsup": 10963,
	    "succ": 8827,
	    "succapprox": 10936,
	    "succcurlyeq": 8829,
	    "succeq": 10928,
	    "succnapprox": 10938,
	    "succneqq": 10934,
	    "succnsim": 8937,
	    "succsim": 8831,
	    "sum": 8721,
	    "sung": 9834,
	    "sup1": 185,
	    "sup2": 178,
	    "sup3": 179,
	    "sup": 8835,
	    "supE": 10950,
	    "supdot": 10942,
	    "supdsub": 10968,
	    "supe": 8839,
	    "supedot": 10948,
	    "suphsol": 10185,
	    "suphsub": 10967,
	    "suplarr": 10619,
	    "supmult": 10946,
	    "supnE": 10956,
	    "supne": 8843,
	    "supplus": 10944,
	    "supset": 8835,
	    "supseteq": 8839,
	    "supseteqq": 10950,
	    "supsetneq": 8843,
	    "supsetneqq": 10956,
	    "supsim": 10952,
	    "supsub": 10964,
	    "supsup": 10966,
	    "swArr": 8665,
	    "swarhk": 10534,
	    "swarr": 8601,
	    "swarrow": 8601,
	    "swnwar": 10538,
	    "szlig": 223,
	    "target": 8982,
	    "tau": 964,
	    "tbrk": 9140,
	    "tcaron": 357,
	    "tcedil": 355,
	    "tcy": 1090,
	    "tdot": 8411,
	    "telrec": 8981,
	    "tfr": 120113,
	    "there4": 8756,
	    "therefore": 8756,
	    "theta": 952,
	    "thetasym": 977,
	    "thetav": 977,
	    "thickapprox": 8776,
	    "thicksim": 8764,
	    "thinsp": 8201,
	    "thkap": 8776,
	    "thksim": 8764,
	    "thorn": 254,
	    "tilde": 732,
	    "times": 215,
	    "timesb": 8864,
	    "timesbar": 10801,
	    "timesd": 10800,
	    "tint": 8749,
	    "toea": 10536,
	    "top": 8868,
	    "topbot": 9014,
	    "topcir": 10993,
	    "topf": 120165,
	    "topfork": 10970,
	    "tosa": 10537,
	    "tprime": 8244,
	    "trade": 8482,
	    "triangle": 9653,
	    "triangledown": 9663,
	    "triangleleft": 9667,
	    "trianglelefteq": 8884,
	    "triangleq": 8796,
	    "triangleright": 9657,
	    "trianglerighteq": 8885,
	    "tridot": 9708,
	    "trie": 8796,
	    "triminus": 10810,
	    "triplus": 10809,
	    "trisb": 10701,
	    "tritime": 10811,
	    "trpezium": 9186,
	    "tscr": 120009,
	    "tscy": 1094,
	    "tshcy": 1115,
	    "tstrok": 359,
	    "twixt": 8812,
	    "twoheadleftarrow": 8606,
	    "twoheadrightarrow": 8608,
	    "uArr": 8657,
	    "uHar": 10595,
	    "uacute": 250,
	    "uarr": 8593,
	    "ubrcy": 1118,
	    "ubreve": 365,
	    "ucirc": 251,
	    "ucy": 1091,
	    "udarr": 8645,
	    "udblac": 369,
	    "udhar": 10606,
	    "ufisht": 10622,
	    "ufr": 120114,
	    "ugrave": 249,
	    "uharl": 8639,
	    "uharr": 8638,
	    "uhblk": 9600,
	    "ulcorn": 8988,
	    "ulcorner": 8988,
	    "ulcrop": 8975,
	    "ultri": 9720,
	    "umacr": 363,
	    "uml": 168,
	    "uogon": 371,
	    "uopf": 120166,
	    "uparrow": 8593,
	    "updownarrow": 8597,
	    "upharpoonleft": 8639,
	    "upharpoonright": 8638,
	    "uplus": 8846,
	    "upsi": 965,
	    "upsih": 978,
	    "upsilon": 965,
	    "upuparrows": 8648,
	    "urcorn": 8989,
	    "urcorner": 8989,
	    "urcrop": 8974,
	    "uring": 367,
	    "urtri": 9721,
	    "uscr": 120010,
	    "utdot": 8944,
	    "utilde": 361,
	    "utri": 9653,
	    "utrif": 9652,
	    "uuarr": 8648,
	    "uuml": 252,
	    "uwangle": 10663,
	    "vArr": 8661,
	    "vBar": 10984,
	    "vBarv": 10985,
	    "vDash": 8872,
	    "vangrt": 10652,
	    "varepsilon": 1013,
	    "varkappa": 1008,
	    "varnothing": 8709,
	    "varphi": 981,
	    "varpi": 982,
	    "varpropto": 8733,
	    "varr": 8597,
	    "varrho": 1009,
	    "varsigma": 962,
	    "varsubsetneq": 8842,
	    "varsubsetneqq": 10955,
	    "varsupsetneq": 8843,
	    "varsupsetneqq": 10956,
	    "vartheta": 977,
	    "vartriangleleft": 8882,
	    "vartriangleright": 8883,
	    "vcy": 1074,
	    "vdash": 8866,
	    "vee": 8744,
	    "veebar": 8891,
	    "veeeq": 8794,
	    "vellip": 8942,
	    "verbar": 124,
	    "vert": 124,
	    "vfr": 120115,
	    "vltri": 8882,
	    "vnsub": 8834,
	    "vnsup": 8835,
	    "vopf": 120167,
	    "vprop": 8733,
	    "vrtri": 8883,
	    "vscr": 120011,
	    "vsubnE": 10955,
	    "vsubne": 8842,
	    "vsupnE": 10956,
	    "vsupne": 8843,
	    "vzigzag": 10650,
	    "wcirc": 373,
	    "wedbar": 10847,
	    "wedge": 8743,
	    "wedgeq": 8793,
	    "weierp": 8472,
	    "wfr": 120116,
	    "wopf": 120168,
	    "wp": 8472,
	    "wr": 8768,
	    "wreath": 8768,
	    "wscr": 120012,
	    "xcap": 8898,
	    "xcirc": 9711,
	    "xcup": 8899,
	    "xdtri": 9661,
	    "xfr": 120117,
	    "xhArr": 10234,
	    "xharr": 10231,
	    "xi": 958,
	    "xlArr": 10232,
	    "xlarr": 10229,
	    "xmap": 10236,
	    "xnis": 8955,
	    "xodot": 10752,
	    "xopf": 120169,
	    "xoplus": 10753,
	    "xotime": 10754,
	    "xrArr": 10233,
	    "xrarr": 10230,
	    "xscr": 120013,
	    "xsqcup": 10758,
	    "xuplus": 10756,
	    "xutri": 9651,
	    "xvee": 8897,
	    "xwedge": 8896,
	    "yacute": 253,
	    "yacy": 1103,
	    "ycirc": 375,
	    "ycy": 1099,
	    "yen": 165,
	    "yfr": 120118,
	    "yicy": 1111,
	    "yopf": 120170,
	    "yscr": 120014,
	    "yucy": 1102,
	    "yuml": 255,
	    "zacute": 378,
	    "zcaron": 382,
	    "zcy": 1079,
	    "zdot": 380,
	    "zeetrf": 8488,
	    "zeta": 950,
	    "zfr": 120119,
	    "zhcy": 1078,
	    "zigrarr": 8669,
	    "zopf": 120171,
	    "zscr": 120015,
	    "zwj": 8205,
	    "zwnj": 8204
	};
	exports.default = entities;


/***/ },
/* 326 */
/***/ function(module, exports) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var TextAlign;
	(function (TextAlign) {
	    TextAlign[TextAlign["NONE"] = 0] = "NONE";
	    TextAlign[TextAlign["CENTER"] = 1] = "CENTER";
	    TextAlign[TextAlign["JUSTIFY"] = 2] = "JUSTIFY";
	    TextAlign[TextAlign["JUSTIFY_ALL"] = 3] = "JUSTIFY_ALL";
	})(TextAlign || (TextAlign = {}));
	exports.default = TextAlign;


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(315);
	var AbstractRenderEngine_1 = __webpack_require__(328);
	var svgUtils_1 = __webpack_require__(324);
	var pathUtils_1 = __webpack_require__(322);
	var TextAlign_1 = __webpack_require__(326);
	/**
	 * @hidden
	 */
	var defaultLayer = function (path) { return svgUtils_1.setSVGAttributes(path, { fill: '#fff' }); };
	var RenderEngineSVG = (function (_super) {
	    tslib_1.__extends(RenderEngineSVG, _super);
	    function RenderEngineSVG() {
	        var _this = _super.call(this) || this;
	        _this.container = null;
	        _this.enableSVGElement = true;
	        _this._svgElement = null;
	        _this._rootGroupElement = null;
	        _this._lineGroups = [];
	        _this._layerGroups = [];
	        _this._glyphPaths = [];
	        _this._layers = [];
	        _this._glyphPadding = [0, 0, 0, 0];
	        _this._glyphPaddingIsPx = false;
	        return _this;
	    }
	    RenderEngineSVG.prototype.render = function (copyProps, fontProps, renderOptions) {
	        var _this = this;
	        _super.prototype.render.call(this, copyProps, fontProps, renderOptions);
	        this.clearRender();
	        if (!this._rootGroupElement) {
	            this._rootGroupElement = svgUtils_1.createSVGElement('g');
	            this._rootGroupElement.classList.add('fp-svg-root');
	        }
	        if (this.enableSVGElement && !this._svgElement) {
	            this.createSVGElement();
	            this._svgElement.appendChild(this._rootGroupElement);
	        }
	        var layers = this._layers.length ? this._layers : [defaultLayer];
	        var lineIndex = 0;
	        var pathIndex = 0;
	        layers.forEach(function (processPath, layerIndex) {
	            _this._layerGroups[layerIndex] = svgUtils_1.createSVGElement('g');
	            _this._layerGroups[layerIndex].classList.add("fp-svg-layer-" + layerIndex);
	            _this._rootGroupElement.appendChild(_this._layerGroups[layerIndex]);
	            _this.positioning.forEach(function (line, localLineIndex) {
	                _this._lineGroups[lineIndex] = svgUtils_1.createSVGElement('g');
	                _this._lineGroups[lineIndex].classList.add("fp-svg-line-" + localLineIndex);
	                _this._layerGroups[layerIndex].appendChild(_this._lineGroups[lineIndex]);
	                svgUtils_1.positionTransformSVG(_this._lineGroups[lineIndex], line.x, line.y);
	                line.glyphs.forEach(function (glyphPositioning) {
	                    var glyphIndex = glyphPositioning.index, x = glyphPositioning.x, y = glyphPositioning.y;
	                    _this._glyphPaths[pathIndex] = svgUtils_1.createSVGElement('path');
	                    svgUtils_1.positionTransformSVG(_this._glyphPaths[pathIndex], x, y);
	                    var charCode = _this.copyProps.charCodes[glyphIndex];
	                    var glyph = _this.copyProps.glyphs[charCode];
	                    var instructions = (glyph && glyph.instructions) || [];
	                    svgUtils_1.setSVGAttributes(_this._glyphPaths[pathIndex], {
	                        d: pathUtils_1.instructionsToDataString(instructions)
	                    });
	                    processPath(_this._glyphPaths[pathIndex], _this.unitsPerPx);
	                    _this._lineGroups[lineIndex].appendChild(_this._glyphPaths[pathIndex]);
	                    pathIndex++;
	                });
	                _this._layerGroups[layerIndex].appendChild(_this._lineGroups[lineIndex]);
	                lineIndex++;
	            });
	        });
	        this.scaleSVGElement();
	    };
	    RenderEngineSVG.prototype.clearRender = function () {
	        this._layerGroups.forEach(function (layerGroup) {
	            if (layerGroup.parentElement) {
	                layerGroup.parentElement.removeChild(layerGroup);
	            }
	        });
	        this._layerGroups.length = 0;
	        this._glyphPaths.length = 0;
	        this._lineGroups.length = 0;
	    };
	    RenderEngineSVG.prototype.addLayer = function (processPath) {
	        this._layers.push(processPath);
	    };
	    Object.defineProperty(RenderEngineSVG.prototype, "svgElement", {
	        get: function () {
	            return this._svgElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderEngineSVG.prototype, "rootGroupElement", {
	        get: function () {
	            return this._rootGroupElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderEngineSVG.prototype, "lineGroups", {
	        get: function () {
	            return this._lineGroups;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderEngineSVG.prototype, "layerGroups", {
	        get: function () {
	            return this._layerGroups;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RenderEngineSVG.prototype.getGlyphOffset = function () {
	        var _this = this;
	        return this._glyphPadding.map(function (x) { return x * (_this._glyphPaddingIsPx ? _this.unitsPerPx : 1); });
	    };
	    RenderEngineSVG.prototype.setGlyphPadding = function (_a, isPx) {
	        var _b = _a.top, top = _b === void 0 ? 0 : _b, _c = _a.right, right = _c === void 0 ? 0 : _c, _d = _a.bottom, bottom = _d === void 0 ? 0 : _d, _e = _a.left, left = _e === void 0 ? 0 : _e;
	        if (isPx === void 0) { isPx = false; }
	        this._glyphPadding = [top, right, bottom, left];
	        this._glyphPaddingIsPx = isPx;
	    };
	    RenderEngineSVG.prototype.scaleSVGElement = function () {
	        if (this.enableSVGElement && this._svgElement) {
	            var width = Math.max.apply(Math, this.positioning.map(function (pos) { return pos.width; }));
	            if (this.renderOptions.align !== TextAlign_1.default.NONE && this.renderOptions.bounds) {
	                width = this.renderOptions.bounds.getWidth() * this.unitsPerPx;
	            }
	            var lastLinePositioning = this.positioning[this.positioning.length - 1];
	            var height = lastLinePositioning.y + lastLinePositioning.height;
	            svgUtils_1.setSVGAttributes(this._svgElement, {
	                viewBox: "0 0 " + width + " " + height,
	                width: width / this.unitsPerPx + "px",
	                height: height / this.unitsPerPx + "px"
	            });
	        }
	    };
	    RenderEngineSVG.prototype.createSVGElement = function () {
	        this._svgElement = svgUtils_1.createSVGElement('svg');
	        svgUtils_1.setSVGAttributes(this._svgElement, {
	            preserveAspectRatio: "xMinYMin meet",
	            version: "1.1",
	        });
	        this._svgElement.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg");
	        this._svgElement.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
	        return this._svgElement;
	    };
	    return RenderEngineSVG;
	}(AbstractRenderEngine_1.default));
	exports.default = RenderEngineSVG;


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module lib/engines/AbstractRenderEngine
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(315);
	var seng_disposable_1 = __webpack_require__(317);
	var TextAlign_1 = __webpack_require__(326);
	var AbstractRenderEngine = (function (_super) {
	    tslib_1.__extends(AbstractRenderEngine, _super);
	    function AbstractRenderEngine() {
	        var _this = _super.call(this) || this;
	        _this.getGlyphAdvX = function () {
	            var _a = _this, _b = _a.copyProps, charCodes = _b.charCodes, glyphs = _b.glyphs, defaultAdvX = _a.fontProps.horizAdvX;
	            return charCodes.map(function (charCode) {
	                var glyph = glyphs[charCode];
	                var advX = glyph && glyph.horizAdvX;
	                return (typeof advX === 'undefined' || advX === null) ? defaultAdvX : advX;
	            });
	        };
	        _this.calculateLineHeight = function () { return _this.fontProps.unitsPerEm * _this.renderOptions.lineHeight; };
	        _this.calculateUnitsPerPx = function () { return _this.fontProps.unitsPerEm / _this.renderOptions.fontSize; };
	        return _this;
	    }
	    AbstractRenderEngine.prototype.render = function (copyProps, fontProps, renderOptions) {
	        this.copyProps = copyProps;
	        this.fontProps = fontProps;
	        this.renderOptions = renderOptions;
	        this.lineHeight = this.calculateLineHeight();
	        this.unitsPerPx = this.calculateUnitsPerPx();
	        this.glyphAdvX = this.getGlyphAdvX();
	        this.glyphOffset = this.getGlyphOffset();
	        this.lineBreaks = this.calcLineBreaks();
	        this.positioning = this.calculatePositioning();
	    };
	    AbstractRenderEngine.prototype.calcLineBreaks = function () {
	        var _this = this;
	        var lineBreaks = [];
	        if (this.renderOptions.bounds) {
	            if (this.renderOptions.bounds.isFixed) {
	                var width_1 = this.renderOptions.bounds.getWidth() * this.calculateUnitsPerPx();
	                var cx_1 = 0;
	                var tokenWidth_1 = 0;
	                var breakOption_1 = null;
	                this.copyProps.characters.forEach(function (character, index) {
	                    var horizAdvX = _this.glyphAdvX[index] + _this.glyphOffset[1] + _this.glyphOffset[3];
	                    if (character === ' ') {
	                        if (breakOption_1 && (cx_1 > width_1)) {
	                            lineBreaks.push(breakOption_1);
	                            breakOption_1 = null;
	                            cx_1 = tokenWidth_1;
	                        }
	                        breakOption_1 = { index: index, remove: true, add: null };
	                        tokenWidth_1 = 0;
	                    }
	                    else if (character === '-') {
	                        if (breakOption_1 && (cx_1 + horizAdvX - _this.copyProps.kernings[index] > width_1)) {
	                            lineBreaks.push(breakOption_1);
	                            breakOption_1 = null;
	                            cx_1 = tokenWidth_1;
	                        }
	                        breakOption_1 = { index: index + 1, remove: false, add: null };
	                        tokenWidth_1 = horizAdvX;
	                    }
	                    else {
	                        tokenWidth_1 += horizAdvX;
	                    }
	                    cx_1 += horizAdvX - _this.copyProps.kernings[index];
	                });
	                if (breakOption_1 && (cx_1 > width_1)) {
	                    lineBreaks.push(breakOption_1);
	                }
	            }
	            else {
	                throw new Error('TODO');
	            }
	        }
	        return lineBreaks;
	    };
	    AbstractRenderEngine.prototype.calculatePositioning = function () {
	        var _this = this;
	        var _a = this, _b = _a.fontProps, ascent = _b.ascent, descent = _b.descent, lineHeight = _a.lineHeight, glyphAdvX = _a.glyphAdvX, lineBreaks = _a.lineBreaks, copyProps = _a.copyProps;
	        var lineY = ascent + (lineHeight - ascent + descent) * 0.5 + this.glyphOffset[0];
	        var lines = [];
	        var currentLine = 0;
	        var glyphX = 0;
	        glyphAdvX.forEach(function (horizAdvX, index) {
	            var lineBreak = lineBreaks.find(function (lineBreak) { return lineBreak.index === index; });
	            if (lineBreak) {
	                currentLine++;
	                lineY += lineHeight + _this.glyphOffset[2] + _this.glyphOffset[0];
	                glyphX = 0;
	                if (lineBreak.remove) {
	                    return;
	                }
	            }
	            if (!lines[currentLine]) {
	                lines[currentLine] = {
	                    x: 0,
	                    y: lineY,
	                    width: 0,
	                    height: lineHeight + _this.glyphOffset[2] + _this.glyphOffset[0],
	                    glyphs: []
	                };
	            }
	            glyphX += _this.glyphOffset[3];
	            lines[currentLine].glyphs.push({ index: index, x: glyphX, y: 0 });
	            glyphX += horizAdvX - copyProps.kernings[index] + _this.glyphOffset[1];
	            lines[currentLine].width = glyphX;
	        });
	        if (this.renderOptions.exactFit) {
	            var boundingRects_1 = lines.map(function (line, lineIndex) {
	                var isLineEdge = (lineIndex === 0) || (lineIndex === lines.length - 1);
	                return line.glyphs.map(function (glyphPositioning, glyphIndex) {
	                    var isGlyphEdge = (glyphIndex === 0) || (glyphIndex === line.glyphs.length - 1);
	                    if (isGlyphEdge || isLineEdge) {
	                        var charCode = _this.copyProps.charCodes[glyphPositioning.index];
	                        var glyph = _this.copyProps.glyphs[charCode];
	                        return glyph.getBoundingRect();
	                    }
	                    return null;
	                });
	            });
	            if (lines.length) {
	                // remove top gap
	                var topGap_1 = ascent + boundingRects_1[0].reduce(function (minY, boundingRect) { return Math.min(minY, boundingRect.minY); }, Number.POSITIVE_INFINITY);
	                lines[0].height -= topGap_1;
	                lines.forEach(function (line) { return (line.y -= topGap_1); });
	                // remove bottom gap
	                var maxY = boundingRects_1[boundingRects_1.length - 1].reduce(function (maxY, boundingRect) { return Math.max(maxY, boundingRect.maxY); }, Number.NEGATIVE_INFINITY);
	                lines[lines.length - 1].height -= lineHeight - maxY;
	                // remove horizontal gaps
	                lines.forEach(function (line, lineIndex) {
	                    if (line.glyphs.length) {
	                        var boundings = boundingRects_1[lineIndex];
	                        var leftGap = boundings[0].minX;
	                        line.x -= leftGap;
	                        var rightGap = boundings[boundings.length - 1].minX;
	                        line.width -= leftGap + rightGap;
	                    }
	                });
	            }
	        }
	        if (this.renderOptions.align === TextAlign_1.default.CENTER && this.renderOptions.bounds) {
	            var width_2 = this.renderOptions.bounds.getWidth() * this.unitsPerPx;
	            lines.forEach(function (line) {
	                line.x = (width_2 - line.width) / 2;
	            });
	        }
	        return lines;
	    };
	    AbstractRenderEngine.prototype.getGlyphOffset = function () {
	        return [0, 0, 0, 0];
	    };
	    AbstractRenderEngine.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	    };
	    return AbstractRenderEngine;
	}(seng_disposable_1.default));
	exports.default = AbstractRenderEngine;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(315);
	var AbstractRenderEngine_1 = __webpack_require__(328);
	var RenderEngineCanvas = (function (_super) {
	    tslib_1.__extends(RenderEngineCanvas, _super);
	    function RenderEngineCanvas() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    RenderEngineCanvas.prototype.render = function (copyProps, fontProps, renderOptions) {
	        var _this = this;
	        _super.prototype.render.call(this, copyProps, fontProps, renderOptions);
	        if (!this.target) {
	            throw new ReferenceError('Please specify a target to render to.');
	        }
	        this.target.fillStyle = '#ffffff';
	        this.positioning.forEach(function (_a) {
	            var glyphs = _a.glyphs, lineX = _a.x, lineY = _a.y;
	            glyphs.forEach(function (_a) {
	                var glyphX = _a.x, glyphY = _a.y, glyphIndex = _a.index;
	                var glyph = copyProps.glyphs[copyProps.charCodes[glyphIndex]];
	                var canvasCommands = glyph.getCanvasCommands();
	                canvasCommands.forEach(function (_a) {
	                    var command = _a.command, params = _a.params;
	                    var absParams = params.map(function (param, paramIndex) {
	                        var isX = !(paramIndex % 2);
	                        var base = isX ? (lineX + glyphX) : (lineY + glyphY);
	                        return (base + param) / _this.unitsPerPx;
	                    });
	                    (_b = _this.target)[command].apply(_b, absParams);
	                    if (command === 'closePath') {
	                        _this.target.fill();
	                    }
	                    var _b;
	                });
	            });
	        });
	    };
	    return RenderEngineCanvas;
	}(AbstractRenderEngine_1.default));
	exports.default = RenderEngineCanvas;


/***/ },
/* 330 */
/***/ function(module, exports) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	// todo: implement update on resize
	var RenderBoundsElementWidth = (function () {
	    function RenderBoundsElementWidth(element) {
	        this.element = element;
	        this.isFixed = true;
	        this.width = null;
	    }
	    RenderBoundsElementWidth.prototype.update = function () {
	        this.width = this.element.offsetWidth;
	    };
	    RenderBoundsElementWidth.prototype.getWidth = function () {
	        if (this.width === null) {
	            this.update();
	        }
	        return this.width;
	    };
	    RenderBoundsElementWidth.prototype.contains = function (x) {
	        if (this.width === null) {
	            this.update();
	        }
	        return x <= this.width;
	    };
	    return RenderBoundsElementWidth;
	}());
	exports.default = RenderBoundsElementWidth;


/***/ },
/* 331 */
/***/ function(module, exports) {

	/**
	 * @module fontpainter
	 */ /** */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var RenderBoundsFixedWidth = (function () {
	    function RenderBoundsFixedWidth(width) {
	        this.width = width;
	        this.isFixed = true;
	    }
	    RenderBoundsFixedWidth.prototype.getWidth = function () {
	        return this.width;
	    };
	    RenderBoundsFixedWidth.prototype.contains = function (x) {
	        return x <= this.width;
	    };
	    return RenderBoundsFixedWidth;
	}());
	exports.default = RenderBoundsFixedWidth;


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(333);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(308)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-simple.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-simple.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(304)();
	// imports
	
	
	// module
	exports.push([module.id, ".example-simple {\n  width: 100%; }\n", ""]);
	
	// exports


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.template = exports.defaultText = exports.menuName = exports.Demo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(335);
	
	Object.defineProperty(exports, 'template', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_template).default;
		}
	});
	
	var _fontpainter = __webpack_require__(312);
	
	var _fontpainter2 = _interopRequireDefault(_fontpainter);
	
	__webpack_require__(336);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Demo = exports.Demo = function () {
		function Demo() {
			_classCallCheck(this, Demo);
	
			this.immediate = true;
	
			this.container = document.querySelector('.example-animated-border');
			this.painter = new _fontpainter2.default();
			this.engine = new _fontpainter.RenderEngineSVG();
			this.painter.setEngine(this.engine);
			this.painter.fontSize = 80;
			this.painter.align = _fontpainter.TextAlign.CENTER;
			this.painter.bounds = new _fontpainter.RenderBoundsElementWidth(this.container);
	
			this.engine.addLayer(function (path, unitsPerPx) {
				path.setAttribute('stroke', '#e56');
				path.setAttribute('stroke-width', 6 * unitsPerPx);
				path.setAttribute('stroke-dasharray', 30 * unitsPerPx + ',' + 60 * unitsPerPx);
			});
			this.engine.addLayer(function (path) {
				return path.setAttribute('fill', '#ddd');
			});
			this.engine.setGlyphPadding({ top: 3, left: 3, bottom: 3, right: 3 }, true);
		}
	
		_createClass(Demo, [{
			key: 'render',
			value: function render() {
				var _this = this;
	
				var copy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var fontPath = arguments[1];
	
				this.painter.loadFont(fontPath, _fontpainter.FontParserSVG);
				this.painter.getFont().then(function () {
					_this.painter.paint(copy);
					_this.container.appendChild(_this.engine.svgElement);
				});
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.painter.dispose();
			}
		}]);
	
		return Demo;
	}();
	
	var menuName = exports.menuName = 'Animated Border';
	
	var defaultText = exports.defaultText = 'Look at that fancy border!!';

/***/ },
/* 335 */
/***/ function(module, exports) {

	module.exports = "<div class=\"example-animated-border\">\r\n\r\n</div>\r\n"

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(337);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(308)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-animated-border.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-animated-border.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(304)();
	// imports
	
	
	// module
	exports.push([module.id, ".example-animated-border {\n  width: 100%; }\n  .example-animated-border .fp-svg-layer-0 path {\n    animation: stroke_offset 12s ease-in-out 0s infinite alternate both; }\n\n@keyframes stroke_offset {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 5000; } }\n", ""]);
	
	// exports


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.template = exports.defaultText = exports.menuName = exports.Demo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(339);
	
	Object.defineProperty(exports, 'template', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_template).default;
		}
	});
	
	var _fontpainter = __webpack_require__(312);
	
	var _fontpainter2 = _interopRequireDefault(_fontpainter);
	
	__webpack_require__(340);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Demo = exports.Demo = function () {
		function Demo() {
			_classCallCheck(this, Demo);
	
			this.immediate = true;
	
			this.gradientInitialized = false;
			this.mask = null;
			this.container = document.querySelector('.example-animated-fill');
			this.painter = new _fontpainter2.default();
			this.engine = new _fontpainter.RenderEngineSVG();
			this.painter.setEngine(this.engine);
			this.painter.align = _fontpainter.TextAlign.CENTER;
			this.painter.bounds = new _fontpainter.RenderBoundsElementWidth(this.container);
			this.painter.exactFit = true;
			this.painter.lineHeight = 1;
			this.painter.fontSize = 80;
	
			this.gradientContainer = document.querySelector('.gradient-container');
	
			this.engine.addLayer(function (path, unitsPerPx) {
				path.setAttribute('stroke', '#000');
				path.setAttribute('stroke-width', 10 * unitsPerPx);
			});
	
			this.engine.addLayer(function (path) {
				return path.setAttribute('fill', '#fff');
			});
	
			this.engine.setGlyphPadding({ top: 5, left: 5, bottom: 5, right: 5 }, true);
		}
	
		_createClass(Demo, [{
			key: 'render',
			value: function render() {
				var _this = this;
	
				var copy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var fontPath = arguments[1];
	
				this.painter.loadFont(fontPath, _fontpainter.FontParserSVG);
	
				this.painter.getFont().then(function () {
					_this.painter.paint(copy);
					_this.container.appendChild(_this.engine.svgElement);
	
					if (!_this.gradientInitialized) {
						_this.gradientInitialized = true;
						_this.engine.svgElement.appendChild(_this.gradientContainer);
						var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
						_this.engine.svgElement.insertBefore(defs, _this.engine.svgElement.firstChild);
						_this.mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
						_this.mask.setAttribute('id', 'textMask');
	
						defs.appendChild(_this.mask);
						_this.gradientContainer.setAttributeNS(null, 'mask', "url(#textMask)");
					}
	
					while (_this.mask.firstChild) {
						_this.mask.removeChild(_this.mask.firstChild);
					}
					_this.mask.appendChild(_this.engine.layerGroups[1]);
				});
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.painter.dispose();
			}
		}]);
	
		return Demo;
	}();
	
	var menuName = exports.menuName = 'Animated Fill';
	
	var defaultText = exports.defaultText = 'SO MUCH WOW';

/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = "<div class=\"example-animated-fill\">\r\n\r\n</div>\r\n\r\n<svg class=\"gradient-svg\">\r\n\t<g class=\"gradient-container\">\r\n\t\t<g class=\"gradient-svg-group\">\r\n\t\t\t<rect x=\"0\" y=\"0\" width=\"100%\" height=\"34%\" class=\"gradient-step-1\" />\r\n\t\t\t<rect x=\"0\" y=\"33%\" width=\"100%\" height=\"34%\" class=\"gradient-step-2\" />\r\n\t\t\t<rect x=\"0\" y=\"66%\" width=\"100%\" height=\"35%\" class=\"gradient-step-3\" />\r\n\t\t\t<rect x=\"0\" y=\"100%\" width=\"100%\" height=\"34%\" class=\"gradient-step-1\" />\r\n\t\t\t<rect x=\"0\" y=\"133%\" width=\"100%\" height=\"34%\" class=\"gradient-step-2\" />\r\n\t\t\t<rect x=\"0\" y=\"166%\" width=\"100%\" height=\"35%\" class=\"gradient-step-3\" />\r\n\t\t</g>\r\n\t</g>\r\n</svg>\r\n"

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(341);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(308)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-animated-fill.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-animated-fill.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(304)();
	// imports
	
	
	// module
	exports.push([module.id, ".example-animated-fill > svg {\n  display: inline-block; }\n\n.example-animated-fill .gradient-svg {\n  display: none; }\n\n.example-animated-fill .gradient-svg-group {\n  animation: fill_rotate 1.5s linear 0s infinite normal both; }\n\n.example-animated-fill .gradient-step-1 {\n  fill: #ff1c42; }\n\n.example-animated-fill .gradient-step-2 {\n  fill: #ff7a1f; }\n\n.example-animated-fill .gradient-step-3 {\n  fill: #ffd529; }\n\n@keyframes fill_rotate {\n  0% {\n    transform: translate(0, -50%); }\n  100% {\n    transform: translate(0, 0); } }\n", ""]);
	
	// exports


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.template = exports.defaultText = exports.menuName = exports.Demo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(343);
	
	Object.defineProperty(exports, 'template', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_template).default;
		}
	});
	
	var _fontpainter = __webpack_require__(312);
	
	var _fontpainter2 = _interopRequireDefault(_fontpainter);
	
	__webpack_require__(344);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Demo = exports.Demo = function () {
		function Demo() {
			_classCallCheck(this, Demo);
	
			this.immediate = true;
	
			this.container = document.querySelector('.example-simple-canvas');
			this.canvas = document.querySelector('.main-canvas');
			this.painter = new _fontpainter2.default();
			this.engine = new _fontpainter.RenderEngineCanvas();
			this.engine.target = this.canvas.getContext('2d');
			this.painter.setEngine(this.engine);
			this.painter.fontSize = 60;
			this.painter.align = _fontpainter.TextAlign.CENTER;
			this.painter.bounds = new _fontpainter.RenderBoundsElementWidth(this.container);
		}
	
		_createClass(Demo, [{
			key: 'render',
			value: function render() {
				var _this = this;
	
				var copy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var fontPath = arguments[1];
	
				this.painter.loadFont(fontPath, _fontpainter.FontParserSVG);
	
				this.canvas.setAttribute('width', this.canvas.offsetWidth);
				this.canvas.setAttribute('height', this.canvas.offsetHeight);
				this.painter.getFont().then(function () {
					_this.painter.paint(copy);
				});
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.painter.dispose();
			}
		}]);
	
		return Demo;
	}();
	
	var menuName = exports.menuName = 'Simple Canvas';
	
	var defaultText = exports.defaultText = 'Wow, look at me!!1 I\'m a canvas!';

/***/ },
/* 343 */
/***/ function(module, exports) {

	module.exports = "<div class=\"example-simple-canvas\">\r\n\t<canvas class=\"main-canvas\"></canvas>\r\n</div>\r\n"

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(345);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(308)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-simple-canvas.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-simple-canvas.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(304)();
	// imports
	
	
	// module
	exports.push([module.id, ".example-simple-canvas {\n  width: 100%;\n  height: 800px; }\n  .example-simple-canvas > canvas {\n    width: 100%;\n    height: 100%; }\n", ""]);
	
	// exports


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.template = exports.defaultText = exports.menuName = exports.Demo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(347);
	
	Object.defineProperty(exports, 'template', {
		enumerable: true,
		get: function get() {
			return _interopRequireDefault(_template).default;
		}
	});
	
	var _fontpainter = __webpack_require__(312);
	
	var _fontpainter2 = _interopRequireDefault(_fontpainter);
	
	__webpack_require__(348);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Demo = exports.Demo = function () {
		function Demo() {
			_classCallCheck(this, Demo);
	
			this.immediate = true;
	
			this.container = document.querySelector('.example-exact-fit');
			this.painter = new _fontpainter2.default();
			this.engine = new _fontpainter.RenderEngineSVG();
			this.painter.setEngine(this.engine);
			this.painter.fontSize = 45;
			this.painter.lineHeight = 1;
			this.painter.exactFit = true;
			this.painter.bounds = new _fontpainter.RenderBoundsElementWidth(this.container);
		}
	
		_createClass(Demo, [{
			key: 'render',
			value: function render() {
				var _this = this;
	
				var copy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var fontPath = arguments[1];
	
				this.painter.loadFont(fontPath, _fontpainter.FontParserSVG);
	
				this.painter.getFont().then(function () {
					_this.painter.paint(copy);
					_this.container.appendChild(_this.engine.svgElement);
				});
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.painter.dispose();
			}
		}]);
	
		return Demo;
	}();
	
	var menuName = exports.menuName = 'Exact Fit';
	
	var defaultText = exports.defaultText = 'The red box fits exactly around me';

/***/ },
/* 347 */
/***/ function(module, exports) {

	module.exports = "<div class=\"example-exact-fit\">\r\n</div>\r\n"

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(349);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(308)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-exact-fit.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./example-exact-fit.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(304)();
	// imports
	
	
	// module
	exports.push([module.id, ".example-exact-fit {\n  width: 100%;\n  text-align: center; }\n  .example-exact-fit svg {\n    outline: 2px solid #ff1c42;\n    display: inline-block; }\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map