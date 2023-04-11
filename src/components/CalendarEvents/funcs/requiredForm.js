export const handleRequiredForm = () => {
  const title = document.getElementById('title')
  const date = document.getElementById('date')

  if (title.value.length > 0) {
    title.required = false
  } else {
    title.required = true
  }

  if (date.value.length > 0) {
    date.required = false
  } else {
    date.required = true
  }
}
