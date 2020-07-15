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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8HFg");


/***/ }),

/***/ "8HFg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/6ql3BXLoIGuIzLLUegweW3"
  },
  "followers": {
    "href": null,
    "total": 1
  },
  "href": "https://api.spotify.com/v1/playlists/6ql3BXLoIGuIzLLUegweW3?type=track,episode",
  "id": "6ql3BXLoIGuIzLLUegweW3",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2732ef603089a936e0c3c55f497ab67616d0000b2734b62ae1674a2c05778e408d0ab67616d0000b273c4c9ca67b07423071204c0b1ab67616d0000b273d61dd1fe60908bc2070f53e1",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2732ef603089a936e0c3c55f497ab67616d0000b2734b62ae1674a2c05778e408d0ab67616d0000b273c4c9ca67b07423071204c0b1ab67616d0000b273d61dd1fe60908bc2070f53e1",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2732ef603089a936e0c3c55f497ab67616d0000b2734b62ae1674a2c05778e408d0ab67616d0000b273c4c9ca67b07423071204c0b1ab67616d0000b273d61dd1fe60908bc2070f53e1",
    "width": 60
  }],
  "name": "March 2020",
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
    "share_id": "h34CMqzRTd-C3IrVtOvLnQ",
    "share_url": "https://open.spotify.com/playlist/6ql3BXLoIGuIzLLUegweW3?si=h34CMqzRTd-C3IrVtOvLnQ",
    "uri": "spotify:playlist:6ql3BXLoIGuIzLLUegweW3"
  },
  "snapshot_id": "NDAsZTNkMzg1ODZmOTdhZGU1NWRiNmE0YWZhYzFmY2M3MzdkZmE3OWZhZA==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/6ql3BXLoIGuIzLLUegweW3/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2020-03-02T06:52:50Z",
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
        "share_id": "KrM3pcQRSKWg7GxAvMtvSA",
        "share_url": "https://open.spotify.com/track/2FJ9YzsofukyiLMafOB5x5?si=KrM3pcQRSKWg7GxAvMtvSA",
        "uri": "spotify:track:2FJ9YzsofukyiLMafOB5x5"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2eJuuwYeVAgWEqDq4yD4Iq"
            },
            "href": "https://api.spotify.com/v1/artists/2eJuuwYeVAgWEqDq4yD4Iq",
            "id": "2eJuuwYeVAgWEqDq4yD4Iq",
            "name": "It's Sunday",
            "type": "artist",
            "uri": "spotify:artist:2eJuuwYeVAgWEqDq4yD4Iq"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3X3mXCF9coHXwshvU6zbPr"
          },
          "href": "https://api.spotify.com/v1/albums/3X3mXCF9coHXwshvU6zbPr",
          "id": "3X3mXCF9coHXwshvU6zbPr",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734b62ae1674a2c05778e408d0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024b62ae1674a2c05778e408d0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514b62ae1674a2c05778e408d0",
            "width": 64
          }],
          "name": "TISSUE ISSUES",
          "release_date": "2019-06-14",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:3X3mXCF9coHXwshvU6zbPr"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2eJuuwYeVAgWEqDq4yD4Iq"
          },
          "href": "https://api.spotify.com/v1/artists/2eJuuwYeVAgWEqDq4yD4Iq",
          "id": "2eJuuwYeVAgWEqDq4yD4Iq",
          "name": "It's Sunday",
          "type": "artist",
          "uri": "spotify:artist:2eJuuwYeVAgWEqDq4yD4Iq"
        }],
        "disc_number": 1,
        "duration_ms": 137980,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FRP3F1902900"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2FJ9YzsofukyiLMafOB5x5"
        },
        "href": "https://api.spotify.com/v1/tracks/2FJ9YzsofukyiLMafOB5x5",
        "id": "2FJ9YzsofukyiLMafOB5x5",
        "is_local": false,
        "is_playable": true,
        "name": "PRAY FOR THE SUNSHINE",
        "popularity": 1,
        "preview_url": "https://p.scdn.co/mp3-preview/7392600a0a497231fc3acef927e61f2e437416eb?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:2FJ9YzsofukyiLMafOB5x5"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-10T22:28:59Z",
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
        "share_id": "TgZt9lZ3SoSQnVRcGGaUUw",
        "share_url": "https://open.spotify.com/track/1atjDM7aDlDoIh0BH5bHj6?si=TgZt9lZ3SoSQnVRcGGaUUw",
        "uri": "spotify:track:1atjDM7aDlDoIh0BH5bHj6"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0UGWy5z4SH0N2FE3sa391U"
            },
            "href": "https://api.spotify.com/v1/artists/0UGWy5z4SH0N2FE3sa391U",
            "id": "0UGWy5z4SH0N2FE3sa391U",
            "name": "Blitz",
            "type": "artist",
            "uri": "spotify:artist:0UGWy5z4SH0N2FE3sa391U"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6D5OBtCfppUuwLWCGcju7n"
          },
          "href": "https://api.spotify.com/v1/albums/6D5OBtCfppUuwLWCGcju7n",
          "id": "6D5OBtCfppUuwLWCGcju7n",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d61dd1fe60908bc2070f53e1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d61dd1fe60908bc2070f53e1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d61dd1fe60908bc2070f53e1",
            "width": 64
          }],
          "name": "Second Empire Justice",
          "release_date": "1983-01-01",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:6D5OBtCfppUuwLWCGcju7n"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0UGWy5z4SH0N2FE3sa391U"
          },
          "href": "https://api.spotify.com/v1/artists/0UGWy5z4SH0N2FE3sa391U",
          "id": "0UGWy5z4SH0N2FE3sa391U",
          "name": "Blitz",
          "type": "artist",
          "uri": "spotify:artist:0UGWy5z4SH0N2FE3sa391U"
        }],
        "disc_number": 1,
        "duration_ms": 154373,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "GBBLY8300366"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1atjDM7aDlDoIh0BH5bHj6"
        },
        "href": "https://api.spotify.com/v1/tracks/1atjDM7aDlDoIh0BH5bHj6",
        "id": "1atjDM7aDlDoIh0BH5bHj6",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/04GjXJ3OJlaKkf1BcVDY8u"
          },
          "href": "https://api.spotify.com/v1/tracks/04GjXJ3OJlaKkf1BcVDY8u",
          "id": "04GjXJ3OJlaKkf1BcVDY8u",
          "type": "track",
          "uri": "spotify:track:04GjXJ3OJlaKkf1BcVDY8u"
        },
        "name": "Into the Daylight",
        "popularity": 11,
        "preview_url": "https://p.scdn.co/mp3-preview/d6ff8f32de5550df9917539718a27431b2cb4e21?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:1atjDM7aDlDoIh0BH5bHj6"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-25T20:32:59Z",
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
        "share_id": "dD3OMCosSTWTWz-k0Cqv2Q",
        "share_url": "https://open.spotify.com/track/3pYtbLjQPG6DkS4QXpByLJ?si=dD3OMCosSTWTWz-k0Cqv2Q",
        "uri": "spotify:track:3pYtbLjQPG6DkS4QXpByLJ"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5ZFXmlzznDqUXykh8Lz0mX"
            },
            "href": "https://api.spotify.com/v1/artists/5ZFXmlzznDqUXykh8Lz0mX",
            "id": "5ZFXmlzznDqUXykh8Lz0mX",
            "name": "Cat Party",
            "type": "artist",
            "uri": "spotify:artist:5ZFXmlzznDqUXykh8Lz0mX"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5o2pLiR2WxYGUUnkbjNncZ"
          },
          "href": "https://api.spotify.com/v1/albums/5o2pLiR2WxYGUUnkbjNncZ",
          "id": "5o2pLiR2WxYGUUnkbjNncZ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732ef603089a936e0c3c55f497",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022ef603089a936e0c3c55f497",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512ef603089a936e0c3c55f497",
            "width": 64
          }],
          "name": "The First One",
          "release_date": "2009-05-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5o2pLiR2WxYGUUnkbjNncZ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5ZFXmlzznDqUXykh8Lz0mX"
          },
          "href": "https://api.spotify.com/v1/artists/5ZFXmlzznDqUXykh8Lz0mX",
          "id": "5ZFXmlzznDqUXykh8Lz0mX",
          "name": "Cat Party",
          "type": "artist",
          "uri": "spotify:artist:5ZFXmlzznDqUXykh8Lz0mX"
        }],
        "disc_number": 1,
        "duration_ms": 229946,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMPKX1857147"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3pYtbLjQPG6DkS4QXpByLJ"
        },
        "href": "https://api.spotify.com/v1/tracks/3pYtbLjQPG6DkS4QXpByLJ",
        "id": "3pYtbLjQPG6DkS4QXpByLJ",
        "is_local": false,
        "is_playable": true,
        "name": "Tar & Feathers",
        "popularity": 6,
        "preview_url": "https://p.scdn.co/mp3-preview/97bd41819aca5f9c9173e63913e1cc2d27ce7c54?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3pYtbLjQPG6DkS4QXpByLJ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-25T20:48:41Z",
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
        "share_id": "TQscMA0zSWy-V8hZK6Fhjw",
        "share_url": "https://open.spotify.com/track/3qqeDnTGXgRftw1RZj4Jv2?si=TQscMA0zSWy-V8hZK6Fhjw",
        "uri": "spotify:track:3qqeDnTGXgRftw1RZj4Jv2"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3MATPJ9tYbcMhw5VOZrRU6"
            },
            "href": "https://api.spotify.com/v1/artists/3MATPJ9tYbcMhw5VOZrRU6",
            "id": "3MATPJ9tYbcMhw5VOZrRU6",
            "name": "Summer Salt",
            "type": "artist",
            "uri": "spotify:artist:3MATPJ9tYbcMhw5VOZrRU6"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4L9FjG1yvRSXhjFUyTkP4T"
          },
          "href": "https://api.spotify.com/v1/albums/4L9FjG1yvRSXhjFUyTkP4T",
          "id": "4L9FjG1yvRSXhjFUyTkP4T",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c4c9ca67b07423071204c0b1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c4c9ca67b07423071204c0b1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c4c9ca67b07423071204c0b1",
            "width": 64
          }],
          "name": "Driving to Hawaii",
          "release_date": "2014-07-04",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:4L9FjG1yvRSXhjFUyTkP4T"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3MATPJ9tYbcMhw5VOZrRU6"
          },
          "href": "https://api.spotify.com/v1/artists/3MATPJ9tYbcMhw5VOZrRU6",
          "id": "3MATPJ9tYbcMhw5VOZrRU6",
          "name": "Summer Salt",
          "type": "artist",
          "uri": "spotify:artist:3MATPJ9tYbcMhw5VOZrRU6"
        }],
        "disc_number": 1,
        "duration_ms": 204306,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM4DW1545101"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3qqeDnTGXgRftw1RZj4Jv2"
        },
        "href": "https://api.spotify.com/v1/tracks/3qqeDnTGXgRftw1RZj4Jv2",
        "id": "3qqeDnTGXgRftw1RZj4Jv2",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4qkwbl6SxwLE09pxLAFINt"
          },
          "href": "https://api.spotify.com/v1/tracks/4qkwbl6SxwLE09pxLAFINt",
          "id": "4qkwbl6SxwLE09pxLAFINt",
          "type": "track",
          "uri": "spotify:track:4qkwbl6SxwLE09pxLAFINt"
        },
        "name": "Sweet to Me",
        "popularity": 54,
        "preview_url": "https://p.scdn.co/mp3-preview/f034c6b51271412520d4b2aa4fd3920df9c0c904?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3qqeDnTGXgRftw1RZj4Jv2"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-05T23:49:49Z",
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
        "share_id": "uqxS-zhBRcuTC5cvA-a9DA",
        "share_url": "https://open.spotify.com/track/1aZB6xEHWZTqk5KVRX0puk?si=uqxS-zhBRcuTC5cvA-a9DA",
        "uri": "spotify:track:1aZB6xEHWZTqk5KVRX0puk"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2OK16hAFRHoJiFZKeZe8A8"
            },
            "href": "https://api.spotify.com/v1/artists/2OK16hAFRHoJiFZKeZe8A8",
            "id": "2OK16hAFRHoJiFZKeZe8A8",
            "name": "courtship.",
            "type": "artist",
            "uri": "spotify:artist:2OK16hAFRHoJiFZKeZe8A8"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4yEwG3uRMKz8g1lUuVrOtW"
          },
          "href": "https://api.spotify.com/v1/albums/4yEwG3uRMKz8g1lUuVrOtW",
          "id": "4yEwG3uRMKz8g1lUuVrOtW",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273aa3ba063a6520285b799aa8f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02aa3ba063a6520285b799aa8f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851aa3ba063a6520285b799aa8f",
            "width": 64
          }],
          "name": "Sail Away",
          "release_date": "2017-02-28",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4yEwG3uRMKz8g1lUuVrOtW"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2OK16hAFRHoJiFZKeZe8A8"
          },
          "href": "https://api.spotify.com/v1/artists/2OK16hAFRHoJiFZKeZe8A8",
          "id": "2OK16hAFRHoJiFZKeZe8A8",
          "name": "courtship.",
          "type": "artist",
          "uri": "spotify:artist:2OK16hAFRHoJiFZKeZe8A8"
        }],
        "disc_number": 1,
        "duration_ms": 191250,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "QM24S1700623"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1aZB6xEHWZTqk5KVRX0puk"
        },
        "href": "https://api.spotify.com/v1/tracks/1aZB6xEHWZTqk5KVRX0puk",
        "id": "1aZB6xEHWZTqk5KVRX0puk",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0HKFm9YfYZ8NyTSnTyE5wT"
          },
          "href": "https://api.spotify.com/v1/tracks/0HKFm9YfYZ8NyTSnTyE5wT",
          "id": "0HKFm9YfYZ8NyTSnTyE5wT",
          "type": "track",
          "uri": "spotify:track:0HKFm9YfYZ8NyTSnTyE5wT"
        },
        "name": "Sail Away",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/fe5e9781aac2698aea50581b2cea980df2482db5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1aZB6xEHWZTqk5KVRX0puk"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-09T04:48:48Z",
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
        "share_id": "UHP6K5NETQ-wLuVjOrtTng",
        "share_url": "https://open.spotify.com/track/681kLPkOxfiEIqaWklrTtB?si=UHP6K5NETQ-wLuVjOrtTng",
        "uri": "spotify:track:681kLPkOxfiEIqaWklrTtB"
      },
      "track": {
        "album": {
          "album_type": "single",
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
            "spotify": "https://open.spotify.com/album/0yvlCR6QCl7sjp73XZii16"
          },
          "href": "https://api.spotify.com/v1/albums/0yvlCR6QCl7sjp73XZii16",
          "id": "0yvlCR6QCl7sjp73XZii16",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f845a55a3f2047a7982d6327",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f845a55a3f2047a7982d6327",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f845a55a3f2047a7982d6327",
            "width": 64
          }],
          "name": "Calling It (Peaking Lights Disco Rerub)",
          "release_date": "2020-03-05",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:0yvlCR6QCl7sjp73XZii16"
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
        "duration_ms": 299083,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2S71910024"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/681kLPkOxfiEIqaWklrTtB"
        },
        "href": "https://api.spotify.com/v1/tracks/681kLPkOxfiEIqaWklrTtB",
        "id": "681kLPkOxfiEIqaWklrTtB",
        "is_local": false,
        "is_playable": true,
        "name": "Calling It (Peaking Lights Disco Rerub)",
        "popularity": 21,
        "preview_url": "https://p.scdn.co/mp3-preview/a4b00faf43187697a57dfc02adbdfc12a80c7e3a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:681kLPkOxfiEIqaWklrTtB"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-09T04:49:18Z",
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
        "share_id": "kF0wWCb4RyqQoyjgmfhXUA",
        "share_url": "https://open.spotify.com/track/6zowwhesjBf457pHtVmIvs?si=kF0wWCb4RyqQoyjgmfhXUA",
        "uri": "spotify:track:6zowwhesjBf457pHtVmIvs"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2pst3pDewxsl4kJERuDZpp"
            },
            "href": "https://api.spotify.com/v1/artists/2pst3pDewxsl4kJERuDZpp",
            "id": "2pst3pDewxsl4kJERuDZpp",
            "name": "Overcoats",
            "type": "artist",
            "uri": "spotify:artist:2pst3pDewxsl4kJERuDZpp"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0ArmKxlIjju4bog52Q33ZE"
          },
          "href": "https://api.spotify.com/v1/albums/0ArmKxlIjju4bog52Q33ZE",
          "id": "0ArmKxlIjju4bog52Q33ZE",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2733b76cb4bea25b5821d1909e3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e023b76cb4bea25b5821d1909e3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048513b76cb4bea25b5821d1909e3",
            "width": 64
          }],
          "name": "The Fight",
          "release_date": "2020-03-06",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0ArmKxlIjju4bog52Q33ZE"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2pst3pDewxsl4kJERuDZpp"
          },
          "href": "https://api.spotify.com/v1/artists/2pst3pDewxsl4kJERuDZpp",
          "id": "2pst3pDewxsl4kJERuDZpp",
          "name": "Overcoats",
          "type": "artist",
          "uri": "spotify:artist:2pst3pDewxsl4kJERuDZpp"
        }],
        "disc_number": 1,
        "duration_ms": 188146,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USC4R1903003"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6zowwhesjBf457pHtVmIvs"
        },
        "href": "https://api.spotify.com/v1/tracks/6zowwhesjBf457pHtVmIvs",
        "id": "6zowwhesjBf457pHtVmIvs",
        "is_local": false,
        "is_playable": true,
        "name": "I'll Be There",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/950da84773f5c00b7ca4828931292704c23d2c01?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6zowwhesjBf457pHtVmIvs"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-09T04:48:00Z",
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
        "share_id": "-_GXWyIeRkyZpnMkflZ9Ow",
        "share_url": "https://open.spotify.com/track/6TIuADFGhfQGqsoqZPfPUE?si=-_GXWyIeRkyZpnMkflZ9Ow",
        "uri": "spotify:track:6TIuADFGhfQGqsoqZPfPUE"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6fxk3UXHTFYET8qCT9WlBF"
            },
            "href": "https://api.spotify.com/v1/artists/6fxk3UXHTFYET8qCT9WlBF",
            "id": "6fxk3UXHTFYET8qCT9WlBF",
            "name": "Kevin Morby",
            "type": "artist",
            "uri": "spotify:artist:6fxk3UXHTFYET8qCT9WlBF"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4mYVJ2NAFgQrzNRVN82vgq"
          },
          "href": "https://api.spotify.com/v1/albums/4mYVJ2NAFgQrzNRVN82vgq",
          "id": "4mYVJ2NAFgQrzNRVN82vgq",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d8eefbaeb0fe19d905be8e24",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d8eefbaeb0fe19d905be8e24",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d8eefbaeb0fe19d905be8e24",
            "width": 64
          }],
          "name": "Gift Horse b/w I Was On Time",
          "release_date": "2020-03-03",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:4mYVJ2NAFgQrzNRVN82vgq"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6fxk3UXHTFYET8qCT9WlBF"
          },
          "href": "https://api.spotify.com/v1/artists/6fxk3UXHTFYET8qCT9WlBF",
          "id": "6fxk3UXHTFYET8qCT9WlBF",
          "name": "Kevin Morby",
          "type": "artist",
          "uri": "spotify:artist:6fxk3UXHTFYET8qCT9WlBF"
        }],
        "disc_number": 1,
        "duration_ms": 210303,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USJ5G2019902"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6TIuADFGhfQGqsoqZPfPUE"
        },
        "href": "https://api.spotify.com/v1/tracks/6TIuADFGhfQGqsoqZPfPUE",
        "id": "6TIuADFGhfQGqsoqZPfPUE",
        "is_local": false,
        "is_playable": true,
        "name": "I Was On Time",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/b7624f3a43359eabd65af4251f1d452f76fe4170?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:6TIuADFGhfQGqsoqZPfPUE"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-09T04:50:25Z",
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
        "share_id": "ZzGJqJn2Ri2-ZQpyOcz-uw",
        "share_url": "https://open.spotify.com/track/7lhe90q0zwaKYMuwCMKWfM?si=ZzGJqJn2Ri2-ZQpyOcz-uw",
        "uri": "spotify:track:7lhe90q0zwaKYMuwCMKWfM"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6RWjTQqILL7a1tQ0VapyLK"
            },
            "href": "https://api.spotify.com/v1/artists/6RWjTQqILL7a1tQ0VapyLK",
            "id": "6RWjTQqILL7a1tQ0VapyLK",
            "name": "The Magnetic Fields",
            "type": "artist",
            "uri": "spotify:artist:6RWjTQqILL7a1tQ0VapyLK"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2b3JjOvKw9UN47ND80Tvri"
          },
          "href": "https://api.spotify.com/v1/albums/2b3JjOvKw9UN47ND80Tvri",
          "id": "2b3JjOvKw9UN47ND80Tvri",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27387f1bbe8894d18e1acca76b3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0287f1bbe8894d18e1acca76b3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485187f1bbe8894d18e1acca76b3",
            "width": 64
          }],
          "name": "50 Song Memoir",
          "release_date": "2017-03-10",
          "release_date_precision": "day",
          "total_tracks": 50,
          "type": "album",
          "uri": "spotify:album:2b3JjOvKw9UN47ND80Tvri"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6RWjTQqILL7a1tQ0VapyLK"
          },
          "href": "https://api.spotify.com/v1/artists/6RWjTQqILL7a1tQ0VapyLK",
          "id": "6RWjTQqILL7a1tQ0VapyLK",
          "name": "The Magnetic Fields",
          "type": "artist",
          "uri": "spotify:artist:6RWjTQqILL7a1tQ0VapyLK"
        }],
        "disc_number": 1,
        "duration_ms": 176453,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USNO11600670"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7lhe90q0zwaKYMuwCMKWfM"
        },
        "href": "https://api.spotify.com/v1/tracks/7lhe90q0zwaKYMuwCMKWfM",
        "id": "7lhe90q0zwaKYMuwCMKWfM",
        "is_local": false,
        "is_playable": true,
        "name": "'71: I Think I'll Make Another World",
        "popularity": 20,
        "preview_url": "https://p.scdn.co/mp3-preview/b352d1be560e952d37244954412df4abf831a096?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:7lhe90q0zwaKYMuwCMKWfM"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-10T22:16:34Z",
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
        "share_id": "mfmfaJdRQ6yyTKwJP4dUWA",
        "share_url": "https://open.spotify.com/track/7z7HuJQUzk93pSnP1qZkTp?si=mfmfaJdRQ6yyTKwJP4dUWA",
        "uri": "spotify:track:7z7HuJQUzk93pSnP1qZkTp"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5IWCU0V9evBlW4gIeGY4zF"
            },
            "href": "https://api.spotify.com/v1/artists/5IWCU0V9evBlW4gIeGY4zF",
            "id": "5IWCU0V9evBlW4gIeGY4zF",
            "name": "Waxahatchee",
            "type": "artist",
            "uri": "spotify:artist:5IWCU0V9evBlW4gIeGY4zF"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3T0O1rAk16A6FVB4dyG5DH"
          },
          "href": "https://api.spotify.com/v1/albums/3T0O1rAk16A6FVB4dyG5DH",
          "id": "3T0O1rAk16A6FVB4dyG5DH",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734b7adcc57d731712e15d0634",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024b7adcc57d731712e15d0634",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514b7adcc57d731712e15d0634",
            "width": 64
          }],
          "name": "Fire",
          "release_date": "2020-01-22",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:3T0O1rAk16A6FVB4dyG5DH"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5IWCU0V9evBlW4gIeGY4zF"
          },
          "href": "https://api.spotify.com/v1/artists/5IWCU0V9evBlW4gIeGY4zF",
          "id": "5IWCU0V9evBlW4gIeGY4zF",
          "name": "Waxahatchee",
          "type": "artist",
          "uri": "spotify:artist:5IWCU0V9evBlW4gIeGY4zF"
        }],
        "disc_number": 1,
        "duration_ms": 217373,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMRG2070403"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7z7HuJQUzk93pSnP1qZkTp"
        },
        "href": "https://api.spotify.com/v1/tracks/7z7HuJQUzk93pSnP1qZkTp",
        "id": "7z7HuJQUzk93pSnP1qZkTp",
        "is_local": false,
        "is_playable": true,
        "name": "Fire",
        "popularity": 49,
        "preview_url": "https://p.scdn.co/mp3-preview/de81b28327c7451356d9c1f64c85c8eda2399320?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7z7HuJQUzk93pSnP1qZkTp"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-16T19:43:11Z",
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
        "share_id": "O3VynREyRty3jkfA2VQCkA",
        "share_url": "https://open.spotify.com/track/1oy0UIGzuqIPBkOsjojeJ1?si=O3VynREyRty3jkfA2VQCkA",
        "uri": "spotify:track:1oy0UIGzuqIPBkOsjojeJ1"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/32aUoW94mJ7xTJI7fG0V1G"
            },
            "href": "https://api.spotify.com/v1/artists/32aUoW94mJ7xTJI7fG0V1G",
            "id": "32aUoW94mJ7xTJI7fG0V1G",
            "name": "Whitney",
            "type": "artist",
            "uri": "spotify:artist:32aUoW94mJ7xTJI7fG0V1G"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5yMCA6HdFAeL1aqUjxO3MO"
          },
          "href": "https://api.spotify.com/v1/albums/5yMCA6HdFAeL1aqUjxO3MO",
          "id": "5yMCA6HdFAeL1aqUjxO3MO",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273dd69d8ba2268cc625504b24f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02dd69d8ba2268cc625504b24f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851dd69d8ba2268cc625504b24f",
            "width": 64
          }],
          "name": "Light Upon the Lake",
          "release_date": "2016-06-03",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5yMCA6HdFAeL1aqUjxO3MO"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/32aUoW94mJ7xTJI7fG0V1G"
          },
          "href": "https://api.spotify.com/v1/artists/32aUoW94mJ7xTJI7fG0V1G",
          "id": "32aUoW94mJ7xTJI7fG0V1G",
          "name": "Whitney",
          "type": "artist",
          "uri": "spotify:artist:32aUoW94mJ7xTJI7fG0V1G"
        }],
        "disc_number": 1,
        "duration_ms": 242093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US38W1633703"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1oy0UIGzuqIPBkOsjojeJ1"
        },
        "href": "https://api.spotify.com/v1/tracks/1oy0UIGzuqIPBkOsjojeJ1",
        "id": "1oy0UIGzuqIPBkOsjojeJ1",
        "is_local": false,
        "is_playable": true,
        "name": "Golden Days",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/59e12bfc126a3b08584da27c8b4423cb411f083c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:1oy0UIGzuqIPBkOsjojeJ1"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-10T22:16:12Z",
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
        "share_id": "Hwm3azMcRj2s1d9L4Pb4Ag",
        "share_url": "https://open.spotify.com/track/7nT514JbB8Ok6Fl4Xalf2W?si=Hwm3azMcRj2s1d9L4Pb4Ag",
        "uri": "spotify:track:7nT514JbB8Ok6Fl4Xalf2W"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6LXZac7iBIZgnNrywTkQRw"
            },
            "href": "https://api.spotify.com/v1/artists/6LXZac7iBIZgnNrywTkQRw",
            "id": "6LXZac7iBIZgnNrywTkQRw",
            "name": "Monophonics",
            "type": "artist",
            "uri": "spotify:artist:6LXZac7iBIZgnNrywTkQRw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5sfg0vawAop8SLgWju5nmS"
          },
          "href": "https://api.spotify.com/v1/albums/5sfg0vawAop8SLgWju5nmS",
          "id": "5sfg0vawAop8SLgWju5nmS",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bb69f8d7c9595316135783e1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bb69f8d7c9595316135783e1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bb69f8d7c9595316135783e1",
            "width": 64
          }],
          "name": "It's Only Us",
          "release_date": "2020-03-13",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:5sfg0vawAop8SLgWju5nmS"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6LXZac7iBIZgnNrywTkQRw"
          },
          "href": "https://api.spotify.com/v1/artists/6LXZac7iBIZgnNrywTkQRw",
          "id": "6LXZac7iBIZgnNrywTkQRw",
          "name": "Monophonics",
          "type": "artist",
          "uri": "spotify:artist:6LXZac7iBIZgnNrywTkQRw"
        }],
        "disc_number": 1,
        "duration_ms": 298973,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZDMQ2003205"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7nT514JbB8Ok6Fl4Xalf2W"
        },
        "href": "https://api.spotify.com/v1/tracks/7nT514JbB8Ok6Fl4Xalf2W",
        "id": "7nT514JbB8Ok6Fl4Xalf2W",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/45NIAHXhwh4aF6Z5VzKBjY"
          },
          "href": "https://api.spotify.com/v1/tracks/45NIAHXhwh4aF6Z5VzKBjY",
          "id": "45NIAHXhwh4aF6Z5VzKBjY",
          "type": "track",
          "uri": "spotify:track:45NIAHXhwh4aF6Z5VzKBjY"
        },
        "name": "It's Only Us",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/614e0d3fc7a9b6206822d91e99cd46f9bcdd93b2?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:7nT514JbB8Ok6Fl4Xalf2W"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-10T22:17:12Z",
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
        "share_id": "J1WxvphRQyS6tOtVmO-QMw",
        "share_url": "https://open.spotify.com/track/3NKn0l0S0gfMFRSxakssMq?si=J1WxvphRQyS6tOtVmO-QMw",
        "uri": "spotify:track:3NKn0l0S0gfMFRSxakssMq"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2AWfnWrfFVhRPVX4JN9a6g"
            },
            "href": "https://api.spotify.com/v1/artists/2AWfnWrfFVhRPVX4JN9a6g",
            "id": "2AWfnWrfFVhRPVX4JN9a6g",
            "name": "Mamalarky",
            "type": "artist",
            "uri": "spotify:artist:2AWfnWrfFVhRPVX4JN9a6g"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1GRpnw4sy5BEksVEpmY0iJ"
          },
          "href": "https://api.spotify.com/v1/albums/1GRpnw4sy5BEksVEpmY0iJ",
          "id": "1GRpnw4sy5BEksVEpmY0iJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273fffece590075bef454f43fb4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02fffece590075bef454f43fb4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851fffece590075bef454f43fb4",
            "width": 64
          }],
          "name": "Fundamental Thrive Hive",
          "release_date": "2018-05-02",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:1GRpnw4sy5BEksVEpmY0iJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2AWfnWrfFVhRPVX4JN9a6g"
          },
          "href": "https://api.spotify.com/v1/artists/2AWfnWrfFVhRPVX4JN9a6g",
          "id": "2AWfnWrfFVhRPVX4JN9a6g",
          "name": "Mamalarky",
          "type": "artist",
          "uri": "spotify:artist:2AWfnWrfFVhRPVX4JN9a6g"
        }],
        "disc_number": 1,
        "duration_ms": 199300,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZCLX1800004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3NKn0l0S0gfMFRSxakssMq"
        },
        "href": "https://api.spotify.com/v1/tracks/3NKn0l0S0gfMFRSxakssMq",
        "id": "3NKn0l0S0gfMFRSxakssMq",
        "is_local": false,
        "is_playable": true,
        "name": "Much Better",
        "popularity": 11,
        "preview_url": "https://p.scdn.co/mp3-preview/979c11f9c1f661b5a5f50365de43ea9afb37d65e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:3NKn0l0S0gfMFRSxakssMq"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-16T19:57:22Z",
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
        "share_id": "NKE9DQZZTZOEaFAh2zVfrg",
        "share_url": "https://open.spotify.com/track/14txdim8SrtUpyag8mbz73?si=NKE9DQZZTZOEaFAh2zVfrg",
        "uri": "spotify:track:14txdim8SrtUpyag8mbz73"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6fxk3UXHTFYET8qCT9WlBF"
            },
            "href": "https://api.spotify.com/v1/artists/6fxk3UXHTFYET8qCT9WlBF",
            "id": "6fxk3UXHTFYET8qCT9WlBF",
            "name": "Kevin Morby",
            "type": "artist",
            "uri": "spotify:artist:6fxk3UXHTFYET8qCT9WlBF"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3Xugyt3sTfDgvALU1St1QA"
          },
          "href": "https://api.spotify.com/v1/albums/3Xugyt3sTfDgvALU1St1QA",
          "id": "3Xugyt3sTfDgvALU1St1QA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c1e42201d32b5be9aa8117bf",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c1e42201d32b5be9aa8117bf",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c1e42201d32b5be9aa8117bf",
            "width": 64
          }],
          "name": "Oh My God",
          "release_date": "2019-04-26",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:3Xugyt3sTfDgvALU1St1QA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6fxk3UXHTFYET8qCT9WlBF"
          },
          "href": "https://api.spotify.com/v1/artists/6fxk3UXHTFYET8qCT9WlBF",
          "id": "6fxk3UXHTFYET8qCT9WlBF",
          "name": "Kevin Morby",
          "type": "artist",
          "uri": "spotify:artist:6fxk3UXHTFYET8qCT9WlBF"
        }],
        "disc_number": 1,
        "duration_ms": 166490,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USJ5G1919110"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/14txdim8SrtUpyag8mbz73"
        },
        "href": "https://api.spotify.com/v1/tracks/14txdim8SrtUpyag8mbz73",
        "id": "14txdim8SrtUpyag8mbz73",
        "is_local": false,
        "is_playable": true,
        "name": "Congratulations",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/97493e8ce2054f144c185e6ef2e946c773b30047?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:14txdim8SrtUpyag8mbz73"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-10T22:17:55Z",
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
        "share_id": "hxPj-lnGQ2a2cINJTVUwOg",
        "share_url": "https://open.spotify.com/track/239gdoWnFE4O86aDUbI5jU?si=hxPj-lnGQ2a2cINJTVUwOg",
        "uri": "spotify:track:239gdoWnFE4O86aDUbI5jU"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7H3mzoTRkxJuqKBRYcykwL"
            },
            "href": "https://api.spotify.com/v1/artists/7H3mzoTRkxJuqKBRYcykwL",
            "id": "7H3mzoTRkxJuqKBRYcykwL",
            "name": "Blitz",
            "type": "artist",
            "uri": "spotify:artist:7H3mzoTRkxJuqKBRYcykwL"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7syWKW2UZ7UyN5gKGJ9gbu"
          },
          "href": "https://api.spotify.com/v1/albums/7syWKW2UZ7UyN5gKGJ9gbu",
          "id": "7syWKW2UZ7UyN5gKGJ9gbu",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273778399cd7f890657fec7f4ae",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02778399cd7f890657fec7f4ae",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851778399cd7f890657fec7f4ae",
            "width": 64
          }],
          "name": "Second Empire Justice",
          "release_date": "1983-01-01",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:7syWKW2UZ7UyN5gKGJ9gbu"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7H3mzoTRkxJuqKBRYcykwL"
          },
          "href": "https://api.spotify.com/v1/artists/7H3mzoTRkxJuqKBRYcykwL",
          "id": "7H3mzoTRkxJuqKBRYcykwL",
          "name": "Blitz",
          "type": "artist",
          "uri": "spotify:artist:7H3mzoTRkxJuqKBRYcykwL"
        }],
        "disc_number": 1,
        "duration_ms": 264453,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "GBBLY8300363"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/239gdoWnFE4O86aDUbI5jU"
        },
        "href": "https://api.spotify.com/v1/tracks/239gdoWnFE4O86aDUbI5jU",
        "id": "239gdoWnFE4O86aDUbI5jU",
        "is_local": false,
        "is_playable": false,
        "name": "Flowers & Fire",
        "popularity": 1,
        "preview_url": null,
        "restrictions": {
          "reason": "market"
        },
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:239gdoWnFE4O86aDUbI5jU"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-03-02T06:54:09Z",
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
        "share_id": "HgjGy3eRRumgjBDCdkoALA",
        "share_url": "https://open.spotify.com/track/1n1CgGG0Fsf13jpchg4clm?si=HgjGy3eRRumgjBDCdkoALA",
        "uri": "spotify:track:1n1CgGG0Fsf13jpchg4clm"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2l0l9vAusvI6rvnfvQ3moc"
            },
            "href": "https://api.spotify.com/v1/artists/2l0l9vAusvI6rvnfvQ3moc",
            "id": "2l0l9vAusvI6rvnfvQ3moc",
            "name": "Mylee Grace",
            "type": "artist",
            "uri": "spotify:artist:2l0l9vAusvI6rvnfvQ3moc"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6BgXetoc3WTnyEXChK5W1j"
            },
            "href": "https://api.spotify.com/v1/artists/6BgXetoc3WTnyEXChK5W1j",
            "id": "6BgXetoc3WTnyEXChK5W1j",
            "name": "Ozzy Wrong",
            "type": "artist",
            "uri": "spotify:artist:6BgXetoc3WTnyEXChK5W1j"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/45v7cHfEAWZ0MFtS0K6vzd"
          },
          "href": "https://api.spotify.com/v1/albums/45v7cHfEAWZ0MFtS0K6vzd",
          "id": "45v7cHfEAWZ0MFtS0K6vzd",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f71fcec8b727721cb123c045",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f71fcec8b727721cb123c045",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f71fcec8b727721cb123c045",
            "width": 64
          }],
          "name": "Mylee Grace and Ozzy Wrong Songs",
          "release_date": "2013-11-07",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:45v7cHfEAWZ0MFtS0K6vzd"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2l0l9vAusvI6rvnfvQ3moc"
          },
          "href": "https://api.spotify.com/v1/artists/2l0l9vAusvI6rvnfvQ3moc",
          "id": "2l0l9vAusvI6rvnfvQ3moc",
          "name": "Mylee Grace",
          "type": "artist",
          "uri": "spotify:artist:2l0l9vAusvI6rvnfvQ3moc"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6BgXetoc3WTnyEXChK5W1j"
          },
          "href": "https://api.spotify.com/v1/artists/6BgXetoc3WTnyEXChK5W1j",
          "id": "6BgXetoc3WTnyEXChK5W1j",
          "name": "Ozzy Wrong",
          "type": "artist",
          "uri": "spotify:artist:6BgXetoc3WTnyEXChK5W1j"
        }],
        "disc_number": 1,
        "duration_ms": 189133,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCABR1362665"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1n1CgGG0Fsf13jpchg4clm"
        },
        "href": "https://api.spotify.com/v1/tracks/1n1CgGG0Fsf13jpchg4clm",
        "id": "1n1CgGG0Fsf13jpchg4clm",
        "is_local": false,
        "is_playable": true,
        "name": "Pray for the Sunshine",
        "popularity": 14,
        "preview_url": "https://p.scdn.co/mp3-preview/a1afffc62de1413f10179f03b1b007c172c00fff?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:1n1CgGG0Fsf13jpchg4clm"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-04-08T03:06:28Z",
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
        "share_id": "B8tyMBsaS3CSV1PNh9z-_A",
        "share_url": "https://open.spotify.com/track/24AGb4MCGarwd1KOEhWHiW?si=B8tyMBsaS3CSV1PNh9z-_A",
        "uri": "spotify:track:24AGb4MCGarwd1KOEhWHiW"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/02seUFsFQP7TH4hLrTj77o"
            },
            "href": "https://api.spotify.com/v1/artists/02seUFsFQP7TH4hLrTj77o",
            "id": "02seUFsFQP7TH4hLrTj77o",
            "name": "Nathaniel Rateliff & The Night Sweats",
            "type": "artist",
            "uri": "spotify:artist:02seUFsFQP7TH4hLrTj77o"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2tAHztCNwwG5L3d3YbuZO6"
            },
            "href": "https://api.spotify.com/v1/artists/2tAHztCNwwG5L3d3YbuZO6",
            "id": "2tAHztCNwwG5L3d3YbuZO6",
            "name": "Fug Yep Soundation",
            "type": "artist",
            "uri": "spotify:artist:2tAHztCNwwG5L3d3YbuZO6"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4qKpLkR911SUlnd4HAtF79"
            },
            "href": "https://api.spotify.com/v1/artists/4qKpLkR911SUlnd4HAtF79",
            "id": "4qKpLkR911SUlnd4HAtF79",
            "name": "Nathaniel Rateliff",
            "type": "artist",
            "uri": "spotify:artist:4qKpLkR911SUlnd4HAtF79"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3NM2SPfWY5w5KB3iHRLo3w"
          },
          "href": "https://api.spotify.com/v1/albums/3NM2SPfWY5w5KB3iHRLo3w",
          "id": "3NM2SPfWY5w5KB3iHRLo3w",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2739ff39c66324b936b2b412839",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e029ff39c66324b936b2b412839",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048519ff39c66324b936b2b412839",
            "width": 64
          }],
          "name": "Fug Yep No. 3",
          "release_date": "2020-04-03",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:3NM2SPfWY5w5KB3iHRLo3w"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/02seUFsFQP7TH4hLrTj77o"
          },
          "href": "https://api.spotify.com/v1/artists/02seUFsFQP7TH4hLrTj77o",
          "id": "02seUFsFQP7TH4hLrTj77o",
          "name": "Nathaniel Rateliff & The Night Sweats",
          "type": "artist",
          "uri": "spotify:artist:02seUFsFQP7TH4hLrTj77o"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2tAHztCNwwG5L3d3YbuZO6"
          },
          "href": "https://api.spotify.com/v1/artists/2tAHztCNwwG5L3d3YbuZO6",
          "id": "2tAHztCNwwG5L3d3YbuZO6",
          "name": "Fug Yep Soundation",
          "type": "artist",
          "uri": "spotify:artist:2tAHztCNwwG5L3d3YbuZO6"
        }],
        "disc_number": 1,
        "duration_ms": 223680,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USA2B2055562"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/24AGb4MCGarwd1KOEhWHiW"
        },
        "href": "https://api.spotify.com/v1/tracks/24AGb4MCGarwd1KOEhWHiW",
        "id": "24AGb4MCGarwd1KOEhWHiW",
        "is_local": false,
        "is_playable": true,
        "name": "Don't Care Darlin'",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/e36148c70af0a024ff2dba25da8d18406cbe213d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:24AGb4MCGarwd1KOEhWHiW"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 17
  },
  "type": "playlist",
  "uri": "spotify:playlist:6ql3BXLoIGuIzLLUegweW3"
};

/***/ })

/******/ });