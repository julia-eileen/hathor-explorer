/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const BASE_URL = process.env.REACT_APP_BASE_URL || "https://node.explorer.hathor.network/v1a/";
export const EXPLORER_SERVICE_BASE_URL = process.env.REACT_APP_EXPLORER_SERVICE_BASE_URL || "https://explorer-service.hathor.network/";
export const REACT_APP_NETWORK = process.env.REACT_APP_NETWORK || "mainnet";

let tmp_ws_url = process.env.REACT_APP_WS_URL || "wss://node.explorer.hathor.network/v1a/ws/";
if (!(tmp_ws_url.startsWith('ws:') || tmp_ws_url.startsWith('wss:'))) {
  if (tmp_ws_url.startsWith('/')) {
    tmp_ws_url = ((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + tmp_ws_url;
  } else {
    tmp_ws_url = ((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + window.location.pathname + "/" + tmp_ws_url;
  }
}

export const WS_URL = tmp_ws_url;

export const TX_COUNT = 10;

export const DASHBOARD_BLOCKS_COUNT = 6;

export const DASHBOARD_TX_COUNT = 6;

export const MAINNET_GENESIS_BLOCK = [
  '000006cb93385b8b87a545a1cbb6197e6caff600c12cc12fc54250d39c8088fc'
];

export const MAINNET_GENESIS_TX = [
  '0002d4d2a15def7604688e1878ab681142a7b155cbe52a6b4e031250ae96db0a',
  '0002ad8d1519daaddc8e1a37b14aac0b045129c01832281fb1c02d873c7abbf9'
];

export const TESTNET_GENESIS_BLOCK = [
  '0000033139d08176d1051fb3a272c3610457f0c7f686afbe0afe3d37f966db85',
];

export const TESTNET_GENESIS_TX = [
  '00e161a6b0bee1781ea9300680913fb76fd0fac4acab527cd9626cc1514abdc9',
  '00975897028ceb037307327c953f5e7ad4d3f42402d71bd3d11ecb63ac39f01a',
];

export const DECIMAL_PLACES = 2;

export const VERSION = '0.13.0';

export const MIN_API_VERSION = '0.33.0';

// Max level of the graph generated by the full node in the transaction detail screen
export const MAX_GRAPH_LEVEL = 1

// Token maks
// First bit in the index byte indicates whether it's an authority output
export const TOKEN_AUTHORITY_MASK = 0b10000000

/**
 * Hathor token config
 */
export const HATHOR_TOKEN_CONFIG = {'name': 'Hathor', 'symbol': 'HTR', 'uid': '00'};

/**
 * Hathor token default index
 */
export const HATHOR_TOKEN_INDEX = 0;

export const GTM_ID = process.env.REACT_APP_GTM_ID;

export const NFT_MEDIA_TYPES = {
  image: 'IMAGE',
  video: 'VIDEO',
  audio: 'AUDIO',
  pdf: 'PDF',
}

export const VIDEO_MEDIA_TYPES_BY_EXTENSION = {
  mp4: 'video/mp4',
  ogg: 'video/ogg',
  webm: 'video/webm'
}

export const AUDIO_MEDIA_TYPES_BY_EXTENSION = {
  ogg: 'audio/ogg',
  mp3: 'audio/mpeg',
  wav: 'audio/wav'
}


/**
 * Unleash config
 */
export const UNLEASH_CONFIG = {
  url: 'https://unleash-proxy.b7e6a7f52ee9fefaf0c53e300cfcb014.hathor.network/proxy',
  clientKey: 'wKNhpEXKa39aTRgIjcNsO4Im618bRGTq',
  refreshInterval: 15,
  appName: 'explorer'
}

export const UNLEASH_TOKENS_BASE_FEATURE_FLAG = `explorer-tokens-${REACT_APP_NETWORK}`;
export const UNLEASH_TOKEN_BALANCES_FEATURE_FLAG = `explorer-address-list-${REACT_APP_NETWORK}`;
export const UNLEASH_TIME_SERIES_FEATURE_FLAG =  `explorer-timeseries-${REACT_APP_NETWORK}`;

export const REACT_APP_TIMESERIES_DASHBOARD_ID = process.env.REACT_APP_TIMESERIES_DASHBOARD_ID;
export const TIMESERIES_DASHBOARD_URL = `https://hathor-explorer-75a9f9.kb.eu-central-1.aws.cloud.es.io:9243/s/anonymous-user/app/dashboards?auth_provider_hint=anonymous1#/view/${REACT_APP_TIMESERIES_DASHBOARD_ID}?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1w%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true`;
export const SCREEN_STATUS_LOOP_INTERVAL_IN_SECONDS = 60 // This is the interval that ElasticSearch takes to ingest data from blocks