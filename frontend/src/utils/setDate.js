export const setDate = (local = 'ru') => {
  const date = new Date()
  const config = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }

  return date.toLocaleString(local, config)
}
