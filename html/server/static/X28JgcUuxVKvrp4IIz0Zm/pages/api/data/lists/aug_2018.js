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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2mA");


/***/ }),

/***/ "R2mA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/7BmTsFSIR7YZy33GmXc658"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/7BmTsFSIR7YZy33GmXc658?type=track,episode",
  "id": "7BmTsFSIR7YZy33GmXc658",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731f734b87ce82738d38e87c70ab67616d0000b2737937d6a3caeb7e673f0f23cdab67616d0000b273afd822e34256c819b3848ae0ab67616d0000b273d37d023cf0ddb1440f659ee3",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731f734b87ce82738d38e87c70ab67616d0000b2737937d6a3caeb7e673f0f23cdab67616d0000b273afd822e34256c819b3848ae0ab67616d0000b273d37d023cf0ddb1440f659ee3",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731f734b87ce82738d38e87c70ab67616d0000b2737937d6a3caeb7e673f0f23cdab67616d0000b273afd822e34256c819b3848ae0ab67616d0000b273d37d023cf0ddb1440f659ee3",
    "width": 60
  }],
  "name": "August 2018",
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
    "share_id": "eJHNTLJPQAGJpqyJMYuJBQ",
    "share_url": "https://open.spotify.com/playlist/7BmTsFSIR7YZy33GmXc658?si=eJHNTLJPQAGJpqyJMYuJBQ",
    "uri": "spotify:playlist:7BmTsFSIR7YZy33GmXc658"
  },
  "snapshot_id": "MzAsMmUyOWJlYzg1YWQ2NzNiNDkyNzdhMWRiN2MzYjVmYjFmNzY0N2U1MA==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/7BmTsFSIR7YZy33GmXc658/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2018-08-03T16:53:42Z",
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
        "share_id": "tv5KOoMHQnO1Tnm9V5gI6A",
        "share_url": "https://open.spotify.com/track/3ZAJJoHHCVGLIoScl26Hf4?si=tv5KOoMHQnO1Tnm9V5gI6A",
        "uri": "spotify:track:3ZAJJoHHCVGLIoScl26Hf4"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7D8LuVnlyu91ndcPe70j7S"
            },
            "href": "https://api.spotify.com/v1/artists/7D8LuVnlyu91ndcPe70j7S",
            "id": "7D8LuVnlyu91ndcPe70j7S",
            "name": "Jade Bird",
            "type": "artist",
            "uri": "spotify:artist:7D8LuVnlyu91ndcPe70j7S"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/34RIeuzZA8ySXCbsEd62jG"
          },
          "href": "https://api.spotify.com/v1/albums/34RIeuzZA8ySXCbsEd62jG",
          "id": "34RIeuzZA8ySXCbsEd62jG",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273afd822e34256c819b3848ae0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02afd822e34256c819b3848ae0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851afd822e34256c819b3848ae0",
            "width": 64
          }],
          "name": "Jade Bird",
          "release_date": "2019-04-19",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:34RIeuzZA8ySXCbsEd62jG"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7D8LuVnlyu91ndcPe70j7S"
          },
          "href": "https://api.spotify.com/v1/artists/7D8LuVnlyu91ndcPe70j7S",
          "id": "7D8LuVnlyu91ndcPe70j7S",
          "name": "Jade Bird",
          "type": "artist",
          "uri": "spotify:artist:7D8LuVnlyu91ndcPe70j7S"
        }],
        "disc_number": 1,
        "duration_ms": 142443,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USYAH1700300"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3ZAJJoHHCVGLIoScl26Hf4"
        },
        "href": "https://api.spotify.com/v1/tracks/3ZAJJoHHCVGLIoScl26Hf4",
        "id": "3ZAJJoHHCVGLIoScl26Hf4",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6UQkKezR70jMXymMJgRcOz"
          },
          "href": "https://api.spotify.com/v1/tracks/6UQkKezR70jMXymMJgRcOz",
          "id": "6UQkKezR70jMXymMJgRcOz",
          "type": "track",
          "uri": "spotify:track:6UQkKezR70jMXymMJgRcOz"
        },
        "name": "Uh Huh",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/1dbdb0859266e392172173f04d8c1e8f452570b1?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:3ZAJJoHHCVGLIoScl26Hf4"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-03T17:29:10Z",
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
        "share_id": "sBZrgHD9TXeRYF6D3ZgkwQ",
        "share_url": "https://open.spotify.com/track/7DjtLnZKMipNZDt6SE9iEq?si=sBZrgHD9TXeRYF6D3ZgkwQ",
        "uri": "spotify:track:7DjtLnZKMipNZDt6SE9iEq"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3HJIB8sYPyxrFGuwvKXSLR"
            },
            "href": "https://api.spotify.com/v1/artists/3HJIB8sYPyxrFGuwvKXSLR",
            "id": "3HJIB8sYPyxrFGuwvKXSLR",
            "name": "TV On The Radio",
            "type": "artist",
            "uri": "spotify:artist:3HJIB8sYPyxrFGuwvKXSLR"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2pJdnCpeXm3KVUlyuNSeRX"
          },
          "href": "https://api.spotify.com/v1/albums/2pJdnCpeXm3KVUlyuNSeRX",
          "id": "2pJdnCpeXm3KVUlyuNSeRX",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d37d023cf0ddb1440f659ee3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d37d023cf0ddb1440f659ee3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d37d023cf0ddb1440f659ee3",
            "width": 64
          }],
          "name": "Seeds",
          "release_date": "2014-11-17",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2pJdnCpeXm3KVUlyuNSeRX"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3HJIB8sYPyxrFGuwvKXSLR"
          },
          "href": "https://api.spotify.com/v1/artists/3HJIB8sYPyxrFGuwvKXSLR",
          "id": "3HJIB8sYPyxrFGuwvKXSLR",
          "name": "TV On The Radio",
          "type": "artist",
          "uri": "spotify:artist:3HJIB8sYPyxrFGuwvKXSLR"
        }],
        "disc_number": 1,
        "duration_ms": 312241,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUG11401338"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7DjtLnZKMipNZDt6SE9iEq"
        },
        "href": "https://api.spotify.com/v1/tracks/7DjtLnZKMipNZDt6SE9iEq",
        "id": "7DjtLnZKMipNZDt6SE9iEq",
        "is_local": false,
        "is_playable": true,
        "name": "Careful You",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/19d6768347c5a89b18df1d938dee68b6daa82e57?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:7DjtLnZKMipNZDt6SE9iEq"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-03T18:32:47Z",
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
        "share_id": "Gk_CclAKSYy6m180tiIW4w",
        "share_url": "https://open.spotify.com/track/5KFrjkrwlFTJQuYwZVpUqc?si=Gk_CclAKSYy6m180tiIW4w",
        "uri": "spotify:track:5KFrjkrwlFTJQuYwZVpUqc"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7wGrLSB3v7jkV3fSsjYwtv"
            },
            "href": "https://api.spotify.com/v1/artists/7wGrLSB3v7jkV3fSsjYwtv",
            "id": "7wGrLSB3v7jkV3fSsjYwtv",
            "name": "Born Ruffians",
            "type": "artist",
            "uri": "spotify:artist:7wGrLSB3v7jkV3fSsjYwtv"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5DeXOsj0SvqKPQWnv5k8WB"
          },
          "href": "https://api.spotify.com/v1/albums/5DeXOsj0SvqKPQWnv5k8WB",
          "id": "5DeXOsj0SvqKPQWnv5k8WB",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731f734b87ce82738d38e87c70",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021f734b87ce82738d38e87c70",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511f734b87ce82738d38e87c70",
            "width": 64
          }],
          "name": "Uncle, Duke & The Chief",
          "release_date": "2018-02-16",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:5DeXOsj0SvqKPQWnv5k8WB"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7wGrLSB3v7jkV3fSsjYwtv"
          },
          "href": "https://api.spotify.com/v1/artists/7wGrLSB3v7jkV3fSsjYwtv",
          "id": "7wGrLSB3v7jkV3fSsjYwtv",
          "name": "Born Ruffians",
          "type": "artist",
          "uri": "spotify:artist:7wGrLSB3v7jkV3fSsjYwtv"
        }],
        "disc_number": 1,
        "duration_ms": 216388,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAP431701417"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5KFrjkrwlFTJQuYwZVpUqc"
        },
        "href": "https://api.spotify.com/v1/tracks/5KFrjkrwlFTJQuYwZVpUqc",
        "id": "5KFrjkrwlFTJQuYwZVpUqc",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4kt8Z0jxgclmzE1QJvzQqr"
          },
          "href": "https://api.spotify.com/v1/tracks/4kt8Z0jxgclmzE1QJvzQqr",
          "id": "4kt8Z0jxgclmzE1QJvzQqr",
          "type": "track",
          "uri": "spotify:track:4kt8Z0jxgclmzE1QJvzQqr"
        },
        "name": "Forget Me",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/8567e8c390f2dab9245fc0d9671d08cf8e0bea18?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5KFrjkrwlFTJQuYwZVpUqc"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-06T16:40:34Z",
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
        "share_id": "gMmOk04ERm-xNFheyc89uw",
        "share_url": "https://open.spotify.com/track/2WF3BGqeYHsq7ZPPF1j2jN?si=gMmOk04ERm-xNFheyc89uw",
        "uri": "spotify:track:2WF3BGqeYHsq7ZPPF1j2jN"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0FC1LIeQXKib0jOwZqeIwT"
            },
            "href": "https://api.spotify.com/v1/artists/0FC1LIeQXKib0jOwZqeIwT",
            "id": "0FC1LIeQXKib0jOwZqeIwT",
            "name": "Brett Dennen",
            "type": "artist",
            "uri": "spotify:artist:0FC1LIeQXKib0jOwZqeIwT"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7qFJaUed78dZVvxdV2kDDF"
          },
          "href": "https://api.spotify.com/v1/albums/7qFJaUed78dZVvxdV2kDDF",
          "id": "7qFJaUed78dZVvxdV2kDDF",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737937d6a3caeb7e673f0f23cd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027937d6a3caeb7e673f0f23cd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517937d6a3caeb7e673f0f23cd",
            "width": 64
          }],
          "name": "Here's Looking at You Kid",
          "release_date": "2018-08-03",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:7qFJaUed78dZVvxdV2kDDF"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0FC1LIeQXKib0jOwZqeIwT"
          },
          "href": "https://api.spotify.com/v1/artists/0FC1LIeQXKib0jOwZqeIwT",
          "id": "0FC1LIeQXKib0jOwZqeIwT",
          "name": "Brett Dennen",
          "type": "artist",
          "uri": "spotify:artist:0FC1LIeQXKib0jOwZqeIwT"
        }],
        "disc_number": 1,
        "duration_ms": 218260,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1816772"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2WF3BGqeYHsq7ZPPF1j2jN"
        },
        "href": "https://api.spotify.com/v1/tracks/2WF3BGqeYHsq7ZPPF1j2jN",
        "id": "2WF3BGqeYHsq7ZPPF1j2jN",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1iFDR2HkDL2QWIkGC0oGRE"
          },
          "href": "https://api.spotify.com/v1/tracks/1iFDR2HkDL2QWIkGC0oGRE",
          "id": "1iFDR2HkDL2QWIkGC0oGRE",
          "type": "track",
          "uri": "spotify:track:1iFDR2HkDL2QWIkGC0oGRE"
        },
        "name": "Here's Looking at You Kid",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/a7ab6e9f57d56beb89005282f2ea28149a9923f6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2WF3BGqeYHsq7ZPPF1j2jN"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-06T16:50:36Z",
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
        "share_id": "9KyBcIi9QvOcreK6OFORSA",
        "share_url": "https://open.spotify.com/track/1JK7oWiemlE6d4zAMnHWvS?si=9KyBcIi9QvOcreK6OFORSA",
        "uri": "spotify:track:1JK7oWiemlE6d4zAMnHWvS"
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
            "spotify": "https://open.spotify.com/album/5XYvtCyxdwbsk2XIdLPFgU"
          },
          "href": "https://api.spotify.com/v1/albums/5XYvtCyxdwbsk2XIdLPFgU",
          "id": "5XYvtCyxdwbsk2XIdLPFgU",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27348ceeacf0fb37fa712b443aa",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0248ceeacf0fb37fa712b443aa",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485148ceeacf0fb37fa712b443aa",
            "width": 64
          }],
          "name": "Pristine",
          "release_date": "2018-03-21",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5XYvtCyxdwbsk2XIdLPFgU"
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
        "duration_ms": 295333,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMTD1811091"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1JK7oWiemlE6d4zAMnHWvS"
        },
        "href": "https://api.spotify.com/v1/tracks/1JK7oWiemlE6d4zAMnHWvS",
        "id": "1JK7oWiemlE6d4zAMnHWvS",
        "is_local": false,
        "is_playable": true,
        "name": "Pristine",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/b97f8fe32a38250728b8e4164bd4aca6eee48491?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1JK7oWiemlE6d4zAMnHWvS"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-06T16:55:11Z",
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
        "share_id": "tHHjQW-gRJ-uCnpLGvL1Mg",
        "share_url": "https://open.spotify.com/track/1gsQmDnyXfq6jPIXYCPKHB?si=tHHjQW-gRJ-uCnpLGvL1Mg",
        "uri": "spotify:track:1gsQmDnyXfq6jPIXYCPKHB"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0yNLKJebCb8Aueb54LYya3"
            },
            "href": "https://api.spotify.com/v1/artists/0yNLKJebCb8Aueb54LYya3",
            "id": "0yNLKJebCb8Aueb54LYya3",
            "name": "New Order",
            "type": "artist",
            "uri": "spotify:artist:0yNLKJebCb8Aueb54LYya3"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6ls958BLJbeFT3OqAYTvQB"
          },
          "href": "https://api.spotify.com/v1/albums/6ls958BLJbeFT3OqAYTvQB",
          "id": "6ls958BLJbeFT3OqAYTvQB",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d3495c4785236068ebc7fdc8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d3495c4785236068ebc7fdc8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d3495c4785236068ebc7fdc8",
            "width": 64
          }],
          "name": "Low-Life",
          "release_date": "1985-05-13",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:6ls958BLJbeFT3OqAYTvQB"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0yNLKJebCb8Aueb54LYya3"
          },
          "href": "https://api.spotify.com/v1/artists/0yNLKJebCb8Aueb54LYya3",
          "id": "0yNLKJebCb8Aueb54LYya3",
          "name": "New Order",
          "type": "artist",
          "uri": "spotify:artist:0yNLKJebCb8Aueb54LYya3"
        }],
        "disc_number": 1,
        "duration_ms": 259306,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAAP1500387"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1gsQmDnyXfq6jPIXYCPKHB"
        },
        "href": "https://api.spotify.com/v1/tracks/1gsQmDnyXfq6jPIXYCPKHB",
        "id": "1gsQmDnyXfq6jPIXYCPKHB",
        "is_local": false,
        "is_playable": true,
        "name": "Love Vigilantes - 2015 Remaster",
        "popularity": 50,
        "preview_url": "https://p.scdn.co/mp3-preview/d7ffcc2ce068c84276eac733cee69fc977ba8ae4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1gsQmDnyXfq6jPIXYCPKHB"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-06T19:24:32Z",
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
        "share_id": "FnHO-gCVSsGZuBpmCrJfwg",
        "share_url": "https://open.spotify.com/track/732uqsu5j3zGRDCTXfZJI2?si=FnHO-gCVSsGZuBpmCrJfwg",
        "uri": "spotify:track:732uqsu5j3zGRDCTXfZJI2"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4mO4aGO6u29UyR6XLZR9XW"
            },
            "href": "https://api.spotify.com/v1/artists/4mO4aGO6u29UyR6XLZR9XW",
            "id": "4mO4aGO6u29UyR6XLZR9XW",
            "name": "The New Pornographers",
            "type": "artist",
            "uri": "spotify:artist:4mO4aGO6u29UyR6XLZR9XW"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4HRoFjJgjVzyp4I2KhdVNC"
          },
          "href": "https://api.spotify.com/v1/albums/4HRoFjJgjVzyp4I2KhdVNC",
          "id": "4HRoFjJgjVzyp4I2KhdVNC",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27341584c0dd29ea6a4682c87b4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0241584c0dd29ea6a4682c87b4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485141584c0dd29ea6a4682c87b4",
            "width": 64
          }],
          "name": "Challengers",
          "release_date": "2007-08-21",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:4HRoFjJgjVzyp4I2KhdVNC"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4mO4aGO6u29UyR6XLZR9XW"
          },
          "href": "https://api.spotify.com/v1/artists/4mO4aGO6u29UyR6XLZR9XW",
          "id": "4mO4aGO6u29UyR6XLZR9XW",
          "name": "The New Pornographers",
          "type": "artist",
          "uri": "spotify:artist:4mO4aGO6u29UyR6XLZR9XW"
        }],
        "disc_number": 1,
        "duration_ms": 211533,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMTD0777003"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/732uqsu5j3zGRDCTXfZJI2"
        },
        "href": "https://api.spotify.com/v1/tracks/732uqsu5j3zGRDCTXfZJI2",
        "id": "732uqsu5j3zGRDCTXfZJI2",
        "is_local": false,
        "is_playable": true,
        "name": "Challengers",
        "popularity": 45,
        "preview_url": "https://p.scdn.co/mp3-preview/27abfa3fb35f0cda269de7bbcda67f28c0fa5b68?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:732uqsu5j3zGRDCTXfZJI2"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-06T21:32:18Z",
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
        "share_id": "Sn3g2B-ATq2tm4QSDpqGvw",
        "share_url": "https://open.spotify.com/track/242DUUeXEneTDY1ok4hRel?si=Sn3g2B-ATq2tm4QSDpqGvw",
        "uri": "spotify:track:242DUUeXEneTDY1ok4hRel"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3yYUV3hkJit05YIUEODqgp"
            },
            "href": "https://api.spotify.com/v1/artists/3yYUV3hkJit05YIUEODqgp",
            "id": "3yYUV3hkJit05YIUEODqgp",
            "name": "Hop Along",
            "type": "artist",
            "uri": "spotify:artist:3yYUV3hkJit05YIUEODqgp"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/16fimHkQtXptYBytXfHfUs"
          },
          "href": "https://api.spotify.com/v1/albums/16fimHkQtXptYBytXfHfUs",
          "id": "16fimHkQtXptYBytXfHfUs",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735361d2498aca0258961a4357",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025361d2498aca0258961a4357",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515361d2498aca0258961a4357",
            "width": 64
          }],
          "name": "Painted Shut",
          "release_date": "2015-05-04",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:16fimHkQtXptYBytXfHfUs"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3yYUV3hkJit05YIUEODqgp"
          },
          "href": "https://api.spotify.com/v1/artists/3yYUV3hkJit05YIUEODqgp",
          "id": "3yYUV3hkJit05YIUEODqgp",
          "name": "Hop Along",
          "type": "artist",
          "uri": "spotify:artist:3yYUV3hkJit05YIUEODqgp"
        }],
        "disc_number": 1,
        "duration_ms": 242688,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2U61521809"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/242DUUeXEneTDY1ok4hRel"
        },
        "href": "https://api.spotify.com/v1/tracks/242DUUeXEneTDY1ok4hRel",
        "id": "242DUUeXEneTDY1ok4hRel",
        "is_local": false,
        "is_playable": true,
        "name": "Well-dressed",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/fbab5f10c62282c9b5cea8297ec81cde29bbefd8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:242DUUeXEneTDY1ok4hRel"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-07T17:27:20Z",
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
        "share_id": "se9LzOJ0T_qGZuRSfNoXCw",
        "share_url": "https://open.spotify.com/track/1NjmSXMzvwoM3lHmDRcUfs?si=se9LzOJ0T_qGZuRSfNoXCw",
        "uri": "spotify:track:1NjmSXMzvwoM3lHmDRcUfs"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0asVlqTLu3TimnYVyY5Jxi"
            },
            "href": "https://api.spotify.com/v1/artists/0asVlqTLu3TimnYVyY5Jxi",
            "id": "0asVlqTLu3TimnYVyY5Jxi",
            "name": "Tune-Yards",
            "type": "artist",
            "uri": "spotify:artist:0asVlqTLu3TimnYVyY5Jxi"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7rBLvpL7ZWi1YCSXSLUZKF"
          },
          "href": "https://api.spotify.com/v1/albums/7rBLvpL7ZWi1YCSXSLUZKF",
          "id": "7rBLvpL7ZWi1YCSXSLUZKF",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b21ff22af82a1b4e22223d95",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b21ff22af82a1b4e22223d95",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b21ff22af82a1b4e22223d95",
            "width": 64
          }],
          "name": "W H O K I L L",
          "release_date": "2011-04-18",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:7rBLvpL7ZWi1YCSXSLUZKF"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0asVlqTLu3TimnYVyY5Jxi"
          },
          "href": "https://api.spotify.com/v1/artists/0asVlqTLu3TimnYVyY5Jxi",
          "id": "0asVlqTLu3TimnYVyY5Jxi",
          "name": "Tune-Yards",
          "type": "artist",
          "uri": "spotify:artist:0asVlqTLu3TimnYVyY5Jxi"
        }],
        "disc_number": 1,
        "duration_ms": 303800,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAFL1100005"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1NjmSXMzvwoM3lHmDRcUfs"
        },
        "href": "https://api.spotify.com/v1/tracks/1NjmSXMzvwoM3lHmDRcUfs",
        "id": "1NjmSXMzvwoM3lHmDRcUfs",
        "is_local": false,
        "is_playable": true,
        "name": "Powa",
        "popularity": 51,
        "preview_url": "https://p.scdn.co/mp3-preview/b11fc4f1e72171c243511238a81df814a141ebab?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:1NjmSXMzvwoM3lHmDRcUfs"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-09T16:55:38Z",
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
        "share_id": "xLfsH2uGQy-vAEmqS4HwDw",
        "share_url": "https://open.spotify.com/track/4gZDCOFuLCxCRWNhSEcOtJ?si=xLfsH2uGQy-vAEmqS4HwDw",
        "uri": "spotify:track:4gZDCOFuLCxCRWNhSEcOtJ"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0NIPkIjTV8mB795yEIiPYL"
            },
            "href": "https://api.spotify.com/v1/artists/0NIPkIjTV8mB795yEIiPYL",
            "id": "0NIPkIjTV8mB795yEIiPYL",
            "name": "Wallows",
            "type": "artist",
            "uri": "spotify:artist:0NIPkIjTV8mB795yEIiPYL"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0P2kTQ7mJ3z7CFjII7GWkw"
          },
          "href": "https://api.spotify.com/v1/albums/0P2kTQ7mJ3z7CFjII7GWkw",
          "id": "0P2kTQ7mJ3z7CFjII7GWkw",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273789e81b6ddbcbeda579d6066",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02789e81b6ddbcbeda579d6066",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851789e81b6ddbcbeda579d6066",
            "width": 64
          }],
          "name": "Spring EP",
          "release_date": "2018-04-06",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:0P2kTQ7mJ3z7CFjII7GWkw"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0NIPkIjTV8mB795yEIiPYL"
          },
          "href": "https://api.spotify.com/v1/artists/0NIPkIjTV8mB795yEIiPYL",
          "id": "0NIPkIjTV8mB795yEIiPYL",
          "name": "Wallows",
          "type": "artist",
          "uri": "spotify:artist:0NIPkIjTV8mB795yEIiPYL"
        }],
        "disc_number": 1,
        "duration_ms": 202626,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USAT21800737"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4gZDCOFuLCxCRWNhSEcOtJ"
        },
        "href": "https://api.spotify.com/v1/tracks/4gZDCOFuLCxCRWNhSEcOtJ",
        "id": "4gZDCOFuLCxCRWNhSEcOtJ",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0GL0TZRvSyriDJnEsjBU9y"
          },
          "href": "https://api.spotify.com/v1/tracks/0GL0TZRvSyriDJnEsjBU9y",
          "id": "0GL0TZRvSyriDJnEsjBU9y",
          "type": "track",
          "uri": "spotify:track:0GL0TZRvSyriDJnEsjBU9y"
        },
        "name": "These Days",
        "popularity": 73,
        "preview_url": "https://p.scdn.co/mp3-preview/14d3486fab887b0d521f48615a1fab06d2b90bf8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:4gZDCOFuLCxCRWNhSEcOtJ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-09T17:40:34Z",
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
        "share_id": "C9ORBRMLQwe-lxKy8-BBuw",
        "share_url": "https://open.spotify.com/track/1e2LGT07diSwc7UYnK7txi?si=C9ORBRMLQwe-lxKy8-BBuw",
        "uri": "spotify:track:1e2LGT07diSwc7UYnK7txi"
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
        "duration_ms": 248791,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US27Q1841701"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1e2LGT07diSwc7UYnK7txi"
        },
        "href": "https://api.spotify.com/v1/tracks/1e2LGT07diSwc7UYnK7txi",
        "id": "1e2LGT07diSwc7UYnK7txi",
        "is_local": false,
        "is_playable": true,
        "name": "More Of The Same",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/0b034be9de4a496646f928da11ddf3a4df464a7d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1e2LGT07diSwc7UYnK7txi"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-10T16:51:19Z",
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
        "share_id": "wllrGAELTWy4RASSf741Nw",
        "share_url": "https://open.spotify.com/track/5iwLtCT1mV6JcYBa4az0hi?si=wllrGAELTWy4RASSf741Nw",
        "uri": "spotify:track:5iwLtCT1mV6JcYBa4az0hi"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4mZgWEC08B8iiFbrugixkq"
            },
            "href": "https://api.spotify.com/v1/artists/4mZgWEC08B8iiFbrugixkq",
            "id": "4mZgWEC08B8iiFbrugixkq",
            "name": "Sam Valdez",
            "type": "artist",
            "uri": "spotify:artist:4mZgWEC08B8iiFbrugixkq"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1FcjKcbVkAVRuRgvolnHYb"
          },
          "href": "https://api.spotify.com/v1/albums/1FcjKcbVkAVRuRgvolnHYb",
          "id": "1FcjKcbVkAVRuRgvolnHYb",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734640e18b2dc950bab1f78949",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024640e18b2dc950bab1f78949",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514640e18b2dc950bab1f78949",
            "width": 64
          }],
          "name": "It's Alright",
          "release_date": "2017-10-26",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1FcjKcbVkAVRuRgvolnHYb"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4mZgWEC08B8iiFbrugixkq"
          },
          "href": "https://api.spotify.com/v1/artists/4mZgWEC08B8iiFbrugixkq",
          "id": "4mZgWEC08B8iiFbrugixkq",
          "name": "Sam Valdez",
          "type": "artist",
          "uri": "spotify:artist:4mZgWEC08B8iiFbrugixkq"
        }],
        "disc_number": 1,
        "duration_ms": 196405,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US3DF1707545"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5iwLtCT1mV6JcYBa4az0hi"
        },
        "href": "https://api.spotify.com/v1/tracks/5iwLtCT1mV6JcYBa4az0hi",
        "id": "5iwLtCT1mV6JcYBa4az0hi",
        "is_local": false,
        "is_playable": true,
        "name": "It's Alright",
        "popularity": 18,
        "preview_url": "https://p.scdn.co/mp3-preview/4048c2f368d1bc7027e1a2146fd9c0ae6c7b490a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5iwLtCT1mV6JcYBa4az0hi"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-17T19:22:53Z",
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
        "share_id": "NDEeHXM9THObWZUSXKzBaQ",
        "share_url": "https://open.spotify.com/track/4gv3fjcTDoHWKpmTNCJj1k?si=NDEeHXM9THObWZUSXKzBaQ",
        "uri": "spotify:track:4gv3fjcTDoHWKpmTNCJj1k"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6fLrPFLWLSCrp7gcTZXcKb"
            },
            "href": "https://api.spotify.com/v1/artists/6fLrPFLWLSCrp7gcTZXcKb",
            "id": "6fLrPFLWLSCrp7gcTZXcKb",
            "name": "Twin Shadow",
            "type": "artist",
            "uri": "spotify:artist:6fLrPFLWLSCrp7gcTZXcKb"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5eIgu8uJ3H18h8vVqJYggZ"
          },
          "href": "https://api.spotify.com/v1/albums/5eIgu8uJ3H18h8vVqJYggZ",
          "id": "5eIgu8uJ3H18h8vVqJYggZ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bbabc3f41a7949b81293aed4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bbabc3f41a7949b81293aed4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bbabc3f41a7949b81293aed4",
            "width": 64
          }],
          "name": "Caer",
          "release_date": "2018-04-27",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:5eIgu8uJ3H18h8vVqJYggZ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6fLrPFLWLSCrp7gcTZXcKb"
          },
          "href": "https://api.spotify.com/v1/artists/6fLrPFLWLSCrp7gcTZXcKb",
          "id": "6fLrPFLWLSCrp7gcTZXcKb",
          "name": "Twin Shadow",
          "type": "artist",
          "uri": "spotify:artist:6fLrPFLWLSCrp7gcTZXcKb"
        }],
        "disc_number": 1,
        "duration_ms": 226301,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB11702162"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4gv3fjcTDoHWKpmTNCJj1k"
        },
        "href": "https://api.spotify.com/v1/tracks/4gv3fjcTDoHWKpmTNCJj1k",
        "id": "4gv3fjcTDoHWKpmTNCJj1k",
        "is_local": false,
        "is_playable": true,
        "name": "Too Many Colors",
        "popularity": 43,
        "preview_url": "https://p.scdn.co/mp3-preview/68c2c01e73c29d80df94f3303b1b72e7b6c34bbb?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:4gv3fjcTDoHWKpmTNCJj1k"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-15T17:31:34Z",
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
        "share_id": "RLC2XFGYQ3iI9qJ1MOJliQ",
        "share_url": "https://open.spotify.com/track/2NVaKeIAUZwN5tXnn12EMi?si=RLC2XFGYQ3iI9qJ1MOJliQ",
        "uri": "spotify:track:2NVaKeIAUZwN5tXnn12EMi"
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
            "spotify": "https://open.spotify.com/album/7deW5FlwTnjalzBDAftgwf"
          },
          "href": "https://api.spotify.com/v1/albums/7deW5FlwTnjalzBDAftgwf",
          "id": "7deW5FlwTnjalzBDAftgwf",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c8f5cb38a83a0a104a0b9d98",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c8f5cb38a83a0a104a0b9d98",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c8f5cb38a83a0a104a0b9d98",
            "width": 64
          }],
          "name": "Fate",
          "release_date": "2008-07-22",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:7deW5FlwTnjalzBDAftgwf"
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
        "duration_ms": 239093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USNNZ0800001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2NVaKeIAUZwN5tXnn12EMi"
        },
        "href": "https://api.spotify.com/v1/tracks/2NVaKeIAUZwN5tXnn12EMi",
        "id": "2NVaKeIAUZwN5tXnn12EMi",
        "is_local": false,
        "is_playable": true,
        "name": "The Breeze",
        "popularity": 58,
        "preview_url": "https://p.scdn.co/mp3-preview/42c4964e2512a061df593214740fd5a57ff178c3?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2NVaKeIAUZwN5tXnn12EMi"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-08-17T14:03:44Z",
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
        "share_id": "76COHW9KSIOawNfEXjn4-w",
        "share_url": "https://open.spotify.com/track/7L4G39PVgMfaeHRyi1ML7y?si=76COHW9KSIOawNfEXjn4-w",
        "uri": "spotify:track:7L4G39PVgMfaeHRyi1ML7y"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7nwUJBm0HE4ZxD3f5cy5ok"
            },
            "href": "https://api.spotify.com/v1/artists/7nwUJBm0HE4ZxD3f5cy5ok",
            "id": "7nwUJBm0HE4ZxD3f5cy5ok",
            "name": "Aretha Franklin",
            "type": "artist",
            "uri": "spotify:artist:7nwUJBm0HE4ZxD3f5cy5ok"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0k5C3Z7w7uQpyGFQEzl7yB"
          },
          "href": "https://api.spotify.com/v1/albums/0k5C3Z7w7uQpyGFQEzl7yB",
          "id": "0k5C3Z7w7uQpyGFQEzl7yB",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ee5fcff519d1098aa5de990d",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ee5fcff519d1098aa5de990d",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ee5fcff519d1098aa5de990d",
            "width": 64
          }],
          "name": "Young, Gifted and Black",
          "release_date": "1972-01-24",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:0k5C3Z7w7uQpyGFQEzl7yB"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7nwUJBm0HE4ZxD3f5cy5ok"
          },
          "href": "https://api.spotify.com/v1/artists/7nwUJBm0HE4ZxD3f5cy5ok",
          "id": "7nwUJBm0HE4ZxD3f5cy5ok",
          "name": "Aretha Franklin",
          "type": "artist",
          "uri": "spotify:artist:7nwUJBm0HE4ZxD3f5cy5ok"
        }],
        "disc_number": 1,
        "duration_ms": 239960,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT20801194"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7L4G39PVgMfaeHRyi1ML7y"
        },
        "href": "https://api.spotify.com/v1/tracks/7L4G39PVgMfaeHRyi1ML7y",
        "id": "7L4G39PVgMfaeHRyi1ML7y",
        "is_local": false,
        "is_playable": true,
        "name": "Day Dreaming",
        "popularity": 59,
        "preview_url": "https://p.scdn.co/mp3-preview/3e1f74a1439ee1f45f5d2a4d28ab99f3dc1fd359?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:7L4G39PVgMfaeHRyi1ML7y"
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
  "uri": "spotify:playlist:7BmTsFSIR7YZy33GmXc658"
};

/***/ })

/******/ });