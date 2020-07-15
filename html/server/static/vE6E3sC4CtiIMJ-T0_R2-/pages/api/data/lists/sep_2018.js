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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fKgA");


/***/ }),

/***/ "fKgA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/5IzS4BQ9ZSo4RMi18cBDhX"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/5IzS4BQ9ZSo4RMi18cBDhX?type=track,episode",
  "id": "5IzS4BQ9ZSo4RMi18cBDhX",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2734ca0948cbc936dd4176221a0ab67616d0000b273558ba952fda997e0955b286aab67616d0000b2737b9e5a9d697bcb8bf86a83b4ab67616d0000b273e01f721cfd0013e89a6d3e17",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2734ca0948cbc936dd4176221a0ab67616d0000b273558ba952fda997e0955b286aab67616d0000b2737b9e5a9d697bcb8bf86a83b4ab67616d0000b273e01f721cfd0013e89a6d3e17",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2734ca0948cbc936dd4176221a0ab67616d0000b273558ba952fda997e0955b286aab67616d0000b2737b9e5a9d697bcb8bf86a83b4ab67616d0000b273e01f721cfd0013e89a6d3e17",
    "width": 60
  }],
  "name": "Sept 2018",
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
    "share_id": "0P8o0JK8Tg-szUmgWIVd9A",
    "share_url": "https://open.spotify.com/playlist/5IzS4BQ9ZSo4RMi18cBDhX?si=0P8o0JK8Tg-szUmgWIVd9A",
    "uri": "spotify:playlist:5IzS4BQ9ZSo4RMi18cBDhX"
  },
  "snapshot_id": "NDQsNTY5ZDU0ODAwMTY3NmQxYjIyMjVjNWJjODg3ZGRkY2Y2ZjdhNDBmMA==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/5IzS4BQ9ZSo4RMi18cBDhX/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2018-09-10T20:42:29Z",
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
        "share_id": "OilDOY_aTmKrcN1B5qQbLg",
        "share_url": "https://open.spotify.com/track/4A11HoXH8oIUfWtJaTE34T?si=OilDOY_aTmKrcN1B5qQbLg",
        "uri": "spotify:track:4A11HoXH8oIUfWtJaTE34T"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4nts0oxMT67lVUoi5Kjxrb"
            },
            "href": "https://api.spotify.com/v1/artists/4nts0oxMT67lVUoi5Kjxrb",
            "id": "4nts0oxMT67lVUoi5Kjxrb",
            "name": "Solomon Burke",
            "type": "artist",
            "uri": "spotify:artist:4nts0oxMT67lVUoi5Kjxrb"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5fPt2yO2JG9ymtO1PNz5iK"
          },
          "href": "https://api.spotify.com/v1/albums/5fPt2yO2JG9ymtO1PNz5iK",
          "id": "5fPt2yO2JG9ymtO1PNz5iK",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273558ba952fda997e0955b286a",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02558ba952fda997e0955b286a",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851558ba952fda997e0955b286a",
            "width": 64
          }],
          "name": "Don't Give Up On Me",
          "release_date": "2002",
          "release_date_precision": "year",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:5fPt2yO2JG9ymtO1PNz5iK"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4nts0oxMT67lVUoi5Kjxrb"
          },
          "href": "https://api.spotify.com/v1/artists/4nts0oxMT67lVUoi5Kjxrb",
          "id": "4nts0oxMT67lVUoi5Kjxrb",
          "name": "Solomon Burke",
          "type": "artist",
          "uri": "spotify:artist:4nts0oxMT67lVUoi5Kjxrb"
        }],
        "disc_number": 1,
        "duration_ms": 225533,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USFP60338101"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4A11HoXH8oIUfWtJaTE34T"
        },
        "href": "https://api.spotify.com/v1/tracks/4A11HoXH8oIUfWtJaTE34T",
        "id": "4A11HoXH8oIUfWtJaTE34T",
        "is_local": false,
        "is_playable": true,
        "name": "Don't Give Up On Me",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/da47f16c13d2a4c5b04f0291dafe43913a525a0d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4A11HoXH8oIUfWtJaTE34T"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-01T01:09:02Z",
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
        "share_id": "xn8ENs54QV6SiE0y8uDVOg",
        "share_url": "https://open.spotify.com/track/3pqeB2hm7mNHfvvnKxtdCG?si=xn8ENs54QV6SiE0y8uDVOg",
        "uri": "spotify:track:3pqeB2hm7mNHfvvnKxtdCG"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2kTZfKGZEj8R76z3ooKOF1"
            },
            "href": "https://api.spotify.com/v1/artists/2kTZfKGZEj8R76z3ooKOF1",
            "id": "2kTZfKGZEj8R76z3ooKOF1",
            "name": "Your Smith",
            "type": "artist",
            "uri": "spotify:artist:2kTZfKGZEj8R76z3ooKOF1"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5xFY9YKdsUmW2ABJv6yUFY"
          },
          "href": "https://api.spotify.com/v1/albums/5xFY9YKdsUmW2ABJv6yUFY",
          "id": "5xFY9YKdsUmW2ABJv6yUFY",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e01f721cfd0013e89a6d3e17",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e01f721cfd0013e89a6d3e17",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e01f721cfd0013e89a6d3e17",
            "width": 64
          }],
          "name": "Bad Habit",
          "release_date": "2018-07-27",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5xFY9YKdsUmW2ABJv6yUFY"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2kTZfKGZEj8R76z3ooKOF1"
          },
          "href": "https://api.spotify.com/v1/artists/2kTZfKGZEj8R76z3ooKOF1",
          "id": "2kTZfKGZEj8R76z3ooKOF1",
          "name": "Your Smith",
          "type": "artist",
          "uri": "spotify:artist:2kTZfKGZEj8R76z3ooKOF1"
        }],
        "disc_number": 1,
        "duration_ms": 234893,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM24S1819854"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3pqeB2hm7mNHfvvnKxtdCG"
        },
        "href": "https://api.spotify.com/v1/tracks/3pqeB2hm7mNHfvvnKxtdCG",
        "id": "3pqeB2hm7mNHfvvnKxtdCG",
        "is_local": false,
        "is_playable": true,
        "name": "Bad Habit",
        "popularity": 51,
        "preview_url": "https://p.scdn.co/mp3-preview/45a5c51d9af38f24a4f94872ee1dfeaa11959c65?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3pqeB2hm7mNHfvvnKxtdCG"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-01T01:09:37Z",
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
        "share_id": "r5tqVVZuSM-XXM7JM6nDGw",
        "share_url": "https://open.spotify.com/track/3gq7RBia7mWquzTSQWtIEt?si=r5tqVVZuSM-XXM7JM6nDGw",
        "uri": "spotify:track:3gq7RBia7mWquzTSQWtIEt"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6xriZDSK3wPXhOoZXr9fzF"
            },
            "href": "https://api.spotify.com/v1/artists/6xriZDSK3wPXhOoZXr9fzF",
            "id": "6xriZDSK3wPXhOoZXr9fzF",
            "name": "Rubblebucket",
            "type": "artist",
            "uri": "spotify:artist:6xriZDSK3wPXhOoZXr9fzF"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5vWR02ZJpqDAo6LWZ1FeqY"
          },
          "href": "https://api.spotify.com/v1/albums/5vWR02ZJpqDAo6LWZ1FeqY",
          "id": "5vWR02ZJpqDAo6LWZ1FeqY",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734ca0948cbc936dd4176221a0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024ca0948cbc936dd4176221a0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514ca0948cbc936dd4176221a0",
            "width": 64
          }],
          "name": "Fruity",
          "release_date": "2018-05-22",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5vWR02ZJpqDAo6LWZ1FeqY"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6xriZDSK3wPXhOoZXr9fzF"
          },
          "href": "https://api.spotify.com/v1/artists/6xriZDSK3wPXhOoZXr9fzF",
          "id": "6xriZDSK3wPXhOoZXr9fzF",
          "name": "Rubblebucket",
          "type": "artist",
          "uri": "spotify:artist:6xriZDSK3wPXhOoZXr9fzF"
        }],
        "disc_number": 1,
        "duration_ms": 230133,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM5BK1800204"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3gq7RBia7mWquzTSQWtIEt"
        },
        "href": "https://api.spotify.com/v1/tracks/3gq7RBia7mWquzTSQWtIEt",
        "id": "3gq7RBia7mWquzTSQWtIEt",
        "is_local": false,
        "is_playable": true,
        "name": "Fruity",
        "popularity": 27,
        "preview_url": "https://p.scdn.co/mp3-preview/7659cdc88fabce5ff6c0b5c8d38bfa2b1455fe58?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3gq7RBia7mWquzTSQWtIEt"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-12T18:08:43Z",
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
        "share_id": "8jaLnMW5TsCPKCY01H-Paw",
        "share_url": "https://open.spotify.com/track/4f9UzrnxHsWKIheG1TRrEG?si=8jaLnMW5TsCPKCY01H-Paw",
        "uri": "spotify:track:4f9UzrnxHsWKIheG1TRrEG"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4NpFxQe2UvRCAjto3JqlSl"
            },
            "href": "https://api.spotify.com/v1/artists/4NpFxQe2UvRCAjto3JqlSl",
            "id": "4NpFxQe2UvRCAjto3JqlSl",
            "name": "Greta Van Fleet",
            "type": "artist",
            "uri": "spotify:artist:4NpFxQe2UvRCAjto3JqlSl"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7zeCZY6rQRufc8IHGKyXGX"
          },
          "href": "https://api.spotify.com/v1/albums/7zeCZY6rQRufc8IHGKyXGX",
          "id": "7zeCZY6rQRufc8IHGKyXGX",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737b9e5a9d697bcb8bf86a83b4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027b9e5a9d697bcb8bf86a83b4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517b9e5a9d697bcb8bf86a83b4",
            "width": 64
          }],
          "name": "Anthem Of The Peaceful Army",
          "release_date": "2018-10-19",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:7zeCZY6rQRufc8IHGKyXGX"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4NpFxQe2UvRCAjto3JqlSl"
          },
          "href": "https://api.spotify.com/v1/artists/4NpFxQe2UvRCAjto3JqlSl",
          "id": "4NpFxQe2UvRCAjto3JqlSl",
          "name": "Greta Van Fleet",
          "type": "artist",
          "uri": "spotify:artist:4NpFxQe2UvRCAjto3JqlSl"
        }],
        "disc_number": 1,
        "duration_ms": 267333,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71811320"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4f9UzrnxHsWKIheG1TRrEG"
        },
        "href": "https://api.spotify.com/v1/tracks/4f9UzrnxHsWKIheG1TRrEG",
        "id": "4f9UzrnxHsWKIheG1TRrEG",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/11cNAr4rCM26RWKWaZmq3K"
          },
          "href": "https://api.spotify.com/v1/tracks/11cNAr4rCM26RWKWaZmq3K",
          "id": "11cNAr4rCM26RWKWaZmq3K",
          "type": "track",
          "uri": "spotify:track:11cNAr4rCM26RWKWaZmq3K"
        },
        "name": "Watching Over",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/04f33c29f392d952a0c1a9821a2bdeacdd68ea97?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:4f9UzrnxHsWKIheG1TRrEG"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-15T19:44:16Z",
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
        "share_id": "r-Ak1M-3Qa65fpIZ16b3DQ",
        "share_url": "https://open.spotify.com/track/5v6fwkgHeF0N32LmEoQyQB?si=r-Ak1M-3Qa65fpIZ16b3DQ",
        "uri": "spotify:track:5v6fwkgHeF0N32LmEoQyQB"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/57MtJQ6Sc4tIxrXIhrqVJL"
            },
            "href": "https://api.spotify.com/v1/artists/57MtJQ6Sc4tIxrXIhrqVJL",
            "id": "57MtJQ6Sc4tIxrXIhrqVJL",
            "name": "Generationals",
            "type": "artist",
            "uri": "spotify:artist:57MtJQ6Sc4tIxrXIhrqVJL"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6E431m4hnKJomE4EhddGtB"
          },
          "href": "https://api.spotify.com/v1/albums/6E431m4hnKJomE4EhddGtB",
          "id": "6E431m4hnKJomE4EhddGtB",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273dd4835081af0401c3a27113f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02dd4835081af0401c3a27113f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851dd4835081af0401c3a27113f",
            "width": 64
          }],
          "name": "ActorCaster",
          "release_date": "2011-03-29",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:6E431m4hnKJomE4EhddGtB"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/57MtJQ6Sc4tIxrXIhrqVJL"
          },
          "href": "https://api.spotify.com/v1/artists/57MtJQ6Sc4tIxrXIhrqVJL",
          "id": "57MtJQ6Sc4tIxrXIhrqVJL",
          "name": "Generationals",
          "type": "artist",
          "uri": "spotify:artist:57MtJQ6Sc4tIxrXIhrqVJL"
        }],
        "disc_number": 1,
        "duration_ms": 202613,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USNNZ1100571"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5v6fwkgHeF0N32LmEoQyQB"
        },
        "href": "https://api.spotify.com/v1/tracks/5v6fwkgHeF0N32LmEoQyQB",
        "id": "5v6fwkgHeF0N32LmEoQyQB",
        "is_local": false,
        "is_playable": true,
        "name": "TenTwentyTen",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/cd9d1bcecdd54ee290cc671b2009968471577716?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5v6fwkgHeF0N32LmEoQyQB"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-04T16:46:49Z",
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
        "share_id": "0qHOQX8MSuCk6HVVijJ1iQ",
        "share_url": "https://open.spotify.com/track/12CHCS2mxdkvBVwuO8InGS?si=0qHOQX8MSuCk6HVVijJ1iQ",
        "uri": "spotify:track:12CHCS2mxdkvBVwuO8InGS"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/34XlPCFfB4vT7P1ekWq9Jc"
            },
            "href": "https://api.spotify.com/v1/artists/34XlPCFfB4vT7P1ekWq9Jc",
            "id": "34XlPCFfB4vT7P1ekWq9Jc",
            "name": "Guster",
            "type": "artist",
            "uri": "spotify:artist:34XlPCFfB4vT7P1ekWq9Jc"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4VD5MgL4gjcUumfSpjvlBf"
          },
          "href": "https://api.spotify.com/v1/albums/4VD5MgL4gjcUumfSpjvlBf",
          "id": "4VD5MgL4gjcUumfSpjvlBf",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27346e78ae89c1a05e29f6b4f03",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0246e78ae89c1a05e29f6b4f03",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485146e78ae89c1a05e29f6b4f03",
            "width": 64
          }],
          "name": "Look Alive",
          "release_date": "2019-01-18",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:4VD5MgL4gjcUumfSpjvlBf"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/34XlPCFfB4vT7P1ekWq9Jc"
          },
          "href": "https://api.spotify.com/v1/artists/34XlPCFfB4vT7P1ekWq9Jc",
          "id": "34XlPCFfB4vT7P1ekWq9Jc",
          "name": "Guster",
          "type": "artist",
          "uri": "spotify:artist:34XlPCFfB4vT7P1ekWq9Jc"
        }],
        "disc_number": 1,
        "duration_ms": 231093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAN111800228"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/12CHCS2mxdkvBVwuO8InGS"
        },
        "href": "https://api.spotify.com/v1/tracks/12CHCS2mxdkvBVwuO8InGS",
        "id": "12CHCS2mxdkvBVwuO8InGS",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3ZpvTsq2rr5XwOGs4ulOMA"
          },
          "href": "https://api.spotify.com/v1/tracks/3ZpvTsq2rr5XwOGs4ulOMA",
          "id": "3ZpvTsq2rr5XwOGs4ulOMA",
          "type": "track",
          "uri": "spotify:track:3ZpvTsq2rr5XwOGs4ulOMA"
        },
        "name": "Hard Times",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/4b911b6a8e7a03de1f40ce099e434c51d763c3f5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:12CHCS2mxdkvBVwuO8InGS"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-11T17:01:07Z",
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
        "share_id": "ohms5RDtRhuL6CHnDKIWoA",
        "share_url": "https://open.spotify.com/track/01bfHCsUTwydXCHP1VoLlI?si=ohms5RDtRhuL6CHnDKIWoA",
        "uri": "spotify:track:01bfHCsUTwydXCHP1VoLlI"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7GN9PivdemQRKjDt4z5Zv8"
            },
            "href": "https://api.spotify.com/v1/artists/7GN9PivdemQRKjDt4z5Zv8",
            "id": "7GN9PivdemQRKjDt4z5Zv8",
            "name": "The Internet",
            "type": "artist",
            "uri": "spotify:artist:7GN9PivdemQRKjDt4z5Zv8"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/27ThgFMUAx3MXLQ297DzWF"
          },
          "href": "https://api.spotify.com/v1/albums/27ThgFMUAx3MXLQ297DzWF",
          "id": "27ThgFMUAx3MXLQ297DzWF",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27360de86e634f2bd4d1364797e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0260de86e634f2bd4d1364797e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485160de86e634f2bd4d1364797e",
            "width": 64
          }],
          "name": "Hive Mind",
          "release_date": "2018-07-20",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:27ThgFMUAx3MXLQ297DzWF"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7GN9PivdemQRKjDt4z5Zv8"
          },
          "href": "https://api.spotify.com/v1/artists/7GN9PivdemQRKjDt4z5Zv8",
          "id": "7GN9PivdemQRKjDt4z5Zv8",
          "name": "The Internet",
          "type": "artist",
          "uri": "spotify:artist:7GN9PivdemQRKjDt4z5Zv8"
        }],
        "disc_number": 1,
        "duration_ms": 191026,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM11803526"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/01bfHCsUTwydXCHP1VoLlI"
        },
        "href": "https://api.spotify.com/v1/tracks/01bfHCsUTwydXCHP1VoLlI",
        "id": "01bfHCsUTwydXCHP1VoLlI",
        "is_local": false,
        "is_playable": true,
        "name": "Roll (Burbank Funk)",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/6c034dfef56164d29094091854ec976eb146989f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:01bfHCsUTwydXCHP1VoLlI"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-15T19:47:13Z",
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
        "share_id": "onGtRhkRRAOenGgCcmdWCQ",
        "share_url": "https://open.spotify.com/track/2Lupwcc8c5YcShT1HbvlTH?si=onGtRhkRRAOenGgCcmdWCQ",
        "uri": "spotify:track:2Lupwcc8c5YcShT1HbvlTH"
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
            "spotify": "https://open.spotify.com/album/61WKXhAkliq1YpiBv1LP0Q"
          },
          "href": "https://api.spotify.com/v1/albums/61WKXhAkliq1YpiBv1LP0Q",
          "id": "61WKXhAkliq1YpiBv1LP0Q",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734517d71456812b438154aa17",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024517d71456812b438154aa17",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514517d71456812b438154aa17",
            "width": 64
          }],
          "name": "Abandoned Mansion",
          "release_date": "2017-01-31",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:61WKXhAkliq1YpiBv1LP0Q"
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
        "duration_ms": 218262,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACW1738362"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2Lupwcc8c5YcShT1HbvlTH"
        },
        "href": "https://api.spotify.com/v1/tracks/2Lupwcc8c5YcShT1HbvlTH",
        "id": "2Lupwcc8c5YcShT1HbvlTH",
        "is_local": false,
        "is_playable": true,
        "name": "Ladada",
        "popularity": 38,
        "preview_url": "https://p.scdn.co/mp3-preview/f9db970a5a63bfb2fe8eb12629487b6717cc48ec?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2Lupwcc8c5YcShT1HbvlTH"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-14T19:24:46Z",
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
        "share_id": "gsGeNW0-RKmZ3JNX2nhBeA",
        "share_url": "https://open.spotify.com/track/7GykWKpUdiwoYLCACCpmjp?si=gsGeNW0-RKmZ3JNX2nhBeA",
        "uri": "spotify:track:7GykWKpUdiwoYLCACCpmjp"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/59fzcTUsoozikLmRY1SwHS"
            },
            "href": "https://api.spotify.com/v1/artists/59fzcTUsoozikLmRY1SwHS",
            "id": "59fzcTUsoozikLmRY1SwHS",
            "name": "James Carr",
            "type": "artist",
            "uri": "spotify:artist:59fzcTUsoozikLmRY1SwHS"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ZygyYriRRKnSu07F73Yk9"
          },
          "href": "https://api.spotify.com/v1/albums/2ZygyYriRRKnSu07F73Yk9",
          "id": "2ZygyYriRRKnSu07F73Yk9",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734830d86f4e3a32543048a779",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024830d86f4e3a32543048a779",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514830d86f4e3a32543048a779",
            "width": 64
          }],
          "name": "You Got My Mind Messed Up",
          "release_date": "2013-01-02",
          "release_date_precision": "day",
          "total_tracks": 24,
          "type": "album",
          "uri": "spotify:album:2ZygyYriRRKnSu07F73Yk9"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/59fzcTUsoozikLmRY1SwHS"
          },
          "href": "https://api.spotify.com/v1/artists/59fzcTUsoozikLmRY1SwHS",
          "id": "59fzcTUsoozikLmRY1SwHS",
          "name": "James Carr",
          "type": "artist",
          "uri": "spotify:artist:59fzcTUsoozikLmRY1SwHS"
        }],
        "disc_number": 1,
        "duration_ms": 153986,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBBHN0200264"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7GykWKpUdiwoYLCACCpmjp"
        },
        "href": "https://api.spotify.com/v1/tracks/7GykWKpUdiwoYLCACCpmjp",
        "id": "7GykWKpUdiwoYLCACCpmjp",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6hAN9n5pUEbgmDCqgQ25sd"
          },
          "href": "https://api.spotify.com/v1/tracks/6hAN9n5pUEbgmDCqgQ25sd",
          "id": "6hAN9n5pUEbgmDCqgQ25sd",
          "type": "track",
          "uri": "spotify:track:6hAN9n5pUEbgmDCqgQ25sd"
        },
        "name": "The Dark End of the Street",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/a1d99396088491fe6ef555bdf87a30ec7f1fc138?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:7GykWKpUdiwoYLCACCpmjp"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-01T01:09:53Z",
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
        "share_id": "GbpWdNRDS5WBhdhrKi0uUQ",
        "share_url": "https://open.spotify.com/track/6kIa35gE7eZH5d8uKbfJMw?si=GbpWdNRDS5WBhdhrKi0uUQ",
        "uri": "spotify:track:6kIa35gE7eZH5d8uKbfJMw"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3NTbCfTrDL2WFob27hdLTe"
            },
            "href": "https://api.spotify.com/v1/artists/3NTbCfTrDL2WFob27hdLTe",
            "id": "3NTbCfTrDL2WFob27hdLTe",
            "name": "Diane Coffee",
            "type": "artist",
            "uri": "spotify:artist:3NTbCfTrDL2WFob27hdLTe"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3Tl09ZhjYKH1USIMXZStJw"
          },
          "href": "https://api.spotify.com/v1/albums/3Tl09ZhjYKH1USIMXZStJw",
          "id": "3Tl09ZhjYKH1USIMXZStJw",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2739a008e3dd68893184b0b2085",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e029a008e3dd68893184b0b2085",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048519a008e3dd68893184b0b2085",
            "width": 64
          }],
          "name": "Everybody's a Good Dog",
          "release_date": "2015-09-04",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:3Tl09ZhjYKH1USIMXZStJw"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3NTbCfTrDL2WFob27hdLTe"
          },
          "href": "https://api.spotify.com/v1/artists/3NTbCfTrDL2WFob27hdLTe",
          "id": "3NTbCfTrDL2WFob27hdLTe",
          "name": "Diane Coffee",
          "type": "artist",
          "uri": "spotify:artist:3NTbCfTrDL2WFob27hdLTe"
        }],
        "disc_number": 1,
        "duration_ms": 304133,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US78L1513201"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6kIa35gE7eZH5d8uKbfJMw"
        },
        "href": "https://api.spotify.com/v1/tracks/6kIa35gE7eZH5d8uKbfJMw",
        "id": "6kIa35gE7eZH5d8uKbfJMw",
        "is_local": false,
        "is_playable": true,
        "name": "Spring Breathes",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/2116c0ddc2159b3e284caa122e8bbae5c4e0c020?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6kIa35gE7eZH5d8uKbfJMw"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-04T22:28:02Z",
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
        "share_id": "Bq2pK6z-TEmcSjT8Q6FBxQ",
        "share_url": "https://open.spotify.com/track/6OwBCxzxlUo9r13LH9bU6x?si=Bq2pK6z-TEmcSjT8Q6FBxQ",
        "uri": "spotify:track:6OwBCxzxlUo9r13LH9bU6x"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5wjWLK4KMqmRbdUtTEV1BG"
            },
            "href": "https://api.spotify.com/v1/artists/5wjWLK4KMqmRbdUtTEV1BG",
            "id": "5wjWLK4KMqmRbdUtTEV1BG",
            "name": "Har Mar Superstar",
            "type": "artist",
            "uri": "spotify:artist:5wjWLK4KMqmRbdUtTEV1BG"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/167ZNT4gTQ1h3MVa5puH9m"
          },
          "href": "https://api.spotify.com/v1/albums/167ZNT4gTQ1h3MVa5puH9m",
          "id": "167ZNT4gTQ1h3MVa5puH9m",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737f8984fa6023b5e15970dc14",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027f8984fa6023b5e15970dc14",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517f8984fa6023b5e15970dc14",
            "width": 64
          }],
          "name": "Best Summer Ever",
          "release_date": "2016-04-15",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:167ZNT4gTQ1h3MVa5puH9m"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5wjWLK4KMqmRbdUtTEV1BG"
          },
          "href": "https://api.spotify.com/v1/artists/5wjWLK4KMqmRbdUtTEV1BG",
          "id": "5wjWLK4KMqmRbdUtTEV1BG",
          "name": "Har Mar Superstar",
          "type": "artist",
          "uri": "spotify:artist:5wjWLK4KMqmRbdUtTEV1BG"
        }],
        "disc_number": 1,
        "duration_ms": 204146,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMKBG1500183"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6OwBCxzxlUo9r13LH9bU6x"
        },
        "href": "https://api.spotify.com/v1/tracks/6OwBCxzxlUo9r13LH9bU6x",
        "id": "6OwBCxzxlUo9r13LH9bU6x",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4gr79Zf64MKpWscYk2YsWd"
          },
          "href": "https://api.spotify.com/v1/tracks/4gr79Zf64MKpWscYk2YsWd",
          "id": "4gr79Zf64MKpWscYk2YsWd",
          "type": "track",
          "uri": "spotify:track:4gr79Zf64MKpWscYk2YsWd"
        },
        "name": "How Did I Get Through Day",
        "popularity": 37,
        "preview_url": "https://p.scdn.co/mp3-preview/daba3396c4754172da477cc26a377da6a4d2316c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:6OwBCxzxlUo9r13LH9bU6x"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-15T06:58:15Z",
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
        "share_id": "EqqLwAwFQoui0oftIR4UEg",
        "share_url": "https://open.spotify.com/track/29069ieCEe5gqv3j7rWvwT?si=EqqLwAwFQoui0oftIR4UEg",
        "uri": "spotify:track:29069ieCEe5gqv3j7rWvwT"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6bEYoIUTLdcs4lZBNVw5L5"
            },
            "href": "https://api.spotify.com/v1/artists/6bEYoIUTLdcs4lZBNVw5L5",
            "id": "6bEYoIUTLdcs4lZBNVw5L5",
            "name": "Molly Burch",
            "type": "artist",
            "uri": "spotify:artist:6bEYoIUTLdcs4lZBNVw5L5"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5eh3avirwQjqXcltLjCHc8"
          },
          "href": "https://api.spotify.com/v1/albums/5eh3avirwQjqXcltLjCHc8",
          "id": "5eh3avirwQjqXcltLjCHc8",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734d218731fd563e7729c54fe7",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024d218731fd563e7729c54fe7",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514d218731fd563e7729c54fe7",
            "width": 64
          }],
          "name": "Downhearted",
          "release_date": "2016-09-16",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:5eh3avirwQjqXcltLjCHc8"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6bEYoIUTLdcs4lZBNVw5L5"
          },
          "href": "https://api.spotify.com/v1/artists/6bEYoIUTLdcs4lZBNVw5L5",
          "id": "6bEYoIUTLdcs4lZBNVw5L5",
          "name": "Molly Burch",
          "type": "artist",
          "uri": "spotify:artist:6bEYoIUTLdcs4lZBNVw5L5"
        }],
        "disc_number": 1,
        "duration_ms": 308520,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMMZN1601245"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/29069ieCEe5gqv3j7rWvwT"
        },
        "href": "https://api.spotify.com/v1/tracks/29069ieCEe5gqv3j7rWvwT",
        "id": "29069ieCEe5gqv3j7rWvwT",
        "is_local": false,
        "is_playable": true,
        "name": "Downhearted",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/d26047739ec6332e01fa372aa9d0c53719c2fd0e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:29069ieCEe5gqv3j7rWvwT"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-14T19:44:19Z",
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
        "share_id": "M6YIzti-T9OYTYMBOXDYCw",
        "share_url": "https://open.spotify.com/track/1WyjSjo0nEZkzkWgJWRcEE?si=M6YIzti-T9OYTYMBOXDYCw",
        "uri": "spotify:track:1WyjSjo0nEZkzkWgJWRcEE"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1bNgeTuV3MlkAq64Ybvcq5"
            },
            "href": "https://api.spotify.com/v1/artists/1bNgeTuV3MlkAq64Ybvcq5",
            "id": "1bNgeTuV3MlkAq64Ybvcq5",
            "name": "Delicate Steve",
            "type": "artist",
            "uri": "spotify:artist:1bNgeTuV3MlkAq64Ybvcq5"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/55MZRfjLICYCR0y8hpvFbl"
          },
          "href": "https://api.spotify.com/v1/albums/55MZRfjLICYCR0y8hpvFbl",
          "id": "55MZRfjLICYCR0y8hpvFbl",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b365984fe823212afeafc036",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b365984fe823212afeafc036",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b365984fe823212afeafc036",
            "width": 64
          }],
          "name": "Cowboy Stories",
          "release_date": "2017-09-26",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:55MZRfjLICYCR0y8hpvFbl"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1bNgeTuV3MlkAq64Ybvcq5"
          },
          "href": "https://api.spotify.com/v1/artists/1bNgeTuV3MlkAq64Ybvcq5",
          "id": "1bNgeTuV3MlkAq64Ybvcq5",
          "name": "Delicate Steve",
          "type": "artist",
          "uri": "spotify:artist:1bNgeTuV3MlkAq64Ybvcq5"
        }],
        "disc_number": 1,
        "duration_ms": 201133,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USEP41734004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1WyjSjo0nEZkzkWgJWRcEE"
        },
        "href": "https://api.spotify.com/v1/tracks/1WyjSjo0nEZkzkWgJWRcEE",
        "id": "1WyjSjo0nEZkzkWgJWRcEE",
        "is_local": false,
        "is_playable": true,
        "name": "Peaches",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/011496cd4d68848e2dad9847e007327665ad4404?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:1WyjSjo0nEZkzkWgJWRcEE"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-11T02:40:45Z",
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
        "share_id": "k9bG3prITauF5-WUTqCbxw",
        "share_url": "https://open.spotify.com/track/5UnoxzcNj2Ym6ZOnIGdwGE?si=k9bG3prITauF5-WUTqCbxw",
        "uri": "spotify:track:5UnoxzcNj2Ym6ZOnIGdwGE"
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
        "duration_ms": 323263,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2FD1809301"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5UnoxzcNj2Ym6ZOnIGdwGE"
        },
        "href": "https://api.spotify.com/v1/tracks/5UnoxzcNj2Ym6ZOnIGdwGE",
        "id": "5UnoxzcNj2Ym6ZOnIGdwGE",
        "is_local": false,
        "is_playable": true,
        "name": "Long Wave",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/359bb303b29216c7d64761ea6ed99957abcaeb39?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5UnoxzcNj2Ym6ZOnIGdwGE"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-09-10T23:05:24Z",
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
        "share_id": "PFxa93osTWSMX6L9Y6wPWQ",
        "share_url": "https://open.spotify.com/track/7AyAGlptGRV82Wk89u4ojN?si=PFxa93osTWSMX6L9Y6wPWQ",
        "uri": "spotify:track:7AyAGlptGRV82Wk89u4ojN"
      },
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4nts0oxMT67lVUoi5Kjxrb"
            },
            "href": "https://api.spotify.com/v1/artists/4nts0oxMT67lVUoi5Kjxrb",
            "id": "4nts0oxMT67lVUoi5Kjxrb",
            "name": "Solomon Burke",
            "type": "artist",
            "uri": "spotify:artist:4nts0oxMT67lVUoi5Kjxrb"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6qnOfoAUz11fZ98GFilmKE"
          },
          "href": "https://api.spotify.com/v1/albums/6qnOfoAUz11fZ98GFilmKE",
          "id": "6qnOfoAUz11fZ98GFilmKE",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e7831c8cdcddfac8fd8b8395",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e7831c8cdcddfac8fd8b8395",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e7831c8cdcddfac8fd8b8395",
            "width": 64
          }],
          "name": "The Very Best Of Solomon Burke",
          "release_date": "1998",
          "release_date_precision": "year",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:6qnOfoAUz11fZ98GFilmKE"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4nts0oxMT67lVUoi5Kjxrb"
          },
          "href": "https://api.spotify.com/v1/artists/4nts0oxMT67lVUoi5Kjxrb",
          "id": "4nts0oxMT67lVUoi5Kjxrb",
          "name": "Solomon Burke",
          "type": "artist",
          "uri": "spotify:artist:4nts0oxMT67lVUoi5Kjxrb"
        }],
        "disc_number": 1,
        "duration_ms": 153960,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT20106150"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7AyAGlptGRV82Wk89u4ojN"
        },
        "href": "https://api.spotify.com/v1/tracks/7AyAGlptGRV82Wk89u4ojN",
        "id": "7AyAGlptGRV82Wk89u4ojN",
        "is_local": false,
        "is_playable": true,
        "name": "Can't Nobody Love You",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/d6c7c5c85685c78c524f09937ddb28f67b4b5deb?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:7AyAGlptGRV82Wk89u4ojN"
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
  "uri": "spotify:playlist:5IzS4BQ9ZSo4RMi18cBDhX"
};

/***/ })

/******/ });