import Image from 'next/image'

export const CoverImage = ({ src }) => {
  const imageWidth = 300
  const imageHeight = 400

  return (
    <figure
      className='cover'
      style={{
        position: 'relative',
        width: imageWidth,
        height: imageHeight,
      }}
    >
      <Image
        src={src}
        alt='test'
        sizes='100vw'
        style={{ objectFit: 'cover' }}
        fill
      />
    </figure>
  )
}
