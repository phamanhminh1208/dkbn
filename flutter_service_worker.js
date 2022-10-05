'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f7f217d943758adbafe9406c0bafe055",
".git/config": "b3c4f8dd797db61fb7e1630ed790eaa0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "441551f13db91aa5b00096b0f4d8cea3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "4a20d1087a54470929da32dba31f312b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a801fa9b28a48bffb45aae979a05c5dc",
".git/logs/refs/heads/main": "a801fa9b28a48bffb45aae979a05c5dc",
".git/logs/refs/remotes/origin/HEAD": "c9ed2d013e630733bccbd005dd7ef8f0",
".git/logs/refs/remotes/origin/main": "e728fb6cf47828c9e2cff2b8134fb71c",
".git/objects/03/9d4384e4ec7f0b3a59ca0e34d155ec6a966ad7": "24f345a4d9e74b30cb0ad9e5f55ba8fa",
".git/objects/05/ae427063c80447796370542463f132471cb3bc": "d68738ad8422aa3ec041bb28fd3273bc",
".git/objects/05/db7a0051784b4877a4dfce15b0f83080cc5903": "7b2d70563486825d8b40884dd4f445fd",
".git/objects/0d/263beac9fab4c385745f899e1643ab3822605e": "f3a00bdabb0291070d875cd7c998bcde",
".git/objects/0d/a8bfdee69f8dce05bd00ec3b629f205a0fdcc7": "8872bb4948362a26d2b7e7231eab884b",
".git/objects/10/0685583ad998c82c5f603d5882b5ee798a1bdd": "2b556c5e09f887f913ffd8299113e156",
".git/objects/12/4b292a13777a19f42d6c5f921bcd5ee2b4ebb9": "b8b2702edec3bad83a9558a9318c2663",
".git/objects/13/f3b466fdcabcda2d8822720a732efc2211ce36": "7c9782198f25a7f742b630187553e40f",
".git/objects/14/6365eeb2af4274718abb3b397fde3411ea0e56": "20c9b02201a26249dcc7cc1fd4b52b89",
".git/objects/15/b182aac726639d7433721de66a92f1f00b196e": "b02cf5641582b3649eb594bf3a050168",
".git/objects/17/70a8ba8fbab7398b9c86b748ef4b294d92ed37": "7478412a7beaaeadc18838c3fd474c40",
".git/objects/1a/3bd356dd8b133b4c06ca617675dee6123a163f": "abfc85f438dba5f4e131b3493e0ec40f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/27/b4b48dfec2ec9b5d9c31b49ab02a698f64f173": "a72ca2d9c46737d67d8b3d041f573b94",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/b69f726871de7a1c8aae12c56917a66521aa7e": "d1f0e36a23659c6befa8b6289c9f78ea",
".git/objects/2e/e74d719148a2d04686c08cb6c101ef3cedfece": "7dba817d5d8d47471baa88ce928d78ef",
".git/objects/2f/5a49a7cd3b681f7ff7ae8744b05bbb513ff89c": "0a1ec4704865fd1ed9cc3d296149e5fd",
".git/objects/2f/5db6857497693c94834ce1194f170d8c2d7558": "e5a6013f77487a85caa00489c3f8c00e",
".git/objects/30/e1b18005d583ecaea5e7433e2245a495c17598": "974c575ac7d16c028606a9388a0da3c4",
".git/objects/32/2326de84085af4016a573d19c454e3f946b3a7": "9b6cbc9e7bb2d1959e9732483b5a6209",
".git/objects/36/2909dac68173a64e21685190752b258ed79292": "a6b26a1c648d2c420dd57946203b4df6",
".git/objects/3e/eb78c341ef23e81955ee5bdd942115c513a11d": "4cc46ac55d99741467f3dfa8f5d240b7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/98e3e1f927406725b8817722ecc890b465a3f0": "df3b6ca6465dcad126b26ffa3192f146",
".git/objects/47/38e43468359ea78a461e2404187d0a811aab05": "5043629d2b2d019d41092507c64737b9",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4a/5d2d38da64cce11e64d0034d183c82b8194577": "c6981a57ea20c9dc0803cd88af22ac50",
".git/objects/4b/c0426beb556881a99ee80685d9dae204b4d922": "d71d93c768cc7b1c8d1d0841347893e0",
".git/objects/4f/97e1d4f5959ed64ce326a4b0ffbb873256abbc": "7cbe8858afb9927f444e468012ee04de",
".git/objects/52/8af4c846d701afab8840b341dde6dc699630ae": "6cdf8fb6629c3afd9a0a76fe695f03de",
".git/objects/56/1176b5bc9054b4380413ec54b8fddc411bba48": "e6cdd2eac36e7a35384afe428228b614",
".git/objects/59/f2ee50137703fcf4bd9e7ef51f13a8f409fcd2": "1e406cb95ea5c7590866e35acb0c95b9",
".git/objects/5c/f180e565b83aa8d1eb5fd820ae7b1de59f8926": "12643b887c9a6001ecd6ac1befaa14f7",
".git/objects/5f/958d8cedec89775881e28c62b8ab3625cff7b9": "91a365a3ffc50a2b0c39e5899a79f628",
".git/objects/5f/f019010fb83fd765ce3bd34ed60f529e880f55": "edb5a7454560dc8d7bd35aea4eff4d55",
".git/objects/60/26ce8d67b20e3503f2bf8b7ca7ceb21ccff096": "a2f5fefc0149bcb2957e65d021cf69bb",
".git/objects/61/00cf036eb0f1a57ba63ae733298685e8d18b46": "552cbff0ba625c1bd7feba68a14b3576",
".git/objects/65/3836cf46d91f0482f4c8acb5ed73f6d62e16df": "6856b5b779f8f2f85b2e5496eba88c6a",
".git/objects/65/f850cc29f8d48fbc5dbff69e5aed51e16a7495": "aa69bfb36579e52c8e0c6d9618f166aa",
".git/objects/6c/49b1286d5da9ad742eb5e047051473be8221d0": "73698e0e84fd6debbd621cd273f100d4",
".git/objects/74/035b6948ba6772bf1000e9d9b99e66247ef385": "accafaf20fa35d962cead6f7ee32fdf2",
".git/objects/74/17248c60178cfd486c3b8f8c313a66c86a94b7": "20d6b6923d0b33ad668b67b12b0cd300",
".git/objects/75/7f3f6ed054a7df8362d24e365b9b385a56e520": "144c29f3684a2432784ffe7c576280ea",
".git/objects/78/bf8bb8e07e7140cf2eac2832df93608cd942ad": "bf5de0d1d0da2d491d07a534f3668ab4",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/86/4fc6aec12613f9c481a2a636e00f8d24fc5339": "4d049e353afca72e8272eb514da6956e",
".git/objects/87/dc8f57e35e544934b6a3aea128fd128e27197c": "dd605983a41d8f003b7c055beb90c041",
".git/objects/88/9613922397201f6e26d6b5fa55079d86a309ea": "8e76ce26fa179a903fc5e23cb7c5e10b",
".git/objects/8a/3b68d68e11d1116b5ef64e6ccdd561a1854aa0": "551e8f80be6a4d6f6df810233336104d",
".git/objects/8a/ebe88229547fe1cfa2ba61da1b8fce79d17d1f": "791428f8c1e435784f2a4c79ffcd303d",
".git/objects/8e/4902d0e65633cbba9d84af2e8414d2c0126307": "67b58a52c3aaef85168adf2a7a6f4e1b",
".git/objects/92/758b0840f848fa940caca38e4d732e0af22df4": "187fab8b066746b97edee3fdb5e329ae",
".git/objects/92/e22a8333140b648d1d89549be6f7e253d78d85": "726d2fe28a00efb4d8e13c7c4017bf52",
".git/objects/97/1183d8386f754787ad00458def9a83ef93bddc": "56351949b5c9c51101685b5ce38dd2f0",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/e45f9bac8114b2121e96dee00bd6521e447389": "791237ffbb2c24b3d20e9f684a5f1fa2",
".git/objects/99/b98b4de66e5f3e008a97368d73a46dd1526a33": "457399d8f35e55fbf69a6148f3c51915",
".git/objects/9a/ee838652470e886815a8ea93ee57c11f0d6fc7": "d3ec75566c89afe7a41451692ff95f03",
".git/objects/9f/ac98695d71c721724543b5672038d6eac3df32": "3c8932f63fc9769bd0c1c8e53d701139",
".git/objects/a0/a380fed059dd3635cc55a3ba8ac720df963a2b": "e279efe0f8ca85301977769792a53c69",
".git/objects/a3/0fddf6c0429baa34d01b47ab4037ac1f3711df": "e59600929112d9b6d7a9de32d245a77f",
".git/objects/aa/eeb67b9ed3740c16c5ba94ccb4d647964fb3ea": "8d47078b11fc732c22d6cf26b0bbb6e2",
".git/objects/ac/46088077d13673729ab6d45646ad8ed0b38deb": "7ebcaf7cd1a18679ef8834ac9b232280",
".git/objects/af/cab5b74a1e02064a44e5bc99616f64fc28929a": "5faa07abcb6a3233dca056e412fd2a57",
".git/objects/b0/56def6b238e3721a3683fd32ee384907ff5ce4": "4de7e9e053e987341577e1455f70ccbb",
".git/objects/b0/617e1b8d553e94b4b5fa67b4f0d6f20f16b572": "2b905ae37eea5dad5dd4f6914e34eb75",
".git/objects/b0/6be89a76e6cbb5dfea8a1f6874185866ac14c3": "2b787be50737ac6fbaac6d6fe852e4bb",
".git/objects/b3/c52d3d4e6ce491eb8840e1f1e6566f52711ea8": "1f7f6878f6e551e695c7dc553aff7142",
".git/objects/b5/120ae2a0c5fc7f8fca3207190167240fc0632a": "5cedb27612597110050608bbffc9f824",
".git/objects/b5/fcaad5bdb8ab8c9c2fb8021f494952873e454f": "2dbac442cc1d748007d45f08450d99c3",
".git/objects/b6/8ca1b36494a796ba090b70999516c8fdd91db5": "f1c5ccae0bd48651e294b9ffd649a642",
".git/objects/ba/ebcea80944f1d68ac329bb3a8587d08df25502": "0c1b858af117b47d51b12be7c14fd4c5",
".git/objects/c0/e40f31c1866c8183c15cf57ed68e101543dcf0": "74da427ece252a07636a3a9eaf27c48e",
".git/objects/c4/030af043e42b4ab26e64bc6f02b78c4eaff8ef": "0f813907375347c2163a31a3b40cebd1",
".git/objects/c4/b010148e97cefd3d90aa86408cd18963678a0c": "f270ecb94133134940b66a2e3eba5bdf",
".git/objects/c5/bb0464372376c1f0d5c9b95b193c0dcadb8c3c": "60f5e134889491281ab63dc0ae3f1572",
".git/objects/c7/7c567876b5f476f6f6313c23165654865c15fc": "05c328e3fc7e3c909a5a778f3d6a0ca3",
".git/objects/c8/b1e87600b5f70f3e54d26b0834b9ea9af7e16b": "5a338c67e92849d831d1aa0738d203b8",
".git/objects/c9/613de30b806a17d2b7283cecf4da5e2e978779": "60170b94cc13ca3209e0d28a3fa455ae",
".git/objects/ca/40bafa4f5e708fb6b0e496e1f1bce6f6303c7b": "a2254a9f463ffbb52b4757c1c9bfa078",
".git/objects/ca/b90071cc2c01a7849d980d6334aa0f43edcd4a": "2fa0de125d0e741d4955b1452adeaa8d",
".git/objects/ca/e32e855a25c465b59aa3b3573d9052abfb764a": "0ed038bc23338bc3c43af906200726cb",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/ceca58df0ebbec1888dc190b90b7a13377589f": "6f9b2209cd8da0d5cf047c710d690e85",
".git/objects/cf/ca94ac89c89102c903c2f591ef4752fa0ade05": "4f1e3e145003f61bda21140ee91ddd3d",
".git/objects/d0/1a7d9b84930d4794f3242763048d25a59c73fd": "fdd450a7799cb06c30afc2d028749c1b",
".git/objects/d0/6a47b9b0bf28ace782807d6f5f90d9a2ce97f9": "6447287dff533d5d41e939619ab2d923",
".git/objects/d0/78c71ff5dd0bcf703993b82ac6cb8007e6bca4": "449f76b1bbae16c2acd9c5dc001afda5",
".git/objects/d4/839eaece3f55502db0d122e7b5448b14a107b3": "a0e5b942ed37bb4db3a2632dc47f032a",
".git/objects/d4/b583d884b2ed46b99ed19139cf5cfd658e60b8": "47b2f06238e04d515872ffeb48615c95",
".git/objects/d8/aedd690c1a24e2fd58a0f62c6870b1addc99e1": "0eb25c854215f6826ef0313dc7bc1895",
".git/objects/da/3536fe513304042efa1f92b6556676a9320c18": "a80e4207e8144375858f6182a23a9fb6",
".git/objects/df/97126fd66e6f1ec81fad5beb5156f3e588ce51": "3aeeb709f8957c9b9ea6760f50cbde83",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/15fa86959103485c8e94ce86fdf5f4d600fa68": "4cb3dbece4a3c772d29a392a2f5ec983",
".git/objects/e6/06b5805812711802e509587c77bb5ae27b34b6": "785f257baab5bb47a8195da370613cd3",
".git/objects/eb/d2d3f5045be4d3a56d3948b996c5bc13da5340": "bea3245c9c71f26c7c8340ef99877c62",
".git/objects/ec/a4596227ea2280b0f73c10c8591cd55825792f": "0bcd7d317cf671ab68334d2f4ee2fcf3",
".git/objects/ed/c19cb1776b23144a8c0ac23b860c16c43391cf": "1484448d178ef9e8612223954e954594",
".git/objects/ef/05ca82d174eccba68a6a4362e2fe419710f91a": "1a943dc50b717ee980d2618ae01d958d",
".git/objects/ef/59a87aa69e4e705b243a943d391a1abe3482df": "8f1e4359cb8e647551db65546eb728b0",
".git/objects/f0/85e01cda46dada295de691af3919991cf4320a": "2a0a744c82a8ebd133ddaf853b091bb7",
".git/objects/f7/4393f463b1a658c4aeb3099a5adaa9303259da": "fb876a315b0206c5f0d74fd6f857d7b7",
".git/objects/fb/77504f224954d0cc11331532561d9d37d76079": "da74561ede1ab02854d2b8efc5d42f8c",
".git/objects/fc/01afc50df70312d8d3e161cc01aed6ed88abb0": "383978dbcea5a8c1b1919297dd36cf7c",
".git/objects/pack/pack-c2ceffb71981586897a0076bbb168af09b92c9c4.idx": "a5b1f84c06096883647fed40ce18ef10",
".git/objects/pack/pack-c2ceffb71981586897a0076bbb168af09b92c9c4.pack": "4121ed2974e818ad6cd8b059765e32bc",
".git/ORIG_HEAD": "a1d51670f40d536dc05724d14b0ee848",
".git/packed-refs": "52720f262041fcbddaa491077bb82689",
".git/refs/heads/main": "ab73fab60e802109711c626b605728c3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ab73fab60e802109711c626b605728c3",
"assets/AssetManifest.json": "1701e4145efd0407d050907673b65d20",
"assets/assets/fonts/time_new_roman.ttf": "fcb8965acd0e90c50138958a2a7e0421",
"assets/assets/template/registration_form%2520(copy).png": "47b915702b616834103fd2dea7b5a250",
"assets/assets/template/registration_form.png": "9a186e1d4813ad9d64d4d671ed608b9e",
"assets/assets/template/registration_form_1_2.png": "edd87fd278c6bb54a2d19590536226d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8e0853b42350dc7db7a1a5d5846ad9b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9b7334b70622f13dc6ee05a57598e942",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"CNAME": "0a366ed1b691926f416445cb8e512909",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "997f9ec7ca34dc4f31f213e9933fd765",
"/": "997f9ec7ca34dc4f31f213e9933fd765",
"main.dart.js": "527e499b175d54c930218dc68083f2f7",
"manifest.json": "8914e4d9a8173c2ceb2ff6b21d740205",
"version.json": "9f0f422b1c787bfd36f7b1f64ff435fd"
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
