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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6Lfa");


/***/ }),

/***/ "6Lfa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/1C9st2ZQTrlK1AwJoyobra"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/1C9st2ZQTrlK1AwJoyobra?type=track,episode",
  "id": "1C9st2ZQTrlK1AwJoyobra",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b27300e9ed7e4a9610deee80dfa8ab67616d0000b2736a5e4482bcb83be58ccaf0c2ab67616d0000b27374863954cab201c6c978833aab67616d0000b273a02dd59f7a4de48cd14abdf0",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b27300e9ed7e4a9610deee80dfa8ab67616d0000b2736a5e4482bcb83be58ccaf0c2ab67616d0000b27374863954cab201c6c978833aab67616d0000b273a02dd59f7a4de48cd14abdf0",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b27300e9ed7e4a9610deee80dfa8ab67616d0000b2736a5e4482bcb83be58ccaf0c2ab67616d0000b27374863954cab201c6c978833aab67616d0000b273a02dd59f7a4de48cd14abdf0",
    "width": 60
  }],
  "name": "Jan 2020",
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
    "share_id": "yfRLqhS4RYOqjAHzxn8Z-A",
    "share_url": "https://open.spotify.com/playlist/1C9st2ZQTrlK1AwJoyobra?si=yfRLqhS4RYOqjAHzxn8Z-A",
    "uri": "spotify:playlist:1C9st2ZQTrlK1AwJoyobra"
  },
  "snapshot_id": "NDcsNmE1OTBjZDRiZDdhMGNkZWEzOGRlOGRiNGQ1OTNkNGY0OGI1ZDRkMw==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/1C9st2ZQTrlK1AwJoyobra/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2020-01-04T19:44:23Z",
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
        "share_id": "CHBQNXTCQ9eKnFQ4d16Gtw",
        "share_url": "https://open.spotify.com/track/7l84awdVSPrWDVqIGeLDXu?si=CHBQNXTCQ9eKnFQ4d16Gtw",
        "uri": "spotify:track:7l84awdVSPrWDVqIGeLDXu"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3uX1tstdmFJyxW9b5mSNlU"
            },
            "href": "https://api.spotify.com/v1/artists/3uX1tstdmFJyxW9b5mSNlU",
            "id": "3uX1tstdmFJyxW9b5mSNlU",
            "name": "Automatic",
            "type": "artist",
            "uri": "spotify:artist:3uX1tstdmFJyxW9b5mSNlU"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7kF8UP2TTuSdrCqtkxhYSN"
          },
          "href": "https://api.spotify.com/v1/albums/7kF8UP2TTuSdrCqtkxhYSN",
          "id": "7kF8UP2TTuSdrCqtkxhYSN",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27374863954cab201c6c978833a",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0274863954cab201c6c978833a",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485174863954cab201c6c978833a",
            "width": 64
          }],
          "name": "Signal",
          "release_date": "2019-09-27",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:7kF8UP2TTuSdrCqtkxhYSN"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3uX1tstdmFJyxW9b5mSNlU"
          },
          "href": "https://api.spotify.com/v1/artists/3uX1tstdmFJyxW9b5mSNlU",
          "id": "3uX1tstdmFJyxW9b5mSNlU",
          "name": "Automatic",
          "type": "artist",
          "uri": "spotify:artist:3uX1tstdmFJyxW9b5mSNlU"
        }],
        "disc_number": 1,
        "duration_ms": 227386,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2S71910005"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7l84awdVSPrWDVqIGeLDXu"
        },
        "href": "https://api.spotify.com/v1/tracks/7l84awdVSPrWDVqIGeLDXu",
        "id": "7l84awdVSPrWDVqIGeLDXu",
        "is_local": false,
        "is_playable": true,
        "name": "Highway",
        "popularity": 23,
        "preview_url": "https://p.scdn.co/mp3-preview/be3eeb33665191e6d5e0bfe8fc2144cc3c9320a5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:7l84awdVSPrWDVqIGeLDXu"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:59:25Z",
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
        "share_id": "6URqKd3cTkaCvCK27_3Lgg",
        "share_url": "https://open.spotify.com/track/7cneuh5BMBbqbbGrpqTDHQ?si=6URqKd3cTkaCvCK27_3Lgg",
        "uri": "spotify:track:7cneuh5BMBbqbbGrpqTDHQ"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6ft7JnxMyZhp7N52qzHymY"
            },
            "href": "https://api.spotify.com/v1/artists/6ft7JnxMyZhp7N52qzHymY",
            "id": "6ft7JnxMyZhp7N52qzHymY",
            "name": "Vansire",
            "type": "artist",
            "uri": "spotify:artist:6ft7JnxMyZhp7N52qzHymY"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3b35XuAzhgb25qUvPYtZOo"
          },
          "href": "https://api.spotify.com/v1/albums/3b35XuAzhgb25qUvPYtZOo",
          "id": "3b35XuAzhgb25qUvPYtZOo",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a02dd59f7a4de48cd14abdf0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a02dd59f7a4de48cd14abdf0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a02dd59f7a4de48cd14abdf0",
            "width": 64
          }],
          "name": "That I Miss You",
          "release_date": "2018-07-17",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:3b35XuAzhgb25qUvPYtZOo"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6ft7JnxMyZhp7N52qzHymY"
          },
          "href": "https://api.spotify.com/v1/artists/6ft7JnxMyZhp7N52qzHymY",
          "id": "6ft7JnxMyZhp7N52qzHymY",
          "name": "Vansire",
          "type": "artist",
          "uri": "spotify:artist:6ft7JnxMyZhp7N52qzHymY"
        }],
        "disc_number": 1,
        "duration_ms": 140116,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZDA61865732"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7cneuh5BMBbqbbGrpqTDHQ"
        },
        "href": "https://api.spotify.com/v1/tracks/7cneuh5BMBbqbbGrpqTDHQ",
        "id": "7cneuh5BMBbqbbGrpqTDHQ",
        "is_local": false,
        "is_playable": true,
        "name": "That I Miss You",
        "popularity": 62,
        "preview_url": "https://p.scdn.co/mp3-preview/18f5976f3e7fdb13292bf7dad3684d8120890451?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7cneuh5BMBbqbbGrpqTDHQ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-30T20:44:01Z",
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
        "share_id": "Q6x91x-GThCWmsPfd3rtGg",
        "share_url": "https://open.spotify.com/track/0rzWENXdfcLTgyt5DByGTy?si=Q6x91x-GThCWmsPfd3rtGg",
        "uri": "spotify:track:0rzWENXdfcLTgyt5DByGTy"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/25pd339V2rRJo84USlcSRP"
            },
            "href": "https://api.spotify.com/v1/artists/25pd339V2rRJo84USlcSRP",
            "id": "25pd339V2rRJo84USlcSRP",
            "name": "JAWNY",
            "type": "artist",
            "uri": "spotify:artist:25pd339V2rRJo84USlcSRP"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1zxpPFfohSafh4mcYGdaQ4"
          },
          "href": "https://api.spotify.com/v1/albums/1zxpPFfohSafh4mcYGdaQ4",
          "id": "1zxpPFfohSafh4mcYGdaQ4",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27300e9ed7e4a9610deee80dfa8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0200e9ed7e4a9610deee80dfa8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485100e9ed7e4a9610deee80dfa8",
            "width": 64
          }],
          "name": "Honeypie",
          "release_date": "2019-04-25",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1zxpPFfohSafh4mcYGdaQ4"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/25pd339V2rRJo84USlcSRP"
          },
          "href": "https://api.spotify.com/v1/artists/25pd339V2rRJo84USlcSRP",
          "id": "25pd339V2rRJo84USlcSRP",
          "name": "JAWNY",
          "type": "artist",
          "uri": "spotify:artist:25pd339V2rRJo84USlcSRP"
        }],
        "disc_number": 1,
        "duration_ms": 135521,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1946902"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0rzWENXdfcLTgyt5DByGTy"
        },
        "href": "https://api.spotify.com/v1/tracks/0rzWENXdfcLTgyt5DByGTy",
        "id": "0rzWENXdfcLTgyt5DByGTy",
        "is_local": false,
        "is_playable": true,
        "name": "Honeypie",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/e0a813b21d40a4146edab7a4d50888d6aae5c9c2?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0rzWENXdfcLTgyt5DByGTy"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T19:46:50Z",
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
        "share_id": "LElXlzAORn-dX40F__yVPw",
        "share_url": "https://open.spotify.com/track/5HBZAkVe0VEthvTog6mfb1?si=LElXlzAORn-dX40F__yVPw",
        "uri": "spotify:track:5HBZAkVe0VEthvTog6mfb1"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4nn9uUq4K1vStqxe8t1CD4"
            },
            "href": "https://api.spotify.com/v1/artists/4nn9uUq4K1vStqxe8t1CD4",
            "id": "4nn9uUq4K1vStqxe8t1CD4",
            "name": "Corridor",
            "type": "artist",
            "uri": "spotify:artist:4nn9uUq4K1vStqxe8t1CD4"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4F1aSvRwXguyB4gBjqGeOq"
          },
          "href": "https://api.spotify.com/v1/albums/4F1aSvRwXguyB4gBjqGeOq",
          "id": "4F1aSvRwXguyB4gBjqGeOq",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736a5e4482bcb83be58ccaf0c2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026a5e4482bcb83be58ccaf0c2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516a5e4482bcb83be58ccaf0c2",
            "width": 64
          }],
          "name": "Junior",
          "release_date": "2019-10-18",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4F1aSvRwXguyB4gBjqGeOq"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4nn9uUq4K1vStqxe8t1CD4"
          },
          "href": "https://api.spotify.com/v1/artists/4nn9uUq4K1vStqxe8t1CD4",
          "id": "4nn9uUq4K1vStqxe8t1CD4",
          "name": "Corridor",
          "type": "artist",
          "uri": "spotify:artist:4nn9uUq4K1vStqxe8t1CD4"
        }],
        "disc_number": 1,
        "duration_ms": 277539,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSUB1932703"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5HBZAkVe0VEthvTog6mfb1"
        },
        "href": "https://api.spotify.com/v1/tracks/5HBZAkVe0VEthvTog6mfb1",
        "id": "5HBZAkVe0VEthvTog6mfb1",
        "is_local": false,
        "is_playable": true,
        "name": "Domino",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/f8d515d8df9e4a2812994d6e1b484e8c7b51c565?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:5HBZAkVe0VEthvTog6mfb1"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T19:44:55Z",
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
        "share_id": "O1JTswf9Qz-JtHhOu9sNWw",
        "share_url": "https://open.spotify.com/track/0b7sosQaoQiBJMAhhz3OGP?si=O1JTswf9Qz-JtHhOu9sNWw",
        "uri": "spotify:track:0b7sosQaoQiBJMAhhz3OGP"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2PDepyCtfybWn5UJv0DmKw"
            },
            "href": "https://api.spotify.com/v1/artists/2PDepyCtfybWn5UJv0DmKw",
            "id": "2PDepyCtfybWn5UJv0DmKw",
            "name": "Molly Nilsson",
            "type": "artist",
            "uri": "spotify:artist:2PDepyCtfybWn5UJv0DmKw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6obvMVCOQ0Hw8A5CRbSJuP"
          },
          "href": "https://api.spotify.com/v1/albums/6obvMVCOQ0Hw8A5CRbSJuP",
          "id": "6obvMVCOQ0Hw8A5CRbSJuP",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738af84da11c07111b53bf9d11",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028af84da11c07111b53bf9d11",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518af84da11c07111b53bf9d11",
            "width": 64
          }],
          "name": "2020",
          "release_date": "2018-10-21",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:6obvMVCOQ0Hw8A5CRbSJuP"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2PDepyCtfybWn5UJv0DmKw"
          },
          "href": "https://api.spotify.com/v1/artists/2PDepyCtfybWn5UJv0DmKw",
          "id": "2PDepyCtfybWn5UJv0DmKw",
          "name": "Molly Nilsson",
          "type": "artist",
          "uri": "spotify:artist:2PDepyCtfybWn5UJv0DmKw"
        }],
        "disc_number": 1,
        "duration_ms": 213130,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "SEYVA1800109"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0b7sosQaoQiBJMAhhz3OGP"
        },
        "href": "https://api.spotify.com/v1/tracks/0b7sosQaoQiBJMAhhz3OGP",
        "id": "0b7sosQaoQiBJMAhhz3OGP",
        "is_local": false,
        "is_playable": true,
        "name": "Days of Dust",
        "popularity": 27,
        "preview_url": "https://p.scdn.co/mp3-preview/644b7c2b7a6645a57a15c80241654cc3bc6defe2?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:0b7sosQaoQiBJMAhhz3OGP"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T20:19:21Z",
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
        "share_id": "ZUcWLu5SThOZ6j2to8PYFA",
        "share_url": "https://open.spotify.com/track/0a0EYuSVqeVqV8kjN9bFYC?si=ZUcWLu5SThOZ6j2to8PYFA",
        "uri": "spotify:track:0a0EYuSVqeVqV8kjN9bFYC"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6fC2AcsQtd9h4BWELbbire"
            },
            "href": "https://api.spotify.com/v1/artists/6fC2AcsQtd9h4BWELbbire",
            "id": "6fC2AcsQtd9h4BWELbbire",
            "name": "Peach Pit",
            "type": "artist",
            "uri": "spotify:artist:6fC2AcsQtd9h4BWELbbire"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6xduu32sm4aidoLhaxYkUA"
          },
          "href": "https://api.spotify.com/v1/albums/6xduu32sm4aidoLhaxYkUA",
          "id": "6xduu32sm4aidoLhaxYkUA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27300b39b4a73d28536690b355c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0200b39b4a73d28536690b355c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485100b39b4a73d28536690b355c",
            "width": 64
          }],
          "name": "Being So Normal",
          "release_date": "2018-06-28",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:6xduu32sm4aidoLhaxYkUA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6fC2AcsQtd9h4BWELbbire"
          },
          "href": "https://api.spotify.com/v1/artists/6fC2AcsQtd9h4BWELbbire",
          "id": "6fC2AcsQtd9h4BWELbbire",
          "name": "Peach Pit",
          "type": "artist",
          "uri": "spotify:artist:6fC2AcsQtd9h4BWELbbire"
        }],
        "disc_number": 1,
        "duration_ms": 226613,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM11805170"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0a0EYuSVqeVqV8kjN9bFYC"
        },
        "href": "https://api.spotify.com/v1/tracks/0a0EYuSVqeVqV8kjN9bFYC",
        "id": "0a0EYuSVqeVqV8kjN9bFYC",
        "is_local": false,
        "is_playable": true,
        "name": "Techno Show",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/b7252a424ad503875331278136d7588554261d33?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:0a0EYuSVqeVqV8kjN9bFYC"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T19:45:10Z",
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
        "share_id": "UVkcxKTWT3ycSQCm5boa0g",
        "share_url": "https://open.spotify.com/track/1vKPCcclqSIHpMIh4YieQG?si=UVkcxKTWT3ycSQCm5boa0g",
        "uri": "spotify:track:1vKPCcclqSIHpMIh4YieQG"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/35l9BRT7MXmM8bv2WDQiyB"
            },
            "href": "https://api.spotify.com/v1/artists/35l9BRT7MXmM8bv2WDQiyB",
            "id": "35l9BRT7MXmM8bv2WDQiyB",
            "name": "beabadoobee",
            "type": "artist",
            "uri": "spotify:artist:35l9BRT7MXmM8bv2WDQiyB"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/475CNcvlqtRpaXjTcn4hCP"
          },
          "href": "https://api.spotify.com/v1/albums/475CNcvlqtRpaXjTcn4hCP",
          "id": "475CNcvlqtRpaXjTcn4hCP",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ceca3ef39ab8f9b59acff394",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ceca3ef39ab8f9b59acff394",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ceca3ef39ab8f9b59acff394",
            "width": 64
          }],
          "name": "Loveworm",
          "release_date": "2019-04-26",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:475CNcvlqtRpaXjTcn4hCP"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/35l9BRT7MXmM8bv2WDQiyB"
          },
          "href": "https://api.spotify.com/v1/artists/35l9BRT7MXmM8bv2WDQiyB",
          "id": "35l9BRT7MXmM8bv2WDQiyB",
          "name": "beabadoobee",
          "type": "artist",
          "uri": "spotify:artist:35l9BRT7MXmM8bv2WDQiyB"
        }],
        "disc_number": 1,
        "duration_ms": 248883,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "GBK3W1901008"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1vKPCcclqSIHpMIh4YieQG"
        },
        "href": "https://api.spotify.com/v1/tracks/1vKPCcclqSIHpMIh4YieQG",
        "id": "1vKPCcclqSIHpMIh4YieQG",
        "is_local": false,
        "is_playable": true,
        "name": "Disappear",
        "popularity": 58,
        "preview_url": "https://p.scdn.co/mp3-preview/83d888eb4bcc19a4416b1599696ea8115d09f51c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1vKPCcclqSIHpMIh4YieQG"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-28T22:09:45Z",
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
        "share_id": "6qSt0RyXTyezMIiMETCLbQ",
        "share_url": "https://open.spotify.com/track/7ljBw7FDHlYtWhUVKgcm7z?si=6qSt0RyXTyezMIiMETCLbQ",
        "uri": "spotify:track:7ljBw7FDHlYtWhUVKgcm7z"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4piFCokRN13muTud5Y2lhz"
            },
            "href": "https://api.spotify.com/v1/artists/4piFCokRN13muTud5Y2lhz",
            "id": "4piFCokRN13muTud5Y2lhz",
            "name": "Hinds",
            "type": "artist",
            "uri": "spotify:artist:4piFCokRN13muTud5Y2lhz"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7e0HCVNR9U3CZqU1MCn0I6"
          },
          "href": "https://api.spotify.com/v1/albums/7e0HCVNR9U3CZqU1MCn0I6",
          "id": "7e0HCVNR9U3CZqU1MCn0I6",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27328d4c7fe845f5b61ab0132f5",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0228d4c7fe845f5b61ab0132f5",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485128d4c7fe845f5b61ab0132f5",
            "width": 64
          }],
          "name": "Riding Solo",
          "release_date": "2019-12-03",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7e0HCVNR9U3CZqU1MCn0I6"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4piFCokRN13muTud5Y2lhz"
          },
          "href": "https://api.spotify.com/v1/artists/4piFCokRN13muTud5Y2lhz",
          "id": "4piFCokRN13muTud5Y2lhz",
          "name": "Hinds",
          "type": "artist",
          "uri": "spotify:artist:4piFCokRN13muTud5Y2lhz"
        }],
        "disc_number": 1,
        "duration_ms": 216986,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USQE91600075"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7ljBw7FDHlYtWhUVKgcm7z"
        },
        "href": "https://api.spotify.com/v1/tracks/7ljBw7FDHlYtWhUVKgcm7z",
        "id": "7ljBw7FDHlYtWhUVKgcm7z",
        "is_local": false,
        "is_playable": true,
        "name": "Riding Solo",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/49dcc39c194e47262814af44c0cd48feb7971ac8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7ljBw7FDHlYtWhUVKgcm7z"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-10T18:16:34Z",
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
        "share_id": "V8kpO8g2T1-2Xbghin5mWA",
        "share_url": "https://open.spotify.com/track/1wsnCfewxZlCs7cJxkaMZM?si=V8kpO8g2T1-2Xbghin5mWA",
        "uri": "spotify:track:1wsnCfewxZlCs7cJxkaMZM"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4pejUc4iciQfgdX6OKulQn"
            },
            "href": "https://api.spotify.com/v1/artists/4pejUc4iciQfgdX6OKulQn",
            "id": "4pejUc4iciQfgdX6OKulQn",
            "name": "Queens of the Stone Age",
            "type": "artist",
            "uri": "spotify:artist:4pejUc4iciQfgdX6OKulQn"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6JdX9MGiEMypqYLMKyIE8a"
          },
          "href": "https://api.spotify.com/v1/albums/6JdX9MGiEMypqYLMKyIE8a",
          "id": "6JdX9MGiEMypqYLMKyIE8a",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c96f7c7b077c224975b4c5ce",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c96f7c7b077c224975b4c5ce",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c96f7c7b077c224975b4c5ce",
            "width": 64
          }],
          "name": "Villains",
          "release_date": "2017-08-25",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:6JdX9MGiEMypqYLMKyIE8a"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4pejUc4iciQfgdX6OKulQn"
          },
          "href": "https://api.spotify.com/v1/artists/4pejUc4iciQfgdX6OKulQn",
          "id": "4pejUc4iciQfgdX6OKulQn",
          "name": "Queens of the Stone Age",
          "type": "artist",
          "uri": "spotify:artist:4pejUc4iciQfgdX6OKulQn"
        }],
        "disc_number": 1,
        "duration_ms": 274281,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMTD1709778"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1wsnCfewxZlCs7cJxkaMZM"
        },
        "href": "https://api.spotify.com/v1/tracks/1wsnCfewxZlCs7cJxkaMZM",
        "id": "1wsnCfewxZlCs7cJxkaMZM",
        "is_local": false,
        "is_playable": true,
        "name": "The Way You Used to Do",
        "popularity": 63,
        "preview_url": "https://p.scdn.co/mp3-preview/e0554425f35d7605b1ded2fe6062d84a7c879c29?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1wsnCfewxZlCs7cJxkaMZM"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-22T23:17:07Z",
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
        "share_id": "C4cgV6IpR3OIOIaxAExM0Q",
        "share_url": "https://open.spotify.com/track/5cRaKP0bGLP9FyDTcIFhMS?si=C4cgV6IpR3OIOIaxAExM0Q",
        "uri": "spotify:track:5cRaKP0bGLP9FyDTcIFhMS"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1gl0S9pS0Zw0qfa14rDD3D"
            },
            "href": "https://api.spotify.com/v1/artists/1gl0S9pS0Zw0qfa14rDD3D",
            "id": "1gl0S9pS0Zw0qfa14rDD3D",
            "name": "Surf Curse",
            "type": "artist",
            "uri": "spotify:artist:1gl0S9pS0Zw0qfa14rDD3D"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6FFzn3wXHYaD1WOJ4nK8Xs"
          },
          "href": "https://api.spotify.com/v1/albums/6FFzn3wXHYaD1WOJ4nK8Xs",
          "id": "6FFzn3wXHYaD1WOJ4nK8Xs",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731c0f314fa168b33022ce2664",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021c0f314fa168b33022ce2664",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511c0f314fa168b33022ce2664",
            "width": 64
          }],
          "name": "Disco",
          "release_date": "2019-06-12",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:6FFzn3wXHYaD1WOJ4nK8Xs"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1gl0S9pS0Zw0qfa14rDD3D"
          },
          "href": "https://api.spotify.com/v1/artists/1gl0S9pS0Zw0qfa14rDD3D",
          "id": "1gl0S9pS0Zw0qfa14rDD3D",
          "name": "Surf Curse",
          "type": "artist",
          "uri": "spotify:artist:1gl0S9pS0Zw0qfa14rDD3D"
        }],
        "disc_number": 1,
        "duration_ms": 152760,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM6MZ1965210"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5cRaKP0bGLP9FyDTcIFhMS"
        },
        "href": "https://api.spotify.com/v1/tracks/5cRaKP0bGLP9FyDTcIFhMS",
        "id": "5cRaKP0bGLP9FyDTcIFhMS",
        "is_local": false,
        "is_playable": true,
        "name": "Disco",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/9550e8c03807575575729dc8b7f3347be7b9aa27?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5cRaKP0bGLP9FyDTcIFhMS"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-11T21:16:26Z",
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
        "share_id": "DiE48dx0RQqMiLcxEeowRQ",
        "share_url": "https://open.spotify.com/track/6YrnbbmCTE5423w3qBdxqA?si=DiE48dx0RQqMiLcxEeowRQ",
        "uri": "spotify:track:6YrnbbmCTE5423w3qBdxqA"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
            },
            "href": "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
            "id": "6ltzsmQQbmdoHHbLZ4ZN25",
            "name": "Lord Huron",
            "type": "artist",
            "uri": "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2oiJM8vFGpxrtGtFfJWhJv"
          },
          "href": "https://api.spotify.com/v1/albums/2oiJM8vFGpxrtGtFfJWhJv",
          "id": "2oiJM8vFGpxrtGtFfJWhJv",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738431866429dc2ad6eed8c51e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028431866429dc2ad6eed8c51e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518431866429dc2ad6eed8c51e",
            "width": 64
          }],
          "name": "Vide Noir",
          "release_date": "2018-04-20",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2oiJM8vFGpxrtGtFfJWhJv"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
          },
          "href": "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
          "id": "6ltzsmQQbmdoHHbLZ4ZN25",
          "name": "Lord Huron",
          "type": "artist",
          "uri": "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
        }],
        "disc_number": 1,
        "duration_ms": 362333,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUG11800076"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6YrnbbmCTE5423w3qBdxqA"
        },
        "href": "https://api.spotify.com/v1/tracks/6YrnbbmCTE5423w3qBdxqA",
        "id": "6YrnbbmCTE5423w3qBdxqA",
        "is_local": false,
        "is_playable": true,
        "name": "Ancient Names (Part I)",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/c981c8d8878645505a32c5ac7b7b6cc57bc17953?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:6YrnbbmCTE5423w3qBdxqA"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-30T20:42:52Z",
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
        "share_id": "YwQL8Xi2SGiiGN1S5gUm-g",
        "share_url": "https://open.spotify.com/track/0p9QcEFm1lnOPQIwo3ghMh?si=YwQL8Xi2SGiiGN1S5gUm-g",
        "uri": "spotify:track:0p9QcEFm1lnOPQIwo3ghMh"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4Dc9LcdKgjDXV5p3YVulzg"
            },
            "href": "https://api.spotify.com/v1/artists/4Dc9LcdKgjDXV5p3YVulzg",
            "id": "4Dc9LcdKgjDXV5p3YVulzg",
            "name": "Fashion Jackson",
            "type": "artist",
            "uri": "spotify:artist:4Dc9LcdKgjDXV5p3YVulzg"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/32gm1inIErSfV2FIoKyZrf"
          },
          "href": "https://api.spotify.com/v1/albums/32gm1inIErSfV2FIoKyZrf",
          "id": "32gm1inIErSfV2FIoKyZrf",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734f99bb2bc3e1daa60a49fb5b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024f99bb2bc3e1daa60a49fb5b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514f99bb2bc3e1daa60a49fb5b",
            "width": 64
          }],
          "name": "Shiloh",
          "release_date": "2019-02-08",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:32gm1inIErSfV2FIoKyZrf"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4Dc9LcdKgjDXV5p3YVulzg"
          },
          "href": "https://api.spotify.com/v1/artists/4Dc9LcdKgjDXV5p3YVulzg",
          "id": "4Dc9LcdKgjDXV5p3YVulzg",
          "name": "Fashion Jackson",
          "type": "artist",
          "uri": "spotify:artist:4Dc9LcdKgjDXV5p3YVulzg"
        }],
        "disc_number": 1,
        "duration_ms": 308111,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZ5FN1921198"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0p9QcEFm1lnOPQIwo3ghMh"
        },
        "href": "https://api.spotify.com/v1/tracks/0p9QcEFm1lnOPQIwo3ghMh",
        "id": "0p9QcEFm1lnOPQIwo3ghMh",
        "is_local": false,
        "is_playable": true,
        "name": "Shiloh",
        "popularity": 16,
        "preview_url": "https://p.scdn.co/mp3-preview/f6c9beea0c88db7623cc184647758eddd6265e1c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0p9QcEFm1lnOPQIwo3ghMh"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-14T01:19:21Z",
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
        "share_id": "Y3nBWb_iQfuLj64BqqhYiA",
        "share_url": "https://open.spotify.com/track/68dSvPdwsCEGoKj72QDEXQ?si=Y3nBWb_iQfuLj64BqqhYiA",
        "uri": "spotify:track:68dSvPdwsCEGoKj72QDEXQ"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7fSjnDr8tBO37Xbb2UXuYr"
            },
            "href": "https://api.spotify.com/v1/artists/7fSjnDr8tBO37Xbb2UXuYr",
            "id": "7fSjnDr8tBO37Xbb2UXuYr",
            "name": "Richard Swift",
            "type": "artist",
            "uri": "spotify:artist:7fSjnDr8tBO37Xbb2UXuYr"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2172kXt6Kr0rZigqs3GWKC"
          },
          "href": "https://api.spotify.com/v1/albums/2172kXt6Kr0rZigqs3GWKC",
          "id": "2172kXt6Kr0rZigqs3GWKC",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273aadf84a1f60576375761ad5a",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02aadf84a1f60576375761ad5a",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851aadf84a1f60576375761ad5a",
            "width": 64
          }],
          "name": "The Atlantic Ocean",
          "release_date": "2009-04-07",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2172kXt6Kr0rZigqs3GWKC"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7fSjnDr8tBO37Xbb2UXuYr"
          },
          "href": "https://api.spotify.com/v1/artists/7fSjnDr8tBO37Xbb2UXuYr",
          "id": "7fSjnDr8tBO37Xbb2UXuYr",
          "name": "Richard Swift",
          "type": "artist",
          "uri": "spotify:artist:7fSjnDr8tBO37Xbb2UXuYr"
        }],
        "disc_number": 1,
        "duration_ms": 258800,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US38W0918311"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/68dSvPdwsCEGoKj72QDEXQ"
        },
        "href": "https://api.spotify.com/v1/tracks/68dSvPdwsCEGoKj72QDEXQ",
        "id": "68dSvPdwsCEGoKj72QDEXQ",
        "is_local": false,
        "is_playable": true,
        "name": "Lady Luck",
        "popularity": 51,
        "preview_url": "https://p.scdn.co/mp3-preview/e64444923c887bb6897df40c46e7d283bfa6d351?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 11,
        "type": "track",
        "uri": "spotify:track:68dSvPdwsCEGoKj72QDEXQ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-14T01:18:51Z",
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
        "share_id": "f0TA4153T2O8kDsCwsPhig",
        "share_url": "https://open.spotify.com/track/7xTpmsgbuPTHv6mHZyH18v?si=f0TA4153T2O8kDsCwsPhig",
        "uri": "spotify:track:7xTpmsgbuPTHv6mHZyH18v"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6AQEfqGPSxZX0nJVonYxi6"
            },
            "href": "https://api.spotify.com/v1/artists/6AQEfqGPSxZX0nJVonYxi6",
            "id": "6AQEfqGPSxZX0nJVonYxi6",
            "name": "Inner Wave",
            "type": "artist",
            "uri": "spotify:artist:6AQEfqGPSxZX0nJVonYxi6"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4uBpe363rz0WVb9JN26L06"
          },
          "href": "https://api.spotify.com/v1/albums/4uBpe363rz0WVb9JN26L06",
          "id": "4uBpe363rz0WVb9JN26L06",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2730094991318c65a77ee2bbede",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e020094991318c65a77ee2bbede",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048510094991318c65a77ee2bbede",
            "width": 64
          }],
          "name": "Rose",
          "release_date": "2019-12-12",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4uBpe363rz0WVb9JN26L06"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6AQEfqGPSxZX0nJVonYxi6"
          },
          "href": "https://api.spotify.com/v1/artists/6AQEfqGPSxZX0nJVonYxi6",
          "id": "6AQEfqGPSxZX0nJVonYxi6",
          "name": "Inner Wave",
          "type": "artist",
          "uri": "spotify:artist:6AQEfqGPSxZX0nJVonYxi6"
        }],
        "disc_number": 1,
        "duration_ms": 226090,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1977665"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7xTpmsgbuPTHv6mHZyH18v"
        },
        "href": "https://api.spotify.com/v1/tracks/7xTpmsgbuPTHv6mHZyH18v",
        "id": "7xTpmsgbuPTHv6mHZyH18v",
        "is_local": false,
        "is_playable": true,
        "name": "Rose",
        "popularity": 54,
        "preview_url": "https://p.scdn.co/mp3-preview/88d6739c1e0a5efc856c78cd478ac6444900dfa2?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7xTpmsgbuPTHv6mHZyH18v"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 14
  },
  "type": "playlist",
  "uri": "spotify:playlist:1C9st2ZQTrlK1AwJoyobra"
};

/***/ })

/******/ });