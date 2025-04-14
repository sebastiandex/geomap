export default [
  {
    path: '/',
    component: () => import('@/pages/main'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/error'),
  },
]
