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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OkrH");


/***/ }),

/***/ "OkrH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/3Lnh68zIIE3l25LetkzwkU"
  },
  "followers": {
    "href": null,
    "total": 1
  },
  "href": "https://api.spotify.com/v1/playlists/3Lnh68zIIE3l25LetkzwkU?type=track,episode",
  "id": "3Lnh68zIIE3l25LetkzwkU",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b27321e0d683db87f25627667f4cab67616d0000b2733eff8f272cf9725d445e22c3ab67616d0000b273518c97b5b4a4a6bc109e5b3cab67616d0000b273dc724793e8cc6baa9280afe2",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b27321e0d683db87f25627667f4cab67616d0000b2733eff8f272cf9725d445e22c3ab67616d0000b273518c97b5b4a4a6bc109e5b3cab67616d0000b273dc724793e8cc6baa9280afe2",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b27321e0d683db87f25627667f4cab67616d0000b2733eff8f272cf9725d445e22c3ab67616d0000b273518c97b5b4a4a6bc109e5b3cab67616d0000b273dc724793e8cc6baa9280afe2",
    "width": 60
  }],
  "name": "June 2019",
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
    "share_id": "kBoM6WXpRjqDwybDCISDAQ",
    "share_url": "https://open.spotify.com/playlist/3Lnh68zIIE3l25LetkzwkU?si=kBoM6WXpRjqDwybDCISDAQ",
    "uri": "spotify:playlist:3Lnh68zIIE3l25LetkzwkU"
  },
  "snapshot_id": "MzMsYjU0NTRiZjU0ODhlYWYzYzdmMWQ5ZmIyMjQyYTBmYTgxNDdmYTk5Nw==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/3Lnh68zIIE3l25LetkzwkU/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2019-06-13T18:19:12Z",
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
        "share_id": "dgoj0RBHSEKHsLqqK6x1ww",
        "share_url": "https://open.spotify.com/track/058et5gtEDjEPuRVkshCON?si=dgoj0RBHSEKHsLqqK6x1ww",
        "uri": "spotify:track:058et5gtEDjEPuRVkshCON"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4tOVIRjlWWfR1RrAxyRqTE"
            },
            "href": "https://api.spotify.com/v1/artists/4tOVIRjlWWfR1RrAxyRqTE",
            "id": "4tOVIRjlWWfR1RrAxyRqTE",
            "name": "Chromatics",
            "type": "artist",
            "uri": "spotify:artist:4tOVIRjlWWfR1RrAxyRqTE"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3uoBwG6gDi7MT3OxsBmQel"
          },
          "href": "https://api.spotify.com/v1/albums/3uoBwG6gDi7MT3OxsBmQel",
          "id": "3uoBwG6gDi7MT3OxsBmQel",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273518c97b5b4a4a6bc109e5b3c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02518c97b5b4a4a6bc109e5b3c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851518c97b5b4a4a6bc109e5b3c",
            "width": 64
          }],
          "name": "Time Rider",
          "release_date": "2019-02-19",
          "release_date_precision": "day",
          "total_tracks": 3,
          "type": "album",
          "uri": "spotify:album:3uoBwG6gDi7MT3OxsBmQel"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4tOVIRjlWWfR1RrAxyRqTE"
          },
          "href": "https://api.spotify.com/v1/artists/4tOVIRjlWWfR1RrAxyRqTE",
          "id": "4tOVIRjlWWfR1RrAxyRqTE",
          "name": "Chromatics",
          "type": "artist",
          "uri": "spotify:artist:4tOVIRjlWWfR1RrAxyRqTE"
        }],
        "disc_number": 1,
        "duration_ms": 283000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM24S1907088"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/058et5gtEDjEPuRVkshCON"
        },
        "href": "https://api.spotify.com/v1/tracks/058et5gtEDjEPuRVkshCON",
        "id": "058et5gtEDjEPuRVkshCON",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/063P9fza0DJ5V4odLnVUcv"
          },
          "href": "https://api.spotify.com/v1/tracks/063P9fza0DJ5V4odLnVUcv",
          "id": "063P9fza0DJ5V4odLnVUcv",
          "type": "track",
          "uri": "spotify:track:063P9fza0DJ5V4odLnVUcv"
        },
        "name": "Time Rider",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/4a737950bdaf81d3ecd23c3cc371a644f10416ac?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:058et5gtEDjEPuRVkshCON"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-05-22T18:57:27Z",
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
        "share_id": "U5naDYHgS0WFke3M2Neo8g",
        "share_url": "https://open.spotify.com/track/48iUqAI5dulT3mAGrMwqLC?si=U5naDYHgS0WFke3M2Neo8g",
        "uri": "spotify:track:48iUqAI5dulT3mAGrMwqLC"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/32hqJxuSnHgNqJnbW7itGU"
            },
            "href": "https://api.spotify.com/v1/artists/32hqJxuSnHgNqJnbW7itGU",
            "id": "32hqJxuSnHgNqJnbW7itGU",
            "name": "Chez Ali",
            "type": "artist",
            "uri": "spotify:artist:32hqJxuSnHgNqJnbW7itGU"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6vwbXRcSBjmFl0bVaycs9r"
          },
          "href": "https://api.spotify.com/v1/albums/6vwbXRcSBjmFl0bVaycs9r",
          "id": "6vwbXRcSBjmFl0bVaycs9r",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2733eff8f272cf9725d445e22c3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e023eff8f272cf9725d445e22c3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048513eff8f272cf9725d445e22c3",
            "width": 64
          }],
          "name": "Buenas Noches Club",
          "release_date": "2018-11-09",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:6vwbXRcSBjmFl0bVaycs9r"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/32hqJxuSnHgNqJnbW7itGU"
          },
          "href": "https://api.spotify.com/v1/artists/32hqJxuSnHgNqJnbW7itGU",
          "id": "32hqJxuSnHgNqJnbW7itGU",
          "name": "Chez Ali",
          "type": "artist",
          "uri": "spotify:artist:32hqJxuSnHgNqJnbW7itGU"
        }],
        "disc_number": 1,
        "duration_ms": 191840,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "SE5OC1800701"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/48iUqAI5dulT3mAGrMwqLC"
        },
        "href": "https://api.spotify.com/v1/tracks/48iUqAI5dulT3mAGrMwqLC",
        "id": "48iUqAI5dulT3mAGrMwqLC",
        "is_local": false,
        "is_playable": true,
        "name": "Buenas Noches Club",
        "popularity": 11,
        "preview_url": "https://p.scdn.co/mp3-preview/2cb7bcffbc9c30d0229017b690a19c4c8d24039f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:48iUqAI5dulT3mAGrMwqLC"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-05-22T18:11:12Z",
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
        "share_id": "CX2n2sxzQdSi2ddJY2MAlA",
        "share_url": "https://open.spotify.com/track/3oP6JPvXDk00ATB28zEATr?si=CX2n2sxzQdSi2ddJY2MAlA",
        "uri": "spotify:track:3oP6JPvXDk00ATB28zEATr"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4kU5nN9B7hXLqUg7sMiQKw"
            },
            "href": "https://api.spotify.com/v1/artists/4kU5nN9B7hXLqUg7sMiQKw",
            "id": "4kU5nN9B7hXLqUg7sMiQKw",
            "name": "Operators",
            "type": "artist",
            "uri": "spotify:artist:4kU5nN9B7hXLqUg7sMiQKw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/73vFbq0jDF58ZRD4sXcvnh"
          },
          "href": "https://api.spotify.com/v1/albums/73vFbq0jDF58ZRD4sXcvnh",
          "id": "73vFbq0jDF58ZRD4sXcvnh",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27321e0d683db87f25627667f4c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0221e0d683db87f25627667f4c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485121e0d683db87f25627667f4c",
            "width": 64
          }],
          "name": "Blue Wave",
          "release_date": "2016-04-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:73vFbq0jDF58ZRD4sXcvnh"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4kU5nN9B7hXLqUg7sMiQKw"
          },
          "href": "https://api.spotify.com/v1/artists/4kU5nN9B7hXLqUg7sMiQKw",
          "id": "4kU5nN9B7hXLqUg7sMiQKw",
          "name": "Operators",
          "type": "artist",
          "uri": "spotify:artist:4kU5nN9B7hXLqUg7sMiQKw"
        }],
        "disc_number": 1,
        "duration_ms": 271920,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAL451674002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3oP6JPvXDk00ATB28zEATr"
        },
        "href": "https://api.spotify.com/v1/tracks/3oP6JPvXDk00ATB28zEATr",
        "id": "3oP6JPvXDk00ATB28zEATr",
        "is_local": false,
        "is_playable": true,
        "name": "Control",
        "popularity": 20,
        "preview_url": "https://p.scdn.co/mp3-preview/fa57a9b24827601183ecba64aeed952f3590b142?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3oP6JPvXDk00ATB28zEATr"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-05-22T18:11:20Z",
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
        "share_id": "zrsdU4kWQUSLFJbALLIS7w",
        "share_url": "https://open.spotify.com/track/2En9hPrl1Z2raU3CeYleUI?si=zrsdU4kWQUSLFJbALLIS7w",
        "uri": "spotify:track:2En9hPrl1Z2raU3CeYleUI"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2JFTRDi5v7JtqoouVe1z5D"
            },
            "href": "https://api.spotify.com/v1/artists/2JFTRDi5v7JtqoouVe1z5D",
            "id": "2JFTRDi5v7JtqoouVe1z5D",
            "name": "Slow Pulp",
            "type": "artist",
            "uri": "spotify:artist:2JFTRDi5v7JtqoouVe1z5D"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2gSm64JocQqESwqWSdEnjA"
          },
          "href": "https://api.spotify.com/v1/albums/2gSm64JocQqESwqWSdEnjA",
          "id": "2gSm64JocQqESwqWSdEnjA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273dc724793e8cc6baa9280afe2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02dc724793e8cc6baa9280afe2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851dc724793e8cc6baa9280afe2",
            "width": 64
          }],
          "name": "Steel Birds",
          "release_date": "2018-11-01",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:2gSm64JocQqESwqWSdEnjA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2JFTRDi5v7JtqoouVe1z5D"
          },
          "href": "https://api.spotify.com/v1/artists/2JFTRDi5v7JtqoouVe1z5D",
          "id": "2JFTRDi5v7JtqoouVe1z5D",
          "name": "Slow Pulp",
          "type": "artist",
          "uri": "spotify:artist:2JFTRDi5v7JtqoouVe1z5D"
        }],
        "disc_number": 1,
        "duration_ms": 203500,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADX1830837"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2En9hPrl1Z2raU3CeYleUI"
        },
        "href": "https://api.spotify.com/v1/tracks/2En9hPrl1Z2raU3CeYleUI",
        "id": "2En9hPrl1Z2raU3CeYleUI",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4IZs7g9GdG5lrlSaZDtbdL"
          },
          "href": "https://api.spotify.com/v1/tracks/4IZs7g9GdG5lrlSaZDtbdL",
          "id": "4IZs7g9GdG5lrlSaZDtbdL",
          "type": "track",
          "uri": "spotify:track:4IZs7g9GdG5lrlSaZDtbdL"
        },
        "name": "Steel Birds",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/2058399776ff34078726242fb9808e241ba8c081?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2En9hPrl1Z2raU3CeYleUI"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-05-22T18:56:55Z",
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
        "share_id": "-jSasAywRGmd4Hn3AeiHhg",
        "share_url": "https://open.spotify.com/track/42TsQYdnZB3h775HcQVUMR?si=-jSasAywRGmd4Hn3AeiHhg",
        "uri": "spotify:track:42TsQYdnZB3h775HcQVUMR"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5ZMwoAjeDtLJ0XRwRTgaK8"
            },
            "href": "https://api.spotify.com/v1/artists/5ZMwoAjeDtLJ0XRwRTgaK8",
            "id": "5ZMwoAjeDtLJ0XRwRTgaK8",
            "name": "Quantic",
            "type": "artist",
            "uri": "spotify:artist:5ZMwoAjeDtLJ0XRwRTgaK8"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1Q0ptrKTqYkFFRBUfBWqxS"
          },
          "href": "https://api.spotify.com/v1/albums/1Q0ptrKTqYkFFRBUfBWqxS",
          "id": "1Q0ptrKTqYkFFRBUfBWqxS",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738d3d70d041c08c3876f8bbd3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028d3d70d041c08c3876f8bbd3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518d3d70d041c08c3876f8bbd3",
            "width": 64
          }],
          "name": "You Used to Love Me (feat. Denitia)",
          "release_date": "2019-05-07",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:1Q0ptrKTqYkFFRBUfBWqxS"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5ZMwoAjeDtLJ0XRwRTgaK8"
          },
          "href": "https://api.spotify.com/v1/artists/5ZMwoAjeDtLJ0XRwRTgaK8",
          "id": "5ZMwoAjeDtLJ0XRwRTgaK8",
          "name": "Quantic",
          "type": "artist",
          "uri": "spotify:artist:5ZMwoAjeDtLJ0XRwRTgaK8"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6Dfjb3S1itIcLl2toYSiRp"
          },
          "href": "https://api.spotify.com/v1/artists/6Dfjb3S1itIcLl2toYSiRp",
          "id": "6Dfjb3S1itIcLl2toYSiRp",
          "name": "Denitia",
          "type": "artist",
          "uri": "spotify:artist:6Dfjb3S1itIcLl2toYSiRp"
        }],
        "disc_number": 1,
        "duration_ms": 378240,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBEUE1900015"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/42TsQYdnZB3h775HcQVUMR"
        },
        "href": "https://api.spotify.com/v1/tracks/42TsQYdnZB3h775HcQVUMR",
        "id": "42TsQYdnZB3h775HcQVUMR",
        "is_local": false,
        "is_playable": true,
        "name": "You Used to Love Me (feat. Denitia)",
        "popularity": 4,
        "preview_url": "https://p.scdn.co/mp3-preview/5f7138b720338558763b0573d62c1cd100fe47bc?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:42TsQYdnZB3h775HcQVUMR"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-05-24T16:48:15Z",
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
        "share_id": "NFZ-PWJ2Sd6sCMzYEXtrQg",
        "share_url": "https://open.spotify.com/track/5JkKjjqTWVKOC4iuuvRKfW?si=NFZ-PWJ2Sd6sCMzYEXtrQg",
        "uri": "spotify:track:5JkKjjqTWVKOC4iuuvRKfW"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0Zsp7eS6zZEDnEsZaJtr7U"
            },
            "href": "https://api.spotify.com/v1/artists/0Zsp7eS6zZEDnEsZaJtr7U",
            "id": "0Zsp7eS6zZEDnEsZaJtr7U",
            "name": "Guards",
            "type": "artist",
            "uri": "spotify:artist:0Zsp7eS6zZEDnEsZaJtr7U"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1QFzjgbPu0cQPwOTahoI33"
          },
          "href": "https://api.spotify.com/v1/albums/1QFzjgbPu0cQPwOTahoI33",
          "id": "1QFzjgbPu0cQPwOTahoI33",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b29b474f3c71d6db13fa2c06",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b29b474f3c71d6db13fa2c06",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b29b474f3c71d6db13fa2c06",
            "width": 64
          }],
          "name": "Modern Hymns",
          "release_date": "2019-05-22",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:1QFzjgbPu0cQPwOTahoI33"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0Zsp7eS6zZEDnEsZaJtr7U"
          },
          "href": "https://api.spotify.com/v1/artists/0Zsp7eS6zZEDnEsZaJtr7U",
          "id": "0Zsp7eS6zZEDnEsZaJtr7U",
          "name": "Guards",
          "type": "artist",
          "uri": "spotify:artist:0Zsp7eS6zZEDnEsZaJtr7U"
        }],
        "disc_number": 1,
        "duration_ms": 207403,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1940758"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5JkKjjqTWVKOC4iuuvRKfW"
        },
        "href": "https://api.spotify.com/v1/tracks/5JkKjjqTWVKOC4iuuvRKfW",
        "id": "5JkKjjqTWVKOC4iuuvRKfW",
        "is_local": false,
        "is_playable": true,
        "name": "Take My Mind",
        "popularity": 17,
        "preview_url": "https://p.scdn.co/mp3-preview/92090552321c91ff851c77ba94b522dddfe33da7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5JkKjjqTWVKOC4iuuvRKfW"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-05-24T22:23:52Z",
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
        "share_id": "qD4w6EFcSMWdHvuxSe9-RQ",
        "share_url": "https://open.spotify.com/track/23HiaHhxDSWGSTfSIOLe8P?si=qD4w6EFcSMWdHvuxSe9-RQ",
        "uri": "spotify:track:23HiaHhxDSWGSTfSIOLe8P"
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
        "duration_ms": 111500,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMCE71300262"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/23HiaHhxDSWGSTfSIOLe8P"
        },
        "href": "https://api.spotify.com/v1/tracks/23HiaHhxDSWGSTfSIOLe8P",
        "id": "23HiaHhxDSWGSTfSIOLe8P",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4StofAgrqJDNBzln6UCowq"
          },
          "href": "https://api.spotify.com/v1/tracks/4StofAgrqJDNBzln6UCowq",
          "id": "4StofAgrqJDNBzln6UCowq",
          "type": "track",
          "uri": "spotify:track:4StofAgrqJDNBzln6UCowq"
        },
        "name": "Ease",
        "popularity": 24,
        "preview_url": "https://p.scdn.co/mp3-preview/9d7c99b4bc041ca3ac5aa501fd8d4ec6794c0307?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:23HiaHhxDSWGSTfSIOLe8P"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-06-13T18:18:46Z",
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
        "share_id": "U5MNDfBeTEaELrnm3Nhalg",
        "share_url": "https://open.spotify.com/track/1yAjyDNUgKh1nftgItdnEq?si=U5MNDfBeTEaELrnm3Nhalg",
        "uri": "spotify:track:1yAjyDNUgKh1nftgItdnEq"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2kYGhtpk80ssZY8FRQH5Xo"
            },
            "href": "https://api.spotify.com/v1/artists/2kYGhtpk80ssZY8FRQH5Xo",
            "id": "2kYGhtpk80ssZY8FRQH5Xo",
            "name": "Psychic Twin",
            "type": "artist",
            "uri": "spotify:artist:2kYGhtpk80ssZY8FRQH5Xo"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/60xgHzEXJ3HbLUH96niOix"
          },
          "href": "https://api.spotify.com/v1/albums/60xgHzEXJ3HbLUH96niOix",
          "id": "60xgHzEXJ3HbLUH96niOix",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f71fcdd9d6357c6cdffcd415",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f71fcdd9d6357c6cdffcd415",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f71fcdd9d6357c6cdffcd415",
            "width": 64
          }],
          "name": "Strange Diary",
          "release_date": "2016-09-09",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:60xgHzEXJ3HbLUH96niOix"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2kYGhtpk80ssZY8FRQH5Xo"
          },
          "href": "https://api.spotify.com/v1/artists/2kYGhtpk80ssZY8FRQH5Xo",
          "id": "2kYGhtpk80ssZY8FRQH5Xo",
          "name": "Psychic Twin",
          "type": "artist",
          "uri": "spotify:artist:2kYGhtpk80ssZY8FRQH5Xo"
        }],
        "disc_number": 1,
        "duration_ms": 259626,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US3R41630706"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1yAjyDNUgKh1nftgItdnEq"
        },
        "href": "https://api.spotify.com/v1/tracks/1yAjyDNUgKh1nftgItdnEq",
        "id": "1yAjyDNUgKh1nftgItdnEq",
        "is_local": false,
        "is_playable": true,
        "name": "Hopeless",
        "popularity": 17,
        "preview_url": "https://p.scdn.co/mp3-preview/99005c86411d588832b2d8106b54462b6f02cfdc?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:1yAjyDNUgKh1nftgItdnEq"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-06-13T21:20:37Z",
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
        "share_id": "le-zeTAXRvGNZ6SZdywXKQ",
        "share_url": "https://open.spotify.com/track/6D8FahZxFhUMcKbPUEn2gf?si=le-zeTAXRvGNZ6SZdywXKQ",
        "uri": "spotify:track:6D8FahZxFhUMcKbPUEn2gf"
      },
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
            },
            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
            "id": "0LyfQWJT6nXafLPZqxe9Of",
            "name": "Various Artists",
            "type": "artist",
            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0fN0GVqX6ry9DVkCHaItsS"
          },
          "href": "https://api.spotify.com/v1/albums/0fN0GVqX6ry9DVkCHaItsS",
          "id": "0fN0GVqX6ry9DVkCHaItsS",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273625db81a4d3938d5e1901217",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02625db81a4d3938d5e1901217",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851625db81a4d3938d5e1901217",
            "width": 64
          }],
          "name": "Synthwave, Vol. 3",
          "release_date": "2016-04-15",
          "release_date_precision": "day",
          "total_tracks": 21,
          "type": "album",
          "uri": "spotify:album:0fN0GVqX6ry9DVkCHaItsS"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3qbXYP5qPi1Sd0XrP8cnCN"
          },
          "href": "https://api.spotify.com/v1/artists/3qbXYP5qPi1Sd0XrP8cnCN",
          "id": "3qbXYP5qPi1Sd0XrP8cnCN",
          "name": "Who Ha",
          "type": "artist",
          "uri": "spotify:artist:3qbXYP5qPi1Sd0XrP8cnCN"
        }],
        "disc_number": 1,
        "duration_ms": 299412,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FR10S1680610"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6D8FahZxFhUMcKbPUEn2gf"
        },
        "href": "https://api.spotify.com/v1/tracks/6D8FahZxFhUMcKbPUEn2gf",
        "id": "6D8FahZxFhUMcKbPUEn2gf",
        "is_local": false,
        "is_playable": true,
        "name": "Magenta Teal Desert Cruise",
        "popularity": 13,
        "preview_url": "https://p.scdn.co/mp3-preview/082c9ff57c02886b984887a510470f02db5b3c0c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 19,
        "type": "track",
        "uri": "spotify:track:6D8FahZxFhUMcKbPUEn2gf"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-06-13T18:20:57Z",
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
        "share_id": "mTPR4mIfTwufE5fxV3PX6Q",
        "share_url": "https://open.spotify.com/track/6vJFWet1sMnWrKE8dDmfGG?si=mTPR4mIfTwufE5fxV3PX6Q",
        "uri": "spotify:track:6vJFWet1sMnWrKE8dDmfGG"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4tPyCwWrsvZ8OKYl7QRavL"
            },
            "href": "https://api.spotify.com/v1/artists/4tPyCwWrsvZ8OKYl7QRavL",
            "id": "4tPyCwWrsvZ8OKYl7QRavL",
            "name": "Yumi Zouma",
            "type": "artist",
            "uri": "spotify:artist:4tPyCwWrsvZ8OKYl7QRavL"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0HR7LLku7QMhusktFwyQx6"
          },
          "href": "https://api.spotify.com/v1/albums/0HR7LLku7QMhusktFwyQx6",
          "id": "0HR7LLku7QMhusktFwyQx6",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736f745a4913144eea04987a96",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026f745a4913144eea04987a96",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516f745a4913144eea04987a96",
            "width": 64
          }],
          "name": "Bruise",
          "release_date": "2019-05-22",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:0HR7LLku7QMhusktFwyQx6"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4tPyCwWrsvZ8OKYl7QRavL"
          },
          "href": "https://api.spotify.com/v1/artists/4tPyCwWrsvZ8OKYl7QRavL",
          "id": "4tPyCwWrsvZ8OKYl7QRavL",
          "name": "Yumi Zouma",
          "type": "artist",
          "uri": "spotify:artist:4tPyCwWrsvZ8OKYl7QRavL"
        }],
        "disc_number": 1,
        "duration_ms": 232579,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZES81994326"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6vJFWet1sMnWrKE8dDmfGG"
        },
        "href": "https://api.spotify.com/v1/tracks/6vJFWet1sMnWrKE8dDmfGG",
        "id": "6vJFWet1sMnWrKE8dDmfGG",
        "is_local": false,
        "is_playable": true,
        "name": "Bruise",
        "popularity": 50,
        "preview_url": "https://p.scdn.co/mp3-preview/536aa6905723578338118d782a73ccd6a772fb83?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6vJFWet1sMnWrKE8dDmfGG"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-06-18T18:14:28Z",
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
        "share_id": "idgILBqLRxmVhA_dtjYBtw",
        "share_url": "https://open.spotify.com/track/7q0FixRkB2OjopiYCX8IDQ?si=idgILBqLRxmVhA_dtjYBtw",
        "uri": "spotify:track:7q0FixRkB2OjopiYCX8IDQ"
      },
      "track": {
        "album": {
          "album_type": "single",
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
            "spotify": "https://open.spotify.com/album/744kFFQaEHBi1Zg9JHWcoK"
          },
          "href": "https://api.spotify.com/v1/albums/744kFFQaEHBi1Zg9JHWcoK",
          "id": "744kFFQaEHBi1Zg9JHWcoK",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735adc6698aad5fa62066f39bc",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025adc6698aad5fa62066f39bc",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515adc6698aad5fa62066f39bc",
            "width": 64
          }],
          "name": "Carl Sagan EP",
          "release_date": "2017-01-06",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:744kFFQaEHBi1Zg9JHWcoK"
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
        "duration_ms": 343186,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1500758"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7q0FixRkB2OjopiYCX8IDQ"
        },
        "href": "https://api.spotify.com/v1/tracks/7q0FixRkB2OjopiYCX8IDQ",
        "id": "7q0FixRkB2OjopiYCX8IDQ",
        "is_local": false,
        "is_playable": true,
        "name": "Maria",
        "popularity": 18,
        "preview_url": "https://p.scdn.co/mp3-preview/488554f5ba06a9341d32a1766c3a426621e98d78?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:7q0FixRkB2OjopiYCX8IDQ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-06-18T18:17:42Z",
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
        "share_id": "PAUzRS3yT02l6ogMmTxlkg",
        "share_url": "https://open.spotify.com/track/1pcSDUJcT3Y1kOjKZnlZ4B?si=PAUzRS3yT02l6ogMmTxlkg",
        "uri": "spotify:track:1pcSDUJcT3Y1kOjKZnlZ4B"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4D42J3IJpcTm3zxzmZ7TCV"
            },
            "href": "https://api.spotify.com/v1/artists/4D42J3IJpcTm3zxzmZ7TCV",
            "id": "4D42J3IJpcTm3zxzmZ7TCV",
            "name": "The Undercover Dream Lovers",
            "type": "artist",
            "uri": "spotify:artist:4D42J3IJpcTm3zxzmZ7TCV"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0i5JZDenr4uUCXW2hO3pPJ"
          },
          "href": "https://api.spotify.com/v1/albums/0i5JZDenr4uUCXW2hO3pPJ",
          "id": "0i5JZDenr4uUCXW2hO3pPJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ed83687031becc6a81995278",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ed83687031becc6a81995278",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ed83687031becc6a81995278",
            "width": 64
          }],
          "name": "In Real Time",
          "release_date": "2018-03-01",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:0i5JZDenr4uUCXW2hO3pPJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4D42J3IJpcTm3zxzmZ7TCV"
          },
          "href": "https://api.spotify.com/v1/artists/4D42J3IJpcTm3zxzmZ7TCV",
          "id": "4D42J3IJpcTm3zxzmZ7TCV",
          "name": "The Undercover Dream Lovers",
          "type": "artist",
          "uri": "spotify:artist:4D42J3IJpcTm3zxzmZ7TCV"
        }],
        "disc_number": 1,
        "duration_ms": 210561,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADK1761473"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1pcSDUJcT3Y1kOjKZnlZ4B"
        },
        "href": "https://api.spotify.com/v1/tracks/1pcSDUJcT3Y1kOjKZnlZ4B",
        "id": "1pcSDUJcT3Y1kOjKZnlZ4B",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1EWwdSiZ96MuOm6Jl77w7Y"
          },
          "href": "https://api.spotify.com/v1/tracks/1EWwdSiZ96MuOm6Jl77w7Y",
          "id": "1EWwdSiZ96MuOm6Jl77w7Y",
          "type": "track",
          "uri": "spotify:track:1EWwdSiZ96MuOm6Jl77w7Y"
        },
        "name": "Feelin' Left Out",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/83a1ed810d90fc03fde00b14a6788006af371f72?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1pcSDUJcT3Y1kOjKZnlZ4B"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-06-18T20:39:31Z",
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
        "share_id": "eNrwVEP4TjCrpuezsvoAow",
        "share_url": "https://open.spotify.com/track/0w9BogmsQSklaERVHIF9e1?si=eNrwVEP4TjCrpuezsvoAow",
        "uri": "spotify:track:0w9BogmsQSklaERVHIF9e1"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1nEGjL7aMVdNQzsfQPKdGr"
            },
            "href": "https://api.spotify.com/v1/artists/1nEGjL7aMVdNQzsfQPKdGr",
            "id": "1nEGjL7aMVdNQzsfQPKdGr",
            "name": "Hazel English",
            "type": "artist",
            "uri": "spotify:artist:1nEGjL7aMVdNQzsfQPKdGr"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4tKnS9Q0lgN3i7SmXi4mGI"
          },
          "href": "https://api.spotify.com/v1/albums/4tKnS9Q0lgN3i7SmXi4mGI",
          "id": "4tKnS9Q0lgN3i7SmXi4mGI",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f0a4bb4b2fc663b082f9fd9f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f0a4bb4b2fc663b082f9fd9f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f0a4bb4b2fc663b082f9fd9f",
            "width": 64
          }],
          "name": "Just Give In / Never Going Home",
          "release_date": "2017-05-26",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4tKnS9Q0lgN3i7SmXi4mGI"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1nEGjL7aMVdNQzsfQPKdGr"
          },
          "href": "https://api.spotify.com/v1/artists/1nEGjL7aMVdNQzsfQPKdGr",
          "id": "1nEGjL7aMVdNQzsfQPKdGr",
          "name": "Hazel English",
          "type": "artist",
          "uri": "spotify:artist:1nEGjL7aMVdNQzsfQPKdGr"
        }],
        "disc_number": 1,
        "duration_ms": 198600,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBX721600140"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0w9BogmsQSklaERVHIF9e1"
        },
        "href": "https://api.spotify.com/v1/tracks/0w9BogmsQSklaERVHIF9e1",
        "id": "0w9BogmsQSklaERVHIF9e1",
        "is_local": false,
        "is_playable": true,
        "name": "I'm Fine",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/9af89aa21ca22b494f28bfce87405ca5909cf935?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:0w9BogmsQSklaERVHIF9e1"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-06-18T23:39:10Z",
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
        "share_id": "koFeNQaGRSmJ3jZxYxqU_Q",
        "share_url": "https://open.spotify.com/track/7oJmIBxEAYjfkS7lhZ7M1S?si=koFeNQaGRSmJ3jZxYxqU_Q",
        "uri": "spotify:track:7oJmIBxEAYjfkS7lhZ7M1S"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7o96HO2zrujyATtVsqGhh3"
            },
            "href": "https://api.spotify.com/v1/artists/7o96HO2zrujyATtVsqGhh3",
            "id": "7o96HO2zrujyATtVsqGhh3",
            "name": "Goth Babe",
            "type": "artist",
            "uri": "spotify:artist:7o96HO2zrujyATtVsqGhh3"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7LPsBxxixuOPJl7grf3PX3"
          },
          "href": "https://api.spotify.com/v1/albums/7LPsBxxixuOPJl7grf3PX3",
          "id": "7LPsBxxixuOPJl7grf3PX3",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27317b9a1fdc0e42359da5409a8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0217b9a1fdc0e42359da5409a8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485117b9a1fdc0e42359da5409a8",
            "width": 64
          }],
          "name": "Sometimes",
          "release_date": "2018-05-07",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7LPsBxxixuOPJl7grf3PX3"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7o96HO2zrujyATtVsqGhh3"
          },
          "href": "https://api.spotify.com/v1/artists/7o96HO2zrujyATtVsqGhh3",
          "id": "7o96HO2zrujyATtVsqGhh3",
          "name": "Goth Babe",
          "type": "artist",
          "uri": "spotify:artist:7o96HO2zrujyATtVsqGhh3"
        }],
        "disc_number": 1,
        "duration_ms": 262736,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADQ1813156"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7oJmIBxEAYjfkS7lhZ7M1S"
        },
        "href": "https://api.spotify.com/v1/tracks/7oJmIBxEAYjfkS7lhZ7M1S",
        "id": "7oJmIBxEAYjfkS7lhZ7M1S",
        "is_local": false,
        "is_playable": true,
        "name": "Sometimes",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/c813b527f7c65ba504dba3ce9fdfd435ba5e701f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7oJmIBxEAYjfkS7lhZ7M1S"
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
  "uri": "spotify:playlist:3Lnh68zIIE3l25LetkzwkU"
};

/***/ })

/******/ });