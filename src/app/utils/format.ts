export const formatPrice = (value: number) => {
  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency'
  }).format(value)
}

//converte texto e formata para reias o valor digitado
export const formatStringToReais = (value: string | number): string | number => {
  const cleanValue = typeof value == 'number' ? String(value).replace(/\D/g, "") : value.replace(/\D/g, "") ;
  const formattedValue = (+cleanValue / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue;
};

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