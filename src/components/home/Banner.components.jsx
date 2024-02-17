const Banner = () => {
    return <>
        <div className="bg-slate-500 py-[50px] px-[5%] font-montserrat">
            <div className="bg-slate-50 w-fit px-[30px] py-[50px]">
                <h1 className="text-3xl font-bold  tracking-wide">STEAMRevela</h1>
                <p className="py-[30px] max-w-[450px]">Este proyecto se dirige a alumnos y docentes quienes quieran buscar una nueva forma de aprender y enseñar.</p>
                <button type="button" class="text-white bg-primary
                hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Jugar ahora</button>
            </div>
        </div>
    </>
}

export default Banner