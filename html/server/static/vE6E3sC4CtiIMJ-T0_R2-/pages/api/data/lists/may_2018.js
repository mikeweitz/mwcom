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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7/hV");


/***/ }),

/***/ "7/hV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/04QRyhSXBaqa6v0oOrOSDp"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/04QRyhSXBaqa6v0oOrOSDp?type=track,episode",
  "id": "04QRyhSXBaqa6v0oOrOSDp",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b273225a9ce3fef1f67728df402fab67616d0000b27322874c7fad7dee046bd69594ab67616d0000b273bcfbb2fe16192bffc55ea616ab67616d0000b273d61cf5c77edcbb6d35e2a459",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b273225a9ce3fef1f67728df402fab67616d0000b27322874c7fad7dee046bd69594ab67616d0000b273bcfbb2fe16192bffc55ea616ab67616d0000b273d61cf5c77edcbb6d35e2a459",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b273225a9ce3fef1f67728df402fab67616d0000b27322874c7fad7dee046bd69594ab67616d0000b273bcfbb2fe16192bffc55ea616ab67616d0000b273d61cf5c77edcbb6d35e2a459",
    "width": 60
  }],
  "name": "May 2018",
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
  "public": true,
  "sharing_info": {
    "share_id": "-UcT_zDCQRGuitYBYgUysg",
    "share_url": "https://open.spotify.com/playlist/04QRyhSXBaqa6v0oOrOSDp?si=-UcT_zDCQRGuitYBYgUysg",
    "uri": "spotify:playlist:04QRyhSXBaqa6v0oOrOSDp"
  },
  "snapshot_id": "MTM2LDhiM2QzMTQxMDkxM2Y2NDAzMjU0ZmZlOGYyY2I5YmE2MjJkNzAzNjU=",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/04QRyhSXBaqa6v0oOrOSDp/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2018-04-09T03:19:16Z",
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
        "share_id": "4xoKeQp5QSWZHrXQRdkrQA",
        "share_url": "https://open.spotify.com/track/3Q4VH4dJgZS9r4gI6yHLY5?si=4xoKeQp5QSWZHrXQRdkrQA",
        "uri": "spotify:track:3Q4VH4dJgZS9r4gI6yHLY5"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3d7MqowTZa2bC5iy1JXLLt"
            },
            "href": "https://api.spotify.com/v1/artists/3d7MqowTZa2bC5iy1JXLLt",
            "id": "3d7MqowTZa2bC5iy1JXLLt",
            "name": "Hatchie",
            "type": "artist",
            "uri": "spotify:artist:3d7MqowTZa2bC5iy1JXLLt"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6Wzwhd5VTklhTkqQPooIla"
          },
          "href": "https://api.spotify.com/v1/albums/6Wzwhd5VTklhTkqQPooIla",
          "id": "6Wzwhd5VTklhTkqQPooIla",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d61cf5c77edcbb6d35e2a459",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d61cf5c77edcbb6d35e2a459",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d61cf5c77edcbb6d35e2a459",
            "width": 64
          }],
          "name": "Sugar & Spice",
          "release_date": "2018-05-25",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:6Wzwhd5VTklhTkqQPooIla"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3d7MqowTZa2bC5iy1JXLLt"
          },
          "href": "https://api.spotify.com/v1/artists/3d7MqowTZa2bC5iy1JXLLt",
          "id": "3d7MqowTZa2bC5iy1JXLLt",
          "name": "Hatchie",
          "type": "artist",
          "uri": "spotify:artist:3d7MqowTZa2bC5iy1JXLLt"
        }],
        "disc_number": 1,
        "duration_ms": 188869,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "AULI01815260"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3Q4VH4dJgZS9r4gI6yHLY5"
        },
        "href": "https://api.spotify.com/v1/tracks/3Q4VH4dJgZS9r4gI6yHLY5",
        "id": "3Q4VH4dJgZS9r4gI6yHLY5",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3G6cANslNRvIFu9CoA1YpW"
          },
          "href": "https://api.spotify.com/v1/tracks/3G6cANslNRvIFu9CoA1YpW",
          "id": "3G6cANslNRvIFu9CoA1YpW",
          "type": "track",
          "uri": "spotify:track:3G6cANslNRvIFu9CoA1YpW"
        },
        "name": "Sugar & Spice",
        "popularity": 29,
        "preview_url": "https://p.scdn.co/mp3-preview/d42d1fe0b12e54fede076b86f0e7679a379c9136?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:3Q4VH4dJgZS9r4gI6yHLY5"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-09T03:19:59Z",
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
        "share_id": "jeFnTLzKTLeu5coZBlBCfw",
        "share_url": "https://open.spotify.com/track/0sA2tDrSu62O7nYAGjB27Z?si=jeFnTLzKTLeu5coZBlBCfw",
        "uri": "spotify:track:0sA2tDrSu62O7nYAGjB27Z"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0wwBxT2qVH327KlBJbwMEP"
            },
            "href": "https://api.spotify.com/v1/artists/0wwBxT2qVH327KlBJbwMEP",
            "id": "0wwBxT2qVH327KlBJbwMEP",
            "name": "The Frightnrs",
            "type": "artist",
            "uri": "spotify:artist:0wwBxT2qVH327KlBJbwMEP"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2QjhLePTnaWv2eBUbCwceA"
          },
          "href": "https://api.spotify.com/v1/albums/2QjhLePTnaWv2eBUbCwceA",
          "id": "2QjhLePTnaWv2eBUbCwceA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273225a9ce3fef1f67728df402f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02225a9ce3fef1f67728df402f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851225a9ce3fef1f67728df402f",
            "width": 64
          }],
          "name": "Nothing More to Say",
          "release_date": "2016-09-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2QjhLePTnaWv2eBUbCwceA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0wwBxT2qVH327KlBJbwMEP"
          },
          "href": "https://api.spotify.com/v1/artists/0wwBxT2qVH327KlBJbwMEP",
          "id": "0wwBxT2qVH327KlBJbwMEP",
          "name": "The Frightnrs",
          "type": "artist",
          "uri": "spotify:artist:0wwBxT2qVH327KlBJbwMEP"
        }],
        "disc_number": 1,
        "duration_ms": 169133,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US4GZ1604206"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0sA2tDrSu62O7nYAGjB27Z"
        },
        "href": "https://api.spotify.com/v1/tracks/0sA2tDrSu62O7nYAGjB27Z",
        "id": "0sA2tDrSu62O7nYAGjB27Z",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0HDzbI3qsUebFPY2NsWIOJ"
          },
          "href": "https://api.spotify.com/v1/tracks/0HDzbI3qsUebFPY2NsWIOJ",
          "id": "0HDzbI3qsUebFPY2NsWIOJ",
          "type": "track",
          "uri": "spotify:track:0HDzbI3qsUebFPY2NsWIOJ"
        },
        "name": "Trouble in Here",
        "popularity": 28,
        "preview_url": "https://p.scdn.co/mp3-preview/d53665434c7fcaeb2d2ceacb0b88c66f5d4f720e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:0sA2tDrSu62O7nYAGjB27Z"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-09T03:20:45Z",
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
        "share_id": "s6LUAWmLRyaNvQ4VdpcmWw",
        "share_url": "https://open.spotify.com/track/4JXXyXK12F0LGuYyxI1DGv?si=s6LUAWmLRyaNvQ4VdpcmWw",
        "uri": "spotify:track:4JXXyXK12F0LGuYyxI1DGv"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3qnGvpP8Yth1AqSBMqON5x"
            },
            "href": "https://api.spotify.com/v1/artists/3qnGvpP8Yth1AqSBMqON5x",
            "id": "3qnGvpP8Yth1AqSBMqON5x",
            "name": "Leon Bridges",
            "type": "artist",
            "uri": "spotify:artist:3qnGvpP8Yth1AqSBMqON5x"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7Csuf8rJjBOP4GK11pPCw7"
          },
          "href": "https://api.spotify.com/v1/albums/7Csuf8rJjBOP4GK11pPCw7",
          "id": "7Csuf8rJjBOP4GK11pPCw7",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bcfbb2fe16192bffc55ea616",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bcfbb2fe16192bffc55ea616",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bcfbb2fe16192bffc55ea616",
            "width": 64
          }],
          "name": "Bet Ain't Worth the Hand / Bad Bad News",
          "release_date": "2018-03-13",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:7Csuf8rJjBOP4GK11pPCw7"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3qnGvpP8Yth1AqSBMqON5x"
          },
          "href": "https://api.spotify.com/v1/artists/3qnGvpP8Yth1AqSBMqON5x",
          "id": "3qnGvpP8Yth1AqSBMqON5x",
          "name": "Leon Bridges",
          "type": "artist",
          "uri": "spotify:artist:3qnGvpP8Yth1AqSBMqON5x"
        }],
        "disc_number": 1,
        "duration_ms": 185893,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM11800490"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4JXXyXK12F0LGuYyxI1DGv"
        },
        "href": "https://api.spotify.com/v1/tracks/4JXXyXK12F0LGuYyxI1DGv",
        "id": "4JXXyXK12F0LGuYyxI1DGv",
        "is_local": false,
        "is_playable": true,
        "name": "Bet Ain't Worth the Hand",
        "popularity": 39,
        "preview_url": "https://p.scdn.co/mp3-preview/557bf06d8bf5983de9f540425ffd5dba18e07962?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4JXXyXK12F0LGuYyxI1DGv"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-23T19:21:39Z",
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
        "share_id": "LQ4E4D2NS4uf8x2ylk_MKA",
        "share_url": "https://open.spotify.com/track/7obb4s6A7gf0Lc2AGxodMy?si=LQ4E4D2NS4uf8x2ylk_MKA",
        "uri": "spotify:track:7obb4s6A7gf0Lc2AGxodMy"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1SQRv42e4PjEYfPhS0Tk9E"
            },
            "href": "https://api.spotify.com/v1/artists/1SQRv42e4PjEYfPhS0Tk9E",
            "id": "1SQRv42e4PjEYfPhS0Tk9E",
            "name": "The Kinks",
            "type": "artist",
            "uri": "spotify:artist:1SQRv42e4PjEYfPhS0Tk9E"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4jaLfcNpIrOgcPyXuuiHTi"
          },
          "href": "https://api.spotify.com/v1/albums/4jaLfcNpIrOgcPyXuuiHTi",
          "id": "4jaLfcNpIrOgcPyXuuiHTi",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27322874c7fad7dee046bd69594",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0222874c7fad7dee046bd69594",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485122874c7fad7dee046bd69594",
            "width": 64
          }],
          "name": "Lola Versus Powerman and the Moneygoround, Pt. One",
          "release_date": "1970-11-27",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:4jaLfcNpIrOgcPyXuuiHTi"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1SQRv42e4PjEYfPhS0Tk9E"
          },
          "href": "https://api.spotify.com/v1/artists/1SQRv42e4PjEYfPhS0Tk9E",
          "id": "1SQRv42e4PjEYfPhS0Tk9E",
          "name": "The Kinks",
          "type": "artist",
          "uri": "spotify:artist:1SQRv42e4PjEYfPhS0Tk9E"
        }],
        "disc_number": 1,
        "duration_ms": 198373,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAJE7000006"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7obb4s6A7gf0Lc2AGxodMy"
        },
        "href": "https://api.spotify.com/v1/tracks/7obb4s6A7gf0Lc2AGxodMy",
        "id": "7obb4s6A7gf0Lc2AGxodMy",
        "is_local": false,
        "is_playable": true,
        "name": "Strangers",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/f114bce3d424f2fbaba0fe5688ddb3d0dac786db?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:7obb4s6A7gf0Lc2AGxodMy"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-05-04T00:18:49Z",
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
        "share_id": "fsS8FO-9QSeDGLsaa9zACg",
        "share_url": "https://open.spotify.com/track/33DLdGdo8h58yo0oucWsHT?si=fsS8FO-9QSeDGLsaa9zACg",
        "uri": "spotify:track:33DLdGdo8h58yo0oucWsHT"
      },
      "track": {
        "album": {
          "album_type": "album",
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
            "spotify": "https://open.spotify.com/album/7ivgZAxvcUXk33Jk4Hi7On"
          },
          "href": "https://api.spotify.com/v1/albums/7ivgZAxvcUXk33Jk4Hi7On",
          "id": "7ivgZAxvcUXk33Jk4Hi7On",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732d0fb302fc70db48c971b3dc",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022d0fb302fc70db48c971b3dc",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512d0fb302fc70db48c971b3dc",
            "width": 64
          }],
          "name": "LA DIVINE",
          "release_date": "2017-04-07",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:7ivgZAxvcUXk33Jk4Hi7On"
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
        "duration_ms": 223400,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUG11700006"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/33DLdGdo8h58yo0oucWsHT"
        },
        "href": "https://api.spotify.com/v1/tracks/33DLdGdo8h58yo0oucWsHT",
        "id": "33DLdGdo8h58yo0oucWsHT",
        "is_local": false,
        "is_playable": true,
        "name": "Can We Hang On ?",
        "popularity": 50,
        "preview_url": "https://p.scdn.co/mp3-preview/6fea375ff7e6f6b15a806b64abe269ad95c355f0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:33DLdGdo8h58yo0oucWsHT"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-05-01T17:29:00Z",
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
        "share_id": "b6--LYAHSP6HVwXdnzGxgA",
        "share_url": "https://open.spotify.com/track/7COxY38TB5HTeXRAucOEW4?si=b6--LYAHSP6HVwXdnzGxgA",
        "uri": "spotify:track:7COxY38TB5HTeXRAucOEW4"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/23NIwARd4vPbxt3wwNnJ6k"
            },
            "href": "https://api.spotify.com/v1/artists/23NIwARd4vPbxt3wwNnJ6k",
            "id": "23NIwARd4vPbxt3wwNnJ6k",
            "name": "Parquet Courts",
            "type": "artist",
            "uri": "spotify:artist:23NIwARd4vPbxt3wwNnJ6k"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5uTI2HcpAywDP8Vo1DpJta"
          },
          "href": "https://api.spotify.com/v1/albums/5uTI2HcpAywDP8Vo1DpJta",
          "id": "5uTI2HcpAywDP8Vo1DpJta",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731317be574cc7f4cad6eb4f27",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021317be574cc7f4cad6eb4f27",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511317be574cc7f4cad6eb4f27",
            "width": 64
          }],
          "name": "Wide Awake!",
          "release_date": "2018-05-18",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:5uTI2HcpAywDP8Vo1DpJta"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/23NIwARd4vPbxt3wwNnJ6k"
          },
          "href": "https://api.spotify.com/v1/artists/23NIwARd4vPbxt3wwNnJ6k",
          "id": "23NIwARd4vPbxt3wwNnJ6k",
          "name": "Parquet Courts",
          "type": "artist",
          "uri": "spotify:artist:23NIwARd4vPbxt3wwNnJ6k"
        }],
        "disc_number": 1,
        "duration_ms": 158906,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCVZ1700227"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7COxY38TB5HTeXRAucOEW4"
        },
        "href": "https://api.spotify.com/v1/tracks/7COxY38TB5HTeXRAucOEW4",
        "id": "7COxY38TB5HTeXRAucOEW4",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4zKNNVsZ6GOzhTzXHwkMgp"
          },
          "href": "https://api.spotify.com/v1/tracks/4zKNNVsZ6GOzhTzXHwkMgp",
          "id": "4zKNNVsZ6GOzhTzXHwkMgp",
          "type": "track",
          "uri": "spotify:track:4zKNNVsZ6GOzhTzXHwkMgp"
        },
        "name": "Wide Awake",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/0a63992fdbb51736b93482043909c0cc3beccf83?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:7COxY38TB5HTeXRAucOEW4"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-05-04T00:25:17Z",
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
        "share_id": "SgqLYD6IRpKYR82E9ntzPQ",
        "share_url": "https://open.spotify.com/track/5mIOsPuQdXchVY0jB5NO9Q?si=SgqLYD6IRpKYR82E9ntzPQ",
        "uri": "spotify:track:5mIOsPuQdXchVY0jB5NO9Q"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag"
            },
            "href": "https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag",
            "id": "3l0CmX0FuQjFxr8SK7Vqag",
            "name": "Clairo",
            "type": "artist",
            "uri": "spotify:artist:3l0CmX0FuQjFxr8SK7Vqag"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7E5bHNtTN25JAw8vJALDz9"
          },
          "href": "https://api.spotify.com/v1/albums/7E5bHNtTN25JAw8vJALDz9",
          "id": "7E5bHNtTN25JAw8vJALDz9",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27371179dd3ac3cba1d14920469",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0271179dd3ac3cba1d14920469",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485171179dd3ac3cba1d14920469",
            "width": 64
          }],
          "name": "4EVER",
          "release_date": "2018-04-27",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7E5bHNtTN25JAw8vJALDz9"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag"
          },
          "href": "https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag",
          "id": "3l0CmX0FuQjFxr8SK7Vqag",
          "name": "Clairo",
          "type": "artist",
          "uri": "spotify:artist:3l0CmX0FuQjFxr8SK7Vqag"
        }],
        "disc_number": 1,
        "duration_ms": 159595,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US4HB1800003"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5mIOsPuQdXchVY0jB5NO9Q"
        },
        "href": "https://api.spotify.com/v1/tracks/5mIOsPuQdXchVY0jB5NO9Q",
        "id": "5mIOsPuQdXchVY0jB5NO9Q",
        "is_local": false,
        "is_playable": true,
        "name": "4EVER",
        "popularity": 72,
        "preview_url": "https://p.scdn.co/mp3-preview/4a8556d3a4f9d1d6dfc44ef31f87900b63c781c5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5mIOsPuQdXchVY0jB5NO9Q"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-23T19:28:37Z",
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
        "share_id": "o_fQs8R4Rq6efEntidEcIg",
        "share_url": "https://open.spotify.com/track/7qPdc4CH1GGZaHBImyoZ69?si=o_fQs8R4Rq6efEntidEcIg",
        "uri": "spotify:track:7qPdc4CH1GGZaHBImyoZ69"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5J81VungUjSVHxlPpTI9KG"
            },
            "href": "https://api.spotify.com/v1/artists/5J81VungUjSVHxlPpTI9KG",
            "id": "5J81VungUjSVHxlPpTI9KG",
            "name": "Mild High Club",
            "type": "artist",
            "uri": "spotify:artist:5J81VungUjSVHxlPpTI9KG"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1qMDN9zRQreK81cJ9G1hed"
          },
          "href": "https://api.spotify.com/v1/albums/1qMDN9zRQreK81cJ9G1hed",
          "id": "1qMDN9zRQreK81cJ9G1hed",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f21a3ad00e4ba69911d61bcc",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f21a3ad00e4ba69911d61bcc",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f21a3ad00e4ba69911d61bcc",
            "width": 64
          }],
          "name": "Skiptracing",
          "release_date": "2016-08-26",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:1qMDN9zRQreK81cJ9G1hed"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5J81VungUjSVHxlPpTI9KG"
          },
          "href": "https://api.spotify.com/v1/artists/5J81VungUjSVHxlPpTI9KG",
          "id": "5J81VungUjSVHxlPpTI9KG",
          "name": "Mild High Club",
          "type": "artist",
          "uri": "spotify:artist:5J81VungUjSVHxlPpTI9KG"
        }],
        "disc_number": 1,
        "duration_ms": 152824,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2S71673004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7qPdc4CH1GGZaHBImyoZ69"
        },
        "href": "https://api.spotify.com/v1/tracks/7qPdc4CH1GGZaHBImyoZ69",
        "id": "7qPdc4CH1GGZaHBImyoZ69",
        "is_local": false,
        "is_playable": true,
        "name": "Tesselation",
        "popularity": 60,
        "preview_url": "https://p.scdn.co/mp3-preview/f7e61e4cb275cf9b957646f7bf7cda30bac2d192?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:7qPdc4CH1GGZaHBImyoZ69"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-23T19:30:34Z",
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
        "share_id": "O0d9tw3NTO60txKa3G0GUA",
        "share_url": "https://open.spotify.com/track/5wv2XK6ms7KBBVDD1cOwlx?si=O0d9tw3NTO60txKa3G0GUA",
        "uri": "spotify:track:5wv2XK6ms7KBBVDD1cOwlx"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/77mJc3M7ZT5oOVM7gNdXim"
            },
            "href": "https://api.spotify.com/v1/artists/77mJc3M7ZT5oOVM7gNdXim",
            "id": "77mJc3M7ZT5oOVM7gNdXim",
            "name": "Her's",
            "type": "artist",
            "uri": "spotify:artist:77mJc3M7ZT5oOVM7gNdXim"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/03gwRG5IvkStFnjPmgjElw"
          },
          "href": "https://api.spotify.com/v1/albums/03gwRG5IvkStFnjPmgjElw",
          "id": "03gwRG5IvkStFnjPmgjElw",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273fc1bc1cf80c431c2bdbde601",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02fc1bc1cf80c431c2bdbde601",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851fc1bc1cf80c431c2bdbde601",
            "width": 64
          }],
          "name": "Songs of Her's",
          "release_date": "2017-05-12",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:03gwRG5IvkStFnjPmgjElw"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/77mJc3M7ZT5oOVM7gNdXim"
          },
          "href": "https://api.spotify.com/v1/artists/77mJc3M7ZT5oOVM7gNdXim",
          "id": "77mJc3M7ZT5oOVM7gNdXim",
          "name": "Her's",
          "type": "artist",
          "uri": "spotify:artist:77mJc3M7ZT5oOVM7gNdXim"
        }],
        "disc_number": 1,
        "duration_ms": 375656,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBYEJ1100273"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5wv2XK6ms7KBBVDD1cOwlx"
        },
        "href": "https://api.spotify.com/v1/tracks/5wv2XK6ms7KBBVDD1cOwlx",
        "id": "5wv2XK6ms7KBBVDD1cOwlx",
        "is_local": false,
        "is_playable": true,
        "name": "Cool with You",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/a8c127878bbffe15d90b7bde4865e247ef9b81a4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5wv2XK6ms7KBBVDD1cOwlx"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-06-18T19:16:20Z",
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
        "share_id": "ZXBHmentTB-dYzjQQlGgvg",
        "share_url": "https://open.spotify.com/track/5Hxu2sjCuLzxmOmgdsLZ4m?si=ZXBHmentTB-dYzjQQlGgvg",
        "uri": "spotify:track:5Hxu2sjCuLzxmOmgdsLZ4m"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
            },
            "href": "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
            "id": "57kIMCLPgkzQlXjblX7XXP",
            "name": "Phosphorescent",
            "type": "artist",
            "uri": "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/19C3Ferv8ZiWTOpCfxN2S1"
          },
          "href": "https://api.spotify.com/v1/albums/19C3Ferv8ZiWTOpCfxN2S1",
          "id": "19C3Ferv8ZiWTOpCfxN2S1",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737868c54c6323e3ad935e4dfb",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027868c54c6323e3ad935e4dfb",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517868c54c6323e3ad935e4dfb",
            "width": 64
          }],
          "name": "Muchacho De Lujo (Deluxe Edition)",
          "release_date": "2013-10-29",
          "release_date_precision": "day",
          "total_tracks": 22,
          "type": "album",
          "uri": "spotify:album:19C3Ferv8ZiWTOpCfxN2S1"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
          },
          "href": "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
          "id": "57kIMCLPgkzQlXjblX7XXP",
          "name": "Phosphorescent",
          "type": "artist",
          "uri": "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
        }],
        "disc_number": 1,
        "duration_ms": 224906,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USJ5G1305003"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5Hxu2sjCuLzxmOmgdsLZ4m"
        },
        "href": "https://api.spotify.com/v1/tracks/5Hxu2sjCuLzxmOmgdsLZ4m",
        "id": "5Hxu2sjCuLzxmOmgdsLZ4m",
        "is_local": false,
        "is_playable": true,
        "name": "Ride On / Right On",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/b95cc866732f1bd1803804eaa4e8845f99f7d6e9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:5Hxu2sjCuLzxmOmgdsLZ4m"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-06-14T16:51:56Z",
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
        "share_id": "46uTqw1RQZWldK1pk3b-zw",
        "share_url": "https://open.spotify.com/track/2U2C5jWWmcIW0ub7AjqqY9?si=46uTqw1RQZWldK1pk3b-zw",
        "uri": "spotify:track:2U2C5jWWmcIW0ub7AjqqY9"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1xVcjJ5YsYOClO2Unt3Rm8"
            },
            "href": "https://api.spotify.com/v1/artists/1xVcjJ5YsYOClO2Unt3Rm8",
            "id": "1xVcjJ5YsYOClO2Unt3Rm8",
            "name": "Sunflower Bean",
            "type": "artist",
            "uri": "spotify:artist:1xVcjJ5YsYOClO2Unt3Rm8"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5dHOr4rG0cJbeAX2hcJ4G6"
          },
          "href": "https://api.spotify.com/v1/albums/5dHOr4rG0cJbeAX2hcJ4G6",
          "id": "5dHOr4rG0cJbeAX2hcJ4G6",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a9f76b6557fce970cb6b8fbe",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a9f76b6557fce970cb6b8fbe",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a9f76b6557fce970cb6b8fbe",
            "width": 64
          }],
          "name": "Twentytwo in Blue",
          "release_date": "2018-03-23",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:5dHOr4rG0cJbeAX2hcJ4G6"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1xVcjJ5YsYOClO2Unt3Rm8"
          },
          "href": "https://api.spotify.com/v1/artists/1xVcjJ5YsYOClO2Unt3Rm8",
          "id": "1xVcjJ5YsYOClO2Unt3Rm8",
          "name": "Sunflower Bean",
          "type": "artist",
          "uri": "spotify:artist:1xVcjJ5YsYOClO2Unt3Rm8"
        }],
        "disc_number": 1,
        "duration_ms": 259000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USQE91500471"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2U2C5jWWmcIW0ub7AjqqY9"
        },
        "href": "https://api.spotify.com/v1/tracks/2U2C5jWWmcIW0ub7AjqqY9",
        "id": "2U2C5jWWmcIW0ub7AjqqY9",
        "is_local": false,
        "is_playable": true,
        "name": "Burn It",
        "popularity": 21,
        "preview_url": "https://p.scdn.co/mp3-preview/26afbd0f7713266777369aaec57d03efa4343095?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2U2C5jWWmcIW0ub7AjqqY9"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-10T18:33:00Z",
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
        "share_id": "E1va_iF5RCGgrWx1YzzYpg",
        "share_url": "https://open.spotify.com/track/6fN2KAp5wJvZVpOrSXsnQr?si=E1va_iF5RCGgrWx1YzzYpg",
        "uri": "spotify:track:6fN2KAp5wJvZVpOrSXsnQr"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7BrrcOKe9ymT5md3Up7BRz"
            },
            "href": "https://api.spotify.com/v1/artists/7BrrcOKe9ymT5md3Up7BRz",
            "id": "7BrrcOKe9ymT5md3Up7BRz",
            "name": "Spooky Mansion",
            "type": "artist",
            "uri": "spotify:artist:7BrrcOKe9ymT5md3Up7BRz"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/15nXxasdD73enV3hPiXwCD"
          },
          "href": "https://api.spotify.com/v1/albums/15nXxasdD73enV3hPiXwCD",
          "id": "15nXxasdD73enV3hPiXwCD",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f6a37b6ab9d186561ce06664",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f6a37b6ab9d186561ce06664",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f6a37b6ab9d186561ce06664",
            "width": 64
          }],
          "name": "I'm the Moon, You're the Wave",
          "release_date": "2019-08-12",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:15nXxasdD73enV3hPiXwCD"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7BrrcOKe9ymT5md3Up7BRz"
          },
          "href": "https://api.spotify.com/v1/artists/7BrrcOKe9ymT5md3Up7BRz",
          "id": "7BrrcOKe9ymT5md3Up7BRz",
          "name": "Spooky Mansion",
          "type": "artist",
          "uri": "spotify:artist:7BrrcOKe9ymT5md3Up7BRz"
        }],
        "disc_number": 1,
        "duration_ms": 160000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZ4JJ1789664"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6fN2KAp5wJvZVpOrSXsnQr"
        },
        "href": "https://api.spotify.com/v1/tracks/6fN2KAp5wJvZVpOrSXsnQr",
        "id": "6fN2KAp5wJvZVpOrSXsnQr",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1tdmrgGO5H0zWRkNqT6UT4"
          },
          "href": "https://api.spotify.com/v1/tracks/1tdmrgGO5H0zWRkNqT6UT4",
          "id": "1tdmrgGO5H0zWRkNqT6UT4",
          "type": "track",
          "uri": "spotify:track:1tdmrgGO5H0zWRkNqT6UT4"
        },
        "name": "I'm the Moon",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/a08995f1034a02436aefde048a84f6b8ec8b86dc?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6fN2KAp5wJvZVpOrSXsnQr"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-23T19:26:17Z",
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
        "share_id": "J2VypIHiTXmO-y4f1edPpg",
        "share_url": "https://open.spotify.com/track/0OMEnGAKSH3BLNeCJWCZjX?si=J2VypIHiTXmO-y4f1edPpg",
        "uri": "spotify:track:0OMEnGAKSH3BLNeCJWCZjX"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2kMzxA8edU05hvMFU493zJ"
            },
            "href": "https://api.spotify.com/v1/artists/2kMzxA8edU05hvMFU493zJ",
            "id": "2kMzxA8edU05hvMFU493zJ",
            "name": "Good Morning",
            "type": "artist",
            "uri": "spotify:artist:2kMzxA8edU05hvMFU493zJ"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/633RQso32yJ5XTFv0TURtL"
          },
          "href": "https://api.spotify.com/v1/albums/633RQso32yJ5XTFv0TURtL",
          "id": "633RQso32yJ5XTFv0TURtL",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2739fc55877d85d7b53f9b37637",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e029fc55877d85d7b53f9b37637",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048519fc55877d85d7b53f9b37637",
            "width": 64
          }],
          "name": "Shawcross",
          "release_date": "2014-11-14",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:633RQso32yJ5XTFv0TURtL"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2kMzxA8edU05hvMFU493zJ"
          },
          "href": "https://api.spotify.com/v1/artists/2kMzxA8edU05hvMFU493zJ",
          "id": "2kMzxA8edU05hvMFU493zJ",
          "name": "Good Morning",
          "type": "artist",
          "uri": "spotify:artist:2kMzxA8edU05hvMFU493zJ"
        }],
        "disc_number": 1,
        "duration_ms": 133128,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "UST8K1403966"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0OMEnGAKSH3BLNeCJWCZjX"
        },
        "href": "https://api.spotify.com/v1/tracks/0OMEnGAKSH3BLNeCJWCZjX",
        "id": "0OMEnGAKSH3BLNeCJWCZjX",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/67LKZcv1J2Yj4pk5UIuFQW"
          },
          "href": "https://api.spotify.com/v1/tracks/67LKZcv1J2Yj4pk5UIuFQW",
          "id": "67LKZcv1J2Yj4pk5UIuFQW",
          "type": "track",
          "uri": "spotify:track:67LKZcv1J2Yj4pk5UIuFQW"
        },
        "name": "Warned You",
        "popularity": 63,
        "preview_url": "https://p.scdn.co/mp3-preview/6b211a110220ed3e9cd26b7faa68bfc0c5ec2788?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:0OMEnGAKSH3BLNeCJWCZjX"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-06-15T02:21:52Z",
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
        "share_id": "LRzgaNSCRQy2RXPdUhs0vA",
        "share_url": "https://open.spotify.com/track/59En1uD1dGwkPQhCyheOn7?si=LRzgaNSCRQy2RXPdUhs0vA",
        "uri": "spotify:track:59En1uD1dGwkPQhCyheOn7"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6RCXvdRNRMP9lsp6a1bY2U"
            },
            "href": "https://api.spotify.com/v1/artists/6RCXvdRNRMP9lsp6a1bY2U",
            "id": "6RCXvdRNRMP9lsp6a1bY2U",
            "name": "Heaven",
            "type": "artist",
            "uri": "spotify:artist:6RCXvdRNRMP9lsp6a1bY2U"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/17UjlEyCayW7JVgsI1Cd8F"
          },
          "href": "https://api.spotify.com/v1/albums/17UjlEyCayW7JVgsI1Cd8F",
          "id": "17UjlEyCayW7JVgsI1Cd8F",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c1462fbd3fd1363fcf9952d1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c1462fbd3fd1363fcf9952d1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c1462fbd3fd1363fcf9952d1",
            "width": 64
          }],
          "name": "Lonesome Town",
          "release_date": "2017-05-10",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:17UjlEyCayW7JVgsI1Cd8F"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6RCXvdRNRMP9lsp6a1bY2U"
          },
          "href": "https://api.spotify.com/v1/artists/6RCXvdRNRMP9lsp6a1bY2U",
          "id": "6RCXvdRNRMP9lsp6a1bY2U",
          "name": "Heaven",
          "type": "artist",
          "uri": "spotify:artist:6RCXvdRNRMP9lsp6a1bY2U"
        }],
        "disc_number": 1,
        "duration_ms": 139933,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMMMF1700031"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/59En1uD1dGwkPQhCyheOn7"
        },
        "href": "https://api.spotify.com/v1/tracks/59En1uD1dGwkPQhCyheOn7",
        "id": "59En1uD1dGwkPQhCyheOn7",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5cRJjVXrFPVnkHTSKK5xTG"
          },
          "href": "https://api.spotify.com/v1/tracks/5cRJjVXrFPVnkHTSKK5xTG",
          "id": "5cRJjVXrFPVnkHTSKK5xTG",
          "type": "track",
          "uri": "spotify:track:5cRJjVXrFPVnkHTSKK5xTG"
        },
        "name": "It's Not Enough",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/3bf1b308ee0c44240eebd1b707bbf56111ef97d7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:59En1uD1dGwkPQhCyheOn7"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-05-07T16:56:44Z",
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
        "share_id": "c6fGbQETSbKV49nlESrTSg",
        "share_url": "https://open.spotify.com/track/0QZ5yyl6B6utIWkxeBDxQN?si=c6fGbQETSbKV49nlESrTSg",
        "uri": "spotify:track:0QZ5yyl6B6utIWkxeBDxQN"
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
            "spotify": "https://open.spotify.com/album/3yoNZlqerJnsnMN5EDwwBS"
          },
          "href": "https://api.spotify.com/v1/albums/3yoNZlqerJnsnMN5EDwwBS",
          "id": "3yoNZlqerJnsnMN5EDwwBS",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2739d2efe43d5b7ebc7cb60ca81",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e029d2efe43d5b7ebc7cb60ca81",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048519d2efe43d5b7ebc7cb60ca81",
            "width": 64
          }],
          "name": "Strange Trails",
          "release_date": "2015-04-07",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:3yoNZlqerJnsnMN5EDwwBS"
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
        "duration_ms": 208211,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US53Q1200103"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0QZ5yyl6B6utIWkxeBDxQN"
        },
        "href": "https://api.spotify.com/v1/tracks/0QZ5yyl6B6utIWkxeBDxQN",
        "id": "0QZ5yyl6B6utIWkxeBDxQN",
        "is_local": false,
        "is_playable": true,
        "name": "The Night We Met",
        "popularity": 75,
        "preview_url": "https://p.scdn.co/mp3-preview/1c0da00b5c95a1a6c9dfc05b14a1a628a6e0ad73?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 14,
        "type": "track",
        "uri": "spotify:track:0QZ5yyl6B6utIWkxeBDxQN"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-05-07T16:59:54Z",
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
        "share_id": "KVaR6QtaSxuUV2y0DKUXtg",
        "share_url": "https://open.spotify.com/track/0ryoOkpaDeSQRoYQGGJAxn?si=KVaR6QtaSxuUV2y0DKUXtg",
        "uri": "spotify:track:0ryoOkpaDeSQRoYQGGJAxn"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5dM7jA0PXh0Ozz8LT2YOCB"
            },
            "href": "https://api.spotify.com/v1/artists/5dM7jA0PXh0Ozz8LT2YOCB",
            "id": "5dM7jA0PXh0Ozz8LT2YOCB",
            "name": "Ann Peebles",
            "type": "artist",
            "uri": "spotify:artist:5dM7jA0PXh0Ozz8LT2YOCB"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2HGzxUUz5q4jldJkodIarf"
          },
          "href": "https://api.spotify.com/v1/albums/2HGzxUUz5q4jldJkodIarf",
          "id": "2HGzxUUz5q4jldJkodIarf",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2739c15ef25797313383647c7f3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e029c15ef25797313383647c7f3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048519c15ef25797313383647c7f3",
            "width": 64
          }],
          "name": "Straight from the Heart",
          "release_date": "1971",
          "release_date_precision": "year",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2HGzxUUz5q4jldJkodIarf"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5dM7jA0PXh0Ozz8LT2YOCB"
          },
          "href": "https://api.spotify.com/v1/artists/5dM7jA0PXh0Ozz8LT2YOCB",
          "id": "5dM7jA0PXh0Ozz8LT2YOCB",
          "name": "Ann Peebles",
          "type": "artist",
          "uri": "spotify:artist:5dM7jA0PXh0Ozz8LT2YOCB"
        }],
        "disc_number": 1,
        "duration_ms": 161400,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2HK1341002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0ryoOkpaDeSQRoYQGGJAxn"
        },
        "href": "https://api.spotify.com/v1/tracks/0ryoOkpaDeSQRoYQGGJAxn",
        "id": "0ryoOkpaDeSQRoYQGGJAxn",
        "is_local": false,
        "is_playable": true,
        "name": "Trouble, Heartaches & Sadness",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/209270e79aa23a678d0e584a2a63a879b4e76138?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:0ryoOkpaDeSQRoYQGGJAxn"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-06-18T19:13:43Z",
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
        "share_id": "-azaAURVS_aQP8BYZhZ76w",
        "share_url": "https://open.spotify.com/track/3Q69H0ykl0jrL7uvXH0AvG?si=-azaAURVS_aQP8BYZhZ76w",
        "uri": "spotify:track:3Q69H0ykl0jrL7uvXH0AvG"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4mLJ3XfOM5FPjSAWdQ2Jk7"
            },
            "href": "https://api.spotify.com/v1/artists/4mLJ3XfOM5FPjSAWdQ2Jk7",
            "id": "4mLJ3XfOM5FPjSAWdQ2Jk7",
            "name": "Dr. Dog",
            "type": "artist",
            "uri": "spotify:artist:4mLJ3XfOM5FPjSAWdQ2Jk7"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0kafVzFVwhsAjOzA2h6QQB"
          },
          "href": "https://api.spotify.com/v1/albums/0kafVzFVwhsAjOzA2h6QQB",
          "id": "0kafVzFVwhsAjOzA2h6QQB",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731318e0c6769b2193d2b00844",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021318e0c6769b2193d2b00844",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511318e0c6769b2193d2b00844",
            "width": 64
          }],
          "name": "Critical Equation",
          "release_date": "2018-04-27",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0kafVzFVwhsAjOzA2h6QQB"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4mLJ3XfOM5FPjSAWdQ2Jk7"
          },
          "href": "https://api.spotify.com/v1/artists/4mLJ3XfOM5FPjSAWdQ2Jk7",
          "id": "4mLJ3XfOM5FPjSAWdQ2Jk7",
          "name": "Dr. Dog",
          "type": "artist",
          "uri": "spotify:artist:4mLJ3XfOM5FPjSAWdQ2Jk7"
        }],
        "disc_number": 1,
        "duration_ms": 295396,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMEU31725774"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3Q69H0ykl0jrL7uvXH0AvG"
        },
        "href": "https://api.spotify.com/v1/tracks/3Q69H0ykl0jrL7uvXH0AvG",
        "id": "3Q69H0ykl0jrL7uvXH0AvG",
        "is_local": false,
        "is_playable": true,
        "name": "Listening In",
        "popularity": 43,
        "preview_url": "https://p.scdn.co/mp3-preview/e7b3eb9d18b3b5e886a6eb17ec85ccd8b3435fc4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3Q69H0ykl0jrL7uvXH0AvG"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-23T19:35:55Z",
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
        "share_id": "_-etAaqxSKacQDmxWdIHvg",
        "share_url": "https://open.spotify.com/track/4JHCLFKkuvNMb67DYuAjUU?si=_-etAaqxSKacQDmxWdIHvg",
        "uri": "spotify:track:4JHCLFKkuvNMb67DYuAjUU"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag"
            },
            "href": "https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag",
            "id": "3l0CmX0FuQjFxr8SK7Vqag",
            "name": "Clairo",
            "type": "artist",
            "uri": "spotify:artist:3l0CmX0FuQjFxr8SK7Vqag"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5y7QSRmltWRcrT6AnAtitI"
          },
          "href": "https://api.spotify.com/v1/albums/5y7QSRmltWRcrT6AnAtitI",
          "id": "5y7QSRmltWRcrT6AnAtitI",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738d3099da3437c4b3f43e6239",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028d3099da3437c4b3f43e6239",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518d3099da3437c4b3f43e6239",
            "width": 64
          }],
          "name": "Get With U",
          "release_date": "2017-04-15",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5y7QSRmltWRcrT6AnAtitI"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag"
          },
          "href": "https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag",
          "id": "3l0CmX0FuQjFxr8SK7Vqag",
          "name": "Clairo",
          "type": "artist",
          "uri": "spotify:artist:3l0CmX0FuQjFxr8SK7Vqag"
        }],
        "disc_number": 1,
        "duration_ms": 118883,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADG1703072"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4JHCLFKkuvNMb67DYuAjUU"
        },
        "href": "https://api.spotify.com/v1/tracks/4JHCLFKkuvNMb67DYuAjUU",
        "id": "4JHCLFKkuvNMb67DYuAjUU",
        "is_local": false,
        "is_playable": true,
        "name": "Get With U",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/987863ad431d31ba0615c6ab848edde75187a20c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4JHCLFKkuvNMb67DYuAjUU"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-10T18:17:31Z",
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
        "share_id": "tTJVX6PDRg-vhvTcalJ-6w",
        "share_url": "https://open.spotify.com/track/33KEeXWXiUPZSnOWsLzQsK?si=tTJVX6PDRg-vhvTcalJ-6w",
        "uri": "spotify:track:33KEeXWXiUPZSnOWsLzQsK"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/00qD0cbhihCnqMboaFKhUt"
            },
            "href": "https://api.spotify.com/v1/artists/00qD0cbhihCnqMboaFKhUt",
            "id": "00qD0cbhihCnqMboaFKhUt",
            "name": "Goldensuns",
            "type": "artist",
            "uri": "spotify:artist:00qD0cbhihCnqMboaFKhUt"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/16EC9t5E90wYFyJK173ril"
          },
          "href": "https://api.spotify.com/v1/albums/16EC9t5E90wYFyJK173ril",
          "id": "16EC9t5E90wYFyJK173ril",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2733a6e88d22141d071e945c1d9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e023a6e88d22141d071e945c1d9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048513a6e88d22141d071e945c1d9",
            "width": 64
          }],
          "name": "Give It Up - EP",
          "release_date": "2016-05-11",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:16EC9t5E90wYFyJK173ril"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/00qD0cbhihCnqMboaFKhUt"
          },
          "href": "https://api.spotify.com/v1/artists/00qD0cbhihCnqMboaFKhUt",
          "id": "00qD0cbhihCnqMboaFKhUt",
          "name": "Goldensuns",
          "type": "artist",
          "uri": "spotify:artist:00qD0cbhihCnqMboaFKhUt"
        }],
        "disc_number": 1,
        "duration_ms": 231777,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACO1637490"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/33KEeXWXiUPZSnOWsLzQsK"
        },
        "href": "https://api.spotify.com/v1/tracks/33KEeXWXiUPZSnOWsLzQsK",
        "id": "33KEeXWXiUPZSnOWsLzQsK",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2DBmQ7AdGxTyVPuR85Stop"
          },
          "href": "https://api.spotify.com/v1/tracks/2DBmQ7AdGxTyVPuR85Stop",
          "id": "2DBmQ7AdGxTyVPuR85Stop",
          "type": "track",
          "uri": "spotify:track:2DBmQ7AdGxTyVPuR85Stop"
        },
        "name": "Give It Up",
        "popularity": 37,
        "preview_url": "https://p.scdn.co/mp3-preview/adf72464d97bfb8398d4206ad4c7f5e1bde2dc1d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:33KEeXWXiUPZSnOWsLzQsK"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-06-18T19:11:01Z",
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
        "share_id": "789PnX0GRzea7CZNSJBTGA",
        "share_url": "https://open.spotify.com/track/6sVQNUvcVFTXvlk3ec0ngd?si=789PnX0GRzea7CZNSJBTGA",
        "uri": "spotify:track:6sVQNUvcVFTXvlk3ec0ngd"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5Wabl1lPdNOeIn0SQ5A1mp"
            },
            "href": "https://api.spotify.com/v1/artists/5Wabl1lPdNOeIn0SQ5A1mp",
            "id": "5Wabl1lPdNOeIn0SQ5A1mp",
            "name": "Cocteau Twins",
            "type": "artist",
            "uri": "spotify:artist:5Wabl1lPdNOeIn0SQ5A1mp"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/37hHXJ7xas2Nb7Jbi8ip4E"
          },
          "href": "https://api.spotify.com/v1/albums/37hHXJ7xas2Nb7Jbi8ip4E",
          "id": "37hHXJ7xas2Nb7Jbi8ip4E",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273276b940445d7ab5ae6ceba82",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02276b940445d7ab5ae6ceba82",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851276b940445d7ab5ae6ceba82",
            "width": 64
          }],
          "name": "Heaven Or Las Vegas (Remastered)",
          "release_date": "1990-09-17",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:37hHXJ7xas2Nb7Jbi8ip4E"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5Wabl1lPdNOeIn0SQ5A1mp"
          },
          "href": "https://api.spotify.com/v1/artists/5Wabl1lPdNOeIn0SQ5A1mp",
          "id": "5Wabl1lPdNOeIn0SQ5A1mp",
          "name": "Cocteau Twins",
          "type": "artist",
          "uri": "spotify:artist:5Wabl1lPdNOeIn0SQ5A1mp"
        }],
        "disc_number": 1,
        "duration_ms": 192466,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAFL9000062"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6sVQNUvcVFTXvlk3ec0ngd"
        },
        "href": "https://api.spotify.com/v1/tracks/6sVQNUvcVFTXvlk3ec0ngd",
        "id": "6sVQNUvcVFTXvlk3ec0ngd",
        "is_local": false,
        "is_playable": true,
        "name": "Cherry-coloured Funk",
        "popularity": 62,
        "preview_url": "https://p.scdn.co/mp3-preview/0aaa104c38a4043c6d40c8d7c1c136551a44a7b3?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6sVQNUvcVFTXvlk3ec0ngd"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 20
  },
  "type": "playlist",
  "uri": "spotify:playlist:04QRyhSXBaqa6v0oOrOSDp"
};

/***/ })

/******/ });