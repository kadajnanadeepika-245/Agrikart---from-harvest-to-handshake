import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function FarmerCropForm() {
  const { register, handleSubmit } = useForm()
  const nav = useNavigate()

  const onSubmit = () => {
    nav('/farmer/crops')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold">Add Crop Listing</h2>
      <input {...register('name')} placeholder="Crop name" className="w-full border rounded-lg px-3 py-2 bg-transparent"/>
      <div className="grid grid-cols-2 gap-3">
        <input {...register('price')} type="number" placeholder="Price/kg" className="w-full border rounded-lg px-3 py-2 bg-transparent"/>
        <input {...register('qty')} type="number" placeholder="Quantity (kg)" className="w-full border rounded-lg px-3 py-2 bg-transparent"/>
      </div>
      <input {...register('date')} type="date" className="w-full border rounded-lg px-3 py-2 bg-transparent"/>
      <input type="file" multiple className="w-full border rounded-lg px-3 py-2 bg-transparent"/>
      <button className="btn-primary">Save</button>
    </form>
  )
}
