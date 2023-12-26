
const Button = (props, index) => {
  const label = props.label ?? "get started"
  const styles = props.styles ?? ""

  return (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9mnXLd9AkP3T3lWFd_Zekh_EQ5anIVZz_abu0To52qRTxrg/viewform?usp=sf_link" target="_blank"  style={{color: props.color}} className={`py-2 px-6 font-medium font-poppins text-[18px] rounded-[10px] ${styles} btn ${index == Button.length -1 ? "mr-0" : "mr-10"} mb-3`} >{label}</a>
  )
}

export default Button
