import React from 'react'
import Logo from '../../public/images/Vector.svg'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { useForm } from 'react-hook-form'

const PWRecovery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className='h-full flex-1'>
      <div className='flex mt-8 px-12 justify-between items-center relative z-10'>
        <Logo className='relative z-10 scale-125' />
        <Link
          href={'/login'}
          className='text-red-500 text-xl font-semibold hover:underline'>
          Iniciar sesion
        </Link>
      </div>
      <div className='absolute z-0 inset-0 bg-black/50'></div>
      <div className='relative m-auto bg-neutral-400 rounded w-[500px] h-[600px] z-10 mt-8 mb-32 flex flex-col p-20'>
        <div className='text-black text-3xl mb-8'>Recuperar contraseña</div>
        <form
          className='flex flex-col gap-3 mb-4'
          onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', {
              required: 'Correo es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Por favor, escriba un correo válido'
              }
            })}
            className='bg-white text-black h-14 rounded py-2 px-4 border-b-2 valid:border-none border-b-orange-400'
            placeholder='Correo electrónico'
          />
          {errors.email && (
            <p className='text-orange-400 text-xs'>{errors.email?.message}</p>
          )}
          <button
            type='submit'
            className='bg-red-600 text-white font-semibold h-14 rounded mt-9 '
            name='Iniciar sesión'>
            Enviar
          </button>
        </form>
        <div className='mt-10'>
          <span className='text-neutral-600 text-xs'>
            Esta página utiliza Google reCAPTCHA para garantizar que no eres
            robot.
          </span>
          <Link href={'/'} className='text-blue-500 text-xs'>
            Mas información.
          </Link>
        </div>
      </div>

      <footer className='absolute bg-black/80 w-full h-[280px] z-10 px-32 pt-6'>
        <span className='text-neutral-500'>
          ¿Preguntas? Llama al 900-759-105
        </span>
        <ul className='grid grid-cols-4 text-neutral-500 text-[13px] py-6 gap-3'>
          <li>
            <a>
              <span>Preguntas recuentes</span>
            </a>
          </li>
          <li>
            <a>
              <span>Help Center</span>
            </a>
          </li>
          <li>
            <a>
              <span>Terms of Use</span>
            </a>
          </li>
          <li>
            <a>
              <span>Privacity</span>
            </a>
          </li>
          <li>
            <a>
              <span>Cookie Preferences</span>
            </a>
          </li>
          <li>
            <a>
              <span>Corporate Information</span>
            </a>
          </li>
        </ul>
        <div className='flex gap-3 items-center justify-center rounded border-[0.5pt] border-neutral-700 h-12 w-32 px-2'>
          <GlobeAltIcon className='text-neutral-500 h-5' />
          <select className='text-neutral-500 text-[13px] bg-transparent'>
            <option>Español</option>
            <option>English</option>
          </select>
        </div>
      </footer>
    </div>
  )
}

export default PWRecovery
