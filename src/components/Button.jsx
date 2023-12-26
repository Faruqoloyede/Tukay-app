
const Button = (props, index) => {
  const label = props.label ?? "get started"
  const styles = props.styles ?? ""

  return (
    <button style={{color: props.color}} className={`py-2 px-6 font-medium font-poppins text-[18px] rounded-[10px] ${styles} btn ${index == Button.length -1 ? "mr-0" : "mr-10"} mb-3`}>{label}</button>
  )
}

export default Button
