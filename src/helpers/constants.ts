import { Status } from '../types/status.ts';

export const MAIN_POSTER_FILM_ID = 409424;

export const USER_PERSISTENT_STATE = 'userData';

export const PER_PAGE = 10;
export const POPULAR_FILMS_PARAMS = { lists: 'popular-films', year: 2024 };
export const POPULAR_SERIES_PARAMS = { lists: 'popular-series', year: 2024 };
export const POPULAR_DOCUMENTARY_PARAMS = {
  lists: 'oscar-documentary-feature',
};
export const CLOSEST_RELEASES_FILMS_PARAMS = { lists: 'the_closest_releases' };

export const STATUS_IDLE: Status = 'idle';
export const STATUS_LOADING: Status = 'loading';
export const STATUS_FAILED: Status = 'failed';
export const STATUS_SUCCESS: Status = 'success';

export const EMAIL_VERIFICATION_MESSAGE =
  'Вам отправлено письмо для подтверждения эл. почты';
export const NEED_REAUTHORIZATION_MESSAGE =
  'Необходимо повторно пройти авторизацию';
export const RESET_EMAIL_SEND_MESSAGE =
  'Письмо для восстановления пароля отправлено';
export const NAME_UPDATE_SUCCESS_MESSAGE = 'Имя успешно изменено';
export const AVATAR_UPDATE_SUCCESS_MESSAGE = 'Фото профиля успешно изменено';
export const EMAIL_UPDATE_SUCCESS_MESSAGE = 'Email успешно изменен';
export const PASSWORD_UPDATE_SUCCESS_MESSAGE = 'Пароль успешно изменен';
export const DELETE_ACCOUNT_SUCCESS_MESSAGE = 'Аккаунт успешно удален';

// {
//   "docs": [
//   {
//     "category": "0",
//     "name": "HD",
//     "slug": "hd",
//     "createdAt": "2024-04-29T01:00:00.052Z",
//     "updatedAt": "2024-04-29T01:00:00.052Z",
//     "id": "662ef110b35c8f51df277b4f"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Золотой раковины» кинофестиваля в Сан-Себастьяне",
//     "slug": "sansebastian-golden-shell",
//     "moviesCount": 69,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/661b841d2c106a751a666d3aba6a8912c21e89a7/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/661b841d2c106a751a666d3aba6a8912c21e89a7/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.352Z",
//     "updatedAt": "2024-04-14T00:00:00.352Z",
//     "id": "661b1c80ad43e45b73c9e8d4"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Хрустального глобуса» Международного кинофестиваля в Карловых Варах",
//     "slug": "kviff-crystal-globe",
//     "moviesCount": 56,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/50064/a7ca90d2119d070af461aab693724a1ab486e4d3/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/50064/a7ca90d2119d070af461aab693724a1ab486e4d3/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.352Z",
//     "updatedAt": "2024-04-14T00:00:00.352Z",
//     "id": "661b1c80ad43e45b73c9e8d3"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Золотого Святого Георгия» ММКФ",
//     "slug": "miff-golden-st-george",
//     "moviesCount": 80,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/7a399ef88069e7ae55c530f0abbdf98208602e7d/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/7a399ef88069e7ae55c530f0abbdf98208602e7d/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.352Z",
//     "updatedAt": "2024-04-14T00:00:00.352Z",
//     "id": "661b1c80ad43e45b73c9e8d2"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты премии Европейской киноакадемии за лучший фильм",
//     "slug": "european-film-award-best-film",
//     "moviesCount": 36,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/c69f89066b902e50f5ef2f6911608337160017d1/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/c69f89066b902e50f5ef2f6911608337160017d1/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.352Z",
//     "updatedAt": "2024-04-14T00:00:00.352Z",
//     "id": "661b1c80ad43e45b73c9e8d1"
//   },
//   {
//     "category": "Премии",
//     "name": "Венецианский кинофестиваль",
//     "slug": "labiennale-golden-lion",
//     "moviesCount": 69,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/49769/d7c7bf90f9c1ec3dfcdd4b0a295793ac2a4883c0/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/49769/d7c7bf90f9c1ec3dfcdd4b0a295793ac2a4883c0/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.352Z",
//     "updatedAt": "2024-04-14T00:00:00.352Z",
//     "id": "661b1c80ad43e45b73c9e8d0"
//   },
//   {
//     "category": "Премии",
//     "name": "Берлинский кинофестиваль",
//     "slug": "berlinale-golden-bear",
//     "moviesCount": 78,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/094179980b57b754723431ec6b1ad3ba4444f6ca/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/094179980b57b754723431ec6b1ad3ba4444f6ca/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.352Z",
//     "updatedAt": "2024-04-14T00:00:00.352Z",
//     "id": "661b1c80ad43e45b73c9e8cf"
//   },
//   {
//     "category": "Премии",
//     "name": "Каннский кинофестиваль",
//     "slug": "cannes-golden-palm",
//     "moviesCount": 77,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/d70fe29fbc2f7252d4fdbc7bb5ded46903e1dd58/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/d70fe29fbc2f7252d4fdbc7bb5ded46903e1dd58/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8ce"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты премии «Сатурн»",
//     "slug": "saturn-best-sci-fi-fantasy-horror",
//     "moviesCount": 132,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/1d6afd2070bee7007dc8041dd7f8f83582fed1d9/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/1d6afd2070bee7007dc8041dd7f8f83582fed1d9/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8cd"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты премии «Гойя» за лучший фильм",
//     "slug": "goya-best-film",
//     "moviesCount": 38,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/eecf1bca8facba29924caace21c59254c0477eaf/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/eecf1bca8facba29924caace21c59254c0477eaf/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8cc"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты премии «Сезар» за лучший фильм",
//     "slug": "cesar-best-film",
//     "moviesCount": 50,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/120922/cb63cb6431d9832bf5e42f8da7f9c44960f02ad1/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/120922/cb63cb6431d9832bf5e42f8da7f9c44960f02ad1/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8cb"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты премии BAFTA за лучший фильм",
//     "slug": "bafta-best-film",
//     "moviesCount": 79,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/9c7dac0fe51f63e1c6d2c9e8dd4b2071a95140d5/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/9c7dac0fe51f63e1c6d2c9e8dd4b2071a95140d5/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8ca"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Золотого глобуса» за лучший фильм (комедия или мюзикл)",
//     "slug": "golden-globe-best-motion-picture-musical-or-comedy",
//     "moviesCount": 77,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/ae64016ac73c3082da7f609260ab2488b114b7a4/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/ae64016ac73c3082da7f609260ab2488b114b7a4/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c9"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Золотого глобуса» за лучший драматический фильм",
//     "slug": "golden-globe-best-motion-picture-drama",
//     "moviesCount": 82,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/50064/32cca88d5a639e46271659e29f087567b0480db5/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/50064/32cca88d5a639e46271659e29f087567b0480db5/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c8"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучшую музыку",
//     "slug": "oscar-music-original-score",
//     "moviesCount": 138,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/50064/777f4ee9b74125604c0e9be58d3f3a96cb0eab85/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/50064/777f4ee9b74125604c0e9be58d3f3a96cb0eab85/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c7"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучшие визуальные эффекты",
//     "slug": "oscar-visual-effects",
//     "moviesCount": 77,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/7dd119c91b75e3208012f005d4bb3ab63002c735/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/7dd119c91b75e3208012f005d4bb3ab63002c735/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c6"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучший короткометражный мультфильм",
//     "slug": "oscar-short-film-animated",
//     "moviesCount": 92,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/07ce631845d4b9731e71a627d2012902d5884141/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/07ce631845d4b9731e71a627d2012902d5884141/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c5"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучший короткометражный фильм",
//     "slug": "oscar-short-film-live-action",
//     "moviesCount": 99,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/9c8e65d8a22584382938cb6ec279f03270fcb537/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/9c8e65d8a22584382938cb6ec279f03270fcb537/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c4"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучший документальный фильм",
//     "slug": "oscar-documentary-feature",
//     "moviesCount": 83,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/95e04660865312ea5f66ba7daa4156637b3c7320/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/95e04660865312ea5f66ba7daa4156637b3c7320/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c3"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучший анимационный фильм",
//     "slug": "oscar-animated-feature-film",
//     "moviesCount": 23,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/e20d5a7b1c63651a3956704db142570c5120b380/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/e20d5a7b1c63651a3956704db142570c5120b380/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c2"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучший фильм на иностранном языке",
//     "slug": "oscar-foreign-language-film",
//     "moviesCount": 62,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/992efe47fe8d96130e7f8e0611733c2a1993124a/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/992efe47fe8d96130e7f8e0611733c2a1993124a/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c1"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучшую операторскую работу",
//     "slug": "oscar-cinematography",
//     "moviesCount": 123,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/dd720b6ede1df7951218ac63758a4f5c7b22f16d/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/dd720b6ede1df7951218ac63758a4f5c7b22f16d/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8c0"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучший адаптированный сценарий",
//     "slug": "oscar-writing-adapted-screenplay",
//     "moviesCount": 99,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/2fc33110fae05459eeb6dd60834750fd1adeb0f1/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/2fc33110fae05459eeb6dd60834750fd1adeb0f1/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8bf"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучший оригинальный сценарий",
//     "slug": "oscar-writing-original-screenplay",
//     "moviesCount": 107,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/ac256e0881094929c26893c6904898e2d966cd86/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/ac256e0881094929c26893c6904898e2d966cd86/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8be"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучшую режиссуру",
//     "slug": "oscar-directing",
//     "moviesCount": 95,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/f18913796f7374cac8026ff286244985f97fcd57/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/f18913796f7374cac8026ff286244985f97fcd57/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8bd"
//   },
//   {
//     "category": "Премии",
//     "name": "Номинанты «Оскара» за лучший фильм",
//     "slug": "oscar-best-film-nominees",
//     "moviesCount": 601,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/2750903e0d74a09ff697abd2298851388b63d627/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/2750903e0d74a09ff697abd2298851388b63d627/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8bc"
//   },
//   {
//     "category": "Премии",
//     "name": "Лауреаты «Оскара» за лучший фильм",
//     "slug": "oscar-best-film",
//     "moviesCount": 96,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/f45509f237ad9e093aa136cbc3992ba82637431e/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/f45509f237ad9e093aa136cbc3992ba82637431e/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8bb"
//   },
//   {
//     "category": "Премии",
//     "name": "«Золотой глобус 2021»: лауреаты",
//     "slug": "golden_globe2021_winners",
//     "moviesCount": 17,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/50064/658c882f2630067422f4e0447e33b6beb883eca1/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/50064/658c882f2630067422f4e0447e33b6beb883eca1/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8ba"
//   },
//   {
//     "category": "Премии",
//     "name": "«Оскар-2021»: победители",
//     "slug": "oscar_winners_2021",
//     "moviesCount": 15,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/035fe61de4bc030ffef21fb907be2780ee6fe1c6/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/035fe61de4bc030ffef21fb907be2780ee6fe1c6/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b9"
//   },
//   {
//     "category": "Премии",
//     "name": "«Золотой глобус»-2022: Победители",
//     "slug": "golden_globes_2022_winners",
//     "moviesCount": 18,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/49769/615704ccad9e87d041a3625483f3d2ce133ac1bd/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/49769/615704ccad9e87d041a3625483f3d2ce133ac1bd/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b8"
//   },
//   {
//     "category": "Премии",
//     "name": "«Оскар»-2022: лауреаты",
//     "slug": "oscars_2022",
//     "moviesCount": 15,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/120922/55d6c9da8a11e79fe95bc10e6b003cf8b4c70556/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/120922/55d6c9da8a11e79fe95bc10e6b003cf8b4c70556/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b7"
//   },
//   {
//     "category": "Сборы",
//     "name": "СССР: Самые кассовые фильмы",
//     "slug": "box-offline-audience-ussr",
//     "moviesCount": 1000,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/8137fa87ed66da1703668d4d9cfaff0f8cf77807/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/8137fa87ed66da1703668d4d9cfaff0f8cf77807/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b6"
//   },
//   {
//     "category": "Сборы",
//     "name": "Самые дорогие фильмы",
//     "slug": "most-expensive",
//     "moviesCount": 100,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/fdfe79ba1d24b7c03a4ddded3faa9064e72917a3/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/fdfe79ba1d24b7c03a4ddded3faa9064e72917a3/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b5"
//   },
//   {
//     "category": "Сборы",
//     "name": "Самые прибыльные фильмы",
//     "slug": "most-profitable",
//     "moviesCount": 107,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/cb5ba1ed99d9c411d7bc3ddb7b5d4684bdf52fbe/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/cb5ba1ed99d9c411d7bc3ddb7b5d4684bdf52fbe/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b4"
//   },
//   {
//     "category": "Сборы",
//     "name": "США: Самые кассовые фильмы (с учётом инфляции)",
//     "slug": "box-usa-inflation",
//     "moviesCount": 313,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/2f50d6716f5cdb0b88206f0f8653eb62ab55ec43/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/2f50d6716f5cdb0b88206f0f8653eb62ab55ec43/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b3"
//   },
//   {
//     "category": "Сборы",
//     "name": "Мир+США: Самые кассовые фильмы",
//     "slug": "box-total",
//     "moviesCount": 921,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/a2a7b3a8090d62438126042df99cf6d20b8f3ff5/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/a2a7b3a8090d62438126042df99cf6d20b8f3ff5/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b2"
//   },
//   {
//     "category": "Сборы",
//     "name": "Мир: Самые кассовые фильмы",
//     "slug": "box-world-not-usa",
//     "moviesCount": 1097,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/49769/a7b2885e15faff3b6ddb48f54ed1010c174ade1b/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/49769/a7b2885e15faff3b6ddb48f54ed1010c174ade1b/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b1"
//   },
//   {
//     "category": "Сборы",
//     "name": "Россия: Самые кассовые фильмы в первый уик-энд проката",
//     "slug": "box-russia-first-weekend-dollar",
//     "moviesCount": 102,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/61205/9f71c26c87fa43d1541d2d9dc5abe00964e75cf8/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/61205/9f71c26c87fa43d1541d2d9dc5abe00964e75cf8/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8b0"
//   },
//   {
//     "category": "Сборы",
//     "name": "Россия: Самые кассовые фильмы",
//     "slug": "box-russia-dollar",
//     "moviesCount": 833,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/d8cae4900fc4377fb6c3c29a6c2f187d2e97447e/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/d8cae4900fc4377fb6c3c29a6c2f187d2e97447e/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8af"
//   },
//   {
//     "category": "Сборы",
//     "name": "США: Самые кассовые фильмы в первый день проката",
//     "slug": "box-usa-first-day",
//     "moviesCount": 100,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/49769/49e5dd4dc2f2bc9f69ae60771c5b2ae5ce995da4/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/49769/49e5dd4dc2f2bc9f69ae60771c5b2ae5ce995da4/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8ae"
//   },
//   {
//     "category": "Сборы",
//     "name": "США: Самые кассовые фильмы в первый уик-энд проката",
//     "slug": "box-usa-first-weekend",
//     "moviesCount": 100,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/49769/573a8ddcc99e417953da55ad65b7e8cc3f2cc497/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/49769/573a8ddcc99e417953da55ad65b7e8cc3f2cc497/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8ad"
//   },
//   {
//     "category": "Сборы",
//     "name": "США: Самые кассовые фильмы",
//     "slug": "box-usa-all-time",
//     "moviesCount": 823,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/49769/2be99dd924d0841d7e0484dc52e257e25caef380/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/49769/2be99dd924d0841d7e0484dc52e257e25caef380/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8ac"
//   },
//   {
//     "category": "Сериалы",
//     "name": "Сериалы про вампиров",
//     "slug": "series_about_vampires",
//     "moviesCount": 38,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10900341/5ba36c2a-bad9-49c9-918a-e88c5cef559f/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10900341/5ba36c2a-bad9-49c9-918a-e88c5cef559f/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8ab"
//   },
//   {
//     "category": "Сериалы",
//     "name": "Лучшие сериалы мини-формата",
//     "slug": "best_mini_serial",
//     "moviesCount": 100,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/3a37030327f49d12eba1218826a447fe3a9d1c7b/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/3a37030327f49d12eba1218826a447fe3a9d1c7b/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8aa"
//   },
//   {
//     "category": "Сериалы",
//     "name": "Популярные сериалы",
//     "slug": "popular-series",
//     "moviesCount": 1000,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/4486454/ae756cb1-e9d9-4f33-8a71-7c55040ba551/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4486454/ae756cb1-e9d9-4f33-8a71-7c55040ba551/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8a8"
//   },
//   {
//     "category": "Сериалы",
//     "name": "100 великих сериалов XXI века",
//     "slug": "100_greatest_TVseries",
//     "moviesCount": 100,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/42390deeca7c1c280f477a247083d9e8fcd6be2b/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/42390deeca7c1c280f477a247083d9e8fcd6be2b/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8a7"
//   },
//   {
//     "category": "Сериалы",
//     "name": "Шедевры HBO",
//     "slug": "hbo_best",
//     "moviesCount": 30,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/9784475/3c089b01-0b7e-4b33-9987-4ae3f1a8f523/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/9784475/3c089b01-0b7e-4b33-9987-4ae3f1a8f523/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8a6"
//   },
//   {
//     "category": "Сериалы",
//     "name": "250 лучших сериалов",
//     "slug": "series-top250",
//     "moviesCount": 250,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/02f27f401e650b75c4d42ed9f15e999392d33615/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/02f27f401e650b75c4d42ed9f15e999392d33615/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8a4"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Озвучено студией «Кубик в кубе»",
//     "slug": "ozvucheno_kubik_v_kube",
//     "moviesCount": 125,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/4a2969f3525706ce01799173e78f2716b0566b28/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/4a2969f3525706ce01799173e78f2716b0566b28/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8a3"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Фильмы, которые стоит посмотреть",
//     "slug": "hd-must-see",
//     "moviesCount": 75,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/50064/9a7c29bf643a8f27c2f95502bf604b1e2a3a8474/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/50064/9a7c29bf643a8f27c2f95502bf604b1e2a3a8474/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8a2"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Пересматриваем любимое",
//     "slug": "hd-revise",
//     "moviesCount": 98,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/68de79bf6f0b4b3b299688620cb87939c0962a6f/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/68de79bf6f0b4b3b299688620cb87939c0962a6f/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8a1"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Фильмы по реальным событиям",
//     "slug": "hd-real-story",
//     "moviesCount": 40,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/a6a749766d6e63b55a50f68a6059a0e8ae704b7e/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/a6a749766d6e63b55a50f68a6059a0e8ae704b7e/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e8a0"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Лучшие экранизации",
//     "slug": "hd-adaptation",
//     "moviesCount": 110,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/50064/6f34814c94c03c30e7835e361b75d2e4791245aa/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/50064/6f34814c94c03c30e7835e361b75d2e4791245aa/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e89f"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Смотрим всей семьей",
//     "slug": "hd-family",
//     "moviesCount": 230,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/19df29a58c0e605bc96be22e9b1b0d0829951244/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/19df29a58c0e605bc96be22e9b1b0d0829951244/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e89e"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Блокбастеры",
//     "slug": "hd-blockbusters",
//     "moviesCount": 103,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/70f9dd410ae03c6af031f03e6cf44e3778da0c20/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/70f9dd410ae03c6af031f03e6cf44e3778da0c20/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.351Z",
//     "updatedAt": "2024-04-14T00:00:00.351Z",
//     "id": "661b1c80ad43e45b73c9e89d"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Ближайшие премьеры",
//     "slug": "the_closest_releases",
//     "moviesCount": 17,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/447877ca5f5a02e237e72d2975f333d2f2d4ad19/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/447877ca5f5a02e237e72d2975f333d2f2d4ad19/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e89c"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Время приключений",
//     "slug": "adventure_time",
//     "moviesCount": 73,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/eb0af3584cbb246d790631c91871d545e4cf51d5/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/eb0af3584cbb246d790631c91871d545e4cf51d5/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e89b"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Семейные комедии",
//     "slug": "family_comedies",
//     "moviesCount": 100,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/900f24e0a2ac790d2fb7c499836f55c73b016014/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/900f24e0a2ac790d2fb7c499836f55c73b016014/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e89a"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Волшебные истории",
//     "slug": "magicstories",
//     "moviesCount": 25,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10809116/067899f6-a3e6-4a3b-8145-470bf96d6c66/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10809116/067899f6-a3e6-4a3b-8145-470bf96d6c66/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e899"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Сейчас самое время",
//     "slug": "nowisthetime",
//     "moviesCount": 26,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10835644/d32d980b-e502-4e8d-8e57-59272ef0b277/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10835644/d32d980b-e502-4e8d-8e57-59272ef0b277/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e898"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Лучшее за 2023 год: выбор редакции",
//     "slug": "best2023ed",
//     "moviesCount": 20,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10809116/8bfd427b-c4ce-49db-920a-7b8050774375/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10809116/8bfd427b-c4ce-49db-920a-7b8050774375/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e897"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Хиты Амедиатеки",
//     "slug": "bestofamediateka",
//     "moviesCount": 37,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10893610/5ee5f902-415b-48a6-880f-7f9f6eef8d26/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10893610/5ee5f902-415b-48a6-880f-7f9f6eef8d26/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e896"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Новый год всей семьей",
//     "slug": "ny_family",
//     "moviesCount": 83,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/9784475/2576b03d-c726-403e-a550-0d457b23849d/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/9784475/2576b03d-c726-403e-a550-0d457b23849d/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e895"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Топ-20 фильмов и сериалов 2023 года",
//     "slug": "top20of2023",
//     "moviesCount": 20,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10809116/d20c97c1-66a1-4ecb-a068-acaacdf1ef4d/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10809116/d20c97c1-66a1-4ecb-a068-acaacdf1ef4d/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e894"
//   },
//   {
//     "category": "Онлайн-кинотеатр",
//     "name": "Топ 10 в онлайн-кинотеатре",
//     "slug": "top10-hd",
//     "moviesCount": 10,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/118781/11afa095c91056ad786576769a15060266d5e72e/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/118781/11afa095c91056ad786576769a15060266d5e72e/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e893"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Золотая коллекция «Союзмультфильма»",
//     "slug": "best_of_soyuzmultfilm",
//     "moviesCount": 208,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/37a437a11fd66160b4fe3c90366448b886369156/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/37a437a11fd66160b4fe3c90366448b886369156/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e892"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы 1941–1945: список лучших фильмов о Великой Отечественной войне ",
//     "slug": "theme_ww2",
//     "moviesCount": 203,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/76695b64310edee921eb0172fba612a7fd9c3e31/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/76695b64310edee921eb0172fba612a7fd9c3e31/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e891"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Лучшие фильмы про апокалипсис: список фильмов про конец света",
//     "slug": "theme_worlds_end",
//     "moviesCount": 50,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/120922/c4ac15668087ac8841cb2d2fa6f374fc8b0a4631/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/120922/c4ac15668087ac8841cb2d2fa6f374fc8b0a4631/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e890"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Лучшие фильмы, основанные на комиксах",
//     "slug": "theme_comics",
//     "moviesCount": 100,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/f1918b49ff900cefd8533669933e158575d67974/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/f1918b49ff900cefd8533669933e158575d67974/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e88f"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Лучшие фильмы для детей: список лучших детских фильмов",
//     "slug": "theme_kids_films",
//     "moviesCount": 50,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/40b60a14fdd5774d2e98097ec3aabb3238749030/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/40b60a14fdd5774d2e98097ec3aabb3238749030/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e88e"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Романтические комедии: список лучших смешных фильмов о любви",
//     "slug": "theme_romantic_comedy",
//     "moviesCount": 52,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/309be4639dbb31e950e7ef5308ac8af8819b2ab2/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/309be4639dbb31e950e7ef5308ac8af8819b2ab2/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e88d"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Комедийные боевики",
//     "slug": "theme_action_comdey",
//     "moviesCount": 50,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/120922/b58f382d1a6c528769852217980d6c43bdff57c3/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/120922/b58f382d1a6c528769852217980d6c43bdff57c3/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e88c"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Мультфильмы для самых маленьких",
//     "slug": "theme_kids_animation",
//     "moviesCount": 30,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/db16faedc4652e67b8a2af2c48bc52a55ca1ccdf/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/db16faedc4652e67b8a2af2c48bc52a55ca1ccdf/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e88b"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Семейные комедии: список комедийных фильмов для всей семьи",
//     "slug": "theme_family_comedy",
//     "moviesCount": 50,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/120922/db46b2a35ef143a3a841226ecb2d3ab9af462f89/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/120922/db46b2a35ef143a3a841226ecb2d3ab9af462f89/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e88a"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы и сериалы про программистов",
//     "slug": "about_programmers",
//     "moviesCount": 47,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/741df6d11c9f5b6f8cf76000621a810dfe2c555f/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/741df6d11c9f5b6f8cf76000621a810dfe2c555f/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e889"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы про танцы",
//     "slug": "theme_dance",
//     "moviesCount": 31,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/30bab0ab002d2cef39819d63bfc8baafb4a4e44f/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/30bab0ab002d2cef39819d63bfc8baafb4a4e44f/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e888"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы про школу",
//     "slug": "theme_school",
//     "moviesCount": 30,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/32b20ad18128c2cd15c152e726f49e098e95aaac/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/32b20ad18128c2cd15c152e726f49e098e95aaac/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e887"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы про акул",
//     "slug": "theme_shark",
//     "moviesCount": 29,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/60661/916f746d3d18cbe65fb4d5c1074c6c10f2366945/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/60661/916f746d3d18cbe65fb4d5c1074c6c10f2366945/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e886"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы-катастрофы",
//     "slug": "theme_catastrophe",
//     "moviesCount": 30,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/128809/1a7a6777dbcfca8c15f242a59e4604a925394b2f/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/128809/1a7a6777dbcfca8c15f242a59e4604a925394b2f/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e885"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы про подростков",
//     "slug": "theme_teenagers",
//     "moviesCount": 34,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/120922/27361111a138dd918d24974528f8ae013f6c5d60/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/120922/27361111a138dd918d24974528f8ae013f6c5d60/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e884"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы про космос: список лучших фильмов про космические путешествия",
//     "slug": "theme_space",
//     "moviesCount": 49,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/135516/86538e7380564fe83793a252172ad96f53160f9b/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/135516/86538e7380564fe83793a252172ad96f53160f9b/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e883"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы про зомби: список лучших фильмов про живых мертвецов ",
//     "slug": "theme_zombie",
//     "moviesCount": 31,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/61205/3a6f89842d075789f759e27d124e6dfaf4081f10/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/61205/3a6f89842d075789f759e27d124e6dfaf4081f10/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e882"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы про любовь и страсть: список лучших романтических фильмов ",
//     "slug": "theme_love",
//     "moviesCount": 70,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/49769/bc0d7724803fa746db20da65a7d3ca059ba91c29/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/49769/bc0d7724803fa746db20da65a7d3ca059ba91c29/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e881"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы про вампиров",
//     "slug": "theme_vampire",
//     "moviesCount": 30,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/f038c5217f292a92a279afcebae05d198f35cdac/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/f038c5217f292a92a279afcebae05d198f35cdac/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e880"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы и сериалы с тифлокомментариями",
//     "slug": "audiodescription",
//     "moviesCount": 64,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10703959/023b06f4-3341-4e30-89d3-5ba19663c7cb/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10703959/023b06f4-3341-4e30-89d3-5ba19663c7cb/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e87f"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Фильмы и сериалы с субтитрами для людей с нарушениями слуха",
//     "slug": "hearing_impairment",
//     "moviesCount": 111,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10809116/69ec9cad-858c-48c7-90bb-d3208e2ac679/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10809116/69ec9cad-858c-48c7-90bb-d3208e2ac679/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e87e"
//   },
//   {
//     "category": "Фильмы",
//     "name": "100 великих фильмов XXI века: особые упоминания",
//     "slug": "honourable_mentions_XXI",
//     "moviesCount": 50,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/120922/079a3664aaeca22839fc9587df0711180af1bcbb/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/120922/079a3664aaeca22839fc9587df0711180af1bcbb/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e87d"
//   },
//   {
//     "category": "Фильмы",
//     "name": "100 великих фильмов XXI века",
//     "slug": "100_greatest_movies_XXI",
//     "moviesCount": 101,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/120922/9ef93279153c45ee182cf8c6bc819590af4c1d25/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/120922/9ef93279153c45ee182cf8c6bc819590af4c1d25/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e87c"
//   },
//   {
//     "category": "Фильмы",
//     "name": "Популярные фильмы",
//     "slug": "popular-films",
//     "moviesCount": 1000,
//     "cover": {
//       "url": "https://image.openmoviedb.com/kinopoisk-images/10671298/0814f577-3c10-4033-a740-5bbe1d7724ce/orig",
//       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10671298/0814f577-3c10-4033-a740-5bbe1d7724ce/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e87b"
//   },
//   {
//     "category": "Фильмы",
//     "name": "500 лучших фильмов",
//     "slug": "top500",
//     "moviesCount": 500,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/998550/1bc2c4466b160521788183428c5f71e0c610fb1e/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/998550/1bc2c4466b160521788183428c5f71e0c610fb1e/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e87a"
//   },
//   {
//     "category": "Фильмы",
//     "name": "250 лучших фильмов",
//     "slug": "top250",
//     "moviesCount": 250,
//     "cover": {
//       "url": "https://avatars.mds.yandex.net/get-bunker/56833/3ee361778f24483f04a6819bc6d84bcfba9030e4/orig",
//       "previewUrl": "https://avatars.mds.yandex.net/get-bunker/56833/3ee361778f24483f04a6819bc6d84bcfba9030e4/x1000"
//     },
//     "createdAt": "2024-04-14T00:00:00.350Z",
//     "updatedAt": "2024-04-14T00:00:00.350Z",
//     "id": "661b1c80ad43e45b73c9e879"
//   }
// ],
//   "total": 91,
//   "limit": 250,
//   "page": 1,
//   "pages": 1
// }
