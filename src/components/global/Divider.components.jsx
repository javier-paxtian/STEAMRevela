const Divider = (props) => {
    const { color = 'primary' } = props
    return <>
        <div className={`w-full h-[10px] bg-${color}`}></div>
    </>
}

export default Divider