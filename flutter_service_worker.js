'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "79bc1bd019123d9f7534c6b052a569e4",
"assets/assets/fonts/time_new_roman.ttf": "fcb8965acd0e90c50138958a2a7e0421",
"assets/assets/template/registration_form%2520(copy).png": "47b915702b616834103fd2dea7b5a250",
"assets/assets/template/registration_form.png": "4979e898ca087bcd5404dde4c937c679",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "5ba86a9da22df4366bd4c9d3d499761b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "5027e060acb76ffee72cfbe2b30cf4b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"CNAME": "0a366ed1b691926f416445cb8e512909",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"index.html": "27121a633812a85f5be321caba08e7a5",
"/": "27121a633812a85f5be321caba08e7a5",
"main.dart.js": "54dd50204b2be4e9e4a21114d3ea53db",
".git/logs/HEAD": "9fa8bfdf7139b795bff5cbd6f8240ca9",
".git/logs/refs/heads/main": "e72a0adf562ca1553280fc0eb5e8ea54",
".git/logs/refs/remotes/origin/main": "c162e271a13c63a70b4ab2eb120757d7",
".git/ORIG_HEAD": "20682b2446e4a9f2d78c20d0ea00c63c",
".git/COMMIT_EDITMSG": "7f6b453f190e8f601467c0ff9570ef8a",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "7357c6bc806a95393fc6486bf6261d34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "14f0162f0771de35a147ce39973c8902",
".git/refs/remotes/origin/main": "14f0162f0771de35a147ce39973c8902",
".git/objects/51/261a005cd5b17755274fd7d2bdde4edd01bf1c": "d65fd38643778b36ee2dbe00e9528497",
".git/objects/1d/95b7709595661545efc3cdce2ee4a092bd2302": "be56234eb7f3343e78404af7b056c712",
".git/objects/4b/c0426beb556881a99ee80685d9dae204b4d922": "d71d93c768cc7b1c8d1d0841347893e0",
".git/objects/3e/eb78c341ef23e81955ee5bdd942115c513a11d": "4cc46ac55d99741467f3dfa8f5d240b7",
".git/objects/09/dcadefe1c9c3ed38601ae4d961221d90131f41": "5585d97901889c81a8270dfd117cd189",
".git/objects/2e/28b85ec1da7a29624dbc1bbfd558dc41f0e7a5": "8433399ce69b3761acb88d99e56763dc",
".git/objects/37/cfe89f8963739b7c930b12b4d109a6cb12dfed": "7e8089b286a5e2a89a03e1580c3978e1",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/6a/5f3cc24896479c4c28c35e3b4e256746fff8f6": "f8bdddca0b8274ec3902ca80f7611dd0",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/98/d1db962463848a02b60885d2724b16f338eee8": "8210963d10df3668b634d66d2ae41d8d",
".git/objects/4a/b9708250a81dbb27cce2d1fa934ae853f4afd7": "835a026a90224205a2c07180e75c2eb5",
".git/objects/40/98e3e1f927406725b8817722ecc890b465a3f0": "df3b6ca6465dcad126b26ffa3192f146",
".git/objects/b8/8be51e74905a07ee20f1285a1a4eca55367224": "063bf0eefe5f9dfdbed52914c86122fd",
".git/objects/c7/7c567876b5f476f6f6313c23165654865c15fc": "05c328e3fc7e3c909a5a778f3d6a0ca3",
".git/objects/c7/66030d04119919a141972d072fde34a676fd6e": "401753ca37b8b6cd0e22f1304d99f0e3",
".git/objects/87/dc8f57e35e544934b6a3aea128fd128e27197c": "dd605983a41d8f003b7c055beb90c041",
".git/objects/9f/03864f3357ff960ae3193244d697c669227543": "182bdf253a93977d0956ab8db4a374c3",
".git/objects/92/e5b9cf13aa2a41b7bd041df352ed3890701daf": "04de546d3c365e5e108a28a43a6e7f6e",
".git/objects/b4/01ae6d0be3861ec032a043f4939f509c3b4e35": "6830d096efdf9900967a138f392a323a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/27/1d2402444053f88ff9d99c823354b349d83665": "60d621b8acdd027c7ba8e2d6733e5c8a",
".git/objects/7a/e406f48e463b83494fc76a1af0d3b1b0aab875": "20e5ad3871e902ccc3f30a85c216436d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/0c/599aadf6d0333753a60932b73a3cbd38fab1c1": "3d99d7e30c4b8e0f96e543b37bf82d80",
".git/objects/ad/ace084c395c8d2e96f41e33e5042f5419bda31": "98fd5d0ba62120532a95fb49ba3285eb",
".git/objects/ad/263ac8c736e912c9765c1f016de22a96942b1e": "fba679b80d14f62f8815c9d649220010",
".git/objects/ba/ebcea80944f1d68ac329bb3a8587d08df25502": "0c1b858af117b47d51b12be7c14fd4c5",
".git/objects/fd/781d6bafc5f8d260b1f01691115342fd2599e4": "67bfdcd5d399f8af63982ab030ea9b51",
".git/objects/bc/40bf3eff2a4fdeb959ea809f4cd8f082bcf150": "24636f742ff2a055139aec7ef9802843",
".git/objects/2f/4859e0d2527fa0280470ccc8af11aca96747a8": "66946b9e0fc392756a6ac3a687bfe37c",
".git/objects/70/9032058e39793fe7d09a83ae07ba8944ace3a3": "ffd26a6c14510ece0d23245fecd6b56e",
".git/objects/f4/4f8b26cb423455a4b08890d910b8ae31394214": "bdf6fff2aee8253ba709574c2f26f2b4",
".git/objects/5a/6a68401c3a687002bbd74540838954d8f19d0b": "0dbf0f78bce6e34c0647521ae7846561",
".git/objects/b1/10021802af5f0adccfccdbf63dc13b74ae3424": "6a8a4f434c54a8251ab4fada7327bc5f",
".git/objects/e0/b75c574421c93b7fbcb14ae3111beb69580cdd": "8659020651f7dbec12b29667e4a644ce",
".git/objects/36/57509769e253ae43e56e9d37468ccfc492f928": "f6d3f3935510a66ed86c1312c8960d93",
".git/objects/e6/06b5805812711802e509587c77bb5ae27b34b6": "785f257baab5bb47a8195da370613cd3",
".git/objects/26/ed2d828ea59119a4b40ea8b035876aebfb789e": "645dea5fcd31945a50b740766ce823f6",
".git/objects/46/d69a082bd0ea28d7e1fcfffeb5f75c9c22e22a": "9c3cff9eda14fc439bd16362a3b619ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b0/7d5907a8f4bb05b7bf187000644534c0c290fc": "b7a31d73805efa74dc667c8ded1103ae",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/17/d52acd17a3d241c8d3e98512b951d20c8433a8": "defd397d3e7843407e78ad79edade70f",
".git/objects/17/70a8ba8fbab7398b9c86b748ef4b294d92ed37": "7478412a7beaaeadc18838c3fd474c40",
".git/objects/17/5c7a3f362dc32f1aef5aa40294cd0d5b24fca5": "68022e7aa9d42025f7dd833e5133dfc8",
".git/objects/1b/ab8f758547ed1ef0799e82ccde24caa43f7f12": "357d683de233b82a80c3cabf6055961d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/75/7f3f6ed054a7df8362d24e365b9b385a56e520": "144c29f3684a2432784ffe7c576280ea",
".git/objects/86/e465ab535f9a0f6049f43d269d2aa289ec0d63": "11f1b1f348b8f43506c2a0b02bca1abc",
".git/objects/15/b182aac726639d7433721de66a92f1f00b196e": "b02cf5641582b3649eb594bf3a050168",
".git/objects/71/7e3cfa320168fc5f48ecfa66daec53c19ed7a3": "1704d4fa69c4199be240b37893702ad6",
".git/objects/71/5fbffd54dbcad7b80c44fb6778c990d9c4135e": "e00f97ac22331f8510bff78b4fa8afd1",
".git/objects/c9/613de30b806a17d2b7283cecf4da5e2e978779": "60170b94cc13ca3209e0d28a3fa455ae",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a3/0fddf6c0429baa34d01b47ab4037ac1f3711df": "e59600929112d9b6d7a9de32d245a77f",
".git/objects/ac/46088077d13673729ab6d45646ad8ed0b38deb": "7ebcaf7cd1a18679ef8834ac9b232280",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/d8bbdb2a4fc234b59790361d8c67e9811ab167": "10e0de17b3485a88017a81b597eacfe7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/05/db7a0051784b4877a4dfce15b0f83080cc5903": "7b2d70563486825d8b40884dd4f445fd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/60/26ce8d67b20e3503f2bf8b7ca7ceb21ccff096": "a2f5fefc0149bcb2957e65d021cf69bb",
".git/objects/ec/187a6d015af98ac20e53927b351a0bf3f24b30": "2e3570ad739f799ae39f374fd9bf9404",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/56/81b5c7bcaa62742ccc706ab0d0ae966ebc2ed3": "5fd49c223126ce91c6804fba3bca4f7a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/dc/4ec4b5373f24e07adfee1a93f50ac509f5fbc1": "9fe74fc0cb3187cfcbf45b20a938c788",
".git/objects/58/9611c8e32801687653feb2679fb7ae25e9e363": "4f4dd490c808e0a474ebba3d2e27d2ca",
".git/objects/58/255f41865c07ba073221d6d66986af20d2fc98": "0e123009b5dd3250749756b57601d1f2",
".git/objects/5c/bd23e7738a73096a7840cabaeffdd111664abf": "c20dd7506ca4f4ad9714520d4d49b465",
".git/objects/5c/956123fe9c21ee827fdc2c1c769dde1f62a91a": "c3ab6faaf1d863d78d556c65f75c328f",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/67/64a72e90fb54de1ce3a1fbfe1c80b813ebf8a7": "c51546d3569df4e7643343e8987b772e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/config": "662ebf13eb912e4a8e416121368f682a",
".git/FETCH_HEAD": "f5ef3efa7730998539c47aa97a464dd9",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "8914e4d9a8173c2ceb2ff6b21d740205",
"version.json": "b094d6a3ccc6974f664be0580a35bf60"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
