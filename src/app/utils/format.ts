export const getLongMonth = (date: string) => {
  if (!date) return
  return new Intl.DateTimeFormat('pt-br', {
    month: 'long'
  }).format(new Date(`${date} 00:00:00`))
}

export const formatDate = (date: string) => {
  if (!date) return
  return new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short'
  }).format(new Date(`${date} 00:00:00`))
}

export const formatDateUS = (date: Date) => {
  return date.toLocaleDateString().split('/').reverse().join('-')
}