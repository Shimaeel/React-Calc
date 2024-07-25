const Temp = () => {
    const handleChange = () => {
        debugger
    }

    const handleChanges = () => {
        debugger
    }

    const handleClick = () => {
        console.log("second");
        debugger
    }
    const handleClicks = () => {
        console.log("fisrs");
        debugger
    }

    const handleParent = () => {
        debugger
        console.log("handleParent..");
    }

    return (
        <>
            this temp
            <div onClick={handleParent} className="h-[600px] flex bg-blue-600">
                <div onClick={handleClicks} className="h-40 bg-red-300 mb-2">
                    <input onChange={handleChanges} placeholder="first input" />
                </div>
                <div onClick={handleClick} className="h-40 bg-orange-400">
                    <input type="text" onChange={handleChange} placeholder="second input" />
                </div>
            </div>
        </>
    )
}

export default Temp;