import OlderArrow from 'public/svg/OlderArrow.svg'

const Older = () => {
    return (
        <div
            style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
                marginBottom: '3em',
                marginLeft: '2em'
            }}
        >
            <OlderArrow />
            <p style={{ fontFamily: 'Newsreader', color: 'white' }}><a className='link' href='https://old.valencassa.dev'>Old portfolio</a></p>
            
        </div>
    )
}

export default Older