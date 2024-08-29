

const Container = ({children,className}) => {
  return (
    <div className={`${className} w-full  flex px-2 sm:px-3 lg:px-5 md::px-16`}>
        {children}
    </div>
  )
}

export default Container