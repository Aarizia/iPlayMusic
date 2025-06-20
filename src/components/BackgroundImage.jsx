import './BackgroundImage.scss';

export default function BackgroundImage({ imageUrl, imageAltText, aspectRatio = 'initial', gradientCanvas = false, height = 'auto', blur = 0 }) {

    return (
        <>
            {imageUrl ? 
                <img src={imageUrl} style={{aspectRatio: aspectRatio, height: height, filter: `blur(${blur})`}} className='background-image' alt={imageAltText} />
            :
                <></>
            }
            {imageUrl && gradientCanvas ? 
                <div style={{aspectRatio: aspectRatio}} className="gradient-canvas"></div>
            :
                <></>
            }
        </>
    )
}