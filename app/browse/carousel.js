import PreviewCard from './previewCard'

const Carousel = ({
  topMovies,
  title,
  setModalVisible,
  setModalContent,
  type
}) => {
  return (
    <div className='mt-12 z-10'>
      <h2 className='text-white'>Trending {title}</h2>
      <div className='flex flex-row gap-2 w-full overflow-x-auto scrollbar-hide rounded-sm'>
        {topMovies?.map((movie, i) => (
          <PreviewCard
            key={i}
            topMovies={movie}
            setModalVisible={setModalVisible}
            setModalContent={setModalContent}
            type={type}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
