'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cce4c787aa0beb50c9b56b688b68192b",
".git/config": "c8517ef6267229ff2cd06b7c5585544e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b5d6d5b69e176cfa771c48be24be8342",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "31f87fc25b92678726c72647372e4cc9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d33abb467d17a14726007bcbf01578a",
".git/logs/refs/heads/main": "2d1bada3fe7dc314c097d5196277ee38",
".git/logs/refs/remotes/origin/main": "8ed8b2a4e0acb8504eb2d2e0ff1d5cc0",
".git/objects/00/6c299867988c476958d2912ffd07af9c090a18": "f8c9e10194d40348b2b35c3a0cc4396d",
".git/objects/00/85acea6a2e60ded734db5142e39e1182b18fcc": "1edca599dbbd2be92d59ff34674d49d6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/7b795fa6d5ae8500eb593fd94415be019688ed": "4d3bb8942a03a69b61da6847c3a18a18",
".git/objects/08/68723013789fcc93c081b166a25b79dc5b1eb9": "a49f2f6867536139fe2de42c07ad7de5",
".git/objects/0f/da58e92f0a5a3dfffe1c7c5b8f85e03e329ad9": "a09da95eb90b3f235471a08f067e8a92",
".git/objects/10/b56f403aac306dc4c87b7fb897b339552de2cd": "a216869b89157b8fcd57a12a7aed8bbe",
".git/objects/13/d184e7d3932346bcd842a6a21a305ac088bf1f": "1977ba0904998fab63c4d7377b039a5c",
".git/objects/16/243d2833151808ce0be63706c64568b15f35db": "627092b6a2c1706103d933f75aa94d0b",
".git/objects/19/519d5218b666887b9a2572b842db7f35462a3f": "f2a82620def2aab1685b7e5b7e5e1094",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/547aef36ed526dd0eda8f65e0c80b98f4a5b73": "c72b727eb7e8f806653c24a2b2ec4098",
".git/objects/23/a252f27086701a3368390d8d50dbc163c76eb8": "7a1c25a653a6afca05c73d470bb2c04e",
".git/objects/26/55694712cdfdd6023f375ae98db05a518b4ec9": "d65b74e8d06ef81c6034d91c184c8f76",
".git/objects/29/5be02463ea7dddd8b9cefbea393ea78a91caad": "99bb5191a0cd92571bd9c5055ee8e154",
".git/objects/29/7131b5da4ccb7f746a0852ed205dc9d4186ff6": "6cfd5c239e1a29417ed0fd22693c396a",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/2c/df2eb6d992cdac7bf778bd8882641cb59dda9c": "05c59503eeb5f6e129ce09af679d643c",
".git/objects/2d/14192d901d34290e64163470a0ed491935e91d": "cb15feac8eee6d2974a66e0067514a05",
".git/objects/2e/eccee1110196fbe977c20aef360e5859c1bed6": "440c524207a3742d64da97334ce9ccd5",
".git/objects/30/b855fd0eb22199491a77a191fde87b6ff717de": "abd4bd2edd4a37056353d5c4fc9a2f23",
".git/objects/31/d0081fb093bb20585f094e74d8fa129ab84ec3": "1fdbcd6d6f9b675e65e86d128b850d2a",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/3b/57bf3000d8d11318a07f7b75f20c0cb662f350": "23526245475e316fc93ed534b1e4b831",
".git/objects/3e/e1fd779517a29304705e9b19ed5ea67a14b953": "28e2ea576b6c24d34214efe69278eaae",
".git/objects/41/fb939b1afc4168aada0faca5063044a5bc5022": "eb913a541ceecf9e6b28254b764a07da",
".git/objects/44/6b6898c46671c1d4dae6cc073b392f970cd083": "0fa2292ed6ba987f26c8e70b8e01e979",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/ab154f33e56448ba0f83a6a28b269baa4f6d2b": "c373068dafc3ec156716bcc01840dc81",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/4f90b1793de9c1cccbd8c1fcee65ab8b34661e": "17906f34fad51dff881b3c9960717727",
".git/objects/4c/0eb2998a29eee61a21614a47fc59880cf537f5": "ebda95c4f6909e48a084008c1be2d48f",
".git/objects/4e/badb9590b608ce16ddbeea43321b5f0ba6e18d": "99f579ddafd5748561b59d0173a0f78d",
".git/objects/50/b81752278d084ba9d449fff25f4051df162b0f": "0ddbe11c79b98dec806590815f7676a8",
".git/objects/51/c994ad678464c811e409d410520f5a5e6ee92b": "05787d897e0866ef002aa6e18db8ff01",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/99453b1f07cb1101555acd76c19a8fc81c9b12": "db73408603777dfdff3dba6e4014071c",
".git/objects/5a/eca3eb941f43898f04d3a6683394cfce037a6b": "ba6e2b0a4402a919b5467838ade15cde",
".git/objects/5c/440505abc794c40cbb0ac8ae1c22dbbb14299b": "15eef69aa6483ebca964132da6f5c2a1",
".git/objects/5e/4ce8f734fb974a3866b48dc41b70eb4a07ece6": "1cc398602303e8a2734762042f6a8268",
".git/objects/5e/ff98842eef65fbeb77524e56585e9f1e0be5c6": "979a8065ff3f48abb3d3c05df25e64ca",
".git/objects/62/fc69b70ecbfe911053e9ad1014aa486a0e979a": "a26b88cb09566017eaf6995c92d34477",
".git/objects/64/21b11795cac29f24c974c2d84156e5b0bb4f75": "01124de12b1f4a418e3c1a1c605b4952",
".git/objects/65/f82749d645a8096d0b32658ddf1310dcc1904d": "683a28116ef079c9bc8a4b4d3a183415",
".git/objects/66/051678e8e8f32a3785176a153005d86a69c08a": "af3a34b19d732b47d8ac6a263ac8498c",
".git/objects/67/5dd2e0503b48631087b3d91413d9a6eae22d1b": "27bc9d28c16cb631ecbef94b23a77cb5",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6c/b3b705d018006a2bd4200ea94c9d5fb98b6f76": "3f0f65921839b32e52dee427e6222ebf",
".git/objects/6d/767d23d1e64219b5991e9ebcff94a4bf044748": "bb05fd3dd575edda3e6235bca54a586c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/73/366715018e3bbb9a4f662ec1efb5f0a2c5698d": "42738c030158b5af017176429c96d791",
".git/objects/75/a9a05c350872d6b489ec3a807e8bae6cf8ea53": "f99edde9b9f7969bc36a1b6885fcb0a8",
".git/objects/76/ce3e97123d1b0ffbdafd5242f24e80f2002150": "f0eb62d3380e9ef3ad23903c9138f1ef",
".git/objects/77/48f23245e48b1b436ea712680b3462be40726a": "91be2d48be6c5297239d9b2be0cf5ef7",
".git/objects/77/e5895bb51b722e19bd434e7bb8f1930e0c667f": "868879ff8c706c5d036b032e11c477fa",
".git/objects/79/de2369474cfe4009c3d5b89d14820f41e68549": "d6ad9addd22d5aded81b873e835bfb0e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/9f6062078f1532de1987088aaf6d770813a84e": "fc6818e2c4c7ae3e1d279cfeed61d9ec",
".git/objects/7f/d48ec5c985e9135e82a6d925a681c226c8daf6": "4ab6f54b5a674eccfe6ddbbd72c95253",
".git/objects/81/48274b2b0c135f75feb9ff6766e637d2a4e0b9": "e9b237832b7fa300dfc13f7a8f446164",
".git/objects/84/07220534df2d46ccbbfbff4c7579fd5a263979": "e29f9d809ead80c181ccee3b50fa1fd4",
".git/objects/84/5c8f59aa1ae2923864064f1afb61f341816c7c": "14eb43fb3240cc4aa0ed98cfc0887d10",
".git/objects/84/f46b2d7b42e56bf92d2c1092204d367327936d": "9c5c7aa2db161f6a79eff64c20584a0f",
".git/objects/85/45bb0157bb3206637d517fdb60353ebf17bfcf": "86c745049cdfc55b2e0c961ec51fbe0e",
".git/objects/86/2470da83659e6cb761b090b755a029b47bc9d8": "bde0e35c2407255c551d92ea8ed998f4",
".git/objects/87/dd4a2f87c39d5e6c388c5189128dc25ddfc0fa": "e40079b5b3b38a458cd6fef60b68137d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bb83efa930f9ddb3eebcaf2a4f2c93be5f1b96": "edf25c04af50b9e4b414bfc8c30902aa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e300f2417dbdb7cc6d61b4c2a38fbf5d7b3a72": "e0a27d2a94ac70fac58012c49573a705",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/58b63542aedc5ec43a42a8154932cf0c228d4b": "e14b5c79fe936357711c2d3ecf597cb1",
".git/objects/90/c3a41caa8e72434f6a6ebee07320eb27b93334": "f203716bf657fe2fe59e13ff5d123d5d",
".git/objects/98/6ce93e4b1636799e3017734542cf94ddb00db3": "ca384f9721fea4f79ef60e378af9f45b",
".git/objects/98/79afd1ef5c3b4aa5e0201929d0a544e612ff59": "6e03eb14a3152c360fa2e911bb111e45",
".git/objects/9d/babd8c61b10849d9694885b999855b6e44ed09": "b320d14b99a1e4006ad5b5969a515a62",
".git/objects/9f/24e502a6a1a8ac93201174d9ec76494339cc31": "3ee7cc3a5e924308eea7bdf2bca45bef",
".git/objects/a3/1eadeddecbc2a339486106ab2faa4c4919176c": "1c3ee69e8e92dd21539e02189ed3d68f",
".git/objects/a4/86670bb2f337474661a3283812f85ecb97829a": "19f5179e45b8bfa33b57f1d53f50808a",
".git/objects/a5/3f456584254e1adaa73830d4ac12ec37aee1d3": "ca77df3988ed2b50a1da4f712a21b575",
".git/objects/ab/5d93989bb6a3e3e630504fa9e9c12924a7b0f6": "0a96510dd91887e8b7bff0bec9935b23",
".git/objects/ad/f3e4e3d9d43f2f1fca86b411cb0381519628c8": "b2bb2ae47a4403803a831a7446aedd03",
".git/objects/af/966b8fef951c3fc92489cf2d6d428f1b50e323": "226da284c63803ebedf22003cec32cb2",
".git/objects/b4/70069d1f2d12fefb1e834331e42a215b6d0ac1": "7d7cbfaff543f398164a537debcbda23",
".git/objects/b4/f5c07ac29123389ee94c7a05fadf8dc2a38f30": "618e8f976e96df0914b0ece27daffb1d",
".git/objects/b5/a8b74c11b28e17aa37b8901463e7be1de498bb": "af99027b3b0c1728ce98e55d19fd00cc",
".git/objects/b6/be2ffba11fd8709584db21b111271ad2d91cb0": "d45243e7e7d53308123f1373750fa282",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c622aff15edc3df7ed61488c18aaded77be19a": "55e685556796d1d1c0d7ec47c96be21f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/9b98b4724f69e124fa7c9996428c65b7b444b1": "ea6440a63d71300aa43c097cf76db799",
".git/objects/be/b08f23c13525b657303c22beb2428884dbd5b2": "aca0bc6a0596f7aa20ad5973e954e163",
".git/objects/bf/a2e90e59f6a38b608748483fb844b0a22c1a78": "22370df045d1f42fc5886a9ef30ebab5",
".git/objects/c0/34cd69d2516d415b649d967ea51d96f623c138": "d027592d08b4bad6d06fbe1913b43610",
".git/objects/c3/10b74c1b0f843d703f55408f5af2de142d08bb": "17984569a72e05ea28ec61c2b592760f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/e93f2832f33eede880ddc3cff00bc79d3f380c": "5cfdd126028dc865cac979fdbcd8cd7e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/90f21a83735c9b5887fc40d90264d95a85ad7b": "03cbdf472c5269336f1528fbaf4a5137",
".git/objects/ce/4ff9971a1e3b88ed20319ff42e0c0ee6ec6187": "194ed3b93b7ad2f64bc4b9b7fe1daa53",
".git/objects/ce/eb8af78b107a33d0bb63e84bd956c3dd00c0b1": "fc58d09a24033d2a3f71b255215fd23c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/440837435b09376e99f1ae5a7fe9ccb869920d": "0551522cba5af7efa080d74078cd7310",
".git/objects/d5/a56ec23dfb69361378791598d4c8b0e5828f32": "f1b506ab3b3f91cc365e7491fba6d22c",
".git/objects/d5/e64918546d9dd87c9742239deae2397e634343": "676989f47ffa42d7e27f0fde3ce0b31c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/9cf03a3a8d448d1d2bb169f0701a75620cf3ce": "92bb18089ada127643d92f1c53301eb2",
".git/objects/dc/f42d7db224b7b0eea6e45e3a7389a8cd515de7": "5aa3b469ab3bf3735cac2c8c3d543d89",
".git/objects/de/88249ed4751c578ab846a8eb4753a403e69440": "c1a52321d0128de7ff104cd38c32a452",
".git/objects/de/a000123e78527682145552a7c0d49ba558ddec": "c921ea58035ff3b04107c6045d727f69",
".git/objects/df/3e0d24cbf02f5a7c67964d13ff1cc56c5cf13c": "7cdf8f2a185f614f09d37523fa225f7f",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/d31c37ec588a0ad1969ae75e4c62a60672e1df": "a9459109313088f1bc799a75846ea441",
".git/objects/e2/dc1849646ccd18c826a5ede8f28cb4e4c44bd0": "69217004dc9110caa0b7b2a499e01857",
".git/objects/e5/6e300e9a334bf02cf06121a8d01071d69727fb": "60f5ce2af0193e6c1a6d168b1f49e3ba",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/d77b0b103f862110524ffeb3e2ec76fcf22806": "a9bc7319633fcc3ff75ae5b89db91c47",
".git/objects/e9/e29d5ded5bc6d7710cb92852234b20a8cc6822": "4410c5b0b16a1f8e84370ff51a34f231",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/5ed762a006be6a1e4d74e4ed2447452a97c6b9": "eb91eb7dcb769d3d3c6dfb82577f6bda",
".git/objects/f1/1e43a742fb2f98d64ccb3eb9e0fc242cf3ab3e": "c969ba54a12ed0fe9d86087ab08e395b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/fd4ebfc1c181fd1cc29ec954188b4b04468259": "ac7dbb68f622176a5a6a57272dab33e2",
".git/objects/f6/b541663394dbb25d00957fe228cb45d6838c3e": "6d6b68d4f1555e3010fed75eb2dd8887",
".git/objects/f7/3d3766aff1b94a61976c59363f24e21540389a": "0177f5a81f1b856c34ad3c7bab53abb6",
".git/objects/f7/7cd5adb09a92ed34594ee7ee71c54367631743": "f688a4867ad0b2b29efa0843b3809aed",
".git/objects/fe/34f80bbb52512dc36efcd4e99616832877bdb4": "46b07cf8e553fa894f34b9de9b50ae19",
".git/objects/ff/75d1660bdf795ef194346f567aba36e53383e1": "9cc49ba818cf79faf3da34d74b5de871",
".git/objects/ff/db38394c58fa869cf46c5df4280664b803388a": "e4167a25a7e33adcc40f320e6195075e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "eee7ce99058a72d19579c92cfc1546b0",
".git/refs/remotes/origin/main": "eee7ce99058a72d19579c92cfc1546b0",
"assets/AssetManifest.bin": "96e8c4be9264c14181e4fed61102aac5",
"assets/AssetManifest.bin.json": "780f100cf4ebd58418e6ef7f784dd4d7",
"assets/AssetManifest.json": "4cc3a44310a98d42fae31d176593c74d",
"assets/assets/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/gons.jpg": "7bc35847572ddba56e58fa64759e181a",
"assets/assets/icons/github-mark-white.svg": "a0b00583d93c2f7084ad151ee0849934",
"assets/assets/icons/github-mark.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e40d6c0ed5635a5d8b46978930165006",
"assets/NOTICES": "bdec86bc0bcb1098d1dd06f5e14958a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "9bf8b1ab7b28925759539f5dab0f7942",
"canvaskit/canvaskit.wasm": "ae51eacec65638751a9f8337a12ce1e8",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4204b7a336643ac3dbd6d57125388d8f",
"canvaskit/chromium/canvaskit.wasm": "a88b8f0f6ae548cfdb1fc64066e498e0",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "4372fb8a8815b82f7df32021d3817016",
"canvaskit/skwasm.wasm": "74508f684b7e5dd9c4cbfe4612c00422",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "6f5bce4b1c50a64af37c7cf4449fe2c8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "475aa561d3ca9baef84ff663c9cf448e",
"/": "475aa561d3ca9baef84ff663c9cf448e",
"main.dart.js": "5670e758c5416ce72692c89f06c024c9",
"manifest.json": "1046394ca1d2d7fc9beb00b62118f232",
"README.md": "350de3c8c319005c7092f58215ed4d6a",
"version.json": "980547175e325fe622a3362b84d55b6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
