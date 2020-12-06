
<!DOCTYPE html>
<html dir='ltr' lang='pt-br'>
<head>
 <meta content='yes' name='mobile-web-app-capable'/>
<meta content='yes' name='apple-mobile-web-app-capable'/>
<meta content='Trapashow ' name='application-name'/>
<meta content='Trapashow ' name='apple-mobile-web-app-title'/>
<meta content='#ffffff' name='theme-color'/>
<meta content='#ffffff' name='msapplication-navbutton-color'/>
<meta content='black-translucent' name='apple-mobile-web-app-status-bar-style'/>
<meta content='https://www.trapashowplay.com' name='msapplication-starturl'/>
<meta content='width=device-width, initial-scale=1' name='viewport'/>
<meta content='#000000' name='theme-color'/>
<meta content='#000000' name='background_color'/>
<link href='https://1.bp.blogspot.com/-rQMgkiAAhww/X8IUHzLo5vI/AAAAAAAABJs/eswZ_kZuS_wB_aCWxjcqwvPcGvN0pO3fACLcBGAsYHQ/s192/android-icon-192x192.png' rel='icon'/>
<link href='https://1.bp.blogspot.com/-rQMgkiAAhww/X8IUHzLo5vI/AAAAAAAABJs/eswZ_kZuS_wB_aCWxjcqwvPcGvN0pO3fACLcBGAsYHQ/s192/android-icon-192x192.png' rel='apple-touch-icon'/>
<link href='https://1.bp.blogspot.com/-Jy5fmPD3-L8/X8IgyQYiT5I/AAAAAAAABLs/Ht0skslhED4KqkSyZzEs3AYWPydJNRGHwCLcBGAsYHQ/s512/trapashow-play-app-icon.png' rel='icon'/>
<link href='https://1.bp.blogspot.com/-Jy5fmPD3-L8/X8IgyQYiT5I/AAAAAAAABLs/Ht0skslhED4KqkSyZzEs3AYWPydJNRGHwCLcBGAsYHQ/s512/trapashow-play-app-icon.png' rel='apple-touch-icon'/>
<link href='https://1.bp.blogspot.com/-bRAFNE5sib4/X8IUKRQzvuI/AAAAAAAABKI/IBMNz8aPyAc7ebAIAtTFJrGMW9L6IgWdwCLcBGAsYHQ/s180/apple-icon-180x180.png' rel='icon'/>
<link href='https://1.bp.blogspot.com/-bRAFNE5sib4/X8IUKRQzvuI/AAAAAAAABKI/IBMNz8aPyAc7ebAIAtTFJrGMW9L6IgWdwCLcBGAsYHQ/s180/apple-icon-180x180.png' rel='apple-touch-icon'/>
<link href='https://1.bp.blogspot.com/-gGBOvXZgE0I/X8IULzdR9-I/AAAAAAAABKg/GU_UBbqNlQ0IZBt_Hz-b0xJV6KW0JLtbACLcBGAsYHQ/s32/favicon-32x32.png' rel='icon'/>
<link href='https://1.bp.blogspot.com/-gGBOvXZgE0I/X8IULzdR9-I/AAAAAAAABKg/GU_UBbqNlQ0IZBt_Hz-b0xJV6KW0JLtbACLcBGAsYHQ/s32/favicon-32x32.png' rel='apple-touch-icon'/>
<link href='https://1.bp.blogspot.com/-Wy22LJP_DNA/X8IUMQK2y5I/AAAAAAAABKo/eYsvFwr8GkQl_U6FqBobDD2Fpkh_vN-RQCLcBGAsYHQ/s16/favicon.ico' rel='icon'/>
<link href='https://1.bp.blogspot.com/-Wy22LJP_DNA/X8IUMQK2y5I/AAAAAAAABKo/eYsvFwr8GkQl_U6FqBobDD2Fpkh_vN-RQCLcBGAsYHQ/s16/favicon.ico' rel='apple-touch-icon'/>
<link href='https://1.bp.blogspot.com/-vVJLT51bBNI/X8IUH7VFCaI/AAAAAAAABJk/_zwr_W5QitkVW4lCfO0JyIt68RkAVCyAQCLcBGAsYHQ/s144/android-icon-144x144.png' rel='apple-touch-icon'/>
<link href='https://1.bp.blogspot.com/-vVJLT51bBNI/X8IUH7VFCaI/AAAAAAAABJk/_zwr_W5QitkVW4lCfO0JyIt68RkAVCyAQCLcBGAsYHQ/s144/android-icon-144x144.png' rel='icon'/>
<link href='https://www.trapashowplay.com/service-worker.js' rel='service-worker.js'/>
<link href='https://raw.githubusercontent.com/ToshGoodVibe/trapashowplay/main/site.webmanifest' rel='manifest'/>
<script> //<![CDATA[ 
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('service-worker.js')
          .then(() => console.log('service worker installed'))
          .catch(err => console.error('Error', err));
      }


    //]]></script>
<script> //<![CDATA[ 
/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {
		var key;

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));
 
 //]]></script>
<!--End-->
<script>
jQuery(document).ready
(function () { jQuery('a
[href*="https://"]:not
([href*="https://trapashowplay.com"])').attr('rel', 'nofollow');
jQuery('a
[href*="https://"]:not
([href*="https://www.trapashowplay.com"])').attr("target", "_blank"); });
</script>
<script> //<![CDATA[ 
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const ByteEfficiencyAudit = require('./byte-efficiency-audit.js');
const i18n = require('../../lib/i18n/i18n.js');
const NetworkRecords = require('../../computed/network-records.js');

const UIStrings = {
  /** Title of a diagnostic audit that provides detail on large network resources required during page load. 'Payloads' is roughly equivalent to 'resources'. This descriptive title is shown to users when the amount is acceptable and no user action is required. */
  title: 'Avoids enormous network payloads',
  /** Title of a diagnostic audit that provides detail on large network resources required during page load. 'Payloads' is roughly equivalent to 'resources'. This imperative title is shown to users when there is a significant amount of execution time that could be reduced. */
  failureTitle: 'Avoid enormous network payloads',
  /** Description of a Lighthouse audit that tells the user *why* they should reduce the size of the network resources required by the page. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description:
  'Large network payloads cost users real money and are highly correlated with ' +
  'long load times. [Learn ' +
  'more](https://web.dev/total-byte-weight).',
  /** Used to summarize the total byte size of the page and all its network requests. The `{totalBytes}` placeholder will be replaced with the total byte sizes, shown in kilobytes (e.g. 142 KB) */
  displayValue: 'Total size was {totalBytes, number, bytes}\xa0KB',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

class TotalByteWeight extends ByteEfficiencyAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'total-byte-weight',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      scoreDisplayMode: ByteEfficiencyAudit.SCORING_MODES.NUMERIC,
      requiredArtifacts: ['devtoolsLogs', 'traces'],
    };
  }

  /**
   * @return {LH.Audit.ScoreOptions}
   */
  static get defaultOptions() {
    return {
      // see https://www.desmos.com/calculator/gpmjeykbwr
      // ~75th and ~90th percentiles https://httparchive.org/interesting.php?a=All&l=Feb%201%202017&s=All#bytesTotal
      scorePODR: 2500 * 1024,
      scoreMedian: 4000 * 1024,
    }
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @param {LH.Audit.Context} context
   * @return {Promise<LH.Audit.Product>}
   */
  static async audit(artifacts, context) {
    const devtoolsLog = artifacts.devtoolsLogs[ByteEfficiencyAudit.DEFAULT_PASS];
    const records = await NetworkRecords.request(devtoolsLog, context);

    let totalBytes = 0;
    /** @type {Array<{url: string, totalBytes: number}>} */
    let results = [];
    records.forEach(record => {
      // exclude data URIs since their size is reflected in other resources
      // exclude unfinished requests since they won't have transfer size information
      if (record.parsedURL.scheme === 'data' || !record.finished) return;

      const result = {
        url: record.url,
        totalBytes: record.transferSize,
      };

      totalBytes += result.totalBytes;
      results.push(result);
    });
    const totalCompletedRequests = results.length;
    results = results.sort((itemA, itemB) => {
      return itemB.totalBytes - itemA.totalBytes ||
        itemA.url.localeCompare(itemB.url);
    }).slice(0, 10);

    const score = ByteEfficiencyAudit.computeLogNormalScore(
      totalBytes,
      context.options.scorePODR,
      context.options.scoreMedian
    );

    /** @type {LH.Audit.Details.Table['headings']} */
    const headings = [
      {key: 'url', itemType: 'url', text: str_(i18n.UIStrings.columnURL)},
      {key: 'totalBytes', itemType: 'bytes', text: str_(i18n.UIStrings.columnSize)},
    ];

    const tableDetails = ByteEfficiencyAudit.makeTableDetails(headings, results);

    return {
      score,
      numericValue: totalBytes,
      numericUnit: 'byte',
      displayValue: str_(UIStrings.displayValue, {totalBytes}),
      extendedInfo: {
        value: {
          results,
          totalCompletedRequests,
        },
      },
      details: tableDetails,
    };
  }
}

module.exports = TotalByteWeight;
module.exports.UIStrings = UIStrings;
//]]></script>
<script> //<![CDATA[ 
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * @fileoverview Audit a page to show a breakdown of execution timings on the main thread
 */

'use strict';

const Audit = require('./audit.js');
const {taskGroups} = require('../lib/tracehouse/task-groups.js');
const i18n = require('../lib/i18n/i18n.js');
const MainThreadTasks = require('../computed/main-thread-tasks.js');

const UIStrings = {
  /** Title of a diagnostic audit that provides detail on the main thread work the browser did to load the page. This descriptive title is shown to users when the amount is acceptable and no user action is required. */
  title: 'Minimizes main-thread work',
  /** Title of a diagnostic audit that provides detail on the main thread work the browser did to load the page. This imperative title is shown to users when there is a significant amount of execution time that could be reduced. */
  failureTitle: 'Minimize main-thread work',
  /** Description of a Lighthouse audit that tells the user *why* they should reduce JS execution times. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description: 'Consider reducing the time spent parsing, compiling and executing JS. ' +
    'You may find delivering smaller JS payloads helps with this. ' +
    '[Learn more](https://web.dev/mainthread-work-breakdown)',
  /** Label for the Main Thread Category column in data tables, rows will have a main thread Category and main thread Task Name. */
  columnCategory: 'Category',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

/** @typedef {import('../lib/tracehouse/task-groups.js').TaskGroupIds} TaskGroupIds */

class MainThreadWorkBreakdown extends Audit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'mainthread-work-breakdown',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      scoreDisplayMode: Audit.SCORING_MODES.NUMERIC,
      requiredArtifacts: ['traces'],
    };
  }

  /**
   * @return {LH.Audit.ScoreOptions}
   */
  static get defaultOptions() {
    return {
      // see https://www.desmos.com/calculator/s2eqcifkum
      scorePODR: 1500,
      scoreMedian: 4000,
    };
  }

  /**
   * @param {LH.Artifacts.TaskNode[]} tasks
   * @return {Map<TaskGroupIds, number>}
   */
  static getExecutionTimingsByGroup(tasks) {
    /** @type {Map<TaskGroupIds, number>} */
    const result = new Map();

    for (const task of tasks) {
      const originalTime = result.get(task.group.id) || 0;
      result.set(task.group.id, originalTime + task.selfTime);
    }

    return result;
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @param {LH.Audit.Context} context
   * @return {Promise<LH.Audit.Product>}
   */
  static async audit(artifacts, context) {
    const settings = context.settings || {};
    const trace = artifacts.traces[MainThreadWorkBreakdown.DEFAULT_PASS];

    const tasks = await MainThreadTasks.request(trace, context);
    const multiplier = settings.throttlingMethod === 'simulate' ?
      settings.throttling.cpuSlowdownMultiplier : 1;

    const executionTimings = MainThreadWorkBreakdown.getExecutionTimingsByGroup(tasks);

    let totalExecutionTime = 0;
    /** @type {Record<string, number>} */
    const categoryTotals = {};
    const results = Array.from(executionTimings).map(([groupId, rawDuration]) => {
      const duration = rawDuration * multiplier;
      totalExecutionTime += duration;

      const categoryTotal = categoryTotals[groupId] || 0;
      categoryTotals[groupId] = categoryTotal + duration;

      return {
        group: groupId,
        groupLabel: taskGroups[groupId].label,
        duration: duration,
      };
    });

    /** @type {LH.Audit.Details.Table['headings']} */
    const headings = [
      {key: 'groupLabel', itemType: 'text', text: str_(UIStrings.columnCategory)},
      {key: 'duration', itemType: 'ms', granularity: 1, text: str_(i18n.UIStrings.columnTimeSpent)},
    ];

    results.sort((a, b) => categoryTotals[b.group] - categoryTotals[a.group]);
    const tableDetails = MainThreadWorkBreakdown.makeTableDetails(headings, results);

    const score = Audit.computeLogNormalScore(
      totalExecutionTime,
      context.options.scorePODR,
      context.options.scoreMedian
    );

    return {
      score,
      numericValue: totalExecutionTime,
      numericUnit: 'millisecond',
      displayValue: str_(i18n.UIStrings.seconds, {timeInMs: totalExecutionTime}),
      details: tableDetails,
    };
  }
}

module.exports = MainThreadWorkBreakdown;
module.exports.UIStrings = UIStrings;
//]]></script>
<script> //<![CDATA[ 
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const assert = require('assert');
const parseCacheControl = require('parse-cache-control');
const Audit = require('../audit.js');
const NetworkRequest = require('../../lib/network-request.js');
const URL = require('../../lib/url-shim.js');
const linearInterpolation = require('../../lib/statistics.js').linearInterpolation;
const i18n = require('../../lib/i18n/i18n.js');
const NetworkRecords = require('../../computed/network-records.js');

const UIStrings = {
  /** Title of a diagnostic audit that provides detail on the cache policy applies to the page's static assets. Cache refers to browser disk cache, which keeps old versions of network resources around for future use. This is displayed in a list of audit titles that Lighthouse generates. */
  title: 'Uses efficient cache policy on static assets',
  /** Title of a diagnostic audit that provides details on the any page resources that could have been served with more efficient cache policies. Cache refers to browser disk cache, which keeps old versions of network resources around for future use. This imperative title is shown to users when there is a significant amount of assets served with poor cache policies. */
  failureTitle: 'Serve static assets with an efficient cache policy',
  /** Description of a Lighthouse audit that tells the user *why* they need to adopt a long cache lifetime policy. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description:
    'A long cache lifetime can speed up repeat visits to your page. ' +
    '[Learn more](https://web.dev/uses-long-cache-ttl).',
  /** [ICU Syntax] Label for the audit identifying network resources with inefficient cache values. Clicking this will expand the audit to show the resources. */
  displayValue: `{itemCount, plural,
    =1 {1 resource found}
    other {# resources found}
    }`,
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

// Ignore assets that have very high likelihood of cache hit
const IGNORE_THRESHOLD_IN_PERCENT = 0.925;

class CacheHeaders extends Audit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'uses-long-cache-ttl',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      scoreDisplayMode: Audit.SCORING_MODES.NUMERIC,
      requiredArtifacts: ['devtoolsLogs', 'traces'],
    };
  }

  /**
   * @return {LH.Audit.ScoreOptions}
   */
  static get defaultOptions() {
    return {
      // 50th and 75th percentiles HTTPArchive -> 50 and 75
      // https://bigquery.cloud.google.com/table/httparchive:lighthouse.2018_04_01_mobile?pli=1
      // see https://www.desmos.com/calculator/8meohdnjbl
      scorePODR: 4 * 1024,
      scoreMedian: 128 * 1024,
    };
  }

  /**
   * Computes the percent likelihood that a return visit will be within the cache lifetime, based on
   * Chrome UMA stats see the note below.
   * @param {number} maxAgeInSeconds
   * @return {number}
   */
  static getCacheHitProbability(maxAgeInSeconds) {
    // This array contains the hand wavy distribution of the age of a resource in hours at the time of
    // cache hit at 0th, 10th, 20th, 30th, etc percentiles. This is used to compute `wastedMs` since there
    // are clearly diminishing returns to cache duration i.e. 6 months is not 2x better than 3 months.
    // Based on UMA stats for HttpCache.StaleEntry.Validated.Age, see https://www.desmos.com/calculator/7v0qh1nzvh
    // Example: a max-age of 12 hours already covers ~50% of cases, doubling to 24 hours covers ~10% more.
    const RESOURCE_AGE_IN_HOURS_DECILES = [0, 0.2, 1, 3, 8, 12, 24, 48, 72, 168, 8760, Infinity];
    assert.ok(RESOURCE_AGE_IN_HOURS_DECILES.length === 12, 'deciles 0-10 and 1 for overflow');

    const maxAgeInHours = maxAgeInSeconds / 3600;
    const upperDecileIndex = RESOURCE_AGE_IN_HOURS_DECILES.findIndex(
      decile => decile >= maxAgeInHours
    );

    // Clip the likelihood between 0 and 1
    if (upperDecileIndex === RESOURCE_AGE_IN_HOURS_DECILES.length - 1) return 1;
    if (upperDecileIndex === 0) return 0;

    // Use the two closest decile points as control points
    const upperDecileValue = RESOURCE_AGE_IN_HOURS_DECILES[upperDecileIndex];
    const lowerDecileValue = RESOURCE_AGE_IN_HOURS_DECILES[upperDecileIndex - 1];
    const upperDecile = upperDecileIndex / 10;
    const lowerDecile = (upperDecileIndex - 1) / 10;

    // Approximate the real likelihood with linear interpolation
    return linearInterpolation(
      lowerDecileValue,
      lowerDecile,
      upperDecileValue,
      upperDecile,
      maxAgeInHours
    );
  }

  /**
   * Return max-age if defined, otherwise expires header if defined, and null if not.
   * @param {Map<string, string>} headers
   * @param {ReturnType<typeof parseCacheControl>} cacheControl
   * @return {?number}
   */
  static computeCacheLifetimeInSeconds(headers, cacheControl) {
    if (cacheControl && cacheControl['max-age'] !== undefined) {
      return cacheControl['max-age'];
    }

    const expiresHeaders = headers.get('expires');
    if (expiresHeaders) {
      const expires = new Date(expiresHeaders).getTime();
      // Invalid expires values MUST be treated as already expired
      if (!expires) return 0;
      return Math.ceil((expires - Date.now()) / 1000);
    }

    return null;
  }

  /**
   * Given a network record, returns whether we believe the asset is cacheable, i.e. it was a network
   * request that satisifed the conditions:
   *
   *  1. Has a cacheable status code
   *  2. Has a resource type that corresponds to static assets (image, script, stylesheet, etc).
   *
   * Allowing assets with a query string is debatable, PSI considered them non-cacheable with a similar
   * caveat.
   *
   * TODO: Investigate impact in HTTPArchive, experiment with this policy to see what changes.
   *
   * @param {LH.Artifacts.NetworkRequest} record
   * @return {boolean}
   */
  static isCacheableAsset(record) {
    const CACHEABLE_STATUS_CODES = new Set([200, 203, 206]);

    /** @type {Set<LH.Crdp.Network.ResourceType>} */
    const STATIC_RESOURCE_TYPES = new Set([
      NetworkRequest.TYPES.Font,
      NetworkRequest.TYPES.Image,
      NetworkRequest.TYPES.Media,
      NetworkRequest.TYPES.Script,
      NetworkRequest.TYPES.Stylesheet,
    ]);

    // It's not a request loaded over the network, caching makes no sense
    if (URL.NON_NETWORK_PROTOCOLS.includes(record.protocol)) return false;

    return (
      CACHEABLE_STATUS_CODES.has(record.statusCode) &&
      STATIC_RESOURCE_TYPES.has(record.resourceType || 'Other')
    );
  }

  /**
   * Returns true if headers suggest a record should not be cached for a long time.
   * @param {Map<string, string>} headers
   * @param {ReturnType<typeof parseCacheControl>} cacheControl
   * @returns {boolean}
   */
  static shouldSkipRecord(headers, cacheControl) {
    // The HTTP/1.0 Pragma header can disable caching if cache-control is not set, see https://tools.ietf.org/html/rfc7234#section-5.4
    if (!cacheControl && (headers.get('pragma') || '').includes('no-cache')) {
      return true;
    }

    // Ignore assets where policy implies they should not be cached long periods
    if (cacheControl &&
      (
        cacheControl['must-revalidate'] ||
        cacheControl['no-cache'] ||
        cacheControl['no-store'] ||
        cacheControl['private'])) {
      return true;
    }

    return false;
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @param {LH.Audit.Context} context
   * @return {Promise<LH.Audit.Product>}
   */
  static audit(artifacts, context) {
    const devtoolsLogs = artifacts.devtoolsLogs[Audit.DEFAULT_PASS];
    return NetworkRecords.request(devtoolsLogs, context).then(records => {
      const results = [];
      let queryStringCount = 0;
      let totalWastedBytes = 0;

      for (const record of records) {
        if (!CacheHeaders.isCacheableAsset(record)) continue;

        /** @type {Map<string, string>} */
        const headers = new Map();
        for (const header of record.responseHeaders || []) {
          if (headers.has(header.name.toLowerCase())) {
            const previousHeaderValue = headers.get(header.name.toLowerCase());
            headers.set(header.name.toLowerCase(),
              `${previousHeaderValue}, ${header.value}`);
          } else {
            headers.set(header.name.toLowerCase(), header.value);
          }
        }

        const cacheControl = parseCacheControl(headers.get('cache-control'));
        if (this.shouldSkipRecord(headers, cacheControl)) {
          continue;
        }

        // Ignore if cacheLifetimeInSeconds is a nonpositive number.
        let cacheLifetimeInSeconds = CacheHeaders.computeCacheLifetimeInSeconds(
          headers, cacheControl);
        if (cacheLifetimeInSeconds !== null &&
          (!Number.isFinite(cacheLifetimeInSeconds) || cacheLifetimeInSeconds <= 0)) {
          continue;
        }
        cacheLifetimeInSeconds = cacheLifetimeInSeconds || 0;

        // Ignore assets whose cache lifetime is already high enough
        const cacheHitProbability = CacheHeaders.getCacheHitProbability(cacheLifetimeInSeconds);
        if (cacheHitProbability > IGNORE_THRESHOLD_IN_PERCENT) continue;

        const url = URL.elideDataURI(record.url);
        const totalBytes = record.transferSize || 0;
        const wastedBytes = (1 - cacheHitProbability) * totalBytes;

        totalWastedBytes += wastedBytes;
        if (url.includes('?')) queryStringCount++;

        // Include cacheControl info (if it exists) per url as a diagnostic.
        /** @type {LH.Audit.Details.DebugData|undefined} */
        let debugData;
        if (cacheControl) {
          debugData = {
            type: 'debugdata',
            ...cacheControl,
          };
        }

        results.push({
          url,
          debugData,
          cacheLifetimeMs: cacheLifetimeInSeconds * 1000,
          cacheHitProbability,
          totalBytes,
          wastedBytes,
        });
      }

      results.sort((a, b) => {
        return a.cacheLifetimeMs - b.cacheLifetimeMs ||
          b.totalBytes - a.totalBytes ||
          a.url.localeCompare(b.url);
      });

      const score = Audit.computeLogNormalScore(
        totalWastedBytes,
        context.options.scorePODR,
        context.options.scoreMedian
      );

      /** @type {LH.Audit.Details.Table['headings']} */
      const headings = [
        {key: 'url', itemType: 'url', text: str_(i18n.UIStrings.columnURL)},
        // TODO(i18n): pre-compute localized duration
        {key: 'cacheLifetimeMs', itemType: 'ms', text: str_(i18n.UIStrings.columnCacheTTL),
          displayUnit: 'duration'},
        {key: 'totalBytes', itemType: 'bytes', text: str_(i18n.UIStrings.columnSize),
          displayUnit: 'kb', granularity: 1},
      ];

      const summary = {wastedBytes: totalWastedBytes};
      const details = Audit.makeTableDetails(headings, results, summary);

      return {
        score,
        numericValue: totalWastedBytes,
        numericUnit: 'byte',
        displayValue: str_(UIStrings.displayValue, {itemCount: results.length}),
        extendedInfo: {
          value: {
            results,
            queryStringCount,
          },
        },
        details,
      };
    });
  }
}

module.exports = CacheHeaders;
module.exports.UIStrings = UIStrings;
//]]></script>
<script> //<![CDATA[ 
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/*
 * @fileoverview This audit determines if the images could be smaller when compressed with WebP.
 */
'use strict';

const ByteEfficiencyAudit = require('./byte-efficiency-audit.js');
const URL = require('../../lib/url-shim.js');
const i18n = require('../../lib/i18n/i18n.js');

const UIStrings = {
  /** Imperative title of a Lighthouse audit that tells the user to serve images in newer and more efficient image formats in order to enhance the performance of a page. A non-modern image format was designed 20+ years ago. This is displayed in a list of audit titles that Lighthouse generates. */
  title: 'Serve images in next-gen formats',
  /** Description of a Lighthouse audit that tells the user *why* they should use newer and more efficient image formats. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description: 'Image formats like JPEG 2000, JPEG XR, and WebP often provide better ' +
    'compression than PNG or JPEG, which means faster downloads and less data consumption. ' +
    '[Learn more](https://web.dev/uses-webp-images).',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

const IGNORE_THRESHOLD_IN_BYTES = 8192;

class UsesWebPImages extends ByteEfficiencyAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'uses-webp-images',
      title: str_(UIStrings.title),
      description: str_(UIStrings.description),
      scoreDisplayMode: ByteEfficiencyAudit.SCORING_MODES.NUMERIC,
      requiredArtifacts: ['OptimizedImages', 'devtoolsLogs', 'traces', 'URL', 'ImageElements'],
    };
  }

  /**
   * @param {{originalSize: number, webpSize: number}} image
   * @return {{bytes: number, percent: number}}
   */
  static computeSavings(image) {
    const bytes = image.originalSize - image.webpSize;
    const percent = 100 * bytes / image.originalSize;
    return {bytes, percent};
  }

  /**
   * @param {LH.Artifacts.ImageElement} imageElement
   * @return {number}
   */
  static estimateWebPSizeFromDimensions(imageElement) {
    const totalPixels = imageElement.naturalWidth * imageElement.naturalHeight;
    // See uses-optimized-images for the rationale behind our 2 byte-per-pixel baseline and
    // JPEG compression ratio of 8:1.
    // WebP usually gives ~20% additional savings on top of that, so we will use 10:1.
    // This is quite pessimistic as their study shows a photographic compression ratio of ~29:1.
    // https://developers.google.com/speed/webp/docs/webp_lossless_alpha_study#results
    const expectedBytesPerPixel = 2 * 1 / 10;
    return Math.round(totalPixels * expectedBytesPerPixel);
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @return {ByteEfficiencyAudit.ByteEfficiencyProduct}
   */
  static audit_(artifacts) {
    const pageURL = artifacts.URL.finalUrl;
    const images = artifacts.OptimizedImages;
    const imageElements = artifacts.ImageElements;
    /** @type {Map<string, LH.Artifacts.ImageElement>} */
    const imageElementsByURL = new Map();
    imageElements.forEach(img => imageElementsByURL.set(img.src, img));

    /** @type {Array<LH.Audit.ByteEfficiencyItem>} */
    const items = [];
    const warnings = [];
    for (const image of images) {
      if (image.failed) {
        warnings.push(`Unable to decode ${URL.getURLDisplayName(image.url)}`);
        continue;
      }

      let webpSize = image.webpSize;
      let fromProtocol = true;

      if (typeof webpSize === 'undefined') {
        const imageElement = imageElementsByURL.get(image.url);
        if (!imageElement) {
          warnings.push(`Unable to locate resource ${URL.getURLDisplayName(image.url)}`);
          continue;
        }

        webpSize = UsesWebPImages.estimateWebPSizeFromDimensions(imageElement);
        fromProtocol = false;
      }

      if (image.originalSize < webpSize + IGNORE_THRESHOLD_IN_BYTES) continue;

      const url = URL.elideDataURI(image.url);
      const isCrossOrigin = !URL.originsMatch(pageURL, image.url);
      const webpSavings = UsesWebPImages.computeSavings({...image, webpSize: webpSize});

      items.push({
        url,
        fromProtocol,
        isCrossOrigin,
        totalBytes: image.originalSize,
        wastedBytes: webpSavings.bytes,
      });
    }

    /** @type {LH.Audit.Details.Opportunity['headings']} */
    const headings = [
      {key: 'url', valueType: 'thumbnail', label: ''},
      {key: 'url', valueType: 'url', label: str_(i18n.UIStrings.columnURL)},
      {key: 'totalBytes', valueType: 'bytes', label: str_(i18n.UIStrings.columnSize)},
      {key: 'wastedBytes', valueType: 'bytes', label: str_(i18n.UIStrings.columnWastedBytes)},
    ];

    return {
      warnings,
      items,
      headings,
    };
  }
}

module.exports = UsesWebPImages;
module.exports.UIStrings = UIStrings;
//]]></script>
<script> //<![CDATA[ 
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/**
 * @fileoverview Checks to see if the images used on the page are larger than
 *   their display sizes. The audit will list all images that are larger than
 *   their display size with DPR (a 1000px wide image displayed as a
 *   500px high-res image on a Retina display is 100% used);
 *   However, the audit will only fail pages that use images that have waste
 *   beyond a particular byte threshold.
 */
'use strict';

const ByteEfficiencyAudit = require('./byte-efficiency-audit.js');
const Sentry = require('../../lib/sentry.js');
const URL = require('../../lib/url-shim.js');
const i18n = require('../../lib/i18n/i18n.js');

const UIStrings = {
  /** Imperative title of a Lighthouse audit that tells the user to resize images to match the display dimensions. This is displayed in a list of audit titles that Lighthouse generates. */
  title: 'Properly size images',
  /** Description of a Lighthouse audit that tells the user *why* they need to serve appropriately sized images. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description:
  'Serve images that are appropriately-sized to save cellular data ' +
  'and improve load time. ' +
  '[Learn more](https://web.dev/uses-responsive-images).',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

const IGNORE_THRESHOLD_IN_BYTES = 2048;

class UsesResponsiveImages extends ByteEfficiencyAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'uses-responsive-images',
      title: str_(UIStrings.title),
      description: str_(UIStrings.description),
      scoreDisplayMode: ByteEfficiencyAudit.SCORING_MODES.NUMERIC,
      requiredArtifacts: ['ImageElements', 'ViewportDimensions', 'devtoolsLogs', 'traces'],
    };
  }

  /**
   * @param {LH.Artifacts.ImageElement} image
   * @param {number} DPR devicePixelRatio
   * @return {null|Error|LH.Audit.ByteEfficiencyItem};
   */
  static computeWaste(image, DPR) {
    // Nothing can be done without network info.
    if (!image.resourceSize) {
      return null;
    }

    const url = URL.elideDataURI(image.src);
    const actualPixels = image.naturalWidth * image.naturalHeight;
    const usedPixels = image.displayedWidth * image.displayedHeight * Math.pow(DPR, 2);
    const wastedRatio = 1 - (usedPixels / actualPixels);
    const totalBytes = image.resourceSize;
    const wastedBytes = Math.round(totalBytes * wastedRatio);

    // If the image has 0 dimensions, it's probably hidden/offscreen, so let the offscreen-images
    // audit handle it instead.
    if (!usedPixels) {
      return null;
    }

    if (!Number.isFinite(wastedRatio)) {
      return new Error(`Invalid image sizing information ${url}`);
    }

    return {
      url,
      totalBytes,
      wastedBytes,
      wastedPercent: 100 * wastedRatio,
    };
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @return {ByteEfficiencyAudit.ByteEfficiencyProduct}
   */
  static audit_(artifacts) {
    const images = artifacts.ImageElements;
    const DPR = artifacts.ViewportDimensions.devicePixelRatio;

    /** @type {string[]} */
    const warnings = [];
    /** @type {Map<string, LH.Audit.ByteEfficiencyItem>} */
    const resultsMap = new Map();
    for (const image of images) {
      // Ignore images without resource size information.
      // Give SVG a free pass because creating a "responsive" SVG is of questionable value.
      // Ignore CSS images because it's difficult to determine what is a spritesheet,
      // and the reward-to-effort ratio for responsive CSS images is quite low https://css-tricks.com/responsive-images-css/.
      if (!image.resourceSize || image.mimeType === 'image/svg+xml' || image.isCss) {
        continue;
      }

      const processed = UsesResponsiveImages.computeWaste(image, DPR);
      if (!processed) continue;

      if (processed instanceof Error) {
        warnings.push(processed.message);
        Sentry.captureException(processed, {tags: {audit: this.meta.id}, level: 'warning'});
        continue;
      }

      // Don't warn about an image that was later used appropriately
      const existing = resultsMap.get(processed.url);
      if (!existing || existing.wastedBytes > processed.wastedBytes) {
        resultsMap.set(processed.url, processed);
      }
    }

    const items = Array.from(resultsMap.values())
        .filter(item => item.wastedBytes > IGNORE_THRESHOLD_IN_BYTES);

    /** @type {LH.Audit.Details.Opportunity['headings']} */
    const headings = [
      {key: 'url', valueType: 'thumbnail', label: ''},
      {key: 'url', valueType: 'url', label: str_(i18n.UIStrings.columnURL)},
      {key: 'totalBytes', valueType: 'bytes', label: str_(i18n.UIStrings.columnSize)},
      {key: 'wastedBytes', valueType: 'bytes', label: str_(i18n.UIStrings.columnWastedBytes)},
    ];

    return {
      warnings,
      items,
      headings,
    };
  }
}

module.exports = UsesResponsiveImages;
module.exports.UIStrings = UIStrings;
//]]></script>
<script>
//<![CDATA[
const terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';

addEventListener(terminationEvent, (event) => {
  // Note: if the browser is able to cache the page, `event.persisted`
  // is `true`, and the state is frozen rather than terminated.
}, {capture: true});

const beforeUnloadListener = (event) => {
  event.preventDefault();
  return event.returnValue = 'Are you sure you want to exit?';
};

// A function that invokes a callback when the page has unsaved changes.
onPageHasUnsavedChanges(() => {
  addEventListener('beforeunload', beforeUnloadListener, {capture: true});
});

// A function that invokes a callback when the page's unsaved changes are resolved.
onAllChangesSaved(() => {
  removeEventListener('beforeunload', beforeUnloadListener, {capture: true});
});

   //]]></script>
<script>
//<![CDATA[
const sharp = require('sharp');
const fs = require('fs');
const directory = './images';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  });
  
 //]]></script>
<script>
//<![CDATA[
  /**
 * @license Copyright 2016 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const Audit = require('../audit.js');
const i18n = require('../../lib/i18n/i18n.js');
const ComputedSi = require('../../computed/metrics/speed-index.js');

const UIStrings = {
  /** Description of the Speed Index metric, which summarizes how quickly the page looked visually complete. This is displayed within a tooltip when the user hovers on the metric name to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description: 'Speed Index shows how quickly the contents of a page are visibly populated. ' +
      '[Learn more](https://web.dev/speed-index/).',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

class SpeedIndex extends Audit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'speed-index',
      title: str_(i18n.UIStrings.speedIndexMetric),
      description: str_(UIStrings.description),
      scoreDisplayMode: Audit.SCORING_MODES.NUMERIC,
      requiredArtifacts: ['traces', 'devtoolsLogs', 'TestedAsMobileDevice'],
    };
  }

  /**
   * @return {{mobile: {scoring: LH.Audit.ScoreOptions}, desktop: {scoring: LH.Audit.ScoreOptions}}}
   */
  static get defaultOptions() {
    return {
      mobile: {
        // 25th and 5th percentiles HTTPArchive -> median and PODR, then p10 derived from them.
        // https://bigquery.cloud.google.com/table/httparchive:lighthouse.2018_04_01_mobile?pli=1
        // see https://www.desmos.com/calculator/dvuzvpl7mi
        scoring: {
          p10: 3387,
          median: 5800,
        },
      },
      desktop: {
        // SELECT QUANTILES(SpeedIndex, 21) FROM [httparchive:summary_pages.2018_12_15_desktop] LIMIT 1000
        scoring: {
          p10: 1311,
          median: 2300,
        },
      },
    };
  }

  /**
   * Audits the page to give a score for the Speed Index.
   * @see https://github.com/GoogleChrome/lighthouse/issues/197
   * @param {LH.Artifacts} artifacts The artifacts from the gather phase.
   * @param {LH.Audit.Context} context
   * @return {Promise<LH.Audit.Product>}
   */
  static async audit(artifacts, context) {
    const trace = artifacts.traces[Audit.DEFAULT_PASS];
    const devtoolsLog = artifacts.devtoolsLogs[Audit.DEFAULT_PASS];
    const metricComputationData = {trace, devtoolsLog, settings: context.settings};
    const metricResult = await ComputedSi.request(metricComputationData, context);
    const isDesktop = artifacts.TestedAsMobileDevice === false;
    const options = isDesktop ? context.options.desktop : context.options.mobile;

    return {
      score: Audit.computeLogNormalScore(
        options.scoring,
        metricResult.timing
      ),
      numericValue: metricResult.timing,
      numericUnit: 'millisecond',
      displayValue: str_(i18n.UIStrings.seconds, {timeInMs: metricResult.timing}),
    }
  }
}

module.exports = SpeedIndex;
module.exports.UIStrings = UIStrings;
  //]]></script>
<link href='https://1.bp.blogspot.com/-AxCw_GECzHw/X7jkGC6x52I/AAAAAAAABCw/NQV7eFcq0cYmQDG4zub-cv_mA0sTRgOVACLcBGAsYHQ/s32/favicon-trapashow-play.jpg ' rel='shortcut icon'/>
<meta content='d820f015d00291260274cc493c97e5c6' name='p:domain_verify'/>
<meta content='kwbm2urNiQFFqpytGtwpn-B6stz3D9R-3SFYHQ0LIjw' name='google-site-verification'/>
<meta content='dmusuqlojhyzagmvw' name='dailymotion-domain-verification'/>
<meta content='5CD5654340E99BBD8DCD3A70F901A814' name='msvalidate.01'/>
<link href='https://www.trapashowplay.com//service-worker.js' hreflang='pt-BR' rel='alternate' title='linguagem-pt'/>
<link href='https://www.trapashowplay.com//service-worker.js' hreflang='en-US' rel='alternate' title='linguagem-en'/>
<link href='https://www.trapashowplay.com//service-worker.js' rel='pingback' title='pingback-linkt'/>
<link href='https://www.trapashowplay.com/sitemap.xml' rel='sitemap' title='sitemap.xml'/>
<meta content='sat, 02 jun 2020 00:00:00 GMT' name='expires'/>
<title>
 - Trapashow play 
</title>
<meta content='global' name='distribution'/>
<meta content='1 days' name='revisit'/>
<meta content='1 days' name='revisit-after'/>
<meta content='document' name='resource-type'/>
<meta content='all' name='audience'/>
<meta content='general' name='rating'/>
<meta content='all' name='robots'/>
<meta content='index, follow' name='robots'/>
<meta content='pt-br, en' http-equiv='Content-Language'/>
<meta content='Brazil' name='country'/>
<meta content='summary_large_image' name='twitter:card'/>
<meta content='@show_de_vizinha' name='twitter:site'/>
<meta content='@show_de_vizinha' name='twitter:creator'/>
<meta content='https://www.trapashowplay.com/' name='twitter:domain'/>
<meta content='' name='twitter:title'/>
<meta content='summary' name='twitter:card'/>
<meta content='' name='twitter:title'/>
<meta content='' name='twitter:image:src'/>
<meta content='Trapashow play ' name='twitter:title'/>
<meta content='Trapashow play entretenimento videos online, filmes, musicas, videos motivacionais, series humor e comedia, artes marciais, martial arts.' name='twitter:description'/>
<meta content='Trapashow play ' property='og:site_name'/>
<meta content='https://1.bp.blogspot.com/-ihVv1fEZGVk/X7jllcJ5GpI/AAAAAAAABC8/2mpfmBEr79sQ_YXOx4SqeWVhMZ765RFbwCLcBGAsYHQ/s200/trapashowplay-logo.jpg' property='og:image'/>
<meta content='toshgoodvibe' property='fb:profile_id'/>
<meta content='1597829006977188' property='fb:app_id'/>
<meta content='pt_BR' property='og:locale'/>
<meta content='width=device-width, initial-scale=1' name='viewport'/>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<!-- Chrome, Firefox OS and Opera -->
<meta content='#eeeeee' name='theme-color'/>
<!-- Windows Phone -->
<meta content='#eeeeee' name='msapplication-navbutton-color'/>
<meta content='blogger' name='generator'/>
<link href='https://www.trapashowplay.com/favicon.ico' rel='icon' type='image/x-icon'/>
<link href='https://www.trapashowplay.com//service-worker.js' rel='canonical'/>
<link rel="alternate" type="application/atom+xml" title="Trapashow play  - Atom" href="https://www.trapashowplay.com/feeds/posts/default" />
<link rel="alternate" type="application/rss+xml" title="Trapashow play  - RSS" href="https://www.trapashowplay.com/feeds/posts/default?alt=rss" />
<link rel="service.post" type="application/atom+xml" title="Trapashow play  - Atom" href="https://www.blogger.com/feeds/2484898155436190997/posts/default" />
<!--Can't find substitution for tag [blog.ieCssRetrofitLinks]-->
<meta content='Trapashow play entretenimento videos online, filmes, musicas, videos motivacionais, series humor e comedia, artes marciais, martial arts.' name='description'/>
<meta content='https://www.trapashowplay.com//service-worker.js' property='og:url'/>
<meta content='Trapashow play ' property='og:title'/>
<meta content='Trapashow play entretenimento videos online, filmes, musicas, videos motivacionais, series humor e comedia, artes marciais, martial arts.' property='og:description'/>
<!--[if IE]> <script> (function() { var html5 = ("abbr,article,aside,audio,canvas,datalist,details," + "figure,footer,header,hgroup,mark,menu,meter,nav,output," + "progress,section,time,video").split(','); for (var i = 0; i < html5.length; i++) { document.createElement(html5[i]); } try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {} })(); </script> <![endif]-->
<style id='page-skin-1' type='text/css'><!--
/*!
normalize.css v3.0.1 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}
/*Blogger Threaded Comments Styles */
--></style>
<style>


/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  
body {
font: Segoe WP;
color: #333333;
background: #FFFFFF none repeat scroll top left;
margin-top: 0;

}
h2.post-title.entry-title {
  display: none;
}
img.related-thumb-large {
    width: 100px;
    height: 100px;
}  
  
.hashtag a:link {
    display: inline-flex;
    
}
  .hashtag a:link {
   
    color: #00008B;
}


td.tr-caption {
    display: none;
}
 
  .feed-links{
display: none;
}
html body .content-outer {
min-width: 0;
max-width: 110%;
width: 100%;
}
a:link {
text-decoration: none;
color: #000;
}
a:visited {
text-decoration: none;
color: #7d181e;
}
a:hover {
text-decoration: none;
color: #d52a33;
}
.body-fauxcolumn-outer .cap-top {
position: absolute;
z-index: 1;
height: 276px;
width: 100%;
background: transparent none repeat-x scroll top left;
_background-image: none;
}

.goog-te-banner-frame
  {
display:none;
} 
  
  .goog-te-gadget-simple {
    background-color: #fff;
    zoom: 2;
    
  
}
div#BlogSearch1 input.search-action, .search-input input{
text-align: center;
   
    width: 100%;
  height: 65px;
}
  

  
/* Columns */
.content-inner {
padding: 0;
}
.header-inner .section {
margin: 0 16px;

}
.tabs-inner .section {
margin: 0 16px;

}
.main-inner {
padding-top: 3px;
}
.main-inner .column-center-inner,
.main-inner .column-left-inner,
.main-inner .column-right-inner {
padding: 0 5px;
}
*+html body .main-inner .column-center-inner {
margin-top: -30px;
}
#layout .main-inner .column-center-inner {
margin-top: 0;
}
/* Header */
.Header img{width:100%;    
height: 4.0em;

 }

.byline,
.byline.post-timestamp a,
.byline.post-author a {
color: #757575;
font: italic 400 12px Merriweather, Georgia, serif;
margin-bottom: -40px;
}
.byline.post-author {
text-transform: lowercase;
}
.byline.post-author a {
text-transform: none;
}
.post-header .byline,
.item-byline .byline {
margin-right: 0;
}
.header-outer {
margin: 0 0 0 0;
background: transparent none repeat scroll 0 0;
}
.Header, .Header h1 {
font: normal normal 1.0em Segoe WP;
color: #333333;
text-shadow: 0 0 -1px #000000;

}


.Header h1 a {
color: #333333;
}
.Header .description {
font: normal normal 20px Segoe WP;
color: #908d6a;
}
.header-inner .Header .titlewrapper,
.header-inner .Header .descriptionwrapper {
padding-left: 0;
padding-right: 0;
margin-bottom: 0;
}
.header-inner .Header .titlewrapper {
padding-top: 22px;

}

/* Tabs */

.tabs-outer {
overflow: hidden;
position: relative;
background: #FFFFFF  repeat scroll 0 0;
margin-top: 5px;


}
  div#Image1 {
    text-align: center;
}
  
#layout .tabs-outer {
overflow: visible;
}
.tabs-cap-top, .tabs-cap-bottom {
position: absolute;
width: 100%;
border-top: 0px ;
}
.tabs-cap-bottom {
bottom: 0;
}
.tabs-inner .widget li a {
display: inline-block;
margin: 0;
padding: .6em 1.5em;
font: normal normal 13px Segoe WP;
color: #333333;
border-top: 1px solid #908d6a;
border-bottom: 1px solid #908d6a;
border-left: 1px solid #908d6a;
height: 16px;
line-height: 16px;

}
.tabs-inner .widget li:last-child a {
border-right: 1px solid #908d6a;
}
.tabs-inner .widget li.selected a, .tabs-inner .widget li a:hover {
background: #63704b url(https://www.blogblog.com/1kt/awesomeinc/tabs_gradient_light.png) repeat-x scroll 0 -100px;
color: #ffffff;
}
/* Headings */
h2 {
font: normal bold 14px Segoe WP;
color: #333333;
display: block;
   
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
.main-inner .column-left-outer,
.main-inner .column-right-outer {
margin-top:0;
}


#layout .main-inner .column-left-outer,
#layout .main-inner .column-right-outer {
margin-top: 0;
}
.main-inner .column-left-inner,
.main-inner .column-right-inner {
background: transparent none repeat 0 0;
-moz-box-shadow: 0 0 0 rgba(0, 0, 0, .2);
-webkit-box-shadow: 0 0 0 rgba(0, 0, 0, .2);
-goog-ms-box-shadow: 0 0 0 rgba(0, 0, 0, .2);
box-shadow: 0 0 0 rgba(0, 0, 0, .2);
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
-goog-ms-border-radius: 5px;
border-radius: 5px;
}
#layout .main-inner .column-left-inner,
#layout .main-inner .column-right-inner {
margin-top: 0;
}
.sidebar .widget {
font: normal normal 14px Segoe WP;
color: #333333;
}
.sidebar .widget a:link {
color: #000;
}
.sidebar .widget a:visited {
color: #7d181e;
}
.sidebar .widget a:hover {
color: #d52a33;
}
.sidebar .widget h3 {
text-shadow: 0 0 -1px #000000;
}
.main-inner .widget {
background-color: #FFFFFF;
border: 1px solid #000000;
padding: 0 15px 15px;
margin: 0px -16px;
-moz-box-shadow: 0 0 20px rgba(0, 0, 0, .2);
-webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .2);
-goog-ms-box-shadow: 0 0 20px rgba(0, 0, 0, .2);
box-shadow: 0 0 20px rgba(0, 0, 0, .2);
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
-goog-ms-border-radius: 5px;
border-radius: 5px;
}

.footer-inner .widget h3 {
padding: 0 0 .4em;
border-bottom: 1px solid transparent;
}
.main-inner .widget h3 + div, .footer-inner .widget h3 + div {
border-top: 1px solid #000000;
padding-top: 8px;
margin-top:3px;
}
.main-inner .widget .widget-content {
margin: 0 -0;
padding: 7px 0 0;
text-align: center;

}
.main-inner .widget ul, .main-inner .widget #ArchiveList ul.flat {
margin: -8px -15px 0;
padding: 0;
list-style: none;
}
.main-inner .widget #ArchiveList {
margin: -8px 0 0;
}
.main-inner .widget ul li, .main-inner .widget #ArchiveList ul.flat li {
padding: .5em 15px;
text-indent: 0;
color: #666666;
border-top: 0 solid #000000;
border-bottom: 1px solid transparent;
}
.main-inner .widget #ArchiveList ul li {
padding-top: .25em;
padding-bottom: .25em;
}
.main-inner .widget ul li:first-child, .main-inner .widget #ArchiveList ul.flat li:first-child {
border-top: none;
}
.main-inner .widget ul li:last-child, .main-inner .widget #ArchiveList ul.flat li:last-child {
border-bottom: none;
}
.post-body {
position: relative;
}
.main-inner .widget .post-body ul {
padding: 0 2.5em;
margin: .5em 0;
list-style: disc;
}
.main-inner .widget .post-body ul li {
padding: 0.25em 0;
margin-bottom: .25em;
color: #ffffff;
border: none;
}
.footer-inner .widget ul {
padding: 0;
list-style: none;
display: flex;
background-color: #FFFFFF;
}
.widget .zippy {
color: #666666;
}

/* Posts */
body .main-inner .Blog {
padding: 0;
margin-bottom: 1em;
background-color: #FFFFFF;
border: none;
-moz-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
-webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
-goog-ms-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
box-shadow: 0 0 0 rgba(0, 0, 0, 0);
 
}
.main-inner .section:last-child .Blog:last-child {
padding: 0;
margin-bottom: 1em;
}
.main-inner .widget h3.date-header {
margin: 0 -15px 1px;
padding: 0 0 0 0;
font: normal normal 13px Segoe WP;
color: #908d6a;
background: transparent none no-repeat scroll top left;
border-top: 0 solid #FF0000;
border-bottom: 1px solid transparent;
-moz-border-radius-topleft: 0;
-moz-border-radius-topright: 0;
-webkit-border-top-left-radius: 0;
-webkit-border-top-right-radius: 0;
border-top-left-radius: 0;
border-top-right-radius: 0;
position: static;
bottom: 100%;
right: 15px;
text-shadow: 0 0 -1px #000000;
}
.main-inner .widget h3.date-header span {
font: normal normal 13px Segoe WP;
display: block;
padding: .5em 15px;
border-left: 0 solid #000000;
border-right: 0 solid #000000;
}
.date-outer {
position: relative;
margin: 0;
padding: 0 15px;
background-color: #FFFFFF;


}

.date-outer:first-child {
border: 1px solid #000000;
margin-top: 0;
border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}


.date-outer:last-child {
margin-bottom: 0px;
-moz-border-radius-bottomleft: 5px;
-moz-border-radius-bottomright: 5px;
-webkit-border-bottom-left-radius: 5px;
-webkit-border-bottom-right-radius: 5px;
-goog-ms-border-bottom-left-radius: 5px;
-goog-ms-border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}
.main-inner .date-outer {
padding:0%;
margin:0;
}
.date-posts {
    margin: 0;
    padding: 0;
}
.post-outer, .inline-ad {
padding: 0px 0;
}

.post-outer:first-child {
padding-top: 0;
border-top: none;
}
.post-outer:last-child, .inline-ad:last-child {
border-bottom: none;
}
.post-body {
position: relative;
}


#comment-editor {
display:block;
    width: 100%;
   
}

h1.post-title, h2.post-title  {
font: normal bold  22px Segoe WP;
color: #d52a33;
}
 
h2.post-title a:hover {
color: #d52a33;
text-decoration: underline;
}
.post-header {
margin: 0 0 -1em;
}
.post-body {
line-height: 1.4;
}
.post-outer h3 {
color: #333333;
}
.post-footer {
margin: 1.5em 0 0;
}


}
.blog-feeds, .post-feeds {
margin: 1em 0;
text-align: center;
color: #333333;
}
.blog-feeds a, .post-feeds a {
color: #d52a33;
}
.blog-feeds a:visited, .post-feeds a:visited {
color: #7d181e;
}
.blog-feeds a:hover, .post-feeds a:hover {
color: #d52a33;
}
  

}
/* Comments */
  /*Blogger Threaded Comments Styles */
.comments{overflow:hidden}
.comments h3{display:inline;padding:10px;line-height:40px}
.comments h3,.comments .comment-header,.comments .comment-thread.inline-thread .comment{position:relative}
.comments h3,.comments .continue a{background:#d80556}
.comments h3,.comments .user a,.comments .continue a{font-size:16px}
.comments h3,.comments .continue a{font-weight:normal;color:#fff}
.comments h3:after{content:"";position:absolute;bottom:-10px;left:10px;border-top:10px solid #d80556;border-right:20px solid transparent;width:0;height:0;line-height:0}
.comments .avatar-image-container img{border:0}
.comment-thread{color:#111}
.comment-thread a{color:#777}
.comment-thread ol{margin:0 0 20px}
.comment-thread .comment-content a,.comments .user a,.comments .comment-thread.inline-thread .user a{color:#d80556}
.comments .avatar-image-container,.comments .avatar-image-container img{width:48px;max-width:48px;height:48px;max-height:48px}
.comments .comment-block,.comments .comments-content .comment-replies,.comments .comment-replybox-single{margin-left:60px}
.comments .comment-block,.comments .comment-thread.inline-thread .comment{border:1px solid #ddd;background:#f9f9f9;padding:10px}
.comments .comments-content .comment{margin:15px 0 0;padding:0;width:100%;line-height:1em}
.comments .comments-content .icon.blog-author{position:absolute;top:-12px;right:-12px;margin:0;background-image: url(https://1.bp.blogspot.com/-EJmwh15Urmc/T89WMFenyGI/AAAAAAAAGlg/Lt8N7DprwFU/s320/author-pink.png);width:36px;height:36px}
.comments .comments-content .inline-thread{padding:0 0 0 20px}
.comments .comments-content .comment-replies{margin-top:0}
.comments .comment-content{padding:5px 0;line-height:1.4em}
.comments .comment-thread.inline-thread{border-left:1px solid #ddd;background:transparent}
.comments .comment-thread.inline-thread .comment{width:auto}
.comments .comment-thread.inline-thread .comment:after{content:"";position:absolute;top:10px;left:-20px;border-top:1px solid #ddd;width:10px;height:0px}
.comments .comment-thread.inline-thread .comment .comment-block{border:0;background:transparent;padding:0}
.comments .comment-thread.inline-thread .comment-block{margin-left:48px}
.comments .comment-thread.inline-thread .user a{font-size:13px}
.comments .comment-thread.inline-thread .avatar-image-container,.comments .comment-thread.inline-thread .avatar-image-container img{width:36px;max-width:36px;height:36px;max-height:36px}
.comments .continue{border-top:0;width:100%}
.comments .continue a{padding:10px 0;text-align:center}
.comment .continue{display:none}
.comment-editor{width:103%!important}
.comment-form{width:100%;max-width:100%}

/* Footer */
.footer-outer {
margin: -20px 0 -1px;
padding: 20px 0 0;
color: #333333;
overflow: hidden;
margin-bottom:-1px;
}
.footer-fauxborder-left {
border-top: 1px solid #000000;
background: #fefdfa none repeat scroll 0 0;
-moz-box-shadow: 0 0 20px rgba(0, 0, 0, .2);
-webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .2);
-goog-ms-box-shadow: 0 0 20px rgba(0, 0, 0, .2);
box-shadow: 0 0 20px rgba(0, 0, 0, .2);

}
/* Mobile */
body.mobile {
background-size: auto;
}
.mobile .body-fauxcolumn-outer {
background: transparent none repeat scroll top left;
}
*+html body.mobile .main-inner .column-center-inner {
margin-top: 0;
}
.mobile .main-inner .widget {
padding: 0 0 15px;
}
.mobile .main-inner .widget h3 + div,
.mobile .footer-inner .widget h3 + div {
border-top: none;
padding-top: 0;
}
.mobile .footer-inner .widget h3 {
padding: 0.5em 0;
border-bottom: none;
}
.mobile .main-inner .widget .widget-content {
margin: 0;
padding: 7px 0 0;
}
.mobile .main-inner .widget ul,
.mobile .main-inner .widget #ArchiveList ul.flat {
margin: 0 -45px 0;
}
.mobile .main-inner .widget h3.date-header {
right: 0;
}
.mobile .date-header span {
padding: 0.4em 0;
}
.mobile .date-outer:first-child {
margin-bottom: 0;
border: 1px solid #000000;
-moz-border-radius-topleft: 5px;
-moz-border-radius-topright: 5px;
-webkit-border-top-left-radius: 5px;
-webkit-border-top-right-radius: 5px;
-goog-ms-border-top-left-radius: 5px;
-goog-ms-border-top-right-radius: 5px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}
.mobile .date-outer {
border-color: #000000;
border-width: 0 1px 1px;
}
.mobile .date-outer:last-child {
margin-bottom: 0;
}
.mobile .main-inner {
padding: 0;
}
.mobile .header-inner .section {
margin: 0;
}
.mobile .post-outer, .mobile .inline-ad {
padding: 0px 0;
}
.mobile .tabs-inner .section {
margin: 0 10px;
}
.mobile .main-inner .widget h3 {
margin: 0;
padding: 0;
}
.mobile .main-inner .widget h3.date-header span {
padding: 0;
}
.mobile .main-inner .widget .widget-content {
margin: 0;
padding: 7px 0 0;
}
.mobile #blog-pager {
border: 1px solid transparent;
background: #fefdfa none repeat scroll 0 0;
}
.mobile .main-inner .column-left-inner,
.mobile .main-inner .column-right-inner {
background: transparent none repeat 0 0;
-moz-box-shadow: none;
-webkit-box-shadow: none;
-goog-ms-box-shadow: none;
box-shadow: none;
}
.mobile .date-posts {
margin: 0;
padding: 0;
}
.mobile .footer-fauxborder-left {
margin: 0;
border-top: inherit;
}
.mobile .main-inner .section:last-child .Blog:last-child {
margin-bottom: 0;
}




.mobile-link-button a:link, .mobile-link-button a:visited {
color: #ffffff;
}




/* estilos para heading tag h2 */
.post-body h2 { 
font-size: 20px;
color:#000; /* edite cor da fonte */

}

/* estilos para heading tag h3 */
.post-body h3 { 
font-size: 18px; 
color: #25991C; /* edite cor da fonte */

}

/* estilos para heading tag h4 */
.post-body h4 { 
font-size: 15px;  
color:#444; /* edite cor da fonte */
 text-align: center;

}

.swt-snippet {/* SWT Post snippet by Showeblogin*/
clear: both;
float: none;
margin: 10px;
padding: 5px;
background: #F3F1E6;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-top: 1px solid #bbb;
border-left: 1px solid #bbb;
-moz-box-shadow: 0 1px 2px #f2f2f2;
-webkit-box-shadow: 0 1px 2px #f2f2f2;}
#p468, #p468 a{
font-size: 110%;
text-decoration: none;
display: none;
font-weight: bold;
font-family: 'Courier New', Courier, monospace;
}
span.swtSummary {
color: #575757;
font: italic 13px/21px Georgia, "Times New Roman", sans-serif;
}
#p468::after {
content: ": ";color: #140709;font-weight:bold;letter-spacing: .0625em;
}
.swt-snippet,title{text-align:center;


}
.swt-snippet,img { float: center;}
.swt-snippet, li {
display: none;

}

.mobile .blogger-iframe-colorize {
 
display: block !important;
 
}
 
/*Popular Post CSS */
#PopularPosts1 ul{margin:0;padding:5px 0;list-style-type:none}
#PopularPosts1 ul li{position:relative;margin:5px 0;border:0;padding:10px}
#PopularPosts1 ul li:first-child{background:#ff4c54;width:91%}
#PopularPosts1 ul li:first-child:after{content:"1"}
#PopularPosts1 ul li:first-child + li{background:#ff764c;width:88%}
#PopularPosts1 ul li:first-child + li:after{content:"2"}
#PopularPosts1 ul li:first-child + li + li{background:#ffde4c;width:85%}
#PopularPosts1 ul li:first-child + li + li:after{content:"3"}
#PopularPosts1 ul li:first-child + li + li + li{background:#c7f25f;width:82%}
#PopularPosts1 ul li:first-child + li + li + li:after{content:"4"}
#PopularPosts1 ul li:first-child + li + li + li + li{background:#33c9f7;width:79%}
#PopularPosts1 ul li:first-child + li + li + li + li:after{content:"5"}
#PopularPosts1 ul li:first-child + li + li + li + li +li{background:#7ee3c7;width:76%}
#PopularPosts1 ul li:first-child + li + li + li + li + li:after{content:"6"}
#PopularPosts1 ul li:first-child + li + li + li + li + li + li{background:#f6993d;width:73%}
#PopularPosts1 ul li:first-child + li + li + li + li + li + li:after{content:"7"}
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li{background:#EDB0EE;width:70%}
#PopularPosts1 ul li:first-child + li + li + li + li + li  + li + li:after{content:"8"}
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li +li{background:#C0C0FF;width:67%}
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li + li:after{content:"9"}
#PopularPosts1 ul li:first-child + li + li + li + li + li +li + li + li + li {background:#C0C0C0;width:64%}
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li + li + li:after{content:"10"}
#PopularPosts1 ul li:first-child + li + li + li + li + li +li + li + li + li +li{background:#C0C0C0;width:61%}
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li + li + li + li:after{content:"11"}
#PopularPosts1 ul li:first-child:after,
#PopularPosts1 ul li:first-child + li:after,
#PopularPosts1 ul li:first-child + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li + li + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li + li +  li + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li + li + li + li:after,
#PopularPosts1 ul li:first-child + li + li + li + li + li + li + li + li + li  + li + li:after,

#PopularPosts1 ul li:first-child + li + li + li + li + li + li:after{position:absolute;top:20px;right:-15px;border-radius:50%;background:#353535;width:30px;height:30px;line-height:1em;text-align:center;font-size:28px;color:#fff;}

#PopularPosts1 ul li .item-thumbnail{ float:left;border:0;margin-right:10px;background:transparent;padding:0;width:4.0em;height:4.0em; }
  

#PopularPosts1 ul li a{ font-size:12px;color:#444;text-decoration:none}
#PopularPosts  ul  li {list-style-type:none; }

#PopularPosts1 ul li a:hover{color:#fff;text-decoration:none}

#PopularPosts1 img{width:4.0em;height:4.0em;;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;transition:all 0.5s ease;padding:1px;background: #eee;background: -webkit-gradient(linear, left top, left bottom, from(#eee), color-stop(0.5, #ddd), color-stop(0.5, #c0c0c0), to(#aaa));background: -moz-linear-gradient(top, #eee, #ddd 50%, #c0c0c0 50%, #aaa);-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: 0 0 3px rgba(0,0,0,.7);-moz-box-shadow: 0 0 3px rgba(0,0,0,.7);box-shadow: 0 0 3px rgba(0,0,0,.7);}

#PopularPosts1 img:hover{-moz-transform: scale(1.2) rotate(-350deg);-webkit-transform: scale(1.2) rotate(-350deg);-o-transform: scale(1.2) rotate(-350deg);-ms-transform: scale(1.2) rotate(-350deg);transform: scale(1.2) rotate(-350deg);-webkit-box-shadow: 0 0 20px rgba(255,0,0,.4), inset 0 0 20px rgba(255,255,255,1);-moz-box-shadow: 0 0 20px rgba(255,0,0,.4), inset 0 0 20px rgba(255,255,255,1);box-shadow: 0 0 20px rgba(255,0,0,.4), inset 0 0 20px rgba(255,255,255,1);}
 




a.botao-wpp img {
width: 40px;
height: 40px;

}

div#HTML3 {
    border: #ffffff;
}

html body {
-webkit-text-size-adjust:none;
min-width:0;

padding:0;
padding-top: 0;  
  
font-size:.9em;
}

html .content-outer,html .content-fauxcolumn-outer,html .region-inner {
min-width:0;
}

html .main-inner .column-right-outer,html .main-inner .column-left-outer {
clear:both;
}

html .content-outer,html .content-inner,html .header-inner,html .header-inner .section,html .tabs-outer,html .tabs-inner,html .main-inner,html .footer-outer,html .footer-inner,html .main-inner .column-center-inner .section,html .section {
margin:0;
padding:0;
}
  
html .main-inner .column-center-inner,html .main-inner .column-left-inner,html .main-inner .column-right-inner {
margin:0;
padding:0;
}
html .main-inner .columns {
        padding-left: 0(main.column.left.width);
        padding-right: 0;
      }
html .header-outer {
margin:0 0 10px;
padding:0;
}

html .main-outer {
margin:10px 0 0;
padding:0;
}

html .tabs-inner .widget select {
appearance:none;
-webkit-appearance:none;
-moz-appearance:none;
background:transparent;
border:0;
color:inherit;
z-index:10;
position:relative;
width:100%;
font-size:14px;
}

.mobile .tabs-inner .PageList .widget-content {
font-family:Arial;
font-size:14px;
padding:5px 10px;

background: transparent;
border-top: 1px solid;
border-color: #908d6a;
color: #333333;
}

.mobile .tabs-inner .PageList .widget-content .pagelist-arrow {
position:absolute;
height:100%;
top:0;
right:0;
padding:0 10px;
line-height:2.5em;
border-left: 1px solid #908d6a;
}







html .Header h1 {
font-size:240%;
margin-bottom:0;
}

html .Header .description {
font-size:110%;
padding:0;
margin:0;
}

html h3.post-title {
font-size:170%;
}

html .post-body {
line-height:1.3;
}

html .post-body,html .post-header {
font-size:100%;
}




html .mobile-index-contents .post-body {
font-size:100%;
}

html .post-footer {
font-size:100%;
}

html .post-footer-line {
margin:10px 0;
}

html .comments h4 {
font-size:130%;
}

html .widget {
margin:0 0 10px;
clear:both;
}

html .post-share-buttons {
display:-webkit-inline-box;
}

html .header-inner .widget {
margin-left:0;
margin-right:0;
}

html .header-inner .Header .titlewrapper {
padding:0;
margin:10px;
}

html .header-inner .Header .descriptionwrapper {
padding:0;
margin:10px;
}

html .main-inner .date-outer {
padding:0%;
margin:0;
}



html .post-outer {
padding:0;
margin:0;
}

html .post-feeds {
padding:0 10px;
}

html #blog-pager {
margin:10px 0 0;
padding:10px;
font-size:100%;
}

 

.mobile #blog-pager-older-link {
width:30px;
margin-right:5px;
}

 .mobile #blog-pager-newer-link {
width:30px;
margin-left:5px;
}

 .mobile #blog-pager-home-link {
width:140px;
margin:0 auto;
}

html .blog-pager-older-link,html .blog-pager-newer-link {
font-size:200%;
font-family:Arial;
line-height:17px!important;
}

html .blog-pager-older-link,html .home-link,html .blog-pager-newer-link {
background-color:transparent;
display:block;
height:20px;
line-height:20px;
padding:0;
width:100%;
}






html .BLOG_mobile_video_class {
display:inline;
}

html .BLOG_video_class {
display:none;
}

html .main-inner .widget {
padding:0;
margin:0;
}

html a:hover {
text-decoration:none;
}

html .Attribution {
padding:5px 0 10px;
}

html #Header1 {
margin:0;
}

.mobile-date-outer {
border-bottom:1px solid #ddd;
margin-bottom:15px;
}

.mobile-date-outer a {
display:block;
}

.mobile-date-outer>div {
position:relative;
}

.mobile-index-contents {
margin-right:25px;
min-height:25px;
color: #333333;
}

.mobile-index-title {
font:120% 'Trebuchet MS',Trebuchet,Verdana,sans-serif;
margin-top:.5em;
margin-bottom:.5em;
width:240px;
}

.mobile-index-thumbnail {
float:left;
margin:.4em .5em 0 0;
}

.mobile-index-thumbnail img {background: url(https://www.trapashowplay.com/);
width:72px!important;
}

html .mobile-index-arrow {
font-size:82pt;
font-family:Arial;
display:0;
-webkit-box-align:center;
height:100%;
line-height:.3em;
position:absolute;
top:0;
right:0;
}


.mobile-desktop-link {
margin-top:15px;
margin-bottom:0;
}

html .comment-form {
max-width:100%;
}

html #comment-actions {
max-width:260px;
}

html .Profile {
padding:5px;
}

html .Attribution {
clear:both;
}

html .AdSense {
line-height:0;
text-align:center;
}

html {
height:95%;
}

body {
min-height:100%;
_height:100%;
position:relative;
}
.header-inner .widget {
margin-left:30px;
margin-right:30px;
}
.share-button {
width:20px;
height:20px;
background:url(https://www.blogger.com/img/share_buttons_20_3.png) no-repeat left!important;
overflow:hidden;
margin-left:-1px;
position:relative;
}

.mobile a.mobile-share-panel-button {
background:#fff url(https://www.blogger.com/img/mobile_share_icons4.png) no-repeat left!important;
border-bottom:1px solid #eee;
height:50px;
line-height:30px;
padding:10px 0 10px 65px;
width:100%;
-webkit-box-sizing:border-box;}

}

  




.post-summary {
    padding-top: 8px
}

section,
nav,
article,
aside,
hgroup,
header,
footer {
    display: block
}

.post-body ul, li{
    display: block;
    max-width: 100%;
   margin-right: 13px;

}



html .blog-pager-older-link,html .blog-pager-newer-link {
font-size:300%;
font-family:Arial;
line-height:17px!important;
}

html .blog-pager-older-link,html .home-link,html .blog-pager-newer-link {
background-color:transparent;
display:block;
height:30px;
line-height:20px;
padding:0;
width:100%;
}



#blog-pager-older-link {
width:30px;
   font-size:18px;
font-family:Arial;
text-align:center;
-webkit-border-radius:2px;
border-radius:2px;
margin
height:20px;
padding:3px 6px;


}

  
 #blog-pager-home-link, #blog-pager-newer-link,#blog-pager-older-link {
  background:grey url(https://www.blogblog.com/1kt/awesomeinc/tabs_gradient_light.png) repeat scroll 0 0;

}
 #blog-pager-newer-link {
width:30px;
   font-size:18px;
font-family:Arial;
text-align:center;
-webkit-border-radius:2px;
border-radius:2px;
margin
height:20px;
padding:3px 6px;


}

 #blog-pager-home-link {
width:140px;
margin:0 auto;
   font-size:18px;
font-family:Arial;
text-align:center;
-webkit-border-radius:2px;
border-radius:2px;
margin
height:20px;
padding:3px 6px;
}
.index-thumbnail img {background: url(https://www.trapashowplay.com/);
width:200px!important;
}
.index-thumbnail {
float:left;
margin:.4em .5em 0 0;
}
.index-contents {
margin-right:25px;
min-height:25px;
color: #333333;
}
.date-outer>div {
position:relative;
}
.date-outer a {
display:block;
}
.index-arrow {
    font-size: 200pt;
    font-family: Arial;
    display: 0;
    -webkit-box-align: center;
    height: 100%;
    line-height: .7em;
    position: absolute;
    right: 50px;

}
  
  .index-arrow{
  color: grey;
  
  }
  
.index-title {
    font: 120% 'Trebuchet MS',Trebuchet,Verdana,sans-serif;
    margin-top: .5em;
    margin-bottom: .5em;
    width: 240px;
}
  
.widget {
    line-height: 1.4;} 

.goog-inline-block.share-button {

height:50px;
line-height:30px;
margin-right: 8%;
width: 21%;
}
.post-share {
text-align:left; /* ALINHAMENTO DOS BOTÕES, NÃO ALTERE */
margin-top:10px; /* DEFINE A DISTÂNCIA EM RELAÇÃO AO TOPO DO POST  */
margin-bottom:20px; /* DEFINE A DISTÂNCIA EM RELAÇÃO AO FOOTER DO POST */
border-color: 1px #000000;
}
.post-share a {
display:inline-block;
color: #ffffff;
}
.post-share a {
display:inline-block;
}



.svg-icon-24,
.svg-icon-24-button {
 ursor: pointer;
height: 35px;
width: 35px;
min-width: 35px;
}

time,mark {
display:inline;
}
body {
-webkit-text-size-adjust: none;
font-size: .9em;

margin-right: 2%;
margin-left: 2%;
padding:0 0 1px;
}


.content-outer,.header-outer,.tabs-outer,.main-outer,.main-inner,.footer-outer,.post,.comments,.widget,.date-header,.inline-ad {
position:relative;
min-height:0;
_position:static;
_height:1%;
}
.footer-outer {
margin-bottom:-1px;
}
.tabs-inner {
padding:0 15px;
}
.main-inner {
padding:30px 0;
}
.main-inner .column-center-inner,.main-inner .column-left-inner,.main-inner .column-right-inner {
padding:0px;
}

.footer-inner {
padding:30px 15px;
}
.section {
margin:0 17px;
}
.widget {
margin:30px 0;
_margin:0 0 10px;
}
.section:first-child .widget:first-child {
margin-top:0;
}
.section:first-child #uds-searchControl+.widget {
margin-top:0;
}
.section:last-child .widget:last-child {
margin-bottom:0;
}
.tabs:first-child .widget {
margin-bottom:0;
}
body .navbar {
height:30px;
padding:0;
margin:0;
}
body .navbar .Navbar {
position:absolute;
z-index:10;
left:0;
width:100%;
margin:0;
padding:0;
background:none;
border:none;
}

.header-inner .section {
margin:0;
}
.header-inner .widget {
margin-left:30px;
margin-right:30px;
}
.content {
position:relative;
word-wrap:break-word;
}
.content-outer,.region-inner {
min-height:0;
margin:0 auto;
}
.columns {
zoom:1;
}
.loading .columns {
overflow:hidden;
}
.columns-inner {
_height:1%;
min-height:0;
}
.column-center-outer,.column-left-outer,.column-right-outer {
position:relative;

_display:inline;
_overflow:hidden;
}
.column-center-outer {
width:100%;
}
.column-left-outer {
margin-left:-100%;
}
.fauxcolumns {
position:relative;
_height:1%;
}
.fauxcolumn-outer {
position:absolute;
top:0;
bottom:0;
height:expression(this.parentNode.offsetHeight+'px');
overflow:hidden;
}
.fauxcolumn-outer .fauxborder-left,.fauxcolumn-outer .fauxborder-right,.fauxcolumn-inner {
height:100%;
}
.fauxcolumn-left-outer {
left:0;
}
.fauxcolumn-right-outer {
right:0;
}
.cap-top,.cap-bottom {
position:relative;
height:0;
background-repeat:repeat-x;
}
.cap-top .cap-left,.cap-top .cap-right,.cap-bottom .cap-left,.cap-bottom .cap-right {
height:100%;
background-repeat:no-repeat;
}
.cap-top,.cap-top .cap-left {
background-position:top left;
}
.cap-bottom,.cap-bottom .cap-left {
background-position:bottom left;
}
.cap-top .cap-left,.cap-bottom .cap-left {
float:left;
}
.cap-top .cap-right {
background-position:top right;
float:right;
}
.cap-bottom .cap-right {
background-position:bottom right;
float:right;
}
.fauxborder-left {
background-position:top left;
background-repeat:repeat-y;
position:relative;
_height:1%;
}
.fauxborder-right {
background-position:top right;
background-repeat:repeat-y;
position:absolute;
right:0;
height:100%;
_height:expression(this.parentNode.offsetHeight+'px');
}
table.section-columns {
border:none;
table-layout:fixed;
width:100%;
position:relative;
}
table.columns-2 td.columns-cell {
width:50%;
}
table.columns-3 td.columns-cell {
width:33.33%;
}
table.columns-4 td.columns-cell {
width:25%;
}
table.section-columns td.columns-cell {
vertical-align:top;
}
.body-fauxcolumns,.content-fauxcolumns {
position:absolute;
top:0;
left:0;
z-index:-1;
height:100%;
_height:expression(this.parentNode.offsetHeight+'px');
width:100%;
overflow:hidden;
}
.body-fauxcolumns .fauxcolumn-outer {
width:100%;
}
.content-fauxcolumns .fauxcolumn-outer {
position:relative;
overflow:visible;
height:100%;
margin:0 auto;
}
.content-fauxcolumns .fauxcolumn-left {
width:100%;
}
.header-inner .Header {
margin:0;
}
.header-inner .Header #header-inner {
overflow:hidden;
}
.header-inner .Header .titlewrapper {
padding:22px 30px 0;
}
.header-inner .Header .descriptionwrapper {
padding:0 30px;
margin-bottom:25px;
}
.Header h1 {
margin-bottom:10px;
}
.Header .description {
margin:.5em 0 10px;
padding:0 2px;
}
a img {
border:none;
position:relative;
}
h1,h2,h3,h4 {
margin:0;
position:relative;
}
h1 a:hover {
text-decoration:none;
}
h3 a:hover {
text-decoration:none;
}
.tabs .widget h2 {
display:none;
}
.tabs .widget ul,.tabs .widget ul {
margin:0;
padding:0;
overflow:hidden;
list-style:none;
}
.tabs .widget li,.tabs .widget li {
margin:0;
padding:0;
float:left;
}
.tabs .widget li a:hover {
text-decoration:none;
}
.widget {
line-height:1.4;
}
.widget ul {
padding:0;
margin:0;
line-height:1.2;
}
.BlogList ul {
padding:0;
}
.BlogList li .blog-content {
position:relative;
}
.widget li,.BlogArchive #ArchiveList ul.flat li {
padding:.1em 0;
margin:0;
text-indent:0;
}
.widget .post-body ul {
padding:0 2.5em;
margin:.5em 0;
line-height:1.4;
}
.widget .post-body li {
margin-bottom:.25em;
padding-top:0;
padding-bottom:0;
}





.item-control {
display:none;
}
.item-control a,.item-action a {
text-decoration:none!important;
}
.widget-item-control {
float:right;
height:20px;
margin-top:-20px;
position:relative;
z-index:10;
}
.widget-item-control a {
opacity:.5;
}
.widget-item-control a:hover {
opacity:1;
}
.widget .widget-item-control a img {
border:none;
padding:none;
background:none;
-moz-box-shadow:none;
-webkit-box-shadow:none;
-ie-box-shadow:none;
box-shadow:none;
}
.post-body {
width:100%;
_overflow:hidden;
}
.post-header,.post-footer {
line-height:1.6;
}
.post-footer-line>* {
margin-right:1em;
}
.post-footer-line>:last-child {
margin-right:0;
}
.post-timestamp {
margin-left:-1em;
}
.post-footer-line>:first-child {
margin-left:0;
}
.post .tr-caption-container {
position:relative;
}
.inline-ad {
margin:2em 0;
text-align:center;
line-height:0;
}
#comments .comment-author {
padding-left:25px;
}
.comment-body {
margin:.5em 25px;
}
.comment-footer {
margin:.5em 25px 1.5em;
}
.comment-body p {
margin:0;
}
#comments .avatar-comment-indent .comment-author {
margin-left:-45px;
padding-left:45px;
}
.deleted-comment {
font-style:italic;
opacity:.5;
}
.Profile img {
margin:0 .75em .5em 0;
}
.Profile .profile-datablock {
margin:0 0 .5em;
}
dt {
font-weight:bold;
}
table.section-columns td.first.columns-cell {
border-left:none;
}
#layout .header-outer,#layout .tabs-outer,#layout .main-outer,#layout .footer-outer {
margin:5px 0;
}
#layout .cap-top,#layout .cap-bottom {
display:none;
}
#layout .region-inner {
padding:0 10px;
margin:0;
min-width: 0;
width: auto;
}
#layout .main-inner .column-center-inner,#layout .main-inner .column-left-inner,#layout .main-inner .column-right-inner {
padding:0 5px;
}
.post-footer abbr {
border:none;
}
.author-profile {
margin:5px 5px 0 0;
overflow:hidden;
}
.author-profile img {
border:1px solid #efefef;
float:left;
margin-right:5px;
}
#blog-pager-newer-link {
float:left;

}
#blog-pager-older-link {
float:right;
}
#blog-pager {
margin:1em 0;
text-align:center;
overflow:hidden;
padding: 15px;
font-size: 120%;
background-color: #FFFFFF;


margin-top: 1em;
}
.backlink-toggle-zippy {
padding-right:11px;
margin-right:.1em;
cursor:pointer;
cursor:hand;
background:url(https://www.blogger.com/img/triangle_ltr.gif) no-repeat left center;
}

.expanded-backlink .backlink-toggle-zippy {
background-image:url(https://www.blogger.com/img/triangle_ltr.gif);
}
.collapsed-backlink .collapseable {
display:block;
}
.status-msg-wrap{
display:none;
}
.status-msg-border {
border:1px solid #000;
filter:alpha(opacity=40);
-moz-opacity:.4;
opacity:.4;
width:100%;
position:relative;
}
.status-msg-bg {
background-color:#ccc;
opacity:.8;
filter:alpha(opacity=30);
-moz-opacity:.8;
width:100%;
position:relative;
z-index:1;
}
.status-msg-body {
text-align:center;
padding:.3em 0;
width:100%;
position:absolute;
z-index:4;
}
.status-msg-hidden {
visibility:hidden;
padding:.3em 0;
}
.status-msg-wrap a {
padding-left:.4em;
text-decoration:inline;
}
.reactions-label {
margin:3px 0 0;
}
.reactions-label-cell {
line-height:2.3em;
}
.reactions-iframe {
background:transparent;
height:2.3em;
width:100%;
border:0;
}
#comment-actions {
background:transparent;
border:0;
padding:0;
position:absolute;
height:25px;
}
#comments .blogger-comment-icon,.blogger-comment-icon {
line-height:16px;
background:url(https://www.blogger.com/img/b16-rounded.gif) left no-repeat;
padding-left:20px;
}
#comments .openid-comment-icon,.openid-comment-icon {
line-height:16px;
background:url(https://www.blogger.com/img/openid16-rounded.gif) left no-repeat;
padding-left:20px;
}
#comments .anon-comment-icon,.anon-comment-icon {
line-height:16px;
background:url(https://www.blogger.com/img/anon16-rounded.gif) left no-repeat;
padding-left:20px;
}
.comment-form {
clear:both;
_width:410px;
}
.comment-link {
white-space:nowrap;
}
.paging-control-container {
float:right;
margin:0 6px 0 0;
font-size:80%;
}
.unneeded-paging-control {
visibility:hidden;
}	
#comments-block .avatar-image-container img {
-ms-interpolation-mode:bicubic;
border:1px solid #ccc;
float:right;
}
#comments-block .avatar-image-container.avatar-stock img {
border-width:0;
padding:1px;
}
#comments-block .avatar-image-container {
height:37px;
left:-45px;
position:absolute;
width:37px;
}
#comments-block.avatar-comment-indent {
margin-left:45px;
position:relative;
}
#comments-block.avatar-comment-indent dd {
margin-left:0;
}
iframe.avatar-hovercard-iframe {
border:0 none;
padding:0;
width:25em;
height:9.4em;
margin:.5em;
}
.comments {
clear:both;
margin-top:10px;
margin-bottom:0;
}
.comments .comments-content {
margin-bottom:16px;
}

.comments .comments-content {
margin-bottom:16px;
}

.comments .comment .comment-actions a {
padding-right:5px;
padding-top:5px;
}

.comments .comment .comment-actions a:hover {
text-decoration:underline;
}

.comments .comments-content .comment-thread ol {
list-style-type:none;
padding:0;
text-align:left;
}

.comments .comments-content .inline-thread {
padding:.5em 1em;
}

.comments .comments-content .comment-thread {
margin:8px 0;
}

.comments .comments-content .comment-thread:empty {
display:none;
}

.comments .comments-content .comment-replies {
margin-left:36px;
margin-top:1em;
}

.comments .comments-content .comment {
margin-bottom:16px;
padding-bottom:8px;
}

.comments .comments-content .comment:first-child {
padding-top:16px;
}

.comments .comments-content .comment:last-child {
border-bottom:0;
padding-bottom:0;
}

.comments .comments-content .comment-body {
position:relative;
}

.comments .comments-content .user {
font-style:normal;
font-weight:bold;
}

.comments .comments-content .icon.blog-author {
display:inline-block;
height:18px;
margin:0 0 -4px 6px;
width:18px;
}

.comments .comments-content .datetime {
margin-left:6px;
}

.comments .comments-content .comment-header,.comments .comments-content .comment-content {
margin:0 0 8px;
}

.comments .comments-content .comment-content {
text-align:justify;
}

.comments .comments-content .owner-actions {
position:absolute;
right:0;
top:0;
}

.comments .comments-replybox {
border:none;
height:250px;
width:100%;
}

.comments .comment-replybox-single {
margin-left:48px;
margin-top:5px;
}

.comments .comment-replybox-thread {
margin-top:5px;
}

.comments .comments-content .loadmore a {
display:block;
padding:10px 16px;
text-align:center;
}

.comments .thread-toggle {
cursor:pointer;
display:inline-block;
}

.comments .continue {
cursor:pointer;
}

.comments .continue a {
display:block;
font-weight:bold;
padding:.5em;
}

.comments .comments-content .loadmore {
cursor:pointer;
margin-top:3em;
max-height:3em;
}

.comments .comments-content .loadmore.loaded {
max-height:0;
opacity:0;
overflow:hidden;
}

.comments .thread-chrome.thread-collapsed {
display:none;
}

.comments .thread-toggle {
display:inline-block;
}

.comments .thread-toggle .thread-arrow {
display:inline-block;
height:6px;
margin:.3em;
overflow:visible;
padding-right:4px;
width:7px;
}

.comments .thread-expanded .thread-arrow {
background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVR42mNgwAfKy8v/48I4FeA0AacVDFQBAP9wJkE/KhUMAAAAAElFTkSuQmCC) no-repeat scroll 0 0 transparent;
}

.comments .thread-collapsed .thread-arrow {
background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg==) no-repeat scroll 0 0 transparent;
}

.comments .avatar-image-container {
float:left;
max-height:36px;
overflow:hidden;
width:36px;
}

.comments .avatar-image-container img {
max-width:36px;
}

.comments .comment-block {
margin-left:48px;
position:relative;
}
@media screen and max-device-width480px{
.comments .comments-content .comment-replies {
margin-left:0;
}
}
table.tr-caption-container {
padding:4px;
margin-bottom:.5em;
}
td.tr-caption {
font-size:80%;
}

.icon-action {
border-style:none!important;
margin:0 0 0 .5em!important;
vertical-align:middle;
}

.comment-action-icon {
width:13px;
height:13px;
margin-top:3px;
}

.delete-comment-icon {
background:url(https://www.blogger.com/img/icon_delete13.gif) no-repeat left;
padding:7px;
}

#comment-popup {
position:absolute;
visibility:hidden;
width:100px;
height:20px;
}

@media all{
.BLOG_mobile_video_class {
display:none;
}
}
@media handheld{
.BLOG_mobile_video_class {
display:inline;
}

.BLOG_video_class {
display:none;
}
}

.post-share-buttons {
display:inline-block;
margin-top:.5em;
vertical-align:middle;
}
.dummy-container,
.google-plus-share-container {
vertical-align:top;
padding-left:.3em;
}
a:hover.share-button {
text-decoration:none;
z-index:1;
}

.share-button-link-text {
display:block;
text-indent:-9999px;
}

.sb-email {
background-position:0 0!important;
}

a:hover.sb-email {
background-position:0 -20px!important;
}

a:active.sb-email {
background-position:0 -40px!important;
}

.sb-blog {
background-position:-20px 0!important;
}

a:hover.sb-blog {
background-position:-20px -20px!important;
}

a:active.sb-blog {
background-position:-20px -40px!important;
}

.sb-twitter {
background-position:-40px 0!important;
}

a:hover.sb-twitter {
background-position:-40px -20px!important;
}

a:active.sb-twitter {
background-position:-40px -40px!important;
}

.sb-facebook {
background-position:-60px 0!important;
}

a:hover.sb-facebook {
background-position:-60px -20px!important;
}

a:active.sb-facebook {
background-position:-60px -40px!important;
}

.sb-buzz {
display:none!important;
}

.sb-pinterest {
background-position:-100px 0!important;
}

a:hover.sb-pinterest {
background-position:-100px -20px!important;
}

a:active.sb-pinterest {
background-position:-100px -40px!important;
}

.goog-inline-block {
position:relative;
display:0;
display:inline-flex;
}
* html .goog-inline-block {
display:inline;
}
:first-child+html .goog-inline-block {
display:inline;
}
.goog-custom-button {
margin:2px;
border:0;
padding:0;
font-family:Arial,sans-serif;
color:#000;
text-decoration:none;
list-style:none;
vertical-align:middle;
cursor:default;
outline:none;
}
.goog-custom-button-outer-box,.goog-custom-button-inner-box {
border-style:solid;
border-color:transparent;
vertical-align:top;
}
.goog-custom-button-checked .goog-custom-button-outer-box,.goog-custom-button-checked .goog-custom-button-inner-box {
border-color:#ccc;
}
.goog-custom-button-outer-box {
margin:0;
border-width:1px 0;
padding:0;
}
.goog-custom-button-inner-box {
-moz-box-orient:vertical;
margin:0 -1px;
border-width:0 1px;
padding:3px 4px;
white-space:nowrap;
}

* html .goog-custom-button-inner-box {
left:-1px;
}

* html .goog-custom-button-rtl .goog-custom-button-outer-box {
left:-1px;
}

* html .goog-custom-button-rtl .goog-custom-button-inner-box {
right:auto;
}

:first-child+html .goog-custom-button-inner-box {
left:-1px;
}

:first-child+html .goog-custom-button-rtl .goog-custom-button-inner-box {
left:1px;
}

::root .goog-custom-button,::root .goog-custom-button-outer-box {
line-height:0;
}

::root .goog-custom-button-inner-box {
line-height:normal;
}
.goog-custom-button-active,.goog-custom-button-checked {
background-color:#faf6bc;
background-position:bottom left;
}
.blog-mobile-link {
padding:15px;
}
#mobile-share-button {
height:18px;
padding:1px 10px;
text-align:center;
vertical-align:top;
margin:0;
}

#mobile-share-button a {
display:block;
height:100%;
line-height:18px;
width:100%;
}

.mobile-share-panel-outer {
background:#444;
}

.mobile-share-panel-inner {
background:#fff;
border-bottom-left-radius:2px 2px;
border-bottom-right-radius:2px 2px;
border-radius:3px;
-webkit-border-radius:3px;
font-family:Arial;
font-size:18px;
color:#666;
}

.mobile .mobile-share-panel-inner a {
display:block;
color:#666;
}
.mobile-share-panel-title {
background:#f5f5f5;
border-bottom:1px solid #eee;
border-top-left-radius:2px 2px;
border-top-right-radius:2px 2px;
height:25px;
line-height:25px;
padding:10px 10px 10px 20px;
}
.mobile-share-panel-button-close {
font-size:26px;
float:right;
height:25px;
line-height:25px;
text-align:center;
width:25px;
}
.mobile a.mobile-share-panel-button-email {
background-position:10px 0!important;
}

.mobile a.mobile-share-panel-button-facebook {
background-position:10px -50px!important;
}

.mobile a.mobile-share-panel-button-twitter {
background-position:10px -100px!important;
}

.mobile a.mobile-share-panel-button-googleplus {
background:#fff url(https://www.gstatic.com/images/icons/gplus-32.png) no-repeat left!important;
background-position:19px 9px!important;
}

.mobile a.mobile-share-panel-button-buzz {
background-position:10px -150px!important;
border-bottom-left-radius:2px 2px;
border-bottom-right-radius:2px 2px;
}
.crosscol .PageList UL,.footer .PageList UL {
list-style:none;
margin:0;
padding:0;
}
.crosscol .PageList LI,.footer .PageList LI {
list-style:none;
float:left;
padding-right:.75em;
margin:.75em;
background:none;
}
.crosscol .PageList h3 {
display:none;
}
.PageList li a {
font-weight:normal;
text-align: left;
   
}
.PageList LI.selected A {
font-weight:bold;
text-decoration:none;
}

 
  
   
.profile-img {
float:left;
margin:0 5px 5px;
}
.profile-data {
margin:0;
}
.profile-datablock {
margin:.5em 0;
}
.profile-name-link {
background:no-repeat left top;
display:inline-block;
min-height:20px;
padding-left:20px;
}
.profile-textblock {
margin:.5em 0;
}

.container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 60%;
}
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.main-inner .widget h3 {
border-top: 1px solid #000000;
    padding: 0px;
    margin: 0px;
}
.toshcontainer { 
 position: relative; 
 padding-bottom: 56.25%; 
 height: 0; 
 overflow: hidden; 
 max-width: 100%; 
 height: auto; 
} 
.toshcontainer iframe, .embed-container object, .embed-container embed {
 position: absolute; 
 top: 0; 
 left: 0; 
 width: 100%; 
 height: 100%; 
}
#LinkList1 {
    margin-top: 0;
display: none;
}
div#container-page img {
   display: inline-block;
    float: left;
    margin: .9em;
}


  

li.related-post-item img {

max-width: 5.0em;
}
  
 .video-container { display: block; margin: 20px auto; width: 100%;  }

.youtube-player, .dmn-player { display: block; width: 100%; /* assuming that the video has a 16:9 ratio */  overflow: hidden; position: relative; width: 100%; height: 100%; cursor: hand; cursor: pointer; display: block; }
 

  
  
.youtube-player, .dmn-player {  padding-bottom: 45.25%;  }


  
  


 
  

img.youtube-thumb, img.dmn-thumb { bottom: 0; display: block; left: 0; margin: auto; max-width: 100%; width: 100%; position: absolute; right: 0; top: 0; height: auto;transition:all ease-in-out 0.25s; }
img.youtube-thumb:hover, img.dmn-thumb:hover {transform:scale(1.05);transition:all ease-in-out 0.25s; }
div.play-button { height: 100%; width: 100%; left: 50%; top: 50%; margin-left: -36px; margin-top: -36px; position: absolute; background: url("https://4.bp.blogspot.com/-utbhFgfPshw/WZHYz31PvYI/AAAAAAAADlo/jXV52iuUD1Mz9yATCClNLNOJZzxaHxSugCLcBGAs/s1600/play-button.png") no-repeat; }
#youtube-iframe, #dmn-iframe { width: 100%; height: 100%; position: absolute; top: 0; left: 0px;  }
 



.Destaque a {
 
   border:1px solid #25692A;
border-radius:4px;
display:inline-block;
cursor:pointer;
font-family:Verdana;
font-weight:bold;
font-size:18px;
padding:6px 10px;
text-decoration:none;
background: grey url(https://www.blogblog.com/1kt/awesomeinc/tabs_gradient_light.png) repeat-x scroll 0 -100px;  
}
.Destaque a:hover {
background:linear-gradient(to bottom, #68b465 7%, #abd5aa 100%);
}
 .Destaque a:link { 
  color:#ffffff;
  margin: 2px;
  }
  
  .first-items a {
    border: 1px solid #25692A;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    font-family: Verdana;
    font-weight: bold;
    font-size: 14px;
    padding: 6px 10px;
    text-decoration: none;
}
  
  .first-items a:hover {
background:linear-gradient(to bottom, #68b465 7%, #abd5aa 100%);
}
 
  .breadcrumbs a {
  
   border:1px solid #25692A;
border-radius:4px;
display:inline-block;
cursor:pointer;
font-family:Verdana;
font-weight:bold;
font-size:18px;
padding:6px 10px;
text-decoration:none;
  display:none;
}
.breadcrumbs a:hover {
background:linear-gradient(to bottom, #68b465 7%, #abd5aa 100%);
}
 
  
  div#Text1{
  
  font-size: 18px;
  }
  
   div#PageList1 a {
  text-align: center;
  border: 1px solid #25692A;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    font-family: Verdana;
    font-weight: bold;
    font-size: 35px;
    margin: 2px;
    width: 99%;
    text-decoration: none;
    color: #ffffff;
    background: grey url(https://www.blogblog.com/1kt/awesomeinc/tabs_gradient_light.png) repeat-x scroll 0 -100px;
}
  div#PageList1 img{
   text-align: center
  }
  
  
  
  
   
  
  }
    div#PageList1 a:hover {
    background:#000;
    
    }
    
    
 
  
  div#related-posts-widget a {
  display:inline-flex;
    margin: 15px;
    text-align: center;
    
}
  
  div#related-posts-widget a:hover
  {transform:scale(1.05);transition:all ease-in-out 0.25s; }
  
   
  div#related-posts-widget ul, li, img{
  display:inline-grid;
  }
 
  
 
 
   .tabs-inner .section:first-child {border-top: 0 solid #ffffff;}
   .section:first-child ul {
    border-top: 0.2em solid #333333;
    border-left: 0.2em solid #333333;
      border-right: 0.1em solid #ffffff;
    }




    ul {text-align: center;
      width: auto;
      height: auto;;
      background: #000000 none repeat-x scroll ;
      _background-image: none;
      border-bottom: 0.1em solid #ffffff;
      margin-top: 0;
      margin-left: auto;
      margin-right: auto;
      padding: 0.8em 0px;
      margin: 0px;
      padding:1.0em;
    }
    li  {
      display: inline-block;
    }
    li a {
      display: inline-block;
      padding: .5em 0.65em;
      background:#ffffff;
      color: #ffffff;
      font: normal normal 1.8em '
      Courier New'
      , Courier, FreeMono, monospace;
      color: #ffffff;
      border-left: 0.1em solid #ffffff;
      border-right: 0.1em solid #ffffff;
      text-align: center;
      font-size: 22px;
    }
    li:first-child a {border-left: 0.1em solid #ffffff;}
    li.selected a,  li a:hover {
      color: #ffffff;
      background-color: #ff0000;
      text-decoration: none;
    }


label.show-menu {font-size:15px;
  cursor: default;
      
}
     [type=checkbox]{ display:none; border: 5.2em; background-color:#000000; }input[type=checkbox]:checked ~ #menu{display: block;}@media screen and (max-width : 1824px){
      ul {position: static; display: none;}li h3 {margin-bottom: 0.em;}ul li, li a {width: 100%; }.show-menu {display:block; width:98%; height: 45px; background: #808080 url(https://www.blogblog.com/1kt/awesomeinc/tabs_gradient_light.png)  repeat-x scroll 0 -100px; margin-top: 0px; text-align:center;
overflow:hidden;

border: 2px solid #000000;
border-radius: 10.0em;
-webkit-border-top-left-radius: 2.5em;
-webkit-border-top-right-radius: 2.5em;


margin-top: 0px; color:#ff0000; font-size: 18px; text-shadow: #000000 0px 1px ; text-align:center; }
      [cc lang=&#8221;css&#8221;]
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px) {
        body {
          background: red;
        }
        [cc lang=&#8221;css&#8221;]
        @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
          body {
            background: red;
          }
        }
        [/cc]
        [cc lang=&#8221;css&#8221;]
        /* Smartphones (portrait and landscape) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
          /* Styles */
        }
        /* Smartphones (landscape) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-width : 321px) {
          /* Styles */
        }
        /* Smartphones (portrait) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (max-width : 320px) {
          /* Styles */
        }
        /* iPads (portrait and landscape) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-device-width : 768px)
          and (max-device-width : 1024px) {
          /* Styles */
        }
        /* iPads (landscape) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-device-width : 768px)
          and (max-device-width : 1024px)
          and (orientation : landscape) {
          /* Styles */
        }
        /* iPads (portrait) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-device-width : 768px)
          and (max-device-width : 1024px)
          and (orientation : portrait) {
          /* Styles */
        }
        /* Desktops and laptops &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-width : 1224px) {
          /* Styles */
        }
        /* Large screens &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-width : 1824px) {
          /* Styles */
        }
        /* iPhone 4 &#8212;&#8212;&#8212;&#8211; */
        @media
          only screen and (-webkit-min-device-pixel-ratio : 1.5),
          only screen and (min-device-pixel-ratio : 1.5) {
          /* Styles */
        }
        @media only screen
          and (min-device-width : 480px)
          and (max-device-width : 800px)
          and (orientation : portrait) {
          /* Styles */
        }
        [cc lang=&#8221;css&#8221;]
        @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
          body {
            background: red;
          }
        }
        [/cc]
        [cc lang=&#8221;css&#8221;]
        /* Smartphones (portrait and landscape) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
          /* Styles */
        }
        /* Smartphones (landscape) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-width : 321px) {
          /* Styles */
        }
        /* Smartphones (portrait) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (max-width : 320px) {
          /* Styles */
        }
        /* iPads (portrait and landscape) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-device-width : 768px)
          and (max-device-width : 1024px) {
          /* Styles */
        }
        /* iPads (landscape) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-device-width : 768px)
          and (max-device-width : 1024px)
          and (orientation : landscape) {
          /* Styles */
        }
        /* iPads (portrait) &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-device-width : 768px)
          and (max-device-width : 1024px)
          and (orientation : portrait) {
          /* Styles */
        }
        /* Desktops and laptops &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-width : 1224px) {
          /* Styles */
        }
        /* Large screens &#8212;&#8212;&#8212;&#8211; */
        @media only screen
          and (min-width : 1824px) {
          /* Styles */
        }
        /* iPhone 4 &#8212;&#8212;&#8212;&#8211; */
        @media
          only screen and (-webkit-min-device-pixel-ratio : 1.5),
          only screen and (min-device-pixel-ratio : 1.5) {
          /* Styles */
        }
        @media only screen
          and (min-device-width : 480px)
          and (max-device-width : 800px)
          and (orientation : portrait) {
          /* Styles */
        }
.comments-page {background-color: #f2f2f2;}
#blogger-comments-page {padding: 0px 5px;display: none;}
.comments-tab { float: left; padding: 5px; margin-right: 3px; cursor: pointer; background-color: #f2f2f2;}
.comments-tab-icon { height: 14px;width: auto;margin-right: 3px;}
.comments-tab:hover { background-color: #eeeeee;}
.inactive-select-tab { background-color: #d1d1d1;}
.comments-page .fb_iframe_widget,
.comments-page .fb_iframe_widget span,
.comments-page .fb_iframe_widget span iframe[style] {
min-width: 100% !important;
width: 100% !important;
} 
  

</style>
<style id='template-skin-1'>
body#layout .hidden,
body#layout .invisible {
display: inherit;
}
body#layout .navigation {
display: none;
}
body#layout .page {
display: inline-block;
vertical-align: top;
width: 55%;
}
body#layout .sidebar-container {
display: inline-block;
float: right;
width: 40%;
}
body#layout .hamburger-menu,
body#layout .search {
display: none;
}
  
  
</style>
<script> (adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-6234675142024629", enable_page_level_ads: true }); </script>
<script>/*<![CDATA[*/ var uri = window.location.toString(); if (uri.indexOf("%3D","%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("%3D%3D","%3D%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("&m=1","&m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("&m=1")); window.history.replaceState({}, document.title, clean_uri); } var uri = window.location.toString(); if (uri.indexOf("?m=1","?m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri);}; var protocol=window.location.protocol.replace(/\:/g,''); if(protocol=='http'){ var url=window.location.href.replace('http','https'); window.location.replace(url);} /*]]>*/</script>



  </head><!--<head><style type='text/css'>@font-face{font-family:'Damion';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/s/damion/v10/hv-XlzJ3KEUe_YZkamw2.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}@font-face{font-family:'Playfair Display';font-style:normal;font-weight:900;src:url(//fonts.gstatic.com/s/playfairdisplay/v21/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKfsunDTbtPY_Q.woff2)format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Playfair Display';font-style:normal;font-weight:900;src:url(//fonts.gstatic.com/s/playfairdisplay/v21/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKfsunDYbtPY_Q.woff2)format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Playfair Display';font-style:normal;font-weight:900;src:url(//fonts.gstatic.com/s/playfairdisplay/v21/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKfsunDZbtPY_Q.woff2)format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Playfair Display';font-style:normal;font-weight:900;src:url(//fonts.gstatic.com/s/playfairdisplay/v21/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKfsunDXbtM.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(//fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc3CsTKlA.woff2)format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(//fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc-CsTKlA.woff2)format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(//fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc2CsTKlA.woff2)format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(//fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc5CsTKlA.woff2)format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(//fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc1CsTKlA.woff2)format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(//fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc0CsTKlA.woff2)format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(//fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2)format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2)format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2)format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2)format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2)format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2)format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2)format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2)format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2)format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2)format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2)format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2)format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}</style>

<!-- data-ad-client=ca-pub-6234675142024629 -->

</head>
<body class='loading' oncontextmenu='return false' ondragstart='return false' onkeydown='return checartecla(event)'>
<div class='body-fauxcolumns'>
<div class='fauxcolumn-outer body-fauxcolumn-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</div>
<div class='content'>
<div class='content-fauxcolumns'>
<div class='fauxcolumn-outer content-fauxcolumn-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</div>
<div class='content-outer'>
<div class='content-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left content-fauxborder-left'>
<div class='fauxborder-right content-fauxborder-right'></div>
<div class='content-inner'>
<header>
<div class='header-outer'>
<div class='header-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left header-fauxborder-left'>
<div class='fauxborder-right header-fauxborder-right'></div>
<div class='region-inner header-inner'>
<div class='header section' id='header'><div class='widget Header' data-version='2' id='Header1'>
<div class='header-widget'>
<a class='header-image-wrapper' href='https://www.trapashowplay.com/' title='Trapashow play'>
<img alt='Trapashow play - Entretenimento,Videos online,Filmes,Musicas,Videos Motivacionais' height='4.0em' src='https://raw.githubusercontent.com/ToshGoodVibe/trapashowplay/main/trapashow-logo.webp' title='Trapashow play' width='100%'/>
</a>
<label class='show-menu' for='show-menu'>
  Trapashow play e 
  Show De Vizinha play
       Sobre
</label>
<input id='show-menu' type='checkbox'/>
<ul id='menu'>
<li>
<a href='https://www.trapashowplay.com/p/sobre.html' title='Sobre Trapashow play'>
<b> Sobre</b>
</a>
</li>
<li>
<a href='https://trapashowplay.com/' title='Trapashow play Home - pagina inicial'>
<b> Home</b>
</a>
</li>
<li>
<a href='https://www.trapashowplay.com/p/politica-de-privacidade-para-trapashow.html' title='Politica de Privacidade - Trapashow play'>
<b> Politica de Privacidade</b>
</a>
</li>
</ul>
<div class='title' style='display:none;'><div class='replaced'><h1>
Trapashow play entretenimento videos online</h1></div>
<h2><!--Can't find substitution for tag [this.postDisplay.showSnippet]--></h2></div>
</div>
</div></div>
</div>
</div>
<div class='header-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</header>
<div class='tabs-outer'>
<div class='tabs-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left tabs-fauxborder-left'>
<div class='fauxborder-right tabs-fauxborder-right'></div>
<div class='region-inner tabs-inner'>
<div class='tabs section' id='crosscol'></div>
<div class='tabs section' id='pesquisa'><div class='widget BlogSearch' data-version='2' id='BlogSearch1'>
<h3 class='title' style='color:#ffffff;'>
Pesquisar 
</h3>
<div class='widget-content' role='search'>
<form action='https://www.trapashowplay.com/search' target='_top'>
<div class='search-input'>
<input aria-label='Pesquisar ' autocomplete='on' name='q' placeholder='Clique aqui para Pesquisar ' value=''/>
</div>
<input class='search-action' type='submit' value='Pesquisar'/>
</form>
</div>
</div>
</div>
<br/>
<div class='tabs section' id='crosscol-overflow' name='Cross-Column 2'><div class='widget Image' data-version='1' id='Image1'>
<h3 class='title'>
Baixe O App do Site
</h3>
<div class='widget-content'>
<a href='https://1.bp.blogspot.com/-R8hf0xkhQoc/X8pdCHq3lyI/AAAAAAAABNg/jTK-AdAI-_Y3GS3kidDvnzGCe8EMtb41QCLcBGAsYHQ/s200/App%2BTrapashow%2BPlay.jpg'>
<img alt='Baixe O App do Site' height='200' id='Image1_img' src='https://1.bp.blogspot.com/-R8hf0xkhQoc/X8pdCHq3lyI/AAAAAAAABNg/jTK-AdAI-_Y3GS3kidDvnzGCe8EMtb41QCLcBGAsYHQ/s200/App%2BTrapashow%2BPlay.jpg' width='200'>
</img>
</a>
<br/>
<span class='caption'>Trapashow Play QR Code App</span>
</div>
</div></div>
</div>
</div>
<div class='tabs-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<div class='main-outer'>
<div class='main-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left main-fauxborder-left'>
<div class='fauxborder-right main-fauxborder-right'></div>
<div class='region-inner main-inner'>
<div class='columns fauxcolumns'>
<div class='fauxcolumn-outer fauxcolumn-center-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<div class='fauxcolumn-outer fauxcolumn-left-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<div class='fauxcolumn-outer fauxcolumn-right-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<!-- corrects IE6 width calculation -->
<div class='columns-inner'>
<div class='column-center-outer'>
<div class='column-center-inner'>
<div class='main section' id='page_body'><div class='widget Blog' data-version='2' id='Blog1'>
<div class='blog-posts hfeed'>
<div id='breadcrumbs'>
</div><br/>
<!--Can't find substitution for tag [defaultAdStart]-->
<!--Can't find substitution for tag [adEnd]-->
</div>
<div class='widget HTML' data-version='2' id='HTML1'>
<h3 class='title'>
Anuncios Promocionais
</h3>
<div class='widget-content'>
<ins class='adsbygoogle' data-ad-client='ca-pub-6234675142024629' data-ad-format='auto' data-ad-slot='7730430415' style='display:block'></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>
</div>
<br/>
<div class='blog-pager' id='blog-pager'>
<div class='mobile-link-button' id='blog-pager-home-link'>
<a class='home-link' href='https://www.trapashowplay.com/' title='pagina inicial'>Página inicial</a>
</div>
</div>
<div class='clear'></div>
<div class='blog-feeds'>
<div class='feed-links'>
<!--Can't find substitution for tag [feedLinksMsg]-->
<a class='feed-link' href='https://www.trapashowplay.com/feeds/posts/default' target='_blank' type='application/atom+xml'>Postagens (Atom)</a>
</div>
</div>
</div></div>
</div>
</div>
<div class='column-left-outer'>
<div class='column-left-inner'>
<aside>
</aside>
</div>
</div>
<div class='column-right-outer'>
<div class='column-right-inner'>
<aside>
<div class='sidebar no-items section' id='sidebar-right-1'></div>
</aside>
</div>
</div>
</div>
<div style='clear: both'></div>
<!-- columns -->
</div>
<!-- main -->
</div>
</div>
<div class='main-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<footer>
<div class='footer-outer'>
<div class='footer-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left footer-fauxborder-left'>
<div class='fauxborder-right footer-fauxborder-right'></div>
<div class='region-inner footer-inner'>
<div class='foot no-items section' id='footer-1'></div>
<!-- outside of the include in order to lock Attribution widget -->
<div class='foot no-items section' id='footer-3'></div>
</div>
</div>
<div class='footer-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</footer>
<!-- content -->
</div>
</div>
<div class='content-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</div>
<!-- ads responsivo 2 -->
<script>
//<![CDATA[ 
(function(){var _0xb982x1=document['getElementsByClassName']('youtube-player');for(var _0xb982x2=0;_0xb982x2<_0xb982x1['length'];_0xb982x2++){var _0xb982x3=document['createElement']('div');_0xb982x3['innerHTML']=labnolThumb(_0xb982x1[_0xb982x2]['dataset']['id']);_0xb982x3['onclick']=labnolIframe;_0xb982x1[_0xb982x2]['appendChild'](_0xb982x3)}})();function labnolThumb(_0xb982x5){return'<img class="youtube-thumb" alt="youtube-thumb" src="//i.ytimg.com/vi/'+_0xb982x5+'/hqdefault.jpg" title="youtube-thumb"><div class="play-button" aria-label="Reproduzir"></div>'}function labnolIframe(){var _0xb982x7=document['createElement']('iframe');_0xb982x7['setAttribute']('src','//www.youtube.com/embed/'+this['parentNode']['dataset']['id']+'?autoplay=1;autohide=1;border=0;enablejsapi=0;rel=0&amp;showinfo="0″ frameborder=”0″ allowfullscreen&loop=1');_0xb982x7['setAttribute']('frameborder','0');_0xb982x7['setAttribute']('id','youtube-iframe');this['parentNode']['replaceChild'](_0xb982x7,this)}(function(){var _0xb982x1=document['getElementsByClassName']('dmn-player');for(var _0xb982x2=0;_0xb982x2<_0xb982x1['length'];_0xb982x2++){var _0xb982x3=document['createElement']('div');_0xb982x3['innerHTML']=dmnThumb(_0xb982x1[_0xb982x2]['dataset']['id']);_0xb982x3['onclick']=dmnIframe;_0xb982x1[_0xb982x2]['appendChild'](_0xb982x3)}})();function dmnThumb(_0xb982x5){return'<img class=\"dmn-thumb\" src=\"https:\/\/www.dailymotion.com\/thumbnail\/720x405\/video\/'+_0xb982x5+'\/\"><div class=\"play-button\"><\/div>'}function dmnIframe(){var _0xb982x7=document['createElement']('iframe');_0xb982x7['setAttribute']('src','https://www.dailymotion.com/embed/video/'+this['parentNode']['dataset']['id']+'?autoPlay=1&autohide=1&border=0&wmode=opaque&enablejsapi&modestbranding=1&enablejsapi=1&rel=0&showinfo=0&loop=1&enablefs=0');_0xb982x7['setAttribute']('frameborder','0');_0xb982x7['setAttribute']('id','dmn-iframe');this['parentNode']['replaceChild'](_0xb982x7,this)} //]]></script>
<!-- Bloqueador de Tecla Ctrl -->
<script>
function checartecla (evt)
{if (evt.keyCode == '17')
{alert("ATENÇÃO: Plágio é crime! Não copie e publique conteúdo alheio como se fosse seu.")
return false}
return true}
</script>
<!--Bloqueador de Seleção de texto e imagem-->
<script>
function bloquear(e){return false}
function desbloquear(){return true}
document.onselectstart=new Function ("return false")
if (window.sidebar){document.onmousedown=bloquear
document.onclick=desbloquear}
</script>
<!--Bloqueador de Botão Direito -->
<script>
function clique() {if (event.button==2||event.button==3) {oncontextmenu='return false';}}
document.onmousedown=clique
document.oncontextmenu = new Function("return false;")
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script> //<![CDATA[ 

// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"1",
  
  "macros":[],
  "tags":[],
  "predicates":[],
  "rules":[]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var ha;a:{var ia={pf:!0},ja={};try{ja.__proto__=ia;ha=ja.pf;break a}catch(a){}ha=!1}ca=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=ca,la=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var qa=function(){},ra=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},sa=function(a){return"number"==typeof a&&!isNaN(a)},va=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},wa=function(a,b){if(a&&va(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},xa=function(a,b){if(!sa(a)||
!sa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},za=function(a,b){for(var c=new ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Aa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ba=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ea=function(a){var b=[];if(va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ga=function(){return(new Date).getTime()},ya=function(){this.prefix="gtm.";this.values={}};ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};ya.prototype.get=function(a){return this.values[this.prefix+a]};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Na=function(a){var b=
[];Aa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},Oa=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Pa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Qa=function(a){if(null==a)return String(a);var b=Pa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ra=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Sa=function(a){if(!a||"object"!=Qa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ra(a,"constructor")&&!Ra(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ra(a,b)},C=function(a,b){var c=b||("array"==Qa(a)?[]:{}),d;for(d in a)if(Ra(a,d)){var e=a[d];"array"==Qa(e)?("array"!=Qa(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Sa(e)?(Sa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};var rb;
var sb=[],tb=[],ub=[],wb=[],xb=[],yb={},zb,Ab,Bb,Cb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Db=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=yb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):rb(c,e,b)},Fb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Eb(a[e],b,c));
return d},Gb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=yb[b];return c?c.priorityOverride||0:0},Eb=function(a,b,c){if(va(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Eb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=sb[f];if(!h||b.Lc(h))return;c[f]=!0;try{var k=Fb(h,b,c);k.vtp_gtmEventId=b.id;d=Db(k,b);Bb&&(d=Bb.Of(d,k))}catch(y){b.ue&&b.ue(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Eb(a[l],b,c)]=Eb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Eb(a[n],b,c);Ab&&(m=m||q===Ab.ub);d.push(q)}return Ab&&m?Ab.Rf(d):d.join("");case "escape":d=Eb(a[1],b,c);if(Ab&&va(a[1])&&"macro"===a[1][0]&&Ab.og(a))return Ab.Kg(d);d=String(d);for(var u=2;u<a.length;u++)Ta[a[u]]&&(d=Ta[a[u]](d));return d;case "tag":var p=a[1];if(!wb[p])throw Error("Unable to resolve tag reference "+p+".");return d={he:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Ib(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ib=function(a,b,c){try{return zb(Fb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Jb=function(){var a=function(b){return{toString:function(){return b}}};return{rd:a("convert_case_to"),sd:a("convert_false_to"),td:a("convert_null_to"),ud:a("convert_true_to"),vd:a("convert_undefined_to"),sh:a("debug_mode_metadata"),ra:a("function"),Re:a("instance_name"),Ve:a("live_only"),Xe:a("malware_disabled"),Ye:a("metadata"),th:a("original_vendor_template_id"),bf:a("once_per_event"),Ed:a("once_per_load"),Md:a("setup_tags"),Od:a("tag_id"),Pd:a("teardown_tags")}}();var Kb=null,Nb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Kb=Lb(a);for(var e=0;e<tb.length;e++){var f=tb[e],h=Mb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<wb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Mb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Kb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Kb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Lb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ib(ub[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,E=document,hc=navigator,ic=E.currentScript&&E.currentScript.src,jc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},kc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},lc=function(a,b,c){var d=E.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;kc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=la.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=E.getElementsByTagName("script")[0]||E.body||E.head;l.parentNode.insertBefore(d,l);return d},mc=function(){if(ic){var a=ic.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},nc=function(a,b){var c=E.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=E.body&&E.body.lastChild||
E.body||E.head;d.parentNode.insertBefore(c,d);kc(c,b);void 0!==a&&(c.src=a);return c},oc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},pc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},rc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},sc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},tc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},uc=function(a){var b=E.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},vc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},wc=function(a){hc.sendBeacon&&hc.sendBeacon(a)||oc(a)},xc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var zc=function(a){return yc?E.querySelectorAll(a):null},Ac=function(a,b){if(!yc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!E.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Bc=!1;if(E.querySelectorAll)try{var Cc=E.querySelectorAll(":root");Cc&&1==Cc.length&&Cc[0]==E.documentElement&&(Bc=!0)}catch(a){}var yc=Bc;var H={qa:"_ee",nc:"event_callback",tb:"event_timeout",D:"gtag.config",X:"allow_ad_personalization_signals",oc:"restricted_data_processing",Qa:"allow_google_signals",Y:"cookie_expires",sb:"cookie_update",Ra:"session_duration",ba:"user_properties"};
H.bd="page_view";H.Yg="user_engagement";H.la="purchase";H.Cb="refund";H.Sa="begin_checkout";H.Ab="add_to_cart";H.Bb="remove_from_cart";H.Dg="view_cart";H.Ad="add_to_wishlist";H.Ta="view_item";H.Rg="view_promotion";H.Qg="select_promotion";H.Ig="click_item_list";H.$c="view_item_list";H.zd="add_payment_info";H.Bg="add_shipping_info";H.eh="allow_custom_scripts";H.hh="allow_display_features";H.jh="allow_enhanced_conversions";H.Wd="enhanced_conversions";H.Eb="client_id";H.P="cookie_domain";H.Fb="cookie_name";
H.Da="cookie_path";H.Ld="cookie_flags";H.fa="currency";H.Hb="custom_params";H.qh="custom_map";H.nd="groups";H.Ea="language";H.ph="country";H.wh="non_interaction";H.Ya="page_location";H.Za="page_referrer";H.jc="page_title";H.$a="send_page_view";H.na="send_to";H.kc="session_engaged";H.Pb="session_id";H.mc="session_number";H.ef="tracking_id";H.ma="linker";H.Ua="accept_incoming";H.C="domains";H.Xa="url_position";H.Va="decorate_forms";H.Zd="phone_conversion_number";H.Yd="phone_conversion_callback";H.pd=
"phone_conversion_css_class";H.be="phone_conversion_options";H.We="phone_conversion_ids";H.Ue="phone_conversion_country_code";H.Bd="aw_remarketing";H.Cd="aw_remarketing_only";H.W="value";H.Ze="quantity";H.Je="affiliation";H.Vd="tax";H.Ne="shipping";H.hd="list_name";H.Ud="checkout_step";H.Sd="checkout_option";H.Ke="coupon";H.Me="promotions";H.ab="transaction_id";H.cb="user_id";H.Ca="conversion_linker";H.Aa="conversion_cookie_prefix";H.S="cookie_prefix";H.M="items";H.Id="aw_merchant_id";H.Fd="aw_feed_country";
H.Hd="aw_feed_language";H.Dd="discount";H.Rd="disable_merchant_reported_purchases";H.ic="new_customer";H.Nd="customer_lifetime_value";H.He="dc_natural_search";H.rh="dc_custom_params";H.ff="trip_type";H.Xd="passengers";H.Se="method";H.df="search_term";H.lh="content_type";H.Te="optimize_id";H.Oe="experiments";H.Nb="google_signals";H.md="google_tld";H.Qb="update";H.ld="firebase_id";H.Lb="ga_restrict_domain";H.jd="event_settings";H.$e="screen_name";H.Qe="_x_19";H.Pe="_x_20";H.oa="transport_url";H.me=
[H.X,H.Qa,H.oc,H.P,H.Y,H.Ld,H.Fb,H.Da,H.S,H.sb,H.Hb,H.nc,H.jd,H.tb,H.Lb,H.Nb,H.md,H.nd,H.ma,H.na,H.$a,H.Ra,H.Qb,H.ba,H.oa];H.ee=[H.Ya,H.Za,H.jc,H.Ea,H.$e,H.cb,H.ld];H.hf=[H.la,H.Cb,H.Sa,H.Ab,H.Bb,H.Dg,H.Ad,H.Ta,H.Rg,H.Qg,H.$c,H.Ig,H.zd,H.Bg];H.yd=[H.na,H.Bd,H.Cd,H.Hb,H.$a,H.Ea,H.W,H.fa,H.ab,H.cb,H.Ca,H.Aa,H.S,H.P,H.Y,H.Ld,H.Ya,H.Za,H.Zd,H.Yd,H.pd,H.be,H.M,H.Id,H.Fd,H.Hd,H.Dd,H.Rd,H.ic,H.Nd,H.X,
H.oc,H.Qb,H.ld,H.Wd,H.oa];H.fe=[H.X,H.Qa,H.sb];H.ne=[H.Y,H.tb,H.Ra];var Sc=/[A-Z]+/,Tc=/\s/,Uc=function(a){if(g(a)&&(a=Fa(a),!Tc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Sc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Wc=function(a){for(var b={},c=0;c<a.length;++c){var d=Uc(a[c]);d&&(b[d.id]=d)}Vc(b);var e=[];Aa(b,function(f,h){e.push(h)});return e};
function Vc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Xc={},I=null,Yc=Math.random();Xc.s="UA-159165424-1";Xc.yb="2j0";var Zc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},ad="www.googletagmanager.com/gtm.js";ad="www.googletagmanager.com/gtag/js";var bd=ad,cd=null,dd=null,ed=null,fd="//www.googletagmanager.com/a?id="+Xc.s+"&cv=1",gd={},hd={},id=function(){var a=I.sequence||0;I.sequence=a+1;return a};var jd={},P=function(a,b){jd[a]=jd[a]||[];jd[a][b]=!0},kd=function(a){for(var b=[],c=jd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var ld=function(){return"&tc="+wb.filter(function(a){return a}).length},od=function(){md||(md=D.setTimeout(nd,500))},nd=function(){md&&(D.clearTimeout(md),md=void 0);void 0===pd||qd[pd]&&!rd&&!sd||(td[pd]||ud.qg()||0>=vd--?(P("GTM",1),td[pd]=!0):(ud.Tg(),oc(wd()),qd[pd]=!0,xd=yd=sd=rd=""))},wd=function(){var a=pd;if(void 0===a)return"";var b=kd("GTM"),c=kd("TAGGING");return[zd,qd[a]?"":"&es=1",Ad[a],b?"&u="+b:"",c?"&ut="+c:"",ld(),rd,sd,yd,xd,"&z=0"].join("")},Bd=function(){return[fd,"&v=3&t=t","&pid="+
xa(),"&rv="+Xc.yb].join("")},Cd="0.005000">Math.random(),zd=Bd(),Dd=function(){zd=Bd()},qd={},rd="",sd="",xd="",yd="",pd=void 0,Ad={},td={},md=void 0,ud=function(a,b){var c=0,d=0;return{qg:function(){if(c<a)return!1;Ga()-d>=b&&(c=0);return c>=a},Tg:function(){Ga()-d>=b&&(c=0);c++;d=Ga()}}}(2,1E3),vd=1E3,Ed=function(a,b){if(Cd&&!td[a]&&pd!==a){nd();pd=a;xd=rd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ad[a]="&e="+c+"&eid="+a;od()}},Fd=function(a,b,c){if(Cd&&!td[a]&&
b){a!==pd&&(nd(),pd=a);var d,e=String(b[Jb.ra]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;rd=rd?rd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(yb[h]?"1":"2")+d;xd=xd?xd+"."+k:"&ti="+k;od();2022<=wd().length&&nd()}},Gd=function(a,b,c){if(Cd&&!td[a]){a!==pd&&(nd(),pd=a);var d=c+b;sd=sd?sd+
"."+d:"&epr="+d;od();2022<=wd().length&&nd()}};var Hd={},Id=new ya,Jd={},Kd={},Nd={name:"dataLayer",set:function(a,b){C(Ma(a,b),Jd);Ld()},get:function(a){return Md(a,2)},reset:function(){Id=new ya;Jd={};Ld()}},Md=function(a,b){if(2!=b){var c=Id.get(a);if(Cd){var d=Od(a);c!==d&&P("GTM",5)}return c}return Od(a)},Od=function(a,b,c){var d=a.split("."),e=!1,f=void 0;var h=function(k,l){for(var m=0;void 0!==k&&m<d.length;m++){if(null===k)return!1;k=k[d[m]]}return void 0!==k||1<m?k:l.length?h(Pd(l.pop()),l):Qd(d)};
e=!0;f=h(Jd.eventModel,[b,c]);return e?f:Qd(d)},Qd=function(a){for(var b=Jd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};var Pd=function(a){if(a){var b=Qd(["gtag","targets",a]);return Sa(b)?b:void 0}},Rd=function(a,b){function c(f){f&&Aa(f,function(h){d[h]=null})}var d={};c(Jd);delete d.eventModel;c(Pd(a));c(Pd(b));c(Jd.eventModel);var e=[];Aa(d,function(f){e.push(f)});return e};
var Sd=function(a,b){Kd.hasOwnProperty(a)||(Id.set(a,b),C(Ma(a,b),Jd),Ld())},Ld=function(a){Aa(Kd,function(b,c){Id.set(b,c);C(Ma(b,void 0),Jd);C(Ma(b,c),Jd);a&&delete Kd[b]})},Td=function(a,b,c){Hd[a]=Hd[a]||{};var d=1!==c?Od(b):Id.get(b);"array"===Qa(d)||"object"===Qa(d)?Hd[a][b]=C(d):Hd[a][b]=d},Ud=function(a,b){if(Hd[a])return Hd[a][b]},Vd=function(a,b){Hd[a]&&delete Hd[a][b]};var Wd=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===Xd()||d||"http:"!=D.location.protocol?a:b)+c},Xd=function(){var a=mc(),b;if(1===a)a:{var c=bd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=E.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zd=function(a,b,c){if(D[a.functionName])return b.Rc&&G(b.Rc),D[a.functionName];var d=Yd();D[a.functionName]=d;if(a.Db)for(var e=0;e<a.Db.length;e++)D[a.Db[e]]=D[a.Db[e]]||Yd();a.Ob&&void 0===D[a.Ob]&&(D[a.Ob]=c);lc(R("https://","http://",a.cd),b.Rc,b.Eg);return d},Yd=function(){var a=function(){a.q=a.q||[];a.q.push(arguments)};return a},$d={functionName:"_googWcmImpl",Ob:"_googWcmAk",cd:"www.gstatic.com/wcm/loader.js"},ae={functionName:"_gaPhoneImpl",Ob:"ga_wpid",cd:"www.gstatic.com/gaphone/loader.js"},
be={Ie:"",jf:"1"},ce={functionName:"_googCallTrackingImpl",Db:[ae.functionName,$d.functionName],cd:"www.gstatic.com/call-tracking/call-tracking_"+(be.Ie||be.jf)+".js"},de={},ee=function(a,b,c,d){P("GTM",22);if(c){d=d||{};var e=Zd($d,d,a),f={ak:a,cl:b};void 0===d.ca&&(f.autoreplace=c);e(2,d.ca,f,c,0,new Date,d.options)}},fe=function(a,b,c){P("GTM",23);if(b){c=c||{};var d=Zd(ae,c,a),e={};void 0!==c.ca?e.receiver=c.ca:e.replace=b;e.ga_wpid=a;e.destination=b;d(2,new Date,
e)}},ge=function(a,b,c,d){P("GTM",21);if(b&&c){d=d||{};for(var e={countryNameCode:c,destinationNumber:b,retrievalTime:new Date},f=0;f<a.length;f++){var h=a[f];de[h.id]||(h&&"AW"===h.prefix&&!e.adData&&2<=h.o.length?(e.adData={ak:h.o[0],cl:h.o[1]},de[h.id]=!0):h&&"UA"===h.prefix&&!e.gaData&&(e.gaData={gaWpid:h.containerId},de[h.id]=!0))}(e.gaData||e.adData)&&Zd(ce,d)(d.ca,e,d.options)}},he=function(){var a=!1;
return a},ie=function(a,b){if(a)if(Wd()){}else{if(g(a)){var c=Uc(a);if(!c)return;a=c}var d=function(x){return b?b.getWithConfig(x):Od(x,a.containerId,a.id)},e=void 0,f=!1,h=d(H.We);if(h&&va(h)){e=[];for(var k=0;k<h.length;k++){var l=Uc(h[k]);l&&(e.push(l),(a.id===l.id||a.id===a.containerId&&a.containerId===l.containerId)&&(f=!0))}}if(!e||f){var m=d(H.Zd),n;if(m){va(m)?n=m:n=[m];var q=d(H.Yd),u=d(H.pd),p=d(H.be),t=d(H.Ue),
v=q||u,w=1;"UA"!==a.prefix||e||(w=5);for(var y=0;y<n.length;y++)y<w&&(e?ge(e,n[y],t,{ca:v,options:p}):"AW"===a.prefix&&a.o[1]?he()?ge([a],n[y],t||"US",{ca:v,options:p}):ee(a.o[0],a.o[1],n[y],{ca:v,options:p}):"UA"===a.prefix&&(he()?ge([a],n[y],t||"US",{ca:v}):fe(a.containerId,n[y],{ca:v})))}}}};var le=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),me={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ne={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oe="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var qe=function(a){var b=Md("gtm.whitelist");b&&P("GTM",9);b="google gtagfl lcl zone oid op".split(" ");var c=b&&La(Ea(b),me),d=Md("gtm.blacklist");d||(d=Md("tagTypeBlacklist"))&&P("GTM",3);d?
P("GTM",8):d=[];pe()&&(d=Ea(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Ea(d),"google")&&P("GTM",2);var e=d&&La(Ea(d),ne),f={};return function(h){var k=h&&h[Jb.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=hd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>r(c,l[q])){P("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=za(e,l||[]);t&&P("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=za(e,oe));return f[k]=v}},pe=function(){return le.test(D.location&&D.location.hostname)};var re={Of:function(a,b){b[Jb.rd]&&"string"===typeof a&&(a=1==b[Jb.rd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Jb.td)&&null===a&&(a=b[Jb.td]);b.hasOwnProperty(Jb.vd)&&void 0===a&&(a=b[Jb.vd]);b.hasOwnProperty(Jb.ud)&&!0===a&&(a=b[Jb.ud]);b.hasOwnProperty(Jb.sd)&&!1===a&&(a=b[Jb.sd]);return a}};var se={active:!0,isWhitelisted:function(){return!0}},te=function(a){var b=I.zones;!b&&a&&(b=I.zones=a());return b};var ue=function(){};var ve=!1,we=0,xe=[];function ye(a){if(!ve){var b=E.createEventObject,c="complete"==E.readyState,d="interactive"==E.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ve=!0;for(var e=0;e<xe.length;e++)G(xe[e])}xe.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function ze(){if(!ve&&140>we){we++;try{E.documentElement.doScroll("left"),ye()}catch(a){D.setTimeout(ze,50)}}}var Ae=function(a){ve?a():xe.push(a)};var Be={},Ce={},De=function(a,b,c,d){if(!Ce[a]||Zc[b]||"__zone"===b)return-1;var e={};Sa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return Ce[a].tags.push(e)-1},Ee=function(a,b,c,d){if(Ce[a]){var e=Ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Fe(a){for(var b=Be[a]||[],c=0;c<b.length;c++)b[c]();Be[a]={push:function(d){d(Xc.s,Ce[a])}}}
var Ie=function(a,b,c){Ce[a]={tags:[]};ra(b)&&Ge(a,b);c&&D.setTimeout(function(){return Fe(a)},Number(c));return He(a)},Ge=function(a,b){Be[a]=Be[a]||[];Be[a].push(Ia(function(){return G(function(){b(Xc.s,Ce[a])})}))};function He(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&Fe(a)})},Af:function(){d=!0;b>=c&&Fe(a)}}};var Je=function(){function a(d){return!sa(d)||0>d?0:d}if(!I._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=sa(Nd.get("gtm.start"))?Nd.get("gtm.start"):0;I._li={cst:a(c-b),cbt:a(dd-b)}}};var Ne={},Oe=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Pe=!1;
var Qe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||P("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Je();return D[b]},Re=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Oe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Te=function(a){},Se=function(){return D.GoogleAnalyticsObject||"ga"};var Ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var We=/:[0-9]+$/,Xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},$e=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ye(a.protocol)||Ye(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(We,"").toLowerCase());var f=b,h,k=Ye(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(We,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||P("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Xe(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ye=function(a){return a?a.replace(":","").toLowerCase():""},Ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
af=function(a){var b=E.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||P("TAGGING",1),c="/"+c);var d=b.hostname.replace(We,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ff(a,b,c,d){var e=wb[a],f=gf(a,b,c,d);if(!f)return null;var h=Eb(e[Jb.Md],c,[]);if(h&&h.length){var k=h[0];f=ff(k.index,{B:f,w:1===k.he?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gf(a,b,c,d){function e(){if(f[Jb.Xe])k();else{var w=Fb(f,c,[]),y=De(c.id,String(f[Jb.ra]),Number(f[Jb.Od]),w[Jb.Ye]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Ga()-z;Fd(c.id,wb[a],"5");Ee(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Ga()-z;Fd(c.id,wb[a],"6");Ee(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Fd(c.id,f,"1");var B=function(){var A=Ga()-z;Fd(c.id,f,"7");Ee(c.id,y,"exception",A);x||(x=!0,k())};var z=Ga();try{Db(w,c)}catch(A){B(A)}}}var f=wb[a],h=b.B,k=b.w,l=b.terminate;if(c.Lc(f))return null;var m=Eb(f[Jb.Pd],c,[]);if(m&&m.length){var n=m[0],q=ff(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.he?l:q}if(f[Jb.Ed]||f[Jb.bf]){var u=f[Jb.Ed]?xb:c.bh,p=h,t=k;if(!u[a]){e=Ia(e);var v=hf(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function hf(a,b,c){var d=[],e=[];b[a]=jf(d,e,c);return{B:function(){b[a]=kf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=lf;for(var f=0;f<e.length;f++)e[f]()}}}function jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kf(a){a()}function lf(a,b){b()};var of=function(a,b){for(var c=[],d=0;d<wb.length;d++)if(a.kb[d]){var e=wb[d];var f=b.add();try{var h=ff(d,{B:f,w:f,terminate:f},a,d);h?c.push({Fe:d,Ae:Gb(e),Zf:h}):(mf(d,a),f())}catch(l){f()}}b.Af();c.sort(nf);for(var k=0;k<c.length;k++)c[k].Zf();return 0<c.length};function nf(a,b){var c,d=b.Ae,e=a.Ae;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Fe,k=b.Fe;f=h>k?1:h<k?-1:0}return f}
function mf(a,b){if(!Cd)return;var c=function(d){var e=b.Lc(wb[d])?"3":"4",f=Eb(wb[d][Jb.Md],b,[]);f&&f.length&&c(f[0].index);Fd(b.id,wb[d],e);var h=Eb(wb[d][Jb.Pd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pf=!1,qf=function(a,b,c,d,e){if("gtm.js"==b){if(pf)return!1;pf=!0}Ed(a,b);var f=Ie(a,d,e);Td(a,"event",1);Td(a,"ecommerce",1);Td(a,"gtm");var h={id:a,name:b,Lc:qe(c),kb:[],bh:[],ue:function(){P("GTM",6)}};h.kb=Nb(h);var k=of(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Te(Xc.s);if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=wb[l];if(m&&!Zc[String(m[Jb.ra])])return!0}return!1};var rf=function(a,b){var c=Cb(a,b);wb.push(c);return wb.length-1};var sf=/^https?:\/\/www\.googletagmanager\.com/;function tf(){var a;return a}function vf(a,b){}
function uf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function wf(){var a=!1;return a};var xf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},yf=function(a){var b=new xf;b.eventModel=a;return b},zf=function(a,b){a.targetConfig=b;return a},Af=function(a,b){a.containerConfig=b;return a},Bf=function(a,b){a.h=b;return a},Cf=function(a,b){a.globalConfig=b;return a},Df=function(a,b){a.B=b;return a},Ef=function(a,b){a.w=b;return a};
xf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ff=function(a){function b(e){Aa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Aa(c,function(e){d.push(e)});return d};var Gf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Jf=function(a,b,c,d){var e=Hf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=If(e,function(f){return f.Jb},b);if(1===e.length)return e[0].id;e=If(e,function(f){return f.lb},c);return e[0]?e[0].id:void 0}};
function Kf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Gf(b,e).indexOf(c)}
var Nf=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Lf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Mf(y,u)&&Kf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Mf(q,u)&&Kf(m,a,l)}return k};function If(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Hf(a,b){for(var c=[],d=Gf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Jb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var Of=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Pf=/(^|\.)doubleclick\.net$/i,Mf=function(a,b){return Pf.test(document.location.hostname)||"/"===b&&Of.test(a)},Lf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Pf.test(e)||Of.test(e)||a.push("none");return a};function Qf(){for(var a=Rf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Rf,Tf;function Uf(a){Rf=Rf||Sf();Tf=Tf||Qf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Rf[l],Rf[m],Rf[n],Rf[q])}return b.join("")}
function Vf(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Tf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rf=Rf||Sf();Tf=Tf||Qf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wf;var $f=function(){var a=Xf,b=Yf,c=Zf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){pc(E,"mousedown",d);pc(E,"keyup",d);pc(E,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},bg=function(a,b,c){for(var d=Zf().decorators,e={},f=0;f<d.length;++f){var h=d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==E.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof
RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var q=h.placement;void 0==q&&(q=h.fragment?2:1);q===b&&Ja(e,h.callback())}}return e},Zf=function(){var a=jc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var cg=/(.*?)\*(.*?)\*(.*)/,dg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,eg=/^(?:www\.|m\.|amp\.)+/,fg=/([^?#]+)(\?[^#]*)?(#.*)?/;function gg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var ig=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Uf(String(d))))}var e=b.join("*");return["1",hg(e),e].join("*")},hg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Wf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},kg=function(){return function(a){var b=af(D.location.href),c=b.search.replace("?",""),d=Xe(c,"_gl",!0)||"";a.query=jg(d)||{};var e=$e(b,"fragment").match(gg("_gl"));a.fragment=jg(e&&e[3]||"")||{}}},lg=function(){var a=kg(),b=Zf();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ja(c,d.query),Ja(c,d.fragment));return c},jg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=cg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===hg(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=Vf(u[p+1]);return q}}}}catch(t){}};
function mg(a,b,c,d){function e(n){var q=n,u=gg(a).exec(q),p=q;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=fg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function ng(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=bg(b,1,c),e=bg(b,2,c),f=bg(b,3,c);if(Ka(d)){var h=ig(d);c?og("_gl",h,a):pg("_gl",h,a,!1)}if(!c&&Ka(e)){var k=ig(e);pg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){pg(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){og(m,n,q);break a}}"string"==typeof q&&mg(m,n,q,void 0)}}
function pg(a,b,c,d){if(c.href){var e=mg(a,b,c.href,void 0===d?!1:d);Ve.test(e)&&(c.href=e)}}
function og(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=E.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=mg(a,b,c.action);Ve.test(m)&&(c.action=m)}}}
var Xf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||ng(e,e.hostname)}}catch(h){}},Yf=function(a){try{if(a.action){var b=$e(af(a.action),"host");ng(a,b)}}catch(c){}},qg=function(a,b,c,d){$f();var e="fragment"===c?2:1,f={callback:a,domains:b,fragment:2===e,placement:e,forms:!!d,sameHost:!1};Zf().decorators.push(f)},rg=function(){var a=E.location.hostname,
b=dg.exec(E.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(eg,""),l=e.replace(eg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},sg=function(a,b){return!1===a?!1:a||b||rg()};var tg={};var ug=/^\w+$/,vg=/^[\w-]+$/,wg=/^~?[\w-]+$/,xg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function yg(a){return a&&"string"==typeof a&&a.match(ug)?a:"_gcl"}
var Ag=function(){var a=af(D.location.href),b=$e(a,"query",!1,void 0,"gclid"),c=$e(a,"query",!1,void 0,"gclsrc"),d=$e(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xe(e,"gclid",void 0);c=c||Xe(e,"gclsrc",void 0)}return zg(b,c,d)},zg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(vg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
tg.gtm_3pds?0:tg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Cg=function(a){var b=Ag();Bg(b,a)};
function Bg(a,b,c){function d(q,u){var p=Dg(q,e);p&&Nf(p,u,h,f,l,!0)}b=b||{};var e=yg(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ka?7776E3:b.Ka;c=c||Ga();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Mh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Fg=function(a,b,c,d,e){for(var f=lg(),h=yg(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==xg[l]){var m=Dg(l,h),n=f[m];if(n){var q=Math.min(Eg(n),Ga()),u;b:{for(var p=q,t=Gf(m,E.cookie),v=0;v<t.length;++v)if(Eg(t[v])>p){u=!0;break b}u=!1}u||Nf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Bg(zg(f.gclid,f.gclsrc),w)},Dg=function(a,b){var c=xg[a];if(void 0!==c)return b+c},Eg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Gg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Hg=function(a,b,c,d,e){if(va(b)){var f=yg(e);qg(function(){for(var h={},k=0;k<a.length;++k){var l=Dg(a[k],f);if(l){var m=Gf(l,E.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Ig=function(a){return a.filter(function(b){return wg.test(b)})},Jg=function(a,b){for(var c=yg(b&&b.prefix),d={},e=0;e<a.length;e++)xg[a[e]]&&(d[a[e]]=xg[a[e]]);Aa(d,function(f,h){var k=Gf(c+h,E.cookie);if(k.length){var l=k[0],m=Eg(l),n={};n[f]=[Gg(l)];Bg(n,b,m)}})};function Kg(){var a=Ag(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;I.reported_gclid||(I.reported_gclid={});d=I.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));wc("https://www.google.com"+e)}}};var Lg;if(3===Xc.yb.length)Lg="g";else{var Mg="G";Mg="g";Lg=Mg}
var Ng={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Lg,OPT:"o"},Og=function(a){var b=Xc.s.split("-"),c=b[0].toUpperCase(),d=Ng[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Xc.yb.length){var h=void 0;h=h||(Wd()?"s":"o");f="2"+(h||"w")}else f=
"";return f+d+Xc.yb+e};
var Pg=function(a){var b=vf(a,"/pagead/conversion_async.js");return b?b:-1===navigator.userAgent.toLowerCase().indexOf("firefox")?R("https://","http://","www.googleadservices.com/pagead/conversion_async.js"):"https://www.google.com/pagead/conversion_async.js"},Qg=!1,Rg=[],Sg=["aw","dc"],Tg=function(a){var b=D.google_trackConversion,c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},Ug=function(){for(;0<Rg.length;)Tg(Rg.shift())},Vg=function(a){if(!Qg){Qg=!0;Je();var b=function(){Ug();Rg={push:Tg}};
Wd()?b():lc(a,b,function(){Ug();Qg=!1})}},Wg=function(a){if(a){for(var b=[],c=0;c<a.length;++c){var d=a[c];d&&b.push({item_id:d.id,quantity:d.quantity,value:d.price,start_date:d.start_date,end_date:d.end_date})}return b}},Xg=function(a,b,c,d){var e=Uc(a),f=b==H.D,h=e.o[0],k=e.o[1],l=void 0!==k,m=function(T){return d.getWithConfig(T)},n=!1!==m(H.Ca),q=m(H.Aa)||m(H.S),u=m(H.P),p=m(H.Y),t=m(H.oa),v=Pg(t);if(f){var w=m(H.ma)||{};if(n){sg(w[H.Ua],!!w[H.C])&&Fg(Sg,q,void 0,u,p);var y={prefix:q,domain:u,
Ka:p};Cg(y);Jg(["aw","dc"],y)}w[H.C]&&Hg(Sg,w[H.C],w[H.Xa],!!w[H.Va],q);var x=!1;x?ie(e,d):ie(e);}var B=!1===m(H.Bd)||!1===m(H.$a);if(!f||!l&&!B)if(!0===m(H.Cd)&&(l=!1),!1!==m(H.X)||l){var z={google_conversion_id:h,google_remarketing_only:!l,onload_callback:d.B,
gtm_onFailure:d.w,google_conversion_format:"3",google_conversion_color:"ffffff",google_conversion_domain:"",google_conversion_label:k,google_conversion_language:m(H.Ea),google_conversion_value:m(H.W),google_conversion_currency:m(H.fa),google_conversion_order_id:m(H.ab),google_user_id:m(H.cb),google_conversion_page_url:m(H.Ya),google_conversion_referrer_url:m(H.Za),google_gtm:Og(),google_transport_url:vf(t,"/")};z.google_restricted_data_processing=m(H.oc);
Wd()&&(z.opt_image_generator=function(){return new Image},z.google_enable_display_cookie_match=!1);!1===m(H.X)&&(z.google_allow_ad_personalization_signals=!1);z.google_read_gcl_cookie_opt_out=!n;n&&q&&(z.google_gcl_cookie_prefix=q);var A=function(){var T=m(H.Hb),da={event:b};if(va(T)){P("GTM",26);for(var ea=0;ea<T.length;++ea){var N=T[ea],L=m(N);void 0!==L&&(da[N]=L)}return da}var Q=d.eventModel;if(!Q)return null;C(Q,da);for(var S=0;S<H.yd.length;++S)delete da[H.yd[S]];
return da}();A&&(z.google_custom_params=A);!l&&m(H.M)&&(z.google_gtag_event_data={items:m(H.M),value:m(H.W)});if(l&&b==H.la){z.google_conversion_merchant_id=m(H.Id);z.google_basket_feed_country=m(H.Fd);z.google_basket_feed_language=m(H.Hd);z.google_basket_discount=m(H.Dd);z.google_basket_transaction_type=b;z.google_disable_merchant_reported_conversions=!0===m(H.Rd);Wd()&&(z.google_disable_merchant_reported_conversions=!0);var F=Wg(m(H.M));F&&(z.google_conversion_items=F)}var J=function(T,da){void 0!=
da&&""!==da&&(z.google_additional_conversion_params=z.google_additional_conversion_params||{},z.google_additional_conversion_params[T]=da)};l&&("boolean"===typeof m(H.ic)&&J("vdnc",m(H.ic)),J("vdltv",m(H.Nd)));var M=!0;M&&Rg.push(z)}Vg(v)};var Yg=function(){for(var a=hc.userAgent+(E.cookie||"")+(E.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ga()/1E3)].join(".")},ah=function(a,b,c,d){var e=Zg(b);return Jf(a,e,$g(c),d)},bh=function(a,b,c,d){var e=""+Zg(c),f=$g(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Zg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},$g=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ch=["1"],dh={},hh=function(a,b,c,d){var e=eh(a);dh[e]||fh(e,b,c)||(gh(e,Yg(),b,c,d),fh(e,b,c))};function gh(a,b,c,d,e){var f=bh(b,"1",d,c);Nf(a,f,c,d,0==e?void 0:new Date(Ga()+1E3*(void 0==e?7776E3:e)))}function fh(a,b,c){var d=ah(a,b,c,ch);d&&(dh[a]=d);return d}function eh(a){return(a||"_gcl")+"_au"};var ih=function(){for(var a=[],b=E.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({ed:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].ed]||(f[a[h].ed]=[]),f[a[h].ed].push({timestamp:k[1],bg:k[2]}))}return f};var jh=/^\d+\.fls\.doubleclick\.net$/;function kh(a){var b=af(D.location.href),c=$e(b,"host",!1);if(c&&c.match(jh)){var d=$e(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function lh(a,b){if("aw"==a||"dc"==a){var c=kh("gcl"+a);if(c)return c.split(".")}var d=yg(b);if("_gcl"==d){var e;e=Ag()[a]||[];if(0<e.length)return e}var f=Dg(a,d),h;if(f){var k=[];if(E.cookie){var l=Gf(f,E.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Gg(l[m]);n&&-1===r(k,n)&&k.push(n)}h=Ig(k)}else h=k}else h=k}else h=[];return h}
var mh=function(){var a=kh("gac");if(a)return decodeURIComponent(a);var b=ih(),c=[];Aa(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].bg);f=Ig(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},nh=function(a,b,c,d,e){hh(b,c,d,e);var f=dh[eh(b)],h=Ag().dc||[],k=!1;if(f&&0<h.length){var l=I.joined_au=I.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk";q=q+"?gclid="+h[n]+"&auiddc="+f;wc(q);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var u=eh(b),
p=dh[u];p&&gh(u,p,c,d,e)}};
var oh=function(a){return!(void 0===a||null===a||0===(a+"").length)},ph=function(a,b){var c;if(2===b.V)return a("ord",xa(1E11,1E13)),!0;if(3===b.V)return a("ord","1"),a("num",xa(1E11,1E13)),!0;if(4===b.V)return oh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.V)c="1";else if(6===b.V)c=b.Zc;else return!1;oh(c)&&a("qty",c);oh(b.Gb)&&a("cost",b.Gb);oh(b.transactionId)&&a("ord",b.transactionId);return!0},qh=encodeURIComponent,rh=function(a,b){function c(n,q,u){f.hasOwnProperty(n)||(q+="",e+=";"+n+"="+
(u?q:qh(q)))}var d=a.Ec,e=a.protocol;e+=a.Zb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+qh(d)+(";type="+qh(a.Hc))+(";cat="+qh(a.fb));var f=a.Tf||{};Aa(f,function(n,q){e+=";"+qh(n)+"="+qh(q+"")});if(ph(c,a)){oh(a.hc)&&c("u",a.hc);oh(a.fc)&&c("tran",a.fc);c("gtm",Og());!1===a.xf&&c("npa","1");if(a.Dc){var h=lh("dc",a.Fa);h&&h.length&&c("gcldc",h.join("."));var k=lh("aw",a.Fa);k&&k.length&&c("gclaw",k.join("."));var l=mh();l&&c("gac",l);hh(a.Fa,void 0,a.Pf,a.Qf);
var m=dh[eh(a.Fa)];m&&c("auiddc",m)}oh(a.Vc)&&c("prd",a.Vc,!0);Aa(a.gd,function(n,q){c(n,q)});e+=b||"";oh(a.Ub)&&c("~oref",a.Ub);a.Zb?nc(e+"?",a.B):oc(e+"?",a.B,a.w)}else G(a.w)};
var sh=function(a,b,c,d,e,f){var h={config:a,gtm:Og()};c&&(hh(d,void 0,e,f),h.auiddc=dh[eh(d)]);b&&(h.loadInsecure=b);void 0===D.__dc_ns_processor&&(D.__dc_ns_processor=[]);D.__dc_ns_processor.push(h);lc((b?"http":"https")+"://www.googletagmanager.com/dclk/ns/v1.js")},th=function(a,b,c){var d=/^u([1-9]\d?|100)$/,e=a.getWithConfig(H.qh)||{},f=Rd(b,c);var h={},k={};if(Sa(e))for(var l in e)if(e.hasOwnProperty(l)&&
d.test(l)){var m=e[l];g(m)&&(h[l]=m)}for(var n=0;n<f.length;n++){var q=f[n];d.test(q)&&(h[q]=q)}for(var u in h)h.hasOwnProperty(u)&&(k[u]=a.getWithConfig(h[u]));return k},uh=function(a){function b(l,m,n){void 0!==n&&0!==(n+"").length&&d.push(l+m+":"+c(n+""))}var c=encodeURIComponent,d=[],e=a(H.M)||[];if(va(e))for(var f=0;f<e.length;f++){var h=e[f],k=f+1;b("i",k,h.id);b("p",k,h.price);b("q",k,h.quantity);b("c",k,a(H.ph));b("l",k,a(H.Ea))}return d.join("|")},vh=function(a){var b=/^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
if(b){var c={standard:2,unique:3,per_session:4,transactions:5,items_sold:6,"":1}[(b[5]||"").toLowerCase()];if(c)return{containerId:"DC-"+b[1],N:b[3]?a:"",rf:b[1],qf:b[3]||"",fb:b[4]||"",V:c}}},xh=function(a,b,c,d){var e=vh(a);if(e){var f=function(M){return d.getWithConfig(M)},h=!1!==f(H.Ca),k=f(H.Aa)||f(H.S),l=f(H.P),m=f(H.Y),n=f(H.He),q=3===Xd();if(b===H.D){var u=f(H.ma)||{},p=f(H.sb),t=void 0===p?!0:!!p;if(h){if(sg(u[H.Ua],!!u[H.C])){Fg(wh,k,void 0,l,
m);}var v={prefix:k,domain:l,Ka:m};Cg(v);Jg(wh,v);nh(t,k,void 0,l,m)}if(u[H.C]){Hg(wh,u[H.C],u[H.Xa],!!u[H.Va],k);}if(n&&n.exclusion_parameters&&n.engines)if(Wd()){}else sh(n,q,h,k,l,m);G(d.B)}else{var w={},y=f(H.rh);if(Sa(y))for(var x in y)if(y.hasOwnProperty(x)){var B=y[x];void 0!==B&&null!==
B&&(w[x]=B)}var z="";if(5===e.V||6===e.V)z=uh(f);var A=th(d,e.containerId,e.N),F=!0===f(H.eh);if(Wd()&&F){F=!1}var J={fb:e.fb,Dc:h,Pf:l,Qf:m,Fa:k,Gb:f(H.W),V:e.V,Tf:w,Ec:e.rf,Hc:e.qf,w:d.w,B:d.B,Ub:Ze(af(D.location.href)),Vc:z,protocol:q?"http:":"https:",Zc:f(H.Ze),Zb:F,sessionId:f(H.Pb),fc:void 0,transactionId:f(H.ab),hc:void 0,gd:A,xf:!1!==f(H.X)};rh(J)}}else G(d.w)},wh=["aw","dc"];
var zh=function(a){var b;if(a.hasOwnProperty("conversion_data"))b="conversion_data";else if(a.hasOwnProperty("price"))b="price";else return;var c=b,d="/pagead/conversion/"+yh(a.conversion_id)+"/?",e=yh(JSON.stringify(a[c])),f="https://www.googletraveladservices.com/travel/flights/clk"+d+c+"="+e;if(a.conversionLinkerEnabled){var h=lh("gf",a.cookiePrefix);if(h&&h.length)for(var k=0;k<h.length;k++)f+="&gclgf="+yh(h[k])}oc(f,a.onSuccess,a.onFailure)},yh=function(a){return null===a||void 0===a||0===String(a).length?
"":encodeURIComponent(String(a))};
var Ah=/.*\.google\.com(:\d+)?\/booking\/flights.*/,Ch=function(a,b,c,d){var e=function(w){return d.getWithConfig(w)},f=Uc(a).o[0],h=!1!==e(H.Ca),k=e(H.Aa)||e(H.S),l=e(H.P),m=e(H.Y);if(b===H.D){if(h){var n={prefix:k,domain:l,Ka:m};Cg(n);Jg(["aw","dc"],n)}G(d.B)}else{var q={conversion_id:f,onFailure:d.w,onSuccess:d.B,conversionLinkerEnabled:h,cookiePrefix:k},u=Ah.test(D.location.href);if(b!==H.la)G(d.w);else{var t={partner_id:f,trip_type:e(H.ff),total_price:e(H.W),currency:e(H.fa),is_direct_booking:u,flight_segment:Bh(e(H.M))},v=e(H.Xd);v&&"object"===typeof v&&(t.passengers_total=Ba(v.total),t.passengers_adult=Ba(v.adult),t.passengers_child=Ba(v.child),t.passengers_infant_in_seat=Ba(v.infant_in_seat),t.passengers_infant_in_lap=Ba(v.infant_in_lap));q.conversion_data=t;zh(q)}}},Bh=
function(a){if(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a[d];!e||void 0!==e.category&&""!==e.category&&"FlightSegment"!==e.category||(b[c]={cabin:e.travel_class,fare_product:e.fare_product,booking_code:e.booking_code,flight_number:e.flight_number,origin:e.origin,destination:e.destination,departure_date:e.start_date},c++)}return b}};
var Hh=function(a,b,c,d){var e=Uc(a),f=function(w){return d.getWithConfig(w)},h=!1!==f(H.Ca),k=f(H.Aa)||f(H.S),l=f(H.P),m=f(H.Y);if(b===H.D){var n=f(H.ma)||{};if(h){sg(n[H.Ua],!!n[H.C])&&Fg(Dh,k,void 0,l,m);var q={prefix:k,domain:l,Ka:m};Cg(q);Jg(["aw","dc"],q)}if(n[H.C]){Hg(Dh,n[H.C],n[H.Xa],!!n[H.Va],k);}G(d.B)}else{var u=e.o[0];if(/^\d+$/.test(u)){var p="https://www.googletraveladservices.com/travel/clk/pagead/conversion/"+encodeURIComponent(u)+
"/";if(b===H.la){var t=Eh(f(H.ab),f(H.W),f(H.fa),f(H.M));t=encodeURIComponent(Fh(t));p+="?data="+t}else if(b===H.Ta){var v=Gh(u,f(H.W),f(H.Vd),f(H.fa),f(H.M));v=encodeURIComponent(Fh(v));p+="?label=FH&guid=ON&script=0&ord="+xa(0,4294967295)+("&price="+v)}else{G(d.w);return}h&&(p+=lh("ha",k).map(function(w){return"&gclha="+encodeURIComponent(w)}).join(""));oc(p,d.B,d.w)}else G(d.w)}},Eh=function(a,b,c,d){var e={};Ih(a)&&(e.hct_booking_xref=a);g(c)&&(e.hct_currency_code=c);Ih(b)&&(e.hct_total_price=
b,e.hct_base_price=b);if(!va(d)||0===d.length)return e;var f=d[0];if(!Sa(f))return e;Ih(f[Jh.sa])&&(e.hct_partner_hotel_id=f[Jh.sa]);g(f[Jh.ia])&&(e.hct_checkin_date=f[Jh.ia]);g(f[Jh.Pa])&&(e.hct_checkout_date=f[Jh.Pa]);return e},Gh=function(a,b,c,d,e){function f(n){void 0===n&&(n=0);if(Ih(n))return l+n}function h(n,q,u){u(q)&&(k[n]=q)}var k={};k.partner_id=a;var l="USD";g(d)&&(l=k.currency=d);Ih(b)&&(k.base_price_value_string=f(b),k.display_price_value_string=f(b));Ih(c)&&(k.tax_price_value_string=
f(c));g("LANDING_PAGE")&&(k.page_type="LANDING_PAGE");if(!va(e)||0==e.length)return k;var m=e[0];if(!Sa(m))return k;Ih(m[Jh.Gd])&&(k.total_price_value_string=f(m[Jh.Gd]));h("partner_hotel_id",m[Jh.sa],Ih);h("check_in_date",m[Jh.ia],g);h("check_out_date",m[Jh.Pa],g);h("adults",m[Jh.af],Kh);h(Jh.Kd,m[Jh.Kd],g);h(Jh.Jd,m[Jh.Jd],g);return k},Fh=function(a){var b=[];Aa(a,function(c,d){b.push(c+"="+d)});return b.join(";")},Ih=function(a){return g(a)||Kh(a)},Kh=function(a){return"number"===typeof a},Jh=
{sa:"id",Gd:"price",ia:"start_date",Pa:"end_date",af:"occupancy",Kd:"room_id",Jd:"rate_rule_id"},Dh=["ha"];
var Yh=function(a,b,c,d){var e="https://www.google-analytics.com/analytics.js",f=Qe();if(ra(f)){var h="gtag_"+a.split("-").join("_"),k=function(x){var B=[].slice.call(arguments,0);B[0]=h+"."+B[0];f.apply(window,B)},l=function(){var x=function(F,J){for(var M=0;J&&M<J.length;M++)k(F,J[M])},B=Ph(b,d);if(B){var z=B.action;if("impressions"===z)x("ec:addImpression",B.jg);else if("promo_click"===z||"promo_view"===z){var A=B.Wc;x("ec:addPromo",B.Wc);A&&0<A.length&&"promo_click"===z&&k("ec:setAction",z)}else x("ec:addProduct",
B.La),k("ec:setAction",z,B.eb)}},m=function(){if(Wd()){}else{var x=d.getWithConfig(H.Te);x&&(k("require",x,{dataLayer:"dataLayer"}),k("require","render"))}},n=Qh(a,h,b,d);Rh(h,n.Ga)&&(f(function(){Oe()&&Oe().remove(h)}),Sh[h]=!1);f("create",a,n.Ga);(function(){var x=d.getWithConfig("custom_map");f(function(){if(Sa(x)){var B=n.ja,z=Oe().getByName(h),A;for(A in x)if(x.hasOwnProperty(A)&&/^(dimension|metric)\d+$/.test(A)&&void 0!=x[A]){var F=z.get(Th(x[A]));Uh(B,A,F)}}})})();(function(x){if(x){var B={};if(Sa(x))for(var z in Vh)Vh.hasOwnProperty(z)&&Wh(Vh[z],z,x[z],B);k("require","linkid",B)}})(n.linkAttribution);
var u=n[H.ma];if(u&&u[H.C]){var p=u[H.Xa];Re(h+".",u[H.C],void 0===p?!!u.use_anchor:"fragment"===p,!!u[H.Va])}var t=function(x,B,z){z&&(B=""+B);n.ja[x]=B};if(b===H.bd)m(),k("send","pageview",n.ja);else if(b===H.D){m();var v=!1;v?ie(a,d):ie(a);0!=n.sendPageView&&k("send","pageview",n.ja)}else"screen_view"===b?k("send","screenview",n.ja):"timing_complete"===b?(t("timingCategory",
n.eventCategory,!0),t("timingVar",n.name,!0),t("timingValue",Ba(n.value)),void 0!==n.eventLabel&&t("timingLabel",n.eventLabel,!0),k("send","timing",n.ja)):"exception"===b?k("send","exception",n.ja):"optimize.callback"!==b&&(0<=r([H.$c,"select_content",H.Ta,H.Ab,H.Bb,H.Sa,"set_checkout_option",H.la,H.Cb,"view_promotion","checkout_progress"],b)&&(k("require","ec","ec.js"),l()),t("eventCategory",n.eventCategory,!0),t("eventAction",n.eventAction||b,!0),void 0!==n.eventLabel&&t("eventLabel",n.eventLabel,
!0),void 0!==n.value&&t("eventValue",Ba(n.value)),k("send","event",n.ja));if(!Xh){Xh=!0;Je();var w=d.w,y=function(){Oe().loaded||w()};Wd()?G(y):lc(e,y,w)}}else G(d.w)},Xh,Sh={},Zh={client_id:1,client_storage:"storage",cookie_name:1,cookie_domain:1,cookie_expires:1,cookie_path:1,cookie_update:1,cookie_flags:1,sample_rate:1,site_speed_sample_rate:1,use_amp_client_id:1,store_gac:1,conversion_linker:"storeGac"},$h={anonymize_ip:1,app_id:1,app_installer_id:1,app_name:1,app_version:1,campaign:{name:"campaignName",
source:"campaignSource",medium:"campaignMedium",term:"campaignTerm",content:"campaignContent",id:"campaignId"},currency:"currencyCode",description:"exDescription",fatal:"exFatal",language:1,non_interaction:1,page_hostname:"hostname",page_referrer:"referrer",page_path:"page",page_location:"location",page_title:"title",screen_name:1,transport_type:"transport",user_id:1},ai={content_id:1,event_category:1,event_action:1,event_label:1,link_attribution:1,linker:1,method:1,name:1,send_page_view:1,value:1},
Vh={cookie_name:1,cookie_expires:"duration",levels:1},bi={anonymize_ip:1,fatal:1,non_interaction:1,use_amp_client_id:1,send_page_view:1,store_gac:1,conversion_linker:1},Wh=function(a,b,c,d){if(void 0!==c)if(bi[b]&&(c=Ca(c)),"anonymize_ip"!==b||c||(c=void 0),1===a)d[Th(b)]=c;else if(g(a))d[a]=c;else for(var e in a)a.hasOwnProperty(e)&&void 0!==c[e]&&(d[a[e]]=c[e])},Th=function(a){return a&&g(a)?a.replace(/(_[a-z])/g,function(b){return b[1].toUpperCase()}):a},ci=function(a){var b="general";0<=r([H.zd,
H.Ab,H.Ad,H.Sa,"checkout_progress",H.la,H.Cb,H.Bb,"set_checkout_option"],a)?b="ecommerce":0<=r("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "),a)?b="engagement":"exception"===a&&(b="error");return b},Uh=function(a,b,c){a.hasOwnProperty(b)||(a[b]=c)},di=function(a){if(va(a)){for(var b=[],c=0;c<a.length;c++){var d=a[c];if(void 0!=d){var e=d.id,f=d.variant;void 0!=e&&void 0!=f&&b.push(String(e)+"."+String(f))}}return 0<
b.length?b.join("!"):void 0}},Qh=function(a,b,c,d){var e=function(A){return d.getWithConfig(A)},f={},h={},k={},l=di(e(H.Oe));l&&Uh(h,"exp",l);var m=e("custom_map");if(Sa(m))for(var n in m)if(m.hasOwnProperty(n)&&/^(dimension|metric)\d+$/.test(n)&&void 0!=m[n]){var q=e(String(m[n]));void 0!==q&&Uh(h,n,q)}var u=Rd(a);for(var p=0;p<u.length;++p){var t=u[p],v=e(t);if(ai.hasOwnProperty(t))Wh(ai[t],
t,v,f);else if($h.hasOwnProperty(t))Wh($h[t],t,v,h);else if(Zh.hasOwnProperty(t))Wh(Zh[t],t,v,k);else if(/^(dimension|metric|content_group)\d+$/.test(t))Wh(1,t,v,h);else if("developer_id"===t){}else t===H.S&&0>r(u,H.Fb)&&(k.cookieName=v+"_ga")}Uh(k,"cookieDomain","auto");Uh(h,"forceSSL",!0);Uh(f,"eventCategory",ci(c));0<=r(["view_item","view_item_list","view_promotion",
"view_search_results"],c)&&Uh(h,"nonInteraction",!0);"login"===c||"sign_up"===c||"share"===c?Uh(f,"eventLabel",e(H.Se)):"search"===c||"view_search_results"===c?Uh(f,"eventLabel",e(H.df)):"select_content"===c&&Uh(f,"eventLabel",e(H.lh));var y=f[H.ma]||{},x=y[H.Ua];x||0!=x&&y[H.C]?k.allowLinker=!0:!1===x&&Uh(k,"useAmpClientId",!1);if(!1===e(H.hh)||!1===e(H.X)||!1===e(H.Qa))h.allowAdFeatures=!1;!1===e(H.X)&&P("GTM",27);k.name=b;h["&gtm"]=Og(!0);h.hitCallback=d.B;var B=e(H.Qe)||Md("gtag.remote_config."+
a+".url",2),z=e(H.Pe)||Md("gtag.remote_config."+a+".dualId",2);B&&null!=ic&&(k._x_19=B);z&&(k._x_20=z);f.ja=h;f.Ga=k;return f},Ph=function(a,b){function c(v){var w=C(v);w.list=v.list_name;w.listPosition=v.list_position;w.position=v.list_position||v.creative_slot;w.creative=v.creative_name;return w}function d(v){for(var w=[],y=0;v&&y<v.length;y++)v[y]&&w.push(c(v[y]));return w.length?w:void 0}function e(v){return{id:f(H.ab),affiliation:f(H.Je),revenue:f(H.W),tax:f(H.Vd),shipping:f(H.Ne),coupon:f(H.Ke),
list:f(H.hd)||v}}for(var f=function(v){return b.getWithConfig(v)},h=f(H.M),k,l=0;h&&l<h.length&&!(k=h[l][H.hd]);l++);var m=f("custom_map");if(Sa(m))for(var n=0;h&&n<h.length;++n){var q=h[n],u;for(u in m)m.hasOwnProperty(u)&&/^(dimension|metric)\d+$/.test(u)&&void 0!=m[u]&&Uh(q,u,q[m[u]])}var p=null,t=f(H.Me);a===H.la||a===H.Cb?p={action:a,eb:e(),La:d(h)}:a===H.Ab?p={action:"add",La:d(h)}:a===H.Bb?p={action:"remove",La:d(h)}:a===H.Ta?p={action:"detail",eb:e(k),La:d(h)}:a===H.$c?p={action:"impressions",
jg:d(h)}:"view_promotion"===a?p={action:"promo_view",Wc:d(t)}:"select_content"===a&&t&&0<t.length?p={action:"promo_click",Wc:d(t)}:"select_content"===a?p={action:"click",eb:{list:f(H.hd)||k},La:d(h)}:a===H.Sa||"checkout_progress"===a?p={action:"checkout",La:d(h),eb:{step:a===H.Sa?1:f(H.Ud),option:f(H.Sd)}}:"set_checkout_option"===a&&(p={action:"checkout_option",eb:{step:f(H.Ud),option:f(H.Sd)}});p&&(p.zh=f(H.fa));return p},ei={},Rh=function(a,b){var c=ei[a];ei[a]=C(b);if(!c)return!1;for(var d in b)if(b.hasOwnProperty(d)&&
b[d]!==c[d])return!0;for(var e in c)if(c.hasOwnProperty(e)&&c[e]!==b[e])return!0;return!1};var fi={},gi=["G","GP"];fi.Ge="";var hi=fi.Ge.split(",");function ii(){var a=I;return a.gcq=a.gcq||new ji}
var ki=function(a,b,c){ii().register(a,b,c)},li=function(a,b,c,d){ii().push("event",[b,a],c,d)},mi=function(a,b){ii().push("config",[a],b)},ni={},oi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},pi=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},ji=function(){this.i={};this.m={};this.h=[]},qi=function(a,b){var c=Uc(b);return a.i[c.containerId]=a.i[c.containerId]||new oi},ri=function(a,b,c,d){if(d.N){var e=qi(a,d.N),
f=e.m;if(f){var h=C(c),k=C(e.targetConfig[d.N]),l=C(e.containerConfig),m=C(e.i),n=C(a.m),q=Md("gtm.uniqueEventId"),u=Uc(d.N).prefix,p=Ef(Df(Cf(Bf(Af(zf(yf(h),k),l),m),n),function(){Gd(q,u,"2");}),function(){Gd(q,u,"3");});try{Gd(q,u,"1");f(d.N,b,d.m,p)}catch(t){
Gd(q,u,"4");}}}};
ji.prototype.register=function(a,b,c){if(3!==qi(this,a).status){qi(this,a).m=b;qi(this,a).status=3;c&&(qi(this,a).i=c);var d=Uc(a),e=ni[d.containerId];if(void 0!==e){var f=I[d.containerId].bootstrap,h=d.prefix.toUpperCase();I[d.containerId]._spx&&(h=h.toLowerCase());var k=Md("gtm.uniqueEventId"),l=h,m=Ga()-f;if(Cd&&!td[k]){k!==pd&&(nd(),pd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);yd=yd?yd+","+n:"&cl="+n}delete ni[d.containerId]}this.flush()}};
ji.prototype.push=function(a,b,c,d){var e=Math.floor(Ga()/1E3);a:if(c){var f=Uc(c),h;if(h=f){var k;if(k=1===qi(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(qi(this,c).status=2,this.push("require",[],f.containerId),ni[f.containerId]=Ga(),Wd()){}else{var n=encodeURIComponent(f.containerId),q=("http:"!=D.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
lc(q+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.h.push(new pi(a,e,c,b,d));d||this.flush()};
ji.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==qi(this,c.N).status&&!a)return;break;case "set":Aa(c.h[0],function(l,m){C(Ma(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[H.Qb];delete d[H.Qb];var f=qi(this,c.N),h=Uc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||ri(this,H.D,d,c);f.h=!0;delete d[H.qa];k?C(d,f.containerConfig):C(d,f.targetConfig[c.N]);break;
case "event":ri(this,c.h[1],c.h[0],c)}this.h.shift()}};var si=["GP"],ti="G".split(/,/),ui=!1;ui=!0;var vi=null,wi={},xi={},yi;function zi(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.nc]&&(c.eventCallback=b[H.nc]),b[H.tb]&&(c.eventTimeout=b[H.tb]));return c}
var Ai=function(){vi=vi||!I.gtagRegistered;I.gtagRegistered=!0;return vi},Bi=function(a){if(void 0===xi[a.id]){var b;switch(a.prefix){case "UA":b=rf("gtagua",{trackingId:a.id});break;case "AW":b=rf("gtagaw",{conversionId:a});break;case "DC":b=rf("gtagfl",{targetId:a.id});break;case "GF":b=rf("gtaggf",{conversionId:a});break;case "G":b=rf("get",{trackingId:a.id,isAutoTag:!0});break;case "HA":b=rf("gtagha",{conversionId:a});break;case "GP":b=rf("gtaggp",{conversionId:a.id});break;default:return}if(!yi){var c=
Cb("v",{name:"send_to",dataLayerVersion:2});sb.push(c);yi=["macro",sb.length-1]}var d={arg0:yi,arg1:a.id,ignore_case:!1};d[Jb.ra]="_lc";ub.push(d);var e={"if":[ub.length-1],add:[b]};e["if"]&&(e.add||e.block)&&tb.push(e);xi[a.id]=b}},Ci=function(a){Aa(wi,function(b,c){var d=r(c,a);0<=d&&c.splice(d,1)})},Di=Ia(function(){}),Ei=function(a){if(a.containerId!==Xc.s&&"G"!==a.prefix){var b;switch(a.prefix){case "UA":b=14;break;case "AW":b=15;break;case "DC":b=16;break;default:b=17}P("GTM",b)}};
var Fi={config:function(a){var b=a[2]||{};if(2>a.length||!g(a[1])||!Sa(b))return;var c=Uc(a[1]);if(!c)return;Ci(c.id);var d=c.id,e=b[H.nd]||"default";e=e.toString().split(",");for(var f=0;f<e.length;f++)wi[e[f]]=wi[e[f]]||[],wi[e[f]].push(d);delete b[H.nd];C(b);if(Ai()){if(ui&&-1!==r(ti,c.prefix)||-1!==r(si,c.prefix)){"G"===c.prefix&&(b[H.qa]=!0);mi(b,c.id);return}Bi(c);Ei(c)}else Di();Sd("gtag.targets."+c.id,void 0);Sd("gtag.targets."+c.id,C(b));var h={};h[H.na]=c.id;
return zi(H.D,h);},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Sa(a[2])&&void 0!=a[2])return;c=a[2]}var d=zi(b,c);var e;var f=c&&c[H.na];void 0===f&&(f=Md(H.na,2),void 0===f&&(f="default"));if(g(f)||va(f)){for(var h=f.toString().replace(/\s+/g,"").split(","),k=[],l=0;l<h.length;l++)0<=h[l].indexOf("-")?k.push(h[l]):k=k.concat(wi[h[l]]||[]);e=Wc(k)}else e=void 0;var m=e;if(!m)return;var n=Ai();n||Di();for(var q=
[],u=0;n&&u<m.length;u++){var p=m[u];Ei(p);if(ui&&-1!==r(ti,p.prefix)||-1!==r(si,p.prefix)){var t=C(c);"G"===p.prefix&&(t[H.qa]=!0);li(b,t,p.id)}else Bi(p);q.push(p.id)}C(c,{event:b});d.eventModel=d.eventModel||{};0<m.length?d.eventModel[H.na]=q.join():delete d.eventModel[H.na];return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Sa(a[1])?b=C(a[1]):3==a.length&&
g(a[1])&&(b={},Sa(a[2])||va(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){if(Ai()){var c=C(b);ii().push("set",[c])}C(b);b._clear=!0;return b}}},Gi={policy:!0};var Hi=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Ji=function(a){var b=Ii(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Ki=!1,Li=[];function Mi(){if(!Ki){Ki=!0;for(var a=0;a<Li.length;a++)G(Li[a])}}var Ni=function(a){Ki?G(a):Li.push(a)};var cj=function(a){if(bj(a))return a;this.h=a};cj.prototype.fg=function(){return this.h};var bj=function(a){return!a||"object"!==Qa(a)||Sa(a)?!1:"getUntrustedUpdateValue"in a};cj.prototype.getUntrustedUpdateValue=cj.prototype.fg;var dj=[],ej=!1,fj=function(a){return D["dataLayer"].push(a)},gj=function(a){var b=I["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function hj(a){var b=a._clear;Aa(a,function(f,h){"_clear"!==f&&(b&&Sd(f,void 0),Sd(f,h))});cd||(cd=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=id(),a["gtm.uniqueEventId"]=d,Sd("gtm.uniqueEventId",d));ed=c;var e=
ij(a);ed=null;switch(c){case "gtm.init":P("GTM",19),e&&P("GTM",20)}return e}function ij(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=I.zones;d=e?e.checkState(Xc.s,c):se;return d.active?qf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function jj(){for(var a=!1;!ej&&0<dj.length;){ej=!0;delete Jd.eventModel;Ld();var b=dj.shift();if(null!=b){var c=bj(b);if(c){var d=b;b=bj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Md(h,1);if(va(k)||Sa(k))k=C(k);Kd[h]=k}}try{if(ra(b))try{b.call(Nd)}catch(v){}else if(va(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Md(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=Fi[b[0]];if(t&&(!c||!Gi[b[0]])){b=t(b);break a}}b=void 0}if(!b){ej=!1;continue}}a=hj(b)||a}}finally{c&&Ld(!0)}}ej=!1}
return!a}function kj(){var a=jj();try{Hi(D["dataLayer"],Xc.s)}catch(b){}return a}
var mj=function(){var a=jc("dataLayer",[]),b=jc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ni(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<I.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new cj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);dj.push.apply(dj,d);if(300<
this.length)for(P("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return jj()&&h};dj.push.apply(dj,a.slice(0));lj()&&G(kj)},lj=function(){var a=!0;return a};var nj={};nj.ub=new String("undefined");
var oj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===nj.ub?b:a[d]);return c.join("")}};oj.prototype.toString=function(){return this.h("undefined")};oj.prototype.valueOf=oj.prototype.toString;nj.lf=oj;nj.xc={};nj.Rf=function(a){return new oj(a)};var pj={};nj.Ug=function(a,b){var c=id();pj[c]=[a,b];return c};nj.ce=function(a){var b=a?0:1;return function(c){var d=pj[c];if(d&&"function"===typeof d[b])d[b]();pj[c]=void 0}};nj.og=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};nj.Kg=function(a){if(a===nj.ub)return a;var b=id();nj.xc[b]=a;return'google_tag_manager["'+Xc.s+'"].macro('+b+")"};nj.zg=function(a,b,c){a instanceof nj.lf&&(a=a.h(nj.Ug(b,c)),b=qa);return{Jc:a,B:b}};var qj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||sc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},rj=function(a){I.hasOwnProperty("autoEventsSettings")||(I.autoEventsSettings={});var b=I.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},sj=function(a,b,c){rj(a)[b]=c},tj=function(a,b,c,d){var e=rj(a),f=Ha(e,b,d);e[b]=c(f)},uj=function(a,b,c){var d=rj(a);return Ha(d,b,c)};var vj=["input","select","textarea"],wj=["button","hidden","image","reset","submit"],xj=function(a){var b=a.tagName.toLowerCase();return!wa(vj,function(c){return c===b})||"input"===b&&wa(wj,function(c){return c===a.type.toLowerCase()})?!1:!0},yj=function(a){return a.form?a.form.tagName?a.form:E.getElementById(a.form):vc(a,["form"],100)},zj=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(xj(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Aj=!!D.MutationObserver,Bj=void 0,Cj=function(a){if(!Bj){var b=function(){var c=E.body;if(c)if(Aj)(new MutationObserver(function(){for(var e=0;e<Bj.length;e++)G(Bj[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;pc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Bj.length;e++)G(Bj[e])}))})}};Bj=[];E.body?b():G(b)}Bj.push(a)};var Xj=D.clearTimeout,Yj=D.setTimeout,V=function(a,b,c){if(Wd()){b&&G(b)}else return lc(a,b,c)},Zj=function(){return D.location.href},ak=function(a){return $e(af(a),"fragment")},bk=function(a){return Ze(af(a))},W=function(a,b){return Md(a,b||2)},ck=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=fj(a)):d=fj(a);return d},dk=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},ek=function(a,b,c){return Gf(a,b,void 0===c?!0:!!c)},fk=function(a,b){if(Wd()){b&&G(b)}else nc(a,b)},gk=function(a){return!!uj(a,"init",!1)},hk=function(a){sj(a,"init",!0)},ik=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":bd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";V(R("https://","http://",c))},jk=function(a,b){var c=a[b];return c};
var kk=nj.zg;var Hk=new ya;function Ik(a,b){function c(h){var k=af(h),l=$e(k,"protocol"),m=$e(k,"host",!0),n=$e(k,"port"),q=$e(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Jk(a){return Kk(a)?1:0}
function Kk(a){var b=a.arg0,c=a.arg1;if(a.any_of&&va(c)){for(var d=0;d<c.length;d++)if(Jk({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Hk.get(p);t||(t=new RegExp(c,u),Hk.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ik(b,
c)}return!1};var Lk=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Mk={},Nk=encodeURI,Y=encodeURIComponent,Ok=oc;var Pk=function(a,b){if(!a)return!1;var c=$e(af(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Qk=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Mk.pg=function(){var a=!1;return a};var bm=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||xa();return a.hid};var mm=window,nm=document,om=function(a){var b=mm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mm["ga-disable-"+a])return!0;try{var c=mm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Gf("AMP_TOKEN",nm.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return nm.getElementById("__gaOptOutExtension")?!0:!1};var rm=function(a){Aa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ba]||{};Aa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var vm=function(a,b,c){li(b,c,a)},wm=function(a,b,c){li(b,c,a,!0)},ym=function(a,b){};
function xm(a,b){}var Z={a:{}};



Z.a.gtagha=["google"],function(){var a=!1;a=!0;var b=function(c){var d=c.vtp_conversionId,e=ed,f=W("eventModel");if(a){ki(d.id,Hh);if(e===H.D){var h=W("gtag.targets."+d.id);mi(h,d.id)}else li(e,f,d.id);G(c.vtp_gtmOnSuccess)}else{var k=Ef(Df(yf(f),c.vtp_gtmOnSuccess),c.vtp_gtmOnFailure);k.getWithConfig=function(l){return Od(l,d.containerId,d.id)};Hh(d.id,e,(new Date).getTime(),
k)}};Z.__gtagha=b;Z.__gtagha.b="gtagha";Z.__gtagha.g=!0;Z.__gtagha.priorityOverride=0;}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ud(a.vtp_gtmEventId,"event"))})}();

Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();







Z.a.gtagaw=["google"],function(){(function(a){Z.__gtagaw=a;Z.__gtagaw.b="gtagaw";Z.__gtagaw.g=!0;Z.__gtagaw.priorityOverride=0})(function(a){var b=a.vtp_conversionId,c=ed;ki(b.id,Xg);if(c===H.D){var d=W("gtag.targets."+b.id);mi(d,b.id)}else{var e=W("eventModel");li(c,e,b.id)}G(a.vtp_gtmOnSuccess)})}();

Z.a.get=["google"],function(){(function(a){Z.__get=a;Z.__get.b="get";Z.__get.g=!0;Z.__get.priorityOverride=0})(function(a){if(a.vtp_isAutoTag){var b=String(a.vtp_trackingId),c=ed||"",d={};if(c===H.D){var e=W("gtag.targets."+b);C(e,d);d[H.qa]=!0;mi(d,b)}else{var f=W("eventModel");C(f,d);d[H.qa]=!0;li(c,d,b)}}else{var h=a.vtp_settings;(a.vtp_deferrable?wm:vm)(String(h.streamId),String(a.vtp_eventName),h.eventParameters||{})}a.vtp_gtmOnSuccess()})}();


Z.a.gtagfl=[],function(){function a(d){var e=/^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(d);if(e)return{containerId:"DC-"+e[1],N:e[3]&&d}}var b=!1;b=!0;var c=function(d){var e=d.vtp_targetId,f=ed,h=W("eventModel");if(b){ki(e,xh);if(f===H.D){var k=W("gtag.targets."+e);mi(k,e)}else li(f,h,e);G(d.vtp_gtmOnSuccess)}else{var l=a(e);if(l){var m=Ef(Df(yf(h),d.vtp_gtmOnSuccess),
d.vtp_gtmOnFailure);m.getWithConfig=function(n){return Od(n,l.containerId,l.N)};xh(e,f,(new Date).getTime(),m)}else G(d.vtp_gtmOnFailure)}};Z.__gtagfl=c;Z.__gtagfl.b="gtagfl";Z.__gtagfl.g=!0;Z.__gtagfl.priorityOverride=0;}();


Z.a.gtaggf=["google"],function(){(function(a){Z.__gtaggf=a;Z.__gtaggf.b="gtaggf";Z.__gtaggf.g=!0;Z.__gtaggf.priorityOverride=0})(function(a){var b=a.vtp_conversionId,c=ed,d=W("eventModel");ki(b.id,Ch);if(c===H.D){var e=W("gtag.targets."+b.id);mi(e,b.id)}else li(c,d,b.id);G(a.vtp_gtmOnSuccess)})}();




Z.a.gtagua=["google"],function(){var a=!1;a=!0;var b=function(c){var d=c.vtp_trackingId,e=ed,f=W("eventModel");if(a){ki(d,Yh);if(e===H.D){var h=W("gtag.targets."+d);mi(h,d)}else li(e,f,d);G(c.vtp_gtmOnSuccess)}else{var k=Ef(Df(yf(f),c.vtp_gtmOnSuccess),c.vtp_gtmOnFailure);k.getWithConfig=function(l){return Od(l,d,void 0)};Yh(d,e,(new Date).getTime(),k)}};Z.__gtagua=
b;Z.__gtagua.b="gtagua";Z.__gtagua.g=!0;Z.__gtagua.priorityOverride=0;}();

var zm={};zm.macro=function(a){if(nj.xc.hasOwnProperty(a))return nj.xc[a]},zm.onHtmlSuccess=nj.ce(!0),zm.onHtmlFailure=nj.ce(!1);zm.dataLayer=Nd;zm.callback=function(a){gd.hasOwnProperty(a)&&ra(gd[a])&&gd[a]();delete gd[a]};function Am(){I[Xc.s]=zm;Ja(hd,Z.a);Ab=Ab||nj;Bb=re}
function Bm(){tg.gtm_3pds=!0;I=D.google_tag_manager=D.google_tag_manager||{};if(I[Xc.s]){var a=I.zones;a&&a.unregisterChild(Xc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)sb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)wb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)ub.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);tb.push(q)}yb=Z;zb=Jk;Am();mj();ve=!1;we=0;if("interactive"==E.readyState&&!E.createEventObject||"complete"==E.readyState)ye();else{pc(E,"DOMContentLoaded",ye);pc(E,"readystatechange",ye);if(E.createEventObject&&E.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&ze()}pc(D,"load",ye)}Ki=!1;"complete"===E.readyState?Mi():pc(D,
"load",Mi);a:{if(!Cd)break a;D.setInterval(Dd,864E5);}
dd=(new Date).getTime();
zm.bootstrap=dd;}}Bm();

})()

//]]></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-159165424-1');
</script>
<script async='async' src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
<script>
jQuery(document).ready
(function () { jQuery('a
[href*="https://"]:not
([href*="https://trapashowplay.com"])').attr('rel', 'nofollow');
jQuery('a
[href*="https://"]:not
([href*="https://www.trapashowplay.com"])').attr("target", "_blank"); });
</script>
<script>if (self != top) { top.location.replace(window.location.href) }</script>
   
    
    
<!--
<script type="text/javascript" src="https://www.blogger.com/static/v1/widgets/2722883451-widgets.js"></script>
<script type='text/javascript'>
window['__wavt'] = 'AOuZoY76PLOz2NJbVAi7wPpwqelpu98f4A:1607251928466';_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d2484898155436190997','//www.trapashowplay.com//service-worker.js','2484898155436190997');
_WidgetManager._SetDataContext([{'name': 'blog', 'data': {'blogId': '2484898155436190997', 'title': 'Trapashow play ', 'url': 'https://www.trapashowplay.com//service-worker.js', 'canonicalUrl': 'https://www.trapashowplay.com//service-worker.js', 'homepageUrl': 'https://www.trapashowplay.com/', 'searchUrl': 'https://www.trapashowplay.com/search', 'canonicalHomepageUrl': 'https://www.trapashowplay.com/', 'blogspotFaviconUrl': 'https://www.trapashowplay.com/favicon.ico', 'bloggerUrl': 'https://www.blogger.com', 'hasCustomDomain': true, 'httpsEnabled': true, 'enabledCommentProfileImages': true, 'gPlusViewType': 'FILTERED_POSTMOD', 'adultContent': false, 'analyticsAccountNumber': 'UA-47719125-2', 'encoding': 'UTF-8', 'locale': 'pt-BR', 'localeUnderscoreDelimited': 'pt_br', 'languageDirection': 'ltr', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'isDynamicViewsAvailable': true, 'feedLinks': '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Trapashow play  - Atom\x22 href\x3d\x22https://www.trapashowplay.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22Trapashow play  - RSS\x22 href\x3d\x22https://www.trapashowplay.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Trapashow play  - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/2484898155436190997/posts/default\x22 /\x3e\n', 'meTag': '', 'adsenseClientId': 'ca-pub-6234675142024629', 'adsenseHostId': 'ca-host-pub-1556223355139109', 'adsenseHasAds': false, 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/1572530ac283d0e5', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'disableGComments': true, 'sharing': {'platforms': [{'name': 'Gerar link', 'key': 'link', 'shareMessage': 'Gerar link', 'target': ''}, {'name': 'Facebook', 'key': 'facebook', 'shareMessage': 'Compartilhar no Facebook', 'target': 'facebook'}, {'name': 'BlogThis!', 'key': 'blogThis', 'shareMessage': 'BlogThis!', 'target': 'blog'}, {'name': 'Twitter', 'key': 'twitter', 'shareMessage': 'Compartilhar no Twitter', 'target': 'twitter'}, {'name': 'Pinterest', 'key': 'pinterest', 'shareMessage': 'Compartilhar no Pinterest', 'target': 'pinterest'}, {'name': 'E-mail', 'key': 'email', 'shareMessage': 'E-mail', 'target': 'email'}], 'disableGooglePlus': true, 'googlePlusShareButtonWidth': 300, 'googlePlusBootstrap': '\x3cscript type\x3d\x22text/javascript\x22\x3ewindow.___gcfg \x3d {\x27lang\x27: \x27pt_BR\x27};\x3c/script\x3e'}, 'hasCustomJumpLinkMessage': false, 'jumpLinkMessage': 'Leia mais', 'pageType': 'error_page', 'pageName': '', 'pageTitle': 'Trapashow play ', 'metaDescription': 'Trapashow play entretenimento videos online, filmes, musicas, videos motivacionais, series humor e comedia, artes marciais, martial arts.'}}, {'name': 'features', 'data': {'sharing_get_link_dialog': 'true', 'sharing_native': 'false'}}, {'name': 'messages', 'data': {'edit': 'Editar', 'linkCopiedToClipboard': 'Link copiado para a \xe1rea de transfer\xeancia.', 'ok': 'OK', 'postLink': 'Link da postagem'}}, {'name': 'template', 'data': {'name': 'custom', 'localizedName': 'Personalizado', 'isResponsive': true, 'isAlternateRendering': false, 'isCustom': true}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\x3dclassic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\x3dflipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\x3dmagazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\x3dmosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\x3dsidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\x3dsnapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\x3dtimeslide'}, 'isMobile': false, 'title': 'Trapashow play ', 'description': 'Trapashow play entretenimento videos online, filmes, musicas, videos motivacionais, series humor e comedia, artes marciais, martial arts.', 'url': 'https://www.trapashowplay.com//service-worker.js', 'type': 'error', 'isSingleItem': false, 'isMultipleItems': false, 'isError': true, 'isPage': false, 'isPost': false, 'isHomepage': false, 'isArchive': false, 'isLabelSearch': false}}, {'name': 'widgets', 'data': [{'title': 'Trapashow play  (Cabe\xe7alho)', 'type': 'Header', 'sectionId': 'header', 'id': 'Header1'}, {'title': 'Baixe O App do Site', 'type': 'Image', 'sectionId': 'crosscol-overflow', 'id': 'Image1'}, {'title': 'Postagens no blog', 'type': 'Blog', 'sectionId': 'page_body', 'id': 'Blog1', 'posts': [], 'headerByline': {'regionName': 'header1', 'items': [{'name': 'author', 'label': 'Por'}, {'name': 'timestamp', 'label': ''}]}, 'footerBylines': [{'regionName': 'footer1', 'items': [{'name': 'comments', 'label': 'coment\xe1rios'}, {'name': 'icons', 'label': ''}, {'name': 'backlinks', 'label': 'Links para esta postagem'}]}, {'regionName': 'footer2', 'items': [{'name': 'labels', 'label': ''}]}], 'allBylineItems': [{'name': 'author', 'label': 'Por'}, {'name': 'timestamp', 'label': ''}, {'name': 'comments', 'label': 'coment\xe1rios'}, {'name': 'icons', 'label': ''}, {'name': 'backlinks', 'label': 'Links para esta postagem'}, {'name': 'labels', 'label': ''}]}]}]);
_WidgetManager._RegisterWidget('_HeaderView', new _WidgetInfo('Header1', 'header', document.getElementById('Header1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_ImageView', new _WidgetInfo('Image1', 'crosscol-overflow', document.getElementById('Image1'), {'resize': false}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'page_body', document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'navMessage': 'Ol\xe1 se chegou a est\xe1 p\xe1gina e n\xe3o encontrou o item desejado? \xe8 possivel que o conte\xfado tenha sido exclu\xeddo ou atualizado. Verifique na barra de pesquisa ou nos menus para ver se encontra o que deseja.\n\nObrigado, equipe Trapashow play.'}, 'displayModeFull'));
</script>
</body>--></body>
  
</html>