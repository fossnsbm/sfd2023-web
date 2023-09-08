import Image from 'next/image'

type Props = {}

const SfdBanner = (props: Props) => {
    return (
        <div className='relative h-[200px] md:h-[350px]'>
            <Image
                src='/images/sfd-3d.webp'
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-2xl'
                alt='sfd banner'
            />
        </div>
    )
}

export default SfdBanner