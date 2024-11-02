export const getLongMonth = (date: string) => {
  return new Intl.DateTimeFormat('pt-br', {
    month: 'long'
  }).format(new Date(`${date} 00:00:00`))
}

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short'
  }).format(new Date(`${date} 00:00:00`))
}

export const formatPrice = (price: number) => new Intl.NumberFormat('pt-br', {
  currency: 'BRL',
  style: 'currency',
}).format(price)