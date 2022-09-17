import { useForm } from 'react-hook-form'
import axios from 'axios'
import qs from 'qs'

interface RobotData {
  name: string
  numOfArms: number
  location: string
}

const Form: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RobotData>()

  const handleFormSubmit = handleSubmit((data) => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    axios
      .post('/api', qs.stringify(data), { headers })
      .then((response) => {
        alert('Logged succesfuly! Check console for more info')
        console.log(response)
        reset()
      })
      .catch((error) => {
        alert('There was some error, please try again later')
        console.log(error.response.data.error)
      })
  })

  return (
    <div className='form-wrap'>
      <form onSubmit={handleFormSubmit}>
        <h2>Log robot data</h2>
        <input
          {...register('name', { required: true })}
          type='text'
          placeholder='Enter name'
          id='name'
          name='name'
        />
        {errors.name && <div className='error'>Enter robot's name</div>}
        <input
          {...register('numOfArms', {
            required: true,
          })}
          type='number'
          placeholder='Enter number of arms'
          id='numOfArms'
          name='numOfArms'
        />
        {errors.numOfArms && (
          <div className='error'>Enter robot's number of arms</div>
        )}
        <input
          {...register('location', {
            required: true,
          })}
          type='text'
          placeholder='Enter location'
          id='location'
          name='location'
        />
        {errors.location && <div className='error'>Enter robot's location</div>}

        <button className='btn' type='submit'>
          Log data
        </button>
      </form>
    </div>
  )
}

export default Form
