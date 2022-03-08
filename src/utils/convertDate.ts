

export default function convertDate(date: string) {
  const mouthArray = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

  const [dateFormated, ] = date.split("T")
  const dateArrayFormated = dateFormated.split("-")

  return `${dateArrayFormated[2]} ${mouthArray[Number(dateArrayFormated[1]) - 1]} ${dateArrayFormated[0]}`
}