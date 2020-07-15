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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DBxq");


/***/ }),

/***/ "DBxq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/5mCfJFbLtSKQPSGLkGRJD5"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/5mCfJFbLtSKQPSGLkGRJD5?type=track,episode",
  "id": "5mCfJFbLtSKQPSGLkGRJD5",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b273111becf027b82fe1840a5e16ab67616d0000b27355fce67b2ed747fd40c5f1a1ab67616d0000b2735ee1975fe879d4112d267cc8ab67616d0000b273e370a0e0018093ca8bfbb25a",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b273111becf027b82fe1840a5e16ab67616d0000b27355fce67b2ed747fd40c5f1a1ab67616d0000b2735ee1975fe879d4112d267cc8ab67616d0000b273e370a0e0018093ca8bfbb25a",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b273111becf027b82fe1840a5e16ab67616d0000b27355fce67b2ed747fd40c5f1a1ab67616d0000b2735ee1975fe879d4112d267cc8ab67616d0000b273e370a0e0018093ca8bfbb25a",
    "width": 60
  }],
  "name": "December 2017",
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
    "share_id": "t4rXMkkjTr663Ci0RUo12w",
    "share_url": "https://open.spotify.com/playlist/5mCfJFbLtSKQPSGLkGRJD5?si=t4rXMkkjTr663Ci0RUo12w",
    "uri": "spotify:playlist:5mCfJFbLtSKQPSGLkGRJD5"
  },
  "snapshot_id": "NzgsNzI4OGM4Mjk1Y2EzMjRhMmM2OGM4MTQzNTBjYWM0ZTE4MDIxNTI2OA==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/5mCfJFbLtSKQPSGLkGRJD5/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2017-12-19T05:17:07Z",
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
        "share_id": "vg-qZEXzTa6ZeGTKuzczuA",
        "share_url": "https://open.spotify.com/track/2BxR1oTTTSogUCGAqYkd6l?si=vg-qZEXzTa6ZeGTKuzczuA",
        "uri": "spotify:track:2BxR1oTTTSogUCGAqYkd6l"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6VDdCwrBM4qQaGxoAyxyJC"
            },
            "href": "https://api.spotify.com/v1/artists/6VDdCwrBM4qQaGxoAyxyJC",
            "id": "6VDdCwrBM4qQaGxoAyxyJC",
            "name": "Cold War Kids",
            "type": "artist",
            "uri": "spotify:artist:6VDdCwrBM4qQaGxoAyxyJC"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7ljx0xiOt40mUU3Os5KkiP"
          },
          "href": "https://api.spotify.com/v1/albums/7ljx0xiOt40mUU3Os5KkiP",
          "id": "7ljx0xiOt40mUU3Os5KkiP",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27355fce67b2ed747fd40c5f1a1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0255fce67b2ed747fd40c5f1a1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485155fce67b2ed747fd40c5f1a1",
            "width": 64
          }],
          "name": "Behave Yourself",
          "release_date": "2009-01-01",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:7ljx0xiOt40mUU3Os5KkiP"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6VDdCwrBM4qQaGxoAyxyJC"
          },
          "href": "https://api.spotify.com/v1/artists/6VDdCwrBM4qQaGxoAyxyJC",
          "id": "6VDdCwrBM4qQaGxoAyxyJC",
          "name": "Cold War Kids",
          "type": "artist",
          "uri": "spotify:artist:6VDdCwrBM4qQaGxoAyxyJC"
        }],
        "disc_number": 1,
        "duration_ms": 151626,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USCJ80900418"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2BxR1oTTTSogUCGAqYkd6l"
        },
        "href": "https://api.spotify.com/v1/tracks/2BxR1oTTTSogUCGAqYkd6l",
        "id": "2BxR1oTTTSogUCGAqYkd6l",
        "is_local": false,
        "is_playable": true,
        "name": "Santa Ana Winds",
        "popularity": 25,
        "preview_url": "https://p.scdn.co/mp3-preview/5413c253e88376414c05a75c4b70a9d1f6f73428?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:2BxR1oTTTSogUCGAqYkd6l"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-13T00:45:24Z",
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
        "share_id": "_zEpSc33RJGPnDrYlCXGkw",
        "share_url": "https://open.spotify.com/track/08AgTY0S2dNko05XsUqs2X?si=_zEpSc33RJGPnDrYlCXGkw",
        "uri": "spotify:track:08AgTY0S2dNko05XsUqs2X"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3F44NFkOhpksx7b2JXMo3G"
            },
            "href": "https://api.spotify.com/v1/artists/3F44NFkOhpksx7b2JXMo3G",
            "id": "3F44NFkOhpksx7b2JXMo3G",
            "name": "Weaves",
            "type": "artist",
            "uri": "spotify:artist:3F44NFkOhpksx7b2JXMo3G"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1rw0b7EhFp6FCadkWfhRZW"
          },
          "href": "https://api.spotify.com/v1/albums/1rw0b7EhFp6FCadkWfhRZW",
          "id": "1rw0b7EhFp6FCadkWfhRZW",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735ee1975fe879d4112d267cc8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025ee1975fe879d4112d267cc8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515ee1975fe879d4112d267cc8",
            "width": 64
          }],
          "name": "Wide Open",
          "release_date": "2017-10-06",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:1rw0b7EhFp6FCadkWfhRZW"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3F44NFkOhpksx7b2JXMo3G"
          },
          "href": "https://api.spotify.com/v1/artists/3F44NFkOhpksx7b2JXMo3G",
          "id": "3F44NFkOhpksx7b2JXMo3G",
          "name": "Weaves",
          "type": "artist",
          "uri": "spotify:artist:3F44NFkOhpksx7b2JXMo3G"
        }],
        "disc_number": 1,
        "duration_ms": 250702,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAB9Q1700059"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/08AgTY0S2dNko05XsUqs2X"
        },
        "href": "https://api.spotify.com/v1/tracks/08AgTY0S2dNko05XsUqs2X",
        "id": "08AgTY0S2dNko05XsUqs2X",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2HLt1jCqSwDJaU7yBPTbOb"
          },
          "href": "https://api.spotify.com/v1/tracks/2HLt1jCqSwDJaU7yBPTbOb",
          "id": "2HLt1jCqSwDJaU7yBPTbOb",
          "type": "track",
          "uri": "spotify:track:2HLt1jCqSwDJaU7yBPTbOb"
        },
        "name": "Slicked",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/960e515bcfca521bda68d811c0097e79924156a7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:08AgTY0S2dNko05XsUqs2X"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-04T18:15:03Z",
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
        "share_id": "rDQft2xtTPqpfocHiI0bIg",
        "share_url": "https://open.spotify.com/track/3NxdG8cHAnyBdb3mwsePwF?si=rDQft2xtTPqpfocHiI0bIg",
        "uri": "spotify:track:3NxdG8cHAnyBdb3mwsePwF"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4dwDVC6lrMINxVBxETE1AB"
            },
            "href": "https://api.spotify.com/v1/artists/4dwDVC6lrMINxVBxETE1AB",
            "id": "4dwDVC6lrMINxVBxETE1AB",
            "name": "Aaron Frazer",
            "type": "artist",
            "uri": "spotify:artist:4dwDVC6lrMINxVBxETE1AB"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1Q33Sd9px79c7lWMbQXwxm"
            },
            "href": "https://api.spotify.com/v1/artists/1Q33Sd9px79c7lWMbQXwxm",
            "id": "1Q33Sd9px79c7lWMbQXwxm",
            "name": "The Flying Stars Of Brooklyn NY",
            "type": "artist",
            "uri": "spotify:artist:1Q33Sd9px79c7lWMbQXwxm"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/35Rb3bVZG4yGEQqnJcDKuY"
          },
          "href": "https://api.spotify.com/v1/albums/35Rb3bVZG4yGEQqnJcDKuY",
          "id": "35Rb3bVZG4yGEQqnJcDKuY",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e370a0e0018093ca8bfbb25a",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e370a0e0018093ca8bfbb25a",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e370a0e0018093ca8bfbb25a",
            "width": 64
          }],
          "name": "My God Has a Telephone",
          "release_date": "2017-10-20",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:35Rb3bVZG4yGEQqnJcDKuY"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Q33Sd9px79c7lWMbQXwxm"
          },
          "href": "https://api.spotify.com/v1/artists/1Q33Sd9px79c7lWMbQXwxm",
          "id": "1Q33Sd9px79c7lWMbQXwxm",
          "name": "The Flying Stars Of Brooklyn NY",
          "type": "artist",
          "uri": "spotify:artist:1Q33Sd9px79c7lWMbQXwxm"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4dwDVC6lrMINxVBxETE1AB"
          },
          "href": "https://api.spotify.com/v1/artists/4dwDVC6lrMINxVBxETE1AB",
          "id": "4dwDVC6lrMINxVBxETE1AB",
          "name": "Aaron Frazer",
          "type": "artist",
          "uri": "spotify:artist:4dwDVC6lrMINxVBxETE1AB"
        }],
        "disc_number": 1,
        "duration_ms": 249662,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM6P41757896"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3NxdG8cHAnyBdb3mwsePwF"
        },
        "href": "https://api.spotify.com/v1/tracks/3NxdG8cHAnyBdb3mwsePwF",
        "id": "3NxdG8cHAnyBdb3mwsePwF",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/69AKIOHQKkvr70BxFS6FA2"
          },
          "href": "https://api.spotify.com/v1/tracks/69AKIOHQKkvr70BxFS6FA2",
          "id": "69AKIOHQKkvr70BxFS6FA2",
          "type": "track",
          "uri": "spotify:track:69AKIOHQKkvr70BxFS6FA2"
        },
        "name": "Live On",
        "popularity": 47,
        "preview_url": "https://p.scdn.co/mp3-preview/987a06c7bcb3df831625a95e69a45c4345876dc0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3NxdG8cHAnyBdb3mwsePwF"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-19T05:17:49Z",
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
        "share_id": "mdIcjfZ5QbuOGubx08i8mg",
        "share_url": "https://open.spotify.com/track/3Yx0YOmzfP5tbSTVl6DFMe?si=mdIcjfZ5QbuOGubx08i8mg",
        "uri": "spotify:track:3Yx0YOmzfP5tbSTVl6DFMe"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6LufpoVlIYKQCu9Gjpk8B7"
            },
            "href": "https://api.spotify.com/v1/artists/6LufpoVlIYKQCu9Gjpk8B7",
            "id": "6LufpoVlIYKQCu9Gjpk8B7",
            "name": "Sharon Jones & The Dap-Kings",
            "type": "artist",
            "uri": "spotify:artist:6LufpoVlIYKQCu9Gjpk8B7"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6dQ4PANge8QXfOywlHNd2J"
          },
          "href": "https://api.spotify.com/v1/albums/6dQ4PANge8QXfOywlHNd2J",
          "id": "6dQ4PANge8QXfOywlHNd2J",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273111becf027b82fe1840a5e16",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02111becf027b82fe1840a5e16",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851111becf027b82fe1840a5e16",
            "width": 64
          }],
          "name": "Soul of a Woman",
          "release_date": "2017-11-17",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6dQ4PANge8QXfOywlHNd2J"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6LufpoVlIYKQCu9Gjpk8B7"
          },
          "href": "https://api.spotify.com/v1/artists/6LufpoVlIYKQCu9Gjpk8B7",
          "id": "6LufpoVlIYKQCu9Gjpk8B7",
          "name": "Sharon Jones & The Dap-Kings",
          "type": "artist",
          "uri": "spotify:artist:6LufpoVlIYKQCu9Gjpk8B7"
        }],
        "disc_number": 1,
        "duration_ms": 153600,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US4GZ1705005"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3Yx0YOmzfP5tbSTVl6DFMe"
        },
        "href": "https://api.spotify.com/v1/tracks/3Yx0YOmzfP5tbSTVl6DFMe",
        "id": "3Yx0YOmzfP5tbSTVl6DFMe",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/434hA10DbIHsNoi5NPmFiT"
          },
          "href": "https://api.spotify.com/v1/tracks/434hA10DbIHsNoi5NPmFiT",
          "id": "434hA10DbIHsNoi5NPmFiT",
          "type": "track",
          "uri": "spotify:track:434hA10DbIHsNoi5NPmFiT"
        },
        "name": "Rumors",
        "popularity": 29,
        "preview_url": "https://p.scdn.co/mp3-preview/afa85059ed17b92e0e25112a000bc8523d8f2d50?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:3Yx0YOmzfP5tbSTVl6DFMe"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-19T05:21:05Z",
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
        "share_id": "vLTEKma-TbiyngGVPuhybg",
        "share_url": "https://open.spotify.com/track/6fVtTzMxwQqd1wjkO3XZrW?si=vLTEKma-TbiyngGVPuhybg",
        "uri": "spotify:track:6fVtTzMxwQqd1wjkO3XZrW"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2iE18Oxc8YSumAU232n4rW"
            },
            "href": "https://api.spotify.com/v1/artists/2iE18Oxc8YSumAU232n4rW",
            "id": "2iE18Oxc8YSumAU232n4rW",
            "name": "The Jackson 5",
            "type": "artist",
            "uri": "spotify:artist:2iE18Oxc8YSumAU232n4rW"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5S5HVazwAhiLRsmwpZN8J9"
          },
          "href": "https://api.spotify.com/v1/albums/5S5HVazwAhiLRsmwpZN8J9",
          "id": "5S5HVazwAhiLRsmwpZN8J9",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c55bbd84d38b51dd60ef12f9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c55bbd84d38b51dd60ef12f9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c55bbd84d38b51dd60ef12f9",
            "width": 64
          }],
          "name": "Lookin' Through The Windows",
          "release_date": "1972-05-23",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:5S5HVazwAhiLRsmwpZN8J9"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2iE18Oxc8YSumAU232n4rW"
          },
          "href": "https://api.spotify.com/v1/artists/2iE18Oxc8YSumAU232n4rW",
          "id": "2iE18Oxc8YSumAU232n4rW",
          "name": "The Jackson 5",
          "type": "artist",
          "uri": "spotify:artist:2iE18Oxc8YSumAU232n4rW"
        }],
        "disc_number": 1,
        "duration_ms": 191826,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMO17282626"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6fVtTzMxwQqd1wjkO3XZrW"
        },
        "href": "https://api.spotify.com/v1/tracks/6fVtTzMxwQqd1wjkO3XZrW",
        "id": "6fVtTzMxwQqd1wjkO3XZrW",
        "is_local": false,
        "is_playable": true,
        "name": "Doctor My Eyes",
        "popularity": 37,
        "preview_url": "https://p.scdn.co/mp3-preview/f23c4047b0d1755a1d9f3da3fbdced3871f73448?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:6fVtTzMxwQqd1wjkO3XZrW"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-16T21:15:36Z",
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
        "share_id": "Id2QzQy4QcOts0pI0Y6nzQ",
        "share_url": "https://open.spotify.com/track/3HTXW7ooYVsv2Czab07JeC?si=Id2QzQy4QcOts0pI0Y6nzQ",
        "uri": "spotify:track:3HTXW7ooYVsv2Czab07JeC"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0ip3L7jX2aq8T1VTJRFZ9w"
            },
            "href": "https://api.spotify.com/v1/artists/0ip3L7jX2aq8T1VTJRFZ9w",
            "id": "0ip3L7jX2aq8T1VTJRFZ9w",
            "name": "Sinkane",
            "type": "artist",
            "uri": "spotify:artist:0ip3L7jX2aq8T1VTJRFZ9w"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5u9CMU8Xn06xVAciuNkD0h"
          },
          "href": "https://api.spotify.com/v1/albums/5u9CMU8Xn06xVAciuNkD0h",
          "id": "5u9CMU8Xn06xVAciuNkD0h",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27309600c8f5869d2ead04f294c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0209600c8f5869d2ead04f294c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485109600c8f5869d2ead04f294c",
            "width": 64
          }],
          "name": "Mean Love",
          "release_date": "2014-09-02",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5u9CMU8Xn06xVAciuNkD0h"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0ip3L7jX2aq8T1VTJRFZ9w"
          },
          "href": "https://api.spotify.com/v1/artists/0ip3L7jX2aq8T1VTJRFZ9w",
          "id": "0ip3L7jX2aq8T1VTJRFZ9w",
          "name": "Sinkane",
          "type": "artist",
          "uri": "spotify:artist:0ip3L7jX2aq8T1VTJRFZ9w"
        }],
        "disc_number": 1,
        "duration_ms": 257279,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US4GE1400033"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3HTXW7ooYVsv2Czab07JeC"
        },
        "href": "https://api.spotify.com/v1/tracks/3HTXW7ooYVsv2Czab07JeC",
        "id": "3HTXW7ooYVsv2Czab07JeC",
        "is_local": false,
        "is_playable": true,
        "name": "How We Be",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/8735c3556109635da468209059a7fd81177a2f35?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3HTXW7ooYVsv2Czab07JeC"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-16T21:16:04Z",
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
        "share_id": "6QTJoR6pQvGKW3N6ENJNQw",
        "share_url": "https://open.spotify.com/track/16TnprliADBNA3YJFaNM2c?si=6QTJoR6pQvGKW3N6ENJNQw",
        "uri": "spotify:track:16TnprliADBNA3YJFaNM2c"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0Wkm45quqfx3NepJpXDvwE"
            },
            "href": "https://api.spotify.com/v1/artists/0Wkm45quqfx3NepJpXDvwE",
            "id": "0Wkm45quqfx3NepJpXDvwE",
            "name": "Superorganism",
            "type": "artist",
            "uri": "spotify:artist:0Wkm45quqfx3NepJpXDvwE"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4QLNLu4byLvBG5x9BDrGci"
          },
          "href": "https://api.spotify.com/v1/albums/4QLNLu4byLvBG5x9BDrGci",
          "id": "4QLNLu4byLvBG5x9BDrGci",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737d916e9ee6176daeb4256327",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027d916e9ee6176daeb4256327",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517d916e9ee6176daeb4256327",
            "width": 64
          }],
          "name": "Everybody Wants To Be Famous",
          "release_date": "2018-01-02",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4QLNLu4byLvBG5x9BDrGci"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0Wkm45quqfx3NepJpXDvwE"
          },
          "href": "https://api.spotify.com/v1/artists/0Wkm45quqfx3NepJpXDvwE",
          "id": "0Wkm45quqfx3NepJpXDvwE",
          "name": "Superorganism",
          "type": "artist",
          "uri": "spotify:artist:0Wkm45quqfx3NepJpXDvwE"
        }],
        "disc_number": 1,
        "duration_ms": 184986,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1700580"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/16TnprliADBNA3YJFaNM2c"
        },
        "href": "https://api.spotify.com/v1/tracks/16TnprliADBNA3YJFaNM2c",
        "id": "16TnprliADBNA3YJFaNM2c",
        "is_local": false,
        "is_playable": true,
        "name": "Everybody Wants To Be Famous",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/c5d97dccff4cf688ea96631e1015984aef4bcab5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:16TnprliADBNA3YJFaNM2c"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-16T21:16:52Z",
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
        "share_id": "eOejK5wfQRS3WR7MyykYwg",
        "share_url": "https://open.spotify.com/track/3Q1KswgHsW3QUVHtoX9Dt7?si=eOejK5wfQRS3WR7MyykYwg",
        "uri": "spotify:track:3Q1KswgHsW3QUVHtoX9Dt7"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2zZDWTAs6gSfK3ehQhe3Yb"
            },
            "href": "https://api.spotify.com/v1/artists/2zZDWTAs6gSfK3ehQhe3Yb",
            "id": "2zZDWTAs6gSfK3ehQhe3Yb",
            "name": "Sports Boyfriend",
            "type": "artist",
            "uri": "spotify:artist:2zZDWTAs6gSfK3ehQhe3Yb"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5f6Ki8EHnJNLNUQbwSBXdQ"
          },
          "href": "https://api.spotify.com/v1/albums/5f6Ki8EHnJNLNUQbwSBXdQ",
          "id": "5f6Ki8EHnJNLNUQbwSBXdQ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27324bbf93f5073126450d0b44c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0224bbf93f5073126450d0b44c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485124bbf93f5073126450d0b44c",
            "width": 64
          }],
          "name": "I Only Leave My House to Dance with You",
          "release_date": "2017-11-11",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5f6Ki8EHnJNLNUQbwSBXdQ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2zZDWTAs6gSfK3ehQhe3Yb"
          },
          "href": "https://api.spotify.com/v1/artists/2zZDWTAs6gSfK3ehQhe3Yb",
          "id": "2zZDWTAs6gSfK3ehQhe3Yb",
          "name": "Sports Boyfriend",
          "type": "artist",
          "uri": "spotify:artist:2zZDWTAs6gSfK3ehQhe3Yb"
        }],
        "disc_number": 1,
        "duration_ms": 198058,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "ushm91779577"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3Q1KswgHsW3QUVHtoX9Dt7"
        },
        "href": "https://api.spotify.com/v1/tracks/3Q1KswgHsW3QUVHtoX9Dt7",
        "id": "3Q1KswgHsW3QUVHtoX9Dt7",
        "is_local": false,
        "is_playable": true,
        "name": "I Only Leave My House to Dance with You",
        "popularity": 15,
        "preview_url": "https://p.scdn.co/mp3-preview/a3e883e732ed6823a7640e0a74b554fcf1c65997?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3Q1KswgHsW3QUVHtoX9Dt7"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-03T17:42:04Z",
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
        "share_id": "s2-4C8U-REGR1AbTWiB-eQ",
        "share_url": "https://open.spotify.com/track/12Eg39q87Bi9FN99roiI11?si=s2-4C8U-REGR1AbTWiB-eQ",
        "uri": "spotify:track:12Eg39q87Bi9FN99roiI11"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4QkSD9TRUnMtI8Fq1jXJJe"
            },
            "href": "https://api.spotify.com/v1/artists/4QkSD9TRUnMtI8Fq1jXJJe",
            "id": "4QkSD9TRUnMtI8Fq1jXJJe",
            "name": "Snail Mail",
            "type": "artist",
            "uri": "spotify:artist:4QkSD9TRUnMtI8Fq1jXJJe"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1EjRNhbVxDEPXDwKmusDyj"
          },
          "href": "https://api.spotify.com/v1/albums/1EjRNhbVxDEPXDwKmusDyj",
          "id": "1EjRNhbVxDEPXDwKmusDyj",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ffd6b95ec7e8398d83a65235",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ffd6b95ec7e8398d83a65235",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ffd6b95ec7e8398d83a65235",
            "width": 64
          }],
          "name": "Habit",
          "release_date": "2016",
          "release_date_precision": "year",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:1EjRNhbVxDEPXDwKmusDyj"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4QkSD9TRUnMtI8Fq1jXJJe"
          },
          "href": "https://api.spotify.com/v1/artists/4QkSD9TRUnMtI8Fq1jXJJe",
          "id": "4QkSD9TRUnMtI8Fq1jXJJe",
          "name": "Snail Mail",
          "type": "artist",
          "uri": "spotify:artist:4QkSD9TRUnMtI8Fq1jXJJe"
        }],
        "disc_number": 1,
        "duration_ms": 203746,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACQ1614234"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/12Eg39q87Bi9FN99roiI11"
        },
        "href": "https://api.spotify.com/v1/tracks/12Eg39q87Bi9FN99roiI11",
        "id": "12Eg39q87Bi9FN99roiI11",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7h9Bx7Y0NuP71mMI4FLqlA"
          },
          "href": "https://api.spotify.com/v1/tracks/7h9Bx7Y0NuP71mMI4FLqlA",
          "id": "7h9Bx7Y0NuP71mMI4FLqlA",
          "type": "track",
          "uri": "spotify:track:7h9Bx7Y0NuP71mMI4FLqlA"
        },
        "name": "Thinning",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/c82581329615b647eb666700171009031fb55c08?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:12Eg39q87Bi9FN99roiI11"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-19T05:20:09Z",
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
        "share_id": "jBQyoJRkSEGGnvD0_0-RWw",
        "share_url": "https://open.spotify.com/track/3speBfGPCck1oe47EBPnhh?si=jBQyoJRkSEGGnvD0_0-RWw",
        "uri": "spotify:track:3speBfGPCck1oe47EBPnhh"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6ZitSwtBSGqj00w11GvMU3"
            },
            "href": "https://api.spotify.com/v1/artists/6ZitSwtBSGqj00w11GvMU3",
            "id": "6ZitSwtBSGqj00w11GvMU3",
            "name": "Now, Now",
            "type": "artist",
            "uri": "spotify:artist:6ZitSwtBSGqj00w11GvMU3"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2omSHllc8JtVw7CqyMvVOr"
          },
          "href": "https://api.spotify.com/v1/albums/2omSHllc8JtVw7CqyMvVOr",
          "id": "2omSHllc8JtVw7CqyMvVOr",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e1978dd0798de7cf5d362ad3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e1978dd0798de7cf5d362ad3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e1978dd0798de7cf5d362ad3",
            "width": 64
          }],
          "name": "Saved",
          "release_date": "2018-05-18",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2omSHllc8JtVw7CqyMvVOr"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6ZitSwtBSGqj00w11GvMU3"
          },
          "href": "https://api.spotify.com/v1/artists/6ZitSwtBSGqj00w11GvMU3",
          "id": "6ZitSwtBSGqj00w11GvMU3",
          "name": "Now, Now",
          "type": "artist",
          "uri": "spotify:artist:6ZitSwtBSGqj00w11GvMU3"
        }],
        "disc_number": 1,
        "duration_ms": 193973,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1780445"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3speBfGPCck1oe47EBPnhh"
        },
        "href": "https://api.spotify.com/v1/tracks/3speBfGPCck1oe47EBPnhh",
        "id": "3speBfGPCck1oe47EBPnhh",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3opSfLvpDbZVG0ecreiL4M"
          },
          "href": "https://api.spotify.com/v1/tracks/3opSfLvpDbZVG0ecreiL4M",
          "id": "3opSfLvpDbZVG0ecreiL4M",
          "type": "track",
          "uri": "spotify:track:3opSfLvpDbZVG0ecreiL4M"
        },
        "name": "SGL",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/e1e3952d0180ba297fe5df0e63a08eaf31dfc9c5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3speBfGPCck1oe47EBPnhh"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-19T05:20:46Z",
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
        "share_id": "KPD29E5CQMSvgVyDuWcQDg",
        "share_url": "https://open.spotify.com/track/36QgwAuixhg4SpDm2QeHK8?si=KPD29E5CQMSvgVyDuWcQDg",
        "uri": "spotify:track:36QgwAuixhg4SpDm2QeHK8"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5kdYrM3h2sB1Eid5tDf6Hk"
            },
            "href": "https://api.spotify.com/v1/artists/5kdYrM3h2sB1Eid5tDf6Hk",
            "id": "5kdYrM3h2sB1Eid5tDf6Hk",
            "name": "Alex Lahey",
            "type": "artist",
            "uri": "spotify:artist:5kdYrM3h2sB1Eid5tDf6Hk"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5jLLazj9TDV3iyJyiT3mtn"
          },
          "href": "https://api.spotify.com/v1/albums/5jLLazj9TDV3iyJyiT3mtn",
          "id": "5jLLazj9TDV3iyJyiT3mtn",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736075dea7ff4a063a5b256b44",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026075dea7ff4a063a5b256b44",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516075dea7ff4a063a5b256b44",
            "width": 64
          }],
          "name": "I Love You Like a Brother",
          "release_date": "2017-10-06",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5jLLazj9TDV3iyJyiT3mtn"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5kdYrM3h2sB1Eid5tDf6Hk"
          },
          "href": "https://api.spotify.com/v1/artists/5kdYrM3h2sB1Eid5tDf6Hk",
          "id": "5kdYrM3h2sB1Eid5tDf6Hk",
          "name": "Alex Lahey",
          "type": "artist",
          "uri": "spotify:artist:5kdYrM3h2sB1Eid5tDf6Hk"
        }],
        "disc_number": 1,
        "duration_ms": 240043,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USJ5G1713608"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/36QgwAuixhg4SpDm2QeHK8"
        },
        "href": "https://api.spotify.com/v1/tracks/36QgwAuixhg4SpDm2QeHK8",
        "id": "36QgwAuixhg4SpDm2QeHK8",
        "is_local": false,
        "is_playable": true,
        "name": "Lotto in Reverse",
        "popularity": 23,
        "preview_url": "https://p.scdn.co/mp3-preview/a901935090d87bfd1460540bfd4e8763b8ed98d6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:36QgwAuixhg4SpDm2QeHK8"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-19T05:20:22Z",
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
        "share_id": "2jdcY5F3TEmpK0AFCTgq8Q",
        "share_url": "https://open.spotify.com/track/18k8IlS52uxRWObykDUZFG?si=2jdcY5F3TEmpK0AFCTgq8Q",
        "uri": "spotify:track:18k8IlS52uxRWObykDUZFG"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2sG4zTOLvjKG1PSoOyf5Ej"
            },
            "href": "https://api.spotify.com/v1/artists/2sG4zTOLvjKG1PSoOyf5Ej",
            "id": "2sG4zTOLvjKG1PSoOyf5Ej",
            "name": "Brandi Carlile",
            "type": "artist",
            "uri": "spotify:artist:2sG4zTOLvjKG1PSoOyf5Ej"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2wDKBKgco7u3V1IWEK5V8l"
          },
          "href": "https://api.spotify.com/v1/albums/2wDKBKgco7u3V1IWEK5V8l",
          "id": "2wDKBKgco7u3V1IWEK5V8l",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273227c0ccbde619139c195932c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02227c0ccbde619139c195932c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851227c0ccbde619139c195932c",
            "width": 64
          }],
          "name": "By The Way, I Forgive You",
          "release_date": "2018-02-16",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2wDKBKgco7u3V1IWEK5V8l"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2sG4zTOLvjKG1PSoOyf5Ej"
          },
          "href": "https://api.spotify.com/v1/artists/2sG4zTOLvjKG1PSoOyf5Ej",
          "id": "2sG4zTOLvjKG1PSoOyf5Ej",
          "name": "Brandi Carlile",
          "type": "artist",
          "uri": "spotify:artist:2sG4zTOLvjKG1PSoOyf5Ej"
        }],
        "disc_number": 1,
        "duration_ms": 279373,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT21704692"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/18k8IlS52uxRWObykDUZFG"
        },
        "href": "https://api.spotify.com/v1/tracks/18k8IlS52uxRWObykDUZFG",
        "id": "18k8IlS52uxRWObykDUZFG",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/37nD8NJhod8BEZ6EGYo2gT"
          },
          "href": "https://api.spotify.com/v1/tracks/37nD8NJhod8BEZ6EGYo2gT",
          "id": "37nD8NJhod8BEZ6EGYo2gT",
          "type": "track",
          "uri": "spotify:track:37nD8NJhod8BEZ6EGYo2gT"
        },
        "name": "The Joke",
        "popularity": 61,
        "preview_url": "https://p.scdn.co/mp3-preview/db595894f1db76292f88c6b583096d4ce2ec5f1c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:18k8IlS52uxRWObykDUZFG"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-16T21:18:54Z",
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
        "share_id": "Faz6tYz_T4W9ZzPCy-F4fQ",
        "share_url": "https://open.spotify.com/track/7khyKttTKfhE5f1LaKEg7T?si=Faz6tYz_T4W9ZzPCy-F4fQ",
        "uri": "spotify:track:7khyKttTKfhE5f1LaKEg7T"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6p6WlxIkeWH8yOYvciFfVl"
            },
            "href": "https://api.spotify.com/v1/artists/6p6WlxIkeWH8yOYvciFfVl",
            "id": "6p6WlxIkeWH8yOYvciFfVl",
            "name": "Typhoon",
            "type": "artist",
            "uri": "spotify:artist:6p6WlxIkeWH8yOYvciFfVl"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6Hf2FyXyPnxYavTiysFBe5"
          },
          "href": "https://api.spotify.com/v1/albums/6Hf2FyXyPnxYavTiysFBe5",
          "id": "6Hf2FyXyPnxYavTiysFBe5",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27340d389cecf294f30331295bc",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0240d389cecf294f30331295bc",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485140d389cecf294f30331295bc",
            "width": 64
          }],
          "name": "Offerings",
          "release_date": "2018-01-12",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:6Hf2FyXyPnxYavTiysFBe5"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6p6WlxIkeWH8yOYvciFfVl"
          },
          "href": "https://api.spotify.com/v1/artists/6p6WlxIkeWH8yOYvciFfVl",
          "id": "6p6WlxIkeWH8yOYvciFfVl",
          "name": "Typhoon",
          "type": "artist",
          "uri": "spotify:artist:6p6WlxIkeWH8yOYvciFfVl"
        }],
        "disc_number": 1,
        "duration_ms": 515107,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USVBM1700040"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7khyKttTKfhE5f1LaKEg7T"
        },
        "href": "https://api.spotify.com/v1/tracks/7khyKttTKfhE5f1LaKEg7T",
        "id": "7khyKttTKfhE5f1LaKEg7T",
        "is_local": false,
        "is_playable": true,
        "name": "Empiricist",
        "popularity": 37,
        "preview_url": "https://p.scdn.co/mp3-preview/202181cdf3bc10db49ccb8a190951f61a34f14a5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:7khyKttTKfhE5f1LaKEg7T"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-03T17:46:07Z",
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
        "share_id": "KZV5z-KWSbWhDqwhgCM2zw",
        "share_url": "https://open.spotify.com/track/2zNFKyvXyHDohKGNCJyJLD?si=KZV5z-KWSbWhDqwhgCM2zw",
        "uri": "spotify:track:2zNFKyvXyHDohKGNCJyJLD"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5mZC7ndY6oGMxJentRwsuV"
            },
            "href": "https://api.spotify.com/v1/artists/5mZC7ndY6oGMxJentRwsuV",
            "id": "5mZC7ndY6oGMxJentRwsuV",
            "name": "Young Fathers",
            "type": "artist",
            "uri": "spotify:artist:5mZC7ndY6oGMxJentRwsuV"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7yUQ3voihO8ErKGVGStUSR"
          },
          "href": "https://api.spotify.com/v1/albums/7yUQ3voihO8ErKGVGStUSR",
          "id": "7yUQ3voihO8ErKGVGStUSR",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bb002d58fcc45784169d26d0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bb002d58fcc45784169d26d0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bb002d58fcc45784169d26d0",
            "width": 64
          }],
          "name": "Lord",
          "release_date": "2017-10-31",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7yUQ3voihO8ErKGVGStUSR"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5mZC7ndY6oGMxJentRwsuV"
          },
          "href": "https://api.spotify.com/v1/artists/5mZC7ndY6oGMxJentRwsuV",
          "id": "5mZC7ndY6oGMxJentRwsuV",
          "name": "Young Fathers",
          "type": "artist",
          "uri": "spotify:artist:5mZC7ndY6oGMxJentRwsuV"
        }],
        "disc_number": 1,
        "duration_ms": 217120,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCFB1700496"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2zNFKyvXyHDohKGNCJyJLD"
        },
        "href": "https://api.spotify.com/v1/tracks/2zNFKyvXyHDohKGNCJyJLD",
        "id": "2zNFKyvXyHDohKGNCJyJLD",
        "is_local": false,
        "is_playable": true,
        "name": "Lord",
        "popularity": 15,
        "preview_url": "https://p.scdn.co/mp3-preview/68eb1ac0c77b7cea4654972ef0fd56d0d2514cc1?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2zNFKyvXyHDohKGNCJyJLD"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-19T05:17:17Z",
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
        "share_id": "ZIhzEw6cQ1-CrC_Ynhsp3w",
        "share_url": "https://open.spotify.com/track/6O1G9pwLEidT5QTjuZw3tL?si=ZIhzEw6cQ1-CrC_Ynhsp3w",
        "uri": "spotify:track:6O1G9pwLEidT5QTjuZw3tL"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0KydPQPUUoTNhmiHKOg5Er"
            },
            "href": "https://api.spotify.com/v1/artists/0KydPQPUUoTNhmiHKOg5Er",
            "id": "0KydPQPUUoTNhmiHKOg5Er",
            "name": "Neon Indian",
            "type": "artist",
            "uri": "spotify:artist:0KydPQPUUoTNhmiHKOg5Er"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5qA9yoz0W5eHKYOr45Rkc4"
          },
          "href": "https://api.spotify.com/v1/albums/5qA9yoz0W5eHKYOr45Rkc4",
          "id": "5qA9yoz0W5eHKYOr45Rkc4",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734c1b17f241b114091d44cf8f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024c1b17f241b114091d44cf8f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514c1b17f241b114091d44cf8f",
            "width": 64
          }],
          "name": "VEGA INTL. Night School",
          "release_date": "2015-10-16",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:5qA9yoz0W5eHKYOr45Rkc4"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0KydPQPUUoTNhmiHKOg5Er"
          },
          "href": "https://api.spotify.com/v1/artists/0KydPQPUUoTNhmiHKOg5Er",
          "id": "0KydPQPUUoTNhmiHKOg5Er",
          "name": "Neon Indian",
          "type": "artist",
          "uri": "spotify:artist:0KydPQPUUoTNhmiHKOg5Er"
        }],
        "disc_number": 1,
        "duration_ms": 315595,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USQE91500106"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6O1G9pwLEidT5QTjuZw3tL"
        },
        "href": "https://api.spotify.com/v1/tracks/6O1G9pwLEidT5QTjuZw3tL",
        "id": "6O1G9pwLEidT5QTjuZw3tL",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/76IMvBzslOpGJzeg03eLKT"
          },
          "href": "https://api.spotify.com/v1/tracks/76IMvBzslOpGJzeg03eLKT",
          "id": "76IMvBzslOpGJzeg03eLKT",
          "type": "track",
          "uri": "spotify:track:76IMvBzslOpGJzeg03eLKT"
        },
        "name": "Slumlord",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/0586ceb303b92f9709c18261d1c824db17032cf0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:6O1G9pwLEidT5QTjuZw3tL"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-13T00:53:47Z",
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
        "share_id": "57rSS1AGQSSL3pdFhnOfzA",
        "share_url": "https://open.spotify.com/track/19EnyPZhNPbRoCxAuv5pKD?si=57rSS1AGQSSL3pdFhnOfzA",
        "uri": "spotify:track:19EnyPZhNPbRoCxAuv5pKD"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/360IAlyVv4PCEVjgyMZrxK"
            },
            "href": "https://api.spotify.com/v1/artists/360IAlyVv4PCEVjgyMZrxK",
            "id": "360IAlyVv4PCEVjgyMZrxK",
            "name": "Miguel",
            "type": "artist",
            "uri": "spotify:artist:360IAlyVv4PCEVjgyMZrxK"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/05LEST8E8mkEIl2LRfUkcI"
          },
          "href": "https://api.spotify.com/v1/albums/05LEST8E8mkEIl2LRfUkcI",
          "id": "05LEST8E8mkEIl2LRfUkcI",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735e9dff10c31ac14c6c6c920d",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025e9dff10c31ac14c6c6c920d",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515e9dff10c31ac14c6c6c920d",
            "width": 64
          }],
          "name": "War & Leisure",
          "release_date": "2017-12-01",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:05LEST8E8mkEIl2LRfUkcI"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/360IAlyVv4PCEVjgyMZrxK"
          },
          "href": "https://api.spotify.com/v1/artists/360IAlyVv4PCEVjgyMZrxK",
          "id": "360IAlyVv4PCEVjgyMZrxK",
          "name": "Miguel",
          "type": "artist",
          "uri": "spotify:artist:360IAlyVv4PCEVjgyMZrxK"
        }],
        "disc_number": 1,
        "duration_ms": 281360,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC11702792"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/19EnyPZhNPbRoCxAuv5pKD"
        },
        "href": "https://api.spotify.com/v1/tracks/19EnyPZhNPbRoCxAuv5pKD",
        "id": "19EnyPZhNPbRoCxAuv5pKD",
        "is_local": false,
        "is_playable": true,
        "name": "Pineapple Skies",
        "popularity": 63,
        "preview_url": "https://p.scdn.co/mp3-preview/3c8e1975b257abf627e2be6e056a443b3600cf76?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:19EnyPZhNPbRoCxAuv5pKD"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-17T03:12:08Z",
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
        "share_id": "7BxTA8YkRJCjt7t8XoateQ",
        "share_url": "https://open.spotify.com/track/0XGvIbNObhYmxvCuovyhrq?si=7BxTA8YkRJCjt7t8XoateQ",
        "uri": "spotify:track:0XGvIbNObhYmxvCuovyhrq"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0whKRM4VqhEv6jnBoo3qK3"
            },
            "href": "https://api.spotify.com/v1/artists/0whKRM4VqhEv6jnBoo3qK3",
            "id": "0whKRM4VqhEv6jnBoo3qK3",
            "name": "Tayla",
            "type": "artist",
            "uri": "spotify:artist:0whKRM4VqhEv6jnBoo3qK3"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7GOwmJZpnmxNIT1SNWLpXS"
          },
          "href": "https://api.spotify.com/v1/albums/7GOwmJZpnmxNIT1SNWLpXS",
          "id": "7GOwmJZpnmxNIT1SNWLpXS",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735646bb4a6d9a08d53de56cd7",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025646bb4a6d9a08d53de56cd7",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515646bb4a6d9a08d53de56cd7",
            "width": 64
          }],
          "name": "Coming Back Around",
          "release_date": "2017-06-16",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7GOwmJZpnmxNIT1SNWLpXS"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0whKRM4VqhEv6jnBoo3qK3"
          },
          "href": "https://api.spotify.com/v1/artists/0whKRM4VqhEv6jnBoo3qK3",
          "id": "0whKRM4VqhEv6jnBoo3qK3",
          "name": "Tayla",
          "type": "artist",
          "uri": "spotify:artist:0whKRM4VqhEv6jnBoo3qK3"
        }],
        "disc_number": 1,
        "duration_ms": 156036,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBLFP1739212"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0XGvIbNObhYmxvCuovyhrq"
        },
        "href": "https://api.spotify.com/v1/tracks/0XGvIbNObhYmxvCuovyhrq",
        "id": "0XGvIbNObhYmxvCuovyhrq",
        "is_local": false,
        "is_playable": true,
        "name": "Coming Back Around",
        "popularity": 13,
        "preview_url": "https://p.scdn.co/mp3-preview/fe186580b4a25cd5d124aa461fa74810a472d6c9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0XGvIbNObhYmxvCuovyhrq"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-12-19T05:16:55Z",
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
        "share_id": "tMineXEVTn698Z0sjxgWew",
        "share_url": "https://open.spotify.com/track/0Hyo6aB6Gshxrq4QL3RLyC?si=tMineXEVTn698Z0sjxgWew",
        "uri": "spotify:track:0Hyo6aB6Gshxrq4QL3RLyC"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1rzpgMqxYjRQo4UmWZimFc"
            },
            "href": "https://api.spotify.com/v1/artists/1rzpgMqxYjRQo4UmWZimFc",
            "id": "1rzpgMqxYjRQo4UmWZimFc",
            "name": "Chad Valley",
            "type": "artist",
            "uri": "spotify:artist:1rzpgMqxYjRQo4UmWZimFc"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4C7XPt9cWydPljHWmTjx7x"
          },
          "href": "https://api.spotify.com/v1/albums/4C7XPt9cWydPljHWmTjx7x",
          "id": "4C7XPt9cWydPljHWmTjx7x",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273704ee2ff3b6a6856b1caaab1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02704ee2ff3b6a6856b1caaab1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851704ee2ff3b6a6856b1caaab1",
            "width": 64
          }],
          "name": "Equatorial Ultravox Addendum",
          "release_date": "2017-03-24",
          "release_date_precision": "day",
          "total_tracks": 3,
          "type": "album",
          "uri": "spotify:album:4C7XPt9cWydPljHWmTjx7x"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1rzpgMqxYjRQo4UmWZimFc"
          },
          "href": "https://api.spotify.com/v1/artists/1rzpgMqxYjRQo4UmWZimFc",
          "id": "1rzpgMqxYjRQo4UmWZimFc",
          "name": "Chad Valley",
          "type": "artist",
          "uri": "spotify:artist:1rzpgMqxYjRQo4UmWZimFc"
        }],
        "disc_number": 1,
        "duration_ms": 331034,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USA2B1701069"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0Hyo6aB6Gshxrq4QL3RLyC"
        },
        "href": "https://api.spotify.com/v1/tracks/0Hyo6aB6Gshxrq4QL3RLyC",
        "id": "0Hyo6aB6Gshxrq4QL3RLyC",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7k3NqJV8iR7Qd8nehy1mcP"
          },
          "href": "https://api.spotify.com/v1/tracks/7k3NqJV8iR7Qd8nehy1mcP",
          "id": "7k3NqJV8iR7Qd8nehy1mcP",
          "type": "track",
          "uri": "spotify:track:7k3NqJV8iR7Qd8nehy1mcP"
        },
        "name": "Shell Suite (Cashmere Cat Remix)",
        "popularity": 7,
        "preview_url": "https://p.scdn.co/mp3-preview/5ee0cbfa7d4059726bdb4905b25faaaede386497?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:0Hyo6aB6Gshxrq4QL3RLyC"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-01-21T22:03:46Z",
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
        "share_id": "p5f9KnlxRtiIWNpepPI-FA",
        "share_url": "https://open.spotify.com/track/3R2waHlP619Hq1bCgVrJqv?si=p5f9KnlxRtiIWNpepPI-FA",
        "uri": "spotify:track:3R2waHlP619Hq1bCgVrJqv"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/68UA9076k6lewTq2slA1FN"
            },
            "href": "https://api.spotify.com/v1/artists/68UA9076k6lewTq2slA1FN",
            "id": "68UA9076k6lewTq2slA1FN",
            "name": "Katie Von Schleicher",
            "type": "artist",
            "uri": "spotify:artist:68UA9076k6lewTq2slA1FN"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6rgVqPqG0Izn80G6jmKAIP"
          },
          "href": "https://api.spotify.com/v1/albums/6rgVqPqG0Izn80G6jmKAIP",
          "id": "6rgVqPqG0Izn80G6jmKAIP",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2733079abfb36d7bb5fa5fc2461",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e023079abfb36d7bb5fa5fc2461",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048513079abfb36d7bb5fa5fc2461",
            "width": 64
          }],
          "name": "Bleaksploitation",
          "release_date": "2015-11-13",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:6rgVqPqG0Izn80G6jmKAIP"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/68UA9076k6lewTq2slA1FN"
          },
          "href": "https://api.spotify.com/v1/artists/68UA9076k6lewTq2slA1FN",
          "id": "68UA9076k6lewTq2slA1FN",
          "name": "Katie Von Schleicher",
          "type": "artist",
          "uri": "spotify:artist:68UA9076k6lewTq2slA1FN"
        }],
        "disc_number": 1,
        "duration_ms": 192360,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USCPT1510270"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3R2waHlP619Hq1bCgVrJqv"
        },
        "href": "https://api.spotify.com/v1/tracks/3R2waHlP619Hq1bCgVrJqv",
        "id": "3R2waHlP619Hq1bCgVrJqv",
        "is_local": false,
        "is_playable": true,
        "name": "Baby Don't Go",
        "popularity": 28,
        "preview_url": "https://p.scdn.co/mp3-preview/4e7ab3c362b8f698078cf1650d9b6a403936cf85?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3R2waHlP619Hq1bCgVrJqv"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 19
  },
  "type": "playlist",
  "uri": "spotify:playlist:5mCfJFbLtSKQPSGLkGRJD5"
};

/***/ })

/******/ });