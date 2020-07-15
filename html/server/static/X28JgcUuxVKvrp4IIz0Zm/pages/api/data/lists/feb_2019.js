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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xP+0");


/***/ }),

/***/ "xP+0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/1GaLNSsybt45zVAqc8h96Y"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/1GaLNSsybt45zVAqc8h96Y?type=track,episode",
  "id": "1GaLNSsybt45zVAqc8h96Y",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731e0a60880602798677c3f2a6ab67616d0000b2732590c2d33bd70c8bf059591bab67616d0000b273df11dc39e1ccdbd3f2522939ab67616d0000b273f864f041e3b77751b21c0803",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731e0a60880602798677c3f2a6ab67616d0000b2732590c2d33bd70c8bf059591bab67616d0000b273df11dc39e1ccdbd3f2522939ab67616d0000b273f864f041e3b77751b21c0803",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731e0a60880602798677c3f2a6ab67616d0000b2732590c2d33bd70c8bf059591bab67616d0000b273df11dc39e1ccdbd3f2522939ab67616d0000b273f864f041e3b77751b21c0803",
    "width": 60
  }],
  "name": "February 2019",
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
    "share_id": "AqjDr2XGQuGcABGj4Rp4Eg",
    "share_url": "https://open.spotify.com/playlist/1GaLNSsybt45zVAqc8h96Y?si=AqjDr2XGQuGcABGj4Rp4Eg",
    "uri": "spotify:playlist:1GaLNSsybt45zVAqc8h96Y"
  },
  "snapshot_id": "NTksZjA3NzQxNzEzNzQ2NzlmMjdjMDk0MGM3YjE3ZGUwNzQ5ZDAxN2YwMA==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/1GaLNSsybt45zVAqc8h96Y/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2019-02-05T22:29:13Z",
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
        "share_id": "7Uvk7JLaTPCe57y_dYbEDA",
        "share_url": "https://open.spotify.com/track/2wygBuUWMXrQujBBlwhDCL?si=7Uvk7JLaTPCe57y_dYbEDA",
        "uri": "spotify:track:2wygBuUWMXrQujBBlwhDCL"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/67zR9a98QqWJwpO7wBrGog"
            },
            "href": "https://api.spotify.com/v1/artists/67zR9a98QqWJwpO7wBrGog",
            "id": "67zR9a98QqWJwpO7wBrGog",
            "name": "Sonny & The Sunsets",
            "type": "artist",
            "uri": "spotify:artist:67zR9a98QqWJwpO7wBrGog"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7K4eMOq0MLq6aQz7Zjkjkh"
          },
          "href": "https://api.spotify.com/v1/albums/7K4eMOq0MLq6aQz7Zjkjkh",
          "id": "7K4eMOq0MLq6aQz7Zjkjkh",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273df11dc39e1ccdbd3f2522939",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02df11dc39e1ccdbd3f2522939",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851df11dc39e1ccdbd3f2522939",
            "width": 64
          }],
          "name": "Tomorrow Is Alright",
          "release_date": "2010",
          "release_date_precision": "year",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:7K4eMOq0MLq6aQz7Zjkjkh"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/67zR9a98QqWJwpO7wBrGog"
          },
          "href": "https://api.spotify.com/v1/artists/67zR9a98QqWJwpO7wBrGog",
          "id": "67zR9a98QqWJwpO7wBrGog",
          "name": "Sonny & The Sunsets",
          "type": "artist",
          "uri": "spotify:artist:67zR9a98QqWJwpO7wBrGog"
        }],
        "disc_number": 1,
        "duration_ms": 199693,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USFP71022501"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2wygBuUWMXrQujBBlwhDCL"
        },
        "href": "https://api.spotify.com/v1/tracks/2wygBuUWMXrQujBBlwhDCL",
        "id": "2wygBuUWMXrQujBBlwhDCL",
        "is_local": false,
        "is_playable": true,
        "name": "Too Young to Burn",
        "popularity": 59,
        "preview_url": "https://p.scdn.co/mp3-preview/3aa02184e2641a540eea816dd92f60815cb50e79?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2wygBuUWMXrQujBBlwhDCL"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-07T22:45:52Z",
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
        "share_id": "6nyvl6lNRHG0AYt-erqEdQ",
        "share_url": "https://open.spotify.com/track/5hqYMiXobcaHQxB21rTlzD?si=6nyvl6lNRHG0AYt-erqEdQ",
        "uri": "spotify:track:5hqYMiXobcaHQxB21rTlzD"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3BYXi96LqI8TwNljFKE0DZ"
            },
            "href": "https://api.spotify.com/v1/artists/3BYXi96LqI8TwNljFKE0DZ",
            "id": "3BYXi96LqI8TwNljFKE0DZ",
            "name": "Girlpool",
            "type": "artist",
            "uri": "spotify:artist:3BYXi96LqI8TwNljFKE0DZ"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7KW051jqBSX1pFOyLwIQw7"
          },
          "href": "https://api.spotify.com/v1/albums/7KW051jqBSX1pFOyLwIQw7",
          "id": "7KW051jqBSX1pFOyLwIQw7",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731e0a60880602798677c3f2a6",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021e0a60880602798677c3f2a6",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511e0a60880602798677c3f2a6",
            "width": 64
          }],
          "name": "Before The World Was Big",
          "release_date": "2015-06-02",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:7KW051jqBSX1pFOyLwIQw7"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3BYXi96LqI8TwNljFKE0DZ"
          },
          "href": "https://api.spotify.com/v1/artists/3BYXi96LqI8TwNljFKE0DZ",
          "id": "3BYXi96LqI8TwNljFKE0DZ",
          "name": "Girlpool",
          "type": "artist",
          "uri": "spotify:artist:3BYXi96LqI8TwNljFKE0DZ"
        }],
        "disc_number": 1,
        "duration_ms": 166329,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBDNH1500021"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5hqYMiXobcaHQxB21rTlzD"
        },
        "href": "https://api.spotify.com/v1/tracks/5hqYMiXobcaHQxB21rTlzD",
        "id": "5hqYMiXobcaHQxB21rTlzD",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0wwfHmg01IbaKa4eYQBB3H"
          },
          "href": "https://api.spotify.com/v1/tracks/0wwfHmg01IbaKa4eYQBB3H",
          "id": "0wwfHmg01IbaKa4eYQBB3H",
          "type": "track",
          "uri": "spotify:track:0wwfHmg01IbaKa4eYQBB3H"
        },
        "name": "Ideal World",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/0f5d12d1b9fe62dd8edad85ee4fc95d3d3de5297?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5hqYMiXobcaHQxB21rTlzD"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-05T22:22:00Z",
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
        "share_id": "yRYTy0R5QDKi3YjfMhEr9g",
        "share_url": "https://open.spotify.com/track/3iyfg1RwpatVcqfMshEplN?si=yRYTy0R5QDKi3YjfMhEr9g",
        "uri": "spotify:track:3iyfg1RwpatVcqfMshEplN"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7EFB09NxZrMi9pGlOnuBpd"
            },
            "href": "https://api.spotify.com/v1/artists/7EFB09NxZrMi9pGlOnuBpd",
            "id": "7EFB09NxZrMi9pGlOnuBpd",
            "name": "The Horrors",
            "type": "artist",
            "uri": "spotify:artist:7EFB09NxZrMi9pGlOnuBpd"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5F7t2oVAxnazEU21nbUZGc"
          },
          "href": "https://api.spotify.com/v1/albums/5F7t2oVAxnazEU21nbUZGc",
          "id": "5F7t2oVAxnazEU21nbUZGc",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f864f041e3b77751b21c0803",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f864f041e3b77751b21c0803",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f864f041e3b77751b21c0803",
            "width": 64
          }],
          "name": "V",
          "release_date": "2017-09-22",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5F7t2oVAxnazEU21nbUZGc"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7EFB09NxZrMi9pGlOnuBpd"
          },
          "href": "https://api.spotify.com/v1/artists/7EFB09NxZrMi9pGlOnuBpd",
          "id": "7EFB09NxZrMi9pGlOnuBpd",
          "name": "The Horrors",
          "type": "artist",
          "uri": "spotify:artist:7EFB09NxZrMi9pGlOnuBpd"
        }],
        "disc_number": 1,
        "duration_ms": 400041,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GB2DY1700190"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3iyfg1RwpatVcqfMshEplN"
        },
        "href": "https://api.spotify.com/v1/tracks/3iyfg1RwpatVcqfMshEplN",
        "id": "3iyfg1RwpatVcqfMshEplN",
        "is_local": false,
        "is_playable": true,
        "name": "Something To Remember Me By",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/0905e5cd97c5654821d225b5eb4bd50e5298bb3d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:3iyfg1RwpatVcqfMshEplN"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-05T22:22:54Z",
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
        "share_id": "m7YAH1IgT76OmSfoWvm0Iw",
        "share_url": "https://open.spotify.com/track/28kOpVf1aCgL0LSFfuKV4w?si=m7YAH1IgT76OmSfoWvm0Iw",
        "uri": "spotify:track:28kOpVf1aCgL0LSFfuKV4w"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/73MDShZzdL4vUGMkmXOG6X"
            },
            "href": "https://api.spotify.com/v1/artists/73MDShZzdL4vUGMkmXOG6X",
            "id": "73MDShZzdL4vUGMkmXOG6X",
            "name": "Haley Heynderickx",
            "type": "artist",
            "uri": "spotify:artist:73MDShZzdL4vUGMkmXOG6X"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4I8BEAiq1kPqRRlvWLTo5B"
          },
          "href": "https://api.spotify.com/v1/albums/4I8BEAiq1kPqRRlvWLTo5B",
          "id": "4I8BEAiq1kPqRRlvWLTo5B",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732590c2d33bd70c8bf059591b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022590c2d33bd70c8bf059591b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512590c2d33bd70c8bf059591b",
            "width": 64
          }],
          "name": "I Need to Start a Garden",
          "release_date": "2018-03-02",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:4I8BEAiq1kPqRRlvWLTo5B"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/73MDShZzdL4vUGMkmXOG6X"
          },
          "href": "https://api.spotify.com/v1/artists/73MDShZzdL4vUGMkmXOG6X",
          "id": "73MDShZzdL4vUGMkmXOG6X",
          "name": "Haley Heynderickx",
          "type": "artist",
          "uri": "spotify:artist:73MDShZzdL4vUGMkmXOG6X"
        }],
        "disc_number": 1,
        "duration_ms": 177339,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMFW91700128"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/28kOpVf1aCgL0LSFfuKV4w"
        },
        "href": "https://api.spotify.com/v1/tracks/28kOpVf1aCgL0LSFfuKV4w",
        "id": "28kOpVf1aCgL0LSFfuKV4w",
        "is_local": false,
        "is_playable": true,
        "name": "Oom Sha La La",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/b8f97afcf4aa612d124034f4a9a58d67dd636382?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:28kOpVf1aCgL0LSFfuKV4w"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-05T22:24:40Z",
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
        "share_id": "TmIZEz8SS8GxZMDG0Mn9YQ",
        "share_url": "https://open.spotify.com/track/4kAflSfOBf6Wv5ZD5abUvZ?si=TmIZEz8SS8GxZMDG0Mn9YQ",
        "uri": "spotify:track:4kAflSfOBf6Wv5ZD5abUvZ"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/72X6FHxaShda0XeQw3vbeF"
            },
            "href": "https://api.spotify.com/v1/artists/72X6FHxaShda0XeQw3vbeF",
            "id": "72X6FHxaShda0XeQw3vbeF",
            "name": "Slowdive",
            "type": "artist",
            "uri": "spotify:artist:72X6FHxaShda0XeQw3vbeF"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4nSWX5A4xVomzrOEGDKLQ6"
          },
          "href": "https://api.spotify.com/v1/albums/4nSWX5A4xVomzrOEGDKLQ6",
          "id": "4nSWX5A4xVomzrOEGDKLQ6",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737d08dfce0cb20cf7ed9da031",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027d08dfce0cb20cf7ed9da031",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517d08dfce0cb20cf7ed9da031",
            "width": 64
          }],
          "name": "Slowdive",
          "release_date": "2017-05-05",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:4nSWX5A4xVomzrOEGDKLQ6"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/72X6FHxaShda0XeQw3vbeF"
          },
          "href": "https://api.spotify.com/v1/artists/72X6FHxaShda0XeQw3vbeF",
          "id": "72X6FHxaShda0XeQw3vbeF",
          "name": "Slowdive",
          "type": "artist",
          "uri": "spotify:artist:72X6FHxaShda0XeQw3vbeF"
        }],
        "disc_number": 1,
        "duration_ms": 348107,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USJ5G1713206"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4kAflSfOBf6Wv5ZD5abUvZ"
        },
        "href": "https://api.spotify.com/v1/tracks/4kAflSfOBf6Wv5ZD5abUvZ",
        "id": "4kAflSfOBf6Wv5ZD5abUvZ",
        "is_local": false,
        "is_playable": true,
        "name": "No Longer Making Time",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/66cd3e1bd692050344927f588438aa4bb1e754be?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:4kAflSfOBf6Wv5ZD5abUvZ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-06T02:18:39Z",
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
        "share_id": "H5yAnAsMSCWUJMQ8N21-0Q",
        "share_url": "https://open.spotify.com/track/0QafrkHlHYpW7EHdf5KozT?si=H5yAnAsMSCWUJMQ8N21-0Q",
        "uri": "spotify:track:0QafrkHlHYpW7EHdf5KozT"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1YsDTyr1XEdtYxfoA7biTk"
            },
            "href": "https://api.spotify.com/v1/artists/1YsDTyr1XEdtYxfoA7biTk",
            "id": "1YsDTyr1XEdtYxfoA7biTk",
            "name": "Crewel Intentions",
            "type": "artist",
            "uri": "spotify:artist:1YsDTyr1XEdtYxfoA7biTk"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5LUajstAy5vmOhkMXPCqBV"
          },
          "href": "https://api.spotify.com/v1/albums/5LUajstAy5vmOhkMXPCqBV",
          "id": "5LUajstAy5vmOhkMXPCqBV",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273045e1e4ff4cd3ae8d16eec28",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02045e1e4ff4cd3ae8d16eec28",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851045e1e4ff4cd3ae8d16eec28",
            "width": 64
          }],
          "name": "Youth in Overload",
          "release_date": "2018-10-25",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5LUajstAy5vmOhkMXPCqBV"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1YsDTyr1XEdtYxfoA7biTk"
          },
          "href": "https://api.spotify.com/v1/artists/1YsDTyr1XEdtYxfoA7biTk",
          "id": "1YsDTyr1XEdtYxfoA7biTk",
          "name": "Crewel Intentions",
          "type": "artist",
          "uri": "spotify:artist:1YsDTyr1XEdtYxfoA7biTk"
        }],
        "disc_number": 1,
        "duration_ms": 269705,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1825028"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0QafrkHlHYpW7EHdf5KozT"
        },
        "href": "https://api.spotify.com/v1/tracks/0QafrkHlHYpW7EHdf5KozT",
        "id": "0QafrkHlHYpW7EHdf5KozT",
        "is_local": false,
        "is_playable": true,
        "name": "Youth in Overload",
        "popularity": 16,
        "preview_url": "https://p.scdn.co/mp3-preview/2f244fb7f614504501b02a79937fa17e5e7d6ff4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0QafrkHlHYpW7EHdf5KozT"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-06T02:07:35Z",
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
        "share_id": "t6mVCk7gQDSfvciHKQs9FA",
        "share_url": "https://open.spotify.com/track/5zeVfYfeNjLUIEjGL6Z9jS?si=t6mVCk7gQDSfvciHKQs9FA",
        "uri": "spotify:track:5zeVfYfeNjLUIEjGL6Z9jS"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6UX75ogp8jkRFPGJo6NL7N"
            },
            "href": "https://api.spotify.com/v1/artists/6UX75ogp8jkRFPGJo6NL7N",
            "id": "6UX75ogp8jkRFPGJo6NL7N",
            "name": "Arsun",
            "type": "artist",
            "uri": "spotify:artist:6UX75ogp8jkRFPGJo6NL7N"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1pLdygZAok8naSWTZx5CNr"
          },
          "href": "https://api.spotify.com/v1/albums/1pLdygZAok8naSWTZx5CNr",
          "id": "1pLdygZAok8naSWTZx5CNr",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731b2190f396f3f334480c6dde",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021b2190f396f3f334480c6dde",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511b2190f396f3f334480c6dde",
            "width": 64
          }],
          "name": "White Light",
          "release_date": "2018-10-26",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1pLdygZAok8naSWTZx5CNr"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6UX75ogp8jkRFPGJo6NL7N"
          },
          "href": "https://api.spotify.com/v1/artists/6UX75ogp8jkRFPGJo6NL7N",
          "id": "6UX75ogp8jkRFPGJo6NL7N",
          "name": "Arsun",
          "type": "artist",
          "uri": "spotify:artist:6UX75ogp8jkRFPGJo6NL7N"
        }],
        "disc_number": 1,
        "duration_ms": 188035,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1824467"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5zeVfYfeNjLUIEjGL6Z9jS"
        },
        "href": "https://api.spotify.com/v1/tracks/5zeVfYfeNjLUIEjGL6Z9jS",
        "id": "5zeVfYfeNjLUIEjGL6Z9jS",
        "is_local": false,
        "is_playable": true,
        "name": "White Light",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/d046b8f14dd8b853bdda8f485b0649bde62fea18?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5zeVfYfeNjLUIEjGL6Z9jS"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-14T02:04:12Z",
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
        "share_id": "ZjBE3xj9Sx-SKEec8zXU1A",
        "share_url": "https://open.spotify.com/track/5KTaAvodoyuWIUOetdsEFd?si=ZjBE3xj9Sx-SKEec8zXU1A",
        "uri": "spotify:track:5KTaAvodoyuWIUOetdsEFd"
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
            "spotify": "https://open.spotify.com/album/47cc2w9XHvUvO7iqvMIFry"
          },
          "href": "https://api.spotify.com/v1/albums/47cc2w9XHvUvO7iqvMIFry",
          "id": "47cc2w9XHvUvO7iqvMIFry",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27389271a16978642eb6d03231c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0289271a16978642eb6d03231c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485189271a16978642eb6d03231c",
            "width": 64
          }],
          "name": "Building Nothing out of Something",
          "release_date": "2000-01-18",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:47cc2w9XHvUvO7iqvMIFry"
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
        "duration_ms": 203666,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USFP71444401"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5KTaAvodoyuWIUOetdsEFd"
        },
        "href": "https://api.spotify.com/v1/tracks/5KTaAvodoyuWIUOetdsEFd",
        "id": "5KTaAvodoyuWIUOetdsEFd",
        "is_local": false,
        "is_playable": true,
        "name": "Never Ending Math Equation",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/0057e8c8288d55937ceeb92cac9b58d81749562f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5KTaAvodoyuWIUOetdsEFd"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-07T22:33:54Z",
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
        "share_id": "wyTdxsROQK2wq3tKwJr7Fw",
        "share_url": "https://open.spotify.com/track/0aEwbmIKDdv94O1sm38Y2B?si=wyTdxsROQK2wq3tKwJr7Fw",
        "uri": "spotify:track:0aEwbmIKDdv94O1sm38Y2B"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0AL8XXRh7fUrHAMLoDv9rn"
            },
            "href": "https://api.spotify.com/v1/artists/0AL8XXRh7fUrHAMLoDv9rn",
            "id": "0AL8XXRh7fUrHAMLoDv9rn",
            "name": "Bonny Doon",
            "type": "artist",
            "uri": "spotify:artist:0AL8XXRh7fUrHAMLoDv9rn"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7uo0oJVjhuw0fIGltmSPcs"
          },
          "href": "https://api.spotify.com/v1/albums/7uo0oJVjhuw0fIGltmSPcs",
          "id": "7uo0oJVjhuw0fIGltmSPcs",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732c64fe7a651159fddbdcd5f2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022c64fe7a651159fddbdcd5f2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512c64fe7a651159fddbdcd5f2",
            "width": 64
          }],
          "name": "Longwave",
          "release_date": "2018-03-23",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:7uo0oJVjhuw0fIGltmSPcs"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0AL8XXRh7fUrHAMLoDv9rn"
          },
          "href": "https://api.spotify.com/v1/artists/0AL8XXRh7fUrHAMLoDv9rn",
          "id": "0AL8XXRh7fUrHAMLoDv9rn",
          "name": "Bonny Doon",
          "type": "artist",
          "uri": "spotify:artist:0AL8XXRh7fUrHAMLoDv9rn"
        }],
        "disc_number": 1,
        "duration_ms": 198380,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2FD1809302"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0aEwbmIKDdv94O1sm38Y2B"
        },
        "href": "https://api.spotify.com/v1/tracks/0aEwbmIKDdv94O1sm38Y2B",
        "id": "0aEwbmIKDdv94O1sm38Y2B",
        "is_local": false,
        "is_playable": true,
        "name": "A Lotta Things",
        "popularity": 43,
        "preview_url": "https://p.scdn.co/mp3-preview/d33759e3e1b1cafebbb5fcd6234cc83f6373bdfa?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:0aEwbmIKDdv94O1sm38Y2B"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-14T01:27:02Z",
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
        "share_id": "FRuhIBLdS86qEs56MqqG-g",
        "share_url": "https://open.spotify.com/track/4cD4f7qpZXuhlVolO59iMf?si=FRuhIBLdS86qEs56MqqG-g",
        "uri": "spotify:track:4cD4f7qpZXuhlVolO59iMf"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5UjbehtgZGbNmmanbVW9Bs"
            },
            "href": "https://api.spotify.com/v1/artists/5UjbehtgZGbNmmanbVW9Bs",
            "id": "5UjbehtgZGbNmmanbVW9Bs",
            "name": "Forth Wanderers",
            "type": "artist",
            "uri": "spotify:artist:5UjbehtgZGbNmmanbVW9Bs"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6Uhf6tfDd1SoEJ6uzg6sj4"
          },
          "href": "https://api.spotify.com/v1/albums/6Uhf6tfDd1SoEJ6uzg6sj4",
          "id": "6Uhf6tfDd1SoEJ6uzg6sj4",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27356a7fcaa392197678ce6a066",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0256a7fcaa392197678ce6a066",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485156a7fcaa392197678ce6a066",
            "width": 64
          }],
          "name": "Slop",
          "release_date": "2016-08-09",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:6Uhf6tfDd1SoEJ6uzg6sj4"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5UjbehtgZGbNmmanbVW9Bs"
          },
          "href": "https://api.spotify.com/v1/artists/5UjbehtgZGbNmmanbVW9Bs",
          "id": "5UjbehtgZGbNmmanbVW9Bs",
          "name": "Forth Wanderers",
          "type": "artist",
          "uri": "spotify:artist:5UjbehtgZGbNmmanbVW9Bs"
        }],
        "disc_number": 1,
        "duration_ms": 237243,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBX721600154"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4cD4f7qpZXuhlVolO59iMf"
        },
        "href": "https://api.spotify.com/v1/tracks/4cD4f7qpZXuhlVolO59iMf",
        "id": "4cD4f7qpZXuhlVolO59iMf",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1KfoPHH8DuAMDqJJpdpMR8"
          },
          "href": "https://api.spotify.com/v1/tracks/1KfoPHH8DuAMDqJJpdpMR8",
          "id": "1KfoPHH8DuAMDqJJpdpMR8",
          "type": "track",
          "uri": "spotify:track:1KfoPHH8DuAMDqJJpdpMR8"
        },
        "name": "Slop",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/a008aef66d642e29fd18442d5f4011c43d678c61?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4cD4f7qpZXuhlVolO59iMf"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-14T19:09:14Z",
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
        "share_id": "9pS9A9SxRiKFB1ygVr5ToQ",
        "share_url": "https://open.spotify.com/track/1uahtMMjNzfo4854aTvbXE?si=9pS9A9SxRiKFB1ygVr5ToQ",
        "uri": "spotify:track:1uahtMMjNzfo4854aTvbXE"
      },
      "track": {
        "album": {
          "album_type": "single",
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
            "spotify": "https://open.spotify.com/album/3DKAWelo1cJB6ifREPVtOo"
          },
          "href": "https://api.spotify.com/v1/albums/3DKAWelo1cJB6ifREPVtOo",
          "id": "3DKAWelo1cJB6ifREPVtOo",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d8b74654bdba0f5c38e3e6fa",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d8b74654bdba0f5c38e3e6fa",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d8b74654bdba0f5c38e3e6fa",
            "width": 64
          }],
          "name": "There's no one new around you.",
          "release_date": "2016-11-18",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:3DKAWelo1cJB6ifREPVtOo"
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
        "duration_ms": 229000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZ4B61600010"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1uahtMMjNzfo4854aTvbXE"
        },
        "href": "https://api.spotify.com/v1/tracks/1uahtMMjNzfo4854aTvbXE",
        "id": "1uahtMMjNzfo4854aTvbXE",
        "is_local": false,
        "is_playable": true,
        "name": "a million other things",
        "popularity": 35,
        "preview_url": "https://p.scdn.co/mp3-preview/2b2a91c6bd7e4bd247c73cd535fbb7da3e76a2a9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1uahtMMjNzfo4854aTvbXE"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-14T22:44:29Z",
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
        "share_id": "5389-apJTPydNBBY-QsfrQ",
        "share_url": "https://open.spotify.com/track/1s1aDCCGvioUdAJQxFgCii?si=5389-apJTPydNBBY-QsfrQ",
        "uri": "spotify:track:1s1aDCCGvioUdAJQxFgCii"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7pww8JMPMj1SxUfJ8wN5Kt"
            },
            "href": "https://api.spotify.com/v1/artists/7pww8JMPMj1SxUfJ8wN5Kt",
            "id": "7pww8JMPMj1SxUfJ8wN5Kt",
            "name": "HAERTS",
            "type": "artist",
            "uri": "spotify:artist:7pww8JMPMj1SxUfJ8wN5Kt"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/13ZDVl9fR4f9PlUxmRO6LQ"
          },
          "href": "https://api.spotify.com/v1/albums/13ZDVl9fR4f9PlUxmRO6LQ",
          "id": "13ZDVl9fR4f9PlUxmRO6LQ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273cdfb94a6f7a501e946431732",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02cdfb94a6f7a501e946431732",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851cdfb94a6f7a501e946431732",
            "width": 64
          }],
          "name": "New Compassion",
          "release_date": "2018-10-05",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:13ZDVl9fR4f9PlUxmRO6LQ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7pww8JMPMj1SxUfJ8wN5Kt"
          },
          "href": "https://api.spotify.com/v1/artists/7pww8JMPMj1SxUfJ8wN5Kt",
          "id": "7pww8JMPMj1SxUfJ8wN5Kt",
          "name": "HAERTS",
          "type": "artist",
          "uri": "spotify:artist:7pww8JMPMj1SxUfJ8wN5Kt"
        }],
        "disc_number": 1,
        "duration_ms": 259120,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAAA11816106"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1s1aDCCGvioUdAJQxFgCii"
        },
        "href": "https://api.spotify.com/v1/tracks/1s1aDCCGvioUdAJQxFgCii",
        "id": "1s1aDCCGvioUdAJQxFgCii",
        "is_local": false,
        "is_playable": true,
        "name": "New Compassion",
        "popularity": 25,
        "preview_url": "https://p.scdn.co/mp3-preview/a1dbc4629b934d3a3e3066c1267ea58a516b7f71?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:1s1aDCCGvioUdAJQxFgCii"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-11T19:31:30Z",
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
        "share_id": "QqIkPG3qQrOQz51HAZyiSQ",
        "share_url": "https://open.spotify.com/track/2hbHVEhTf2wcgGIveW3Toy?si=QqIkPG3qQrOQz51HAZyiSQ",
        "uri": "spotify:track:2hbHVEhTf2wcgGIveW3Toy"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5a31Ij1sTxY9LUYVwgBp8m"
            },
            "href": "https://api.spotify.com/v1/artists/5a31Ij1sTxY9LUYVwgBp8m",
            "id": "5a31Ij1sTxY9LUYVwgBp8m",
            "name": "Elvis Depressedly",
            "type": "artist",
            "uri": "spotify:artist:5a31Ij1sTxY9LUYVwgBp8m"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2tTPmZHQacMf4gQBC1PXjp"
          },
          "href": "https://api.spotify.com/v1/albums/2tTPmZHQacMf4gQBC1PXjp",
          "id": "2tTPmZHQacMf4gQBC1PXjp",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27310c366e948e064677a277dc8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0210c366e948e064677a277dc8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485110c366e948e064677a277dc8",
            "width": 64
          }],
          "name": "New Alhambra",
          "release_date": "2015-05-08",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2tTPmZHQacMf4gQBC1PXjp"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5a31Ij1sTxY9LUYVwgBp8m"
          },
          "href": "https://api.spotify.com/v1/artists/5a31Ij1sTxY9LUYVwgBp8m",
          "id": "5a31Ij1sTxY9LUYVwgBp8m",
          "name": "Elvis Depressedly",
          "type": "artist",
          "uri": "spotify:artist:5a31Ij1sTxY9LUYVwgBp8m"
        }],
        "disc_number": 1,
        "duration_ms": 166561,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMCE71300257"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2hbHVEhTf2wcgGIveW3Toy"
        },
        "href": "https://api.spotify.com/v1/tracks/2hbHVEhTf2wcgGIveW3Toy",
        "id": "2hbHVEhTf2wcgGIveW3Toy",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3LD1LVBuxvUrQBcYqHzUuh"
          },
          "href": "https://api.spotify.com/v1/tracks/3LD1LVBuxvUrQBcYqHzUuh",
          "id": "3LD1LVBuxvUrQBcYqHzUuh",
          "type": "track",
          "uri": "spotify:track:3LD1LVBuxvUrQBcYqHzUuh"
        },
        "name": "N.M.S.S.",
        "popularity": 26,
        "preview_url": "https://p.scdn.co/mp3-preview/4a4b82e4e8071e16a3531cb111fd50520c8f7d57?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2hbHVEhTf2wcgGIveW3Toy"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-02-05T22:29:28Z",
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
        "share_id": "2AFr5cbIS4SWJwzYtFV7ww",
        "share_url": "https://open.spotify.com/track/3wnJ90SCPCKvU9Jzw7osZn?si=2AFr5cbIS4SWJwzYtFV7ww",
        "uri": "spotify:track:3wnJ90SCPCKvU9Jzw7osZn"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/67zR9a98QqWJwpO7wBrGog"
            },
            "href": "https://api.spotify.com/v1/artists/67zR9a98QqWJwpO7wBrGog",
            "id": "67zR9a98QqWJwpO7wBrGog",
            "name": "Sonny & The Sunsets",
            "type": "artist",
            "uri": "spotify:artist:67zR9a98QqWJwpO7wBrGog"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4bWB13USQcMAX1bXM03JId"
          },
          "href": "https://api.spotify.com/v1/albums/4bWB13USQcMAX1bXM03JId",
          "id": "4bWB13USQcMAX1bXM03JId",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c69a61a899140219e2aa5d13",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c69a61a899140219e2aa5d13",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c69a61a899140219e2aa5d13",
            "width": 64
          }],
          "name": "Longtime Companion",
          "release_date": "2012-06-26",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4bWB13USQcMAX1bXM03JId"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/67zR9a98QqWJwpO7wBrGog"
          },
          "href": "https://api.spotify.com/v1/artists/67zR9a98QqWJwpO7wBrGog",
          "id": "67zR9a98QqWJwpO7wBrGog",
          "name": "Sonny & The Sunsets",
          "type": "artist",
          "uri": "spotify:artist:67zR9a98QqWJwpO7wBrGog"
        }],
        "disc_number": 1,
        "duration_ms": 334166,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US3R41224004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3wnJ90SCPCKvU9Jzw7osZn"
        },
        "href": "https://api.spotify.com/v1/tracks/3wnJ90SCPCKvU9Jzw7osZn",
        "id": "3wnJ90SCPCKvU9Jzw7osZn",
        "is_local": false,
        "is_playable": true,
        "name": "Pretend You Love Me",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/27b6111bde7f6c1c7244485e5f6743e6b5ae053f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:3wnJ90SCPCKvU9Jzw7osZn"
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
  "uri": "spotify:playlist:1GaLNSsybt45zVAqc8h96Y"
};

/***/ })

/******/ });