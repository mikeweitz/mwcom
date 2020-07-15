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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WlLA");


/***/ }),

/***/ "WlLA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/5Xdq8BacmSu1IeMTVAoAKe"
  },
  "followers": {
    "href": null,
    "total": 1
  },
  "href": "https://api.spotify.com/v1/playlists/5Xdq8BacmSu1IeMTVAoAKe?type=track,episode",
  "id": "5Xdq8BacmSu1IeMTVAoAKe",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b273322f1f8a375b66504d62cbd3ab67616d0000b27333d63fa24cabd82d6c7c676fab67616d0000b2733ef1207895b314d646f6a3b7ab67616d0000b273439337467ca1b5fb1917c3ca",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b273322f1f8a375b66504d62cbd3ab67616d0000b27333d63fa24cabd82d6c7c676fab67616d0000b2733ef1207895b314d646f6a3b7ab67616d0000b273439337467ca1b5fb1917c3ca",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b273322f1f8a375b66504d62cbd3ab67616d0000b27333d63fa24cabd82d6c7c676fab67616d0000b2733ef1207895b314d646f6a3b7ab67616d0000b273439337467ca1b5fb1917c3ca",
    "width": 60
  }],
  "name": "2015 - Nov",
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
    "share_id": "ag0khrXQQayBeOmOY6XPWA",
    "share_url": "https://open.spotify.com/playlist/5Xdq8BacmSu1IeMTVAoAKe?si=ag0khrXQQayBeOmOY6XPWA",
    "uri": "spotify:playlist:5Xdq8BacmSu1IeMTVAoAKe"
  },
  "snapshot_id": "MTE0LDM1NTcyYjBmOTQ5ZjZkY2Q4ZGUzODNhZjk3NjkwMjMxZTE0NmMzMDI=",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/5Xdq8BacmSu1IeMTVAoAKe/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2015-11-24T20:37:15Z",
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
        "share_id": "0AGYJYi7RdKPS5tj-PyQZA",
        "share_url": "https://open.spotify.com/track/4loXMor75kKVBB03ygwDlh?si=0AGYJYi7RdKPS5tj-PyQZA",
        "uri": "spotify:track:4loXMor75kKVBB03ygwDlh"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2NFrAuh8RQdQoS7iYFbckw"
            },
            "href": "https://api.spotify.com/v1/artists/2NFrAuh8RQdQoS7iYFbckw",
            "id": "2NFrAuh8RQdQoS7iYFbckw",
            "name": "The Midnight",
            "type": "artist",
            "uri": "spotify:artist:2NFrAuh8RQdQoS7iYFbckw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/54xM746igJkdPJenRhW1za"
          },
          "href": "https://api.spotify.com/v1/albums/54xM746igJkdPJenRhW1za",
          "id": "54xM746igJkdPJenRhW1za",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27333d63fa24cabd82d6c7c676f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0233d63fa24cabd82d6c7c676f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485133d63fa24cabd82d6c7c676f",
            "width": 64
          }],
          "name": "Days of Thunder",
          "release_date": "2014-03-19",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:54xM746igJkdPJenRhW1za"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2NFrAuh8RQdQoS7iYFbckw"
          },
          "href": "https://api.spotify.com/v1/artists/2NFrAuh8RQdQoS7iYFbckw",
          "id": "2NFrAuh8RQdQoS7iYFbckw",
          "name": "The Midnight",
          "type": "artist",
          "uri": "spotify:artist:2NFrAuh8RQdQoS7iYFbckw"
        }],
        "disc_number": 1,
        "duration_ms": 389094,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACL1694052"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4loXMor75kKVBB03ygwDlh"
        },
        "href": "https://api.spotify.com/v1/tracks/4loXMor75kKVBB03ygwDlh",
        "id": "4loXMor75kKVBB03ygwDlh",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/02QvdP3zK7u2Va9FmxxuNj"
          },
          "href": "https://api.spotify.com/v1/tracks/02QvdP3zK7u2Va9FmxxuNj",
          "id": "02QvdP3zK7u2Va9FmxxuNj",
          "type": "track",
          "uri": "spotify:track:02QvdP3zK7u2Va9FmxxuNj"
        },
        "name": "Los Angeles",
        "popularity": 58,
        "preview_url": "https://p.scdn.co/mp3-preview/bce37d07eb41948eecd1eeceb2a518af1a3fab0e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:4loXMor75kKVBB03ygwDlh"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-10-26T19:17:43Z",
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
        "share_id": "IHigw5l0TG-VJ8mepjj9gg",
        "share_url": "https://open.spotify.com/track/4SYUXskP2fLUIApeGs1uHd?si=IHigw5l0TG-VJ8mepjj9gg",
        "uri": "spotify:track:4SYUXskP2fLUIApeGs1uHd"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4WrK3qZXMjfwl0dQj09QSD"
            },
            "href": "https://api.spotify.com/v1/artists/4WrK3qZXMjfwl0dQj09QSD",
            "id": "4WrK3qZXMjfwl0dQj09QSD",
            "name": "Pure Bathing Culture",
            "type": "artist",
            "uri": "spotify:artist:4WrK3qZXMjfwl0dQj09QSD"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3fZxXdIKrqer2FlQKVkA4B"
          },
          "href": "https://api.spotify.com/v1/albums/3fZxXdIKrqer2FlQKVkA4B",
          "id": "3fZxXdIKrqer2FlQKVkA4B",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273322f1f8a375b66504d62cbd3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02322f1f8a375b66504d62cbd3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851322f1f8a375b66504d62cbd3",
            "width": 64
          }],
          "name": "Pray For Rain",
          "release_date": "2015-10-23",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:3fZxXdIKrqer2FlQKVkA4B"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4WrK3qZXMjfwl0dQj09QSD"
          },
          "href": "https://api.spotify.com/v1/artists/4WrK3qZXMjfwl0dQj09QSD",
          "id": "4WrK3qZXMjfwl0dQj09QSD",
          "name": "Pure Bathing Culture",
          "type": "artist",
          "uri": "spotify:artist:4WrK3qZXMjfwl0dQj09QSD"
        }],
        "disc_number": 1,
        "duration_ms": 225093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USBQU1500424"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4SYUXskP2fLUIApeGs1uHd"
        },
        "href": "https://api.spotify.com/v1/tracks/4SYUXskP2fLUIApeGs1uHd",
        "id": "4SYUXskP2fLUIApeGs1uHd",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3eEraTOkfo8z1pMGWKaDIl"
          },
          "href": "https://api.spotify.com/v1/tracks/3eEraTOkfo8z1pMGWKaDIl",
          "id": "3eEraTOkfo8z1pMGWKaDIl",
          "type": "track",
          "uri": "spotify:track:3eEraTOkfo8z1pMGWKaDIl"
        },
        "name": "Pray For Rain",
        "popularity": 30,
        "preview_url": "https://p.scdn.co/mp3-preview/d86a183447d56c037158d0336655102bb7d98279?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4SYUXskP2fLUIApeGs1uHd"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-24T21:24:17Z",
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
        "share_id": "DiUrl8qfS8C5NGiomg3vlA",
        "share_url": "https://open.spotify.com/track/4WuDLbPWqwjyRvJK2jRCPS?si=DiUrl8qfS8C5NGiomg3vlA",
        "uri": "spotify:track:4WuDLbPWqwjyRvJK2jRCPS"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FIrstf3kHEg3zBOyLpvxD"
            },
            "href": "https://api.spotify.com/v1/artists/6FIrstf3kHEg3zBOyLpvxD",
            "id": "6FIrstf3kHEg3zBOyLpvxD",
            "name": "Ra Ra Riot",
            "type": "artist",
            "uri": "spotify:artist:6FIrstf3kHEg3zBOyLpvxD"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1YWO9CZO9auWGUJWR4FlnL"
          },
          "href": "https://api.spotify.com/v1/albums/1YWO9CZO9auWGUJWR4FlnL",
          "id": "1YWO9CZO9auWGUJWR4FlnL",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273439337467ca1b5fb1917c3ca",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02439337467ca1b5fb1917c3ca",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851439337467ca1b5fb1917c3ca",
            "width": 64
          }],
          "name": "Need Your Light",
          "release_date": "2016-02-19",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1YWO9CZO9auWGUJWR4FlnL"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6FIrstf3kHEg3zBOyLpvxD"
          },
          "href": "https://api.spotify.com/v1/artists/6FIrstf3kHEg3zBOyLpvxD",
          "id": "6FIrstf3kHEg3zBOyLpvxD",
          "name": "Ra Ra Riot",
          "type": "artist",
          "uri": "spotify:artist:6FIrstf3kHEg3zBOyLpvxD"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/04XggbrM51GcFPTxBYtRXT"
          },
          "href": "https://api.spotify.com/v1/artists/04XggbrM51GcFPTxBYtRXT",
          "id": "04XggbrM51GcFPTxBYtRXT",
          "name": "Rostam",
          "type": "artist",
          "uri": "spotify:artist:04XggbrM51GcFPTxBYtRXT"
        }],
        "disc_number": 1,
        "duration_ms": 280333,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USBS51500123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4WuDLbPWqwjyRvJK2jRCPS"
        },
        "href": "https://api.spotify.com/v1/tracks/4WuDLbPWqwjyRvJK2jRCPS",
        "id": "4WuDLbPWqwjyRvJK2jRCPS",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7vAb6xya02LhN4YQh8X42w"
          },
          "href": "https://api.spotify.com/v1/tracks/7vAb6xya02LhN4YQh8X42w",
          "id": "7vAb6xya02LhN4YQh8X42w",
          "type": "track",
          "uri": "spotify:track:7vAb6xya02LhN4YQh8X42w"
        },
        "name": "Water (feat. Rostam)",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/3b328ab5d1dfd78f268ce226dfa52e8a9075bc2e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4WuDLbPWqwjyRvJK2jRCPS"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-03T19:02:12Z",
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
        "share_id": "jHIrcwZSQQOdGC2BiEMkGQ",
        "share_url": "https://open.spotify.com/track/4OTbRgjO2Vdn35CHwr9fbf?si=jHIrcwZSQQOdGC2BiEMkGQ",
        "uri": "spotify:track:4OTbRgjO2Vdn35CHwr9fbf"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1Z2KInfSmPOzAIYyiaXeti"
            },
            "href": "https://api.spotify.com/v1/artists/1Z2KInfSmPOzAIYyiaXeti",
            "id": "1Z2KInfSmPOzAIYyiaXeti",
            "name": "Youth Lagoon",
            "type": "artist",
            "uri": "spotify:artist:1Z2KInfSmPOzAIYyiaXeti"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7jG32gfkuo10qarPgmWC7q"
          },
          "href": "https://api.spotify.com/v1/albums/7jG32gfkuo10qarPgmWC7q",
          "id": "7jG32gfkuo10qarPgmWC7q",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2733ef1207895b314d646f6a3b7",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e023ef1207895b314d646f6a3b7",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048513ef1207895b314d646f6a3b7",
            "width": 64
          }],
          "name": "The Year of Hibernation",
          "release_date": "2011",
          "release_date_precision": "year",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:7jG32gfkuo10qarPgmWC7q"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Z2KInfSmPOzAIYyiaXeti"
          },
          "href": "https://api.spotify.com/v1/artists/1Z2KInfSmPOzAIYyiaXeti",
          "id": "1Z2KInfSmPOzAIYyiaXeti",
          "name": "Youth Lagoon",
          "type": "artist",
          "uri": "spotify:artist:1Z2KInfSmPOzAIYyiaXeti"
        }],
        "disc_number": 1,
        "duration_ms": 319626,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USFP71125506"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4OTbRgjO2Vdn35CHwr9fbf"
        },
        "href": "https://api.spotify.com/v1/tracks/4OTbRgjO2Vdn35CHwr9fbf",
        "id": "4OTbRgjO2Vdn35CHwr9fbf",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1cP9oQ8xg1TVwZAWPpLOPg"
          },
          "href": "https://api.spotify.com/v1/tracks/1cP9oQ8xg1TVwZAWPpLOPg",
          "id": "1cP9oQ8xg1TVwZAWPpLOPg",
          "type": "track",
          "uri": "spotify:track:1cP9oQ8xg1TVwZAWPpLOPg"
        },
        "name": "Daydream",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/b01136a06542f0cdccd3a6c3303b6ee7954f663d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:4OTbRgjO2Vdn35CHwr9fbf"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-12T18:13:01Z",
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
        "share_id": "WUzrJvRQT0CkZaAXXJGnhw",
        "share_url": "https://open.spotify.com/track/5StRcEVQTC2uiHjeSKxW0d?si=WUzrJvRQT0CkZaAXXJGnhw",
        "uri": "spotify:track:5StRcEVQTC2uiHjeSKxW0d"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3j4FHbC5zwmYGJ7r0ZgaMt"
            },
            "href": "https://api.spotify.com/v1/artists/3j4FHbC5zwmYGJ7r0ZgaMt",
            "id": "3j4FHbC5zwmYGJ7r0ZgaMt",
            "name": "Lissie",
            "type": "artist",
            "uri": "spotify:artist:3j4FHbC5zwmYGJ7r0ZgaMt"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/446zvOtU7llJSvyCfROA6o"
          },
          "href": "https://api.spotify.com/v1/albums/446zvOtU7llJSvyCfROA6o",
          "id": "446zvOtU7llJSvyCfROA6o",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273377e8f73a2160ad4f6eb5f8b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02377e8f73a2160ad4f6eb5f8b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851377e8f73a2160ad4f6eb5f8b",
            "width": 64
          }],
          "name": "My Wild West",
          "release_date": "2016-02-12",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:446zvOtU7llJSvyCfROA6o"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3j4FHbC5zwmYGJ7r0ZgaMt"
          },
          "href": "https://api.spotify.com/v1/artists/3j4FHbC5zwmYGJ7r0ZgaMt",
          "id": "3j4FHbC5zwmYGJ7r0ZgaMt",
          "name": "Lissie",
          "type": "artist",
          "uri": "spotify:artist:3j4FHbC5zwmYGJ7r0ZgaMt"
        }],
        "disc_number": 1,
        "duration_ms": 212946,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM2HN1500004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5StRcEVQTC2uiHjeSKxW0d"
        },
        "href": "https://api.spotify.com/v1/tracks/5StRcEVQTC2uiHjeSKxW0d",
        "id": "5StRcEVQTC2uiHjeSKxW0d",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7oXK8COwNizUruAwBAiAS3"
          },
          "href": "https://api.spotify.com/v1/tracks/7oXK8COwNizUruAwBAiAS3",
          "id": "7oXK8COwNizUruAwBAiAS3",
          "type": "track",
          "uri": "spotify:track:7oXK8COwNizUruAwBAiAS3"
        },
        "name": "Hero",
        "popularity": 26,
        "preview_url": "https://p.scdn.co/mp3-preview/f2fac1d071f66ac8dd2313dc721890987f3ea588?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:5StRcEVQTC2uiHjeSKxW0d"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-30T22:28:20Z",
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
        "share_id": "s0dOOvP7RRy9R4TdP3ucLg",
        "share_url": "https://open.spotify.com/track/67Gxmj8NbR8C8EKkWgFrlr?si=s0dOOvP7RRy9R4TdP3ucLg",
        "uri": "spotify:track:67Gxmj8NbR8C8EKkWgFrlr"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4w1ZBtHF0HxrGqQdB7i1it"
            },
            "href": "https://api.spotify.com/v1/artists/4w1ZBtHF0HxrGqQdB7i1it",
            "id": "4w1ZBtHF0HxrGqQdB7i1it",
            "name": "Jamestown Revival",
            "type": "artist",
            "uri": "spotify:artist:4w1ZBtHF0HxrGqQdB7i1it"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6ampZidxH8AtXdxEFoZVv7"
          },
          "href": "https://api.spotify.com/v1/albums/6ampZidxH8AtXdxEFoZVv7",
          "id": "6ampZidxH8AtXdxEFoZVv7",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27347177531ab6432814c058cf9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0247177531ab6432814c058cf9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485147177531ab6432814c058cf9",
            "width": 64
          }],
          "name": "Utah",
          "release_date": "2014-09-23",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:6ampZidxH8AtXdxEFoZVv7"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4w1ZBtHF0HxrGqQdB7i1it"
          },
          "href": "https://api.spotify.com/v1/artists/4w1ZBtHF0HxrGqQdB7i1it",
          "id": "4w1ZBtHF0HxrGqQdB7i1it",
          "name": "Jamestown Revival",
          "type": "artist",
          "uri": "spotify:artist:4w1ZBtHF0HxrGqQdB7i1it"
        }],
        "disc_number": 1,
        "duration_ms": 191746,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71413414"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/67Gxmj8NbR8C8EKkWgFrlr"
        },
        "href": "https://api.spotify.com/v1/tracks/67Gxmj8NbR8C8EKkWgFrlr",
        "id": "67Gxmj8NbR8C8EKkWgFrlr",
        "is_local": false,
        "is_playable": true,
        "name": "Home",
        "popularity": 30,
        "preview_url": "https://p.scdn.co/mp3-preview/871cb4cf6da1d0cc43b3ff341d24b1a61ba62342?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 11,
        "type": "track",
        "uri": "spotify:track:67Gxmj8NbR8C8EKkWgFrlr"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-24T21:18:03Z",
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
        "share_id": "OZEr-3T3TWWGqcc0ofn7Fg",
        "share_url": "https://open.spotify.com/track/5n0CTysih20NYdT2S0Wpe8?si=OZEr-3T3TWWGqcc0ofn7Fg",
        "uri": "spotify:track:5n0CTysih20NYdT2S0Wpe8"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/26T3LtbuGT1Fu9m0eRq5X3"
            },
            "href": "https://api.spotify.com/v1/artists/26T3LtbuGT1Fu9m0eRq5X3",
            "id": "26T3LtbuGT1Fu9m0eRq5X3",
            "name": "Cage The Elephant",
            "type": "artist",
            "uri": "spotify:artist:26T3LtbuGT1Fu9m0eRq5X3"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0nW0w37lrQ87k7PLZvC4qJ"
          },
          "href": "https://api.spotify.com/v1/albums/0nW0w37lrQ87k7PLZvC4qJ",
          "id": "0nW0w37lrQ87k7PLZvC4qJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e7dd69ac32cf313fde62cbad",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e7dd69ac32cf313fde62cbad",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e7dd69ac32cf313fde62cbad",
            "width": 64
          }],
          "name": "Tell Me I'm Pretty",
          "release_date": "2015-12-18",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0nW0w37lrQ87k7PLZvC4qJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/26T3LtbuGT1Fu9m0eRq5X3"
          },
          "href": "https://api.spotify.com/v1/artists/26T3LtbuGT1Fu9m0eRq5X3",
          "id": "26T3LtbuGT1Fu9m0eRq5X3",
          "name": "Cage The Elephant",
          "type": "artist",
          "uri": "spotify:artist:26T3LtbuGT1Fu9m0eRq5X3"
        }],
        "disc_number": 1,
        "duration_ms": 225973,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC11502826"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5n0CTysih20NYdT2S0Wpe8"
        },
        "href": "https://api.spotify.com/v1/tracks/5n0CTysih20NYdT2S0Wpe8",
        "id": "5n0CTysih20NYdT2S0Wpe8",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3pxw9Agh9VB9kyx79REpRQ"
          },
          "href": "https://api.spotify.com/v1/tracks/3pxw9Agh9VB9kyx79REpRQ",
          "id": "3pxw9Agh9VB9kyx79REpRQ",
          "type": "track",
          "uri": "spotify:track:3pxw9Agh9VB9kyx79REpRQ"
        },
        "name": "Trouble",
        "popularity": 72,
        "preview_url": "https://p.scdn.co/mp3-preview/809d189e8d99db8200488185750355465d6b64a5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:5n0CTysih20NYdT2S0Wpe8"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-10-26T19:27:12Z",
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
        "share_id": "-sS0-UKHTeWG11fAlIH9mQ",
        "share_url": "https://open.spotify.com/track/2LgfPkbT0c1fNQxr3Ybrzo?si=-sS0-UKHTeWG11fAlIH9mQ",
        "uri": "spotify:track:2LgfPkbT0c1fNQxr3Ybrzo"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/57anmI1X2hXWPrNagFdzZr"
            },
            "href": "https://api.spotify.com/v1/artists/57anmI1X2hXWPrNagFdzZr",
            "id": "57anmI1X2hXWPrNagFdzZr",
            "name": "YACHT",
            "type": "artist",
            "uri": "spotify:artist:57anmI1X2hXWPrNagFdzZr"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/36SweIEYO9PLQwGpD0mFDJ"
          },
          "href": "https://api.spotify.com/v1/albums/36SweIEYO9PLQwGpD0mFDJ",
          "id": "36SweIEYO9PLQwGpD0mFDJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735bcf16e0aa46eb701e31760f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025bcf16e0aa46eb701e31760f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515bcf16e0aa46eb701e31760f",
            "width": 64
          }],
          "name": "I Thought The Future Would Be Cooler",
          "release_date": "2015-10-15",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:36SweIEYO9PLQwGpD0mFDJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/57anmI1X2hXWPrNagFdzZr"
          },
          "href": "https://api.spotify.com/v1/artists/57anmI1X2hXWPrNagFdzZr",
          "id": "57anmI1X2hXWPrNagFdzZr",
          "name": "YACHT",
          "type": "artist",
          "uri": "spotify:artist:57anmI1X2hXWPrNagFdzZr"
        }],
        "disc_number": 1,
        "duration_ms": 202609,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USCJ81501316"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2LgfPkbT0c1fNQxr3Ybrzo"
        },
        "href": "https://api.spotify.com/v1/tracks/2LgfPkbT0c1fNQxr3Ybrzo",
        "id": "2LgfPkbT0c1fNQxr3Ybrzo",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4rncQZCu0eqrxD7FxIQ1WI"
          },
          "href": "https://api.spotify.com/v1/tracks/4rncQZCu0eqrxD7FxIQ1WI",
          "id": "4rncQZCu0eqrxD7FxIQ1WI",
          "type": "track",
          "uri": "spotify:track:4rncQZCu0eqrxD7FxIQ1WI"
        },
        "name": "L.A. Plays Itself",
        "popularity": 23,
        "preview_url": "https://p.scdn.co/mp3-preview/a17d66fd8641bef8117de629175895f642ebb9a9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:2LgfPkbT0c1fNQxr3Ybrzo"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-10-26T19:38:05Z",
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
        "share_id": "hBBYSKD1RXylezJHZVIL2g",
        "share_url": "https://open.spotify.com/track/4J8PepYUAod4n1jJ6td6yf?si=hBBYSKD1RXylezJHZVIL2g",
        "uri": "spotify:track:4J8PepYUAod4n1jJ6td6yf"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2kvvZpHkDunKzqQKufMVI1"
            },
            "href": "https://api.spotify.com/v1/artists/2kvvZpHkDunKzqQKufMVI1",
            "id": "2kvvZpHkDunKzqQKufMVI1",
            "name": "Colette",
            "type": "artist",
            "uri": "spotify:artist:2kvvZpHkDunKzqQKufMVI1"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/409nFdJrqGQ7AH1F8o2ZKB"
          },
          "href": "https://api.spotify.com/v1/albums/409nFdJrqGQ7AH1F8o2ZKB",
          "id": "409nFdJrqGQ7AH1F8o2ZKB",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f376dce3ff57ef8b7b28bf28",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f376dce3ff57ef8b7b28bf28",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f376dce3ff57ef8b7b28bf28",
            "width": 64
          }],
          "name": "When the Music's Loud",
          "release_date": "2013-08-27",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:409nFdJrqGQ7AH1F8o2ZKB"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2kvvZpHkDunKzqQKufMVI1"
          },
          "href": "https://api.spotify.com/v1/artists/2kvvZpHkDunKzqQKufMVI1",
          "id": "2kvvZpHkDunKzqQKufMVI1",
          "name": "Colette",
          "type": "artist",
          "uri": "spotify:artist:2kvvZpHkDunKzqQKufMVI1"
        }],
        "disc_number": 1,
        "duration_ms": 253629,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USC2Q1300006"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4J8PepYUAod4n1jJ6td6yf"
        },
        "href": "https://api.spotify.com/v1/tracks/4J8PepYUAod4n1jJ6td6yf",
        "id": "4J8PepYUAod4n1jJ6td6yf",
        "is_local": false,
        "is_playable": true,
        "name": "When the Music's Loud",
        "popularity": 20,
        "preview_url": "https://p.scdn.co/mp3-preview/c4bf14f040bd31ac01cf677ce6bbfc9f3cd249d0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4J8PepYUAod4n1jJ6td6yf"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-12T18:12:47Z",
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
        "share_id": "05J6zEFdQoKJiGe7mm8XOg",
        "share_url": "https://open.spotify.com/track/6OwDUCgzQOIVcjHA5PBb15?si=05J6zEFdQoKJiGe7mm8XOg",
        "uri": "spotify:track:6OwDUCgzQOIVcjHA5PBb15"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0bdfiayQAKewqEvaU6rXCv"
            },
            "href": "https://api.spotify.com/v1/artists/0bdfiayQAKewqEvaU6rXCv",
            "id": "0bdfiayQAKewqEvaU6rXCv",
            "name": "MØ",
            "type": "artist",
            "uri": "spotify:artist:0bdfiayQAKewqEvaU6rXCv"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5AyQKsPpZ0WK6shtBDZGOw"
          },
          "href": "https://api.spotify.com/v1/albums/5AyQKsPpZ0WK6shtBDZGOw",
          "id": "5AyQKsPpZ0WK6shtBDZGOw",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273221e1caf344de63cf6cd852b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02221e1caf344de63cf6cd852b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851221e1caf344de63cf6cd852b",
            "width": 64
          }],
          "name": "Say You'll Be There",
          "release_date": "2014-02-21",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5AyQKsPpZ0WK6shtBDZGOw"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0bdfiayQAKewqEvaU6rXCv"
          },
          "href": "https://api.spotify.com/v1/artists/0bdfiayQAKewqEvaU6rXCv",
          "id": "0bdfiayQAKewqEvaU6rXCv",
          "name": "MØ",
          "type": "artist",
          "uri": "spotify:artist:0bdfiayQAKewqEvaU6rXCv"
        }],
        "disc_number": 1,
        "duration_ms": 233413,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBARL1400198"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6OwDUCgzQOIVcjHA5PBb15"
        },
        "href": "https://api.spotify.com/v1/tracks/6OwDUCgzQOIVcjHA5PBb15",
        "id": "6OwDUCgzQOIVcjHA5PBb15",
        "is_local": false,
        "is_playable": true,
        "name": "Say You'll Be There",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/a34e0f766d6673bd5e7c09f622132857a2bfb649?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6OwDUCgzQOIVcjHA5PBb15"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-24T22:48:32Z",
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
        "share_id": "3Wiumrw2S520tzL6gxLSQA",
        "share_url": "https://open.spotify.com/track/7GPbLkRMgFuU4WtTYYFmeW?si=3Wiumrw2S520tzL6gxLSQA",
        "uri": "spotify:track:7GPbLkRMgFuU4WtTYYFmeW"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1J6xqDysFw6YiQ0vMvIKds"
            },
            "href": "https://api.spotify.com/v1/artists/1J6xqDysFw6YiQ0vMvIKds",
            "id": "1J6xqDysFw6YiQ0vMvIKds",
            "name": "Small Black",
            "type": "artist",
            "uri": "spotify:artist:1J6xqDysFw6YiQ0vMvIKds"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0ir2wiPmp2bEjMPMPB391n"
          },
          "href": "https://api.spotify.com/v1/albums/0ir2wiPmp2bEjMPMPB391n",
          "id": "0ir2wiPmp2bEjMPMPB391n",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2730bc26f501f81557716a4a098",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e020bc26f501f81557716a4a098",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048510bc26f501f81557716a4a098",
            "width": 64
          }],
          "name": "Limits of Desire",
          "release_date": "2013-05-14",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0ir2wiPmp2bEjMPMPB391n"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1J6xqDysFw6YiQ0vMvIKds"
          },
          "href": "https://api.spotify.com/v1/artists/1J6xqDysFw6YiQ0vMvIKds",
          "id": "1J6xqDysFw6YiQ0vMvIKds",
          "name": "Small Black",
          "type": "artist",
          "uri": "spotify:artist:1J6xqDysFw6YiQ0vMvIKds"
        }],
        "disc_number": 1,
        "duration_ms": 272400,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US38Y1320803"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7GPbLkRMgFuU4WtTYYFmeW"
        },
        "href": "https://api.spotify.com/v1/tracks/7GPbLkRMgFuU4WtTYYFmeW",
        "id": "7GPbLkRMgFuU4WtTYYFmeW",
        "is_local": false,
        "is_playable": true,
        "name": "No Stranger",
        "popularity": 49,
        "preview_url": "https://p.scdn.co/mp3-preview/0d5f93a11cdc407d48384b1fb7a0f13bc688c573?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:7GPbLkRMgFuU4WtTYYFmeW"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-30T21:18:29Z",
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
        "share_id": "WFmhMFq6QteowcTy8VPW5w",
        "share_url": "https://open.spotify.com/track/6MDLO5bi8mGexqSwF9KmpH?si=WFmhMFq6QteowcTy8VPW5w",
        "uri": "spotify:track:6MDLO5bi8mGexqSwF9KmpH"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6O4EGCCb6DoIiR6B1QCQgp"
            },
            "href": "https://api.spotify.com/v1/artists/6O4EGCCb6DoIiR6B1QCQgp",
            "id": "6O4EGCCb6DoIiR6B1QCQgp",
            "name": "Toro y Moi",
            "type": "artist",
            "uri": "spotify:artist:6O4EGCCb6DoIiR6B1QCQgp"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5IFt4HfQU8t336zryKaAyr"
          },
          "href": "https://api.spotify.com/v1/albums/5IFt4HfQU8t336zryKaAyr",
          "id": "5IFt4HfQU8t336zryKaAyr",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e4c1aab2ab7ddde12f145030",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e4c1aab2ab7ddde12f145030",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e4c1aab2ab7ddde12f145030",
            "width": 64
          }],
          "name": "What For?",
          "release_date": "2015-04-07",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5IFt4HfQU8t336zryKaAyr"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6O4EGCCb6DoIiR6B1QCQgp"
          },
          "href": "https://api.spotify.com/v1/artists/6O4EGCCb6DoIiR6B1QCQgp",
          "id": "6O4EGCCb6DoIiR6B1QCQgp",
          "name": "Toro y Moi",
          "type": "artist",
          "uri": "spotify:artist:6O4EGCCb6DoIiR6B1QCQgp"
        }],
        "disc_number": 1,
        "duration_ms": 267788,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US22N1510206"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6MDLO5bi8mGexqSwF9KmpH"
        },
        "href": "https://api.spotify.com/v1/tracks/6MDLO5bi8mGexqSwF9KmpH",
        "id": "6MDLO5bi8mGexqSwF9KmpH",
        "is_local": false,
        "is_playable": true,
        "name": "Lilly",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/a83646c60cd600a8bdbfaad860c6979375eb44ff?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:6MDLO5bi8mGexqSwF9KmpH"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-24T22:48:32Z",
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
        "share_id": "levzwad2RQqWcwyyc6ZrmQ",
        "share_url": "https://open.spotify.com/track/1oA3HYqFa8Udcxn9FqTHta?si=levzwad2RQqWcwyyc6ZrmQ",
        "uri": "spotify:track:1oA3HYqFa8Udcxn9FqTHta"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2GE6MAdyGzeXpY9TwIYd3l"
            },
            "href": "https://api.spotify.com/v1/artists/2GE6MAdyGzeXpY9TwIYd3l",
            "id": "2GE6MAdyGzeXpY9TwIYd3l",
            "name": "Teen Daze",
            "type": "artist",
            "uri": "spotify:artist:2GE6MAdyGzeXpY9TwIYd3l"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6WmvAHJFKMv7t1n3ICYIfD"
          },
          "href": "https://api.spotify.com/v1/albums/6WmvAHJFKMv7t1n3ICYIfD",
          "id": "6WmvAHJFKMv7t1n3ICYIfD",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273dbdf99edd7ceeefa3937f699",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02dbdf99edd7ceeefa3937f699",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851dbdf99edd7ceeefa3937f699",
            "width": 64
          }],
          "name": "The House on the Mountain",
          "release_date": "2013-06-11",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:6WmvAHJFKMv7t1n3ICYIfD"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2GE6MAdyGzeXpY9TwIYd3l"
          },
          "href": "https://api.spotify.com/v1/artists/2GE6MAdyGzeXpY9TwIYd3l",
          "id": "2GE6MAdyGzeXpY9TwIYd3l",
          "name": "Teen Daze",
          "type": "artist",
          "uri": "spotify:artist:2GE6MAdyGzeXpY9TwIYd3l"
        }],
        "disc_number": 1,
        "duration_ms": 184186,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USZMA1300076"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1oA3HYqFa8Udcxn9FqTHta"
        },
        "href": "https://api.spotify.com/v1/tracks/1oA3HYqFa8Udcxn9FqTHta",
        "id": "1oA3HYqFa8Udcxn9FqTHta",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/35r9AAWibH4T8ez4cbSxup"
          },
          "href": "https://api.spotify.com/v1/tracks/35r9AAWibH4T8ez4cbSxup",
          "id": "35r9AAWibH4T8ez4cbSxup",
          "type": "track",
          "uri": "spotify:track:35r9AAWibH4T8ez4cbSxup"
        },
        "name": "Hidden",
        "popularity": 5,
        "preview_url": "https://p.scdn.co/mp3-preview/a9f3d806d8461f44cd420103d72be5f04a794e8b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1oA3HYqFa8Udcxn9FqTHta"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2015-11-24T21:22:43Z",
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
        "share_id": "f8z84nkjQ_KFoglOwJzeeA",
        "share_url": "https://open.spotify.com/track/0PbOwOT7vjiO0NiI8D31XH?si=f8z84nkjQ_KFoglOwJzeeA",
        "uri": "spotify:track:0PbOwOT7vjiO0NiI8D31XH"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/462T0buQ5ScBUQCRpodDRf"
            },
            "href": "https://api.spotify.com/v1/artists/462T0buQ5ScBUQCRpodDRf",
            "id": "462T0buQ5ScBUQCRpodDRf",
            "name": "Charles Bradley",
            "type": "artist",
            "uri": "spotify:artist:462T0buQ5ScBUQCRpodDRf"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6llfJp31mi9r7swqmSAwuK"
          },
          "href": "https://api.spotify.com/v1/albums/6llfJp31mi9r7swqmSAwuK",
          "id": "6llfJp31mi9r7swqmSAwuK",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735299f13d4459546003c9e488",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025299f13d4459546003c9e488",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515299f13d4459546003c9e488",
            "width": 64
          }],
          "name": "No Time For Dreaming",
          "release_date": "2011-01-25",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:6llfJp31mi9r7swqmSAwuK"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/462T0buQ5ScBUQCRpodDRf"
          },
          "href": "https://api.spotify.com/v1/artists/462T0buQ5ScBUQCRpodDRf",
          "id": "462T0buQ5ScBUQCRpodDRf",
          "name": "Charles Bradley",
          "type": "artist",
          "uri": "spotify:artist:462T0buQ5ScBUQCRpodDRf"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1PryMSya1JnSAlcwYawCxp"
          },
          "href": "https://api.spotify.com/v1/artists/1PryMSya1JnSAlcwYawCxp",
          "id": "1PryMSya1JnSAlcwYawCxp",
          "name": "Menahan Street Band",
          "type": "artist",
          "uri": "spotify:artist:1PryMSya1JnSAlcwYawCxp"
        }],
        "disc_number": 1,
        "duration_ms": 183440,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US4GZ1002213"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0PbOwOT7vjiO0NiI8D31XH"
        },
        "href": "https://api.spotify.com/v1/tracks/0PbOwOT7vjiO0NiI8D31XH",
        "id": "0PbOwOT7vjiO0NiI8D31XH",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2caCnrmoerMQAgzHy7FgX2"
          },
          "href": "https://api.spotify.com/v1/tracks/2caCnrmoerMQAgzHy7FgX2",
          "id": "2caCnrmoerMQAgzHy7FgX2",
          "type": "track",
          "uri": "spotify:track:2caCnrmoerMQAgzHy7FgX2"
        },
        "name": "Heart of Gold",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/ccbc3238fc3a76f6be59568695860525ba207151?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 13,
        "type": "track",
        "uri": "spotify:track:0PbOwOT7vjiO0NiI8D31XH"
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
  "uri": "spotify:playlist:5Xdq8BacmSu1IeMTVAoAKe"
};

/***/ })

/******/ });