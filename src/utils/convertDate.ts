

export default function convertDate(date: string) {
  const mouthArray = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

  if(date.includes("T")) {
    const [dateFormated, ] = date.split("T")
    const dateArrayFormated = dateFormated.split("-")
  
    return `${Number(dateArrayFormated[2]) - 1} ${mouthArray[Number(dateArrayFormated[1]) - 1]} ${dateArrayFormated[0]}`
  }

  return date
}