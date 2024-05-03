import { ThemeType } from '@/types'

export const toggleTheme = (theme: ThemeType) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (theme == 'light') {
    document.documentElement.classList.remove('dark')
  }
}

export const toggleScrollbar = (theme: ThemeType) => {
  if (theme === 'dark') {
    document.getElementById('books-scrollbar')?.classList.add('scrollbar-dark')
    document.getElementById('books-scrollbar')?.classList.remove('scrollbar')
  } else if (theme === 'light') {
    document
      .getElementById('books-scrollbar')
      ?.classList.remove('scrollbar-dark')
    document.getElementById('books-scrollbar')?.classList.add('scrollbar')
  }
}
