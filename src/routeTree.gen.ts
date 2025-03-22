/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as javaScriptFundamentalsArticlePreviewComponentImport } from './routes/(javaScript-fundamentals)/article-preview-component'
import { Route as gettingStartedSocialLinksProfileImport } from './routes/(getting-started)/social-links-profile'
import { Route as gettingStartedRecipePageImport } from './routes/(getting-started)/recipe-page'
import { Route as gettingStartedQrCodeComponentImport } from './routes/(getting-started)/qr-code-component'
import { Route as gettingStartedBlogPreviewCardImport } from './routes/(getting-started)/blog-preview-card'
import { Route as buildingResponsiveLayoutsTestimonialsGridSectionImport } from './routes/(building-responsive-layouts)/testimonials-grid-section'
import { Route as buildingResponsiveLayoutsProductPreviewCardImport } from './routes/(building-responsive-layouts)/product-preview-card'
import { Route as buildingResponsiveLayoutsFourCardFeatureSectionImport } from './routes/(building-responsive-layouts)/four-card-feature-section'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const javaScriptFundamentalsArticlePreviewComponentRoute =
  javaScriptFundamentalsArticlePreviewComponentImport.update({
    id: '/(javaScript-fundamentals)/article-preview-component',
    path: '/article-preview-component',
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

const buildingResponsiveLayoutsTestimonialsGridSectionRoute =
  buildingResponsiveLayoutsTestimonialsGridSectionImport.update({
    id: '/(building-responsive-layouts)/testimonials-grid-section',
    path: '/testimonials-grid-section',
    getParentRoute: () => rootRoute,
  } as any)

const buildingResponsiveLayoutsProductPreviewCardRoute =
  buildingResponsiveLayoutsProductPreviewCardImport.update({
    id: '/(building-responsive-layouts)/product-preview-card',
    path: '/product-preview-card',
    getParentRoute: () => rootRoute,
  } as any)

const buildingResponsiveLayoutsFourCardFeatureSectionRoute =
  buildingResponsiveLayoutsFourCardFeatureSectionImport.update({
    id: '/(building-responsive-layouts)/four-card-feature-section',
    path: '/four-card-feature-section',
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
    '/(building-responsive-layouts)/four-card-feature-section': {
      id: '/(building-responsive-layouts)/four-card-feature-section'
      path: '/four-card-feature-section'
      fullPath: '/four-card-feature-section'
      preLoaderRoute: typeof buildingResponsiveLayoutsFourCardFeatureSectionImport
      parentRoute: typeof rootRoute
    }
    '/(building-responsive-layouts)/product-preview-card': {
      id: '/(building-responsive-layouts)/product-preview-card'
      path: '/product-preview-card'
      fullPath: '/product-preview-card'
      preLoaderRoute: typeof buildingResponsiveLayoutsProductPreviewCardImport
      parentRoute: typeof rootRoute
    }
    '/(building-responsive-layouts)/testimonials-grid-section': {
      id: '/(building-responsive-layouts)/testimonials-grid-section'
      path: '/testimonials-grid-section'
      fullPath: '/testimonials-grid-section'
      preLoaderRoute: typeof buildingResponsiveLayoutsTestimonialsGridSectionImport
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
    '/(javaScript-fundamentals)/article-preview-component': {
      id: '/(javaScript-fundamentals)/article-preview-component'
      path: '/article-preview-component'
      fullPath: '/article-preview-component'
      preLoaderRoute: typeof javaScriptFundamentalsArticlePreviewComponentImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/four-card-feature-section': typeof buildingResponsiveLayoutsFourCardFeatureSectionRoute
  '/product-preview-card': typeof buildingResponsiveLayoutsProductPreviewCardRoute
  '/testimonials-grid-section': typeof buildingResponsiveLayoutsTestimonialsGridSectionRoute
  '/blog-preview-card': typeof gettingStartedBlogPreviewCardRoute
  '/qr-code-component': typeof gettingStartedQrCodeComponentRoute
  '/recipe-page': typeof gettingStartedRecipePageRoute
  '/social-links-profile': typeof gettingStartedSocialLinksProfileRoute
  '/article-preview-component': typeof javaScriptFundamentalsArticlePreviewComponentRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/four-card-feature-section': typeof buildingResponsiveLayoutsFourCardFeatureSectionRoute
  '/product-preview-card': typeof buildingResponsiveLayoutsProductPreviewCardRoute
  '/testimonials-grid-section': typeof buildingResponsiveLayoutsTestimonialsGridSectionRoute
  '/blog-preview-card': typeof gettingStartedBlogPreviewCardRoute
  '/qr-code-component': typeof gettingStartedQrCodeComponentRoute
  '/recipe-page': typeof gettingStartedRecipePageRoute
  '/social-links-profile': typeof gettingStartedSocialLinksProfileRoute
  '/article-preview-component': typeof javaScriptFundamentalsArticlePreviewComponentRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(building-responsive-layouts)/four-card-feature-section': typeof buildingResponsiveLayoutsFourCardFeatureSectionRoute
  '/(building-responsive-layouts)/product-preview-card': typeof buildingResponsiveLayoutsProductPreviewCardRoute
  '/(building-responsive-layouts)/testimonials-grid-section': typeof buildingResponsiveLayoutsTestimonialsGridSectionRoute
  '/(getting-started)/blog-preview-card': typeof gettingStartedBlogPreviewCardRoute
  '/(getting-started)/qr-code-component': typeof gettingStartedQrCodeComponentRoute
  '/(getting-started)/recipe-page': typeof gettingStartedRecipePageRoute
  '/(getting-started)/social-links-profile': typeof gettingStartedSocialLinksProfileRoute
  '/(javaScript-fundamentals)/article-preview-component': typeof javaScriptFundamentalsArticlePreviewComponentRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/four-card-feature-section'
    | '/product-preview-card'
    | '/testimonials-grid-section'
    | '/blog-preview-card'
    | '/qr-code-component'
    | '/recipe-page'
    | '/social-links-profile'
    | '/article-preview-component'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/four-card-feature-section'
    | '/product-preview-card'
    | '/testimonials-grid-section'
    | '/blog-preview-card'
    | '/qr-code-component'
    | '/recipe-page'
    | '/social-links-profile'
    | '/article-preview-component'
  id:
    | '__root__'
    | '/'
    | '/(building-responsive-layouts)/four-card-feature-section'
    | '/(building-responsive-layouts)/product-preview-card'
    | '/(building-responsive-layouts)/testimonials-grid-section'
    | '/(getting-started)/blog-preview-card'
    | '/(getting-started)/qr-code-component'
    | '/(getting-started)/recipe-page'
    | '/(getting-started)/social-links-profile'
    | '/(javaScript-fundamentals)/article-preview-component'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  buildingResponsiveLayoutsFourCardFeatureSectionRoute: typeof buildingResponsiveLayoutsFourCardFeatureSectionRoute
  buildingResponsiveLayoutsProductPreviewCardRoute: typeof buildingResponsiveLayoutsProductPreviewCardRoute
  buildingResponsiveLayoutsTestimonialsGridSectionRoute: typeof buildingResponsiveLayoutsTestimonialsGridSectionRoute
  gettingStartedBlogPreviewCardRoute: typeof gettingStartedBlogPreviewCardRoute
  gettingStartedQrCodeComponentRoute: typeof gettingStartedQrCodeComponentRoute
  gettingStartedRecipePageRoute: typeof gettingStartedRecipePageRoute
  gettingStartedSocialLinksProfileRoute: typeof gettingStartedSocialLinksProfileRoute
  javaScriptFundamentalsArticlePreviewComponentRoute: typeof javaScriptFundamentalsArticlePreviewComponentRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  buildingResponsiveLayoutsFourCardFeatureSectionRoute:
    buildingResponsiveLayoutsFourCardFeatureSectionRoute,
  buildingResponsiveLayoutsProductPreviewCardRoute:
    buildingResponsiveLayoutsProductPreviewCardRoute,
  buildingResponsiveLayoutsTestimonialsGridSectionRoute:
    buildingResponsiveLayoutsTestimonialsGridSectionRoute,
  gettingStartedBlogPreviewCardRoute: gettingStartedBlogPreviewCardRoute,
  gettingStartedQrCodeComponentRoute: gettingStartedQrCodeComponentRoute,
  gettingStartedRecipePageRoute: gettingStartedRecipePageRoute,
  gettingStartedSocialLinksProfileRoute: gettingStartedSocialLinksProfileRoute,
  javaScriptFundamentalsArticlePreviewComponentRoute:
    javaScriptFundamentalsArticlePreviewComponentRoute,
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
        "/(building-responsive-layouts)/four-card-feature-section",
        "/(building-responsive-layouts)/product-preview-card",
        "/(building-responsive-layouts)/testimonials-grid-section",
        "/(getting-started)/blog-preview-card",
        "/(getting-started)/qr-code-component",
        "/(getting-started)/recipe-page",
        "/(getting-started)/social-links-profile",
        "/(javaScript-fundamentals)/article-preview-component"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(building-responsive-layouts)/four-card-feature-section": {
      "filePath": "(building-responsive-layouts)/four-card-feature-section.tsx"
    },
    "/(building-responsive-layouts)/product-preview-card": {
      "filePath": "(building-responsive-layouts)/product-preview-card.tsx"
    },
    "/(building-responsive-layouts)/testimonials-grid-section": {
      "filePath": "(building-responsive-layouts)/testimonials-grid-section.tsx"
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
    },
    "/(javaScript-fundamentals)/article-preview-component": {
      "filePath": "(javaScript-fundamentals)/article-preview-component.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
