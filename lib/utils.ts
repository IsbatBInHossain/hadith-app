import { ThemeType } from '@/types'

const toggleScrollbar = (theme: ThemeType) => {
  const scrollbarClasses = document.getElementsByClassName('custom-scrollbar')
  if (theme === 'dark') {
    for (let i = 0; i < scrollbarClasses.length; i++) {
      scrollbarClasses[i].classList.remove('scrollbar')
      scrollbarClasses[i].classList.add('scrollbar-dark')
    }
  } else if (theme === 'light') {
    for (let i = 0; i < scrollbarClasses.length; i++) {
      scrollbarClasses[i].classList.add('scrollbar')
      scrollbarClasses[i].classList.remove('scrollbar-dark')
    }
  }
}

export const toggleTheme = (theme: ThemeType) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (theme == 'light') {
    document.documentElement.classList.remove('dark')
  }
  toggleScrollbar(theme)
}
