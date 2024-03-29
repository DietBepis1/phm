
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/apply', component: () => import('pages/LoanApp.vue') },
      { path: '/test', component: () => import('pages/Test.vue') },
      { path: '/completion', component: () => import('pages/CompletionPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
