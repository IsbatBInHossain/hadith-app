export type iconType = {
  name: string
  src: string
  hoverSrc: string
}

export const sideBarIcons: iconType[] = [
  {
    name: 'Home',
    src: '/assets/sidebar/home.svg',
    hoverSrc: '/assets/sidebar/fill/home.svg',
  },
  {
    name: 'Books',
    src: '/assets/sidebar/book.svg',
    hoverSrc: '/assets/sidebar/fill/book.svg',
  },
  {
    name: 'Subjects',
    src: '/assets/sidebar/subject.svg',
    hoverSrc: '/assets/sidebar/fill/subject.svg',
  },
  {
    name: 'Bookmark',
    src: '/assets/sidebar/bookmark.svg',
    hoverSrc: '/assets/sidebar/fill/bookmark.svg',
  },
  {
    name: 'Others',
    src: '/assets/sidebar/others.svg',
    hoverSrc: '/assets/sidebar/fill/others.svg',
  },
  {
    name: 'Goto',
    src: '/assets/sidebar/goto.svg',
    hoverSrc: '/assets/sidebar/fill/goto.svg',
  },
]
