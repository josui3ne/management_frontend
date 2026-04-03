
function CarsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white p-2 rounded m-6">Recort car form</h1>
            {/* car(PlateNumber, type, Model,ManufacturingYear, 
DriverPhone,MechanicName)  */}
<form action="" className="flex flex-col gap-6 p-6">
    <input className="border border-gray-300 rounded p-2" type="text" placeholder="PlateNumber" />
    <input className="border border-gray-300 rounded p-2" type="text" placeholder="type" />
    <input className="border border-gray-300 rounded p-2" type="text" placeholder="Model" />
    <input className="border border-gray-300 rounded p-2" type="text" placeholder="ManufacturingYear" />
    <input className="border border-gray-300 rounded p-2" type="text" placeholder="DriverPhone" />
    <input className="border border-gray-300 rounded p-2" type="text" placeholder="MechanicName" />
    <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600" type="submit">Submit</button>
</form>
        </div>
    );
}

export default CarsPage;