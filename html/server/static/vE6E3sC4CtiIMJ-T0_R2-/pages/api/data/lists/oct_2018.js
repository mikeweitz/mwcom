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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z52Y");


/***/ }),

/***/ "Z52Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/0VvjJI9nhOH7pRcUZuQcG9"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/0VvjJI9nhOH7pRcUZuQcG9?type=track,episode",
  "id": "0VvjJI9nhOH7pRcUZuQcG9",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2732d0721718d915a2c7374c8b4ab67616d0000b273d5143eff21f92f128dc0d6d2ab67616d0000b273dead2de3ef4719ee90dd9b56ab67616d0000b273e18b504bec79970b517214ab",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2732d0721718d915a2c7374c8b4ab67616d0000b273d5143eff21f92f128dc0d6d2ab67616d0000b273dead2de3ef4719ee90dd9b56ab67616d0000b273e18b504bec79970b517214ab",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2732d0721718d915a2c7374c8b4ab67616d0000b273d5143eff21f92f128dc0d6d2ab67616d0000b273dead2de3ef4719ee90dd9b56ab67616d0000b273e18b504bec79970b517214ab",
    "width": 60
  }],
  "name": "October 2018",
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
    "share_id": "If64P3QvShWI09n8M8H77g",
    "share_url": "https://open.spotify.com/playlist/0VvjJI9nhOH7pRcUZuQcG9?si=If64P3QvShWI09n8M8H77g",
    "uri": "spotify:playlist:0VvjJI9nhOH7pRcUZuQcG9"
  },
  "snapshot_id": "MzcsODBmODI4MGY3NmRmNTQ2ZTBjMjk4ZjU3NTJlNWMxZDU5ZDBjOTAyZg==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/0VvjJI9nhOH7pRcUZuQcG9/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2018-11-01T05:34:28Z",
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
        "share_id": "RSUAkQBJQzeoLvXCeJJBNg",
        "share_url": "https://open.spotify.com/track/4Yy5GzqheBLCTocgcoifLW?si=RSUAkQBJQzeoLvXCeJJBNg",
        "uri": "spotify:track:4Yy5GzqheBLCTocgcoifLW"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1yAwtBaoHLEDWAnWR87hBT"
            },
            "href": "https://api.spotify.com/v1/artists/1yAwtBaoHLEDWAnWR87hBT",
            "id": "1yAwtBaoHLEDWAnWR87hBT",
            "name": "Modest Mouse",
            "type": "artist",
            "uri": "spotify:artist:1yAwtBaoHLEDWAnWR87hBT"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/172bjeHc3aHd93jkNJhibP"
          },
          "href": "https://api.spotify.com/v1/albums/172bjeHc3aHd93jkNJhibP",
          "id": "172bjeHc3aHd93jkNJhibP",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732d0721718d915a2c7374c8b4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022d0721718d915a2c7374c8b4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512d0721718d915a2c7374c8b4",
            "width": 64
          }],
          "name": "The Fruit That Ate Itself",
          "release_date": "1997-05-13",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:172bjeHc3aHd93jkNJhibP"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1yAwtBaoHLEDWAnWR87hBT"
          },
          "href": "https://api.spotify.com/v1/artists/1yAwtBaoHLEDWAnWR87hBT",
          "id": "1yAwtBaoHLEDWAnWR87hBT",
          "name": "Modest Mouse",
          "type": "artist",
          "uri": "spotify:artist:1yAwtBaoHLEDWAnWR87hBT"
        }],
        "disc_number": 1,
        "duration_ms": 208600,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US6Z50980509"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4Yy5GzqheBLCTocgcoifLW"
        },
        "href": "https://api.spotify.com/v1/tracks/4Yy5GzqheBLCTocgcoifLW",
        "id": "4Yy5GzqheBLCTocgcoifLW",
        "is_local": false,
        "is_playable": true,
        "name": "Karma's Payment",
        "popularity": 25,
        "preview_url": "https://p.scdn.co/mp3-preview/b25e8b0f082af04bbf4c9d04ffd2baf2d4634049?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:4Yy5GzqheBLCTocgcoifLW"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-28T19:28:06Z",
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
        "share_id": "XMU8PRqRQxOrbGrW2LgHDA",
        "share_url": "https://open.spotify.com/track/23t9RhFoKi5mW0snJYntR9?si=XMU8PRqRQxOrbGrW2LgHDA",
        "uri": "spotify:track:23t9RhFoKi5mW0snJYntR9"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3L9rqEIsNSaOcx2QIstn7v"
            },
            "href": "https://api.spotify.com/v1/artists/3L9rqEIsNSaOcx2QIstn7v",
            "id": "3L9rqEIsNSaOcx2QIstn7v",
            "name": "Oh Pep!",
            "type": "artist",
            "uri": "spotify:artist:3L9rqEIsNSaOcx2QIstn7v"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4939TY3vDPfNd6ysh8LlzU"
          },
          "href": "https://api.spotify.com/v1/albums/4939TY3vDPfNd6ysh8LlzU",
          "id": "4939TY3vDPfNd6ysh8LlzU",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d5143eff21f92f128dc0d6d2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d5143eff21f92f128dc0d6d2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d5143eff21f92f128dc0d6d2",
            "width": 64
          }],
          "name": "Hurt Nobody",
          "release_date": "2018-09-25",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4939TY3vDPfNd6ysh8LlzU"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3L9rqEIsNSaOcx2QIstn7v"
          },
          "href": "https://api.spotify.com/v1/artists/3L9rqEIsNSaOcx2QIstn7v",
          "id": "3L9rqEIsNSaOcx2QIstn7v",
          "name": "Oh Pep!",
          "type": "artist",
          "uri": "spotify:artist:3L9rqEIsNSaOcx2QIstn7v"
        }],
        "disc_number": 1,
        "duration_ms": 209139,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USATO1800133"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/23t9RhFoKi5mW0snJYntR9"
        },
        "href": "https://api.spotify.com/v1/tracks/23t9RhFoKi5mW0snJYntR9",
        "id": "23t9RhFoKi5mW0snJYntR9",
        "is_local": false,
        "is_playable": true,
        "name": "Hurt Nobody",
        "popularity": 8,
        "preview_url": "https://p.scdn.co/mp3-preview/64107ee914630db69c9cd973e5e9044a2aacd193?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:23t9RhFoKi5mW0snJYntR9"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-28T21:21:54Z",
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
        "share_id": "e-RXc8qdR_qK4Xfp0yX0eg",
        "share_url": "https://open.spotify.com/track/2AVG6Xhmm2sjZAfuTeLkYT?si=e-RXc8qdR_qK4Xfp0yX0eg",
        "uri": "spotify:track:2AVG6Xhmm2sjZAfuTeLkYT"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1jFVu6Z7wmwywivOeBTSIV"
            },
            "href": "https://api.spotify.com/v1/artists/1jFVu6Z7wmwywivOeBTSIV",
            "id": "1jFVu6Z7wmwywivOeBTSIV",
            "name": "Miya Folick",
            "type": "artist",
            "uri": "spotify:artist:1jFVu6Z7wmwywivOeBTSIV"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3nWDfV4stC2VQopcuHjJmO"
          },
          "href": "https://api.spotify.com/v1/albums/3nWDfV4stC2VQopcuHjJmO",
          "id": "3nWDfV4stC2VQopcuHjJmO",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273dead2de3ef4719ee90dd9b56",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02dead2de3ef4719ee90dd9b56",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851dead2de3ef4719ee90dd9b56",
            "width": 64
          }],
          "name": "Premonitions",
          "release_date": "2018-10-26",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:3nWDfV4stC2VQopcuHjJmO"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1jFVu6Z7wmwywivOeBTSIV"
          },
          "href": "https://api.spotify.com/v1/artists/1jFVu6Z7wmwywivOeBTSIV",
          "id": "1jFVu6Z7wmwywivOeBTSIV",
          "name": "Miya Folick",
          "type": "artist",
          "uri": "spotify:artist:1jFVu6Z7wmwywivOeBTSIV"
        }],
        "disc_number": 1,
        "duration_ms": 165133,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71809414"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2AVG6Xhmm2sjZAfuTeLkYT"
        },
        "href": "https://api.spotify.com/v1/tracks/2AVG6Xhmm2sjZAfuTeLkYT",
        "id": "2AVG6Xhmm2sjZAfuTeLkYT",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4sFS9uWhSiVM0AqTtkzlmo"
          },
          "href": "https://api.spotify.com/v1/tracks/4sFS9uWhSiVM0AqTtkzlmo",
          "id": "4sFS9uWhSiVM0AqTtkzlmo",
          "type": "track",
          "uri": "spotify:track:4sFS9uWhSiVM0AqTtkzlmo"
        },
        "name": "Stop Talking",
        "popularity": 38,
        "preview_url": "https://p.scdn.co/mp3-preview/70af0be97978539ff74d5d6c5ffa3fe4d3cc5954?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:2AVG6Xhmm2sjZAfuTeLkYT"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-30T01:07:56Z",
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
        "share_id": "_Q6_2zXFQQeIkftU4esdAg",
        "share_url": "https://open.spotify.com/track/046r9OIF1bHuTeZoyk3b6r?si=_Q6_2zXFQQeIkftU4esdAg",
        "uri": "spotify:track:046r9OIF1bHuTeZoyk3b6r"
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
            "spotify": "https://open.spotify.com/album/1VANv2mWRaWMncF4Phkl0F"
          },
          "href": "https://api.spotify.com/v1/albums/1VANv2mWRaWMncF4Phkl0F",
          "id": "1VANv2mWRaWMncF4Phkl0F",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e18b504bec79970b517214ab",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e18b504bec79970b517214ab",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e18b504bec79970b517214ab",
            "width": 64
          }],
          "name": "Midnight Flowers",
          "release_date": "2012-05-29",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1VANv2mWRaWMncF4Phkl0F"
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
        "duration_ms": 305359,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCABG1265407"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/046r9OIF1bHuTeZoyk3b6r"
        },
        "href": "https://api.spotify.com/v1/tracks/046r9OIF1bHuTeZoyk3b6r",
        "id": "046r9OIF1bHuTeZoyk3b6r",
        "is_local": false,
        "is_playable": true,
        "name": "I Already Forgot Everything You Said",
        "popularity": 47,
        "preview_url": "https://p.scdn.co/mp3-preview/f58feedb079dd526dc61318e20f293bd11a144af?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:046r9OIF1bHuTeZoyk3b6r"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-10-10T06:27:44Z",
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
        "share_id": "D6kl8hvcSlO9WF7Gf6Xg3A",
        "share_url": "https://open.spotify.com/track/6FSGJiesHD1BBhhv2YGoNG?si=D6kl8hvcSlO9WF7Gf6Xg3A",
        "uri": "spotify:track:6FSGJiesHD1BBhhv2YGoNG"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/29mRqqZ15WaYjEsKNzcRkv"
            },
            "href": "https://api.spotify.com/v1/artists/29mRqqZ15WaYjEsKNzcRkv",
            "id": "29mRqqZ15WaYjEsKNzcRkv",
            "name": "Robert Finley",
            "type": "artist",
            "uri": "spotify:artist:29mRqqZ15WaYjEsKNzcRkv"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6M5DQTTp3zGaWOH6hXsYJV"
          },
          "href": "https://api.spotify.com/v1/albums/6M5DQTTp3zGaWOH6hXsYJV",
          "id": "6M5DQTTp3zGaWOH6hXsYJV",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273fed7a8db5441c510f02f2fe0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02fed7a8db5441c510f02f2fe0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851fed7a8db5441c510f02f2fe0",
            "width": 64
          }],
          "name": "Goin' Platinum!",
          "release_date": "2017-11-10",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:6M5DQTTp3zGaWOH6hXsYJV"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/29mRqqZ15WaYjEsKNzcRkv"
          },
          "href": "https://api.spotify.com/v1/artists/29mRqqZ15WaYjEsKNzcRkv",
          "id": "29mRqqZ15WaYjEsKNzcRkv",
          "name": "Robert Finley",
          "type": "artist",
          "uri": "spotify:artist:29mRqqZ15WaYjEsKNzcRkv"
        }],
        "disc_number": 1,
        "duration_ms": 155400,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USNO11700432"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6FSGJiesHD1BBhhv2YGoNG"
        },
        "href": "https://api.spotify.com/v1/tracks/6FSGJiesHD1BBhhv2YGoNG",
        "id": "6FSGJiesHD1BBhhv2YGoNG",
        "is_local": false,
        "is_playable": true,
        "name": "Get It While You Can",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/6dc9fdf4eae2dde318116faf1d9fb72d552549e0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6FSGJiesHD1BBhhv2YGoNG"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-10-10T06:26:46Z",
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
        "share_id": "DPAUgGMHQvmpMbx5zOVzJg",
        "share_url": "https://open.spotify.com/track/20idwcdmzRCgJUfT8BFEbw?si=DPAUgGMHQvmpMbx5zOVzJg",
        "uri": "spotify:track:20idwcdmzRCgJUfT8BFEbw"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0CCqHvxGgfjJzwzQzmPlEr"
            },
            "href": "https://api.spotify.com/v1/artists/0CCqHvxGgfjJzwzQzmPlEr",
            "id": "0CCqHvxGgfjJzwzQzmPlEr",
            "name": "Tuxedo",
            "type": "artist",
            "uri": "spotify:artist:0CCqHvxGgfjJzwzQzmPlEr"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0YFhQCQPheByANPPcAmfHn"
          },
          "href": "https://api.spotify.com/v1/albums/0YFhQCQPheByANPPcAmfHn",
          "id": "0YFhQCQPheByANPPcAmfHn",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a400f96f34314d286fc737bd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a400f96f34314d286fc737bd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a400f96f34314d286fc737bd",
            "width": 64
          }],
          "name": "Tuxedo II",
          "release_date": "2017-03-24",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:0YFhQCQPheByANPPcAmfHn"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0CCqHvxGgfjJzwzQzmPlEr"
          },
          "href": "https://api.spotify.com/v1/artists/0CCqHvxGgfjJzwzQzmPlEr",
          "id": "0CCqHvxGgfjJzwzQzmPlEr",
          "name": "Tuxedo",
          "type": "artist",
          "uri": "spotify:artist:0CCqHvxGgfjJzwzQzmPlEr"
        }],
        "disc_number": 1,
        "duration_ms": 225981,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "US2S71782002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/20idwcdmzRCgJUfT8BFEbw"
        },
        "href": "https://api.spotify.com/v1/tracks/20idwcdmzRCgJUfT8BFEbw",
        "id": "20idwcdmzRCgJUfT8BFEbw",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6dNvQIid4GwnlSmeIB2VTh"
          },
          "href": "https://api.spotify.com/v1/tracks/6dNvQIid4GwnlSmeIB2VTh",
          "id": "6dNvQIid4GwnlSmeIB2VTh",
          "type": "track",
          "uri": "spotify:track:6dNvQIid4GwnlSmeIB2VTh"
        },
        "name": "2nd Time Around",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/7c14f69e506641be2001397fde69c81f9808cbe3?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:20idwcdmzRCgJUfT8BFEbw"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-10-26T00:51:28Z",
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
        "share_id": "KleKW3MqRye1mukshM-wMg",
        "share_url": "https://open.spotify.com/track/69q2Yk1JC0e05kask9mTZe?si=KleKW3MqRye1mukshM-wMg",
        "uri": "spotify:track:69q2Yk1JC0e05kask9mTZe"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe"
            },
            "href": "https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe",
            "id": "22bE4uQ6baNwSHPVcDxLCe",
            "name": "The Rolling Stones",
            "type": "artist",
            "uri": "spotify:artist:22bE4uQ6baNwSHPVcDxLCe"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4jCpSNa8dV40aMrHOshRdv"
          },
          "href": "https://api.spotify.com/v1/albums/4jCpSNa8dV40aMrHOshRdv",
          "id": "4jCpSNa8dV40aMrHOshRdv",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273011ff4b301f430be4984a020",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02011ff4b301f430be4984a020",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851011ff4b301f430be4984a020",
            "width": 64
          }],
          "name": "It's Only Rock 'N' Roll (2009 Re-Mastered)",
          "release_date": "1974-10-18",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4jCpSNa8dV40aMrHOshRdv"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe"
          },
          "href": "https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe",
          "id": "22bE4uQ6baNwSHPVcDxLCe",
          "name": "The Rolling Stones",
          "type": "artist",
          "uri": "spotify:artist:22bE4uQ6baNwSHPVcDxLCe"
        }],
        "disc_number": 1,
        "duration_ms": 301240,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM70909426"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/69q2Yk1JC0e05kask9mTZe"
        },
        "href": "https://api.spotify.com/v1/tracks/69q2Yk1JC0e05kask9mTZe",
        "id": "69q2Yk1JC0e05kask9mTZe",
        "is_local": false,
        "is_playable": true,
        "name": "Luxury - Remastered",
        "popularity": 28,
        "preview_url": "https://p.scdn.co/mp3-preview/18b8b794a33d2e4ecf9fe399eabef60c86477395?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:69q2Yk1JC0e05kask9mTZe"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-10-10T06:36:06Z",
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
        "share_id": "UXYRl8_oTcG_4Re30SVWXg",
        "share_url": "https://open.spotify.com/track/5csiEVe7Coh1qFalrpLjLg?si=UXYRl8_oTcG_4Re30SVWXg",
        "uri": "spotify:track:5csiEVe7Coh1qFalrpLjLg"
      },
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/14nKtAc7fHAIVNBetAaSJH"
            },
            "href": "https://api.spotify.com/v1/artists/14nKtAc7fHAIVNBetAaSJH",
            "id": "14nKtAc7fHAIVNBetAaSJH",
            "name": "Leonard Nimoy",
            "type": "artist",
            "uri": "spotify:artist:14nKtAc7fHAIVNBetAaSJH"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2dPqql8xbby3nWuf98mAza"
            },
            "href": "https://api.spotify.com/v1/artists/2dPqql8xbby3nWuf98mAza",
            "id": "2dPqql8xbby3nWuf98mAza",
            "name": "William Shatner",
            "type": "artist",
            "uri": "spotify:artist:2dPqql8xbby3nWuf98mAza"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1uTUlW2npky1RoanNVKvl1"
          },
          "href": "https://api.spotify.com/v1/albums/1uTUlW2npky1RoanNVKvl1",
          "id": "1uTUlW2npky1RoanNVKvl1",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d68d2739234fde78fd9d88c8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d68d2739234fde78fd9d88c8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d68d2739234fde78fd9d88c8",
            "width": 64
          }],
          "name": "Spaced Out - The Best of Leonard Nimoy & William Shatner",
          "release_date": "1997-01-01",
          "release_date_precision": "day",
          "total_tracks": 24,
          "type": "album",
          "uri": "spotify:album:1uTUlW2npky1RoanNVKvl1"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/14nKtAc7fHAIVNBetAaSJH"
          },
          "href": "https://api.spotify.com/v1/artists/14nKtAc7fHAIVNBetAaSJH",
          "id": "14nKtAc7fHAIVNBetAaSJH",
          "name": "Leonard Nimoy",
          "type": "artist",
          "uri": "spotify:artist:14nKtAc7fHAIVNBetAaSJH"
        }],
        "disc_number": 1,
        "duration_ms": 177840,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC10346152"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5csiEVe7Coh1qFalrpLjLg"
        },
        "href": "https://api.spotify.com/v1/tracks/5csiEVe7Coh1qFalrpLjLg",
        "id": "5csiEVe7Coh1qFalrpLjLg",
        "is_local": false,
        "is_playable": true,
        "name": "Everybody's Talkin'",
        "popularity": 8,
        "preview_url": "https://p.scdn.co/mp3-preview/3d4eb27828860ecfeec9b97cb1051cdbf55a7eeb?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 22,
        "type": "track",
        "uri": "spotify:track:5csiEVe7Coh1qFalrpLjLg"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-10-26T00:51:46Z",
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
        "share_id": "kelWY6N3SI6XrLxZu_g5oA",
        "share_url": "https://open.spotify.com/track/6IeZM7e4xgOZtpinah0e4K?si=kelWY6N3SI6XrLxZu_g5oA",
        "uri": "spotify:track:6IeZM7e4xgOZtpinah0e4K"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1PPpmEpuN1KrWNOBqrHeMj"
            },
            "href": "https://api.spotify.com/v1/artists/1PPpmEpuN1KrWNOBqrHeMj",
            "id": "1PPpmEpuN1KrWNOBqrHeMj",
            "name": "Ultimate Painting",
            "type": "artist",
            "uri": "spotify:artist:1PPpmEpuN1KrWNOBqrHeMj"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5JQq4hKrE4Cd0ib5eKY0Gg"
          },
          "href": "https://api.spotify.com/v1/albums/5JQq4hKrE4Cd0ib5eKY0Gg",
          "id": "5JQq4hKrE4Cd0ib5eKY0Gg",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27329448dc91fc02c27c1e8fce5",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0229448dc91fc02c27c1e8fce5",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485129448dc91fc02c27c1e8fce5",
            "width": 64
          }],
          "name": "Dusk",
          "release_date": "2016-09-30",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5JQq4hKrE4Cd0ib5eKY0Gg"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1PPpmEpuN1KrWNOBqrHeMj"
          },
          "href": "https://api.spotify.com/v1/artists/1PPpmEpuN1KrWNOBqrHeMj",
          "id": "1PPpmEpuN1KrWNOBqrHeMj",
          "name": "Ultimate Painting",
          "type": "artist",
          "uri": "spotify:artist:1PPpmEpuN1KrWNOBqrHeMj"
        }],
        "disc_number": 1,
        "duration_ms": 173475,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMXQJ1611705"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6IeZM7e4xgOZtpinah0e4K"
        },
        "href": "https://api.spotify.com/v1/tracks/6IeZM7e4xgOZtpinah0e4K",
        "id": "6IeZM7e4xgOZtpinah0e4K",
        "is_local": false,
        "is_playable": true,
        "name": "Monday Morning, Somewhere Central",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/67d411e8830e9c628d7ce787e1d00caeebd9ebaf?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:6IeZM7e4xgOZtpinah0e4K"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-10-23T16:53:40Z",
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
        "share_id": "hPsmn782RDSmWpHc6sOKlw",
        "share_url": "https://open.spotify.com/track/7GIuK9YEoQoTFpGQzi7E4M?si=hPsmn782RDSmWpHc6sOKlw",
        "uri": "spotify:track:7GIuK9YEoQoTFpGQzi7E4M"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/12vInSu21rqLXfH6QKTLl1"
            },
            "href": "https://api.spotify.com/v1/artists/12vInSu21rqLXfH6QKTLl1",
            "id": "12vInSu21rqLXfH6QKTLl1",
            "name": "Scott Orr",
            "type": "artist",
            "uri": "spotify:artist:12vInSu21rqLXfH6QKTLl1"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5yGkulH0vNpRdo2ZuBPyKU"
          },
          "href": "https://api.spotify.com/v1/albums/5yGkulH0vNpRdo2ZuBPyKU",
          "id": "5yGkulH0vNpRdo2ZuBPyKU",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27398faccfd6050781250589213",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0298faccfd6050781250589213",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485198faccfd6050781250589213",
            "width": 64
          }],
          "name": "Fall Apart",
          "release_date": "2018-09-21",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5yGkulH0vNpRdo2ZuBPyKU"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/12vInSu21rqLXfH6QKTLl1"
          },
          "href": "https://api.spotify.com/v1/artists/12vInSu21rqLXfH6QKTLl1",
          "id": "12vInSu21rqLXfH6QKTLl1",
          "name": "Scott Orr",
          "type": "artist",
          "uri": "spotify:artist:12vInSu21rqLXfH6QKTLl1"
        }],
        "disc_number": 1,
        "duration_ms": 276570,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "ushm81829798"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7GIuK9YEoQoTFpGQzi7E4M"
        },
        "href": "https://api.spotify.com/v1/tracks/7GIuK9YEoQoTFpGQzi7E4M",
        "id": "7GIuK9YEoQoTFpGQzi7E4M",
        "is_local": false,
        "is_playable": true,
        "name": "Fall Apart",
        "popularity": 7,
        "preview_url": "https://p.scdn.co/mp3-preview/c06f95c8b6f5dfe4ff2337fc3fb5debdbc454278?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7GIuK9YEoQoTFpGQzi7E4M"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-10-11T08:02:01Z",
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
        "share_id": "ZUgO2I7lQgGp6ONPLANoGQ",
        "share_url": "https://open.spotify.com/track/59v1okflZrEkeb9JrxfJvX?si=ZUgO2I7lQgGp6ONPLANoGQ",
        "uri": "spotify:track:59v1okflZrEkeb9JrxfJvX"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2z4eiJkDaXYCR9kv2UuSgz"
            },
            "href": "https://api.spotify.com/v1/artists/2z4eiJkDaXYCR9kv2UuSgz",
            "id": "2z4eiJkDaXYCR9kv2UuSgz",
            "name": "The West Coast Pop Art Experimental Band",
            "type": "artist",
            "uri": "spotify:artist:2z4eiJkDaXYCR9kv2UuSgz"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/36qtMdwzo4s7lisavSgorV"
          },
          "href": "https://api.spotify.com/v1/albums/36qtMdwzo4s7lisavSgorV",
          "id": "36qtMdwzo4s7lisavSgorV",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273235e3d74d4b132775876ec3e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02235e3d74d4b132775876ec3e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851235e3d74d4b132775876ec3e",
            "width": 64
          }],
          "name": "Part One",
          "release_date": "1967",
          "release_date_precision": "year",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:36qtMdwzo4s7lisavSgorV"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2z4eiJkDaXYCR9kv2UuSgz"
          },
          "href": "https://api.spotify.com/v1/artists/2z4eiJkDaXYCR9kv2UuSgz",
          "id": "2z4eiJkDaXYCR9kv2UuSgz",
          "name": "The West Coast Pop Art Experimental Band",
          "type": "artist",
          "uri": "spotify:artist:2z4eiJkDaXYCR9kv2UuSgz"
        }],
        "disc_number": 1,
        "duration_ms": 144440,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRE10601415"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/59v1okflZrEkeb9JrxfJvX"
        },
        "href": "https://api.spotify.com/v1/tracks/59v1okflZrEkeb9JrxfJvX",
        "id": "59v1okflZrEkeb9JrxfJvX",
        "is_local": false,
        "is_playable": true,
        "name": "I Won't Hurt You",
        "popularity": 51,
        "preview_url": "https://p.scdn.co/mp3-preview/755f1d47c6b4b541c98b7a0990fffe7724a9356a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:59v1okflZrEkeb9JrxfJvX"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-28T21:59:43Z",
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
        "share_id": "7klqTRvyQ62A2_2rk8N2Qg",
        "share_url": "https://open.spotify.com/track/65Kps61aWPxQuLhxzTyG5h?si=7klqTRvyQ62A2_2rk8N2Qg",
        "uri": "spotify:track:65Kps61aWPxQuLhxzTyG5h"
      },
      "track": {
        "album": {
          "album_type": "single",
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
            "spotify": "https://open.spotify.com/album/1k0fhpGFWa1ce4LdE6MXFW"
          },
          "href": "https://api.spotify.com/v1/albums/1k0fhpGFWa1ce4LdE6MXFW",
          "id": "1k0fhpGFWa1ce4LdE6MXFW",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c10e7584cf87748710796b9a",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c10e7584cf87748710796b9a",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c10e7584cf87748710796b9a",
            "width": 64
          }],
          "name": "Afternoon with Caroline",
          "release_date": "2018-10-19",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:1k0fhpGFWa1ce4LdE6MXFW"
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
        "duration_ms": 262386,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USVBM1600060"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/65Kps61aWPxQuLhxzTyG5h"
        },
        "href": "https://api.spotify.com/v1/tracks/65Kps61aWPxQuLhxzTyG5h",
        "id": "65Kps61aWPxQuLhxzTyG5h",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2fb8xc7Tv6ukFHjK2fdFL3"
          },
          "href": "https://api.spotify.com/v1/tracks/2fb8xc7Tv6ukFHjK2fdFL3",
          "id": "2fb8xc7Tv6ukFHjK2fdFL3",
          "type": "track",
          "uri": "spotify:track:2fb8xc7Tv6ukFHjK2fdFL3"
        },
        "name": "Don't Stop Running",
        "popularity": 21,
        "preview_url": "https://p.scdn.co/mp3-preview/08610555588c2eed94a48a2b44f0126a3ad46f6d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:65Kps61aWPxQuLhxzTyG5h"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-11-02T04:27:55Z",
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
        "share_id": "azuZSP_KRu6cUzSTL2xV5w",
        "share_url": "https://open.spotify.com/track/5PrPN445xZxYuMD4nIR1UC?si=azuZSP_KRu6cUzSTL2xV5w",
        "uri": "spotify:track:5PrPN445xZxYuMD4nIR1UC"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1yAwtBaoHLEDWAnWR87hBT"
            },
            "href": "https://api.spotify.com/v1/artists/1yAwtBaoHLEDWAnWR87hBT",
            "id": "1yAwtBaoHLEDWAnWR87hBT",
            "name": "Modest Mouse",
            "type": "artist",
            "uri": "spotify:artist:1yAwtBaoHLEDWAnWR87hBT"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7BAzCcA3ri1ifFiC1TgPMx"
          },
          "href": "https://api.spotify.com/v1/albums/7BAzCcA3ri1ifFiC1TgPMx",
          "id": "7BAzCcA3ri1ifFiC1TgPMx",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ecfe46f1fb481d6dc0e5371e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ecfe46f1fb481d6dc0e5371e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ecfe46f1fb481d6dc0e5371e",
            "width": 64
          }],
          "name": "This Is a Long Drive for Someone with Nothing to Think About",
          "release_date": "1996-04-16",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:7BAzCcA3ri1ifFiC1TgPMx"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1yAwtBaoHLEDWAnWR87hBT"
          },
          "href": "https://api.spotify.com/v1/artists/1yAwtBaoHLEDWAnWR87hBT",
          "id": "1yAwtBaoHLEDWAnWR87hBT",
          "name": "Modest Mouse",
          "type": "artist",
          "uri": "spotify:artist:1yAwtBaoHLEDWAnWR87hBT"
        }],
        "disc_number": 1,
        "duration_ms": 350493,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USFP71444514"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5PrPN445xZxYuMD4nIR1UC"
        },
        "href": "https://api.spotify.com/v1/tracks/5PrPN445xZxYuMD4nIR1UC",
        "id": "5PrPN445xZxYuMD4nIR1UC",
        "is_local": false,
        "is_playable": true,
        "name": "Talking Shit About a Pretty Sunset",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/914082cd545d3fc0b9b5589a5399b1921d85e8d9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 14,
        "type": "track",
        "uri": "spotify:track:5PrPN445xZxYuMD4nIR1UC"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 13
  },
  "type": "playlist",
  "uri": "spotify:playlist:0VvjJI9nhOH7pRcUZuQcG9"
};

/***/ })

/******/ });