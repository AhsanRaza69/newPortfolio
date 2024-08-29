

const Container = ({children,className}) => {
  return (
    <div className={`${className} max-w-[1320px] mx-auto justify-center w-full   flex px-2 sm:px-3 lg:px-5 md:px-16 py-8 md:py-12`}>
        {children}
    </div>
  )
}

export default Container