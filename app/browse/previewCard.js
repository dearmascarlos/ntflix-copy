import Gender from './gender'

const PreviewCard = ({ topMovies, setModalVisible, setModalContent }) => {
  const imageURL = 'https://image.tmdb.org/t/p/original'

  return (
    <div>
      <div
        className='h-28 w-48 bg bg-cover bg-center flex items-end relative rounded-sm hover:scale-125 cursor-pointer transition ease-in-out'
        style={{
          backgroundImage: `url(${imageURL}${topMovies?.backdrop_path})`
        }}
        onClick={() => {
          setModalVisible(true)
          setModalContent(topMovies)
        }}>
        <div className='absolute mt-auto h-14 inset-0 bg-gradient-to-t from-black '></div>
        <div className='z-10 p-1'>
          <h4 className='text-white text-xs'>
            {topMovies.original_title
              ? topMovies.original_title
              : topMovies.original_name}
          </h4>
          <span className='flex flex-wrap gap-2 text-[8px]'>
            <Gender id={topMovies.id} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default PreviewCard
