import {
  FEATURE_READ,
  FEATURE_CREATE,
  FEATURE_UPDATE,
  FEATURE_DELETE,
  FEATURE_QUERY,
  FEATURE_QUERY_ONE,
  FEATURE_QUERY_EXPAND,
  FEATURE_QUERY_STRING,
  FEATURE_SEARCH,
  FEATURE_PROJECTION,
} from './constants'

export default {
  categories: {
    type: 'categories',
    endpoint: '/categories',
    features: [
      FEATURE_READ,
      FEATURE_CREATE,
      FEATURE_UPDATE,
      FEATURE_DELETE,
      FEATURE_QUERY,
      FEATURE_QUERY_ONE,
      FEATURE_QUERY_EXPAND,
      FEATURE_QUERY_STRING,
    ],
  },
  channels: {
    type: 'channels',
    endpoint: '/channels',
    features: [
      FEATURE_READ,
      FEATURE_CREATE,
      FEATURE_UPDATE,
      FEATURE_DELETE,
      FEATURE_QUERY,
      FEATURE_QUERY_ONE,
      FEATURE_QUERY_EXPAND,
      FEATURE_QUERY_STRING,
    ],
  },
  'customer-groups': {
    type: 'customer-groups',
    endpoint: '/customer-groups',
    features: [
      FEATURE_READ,
      FEATURE_CREATE,
      FEATURE_UPDATE,
      FEATURE_DELETE,
      FEATURE_QUERY,
      FEATURE_QUERY_ONE,
      FEATURE_QUERY_EXPAND,
      FEATURE_QUERY_STRING,
    ],
  },
  'product-projections': {
    type: 'product-projections',
    endpoint: '/product-projections',
    features: [
      FEATURE_READ,
      FEATURE_QUERY,
      FEATURE_QUERY_ONE,
      FEATURE_QUERY_EXPAND,
      FEATURE_QUERY_STRING,
      FEATURE_PROJECTION,
    ],
  },
  'product-projections-search': {
    type: 'product-projections-search',
    endpoint: '/product-projections/search',
    features: [
      FEATURE_READ,
      FEATURE_SEARCH,
      FEATURE_QUERY_ONE,
      FEATURE_QUERY_EXPAND,
      FEATURE_QUERY_STRING,
      FEATURE_PROJECTION,
    ],
  },
  'product-types': {
    type: 'product-types',
    endpoint: '/product-types',
    features: [
      FEATURE_READ,
      FEATURE_CREATE,
      FEATURE_UPDATE,
      FEATURE_DELETE,
      FEATURE_QUERY,
      FEATURE_QUERY_ONE,
      FEATURE_QUERY_STRING,
    ],
  },
  products: {
    type: 'products',
    endpoint: '/products',
    features: [
      FEATURE_READ,
      FEATURE_CREATE,
      FEATURE_UPDATE,
      FEATURE_DELETE,
      FEATURE_QUERY,
      FEATURE_QUERY_ONE,
      FEATURE_QUERY_EXPAND,
      FEATURE_QUERY_STRING,
    ],
  },
  'tax-categories': {
    type: 'tax-categories',
    endpoint: '/tax-categories',
    features: [
      FEATURE_READ,
      FEATURE_CREATE,
      FEATURE_UPDATE,
      FEATURE_DELETE,
      FEATURE_QUERY,
      FEATURE_QUERY_ONE,
      FEATURE_QUERY_STRING,
    ],
  },
}
