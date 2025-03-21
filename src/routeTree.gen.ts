/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as gettingStartedSocialLinksProfileImport } from './routes/(getting-started)/social-links-profile'
import { Route as gettingStartedRecipePageImport } from './routes/(getting-started)/recipe-page'
import { Route as gettingStartedQrCodeComponentImport } from './routes/(getting-started)/qr-code-component'
import { Route as gettingStartedBlogPreviewCardImport } from './routes/(getting-started)/blog-preview-card'
import { Route as buildingResponsiveLayoutsProductPreviewCardImport } from './routes/(building-responsive-layouts)/product-preview-card'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const gettingStartedSocialLinksProfileRoute =
  gettingStartedSocialLinksProfileImport.update({
    id: '/(getting-started)/social-links-profile',
    path: '/social-links-profile',
    getParentRoute: () => rootRoute,
  } as any)

const gettingStartedRecipePageRoute = gettingStartedRecipePageImport.update({
  id: '/(getting-started)/recipe-page',
  path: '/recipe-page',
  getParentRoute: () => rootRoute,
} as any)

const gettingStartedQrCodeComponentRoute =
  gettingStartedQrCodeComponentImport.update({
    id: '/(getting-started)/qr-code-component',
    path: '/qr-code-component',
    getParentRoute: () => rootRoute,
  } as any)

const gettingStartedBlogPreviewCardRoute =
  gettingStartedBlogPreviewCardImport.update({
    id: '/(getting-started)/blog-preview-card',
    path: '/blog-preview-card',
    getParentRoute: () => rootRoute,
  } as any)

const buildingResponsiveLayoutsProductPreviewCardRoute =
  buildingResponsiveLayoutsProductPreviewCardImport.update({
    id: '/(building-responsive-layouts)/product-preview-card',
    path: '/product-preview-card',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(building-responsive-layouts)/product-preview-card': {
      id: '/(building-responsive-layouts)/product-preview-card'
      path: '/product-preview-card'
      fullPath: '/product-preview-card'
      preLoaderRoute: typeof buildingResponsiveLayoutsProductPreviewCardImport
      parentRoute: typeof rootRoute
    }
    '/(getting-started)/blog-preview-card': {
      id: '/(getting-started)/blog-preview-card'
      path: '/blog-preview-card'
      fullPath: '/blog-preview-card'
      preLoaderRoute: typeof gettingStartedBlogPreviewCardImport
      parentRoute: typeof rootRoute
    }
    '/(getting-started)/qr-code-component': {
      id: '/(getting-started)/qr-code-component'
      path: '/qr-code-component'
      fullPath: '/qr-code-component'
      preLoaderRoute: typeof gettingStartedQrCodeComponentImport
      parentRoute: typeof rootRoute
    }
    '/(getting-started)/recipe-page': {
      id: '/(getting-started)/recipe-page'
      path: '/recipe-page'
      fullPath: '/recipe-page'
      preLoaderRoute: typeof gettingStartedRecipePageImport
      parentRoute: typeof rootRoute
    }
    '/(getting-started)/social-links-profile': {
      id: '/(getting-started)/social-links-profile'
      path: '/social-links-profile'
      fullPath: '/social-links-profile'
      preLoaderRoute: typeof gettingStartedSocialLinksProfileImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/product-preview-card': typeof buildingResponsiveLayoutsProductPreviewCardRoute
  '/blog-preview-card': typeof gettingStartedBlogPreviewCardRoute
  '/qr-code-component': typeof gettingStartedQrCodeComponentRoute
  '/recipe-page': typeof gettingStartedRecipePageRoute
  '/social-links-profile': typeof gettingStartedSocialLinksProfileRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/product-preview-card': typeof buildingResponsiveLayoutsProductPreviewCardRoute
  '/blog-preview-card': typeof gettingStartedBlogPreviewCardRoute
  '/qr-code-component': typeof gettingStartedQrCodeComponentRoute
  '/recipe-page': typeof gettingStartedRecipePageRoute
  '/social-links-profile': typeof gettingStartedSocialLinksProfileRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(building-responsive-layouts)/product-preview-card': typeof buildingResponsiveLayoutsProductPreviewCardRoute
  '/(getting-started)/blog-preview-card': typeof gettingStartedBlogPreviewCardRoute
  '/(getting-started)/qr-code-component': typeof gettingStartedQrCodeComponentRoute
  '/(getting-started)/recipe-page': typeof gettingStartedRecipePageRoute
  '/(getting-started)/social-links-profile': typeof gettingStartedSocialLinksProfileRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/product-preview-card'
    | '/blog-preview-card'
    | '/qr-code-component'
    | '/recipe-page'
    | '/social-links-profile'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/product-preview-card'
    | '/blog-preview-card'
    | '/qr-code-component'
    | '/recipe-page'
    | '/social-links-profile'
  id:
    | '__root__'
    | '/'
    | '/(building-responsive-layouts)/product-preview-card'
    | '/(getting-started)/blog-preview-card'
    | '/(getting-started)/qr-code-component'
    | '/(getting-started)/recipe-page'
    | '/(getting-started)/social-links-profile'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  buildingResponsiveLayoutsProductPreviewCardRoute: typeof buildingResponsiveLayoutsProductPreviewCardRoute
  gettingStartedBlogPreviewCardRoute: typeof gettingStartedBlogPreviewCardRoute
  gettingStartedQrCodeComponentRoute: typeof gettingStartedQrCodeComponentRoute
  gettingStartedRecipePageRoute: typeof gettingStartedRecipePageRoute
  gettingStartedSocialLinksProfileRoute: typeof gettingStartedSocialLinksProfileRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  buildingResponsiveLayoutsProductPreviewCardRoute:
    buildingResponsiveLayoutsProductPreviewCardRoute,
  gettingStartedBlogPreviewCardRoute: gettingStartedBlogPreviewCardRoute,
  gettingStartedQrCodeComponentRoute: gettingStartedQrCodeComponentRoute,
  gettingStartedRecipePageRoute: gettingStartedRecipePageRoute,
  gettingStartedSocialLinksProfileRoute: gettingStartedSocialLinksProfileRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(building-responsive-layouts)/product-preview-card",
        "/(getting-started)/blog-preview-card",
        "/(getting-started)/qr-code-component",
        "/(getting-started)/recipe-page",
        "/(getting-started)/social-links-profile"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(building-responsive-layouts)/product-preview-card": {
      "filePath": "(building-responsive-layouts)/product-preview-card.tsx"
    },
    "/(getting-started)/blog-preview-card": {
      "filePath": "(getting-started)/blog-preview-card.tsx"
    },
    "/(getting-started)/qr-code-component": {
      "filePath": "(getting-started)/qr-code-component.tsx"
    },
    "/(getting-started)/recipe-page": {
      "filePath": "(getting-started)/recipe-page.tsx"
    },
    "/(getting-started)/social-links-profile": {
      "filePath": "(getting-started)/social-links-profile.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
