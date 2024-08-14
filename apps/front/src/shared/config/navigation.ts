export type NavItem = {
  id: number
  title: string
  path: string
}

export const navigationItems: NavItem[] = [
  {
  	id: 1,
  	title: "About",
  	path: "/about",
  },
  {
    id: 2,
    title: "Achievements",
    path: "/achievement",
  },
  {
    id: 3,
    title: "Dreams",
    path: "/dreams",
  },
  {
    id: 4,
    title: "Profile",
    path: "/profile",
  },
]
