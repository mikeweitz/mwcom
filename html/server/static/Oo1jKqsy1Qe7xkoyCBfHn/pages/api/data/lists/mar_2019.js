module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FmI8");


/***/ }),

/***/ "FmI8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/2RrcSTwJGR05acMfdl1eGh"
  },
  "followers": {
    "href": null,
    "total": 1
  },
  "href": "https://api.spotify.com/v1/playlists/2RrcSTwJGR05acMfdl1eGh?type=track,episode",
  "id": "2RrcSTwJGR05acMfdl1eGh",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2730a13bd62c382a7214767c5bdab67616d0000b273641659fda6c66fc62d34b7c0ab67616d0000b273e79ae3483646001e39b9f787ab67616d0000b273f4569b492fbe11bb2536fefa",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2730a13bd62c382a7214767c5bdab67616d0000b273641659fda6c66fc62d34b7c0ab67616d0000b273e79ae3483646001e39b9f787ab67616d0000b273f4569b492fbe11bb2536fefa",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2730a13bd62c382a7214767c5bdab67616d0000b273641659fda6c66fc62d34b7c0ab67616d0000b273e79ae3483646001e39b9f787ab67616d0000b273f4569b492fbe11bb2536fefa",
    "width": 60
  }],
  "name": "March 2019",
  "owner": {
    "display_name": "Weity",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/1247970817"
    },
    "href": "https://api.spotify.com/v1/users/1247970817",
    "id": "1247970817",
    "type": "user",
    "uri": "spotify:user:1247970817"
  },
  "primary_color": null,
  "public": false,
  "sharing_info": {
    "share_id": "-5N7-a2cTlWWM42kVE9iCg",
    "share_url": "https://open.spotify.com/playlist/2RrcSTwJGR05acMfdl1eGh?si=-5N7-a2cTlWWM42kVE9iCg",
    "uri": "spotify:playlist:2RrcSTwJGR05acMfdl1eGh"
  },
  "snapshot_id": "MTA0LGJmZDkzY2VlOWQ5YzZjMmEyODFjYmY5ZjViMThhODlhYTRjNWRmNzU=",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/2RrcSTwJGR05acMfdl1eGh/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2019-02-16T00:05:32Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "LlOPn6YNSS-1R8ykakwVgw",
        "share_url": "https://open.spotify.com/track/7xZcIFrS6DAHIHuBuhWExT?si=LlOPn6YNSS-1R8ykakwVgw",
        "uri": "spotify:track:7xZcIFrS6DAHIHuBuhWExT"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0jKnrNiJL0MkKtjfOQXNEY"
            },
            "href": "https://api.spotify.com/v1/artists/0jKnrNiJL0MkKtjfOQXNEY",
            "id": "0jKnrNiJL0MkKtjfOQXNEY",
            "name": "Las Luces Primeras",
            "type": "artist",
            "uri": "spotify:artist:0jKnrNiJL0MkKtjfOQXNEY"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1GwmkXAwYjKolTsFLsXudA"
          },
          "href": "https://api.spotify.com/v1/albums/1GwmkXAwYjKolTsFLsXudA",
          "id": "1GwmkXAwYjKolTsFLsXudA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f4569b492fbe11bb2536fefa",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f4569b492fbe11bb2536fefa",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f4569b492fbe11bb2536fefa",
            "width": 64
          }],
          "name": "Forestal Tape",
          "release_date": "2018-02-07",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1GwmkXAwYjKolTsFLsXudA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0jKnrNiJL0MkKtjfOQXNEY"
          },
          "href": "https://api.spotify.com/v1/artists/0jKnrNiJL0MkKtjfOQXNEY",
          "id": "0jKnrNiJL0MkKtjfOQXNEY",
          "name": "Las Luces Primeras",
          "type": "artist",
          "uri": "spotify:artist:0jKnrNiJL0MkKtjfOQXNEY"
        }],
        "disc_number": 1,
        "duration_ms": 64210,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADM1865342"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7xZcIFrS6DAHIHuBuhWExT"
        },
        "href": "https://api.spotify.com/v1/tracks/7xZcIFrS6DAHIHuBuhWExT",
        "id": "7xZcIFrS6DAHIHuBuhWExT",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7HXwH19VsoEgdXvomx73kh"
          },
          "href": "https://api.spotify.com/v1/tracks/7HXwH19VsoEgdXvomx73kh",
          "id": "7HXwH19VsoEgdXvomx73kh",
          "type": "track",
          "uri": "spotify:track:7HXwH19VsoEgdXvomx73kh"
        },
        "name": "Cuenco Forestal",
        "popularity": 15,
        "preview_url": "https://p.scdn.co/mp3-preview/ae3ee51bb47126d9643eb33096822b49d2ffdc4d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:7xZcIFrS6DAHIHuBuhWExT"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-18T21:26:17Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "FfHjq0dPQNqoXlaGQBin-A",
        "share_url": "https://open.spotify.com/track/3uGB2pQOQmh69rfyJLetzO?si=FfHjq0dPQNqoXlaGQBin-A",
        "uri": "spotify:track:3uGB2pQOQmh69rfyJLetzO"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2alOWLKI3HbgjLLrIwCBU0"
            },
            "href": "https://api.spotify.com/v1/artists/2alOWLKI3HbgjLLrIwCBU0",
            "id": "2alOWLKI3HbgjLLrIwCBU0",
            "name": "Noire",
            "type": "artist",
            "uri": "spotify:artist:2alOWLKI3HbgjLLrIwCBU0"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/43eRACkuhilxCmyR3hkQJl"
          },
          "href": "https://api.spotify.com/v1/albums/43eRACkuhilxCmyR3hkQJl",
          "id": "43eRACkuhilxCmyR3hkQJl",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2730a13bd62c382a7214767c5bd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e020a13bd62c382a7214767c5bd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048510a13bd62c382a7214767c5bd",
            "width": 64
          }],
          "name": "Some Kind of Blue",
          "release_date": "2017-09-29",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:43eRACkuhilxCmyR3hkQJl"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2alOWLKI3HbgjLLrIwCBU0"
          },
          "href": "https://api.spotify.com/v1/artists/2alOWLKI3HbgjLLrIwCBU0",
          "id": "2alOWLKI3HbgjLLrIwCBU0",
          "name": "Noire",
          "type": "artist",
          "uri": "spotify:artist:2alOWLKI3HbgjLLrIwCBU0"
        }],
        "disc_number": 1,
        "duration_ms": 183716,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "AUQEO1700034"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3uGB2pQOQmh69rfyJLetzO"
        },
        "href": "https://api.spotify.com/v1/tracks/3uGB2pQOQmh69rfyJLetzO",
        "id": "3uGB2pQOQmh69rfyJLetzO",
        "is_local": false,
        "is_playable": true,
        "name": "Real Cool",
        "popularity": 19,
        "preview_url": "https://p.scdn.co/mp3-preview/38af367c81abed48375a82695618c5854b563bed?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3uGB2pQOQmh69rfyJLetzO"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-25T22:44:54Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "eP0Ie3PIR12xQB4ogMEWfg",
        "share_url": "https://open.spotify.com/track/2lTtnKQgjbrBA1qnOFhBkP?si=eP0Ie3PIR12xQB4ogMEWfg",
        "uri": "spotify:track:2lTtnKQgjbrBA1qnOFhBkP"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2HkSsS8O2U2gPhnCGVN5vn"
            },
            "href": "https://api.spotify.com/v1/artists/2HkSsS8O2U2gPhnCGVN5vn",
            "id": "2HkSsS8O2U2gPhnCGVN5vn",
            "name": "BETWEEN FRIENDS",
            "type": "artist",
            "uri": "spotify:artist:2HkSsS8O2U2gPhnCGVN5vn"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0S4Y2Jnwf3tjQRlcKTsGUE"
          },
          "href": "https://api.spotify.com/v1/albums/0S4Y2Jnwf3tjQRlcKTsGUE",
          "id": "0S4Y2Jnwf3tjQRlcKTsGUE",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273641659fda6c66fc62d34b7c0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02641659fda6c66fc62d34b7c0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851641659fda6c66fc62d34b7c0",
            "width": 64
          }],
          "name": "we just need some time together",
          "release_date": "2018-04-05",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:0S4Y2Jnwf3tjQRlcKTsGUE"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2HkSsS8O2U2gPhnCGVN5vn"
          },
          "href": "https://api.spotify.com/v1/artists/2HkSsS8O2U2gPhnCGVN5vn",
          "id": "2HkSsS8O2U2gPhnCGVN5vn",
          "name": "BETWEEN FRIENDS",
          "type": "artist",
          "uri": "spotify:artist:2HkSsS8O2U2gPhnCGVN5vn"
        }],
        "disc_number": 1,
        "duration_ms": 235225,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USQX91800782"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2lTtnKQgjbrBA1qnOFhBkP"
        },
        "href": "https://api.spotify.com/v1/tracks/2lTtnKQgjbrBA1qnOFhBkP",
        "id": "2lTtnKQgjbrBA1qnOFhBkP",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3zWKSvWD4jONuTDlVpN5BT"
          },
          "href": "https://api.spotify.com/v1/tracks/3zWKSvWD4jONuTDlVpN5BT",
          "id": "3zWKSvWD4jONuTDlVpN5BT",
          "type": "track",
          "uri": "spotify:track:3zWKSvWD4jONuTDlVpN5BT"
        },
        "name": "affection",
        "popularity": 70,
        "preview_url": "https://p.scdn.co/mp3-preview/b936b4f0a68eb4ba84e7729b29fd85ea4eece42e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:2lTtnKQgjbrBA1qnOFhBkP"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-22T01:15:09Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "qHUZC3uXQDizz3t8wLUxEg",
        "share_url": "https://open.spotify.com/track/5kTfGxslMBLVeapaoeb0ZW?si=qHUZC3uXQDizz3t8wLUxEg",
        "uri": "spotify:track:5kTfGxslMBLVeapaoeb0ZW"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/06W84OT2eFUNVwG85UsxJw"
            },
            "href": "https://api.spotify.com/v1/artists/06W84OT2eFUNVwG85UsxJw",
            "id": "06W84OT2eFUNVwG85UsxJw",
            "name": "Caroline Rose",
            "type": "artist",
            "uri": "spotify:artist:06W84OT2eFUNVwG85UsxJw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ztVsnlMAsHqVe1BjoICnr"
          },
          "href": "https://api.spotify.com/v1/albums/2ztVsnlMAsHqVe1BjoICnr",
          "id": "2ztVsnlMAsHqVe1BjoICnr",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e79ae3483646001e39b9f787",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e79ae3483646001e39b9f787",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e79ae3483646001e39b9f787",
            "width": 64
          }],
          "name": "LONER",
          "release_date": "2018-02-23",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2ztVsnlMAsHqVe1BjoICnr"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/06W84OT2eFUNVwG85UsxJw"
          },
          "href": "https://api.spotify.com/v1/artists/06W84OT2eFUNVwG85UsxJw",
          "id": "06W84OT2eFUNVwG85UsxJw",
          "name": "Caroline Rose",
          "type": "artist",
          "uri": "spotify:artist:06W84OT2eFUNVwG85UsxJw"
        }],
        "disc_number": 1,
        "duration_ms": 189949,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US27Q1841707"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5kTfGxslMBLVeapaoeb0ZW"
        },
        "href": "https://api.spotify.com/v1/tracks/5kTfGxslMBLVeapaoeb0ZW",
        "id": "5kTfGxslMBLVeapaoeb0ZW",
        "is_local": false,
        "is_playable": true,
        "name": "Soul No. 5",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/3f1a24676fa0f738a6a41a5afa899348143ec7ad?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:5kTfGxslMBLVeapaoeb0ZW"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-14T19:06:32Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "RYha9B_KS4-c3Jmn9-QYZw",
        "share_url": "https://open.spotify.com/track/1du4tPkvJfCIuVL6WMtqSs?si=RYha9B_KS4-c3Jmn9-QYZw",
        "uri": "spotify:track:1du4tPkvJfCIuVL6WMtqSs"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/56oDRnqbIiwx4mymNEv7dS"
            },
            "href": "https://api.spotify.com/v1/artists/56oDRnqbIiwx4mymNEv7dS",
            "id": "56oDRnqbIiwx4mymNEv7dS",
            "name": "Lizzo",
            "type": "artist",
            "uri": "spotify:artist:56oDRnqbIiwx4mymNEv7dS"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7hBV0wo7cDHZQLYnuOJ312"
          },
          "href": "https://api.spotify.com/v1/albums/7hBV0wo7cDHZQLYnuOJ312",
          "id": "7hBV0wo7cDHZQLYnuOJ312",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bf7d271b8f3051af3cf0bf55",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bf7d271b8f3051af3cf0bf55",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bf7d271b8f3051af3cf0bf55",
            "width": 64
          }],
          "name": "Cuz I Love You (Super Deluxe)",
          "release_date": "2019-04-17",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:7hBV0wo7cDHZQLYnuOJ312"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/56oDRnqbIiwx4mymNEv7dS"
          },
          "href": "https://api.spotify.com/v1/artists/56oDRnqbIiwx4mymNEv7dS",
          "id": "56oDRnqbIiwx4mymNEv7dS",
          "name": "Lizzo",
          "type": "artist",
          "uri": "spotify:artist:56oDRnqbIiwx4mymNEv7dS"
        }],
        "disc_number": 1,
        "duration_ms": 172630,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT21802921"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1du4tPkvJfCIuVL6WMtqSs"
        },
        "href": "https://api.spotify.com/v1/tracks/1du4tPkvJfCIuVL6WMtqSs",
        "id": "1du4tPkvJfCIuVL6WMtqSs",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0j77ikAaghcss4idQVcAXT"
          },
          "href": "https://api.spotify.com/v1/tracks/0j77ikAaghcss4idQVcAXT",
          "id": "0j77ikAaghcss4idQVcAXT",
          "type": "track",
          "uri": "spotify:track:0j77ikAaghcss4idQVcAXT"
        },
        "name": "Boys",
        "popularity": 67,
        "preview_url": "https://p.scdn.co/mp3-preview/a2db1ef85045a88632b9e8d4a5651721d2afeffa?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 12,
        "type": "track",
        "uri": "spotify:track:1du4tPkvJfCIuVL6WMtqSs"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-14T19:33:02Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "l3XmCYqiTISMsDR_s7fhHA",
        "share_url": "https://open.spotify.com/track/4MV4wa3Dke1GMBtk06GMR0?si=l3XmCYqiTISMsDR_s7fhHA",
        "uri": "spotify:track:4MV4wa3Dke1GMBtk06GMR0"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0cGUm45nv7Z6M6qdXYQGTX"
            },
            "href": "https://api.spotify.com/v1/artists/0cGUm45nv7Z6M6qdXYQGTX",
            "id": "0cGUm45nv7Z6M6qdXYQGTX",
            "name": "Kehlani",
            "type": "artist",
            "uri": "spotify:artist:0cGUm45nv7Z6M6qdXYQGTX"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4B4in9QlrlYWSHlYSRebdC"
          },
          "href": "https://api.spotify.com/v1/albums/4B4in9QlrlYWSHlYSRebdC",
          "id": "4B4in9QlrlYWSHlYSRebdC",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27343515daa8b28e0978efe9543",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0243515daa8b28e0978efe9543",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485143515daa8b28e0978efe9543",
            "width": 64
          }],
          "name": "SweetSexySavage (Deluxe)",
          "release_date": "2017-01-27",
          "release_date_precision": "day",
          "total_tracks": 19,
          "type": "album",
          "uri": "spotify:album:4B4in9QlrlYWSHlYSRebdC"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0cGUm45nv7Z6M6qdXYQGTX"
          },
          "href": "https://api.spotify.com/v1/artists/0cGUm45nv7Z6M6qdXYQGTX",
          "id": "0cGUm45nv7Z6M6qdXYQGTX",
          "name": "Kehlani",
          "type": "artist",
          "uri": "spotify:artist:0cGUm45nv7Z6M6qdXYQGTX"
        }],
        "disc_number": 1,
        "duration_ms": 209121,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USAT21603739"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4MV4wa3Dke1GMBtk06GMR0"
        },
        "href": "https://api.spotify.com/v1/tracks/4MV4wa3Dke1GMBtk06GMR0",
        "id": "4MV4wa3Dke1GMBtk06GMR0",
        "is_local": false,
        "is_playable": true,
        "name": "Keep On",
        "popularity": 59,
        "preview_url": "https://p.scdn.co/mp3-preview/964b318828de31ea1181982b70648811909b9fc1?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4MV4wa3Dke1GMBtk06GMR0"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-28T21:17:38Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "4g7fGYiwQ0ORmX3ls8ZeDQ",
        "share_url": "https://open.spotify.com/track/0O5dK0bZRlW32EFP3w7KFI?si=4g7fGYiwQ0ORmX3ls8ZeDQ",
        "uri": "spotify:track:0O5dK0bZRlW32EFP3w7KFI"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/08q2kFjr9p4cJqTGU9xJgg"
            },
            "href": "https://api.spotify.com/v1/artists/08q2kFjr9p4cJqTGU9xJgg",
            "id": "08q2kFjr9p4cJqTGU9xJgg",
            "name": "pronoun",
            "type": "artist",
            "uri": "spotify:artist:08q2kFjr9p4cJqTGU9xJgg"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3fZqYNIujM9DnW0tOqeIPe"
          },
          "href": "https://api.spotify.com/v1/albums/3fZqYNIujM9DnW0tOqeIPe",
          "id": "3fZqYNIujM9DnW0tOqeIPe",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734cde50afc3985b9b3f9a97fd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024cde50afc3985b9b3f9a97fd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514cde50afc3985b9b3f9a97fd",
            "width": 64
          }],
          "name": "i'll show you stronger",
          "release_date": "2019-05-24",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:3fZqYNIujM9DnW0tOqeIPe"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/08q2kFjr9p4cJqTGU9xJgg"
          },
          "href": "https://api.spotify.com/v1/artists/08q2kFjr9p4cJqTGU9xJgg",
          "id": "08q2kFjr9p4cJqTGU9xJgg",
          "name": "pronoun",
          "type": "artist",
          "uri": "spotify:artist:08q2kFjr9p4cJqTGU9xJgg"
        }],
        "disc_number": 1,
        "duration_ms": 218066,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZ4B61702801"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0O5dK0bZRlW32EFP3w7KFI"
        },
        "href": "https://api.spotify.com/v1/tracks/0O5dK0bZRlW32EFP3w7KFI",
        "id": "0O5dK0bZRlW32EFP3w7KFI",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2lMoO207dax46aGAyh6Kow"
          },
          "href": "https://api.spotify.com/v1/tracks/2lMoO207dax46aGAyh6Kow",
          "id": "2lMoO207dax46aGAyh6Kow",
          "type": "track",
          "uri": "spotify:track:2lMoO207dax46aGAyh6Kow"
        },
        "name": "run",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/00344b8510e31ca54fe1296d1cf929d079ede816?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:0O5dK0bZRlW32EFP3w7KFI"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-03-06T19:09:40Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "2I5OjpsbRfuitskiECFOAQ",
        "share_url": "https://open.spotify.com/track/5rz03FtyJpTj06n3nbPfAq?si=2I5OjpsbRfuitskiECFOAQ",
        "uri": "spotify:track:5rz03FtyJpTj06n3nbPfAq"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2Ki2mlU4LhZZ0BOYHWbcot"
            },
            "href": "https://api.spotify.com/v1/artists/2Ki2mlU4LhZZ0BOYHWbcot",
            "id": "2Ki2mlU4LhZZ0BOYHWbcot",
            "name": "The Dig",
            "type": "artist",
            "uri": "spotify:artist:2Ki2mlU4LhZZ0BOYHWbcot"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6dZnbKg3KzIR70RFsbeNWA"
          },
          "href": "https://api.spotify.com/v1/albums/6dZnbKg3KzIR70RFsbeNWA",
          "id": "6dZnbKg3KzIR70RFsbeNWA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27300853a6069c5ba86a5a396af",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0200853a6069c5ba86a5a396af",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485100853a6069c5ba86a5a396af",
            "width": 64
          }],
          "name": "Bloodshot Tokyo",
          "release_date": "2017-02-03",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6dZnbKg3KzIR70RFsbeNWA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2Ki2mlU4LhZZ0BOYHWbcot"
          },
          "href": "https://api.spotify.com/v1/artists/2Ki2mlU4LhZZ0BOYHWbcot",
          "id": "2Ki2mlU4LhZZ0BOYHWbcot",
          "name": "The Dig",
          "type": "artist",
          "uri": "spotify:artist:2Ki2mlU4LhZZ0BOYHWbcot"
        }],
        "disc_number": 1,
        "duration_ms": 267186,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USVBM1600031"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5rz03FtyJpTj06n3nbPfAq"
        },
        "href": "https://api.spotify.com/v1/tracks/5rz03FtyJpTj06n3nbPfAq",
        "id": "5rz03FtyJpTj06n3nbPfAq",
        "is_local": false,
        "is_playable": true,
        "name": "Jet Black Hair",
        "popularity": 20,
        "preview_url": "https://p.scdn.co/mp3-preview/ee084f7dfcd362af0acc418e50b8ea538600d6b6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5rz03FtyJpTj06n3nbPfAq"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-03-05T20:03:28Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "8hbY_42lSoGX3G9AND98AQ",
        "share_url": "https://open.spotify.com/track/2WQzsRjsNuQz8KGEXNcJCU?si=8hbY_42lSoGX3G9AND98AQ",
        "uri": "spotify:track:2WQzsRjsNuQz8KGEXNcJCU"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1ikg4sypcURm8Vy5GP68xb"
            },
            "href": "https://api.spotify.com/v1/artists/1ikg4sypcURm8Vy5GP68xb",
            "id": "1ikg4sypcURm8Vy5GP68xb",
            "name": "Magic City Hippies",
            "type": "artist",
            "uri": "spotify:artist:1ikg4sypcURm8Vy5GP68xb"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7mtoEwzZYBqG8JYItxcccG"
          },
          "href": "https://api.spotify.com/v1/albums/7mtoEwzZYBqG8JYItxcccG",
          "id": "7mtoEwzZYBqG8JYItxcccG",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c82a951f55ec32c37f84a5b6",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c82a951f55ec32c37f84a5b6",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c82a951f55ec32c37f84a5b6",
            "width": 64
          }],
          "name": "Hippie Castle EP",
          "release_date": "2015-07-24",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:7mtoEwzZYBqG8JYItxcccG"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1ikg4sypcURm8Vy5GP68xb"
          },
          "href": "https://api.spotify.com/v1/artists/1ikg4sypcURm8Vy5GP68xb",
          "id": "1ikg4sypcURm8Vy5GP68xb",
          "name": "Magic City Hippies",
          "type": "artist",
          "uri": "spotify:artist:1ikg4sypcURm8Vy5GP68xb"
        }],
        "disc_number": 1,
        "duration_ms": 264000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM4DW1568116"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2WQzsRjsNuQz8KGEXNcJCU"
        },
        "href": "https://api.spotify.com/v1/tracks/2WQzsRjsNuQz8KGEXNcJCU",
        "id": "2WQzsRjsNuQz8KGEXNcJCU",
        "is_local": false,
        "is_playable": true,
        "name": "Fanfare",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/6cd905604bcac7710e85bd98b520e22b782fc9a8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2WQzsRjsNuQz8KGEXNcJCU"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-03-14T17:30:02Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "umyHh6LGQB6dlKke174Oww",
        "share_url": "https://open.spotify.com/track/3R5z7GgmdoRkZksI4EQW0M?si=umyHh6LGQB6dlKke174Oww",
        "uri": "spotify:track:3R5z7GgmdoRkZksI4EQW0M"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5HS4BCPnb2zYSwsmXunf8d"
            },
            "href": "https://api.spotify.com/v1/artists/5HS4BCPnb2zYSwsmXunf8d",
            "id": "5HS4BCPnb2zYSwsmXunf8d",
            "name": "The Golden Dregs",
            "type": "artist",
            "uri": "spotify:artist:5HS4BCPnb2zYSwsmXunf8d"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/44b8EDv4gyHJwD2PBGWPLu"
          },
          "href": "https://api.spotify.com/v1/albums/44b8EDv4gyHJwD2PBGWPLu",
          "id": "44b8EDv4gyHJwD2PBGWPLu",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ccc7497ff3b063998556f5ec",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ccc7497ff3b063998556f5ec",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ccc7497ff3b063998556f5ec",
            "width": 64
          }],
          "name": "Adaptation",
          "release_date": "2018-02-28",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:44b8EDv4gyHJwD2PBGWPLu"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5HS4BCPnb2zYSwsmXunf8d"
          },
          "href": "https://api.spotify.com/v1/artists/5HS4BCPnb2zYSwsmXunf8d",
          "id": "5HS4BCPnb2zYSwsmXunf8d",
          "name": "The Golden Dregs",
          "type": "artist",
          "uri": "spotify:artist:5HS4BCPnb2zYSwsmXunf8d"
        }],
        "disc_number": 1,
        "duration_ms": 279437,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1801298"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3R5z7GgmdoRkZksI4EQW0M"
        },
        "href": "https://api.spotify.com/v1/tracks/3R5z7GgmdoRkZksI4EQW0M",
        "id": "3R5z7GgmdoRkZksI4EQW0M",
        "is_local": false,
        "is_playable": true,
        "name": "Adaptation",
        "popularity": 1,
        "preview_url": "https://p.scdn.co/mp3-preview/b6809543cefc33f61d2dd4f209a50caae6a51d90?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3R5z7GgmdoRkZksI4EQW0M"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-18T20:47:11Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "OOkFw4-nR7mBbYUA4l-gSw",
        "share_url": "https://open.spotify.com/track/4G66bqfXk0rqec1OknBpuG?si=OOkFw4-nR7mBbYUA4l-gSw",
        "uri": "spotify:track:4G66bqfXk0rqec1OknBpuG"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5w06LBuqP0OwZ1USZ2oKkS"
            },
            "href": "https://api.spotify.com/v1/artists/5w06LBuqP0OwZ1USZ2oKkS",
            "id": "5w06LBuqP0OwZ1USZ2oKkS",
            "name": "The Echocentrics",
            "type": "artist",
            "uri": "spotify:artist:5w06LBuqP0OwZ1USZ2oKkS"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2kKUYzb7eOaYvo3d9TrsRj"
          },
          "href": "https://api.spotify.com/v1/albums/2kKUYzb7eOaYvo3d9TrsRj",
          "id": "2kKUYzb7eOaYvo3d9TrsRj",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737cd955b5f41d39a5b9280ad6",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027cd955b5f41d39a5b9280ad6",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517cd955b5f41d39a5b9280ad6",
            "width": 64
          }],
          "name": "Echo Hotel",
          "release_date": "2016-05-20",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2kKUYzb7eOaYvo3d9TrsRj"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5w06LBuqP0OwZ1USZ2oKkS"
          },
          "href": "https://api.spotify.com/v1/artists/5w06LBuqP0OwZ1USZ2oKkS",
          "id": "5w06LBuqP0OwZ1USZ2oKkS",
          "name": "The Echocentrics",
          "type": "artist",
          "uri": "spotify:artist:5w06LBuqP0OwZ1USZ2oKkS"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5hvtNzq5txTnVaSXY0DYpW"
          },
          "href": "https://api.spotify.com/v1/artists/5hvtNzq5txTnVaSXY0DYpW",
          "id": "5hvtNzq5txTnVaSXY0DYpW",
          "name": "James Petralli",
          "type": "artist",
          "uri": "spotify:artist:5hvtNzq5txTnVaSXY0DYpW"
        }],
        "disc_number": 1,
        "duration_ms": 215215,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US66W1600002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4G66bqfXk0rqec1OknBpuG"
        },
        "href": "https://api.spotify.com/v1/tracks/4G66bqfXk0rqec1OknBpuG",
        "id": "4G66bqfXk0rqec1OknBpuG",
        "is_local": false,
        "is_playable": true,
        "name": "Staring at the Ceiling (feat. James Petralli)",
        "popularity": 39,
        "preview_url": "https://p.scdn.co/mp3-preview/f3e7c6fb656018dab344f9f6e716399a0932b53e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4G66bqfXk0rqec1OknBpuG"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-03-18T17:42:00Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "15V21BXETwmRL5Y6GGHrGQ",
        "share_url": "https://open.spotify.com/track/2yAyJTsSnsOtbA3Qups4zV?si=15V21BXETwmRL5Y6GGHrGQ",
        "uri": "spotify:track:2yAyJTsSnsOtbA3Qups4zV"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2bToe6WyGvADJftreuXh2K"
            },
            "href": "https://api.spotify.com/v1/artists/2bToe6WyGvADJftreuXh2K",
            "id": "2bToe6WyGvADJftreuXh2K",
            "name": "Lee Fields & The Expressions",
            "type": "artist",
            "uri": "spotify:artist:2bToe6WyGvADJftreuXh2K"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1iIcVvI4yb0weQpRyDo1IJ"
          },
          "href": "https://api.spotify.com/v1/albums/1iIcVvI4yb0weQpRyDo1IJ",
          "id": "1iIcVvI4yb0weQpRyDo1IJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f56fab4a2a4fc145eae19fbf",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f56fab4a2a4fc145eae19fbf",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f56fab4a2a4fc145eae19fbf",
            "width": 64
          }],
          "name": "It Rains Love",
          "release_date": "2019-04-05",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1iIcVvI4yb0weQpRyDo1IJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2bToe6WyGvADJftreuXh2K"
          },
          "href": "https://api.spotify.com/v1/artists/2bToe6WyGvADJftreuXh2K",
          "id": "2bToe6WyGvADJftreuXh2K",
          "name": "Lee Fields & The Expressions",
          "type": "artist",
          "uri": "spotify:artist:2bToe6WyGvADJftreuXh2K"
        }],
        "disc_number": 1,
        "duration_ms": 235213,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZ2L61800098"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2yAyJTsSnsOtbA3Qups4zV"
        },
        "href": "https://api.spotify.com/v1/tracks/2yAyJTsSnsOtbA3Qups4zV",
        "id": "2yAyJTsSnsOtbA3Qups4zV",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6FhBG9uLbRVLxjHqbI2xFY"
          },
          "href": "https://api.spotify.com/v1/tracks/6FhBG9uLbRVLxjHqbI2xFY",
          "id": "6FhBG9uLbRVLxjHqbI2xFY",
          "type": "track",
          "uri": "spotify:track:6FhBG9uLbRVLxjHqbI2xFY"
        },
        "name": "It Rains Love",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/61f079e368c338fa4ec3507d2daa7f8e162ab950?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2yAyJTsSnsOtbA3Qups4zV"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-03-05T04:23:18Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "horSVzuBSXOkniWKibKPGA",
        "share_url": "https://open.spotify.com/track/3tLAhLLltRJ8jnKAyiYQ2A?si=horSVzuBSXOkniWKibKPGA",
        "uri": "spotify:track:3tLAhLLltRJ8jnKAyiYQ2A"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6Pled8lBAODAviS574l1Q4"
            },
            "href": "https://api.spotify.com/v1/artists/6Pled8lBAODAviS574l1Q4",
            "id": "6Pled8lBAODAviS574l1Q4",
            "name": "Night Moves",
            "type": "artist",
            "uri": "spotify:artist:6Pled8lBAODAviS574l1Q4"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6E06hCaPnbNSR2KhVTa7CJ"
          },
          "href": "https://api.spotify.com/v1/albums/6E06hCaPnbNSR2KhVTa7CJ",
          "id": "6E06hCaPnbNSR2KhVTa7CJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737863afae3c66455589323457",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027863afae3c66455589323457",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517863afae3c66455589323457",
            "width": 64
          }],
          "name": "Pennied Days",
          "release_date": "2016-03-25",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:6E06hCaPnbNSR2KhVTa7CJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6Pled8lBAODAviS574l1Q4"
          },
          "href": "https://api.spotify.com/v1/artists/6Pled8lBAODAviS574l1Q4",
          "id": "6Pled8lBAODAviS574l1Q4",
          "name": "Night Moves",
          "type": "artist",
          "uri": "spotify:artist:6Pled8lBAODAviS574l1Q4"
        }],
        "disc_number": 1,
        "duration_ms": 265693,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1500754"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3tLAhLLltRJ8jnKAyiYQ2A"
        },
        "href": "https://api.spotify.com/v1/tracks/3tLAhLLltRJ8jnKAyiYQ2A",
        "id": "3tLAhLLltRJ8jnKAyiYQ2A",
        "is_local": false,
        "is_playable": true,
        "name": "Only To Live In Your Memories",
        "popularity": 49,
        "preview_url": "https://p.scdn.co/mp3-preview/302b906399158d1e958c97df8a8d561b93bc59cc?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:3tLAhLLltRJ8jnKAyiYQ2A"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-28T20:20:19Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "NwIjVhhqQSaH3R3IumzcIg",
        "share_url": "https://open.spotify.com/track/5iEOCpoeZDAGae1IycuPxh?si=NwIjVhhqQSaH3R3IumzcIg",
        "uri": "spotify:track:5iEOCpoeZDAGae1IycuPxh"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/06W84OT2eFUNVwG85UsxJw"
            },
            "href": "https://api.spotify.com/v1/artists/06W84OT2eFUNVwG85UsxJw",
            "id": "06W84OT2eFUNVwG85UsxJw",
            "name": "Caroline Rose",
            "type": "artist",
            "uri": "spotify:artist:06W84OT2eFUNVwG85UsxJw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ztVsnlMAsHqVe1BjoICnr"
          },
          "href": "https://api.spotify.com/v1/albums/2ztVsnlMAsHqVe1BjoICnr",
          "id": "2ztVsnlMAsHqVe1BjoICnr",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e79ae3483646001e39b9f787",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e79ae3483646001e39b9f787",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e79ae3483646001e39b9f787",
            "width": 64
          }],
          "name": "LONER",
          "release_date": "2018-02-23",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2ztVsnlMAsHqVe1BjoICnr"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/06W84OT2eFUNVwG85UsxJw"
          },
          "href": "https://api.spotify.com/v1/artists/06W84OT2eFUNVwG85UsxJw",
          "id": "06W84OT2eFUNVwG85UsxJw",
          "name": "Caroline Rose",
          "type": "artist",
          "uri": "spotify:artist:06W84OT2eFUNVwG85UsxJw"
        }],
        "disc_number": 1,
        "duration_ms": 261153,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US27Q1841704"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5iEOCpoeZDAGae1IycuPxh"
        },
        "href": "https://api.spotify.com/v1/tracks/5iEOCpoeZDAGae1IycuPxh",
        "id": "5iEOCpoeZDAGae1IycuPxh",
        "is_local": false,
        "is_playable": true,
        "name": "Jeannie Becomes A Mom",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/1dae5ac5adeae541680df9e959710fc7c94ca2d7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:5iEOCpoeZDAGae1IycuPxh"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-03-04T22:27:25Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "E3W6tjeWRsmY5_pkpZsFpA",
        "share_url": "https://open.spotify.com/track/2NYUjoQTERcR5ZLayYmajs?si=E3W6tjeWRsmY5_pkpZsFpA",
        "uri": "spotify:track:2NYUjoQTERcR5ZLayYmajs"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4aKWmkWAKviFlyvHYPTNQY"
            },
            "href": "https://api.spotify.com/v1/artists/4aKWmkWAKviFlyvHYPTNQY",
            "id": "4aKWmkWAKviFlyvHYPTNQY",
            "name": "Adrianne Lenker",
            "type": "artist",
            "uri": "spotify:artist:4aKWmkWAKviFlyvHYPTNQY"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4mYY0UqYdvgdz60psupYBR"
            },
            "href": "https://api.spotify.com/v1/artists/4mYY0UqYdvgdz60psupYBR",
            "id": "4mYY0UqYdvgdz60psupYBR",
            "name": "Buck Meek",
            "type": "artist",
            "uri": "spotify:artist:4mYY0UqYdvgdz60psupYBR"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5uR6biOmnCbZa7MewE1X5B"
          },
          "href": "https://api.spotify.com/v1/albums/5uR6biOmnCbZa7MewE1X5B",
          "id": "5uR6biOmnCbZa7MewE1X5B",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2730e01598473bf30aea8a4a0cf",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e020e01598473bf30aea8a4a0cf",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048510e01598473bf30aea8a4a0cf",
            "width": 64
          }],
          "name": "a-sides",
          "release_date": "2014-05-01",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:5uR6biOmnCbZa7MewE1X5B"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4aKWmkWAKviFlyvHYPTNQY"
          },
          "href": "https://api.spotify.com/v1/artists/4aKWmkWAKviFlyvHYPTNQY",
          "id": "4aKWmkWAKviFlyvHYPTNQY",
          "name": "Adrianne Lenker",
          "type": "artist",
          "uri": "spotify:artist:4aKWmkWAKviFlyvHYPTNQY"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4mYY0UqYdvgdz60psupYBR"
          },
          "href": "https://api.spotify.com/v1/artists/4mYY0UqYdvgdz60psupYBR",
          "id": "4mYY0UqYdvgdz60psupYBR",
          "name": "Buck Meek",
          "type": "artist",
          "uri": "spotify:artist:4mYY0UqYdvgdz60psupYBR"
        }],
        "disc_number": 1,
        "duration_ms": 128853,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2U61828101"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2NYUjoQTERcR5ZLayYmajs"
        },
        "href": "https://api.spotify.com/v1/tracks/2NYUjoQTERcR5ZLayYmajs",
        "id": "2NYUjoQTERcR5ZLayYmajs",
        "is_local": false,
        "is_playable": true,
        "name": "Jonathan",
        "popularity": 45,
        "preview_url": "https://p.scdn.co/mp3-preview/5c38010b7f737f600af00bfb946403ccf1aa2bb1?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2NYUjoQTERcR5ZLayYmajs"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 15
  },
  "type": "playlist",
  "uri": "spotify:playlist:2RrcSTwJGR05acMfdl1eGh"
};

/***/ })

/******/ });