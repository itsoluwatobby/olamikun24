
export function setCustomBackgroundImage(url: string, props: object = {}) {
  return { 
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'local',
    ...props
  }
}

export const dateCountDown = () => {
  const month = new Date().getDate()
  return {
    days: month.toString(),
    hours: month.toString(),
    mins: month.toString(),
    seconds: month.toString(),
  }
}