

const Container = ({children,className}) => {
  return (
    <div className={`${className} w-full  flex px-8 sm:px-16`}>
        {children}
    </div>
  )
}

export default Container